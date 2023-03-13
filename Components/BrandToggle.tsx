import styles from "../styles/Util.module.css";

//toggle button with brand styling
export default function BrandToggle({
  value,
  setValue,
}: {
  value: boolean;
  setValue: any;
}) {
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggle}>
        <input
          type="checkbox"
          id="toggle"
          value={value ? "checked" : ""}
          className={styles.toggleInput}
          onClick={(e) => setValue(!value)}
        />
        <label htmlFor="toggle" className={styles.toggleLabel}>
          <span className={styles.toggleButton}></span>
        </label>
      </div>
    </div>
  );
}
