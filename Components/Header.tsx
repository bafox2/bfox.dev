import styles from '../styles/Header.module.css'
import Link from 'next/link'
//email, github, resume, linkedin,

export default function Header() {
  //navbar with 'home', 'about', 'writing', 'resume'
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Ben Fox
        </Link>
        {/* <Link href="/ben">
            <div className={`${styles.navItem}`}>About</div>
          </Link> */}
        <Link legacyBehavior href="/writing">
          <div className={styles.navItem}>Writing</div>
        </Link>
        <Link href="/cv">
          <div className={`${styles.navItem}`}>Resume</div>
        </Link>
        <div className={`${styles.navItem} ${styles.special}`}>
          <a href="mailto:benfox11@vt.edu">Email</a>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ben-fox-dev/">
          <div className={`${styles.navItem} ${styles.special}`}>Github</div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ben-fox-dev/">
          <div className={`${styles.navItem} ${styles.special}`}>LinkedIn</div>
        </a>
      </nav>
    </div>
  )
}
