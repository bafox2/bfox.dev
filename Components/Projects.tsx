//projects section, will have a header then a list of projects
//projects are imported from projects.json

import styles from '../styles/Projects.module.css'
import projects from '../projects'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  name: string,
  description: string,
  builtWith: string,
  date: string,
  status: string,
  github: string,
  website: string,
  lessons: string,
  imagePath: {src: string, height: string, width: string, blurDataURL: string, blurWidth: string, blurHeight: string},
  number: number
}


export default function Projects() {
  console.log(projects)
  const parsedProjects = JSON.parse(JSON.stringify(projects))

  const projectList = parsedProjects.map((project: Project) => (
    <div className={styles.cardContainer} key={project.number}>
      <div className={styles.cardRow}>
        <h2 className={styles.cardHeader}>{project.name}</h2>
      </div>
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>description</p>
        <p className={styles.rowInfo}>{project.description}</p>
      </div>
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>built with</p>
        <p className={styles.rowInfo}>{project.builtWith}</p>
      </div>
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
        <p className={styles.rowInfo}><Link href={project.github}><a >{project.github}</a></Link></p>
      </div>
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>website</p>
        <p className={styles.rowInfo}><Link href={project.website}><a >{project.website}</a></Link></p>
      </div>
      <div className={styles.cardRow}>
        <p className={styles.rowCategory}>lessons</p>
        <p className={styles.rowInfo}>{project.lessons}</p>
      </div>
      <div className={styles.cardPic}>
        <Image src={project.imagePath.src} width={1528} height={875} layout={'responsive'} blurDataURL={'true'} alt={`homepage of ${project.name}`} />
      </div>
      <p>{project.number}</p>
    </div>
  ))

  

  return (
    <div className={styles.projects}>
      <div className={styles.projectsList}>
          {projectList}
      </div>
    </div>
  )
}
