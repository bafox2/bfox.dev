import type { NextPage } from "next";
import Hero from "../Components/Hero";
import Head from "next/head";
import Image from "next/legacy/image";
import Projects from "../Components/Projects";
import Minis from "../Components/Minis";
import Skills from "../Components/Skills";
import HeroSection from "../Components/HeroSection";
import Project from "../Components/Project";
import Stats from "../Components/Stats";
import styles from "../styles/Home.module.css";
import stats from "../stats.js";
import projects from "../projects";
import ParallaxItem from "../Components/ItemParallax";
import AppearItem from "../Components/ItemAppear";
import { fadeInUp } from "../styles/variants";

import { motion } from "framer-motion";

const Home: NextPage = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };

  const projectList = projects.map((project) => {
    return (
      <Project
        name={project.name}
        description={project.description}
        reason={project.reason}
        builtWith={project.builtWith}
        status={project.status}
        github={project.github}
        website={project.website}
        lessons={project.lessons}
        imagePath={project.imagePath}
      />
    );
  });

  // topOffset?: number;
  // bottomOffset?: number;
  // range?: number;
  // damping?: number;
  // stiffness?: number;
  // mass?: number;

  return (
    <>
      <main className={styles.mainContent}>
        {/* <button onClick={returnToTop} className={styles.returnTop}>
          <div>↑Return to Top</div>
        </button> */}
        <HeroSection headerSpace={true} background="'/images/hero.jpg'">
          <>
            <AppearItem variants={fadeInUp}>
              <div className={styles.heroContainer}>
                <p className={styles.heroText}>A</p>
                <p className={styles.heroText}>Teacher</p>
                <p className={styles.heroText}>Turned</p>
                <p className={styles.heroText}>Developer</p>
              </div>
            </AppearItem>
          </>
        </HeroSection>
        <ParallaxItem>
          <h2 className={styles.bigHeader}>Projects</h2>
        </ParallaxItem>
        <div className={styles.projects__container}>{projectList}</div>

        <HeroSection background="'/images/hero.jpg'">
          <>
            <div className={styles.statsContainer}>
              <p className={styles.statsText}>A</p>
              <p className={styles.statsText}>Journey</p>
              <p className={styles.statsText}>In</p>
              <p className={styles.statsText}>Numbers</p>
            </div>
          </>
        </HeroSection>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Stats stats={stats} />
        </motion.div>
        <h2 className="test">Minis</h2>
        <Minis />
        <HeroSection background="'/images/hero.jpg'">
          <div className={styles.toolContainer}>
            <p className={styles.toolText}>What's</p>
            <p className={styles.toolText}>In</p>
            <p className={styles.toolText}>The</p>
            <p className={styles.toolText}>(Tool)</p>
            <p className={styles.toolText}>Box?</p>
          </div>
        </HeroSection>
        <Skills />
      </main>
    </>
  );
};

export default Home;
