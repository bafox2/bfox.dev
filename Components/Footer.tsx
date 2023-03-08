import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    //make a footer with a name, email, and a tagline
    <footer className={styles.footer__container}>
      <div className={styles.footerBranding}>
        <p className={styles.footerName}>🤍 Ben Fox 🤍</p>
      </div>
    </footer>
  );
}
