import letterPic from './public/images/letter.png'
import trackficPic from './public/images/trackfic.png'
import blogPic from './public/images/blog.png'

const projects = [
  {
    name: 'Trackfic',
    reason: 'Google maps projection into the future is not good',
    description:
      'Set a route, and a schedule, and let the website gather the data for you. Then you can make an informed decision.',
    builtWith: 'Typescript, Express, MongoDB, Nextjs, Cron, Mantine UI, Open Maps, Google Maps API, SWR',
    date: 'September - October 2022',
    status: 'Deployed and iterating on features',
    github: 'https://github.com/bafox2/trackfic-client',
    website: 'trackfic-client.vercel.app/',
    lessons:
      'I had not worked much with cron before, and I am so thankful that it exists. Working with a UI library did save more time than I thought it would have. Having some parts of the models interact with the data felt a bit new, but it was a good learning experience.',
    imagePath: trackficPic,
    number: 1,
  },
  {
    name: 'Letter Starter',
    reason:
      "You have to write a lot of cover letters when you're looking for a job, and sometimes you know what to say, but getting started is hard.",
    description:
      'Input a job description, your skills, a company, and their highlights, and the website will structure a letter for you.',
    builtWith: "Nextjs, MongoDB, Open AI's GPT-3, Next-Auth, SASS, React-Hook-Form",
    date: 'July - August 2022',
    status: 'Deployed and retired',
    github: 'https://github.com/bafox2/gpt-cover',
    website: 'https://bfox-coverletter.vercel.app/',
    lessons:
      'There are really, really powerful APIs out there. Coordinating them in a way that is useful is rewarding.',
    imagePath: letterPic,
    number: 2,
  },
  {
    name: 'Learnsplain',
    reason: 'Am I really a web developer if I have not made a blog website?',
    description: 'Learnsplaining was one of my favorite ways to help my students learn, and ',
    builtWith: 'Express, JWTs, Passport, Mongoose, React-Router, React-Quill',
    date: 'May - June 2022',
    status: 'Deployed and retired',
    github: 'https://github.com/bafox2/bfox-blogsite',
    website: 'https://bfoxblogwebsite.herokuapp.com/',
    lessons:
      "Starting from scratch really lead me to learn in the 'right' direction. Compared to vanilla JS, React makes a lot of things less painful.",
    imagePath: blogPic,
    number: 3,
  },
  {
    name: 'Chat-dle',
    reason: 'I have watched twitch all my life and I wanted to give back to all the chats that have given me joy through my years.',
    description: 'A wordle-like game that uses the chat from twitch streams.',
    builtWith: 'Nextjs, Tailwind, Twitch API, Socket.io, Node.js',
    date: 'February 2023 - Present',
    status: 'Deployed and iterating on features',
    github: 'github.com/bafox2/chat-dle',
    website: 'https://chat-dle.vercel.app/',
    lessons:
      'I have not worked with sockets before, and I am so thankful that they exist. I have also not worked with a UI library before, and I am so thankful that they exist.',
    imagePath: letterPic,
    number: 4,
  },
  {
    name: 'Oyo Farms',
    reason: 'I wanted to help my friend with his business.',
    description: 'A website for a local farm.',
    builtWith: 'Nextjs, Tailwind, Node.js, MongoDB',
    date: 'December 2021 - Present',
    status: 'Deployed and iterating on features',
    github: 'github.com/bafox2/oyo-farms',
    website: 'https://oyo-farms.vercel.app/',
    lessons: 'I have not worked with a UI library before, and I am so thankful that they exist.',
    imagePath: letterPic,
    number: 5,
  }
]

export default projects
