import AppearItem from "./ItemAppear";
import {} from "../styles/variants";
import styles from "../styles/HeroSection.module.css";
import bg from "../public/assets/bgs/BG-yel-orng.svg";
import Image from "next/image";
import { ReactNode } from "react";

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const journeys: string[] = [
  "MDN",
  "Hackerrank",
  "JavaScriptJabber",
  "Udemy",
  "r/WebDev",
  "W3Schools",
  "Pluralsight",
  "The-Odin-Project",
  "Level-Up-Tutorials",
  "YouTube   ",
];

const journeys2: string[] = [
  "CodeSandbox",
  "Dev.to",
  "Stack-Overflow",
  "CSS-Tricks",
  "Medium",
  "JS-Party",
  "Pod-Rocket",
  "Web.dev",
  "Fireship",
  "LinkedIn",
  "CodeNewbie   ",
];

const journeys3: string[] = [
  "CodePen",
  "SyntaxFM",
  "Coding-Blocks",
  "Smashing-Magazine",
  "Log-Rocket-Tutorials",
  "LinkedIn",
  "CodeNewbie   ",
];

const journeyString = (arr: string[]) => arr.join("   ");

const TextRing = ({ children, side }: { children: string; side: number }) => {
  const CHARS = children.split("");
  const INNER_ANGLE = 360 / CHARS.length;
  return (
    // <AppearItem delay={1} duration={2.0} variants={fadeInUp}>
    <div
      className={styles.textring}
      style={{
        "--total": CHARS.length,
        "--radius": side / Math.sin(INNER_ANGLE / (180 / Math.PI)),
      }}
    >
      {CHARS.map((char, index) => (
        <span style={{ "--index": index }}>{char}</span>
      ))}
    </div>
    // </AppearItem>
  );
};

export default function HeroStats() {
  return (
    <div
      className={`${styles.heroSection} ${styles.stats__container} ${styles.purple}`}
    >
      {/* <div className={styles.svgContainer}>
        <Image
          src={bg}
          fill={true}
          alt={"yellow orange ambiance"}
          className={styles.med}
        />
      </div> */}

      <div className={styles.stats__hero}>
        <p className={styles.statsText}>Journeying</p>
        <p className={styles.statsText}>Through</p>
        <p className={styles.statsText}>Code</p>
        <p className={styles.statsText}>By</p>
        <TextRing side={1.2}>{journeyString(journeys)}</TextRing>
        <TextRing side={1.4}>{journeyString(journeys2)}</TextRing>
        <TextRing side={1.3}>{journeyString(journeys3)}</TextRing>
      </div>
    </div>
  );
}

// <div>
//   <AppearItem delay={1.5} duration={2.0} variants={fadeInUp}>
//     <p className={styles.statsText}>Numbers</p>
//   </AppearItem>
//   <AppearItem delay={2.5} duration={2.0} variants={fadeInUp}>
//     <p className={styles.statsText}>MDN</p>
//   </AppearItem>
//   <AppearItem delay={3.5} duration={1.0} variants={fadeInUp}>
//     <p className={styles.statsText}>Podcasts</p>
//   </AppearItem>
//   <AppearItem delay={1.0} duration={1.0} variants={fadeInUp}>
//     <p className={styles.statsText}>Udemy</p>
//   </AppearItem>
//   <AppearItem delay={2.0} duration={3.0} variants={fadeInUp}>
//     <p className={styles.statsText}>Mentoring</p>
//   </AppearItem>
//   <AppearItem delay={3.0} duration={1.0} variants={fadeInUp}>
//     <p className={styles.statsText}>Twitch</p>
//   </AppearItem>
//   <AppearItem delay={1.5} duration={2.5} variants={fadeInUp}>
//     <p className={styles.statsText}>Pluralsight</p>
//   </AppearItem>
//   <AppearItem delay={2.5} duration={5.0} variants={fadeInUp}>
//     <p className={styles.statsText}>Odin Project</p>
//   </AppearItem>
//   <AppearItem delay={3.5} duration={1.0} variants={fadeInUp}>
//     <p className={styles.statsText}>Docs</p>
//   </AppearItem>
//   <AppearItem delay={1.0} duration={1.5} variants={fadeInUp}>
//     <p className={styles.statsText}>Codesandbox Examples</p>
//   </AppearItem>
//   <AppearItem delay={0.5} duration={2.0} variants={fadeInUp}>
//     <p className={styles.statsText}>Stack Overflow</p>
//   </AppearItem>
//   <AppearItem delay={2.0} duration={2.5} variants={fadeInUp}>
//     <p className={styles.statsText}>YouTube</p>
//   </AppearItem>
//   <AppearItem delay={3.0} duration={3.0} variants={fadeInUp}>
//     <p className={styles.statsText}>LinkedIn</p>
//   </AppearItem>
// </div>;
