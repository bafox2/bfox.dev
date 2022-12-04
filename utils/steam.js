const webdriver = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const fs = require('fs')

driver = new webdriver.Builder()
  .forBrowser('firefox')
  .setFirefoxOptions(new firefox.Options().headless())
  .build()


//get the next game with the same css identifiers
// driver.get('https://steamcommunity.com/profiles/76561198058884510')
//   .then(() => driver.wait(webdriver.until.elementsLocated(webdriver.By.css('.game_capsule')), 15000))
//   .then(() => driver.findElements(webdriver.By.css('.game_capsule')))
//   .then((game_capsules) => game_capsules[1].getAttribute('src'))
//   .then((src) => console.log(src))
//   .then(() => driver.findElements(webdriver.By.css('.game_name')))
//   .then((game_names) => game_names[1].getAttribute('textContent'))
//   .then((innerHTML) => console.log(innerHTML))
  

driver.get('https://steamcommunity.com/profiles/76561198058884510')
  .then(() => driver.wait(webdriver.until.elementsLocated(webdriver.By.css('.game_capsule')), 15000))
  .then(() => driver.findElements(webdriver.By.css('.game_capsule')))
  //map over the game_capsules array and get the src attribute of each element, resolving the promise
  .then((game_capsules) => Promise.all(game_capsules.map((game_capsule) => game_capsule.getAttribute('src'))))
  //add an object with the src key and src attribute as the value to the games array
  .then((srcs) => games = srcs.map((src) => ({src})))
  .then(() => driver.findElements(webdriver.By.css('.game_name')))
  .then((game_names) => Promise.all(game_names.map((game_name) => game_name.getAttribute('textContent'))))
  //add the game name to the games array
  .then((game_names) => games = games.map((game, index) => ({...game, name: game_names[index]})))
  //write the games array to a json file
  .then(() => fs.writeFile('steam.json', JSON.stringify(games), (err) => console.log(err)))
  .then(() => console.log(games))
  .then(() => driver.quit())
  
  //combine the two arrays into one array of objects
