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
  },
};

const journeys: string[] = [
  "Numbers",
  "MDN",
  "Podcasts",
  "Udemy",
  "Mentoring",
  "Twitch",
  "Pluralsight",
  "Odin Project",
  "Docs",
  "Dev.to",
  "CodeSandbox Examples",
  "Stack Overflow",
  "YouTube",
  "LinkedIn",
  "Repo Forks",
  "Git Rebases",
];

export default function HeroProjects() {
  return (
    <div className={`${styles.heroSection} ${styles.purple}`}>
      <div className={styles.statsContainer}>
        <p className={styles.statsText}>A</p>
        <p className={styles.statsText}>Journey</p>
        <p className={styles.statsText}>In</p>
        <div>
          <AppearItem delay={1.5} duration={2.0} variants={fadeInUp}>
            <p className={styles.statsText}>Numbers</p>
          </AppearItem>
          <AppearItem delay={2.5} duration={2.0} variants={fadeInUp}>
            <p className={styles.statsText}>MDN</p>
          </AppearItem>
          <AppearItem delay={3.5} duration={1.0} variants={fadeInUp}>
            <p className={styles.statsText}>Podcasts</p>
          </AppearItem>
          <AppearItem delay={1.0} duration={1.0} variants={fadeInUp}>
            <p className={styles.statsText}>Udemy</p>
          </AppearItem>
          <AppearItem delay={2.0} duration={3.0} variants={fadeInUp}>
            <p className={styles.statsText}>Mentoring</p>
          </AppearItem>
          <AppearItem delay={3.0} duration={1.0} variants={fadeInUp}>
            <p className={styles.statsText}>Twitch</p>
          </AppearItem>
          <AppearItem delay={1.5} duration={2.5} variants={fadeInUp}>
            <p className={styles.statsText}>Pluralsight</p>
          </AppearItem>
          <AppearItem delay={2.5} duration={5.0} variants={fadeInUp}>
            <p className={styles.statsText}>Odin Project</p>
          </AppearItem>
          <AppearItem delay={3.5} duration={1.0} variants={fadeInUp}>
            <p className={styles.statsText}>Docs</p>
          </AppearItem>
          <AppearItem delay={1.0} duration={1.5} variants={fadeInUp}>
            <p className={styles.statsText}>Codesandbox Examples</p>
          </AppearItem>
          <AppearItem delay={0.5} duration={2.0} variants={fadeInUp}>
            <p className={styles.statsText}>Stack Overflow</p>
          </AppearItem>
          <AppearItem delay={2.0} duration={2.5} variants={fadeInUp}>
            <p className={styles.statsText}>YouTube</p>
          </AppearItem>
          <AppearItem delay={3.0} duration={3.0} variants={fadeInUp}>
            <p className={styles.statsText}>LinkedIn</p>
          </AppearItem>
        </div>
      </div>
    </div>
  );
}