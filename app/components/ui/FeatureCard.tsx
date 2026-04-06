import IconBox from "./IconBox";
import styles from './FeatureCard.module.css';

export default function FeatureCard({
  icon,
  title,
  layout = "stacked",
  children,
}: {
  icon: string;
  title: string;
  layout?: "stacked" | "horizontal";
  children: React.ReactNode;
}) {
  return (
    <div className={`glass-card ${styles.card} group`}>
      <div className={layout === "horizontal" ? styles.headerHorizontal : styles.headerStacked}>
        <IconBox icon={icon} />
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
