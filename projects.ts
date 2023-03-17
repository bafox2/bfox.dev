import letterPic from "./public/images/letter.png";
import trackficPic from "./public/images/trackfic.png";
import blogPic from "./public/images/blog.png";
import letterLogin from "./public/images/LetterLogin.png";
import letterHero from "./public/images/LetterHero.png";
import chatdle from "./public/images/ChatdleUI.png";
import trackficHero from "./public/images/TrackficHero.png";
import trackficDash from "./public/images/TrackficDash.png";
import trackficForm from "./public/images/TrackficForm.png";
import { StaticImageData } from "next/image";

type Project = {
  name: string;
  description: string;
  reason: string;
  builtWith: {
    name: string;
    link: string;
  }[];
  status: {
    text: string;
    color: string;
  };
  date?: string;
  github: string;
  website: string;
  lessons: string;
  imagePath: {
    url: StaticImageData;
    width: number;
    height: number;
    alt: string;
  }[];
  number?: number;
};

const projects: Project[] = [
  {
    name: "Trackfic",
    reason: "Google maps projection into the future is not good",
    description:
      "Set a route, and a schedule, and let the website gather the data for you. Then you can make an informed decision.",
    builtWith: [
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      { name: "Express", link: "https://expressjs.com/" },
      { name: "MongoDB", link: "https://mongodb.com/" },
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Cron", link: "https://www.npmjs.com/package/cron" },
      { name: "Mantine UI", link: "https://mantine.dev/" },
      { name: "Open Maps", link: "https://openmaptiles.org/" },
      {
        name: "Google Maps API",
        link: "https://developers.google.com/maps/documentation/javascript/overview",
      },
      { name: "SWR", link: "https://swr.vercel.app/" },
    ],

    date: "September - October 2022",
    status: { text: "Deployed and iterating on features", color: "green" },
    github: "https://github.com/bafox2/trackfic-client",
    website: "trackfic-client.vercel.app/",
    lessons:
      "I had not worked much with cron before, and I am so thankful that it exists. Working with a UI library did save more time than I thought it would have. Having some parts of the models interact with the data felt a bit new, but it was a good learning experience.",
    imagePath: [
      {
        url: trackficHero,
        width: 861,
        height: 848,
        alt: "Trackfic screenshot",
      },
      {
        url: trackficDash,
        width: 739,
        height: 560,
        alt: "Trackfic screenshot",
      },
      {
        url: trackficForm,
        width: 857,
        height: 380,
        alt: "Trackfic screenshot",
      },
    ],
    number: 1,
  },
  // {
  //   name: "Learnsplain",
  //   reason: "Am I really a web developer if I have not made a blog website?",
  //   description:
  //     "Learnsplaining was one of my favorite ways to help my students learn, and ",
  //   builtWith: [
  //     {
  //       name: "Express",
  //       link: "https://expressjs.com/",
  //     },
  //     {
  //       name: "JWT",
  //       link: "https://jwt.io/",
  //     },
  //     { name: "Passport", link: "http://www.passportjs.org/" },
  //     { name: "Mongoose", link: "http://www.mongoosejs.com" },
  //     { name: "Quillj", link: "https://quilljs.com/" },
  //     { name: "React-Router", link: "https://reactrouter.com/" },
  //   ],

  //   date: "May - June 2022",
  //   status: { text: "Deployed and retired", color: "red" },
  //   github: "https://github.com/bafox2/bfox-blogsite",
  //   website: "https://bfoxblogwebsite.herokuapp.com/",
  //   lessons:
  //     "Starting from scratch really lead me to learn in the 'right' direction. Compared to vanilla JS, React makes a lot of things less painful.",
  //   imagePath: {
  //     url: blogPic,
  //     width: 600,
  //     height: 400,
  //     alt: "Learnsplain screenshot",
  //   },
  //   number: 3,
  // },
  {
    name: "Chat-dle",
    reason:
      "I have watched twitch all my life and I wanted to give back to all the chats that have given me joy through my years.",
    description: "A wordle-like game that uses the chat from twitch streams.",
    builtWith: [
      {
        name: "Nextjs",
        link: "https://nextjs.org/",
      },
      {
        name: "Tailwind",
        link: "https://tailwindcss.com/",
      },
      {
        name: "MongoDB",
        link: "https://mongodb.com/",
      },
      {
        name: "Socket.io",
        link: "https://socket.io/",
      },
      {
        name: "Twitch API",
        link: "https://dev.twitch.tv/docs/api/",
      },
    ],
    date: "February 2023 - Present",
    status: {
      text: "Deployed and iterating on features",
      color: "green",
    },
    github: "github.com/bafox2/chat-dle",
    website: "https://chat-dle.vercel.app/",
    lessons:
      "I have not worked with sockets before, and I am so thankful that they exist. I have also not worked with a UI library before, and I am so thankful that they exist.",
    imagePath: [
      {
        url: chatdle,
        width: 600,
        height: 338,
        alt: "Chat-dle screenshot",
      },
    ],
    number: 4,
  },
  {
    name: "Oyo Farms",
    reason: "I wanted to help my friend with his business.",
    description: "A website for a local farm.",
    builtWith: [
      {
        name: "Nextjs",
        link: "https://nextjs.org/",
      },
      {
        name: "Tailwind",
        link: "https://tailwindcss.com/",
      },
      {
        name: "MongoDB",
        link: "https://mongodb.com/",
      },
      {
        name: "Sanity",
        link: "https://www.sanity.io/",
      },
    ],
    date: "December 2021 - Present",
    status: { text: "Deployed and iterating on features", color: "green" },
    github: "github.com/bafox2/oyo-farms",
    website: "https://oyo-farms.vercel.app/",
    lessons:
      "I have not worked with a UI library before, and I am so thankful that they exist.",
    imagePath: [
      {
        url: letterPic,
        width: 600,
        height: 400,
        alt: "Oyo Farms screenshot",
      },
    ],
    number: 5,
  },
  {
    name: "Letter Starter",
    reason:
      "You have to write a lot of cover letters when you're looking for a job, and sometimes you know what to say, but getting started is hard.",
    description:
      "Input a job description, your skills, a company, and their highlights, and the website will structure a letter for you.",
    builtWith: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "MongoDB", link: "https://mongodb.com/" },
      { name: "GPT3", link: "https://openai.com/blog/openai-api/" },
      { name: "Next-Auth", link: "https://next-auth.js.org/" },
      { name: "SCSS", link: "https://sass-lang.com/" },
      { name: "React-Hook-Form", link: "https://react-hook-form.com/" },
    ],

    date: "July - August 2022",
    status: { text: "Deployed and retired", color: "yellow" },
    github: "https://github.com/bafox2/gpt-cover",
    website: "https://bfox-coverletter.vercel.app/",
    lessons:
      "There are really, really powerful APIs out there. Coordinating them in a way that is useful is rewarding.",
    imagePath: [
      {
        url: letterHero,
        width: 861,
        height: 848,
        alt: "Letter Starter screenshot",
      },
      {
        url: letterLogin,
        width: 680,
        height: 658,
        alt: "Letter Starter screenshot",
      },
    ],
    number: 2,
  },
];

export default projects;
