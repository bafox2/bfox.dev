import styles from '../styles/Projects.module.css'
import projects from '../projects'
import Link from 'next/link'
import Image from 'next/legacy/image'

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
      <div className={styles.cardHeader}>
        <h2 className={styles.cardHeaderTitle}>{project.name}</h2>
        <p className={styles.rowInfo}>{project.description}</p>
      </div>
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
            <Link href={project.github} className={styles.projectButton}>
              Github
            </Link>
            <Link href={project.website} className={`${styles.projectButton} ${styles.special}`}>
              Website
            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>date</p>
        <p className={styles.rowInfo}>{project.date}</p>
      </div>
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>status</p>
        <p className={styles.rowInfo}>{project.status}</p>
      </div>
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>github</p>
        <p className={styles.rowInfo}><Link href={project.github}>{project.github}</Link></p>
      </div>
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>website</p>
        <p className={styles.rowInfo}><Link href={project.website}>{project.website}</Link></p>
      </div>
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>lessons</p>
        <p className={styles.rowInfo}>{project.lessons}</p>
      </div>
      <div className={styles.cardPic}>
        <Image src={project.imagePath.src} width={1528} height={875} layout={'responsive'} blurDataURL={'true'} alt={`homepage of ${project.name}`} />
      </div>
      <p>{project.number}</p>
=======

      <p className={styles.cardNumber}>{project.number}</p>
>>>>>>> 40903d458950b4e64f9ceee0552a89799d4115aa
    </div>
  ))

  return <div className={styles.projectsList}>{projectList}</div>
}
