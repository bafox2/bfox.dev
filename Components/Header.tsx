import styles from '../styles/Header.module.css'
import Link from 'next/link'
//email, github, resume, linkedin, 

export default function Header() {
  //navbar with 'home', 'about', 'writing', 'resume'
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href="/">
          BFox
        </Link>
      </div>
        <nav className={styles.nav}>
          <div className={`${styles.navItem}`}>
            <Link href="/ben"><a>About</a></Link>
         </div>
          <div className={styles.navItem}>
            <Link href="/writing"><a>Writing</a></Link>
         </div>
         <div className={`${styles.navItem}`}>
            <Link href="/cv"><a>Resume</a></Link>
         </div>
          <div className={`${styles.navItem} ${styles.special}`}>
            <Link href="/email"><a>Email</a></Link>
        </div>
        <div className={`${styles.navItem} ${styles.special}`}>
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/ben-fox-dev/">Github</a>
         </div>
          <div className={`${styles.navItem} ${styles.special}`}>
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/ben-fox-dev/">LinkedIn</a>
         </div>
        </nav>
      </div>
  )
}