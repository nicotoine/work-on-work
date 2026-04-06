import styles from './ContentCard.module.css';

export default function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className={`glass-card ${styles.card}`}>{children}</div>
  );
}
