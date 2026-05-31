import Reveal from "./Reveal";
import Tag from "./ui/Tag";
import HeroBadge from "./hero/HeroBadge";
import HeroCTAButtons from "./hero/HeroCTAButtons";
import HeroPhoto from "./hero/HeroPhoto";
import styles from "./Hero.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <header className={styles.section} role="banner">
      <div className={styles.blobLayer}>
        <div className={styles.bgBlobTopRight} />
        <div className={styles.bgBlobBottomLeft} />
        <div className={styles.bgBlobAccent} />
      </div>

      <div className={styles.container}>
        <Reveal variant="rise" className={styles.textColumn}>
          <HeroBadge />

          <h1 className={styles.heading}>
            Annick
            <br />
            <span className={styles.headingAccent}>Chaline Devos</span>
          </h1>

          <p className={styles.subtitle}>
            Psychologue du travail
            <br />
            Orléans, Tours, Bourges, Paris
          </p>

          <div className={styles.modes} aria-label="Modes de pratique">
            <span className={styles.mode}>
              <svg
                className={styles.modeIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Intervention en milieu professionnel
            </span>
            <span className={styles.mode}>
              <svg
                className={styles.modeIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h6"
                />
              </svg>
              Consultation en cabinet privé
            </span>
          </div>

          <div className={styles.tags}>
            {[
              "Animatrice codéveloppement managérial et professionnel",
              "Animatrice analyse de pratiques",
              "Praticienne EMDR",
              "Coach professionnel",
              "Coach préparateur mental",
              "Formatrice PSSM",
            ].map((role) => (
              <Tag key={role} size="md">
                {role}
              </Tag>
            ))}
          </div>

          <HeroCTAButtons
            primaryHref="#contact"
            primaryLabel="Discutons de votre projet"
            secondaryHref="#specificite"
            secondaryLabel="En savoir plus"
          />
        </Reveal>

        <Reveal variant="scale" delay={300} className={styles.photoColumn}>
          <HeroPhoto
            src={`${basePath}/annick-chaline-devos.png`}
            alt="Annick Chaline Devos, psychologue du travail à Orléans, Tours et Paris – spécialiste RPS, QVT, coaching et EMDR"
            width={500}
            height={600}
          />
        </Reveal>
      </div>
    </header>
  );
}
