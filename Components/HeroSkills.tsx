import AppearItem from "./ItemAppear";
import { fadeInUp } from "../styles/variants";
import styles from "../styles/HeroSkills.module.css";
import Image from "next/image";
import toolbox from "../public/assets/toolbox.svg";
import wrench from "../public/assets/wrench.svg";
import drill from "../public/assets/drill.svg";

export default function HeroSkills() {
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
        <div className={styles.svgContainer}>
          <Image
            src={toolbox}
            alt="toolbox"
            style={{ stroke: "red", fill: "red" }}
          />
        </div>
      </div>
    </div>
  );
}
