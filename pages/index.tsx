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
import projects from "../projects.js";

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
        imagePathURL={project.imagePath}
      />
    );
  });

  return (
    <>
      <main className={styles.mainContent}>
        <button onClick={returnToTop} className={styles.returnTop}>
          <div>
            <Image
              src="/images/up.svg"
              height={30}
              width={40}
              alt="return to top"
            />
          </div>
        </button>
        <HeroSection background="'/images/hero.jpg'">
          <>
            <h1 className={styles.heroHeader}>Ben Fox</h1>
            <h2 className={styles.heroSubHeader}>Web Developer</h2>
          </>
        </HeroSection>
        <h2 className={styles.bigHeader}>Objective</h2>
        <Hero />
        <h2 className={styles.bigHeader}>Projects</h2>
        {projectList}

        <HeroSection background="'/images/hero.jpg'">
          <>
            <h2 className={styles.heroHeader}>Stats</h2>
            <h3 className={styles.heroSubHeader}>
              Some I am proud of, others are just a side effect that web
              development has had on me
            </h3>
          </>
        </HeroSection>
        <Stats stats={stats} />
        <h2 className={styles.bigHeader}>Minis</h2>
        <Minis />
        <h2 className={styles.bigHeader}>Skills</h2>
        <Skills />
      </main>
    </>
  );
};

export default Home;
