
import styles from '../styles/Projects.module.css'
import skills from '../skills'
import Link from 'next/link'

interface Skill {
  name: string;
  description: string;
  link: string;
  number: number;
}


export default function Projects() {

  const parsedSkills = JSON.parse(JSON.stringify(skills))

  const skillsList = parsedSkills.map((project: Skill) => (
    <div className={styles.skillDiv} key={project.number}>
      <h2 className={styles.skillTitle}>{project.name}</h2>
      <p className={styles.skillTitle}>{project.description}</p>
      <a href={project.link}className={styles.skillLink}>{project.link}</a>
    </div>
  ))


  return (
    <div className={styles.skillsContainer}>
      <div className={styles.projectsHeader}>
        <h1>Skills</h1>
      </div>
      <div className={styles.skillsList}>
          {skillsList}
      </div>
    </div>
  )
}
