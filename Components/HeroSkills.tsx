import AppearItem from "./ItemAppear";
import { fadeInUp } from "../styles/variants";
import styles from "../styles/HeroSkills.module.css";
import Image from "next/image";
import toolbox from "../public/assets/toolbox.svg";
import wrench from "../public/assets/wrench.svg";
import drill from "../public/assets/drill.svg";
import skills from "../skills";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BrandToggle from "./BrandToggle";

interface Skill {
  name: string;
  description: string;
  link: string;
  svg: string;
  number: number;
  key: number;
}

export default function HeroSkills() {
  const parsedSkills = JSON.parse(JSON.stringify(skills));

  const skillsList = parsedSkills.map((skill: Skill) => (
    <div className={styles.skill__card} key={skill.number}>
      <div className={styles.skillHeader}>
        <h2 className={styles.skillTitle}>{skill.name}</h2>
        <div className={styles.skillPic}>
          <Image src={skill.svg} height={100} width={100} alt="" />
        </div>
      </div>
      <div className={styles.skillBody}>
        <p className={styles.skillText}>{skill.description}</p>
      </div>
    </div>
  ));

  return (
    <div
      className={`${styles.heroSection} ${styles.skills__container} ${styles.sand}`}
    >
      <div className={styles.tools__container}>
        <p className={styles.tool__text}>What's in the (tool) box</p>
        <div className={styles.svgContainer}>
          <Image
            src={wrench}
            alt="toolbox"
            style={{ stroke: "red", fill: "red" }}
          />
        </div>{" "}
        <div className={styles.svgContainer}>
          <Image
            src={drill}
            alt="toolbox"
            style={{ stroke: "red", fill: "red" }}
          />
        </div>
        <div className={styles.toolbox__card}>
          <Image
            src={toolbox}
            alt="toolbox"
            style={{ stroke: "red", fill: "red" }}
          />
        </div>
        {skillsList}
      </div>
    </div>
  );
}
