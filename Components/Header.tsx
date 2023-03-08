import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
//email, github, resume, linkedin,

//b expands to bfox on hover
export default function Header() {
  //navbar with 'home', 'about', 'writing', 'resume'
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Fox
        </Link>
        {/* <Link href="/ben">
            <div className={`${styles.navItem}`}>About</div>
          </Link> */}
        <Link href="/writing" className={styles.headerRow}>
          <Image
            src="/logos/rss2.svg"
            alt="Writing Icon"
            width={68}
            height={68}
          />
          <div className={styles.navItem}>Writing</div>
        </Link>

        <Link href="/cv" className={styles.headerRow}>
          <Image
            src="/logos/resume1.svg"
            alt="Resume Icon"
            width={68}
            height={68}
          />
          <div className={`${styles.navItem}`}>Resume</div>
        </Link>

        <a className={styles.headerRow} href="mailto:benfox11@vt.edu">
          <Image
            src="/logos/mail.svg"
            alt="Email Icon"
            width={68}
            height={68}
          />
          <div className={`${styles.navItem} ${styles.special}`}>
            <p>Email</p>
          </div>
        </a>

        <a
          className={styles.headerRow}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ben-fox-dev/"
        >
          <Image
            src="/logos/github.svg"
            alt="Github Icon"
            width={68}
            height={68}
          />
          <div className={`${styles.navItem} ${styles.special}`}>Github</div>
        </a>

        <a
          className={styles.headerRow}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ben-fox-dev/"
        >
          <Image
            src="/logos/linkedin.svg"
            alt="LinkedIn Icon"
            width={68}
            height={68}
          />
          <div className={`${styles.navItem} ${styles.special}`}>LinkedIn</div>
        </a>
      </nav>
    </div>
  );
}
