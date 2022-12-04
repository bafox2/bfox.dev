import styles from '../styles/Header.module.css'
import Link from 'next/link'
//email, github, resume, linkedin,

export default function Header() {
  //navbar with 'home', 'about', 'writing', 'resume'
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.logo}>
          Ben Fox, Developer
        </Link>

        <nav className={styles.nav}>
          <Link href="/ben">
            <div className={`${styles.navItem}`}>About</div>
          </Link>
          <Link href="/writing">
            <div className={styles.navItem}>Writing</div>
          </Link>
          <Link href="/cv">
            <div className={`${styles.navItem}`}>Resume</div>
          </Link>
          <Link href="/email">
            <div className={`${styles.navItem} ${styles.special}`}>Email</div>
          </Link>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ben-fox-dev/">
            <div className={`${styles.navItem} ${styles.special}`}>Github</div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ben-fox-dev/">
            <div className={`${styles.navItem} ${styles.special}`}>LinkedIn</div>
          </a>
        </nav>
      </div>
      <p className={styles.headerRight}> </p>
    </div>
  )
}
