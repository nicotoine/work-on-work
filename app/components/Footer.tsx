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
          Annick Chaline Devos &ndash; Psychologue du travail à Orléans, Tours et Paris
        </p>
        <p className={styles.accreditation}>
          Habilitée IPRP &ndash; DREETS Centre-Val de Loire | RPS, QVT, coaching, EMDR
        </p>
        <address className={styles.accreditation}>
          Cabinet de psychologie du travail &ndash; 37 chemin de Chaingy, 45140 Saint-Jean-de-la-Ruelle (Orléans)
        </address>
        <div className={styles.divider} />
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Work on Work. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
