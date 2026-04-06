import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import FeatureCard from "./ui/FeatureCard";
import styles from "./Specificite.module.css";

export default function Specificite() {
  return (
    <section id="specificite" className={styles.section}>
      <div className={styles.blobLayer}>
        <div className={styles.blobTopRight} />
        <div className={styles.blobBottomLeft} />
      </div>

      <div className={styles.container}>
        <SectionTitle title="Mon approche & ma mission" />

        <div className={styles.grid}>
          <Reveal variant="slide-right">
            <FeatureCard
              icon="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              title="Ma spécificité"
            >
              J&apos;interviens à la croisée de la prévention des risques
              psychosociaux, de la santé mentale au travail et du développement
              des performances collectives. Mon approche intégrative allie une
              rigueur scientifique à des méthodes éprouvées et à un
              accompagnement humaniste, pour soutenir les professionnels dans
              des contextes de tension ou de transformation professionnelle.
            </FeatureCard>
          </Reveal>

          <Reveal variant="slide-left" delay={150}>
            <FeatureCard
              icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              title="Ma mission"
            >
              Vous offrir un{" "}
              <strong className={styles.strong}>espace bienveillant</strong> et un
              soutien concret pour lever les freins ou points de blocage
              professionnels, qui vous entravent ou entravent vos
              collaborateurs. Vous donner des outils pour{" "}
              <strong className={styles.strong}>
                libérer vos pleins potentiels
              </strong>
              , transformer les aspirations en réussites concrètes et atteindre
              vos objectifs.
            </FeatureCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
