import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import ContentCard from "./ui/ContentCard";
import Tag from "./ui/Tag";
import styles from "./PreparationMentale.module.css";

export default function PreparationMentale() {
  return (
    <section
      id="preparation-mentale"
      className={styles.section}
    >
      <div className={styles.blobLayer}>
        <div className={styles.blobTopRight} />
        <div className={styles.blobBottomLeft} />
      </div>
      <div className={styles.container}>
        <SectionTitle title="Préparation mentale et coaching de performance" />
        <Reveal variant="clip-up">
          <ContentCard>
            <div className={styles.inner}>
              <p className={styles.paragraph}>
                La <strong className={styles.strong}>préparation mentale</strong> est
                un ensemble de techniques permettant de développer vos habiletés
                mentales&nbsp;: <strong className={styles.strong}>concentration</strong>,{" "}
                <strong className={styles.strong}>motivation</strong>,{" "}
                <strong className={styles.strong}>gestion du stress</strong>,{" "}
                <strong className={styles.strong}>confiance en soi</strong> et
                estime de soi.
              </p>
              <p className={styles.paragraph}>
                L&apos;accompagnement en préparation mentale allie phase
                d&apos;écoute et phase pratique (exercices, relaxation, imagerie
                mentale, activités physiques...). Le programme
                d&apos;accompagnement est construit{" "}
                <strong className={styles.strong}>sur mesure</strong> en fonction de
                votre demande et de vos objectifs (concours, compétition, prise de
                parole en public...).
              </p>
              <p className={styles.paragraphLast}>
                Le premier entretien consistera à prendre le temps de vous écouter
                et de définir ensemble l&apos;accompagnement qui vous conviendra.
              </p>
              <div className={styles.tags}>
                {[
                  "Concours",
                  "Compétition",
                  "Prise de parole en public",
                  "Examens",
                  "Performance",
                ].map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </ContentCard>
        </Reveal>
      </div>
    </section>
  );
}
