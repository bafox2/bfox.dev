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

  return (
    <>
      <main className={styles.mainContent}>
        {/* <button onClick={returnToTop} className={styles.returnTop}>
          <div>↑Return to Top</div>
        </button> */}
        <HeroSection background="'/images/hero.jpg'">
          <>
            <h1 className={styles.heroHeader}>Ben Fox</h1>
            <h2 className={styles.heroSubHeader}>Web Developer</h2>
          </>
        </HeroSection>

        <h2 className={styles.bigHeader}>Projects</h2>
        <div className={styles.projects__container}>{projectList}</div>

        <HeroSection background="'/images/hero.jpg'">
          <>
            <h2 className={styles.heroHeader}>Stats</h2>
            <h3 className={styles.heroSubHeader}>
              Some I am proud of, others are just a side effect that web
              development has had on me
            </h3>
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
          <>
            <h2 className={styles.heroHeader}>Toolset</h2>
            <h3 className={styles.heroSubHeader}>
              I am always learning new things, but these are the tools I've
              reached for again and again
            </h3>
          </>
        </HeroSection>
        <Skills />
      </main>
    </>
  );
};

export default Home;
