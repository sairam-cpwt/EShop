import styles from "./loader.module.css";

export default function BtnLoader() {
  return (
    <div className={`${styles.loader} flex items-center justify-center`}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
}
