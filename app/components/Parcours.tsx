import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import styles from "./Parcours.module.css";

export default function Parcours() {
  return (
    <section
      id="parcours"
      className={styles.section}
    >
      <div className={styles.blobLayer}>
        <div className={styles.blobTopLeft} />
        <div className={styles.blobBottomRight} />
      </div>
      <div className={styles.container}>
        <SectionTitle title="Mon parcours professionnel" />

        {/* Badge principal */}
        <Reveal variant="scale">
        <div className={styles.badgeWrapper}>
          <div className={styles.badge}>
            <svg
              className={styles.badgeIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className={styles.badgeText}>
              Psychologue du travail
            </span>
          </div>
        </div>
        </Reveal>

        <Reveal variant="flip">
        <div className={styles.card}>
          <p className={styles.paragraph}>
            <strong className={styles.strong}>Psychologue du travail</strong>, je me
            suis spécialisée dans les{" "}
            <strong className={styles.strong}>Risques Psychosociaux</strong> et la{" "}
            <strong className={styles.strong}>Qualité de Vie au Travail</strong>. Je
            suis également{" "}
            <strong className={styles.strong}>Coach professionnel</strong> et{" "}
            <strong className={styles.strong}>
              Coach à la performance mentale
            </strong>
            , animatrice de groupe d&apos;analyse des pratiques, animatrice de
            codéveloppement professionnel et managérial,{" "}
            <strong className={styles.strong}>praticienne EMDR</strong>, formatrice
            accréditée <strong className={styles.strong}>PSSM FRANCE</strong>. Je
            continue de me former régulièrement et mes connaissances sont
            continuellement renouvelées.
          </p>

          <div className={styles.divider} />

          <p className={styles.paragraph}>
            Mon expérience professionnelle de{" "}
            <strong className={styles.strong}>25 ans en entreprise</strong>,{" "}
            <strong className={styles.strong}>
              7 ans dans la Fonction Publique Hospitalière
            </strong>
            ,{" "}
            <strong className={styles.strong}>
              9 ans dans la Fonction Publique Territoriale
            </strong>
            , ainsi que mes interventions de terrain en tant
            qu&apos;indépendante (diagnostic RPS, accompagnement PSE, groupes de
            paroles, groupes d&apos;analyse des pratiques, enquête violences au
            travail, permanence psychologique sur site, ...) me mènent à cerner
            rapidement les réalités du monde du travail.
          </p>

          <p className={styles.paragraphLast}>
            Mon parcours, qui allie{" "}
            <strong className={styles.strong}>expertise clinique</strong> et{" "}
            <strong className={styles.strong}>interventions de terrain</strong>, me
            terrain, me permet d&apos;ajuster ma posture et mes accompagnements
            à la spécificité et à la singularité de chaque situation
            individuelle ou collective et aux différents contextes
            professionnels.
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
