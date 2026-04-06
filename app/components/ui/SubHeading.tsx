import { ReactNode } from "react";
import styles from './SubHeading.module.css';

export default function SubHeading({ children }: { children: ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line} />
      <h3 className={styles.heading}>
        {children}
      </h3>
      <div className={styles.line} />
    </div>
  );
}
