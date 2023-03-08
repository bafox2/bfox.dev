import type { NextPage } from "next";
import Hero from "../Components/Hero";
import Head from "next/head";
import Image from "next/legacy/image";
import Projects from "../Components/Projects";
import Minis from "../Components/Minis";
import Skills from "../Components/Skills";
import HeroSection from "../Components/HeroSection";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };

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
        <Projects />
        <h2 className={styles.bigHeader}>Minis</h2>
        <Minis />
        <h2 className={styles.bigHeader}>Skills</h2>
        <Skills />
      </main>
    </>
  );
};

export default Home;
