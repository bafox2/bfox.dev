const webdriver = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const fs = require('fs')

driver = new webdriver.Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless()).build()

//get title, permalink, user.username, user.country, user.city, and cover.thumb_url from the json data on the page 'https://www.artstation.com/users/benfox6/likes'
driver
  .get('https://www.artstation.com/users/benfox6/likes')
  //wait for the page to load by checking for the #rawdata-tab element
  .then(() => driver.wait(webdriver.until.elementsLocated(webdriver.By.css('#rawdata-tab')), 15000))
  //click on the #rawdata-tab element
  .then(() => driver.findElement(webdriver.By.css('#rawdata-tab')).click())
  //find the pre element with the raw json data
  .then(() => driver.findElement(webdriver.By.css('pre')))
  //get the textContent of the pre element
  .then((pre) => pre.getAttribute('textContent'))
  //parse the json data
  .then((textContent) => JSON.parse(textContent))
  //log
  //map over the data and get the title, permalink, user.username, user.country, user.city, and cover.thumb_url
  .then((data) =>
    data.data.map((item) => ({
      title: item.title,
      permalink: item.permalink,
      username: item.user.username,
      country: item.user.country,
      city: item.user.city,
      thumb_url: item.cover.small_square_url,
    }))
  )
  //log the data
  //save the data to a json file
  .then((data) => fs.writeFile('art.json', JSON.stringify(data), (err) => console.log(err)))
  //disconnect from the browser
  .then(() => driver.quit())
