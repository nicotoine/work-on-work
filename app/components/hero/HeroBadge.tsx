import styles from './HeroBadge.module.css';

export default function HeroBadge() {
  return (
    <div className={`${styles.wrapper} glass-card`}>
      <span className={styles.dot} />
      <span className={styles.label}>
        Orléans &middot; Tours &middot; Paris
      </span>
    </div>
  );
}
