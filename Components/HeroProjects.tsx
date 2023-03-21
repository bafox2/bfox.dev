import AppearItem from "./ItemAppear";
import {} from "../styles/variants";
import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import atDesk from "../public/assets/atDesk.svg";
import atBoard from "../public/assets/atBoard.svg";
import bg1 from "../public/assets/bgs/multiplesmear.svg";
import bg2 from "../public/assets/bgs/path15982.svg";

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HeroProjects() {
  return (
    <div className={`${styles.heroSection} ${styles.blue} ${styles.opener}`}>
      <AppearItem variants={fadeInUp} className={styles.projects__hero}>
        <>
          <p className={`${styles.heroText} ${styles.projects__line1}`}>
            Teacher
          </p>
          <p className={`${styles.heroText} ${styles.projects__line2}`}>
            Turned
          </p>
          <p className={`${styles.heroText} ${styles.projects__line3}`}>
            Developer
          </p>
          <Image
            src={atDesk}
            alt="at desk"
            width={500}
            height={500}
            className={styles.atDesk}
          />
          <Image
            src={bg1}
            alt="bg1"
            width={500}
            height={500}
            className={styles.bg1}
          />
          <Image
            src={atBoard}
            alt="at board"
            width={500}
            height={500}
            className={styles.atBoard}
          />
          <Image
            src={bg2}
            alt="bg2"
            width={500}
            height={500}
            className={styles.bg2}
          />
        </>
      </AppearItem>
      <div className={styles.svgContainer}>
        {/* <Image src={toolbox} alt="toolbox" fill={true} /> */}
      </div>
    </div>
  );
}
