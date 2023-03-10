import styles from "../styles/Util.module.css";

// takes in name as a string and a link as a string

export default function TagTech({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  return (
    <div className={styles.tagTech__container}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p className={styles.tagTech__name}>{name}</p>
      </a>
    </div>
  );
}
