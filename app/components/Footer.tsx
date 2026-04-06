import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoIcon}>
            <span className={styles.logoLetter}>W</span>
          </div>
          <span className={styles.logoText}>
            Work on Work
          </span>
        </div>
        <p className={styles.subtitle}>
          Annick Chaline Devos &ndash; Psychologue du travail
        </p>
        <p className={styles.accreditation}>
          Habilitée IPRP - DREETS Centre-Val de Loire
        </p>
        <div className={styles.divider} />
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Work on Work. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
