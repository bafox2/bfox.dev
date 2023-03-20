import AppearItem from "./ItemAppear";
import { fadeInUp } from "../styles/variants";
import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import toolbox from "../public/assets/bgs/bluecube.svg";

export default function HeroSkills() {
  return (
    <div
      className={`${styles.heroSection} ${styles.skills__container} ${styles.sand}`}
    >
      <div className={styles.svgContainer}>
        <Image
          src={toolbox}
          alt="toolbox"
          style={{ stroke: "red", fill: "red" }}
        />
      </div>

      <div className={styles.tools__Container}>
        <p className={styles.toolText}>What's</p>
        <p className={styles.toolText}>In</p>
        <p className={styles.toolText}>The</p>
        <p className={styles.toolText}>(Tool)</p>
        <p className={styles.toolText}>Box?</p>
      </div>
    </div>
  );
}
