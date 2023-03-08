import styles from '../styles/Projects.module.css'
import skills from '../skills'
import Image from 'next/legacy/image'

interface Skill {
  name: string
  description: string
  link: string
  svg: string
  number: number
}

export default function Skills() {
  const parsedSkills = JSON.parse(JSON.stringify(skills))

  const skillsList = parsedSkills.map((skill: Skill) => (
    <div className={styles.skillDiv} key={skill.number}>
      <div className={styles.skillHeader}>
        <h2 className={styles.skillTitle}>{skill.name}</h2>
        <div className={styles.skillPic}>
          <Image src={skill.svg} height={100} width={100} alt="" />
        </div>
      </div>
      <div className={styles.skillBody}>
        <p className={styles.skillText}>{skill.description}</p>
      </div>
    </div>
  ))

  return <div className={styles.skillsList}>{skillsList}</div>
}
