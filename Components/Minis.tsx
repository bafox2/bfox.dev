import styles from '../styles/Projects.module.css'
import minis from '../minis'
import Link from 'next/link'
import Image from 'next/legacy/image'

interface Mini {
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

export default function Minis() {
  const parsedMinis = JSON.parse(JSON.stringify(minis))
  const miniList = parsedMinis.map((mini: Mini) => (
    <div className={styles.cardContainer} key={mini.number}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardHeaderTitle}>{mini.name}</h2>
        <p className={styles.rowInfo}>{mini.description}</p>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardLeft}>
          <div className={styles.cardPic}>
            <Image
              src={mini.imagePath.src}
              width={500}
              height={400}
              blurDataURL={'true'}
              alt={`homepage of ${mini.name}`}
            />
          </div>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Stack</p>
            <p className={styles.rowInfo}>{mini.builtWith}</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Date</p>
            <p className={styles.rowInfo}>{mini.date}</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Status</p>
            <p className={styles.rowInfo}>{mini.status}</p>
          </div>

          <div className={styles.cardRow}>
            <p className={styles.rowCategory}>Lessons</p>
            <p className={styles.rowInfo}>{mini.lessons}</p>
          </div>
          <div className={styles.cardButtons}>
            <Link href={mini.github} className={styles.projectButton}>
              Github
            </Link>
            <Link href={mini.website} className={`${styles.projectButton} ${styles.special}`}>
              Website
            </Link>
          </div>
        </div>
      </div>

      <p className={styles.cardNumber}>{mini.number}</p>
    </div>
  ))

  return <div className={styles.projectsList}>{miniList}</div>
}
