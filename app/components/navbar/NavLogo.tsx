import Image from 'next/image';
import styles from './NavLogo.module.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function NavLogo() {
  return (
    <a href="#" className={styles.link}>
      <Image
        src={`${basePath}/ico.png`}
        alt="Work on Work – Psychologue du travail Orléans Tours Paris"
        width={36}
        height={36}
        className={styles.logo}
      />
      <div className={styles.textGroup}>
        <span className={styles.title}>
          Annick <span className={styles.titleAccent}>Chaline Devos</span>
        </span>
        <span className={styles.subtitle}>
          Psychologue du travail
        </span>
      </div>
    </a>
  );
}
