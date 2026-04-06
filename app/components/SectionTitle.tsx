import Reveal from "./Reveal";
import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title, light }: { title: React.ReactNode; light?: boolean }) {
  return (
    <Reveal variant="clip-up">
      <div className={styles.wrapper}>
        <h2
          className={`${styles.title} ${light ? styles.titleLight : ""}`}
        >
          {title}
        </h2>
        <div className={styles.underline} />
      </div>
    </Reveal>
  );
}
