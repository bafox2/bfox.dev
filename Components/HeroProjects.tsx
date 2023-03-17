import AppearItem from "./ItemAppear";
import {} from "../styles/variants";
import styles from "../styles/HeroSection.module.css";
import HeroSection from "./HeroSection";

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
    <div className={`${styles.heroSection} ${styles.blue}`}>
      <AppearItem variants={fadeInUp}>
        <div className={styles.heroContainer}>
          <p className={styles.heroText}>A</p>
          <p className={styles.heroText}>Teacher</p>
          <p className={styles.heroText}>Turned</p>
          <p className={styles.heroText}>Developer</p>
        </div>
      </AppearItem>
    </div>
  );
}
