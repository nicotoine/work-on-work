import styles from './UniversitaireItem.module.css';

interface UniversitaireItemProps {
  text: string;
  org: string;
  highlight?: boolean;
}

export default function UniversitaireItem({
  text,
  org,
  highlight = false,
}: UniversitaireItemProps) {
  return (
    <div className={styles.item}>
      <div
        className={`${styles.dot} ${highlight ? styles.dotHighlight : ""}`}
      />
      <div>
        <p
          className={`${styles.text} ${highlight ? styles.textHighlight : ""}`}
        >
          {text}
        </p>
        <p className={styles.org}>{org}</p>
      </div>
    </div>
  );
}
