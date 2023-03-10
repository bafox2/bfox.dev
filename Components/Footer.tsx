import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    //make a footer with a name, email, and a tagline
    <footer className={styles.footer__container}>
      <div className={styles.footer__branding}>
        <p className={`${styles.footerName} ${styles.footer__logo}`}>Ben Fox</p>
        <p className={styles.footerName}>Made with love ♡</p>
      </div>
      <div className={styles.footer__info}>
        <div className={styles.footer__links}>
          <div className={styles.footer__link__column}>
            <p className={styles.footer__header}>Socials</p>
            <a
              className={styles.footer__link}
              href="instagram.com/benjaminjamesfox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Instagram</p>
            </a>
            <a
              className={styles.footer__link}
              href="https://www.linkedin.com/in/benjaminjamesfox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>LinkedIn</p>
            </a>
            <a
              className={styles.footer__link}
              href="https://www.github.com/benjaminjamesfox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
            </a>
          </div>

          <div className={styles.footer__link__column}>
            <p className={styles.footer__header}>Site Map</p>
            <Link href="/resume" className={styles.footer__link}>
              resume
            </Link>
            <Link href="/projects" className={styles.footer__link}>
              projects
            </Link>
            <Link href="/contact" className={styles.footer__link}>
              contact
            </Link>
          </div>
        </div>

        <div className={styles.footer__copyright}>
          <p className={styles.footer__copyright__text}>
            © 2021 Benjamin James Fox All Rights Reserved
          </p>
          <a href="v1.bfox.dev" className={styles.footer__copyright__text}>
            Old, less pretty v1.bfox.dev site
          </a>
        </div>
      </div>
    </footer>
  );
}
