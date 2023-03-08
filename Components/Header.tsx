import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
//email, github, resume, linkedin,

//b expands to bfox on hover
export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Link href="/" className={`${styles.logo} ${styles.hoverable}`}>
          Fox
        </Link>
        <nav className={styles.nav}>
          <Link href="/writing" className={styles.headerRow}>
            Writing
          </Link>

          <Link href="/cv" className={styles.headerRow}>
            Resume
          </Link>

          <a className={""} href="mailto:benfox11@vt.edu">
            Email
          </a>

          <a
            className={""}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ben-fox-dev/"
          >
            LinkedIn
          </a>
        </nav>

        <div className={styles.folderTab}>
          <a
            className={styles.headerRow}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ben-fox-dev/"
          >
            <Image
              src="/logos/github.svg"
              alt="Github Icon"
              width={24}
              height={24}
            />
            <div className={styles.folderTabText}>Github</div>
          </a>
        </div>
      </div>
      <div className={styles.headerMask} />
    </>
  );
}
