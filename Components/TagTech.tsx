import styles from "Util.module.css";

// takes in text as a string and a url as a string

export default function TagTech({ text, url }: { text: string; url: string }) {
  return (
    <div className={styles.tagTech__container}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <p className={styles.tagTech__text}>{text}</p>
      </a>
    </div>
  );
}
