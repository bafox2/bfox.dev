//projects section, will have a header then a list of projects
//projects are imported from projects.json

import styles from '../styles/Projects.module.css'
import projects from '../projects'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  name: string
  reason: string
  description: string
  builtWith: string
  date: string
  status: string
  github: string
  website: string
  lessons: string
  imagePath: { src: string; height: string; width: string; blurDataURL: string; blurWidth: string; blurHeight: string }
  number: number
}

export default function Projects() {
  const parsedProjects = JSON.parse(JSON.stringify(projects))
  const projectList = parsedProjects.map((project: Project) => (
    <div className={styles.cardContainer} key={project.number}>
      <div className={styles.cardBody}>
        <div className={styles.cardLeft}>
          <div className={styles.cardPic}>
            <Image
              src={project.imagePath.src}
              width={1060}
              height={600}
              blurDataURL={'true'}
              alt={`homepage of ${project.name}`}
            />
          </div>
        </div>
        <div className={styles.cardRight}>
          <h2 className={styles.cardHeader}>{project.name}</h2>
          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Description</p>
            <p className={styles.rowInfo}>{project.description}</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Stack</p>
            <p className={styles.rowInfo}>{project.builtWith}</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Date</p>
            <p className={styles.rowInfo}>{project.date}</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Status</p>
            <p className={styles.rowInfo}>{project.status}</p>
          </div>

          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Lessons</p>
            <p className={styles.rowInfo}>{project.lessons}</p>
          </div>
          <div className={styles.cardButtons}>
            <Link href={project.github}>
              <a className={styles.projectButton}>Github</a>
            </Link>
            <Link href={project.website} className={`${styles.projectButton} ${styles.special}`}>
              <a className={`${styles.projectButton} ${styles.special}`}>Website</a>
            </Link>
          </div>
        </div>
      </div>

      <p>{project.number}</p>
    </div>
  ))

  return <div className={styles.projectsList}>{projectList}</div>
}
