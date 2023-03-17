import AppearItem from "./ItemAppear";
import { fadeInUp } from "../styles/variants";
import styles from "../styles/HeroSection.module.css";
import HeroSection from "./HeroSection";
import Image from "next/image";
import toolbox from "../public/assets/toolbox.svg";

export default function HeroSkills() {
  return (
    <div className={`${styles.heroSection} ${styles.sand}`}>
      <div className={styles.svgContainer}>
        <Image src={toolbox} alt="toolbox" style={{ fill: "red" }} />
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
