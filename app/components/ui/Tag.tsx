import styles from './Tag.module.css';

export default function Tag({
  children,
  size = "sm",
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`${styles.tag} ${size === "md" ? styles.md : styles.sm}`}
    >
      {children}
    </span>
  );
}
