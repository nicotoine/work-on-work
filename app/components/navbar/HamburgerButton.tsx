import styles from './HamburgerButton.module.css';

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ open, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      aria-label="Menu"
    >
      <span
        className={`${styles.bar} ${open ? styles.barTopOpen : ''}`}
      />
      <span
        className={`${styles.bar} ${open ? styles.barMiddleOpen : ''}`}
      />
      <span
        className={`${styles.bar} ${open ? styles.barBottomOpen : ''}`}
      />
    </button>
  );
}
