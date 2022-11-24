import Link from "next/link";
import styles from '../styles/Header.module.css'

export default function Footer() {
  return (
    //make a footer with a name, email, and a tagline
    <div className={styles.footer}>
        <p className={styles.footerName}><a href="https://www.linkedin.com/in/ben-fox-dev/">🤍 Ben Fox</a></p>
    </div>
  );
};
