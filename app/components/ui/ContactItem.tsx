import IconBox from "./IconBox";
import styles from './ContactItem.module.css';

export default function ContactItem({
  icon,
  label,
  href,
  value,
}: {
  icon: string;
  label: string;
  href: string;
  value: string;
}) {
  return (
    <div className={styles.wrapper}>
      <IconBox icon={icon} size="sm" />
      <div>
        <p className={styles.label}>{label}</p>
        <a
          href={href}
          className={styles.link}
        >
          {value}
        </a>
      </div>
    </div>
  );
}
