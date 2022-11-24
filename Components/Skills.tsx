
import styles from '../styles/Projects.module.css'
import skills from '../skills'
import Image from 'next/image'

interface Skill {
  name: string;
  description: string;
  link: string;
  svg: string;
  number: number;
}


export default function Skills() {

  const parsedSkills = JSON.parse(JSON.stringify(skills))

  const skillsList = parsedSkills.map((skill: Skill) => (
    <div className={styles.skillDiv} key={skill.number}>
      <h2 className={styles.skillTitle}>{skill.name}</h2>
      <p className={styles.skillTitle}>{skill.description}</p>
      <div className={styles.skillImage}>
      <Image src={skill.svg} width={64} height={64} alt='' />
          </div>
      <a href={skill.link}className={styles.skillLink}>{skill.link}</a>
    </div>
  ))


  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsList}>
          {skillsList}
      </div>
    </div>
  )
}
