import Image from 'next/image';
import styles from './NavLogo.module.css';

export default function NavLogo() {
  return (
    <a href="#" className={styles.link}>
      <Image
        src="/ico.png"
        alt="Work on Work"
        width={36}
        height={36}
        className={styles.logo}
      />
      <div className={styles.textGroup}>
        <span className={styles.title}>
          Work on Work
        </span>
        <span className={styles.subtitle}>
          Annick Chaline Devos
        </span>
      </div>
    </a>
  );
}
