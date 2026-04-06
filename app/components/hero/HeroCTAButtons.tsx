import styles from './HeroCTAButtons.module.css';

interface HeroCTAButtonsProps {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export default function HeroCTAButtons({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroCTAButtonsProps) {
  return (
    <div className={styles.wrapper}>
      <a
        href={primaryHref}
        className={styles.primaryButton}
      >
        {primaryLabel}
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
      <a
        href={secondaryHref}
        className={`${styles.secondaryButton} glass-card`}
      >
        {secondaryLabel}
      </a>
    </div>
  );
}
