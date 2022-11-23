import Link from "next/link";
import styles from '../styles/Header.module.css'

export default function Footer() {
  return (
    //make a footer with a name, email, and a tagline
    <div className={styles.footer}>
      <div className={styles.footerName}>
        <p>© 2021, Made by <a href="https://www.linkedin.com/in/andrew-lee-0b0b2b1b9/">Andrew Lee</a></p>
      </div>
      <div className={styles.footerEmail}>
        <p><a href="mailto:
        email.email.com">email.email.com</a></p>
      </div>
      <div className={styles.footerTagline}>
        <p>Tagline</p>
      </div>
    </div>
  );
};
