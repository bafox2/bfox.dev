import styles from "../styles/Util.module.css";

// takes in text as a string and a color as a string
// the color will be a little dot next to the text

export default function TagStatus({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <div className={styles.tagStatus__container}>
      <div
        className={styles.tagStatus__dot}
        style={{ backgroundColor: color }}
      />
      <p className={styles.tagStatus__text}>{text}</p>
    </div>
  );
}
