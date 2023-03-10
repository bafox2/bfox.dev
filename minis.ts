import spoilerPic from "./public/images/spoilers.png";
import { StaticImageData } from "next/image";
type Mini = {
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
  github: string;
  website: string;
  lessons: string;
  imagePath: {
    url: StaticImageData;
    width: number;
    height: number;
    alt: string;
  };
  date?: string;
  number?: number;
};

const minis: Mini[] = [
  {
    name: "Twitch Spoiler Avoider",
    reason:
      "Twitch does not incentivize viewers to watch vods, and I wanted to watch vods without knowing what happens",
    description:
      "Decide what you are okay with between titles, length, thumbnails, and vod playback progress, and the extension will hide the rest",
    builtWith: [
      {
        name: "Firefox Extension",
        link: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions",
      },
    ],
    date: "December 2022",
    status: {
      text: "Deployed",
      color: "green",
    },
    github: "https://github.com/bafox2/Disable-Twitch-Spoilers",
    website:
      "https://addons.mozilla.org/en-US/firefox/addon/twitch-spoiler-avoider",
    lessons:
      "Extensions make the web one of the coolest places, building off of monolithic websites is rewarding",
    imagePath: {
      url: spoilerPic,
      width: 300,
      height: 500,
      alt: "Twitch Spoiler Avoider screenshot",
    },
    number: 1,
  },
];

export default minis;
