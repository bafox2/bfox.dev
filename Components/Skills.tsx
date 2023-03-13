import { useState } from "react";
import styles from "../styles/Projects.module.css";
import skills from "../skills";
import Image from "next/legacy/image";
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

export default function Skills() {
  const [motion, setMotion] = useState(true);
  const parsedSkills = JSON.parse(JSON.stringify(skills));

  const skillsList = parsedSkills.map((skill: Skill) => (
    <div className={styles.skillDiv} key={skill.number}>
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

  if (motion) {
    return (
      <div className={styles.skillsContainer}>
        <BrandToggle value={motion} setValue={setMotion} />
        <Marquee
          gradient={false}
          speed={50}
          direction="left"
          pauseOnHover
          pauseOnClick
        >
          {skillsList.filter((skill: Skill) => {
            return skill.key % 2 === 0;
          })}
        </Marquee>
        <Marquee
          gradient={false}
          speed={50}
          direction="right"
          pauseOnHover
          pauseOnClick
        >
          {skillsList.filter((skill: Skill) => {
            return skill.key % 2 === 1;
          })}
        </Marquee>
      </div>
    );
  } else {
    return (
      <div className={styles.skillsContainer}>
        <BrandToggle value={motion} setValue={setMotion} />
        <div className={styles.skillsList}>{skillsList}</div>
      </div>
    );
  }
}
