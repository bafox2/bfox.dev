import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    //make a footer with a name, email, and a tagline
    <div className={styles.footerLogo}>
      <p className={styles.footerName}>🤍 Ben Fox 🤍</p>
    </div>
  );
}
