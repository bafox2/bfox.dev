import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Resume.module.css'

const Ben: NextPage = () => {
  return (
    <>
      <main className={styles.resume}>
        <h1>Resume</h1>
        <p>
          I am a teacher turned developer looking to join a team of passionate developers to build worthwhile products.
        </p>
        <section className={styles.resumeSection}>
          <h2 className={styles.resumeHeading}>Experience</h2>
          <div className={styles.resumeVertical}>
            <div className={styles.resumeEntry}>
              <p className={styles.date}>
                <em>2017 - 2022</em>
              </p>
              <h3 className={`${styles.resumePosition} ${styles.resumeCategory}`}>Business Teacher</h3>
              <p className={styles.resumeLocation}>
                <a href="https://herndonhs.fcps.edu/">Herndon High School</a>
              </p>
              <ul className={styles.resumeList}>
                <li> Department lead for Digital Applications, a English Language Learner tech class</li>{' '}
                <li>Inaugurated Special Education Personal Finance course</li>
                <li>
                  Chaired the {"'"}We Are Herndon{"'"} committee integrating community into school culture.
                </li>
                <li>
                  Lead Mentor to students from nontraditional backgrounds, focusing on goalsetting in academic, social,
                  and personal areas
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.resumeSection}>
          <h2 className={styles.resumeHeading}>Education</h2>
          <div className={styles.resumeVertical}>
            <div className={styles.resumeEntry}>
              <p className={styles.date}>
                <em>2012 - 2016</em>
              </p>
              <h3 className={`${styles.resumePosition} ${styles.resumeCategory}`}>Master of Education</h3>
              <p className={styles.resumeLocation}>
                <a href="https://www.vt.edu/">Virginia Tech</a>
              </p>
              <p>Specialty in Career and Technical Education</p>
            </div>
            <div className={styles.resumeEntry}>
              <p className={styles.date}>
                <em>2016 - 2017</em>
              </p>
              <h3 className={`${styles.resumePosition} ${styles.resumeCategory}`}>
                Bachelor of Science in Business Information Technology
              </h3>
              <p className={styles.resumeLocation}>
                <a href="https://www.vt.edu/">Virginia Tech</a>
              </p>
              <p>Specialty in Decision Support Systems</p>
            </div>
          </div>
        </section>
        <section className={`${styles.resumeSection} ${styles.skills}`}>
          <h2 className={styles.resumeHeading}>Skills</h2>
          <div className={styles.skillBucket}>
            <h3 className={styles.resumeCategory}>Languages</h3>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className={styles.skillBucket}>
            <h3 className={styles.resumeCategory}>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Express</li>
              <li>Node</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className={styles.skillBucket}>
            <h3 className={styles.resumeCategory}>Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className={styles.skillBucket}>
            <h3 className={styles.resumeCategory}>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>Heroku</li>
              <li>VS Code</li>
            </ul>
          </div>
        </section>
        <section className={styles.resumeSection}>
          <h2 className={styles.resumeHeading}>Other</h2>
          <div className={styles.resumeVertical}>
            <div className={styles.resumeEntry}>
              <p className={styles.date}>
                <em>2020 - 2022</em>
              </p>
              <h3 className={`${styles.resumePosition} ${styles.resumeCategory}`}>Trapeze Artist</h3>
              <p className={styles.resumeLocation}>
                <a href="https://washingtondc.trapezeschool.com/">Trapeze School New York, DC</a>
              </p>
              <ul className={styles.resumeList}>
                <li>Caught students for release tricks after a lesson</li>
                <li>Coached students through the process of building a trick for catching</li>
                <li>Communicated with team on student progress, rig upkeep, and personal physical status</li>
              </ul>
            </div>
            <div className={styles.resumeEntry}>
              <p className={styles.date}>
                <em>2020 - Present</em>
              </p>

              <h3 className={`${styles.resumePosition} ${styles.resumeCategory}`}>Basketball Coach</h3>
              <p className={styles.resumeLocation}>
                <a href="https://www.herndonathletics.org/">Herndon High School</a>
              </p>
              <ul className={styles.resumeList}>
                <li>School liaison for communication between players and fellow teachers</li>
                <li>Transportation coordinator for team travel</li>
              </ul>
            </div>
          </div>
        </section>
        <div className={styles.download}>
          <a href="/resume.pdf" download>
            Download more formal resume
          </a>
        </div>
      </main>
    </>
  )
}

export default Ben
