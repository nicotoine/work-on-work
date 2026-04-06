import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import ContentCard from "./ui/ContentCard";
import styles from "./Emdr.module.css";

export default function Emdr() {
  return (
    <section id="emdr" className={styles.section}>
      <div className={styles.blobLayer}>
        <div className={styles.blobTopRight} />
        <div className={styles.blobBottomLeft} />
      </div>
      <div className={styles.container}>
        <SectionTitle title="EMDR" />
        <Reveal variant="flip">
          <ContentCard>
            <div className={styles.inner}>
              <p className={styles.paragraph}>
                L&apos;EMDR (Eye Movement Desensitization and Reprocessing) est
                une psychothérapie qui permet de soulager la souffrance liée aux
                expériences de vie difficiles dans leur ensemble. Elle est{" "}
                <strong className={styles.strong}>
                  reconnue dans le monde entier
                </strong>
                , y compris par l&apos;Organisation Mondiale de la Santé, selon
                EMDR France.
              </p>
              <p className={styles.paragraphLast}>
                La thérapie EMDR est une approche thérapeutique unique qui guérit
                les blessures profondes de l&apos;existence grâce à l&apos;action
                neuropsychologique des{" "}
                <strong className={styles.strong}>
                  stimulations bilatérales alternées (SBA)
                </strong>{" "}
                du cerveau, associées à la guidance clinique.
              </p>
            </div>
          </ContentCard>
        </Reveal>
      </div>
    </section>
  );
}
