import styles from "../styles/Stats.module.css";
import stats from "../stats.js";

export default function Stats({
  stats = [],
}: {
  stats: {
    heading: string;
    data: string;
    description: string;
    joke: boolean;
  }[];
}) {
  return (
    <div className={styles.stats__container}>
      <div className={styles.stats__grid}>
        {stats.map((stat) => (
          <div className={styles.stat__container}>
            <h2 className={styles.stat__heading}>{stat.heading}</h2>
            <h3 className={styles.stat__number}>{stat.data}</h3>
            <p className={styles.stat__description}>{stat.description}</p>
            {stat.joke && <p className={styles.stat__joke}>🤣</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
