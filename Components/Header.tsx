import styles from '../styles/Header.module.css'
import Link from 'next/link'
//email, github, resume, linkedin, 

export default function Header() {
  //navbar with 'home', 'about', 'writing', 'resume'
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        Ben Fox
      </div>
      <div className={styles.nav}>
        <nav className={styles.navList}>
          <li className={`${styles.navItem}`}>
            <Link href="/about"><a>About</a></Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/writing"><a>Writing</a></Link>
          </li>
          <li className={`${styles.navItem} ${styles.special}`}>
        <a download={true}
          href="/1122_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.special}`}>
            <Link href="/resume"><a>Email</a></Link>
          </li>
          <li className={`${styles.navItem} ${styles.special}`}>
            <Link href="/resume"><a>LinkedIn</a></Link>
          </li>
        </nav>
      </div>
    </div>
  )
}