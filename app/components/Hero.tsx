import Reveal from "./Reveal";
import Tag from "./ui/Tag";
import HeroBadge from "./hero/HeroBadge";
import HeroCTAButtons from "./hero/HeroCTAButtons";
import HeroPhoto from "./hero/HeroPhoto";
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
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
          </p>

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
            src="/annick-chaline-devos.png"
            alt="Annick Chaline Devos - Psychologue du travail"
            width={500}
            height={600}
          />
        </Reveal>
      </div>
    </section>
  );
}
