import styles from "../styles/Util.module.css";

// takes in text as a string and a color as a string
// the color will be a little dot next to the text

export default function TagTech({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <div className={styles.tagTech__container}>
      <div className={styles.tagTech__dot} style={{ backgroundColor: color }} />
      <p className={styles.tagTech__text}>{text}</p>
    </div>
  );
}
