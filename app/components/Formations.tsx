import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { Stagger } from "./Reveal";
import IPRPBadge from "./ui/IPRPBadge";
import UniversitaireItem from "./formations/UniversitaireItem";
import FeatureCard from "./ui/FeatureCard";
import styles from "./Formations.module.css";

const universitaires = [
  { text: "Titre Psychologue du travail", org: "CNAM Paris", highlight: true },
  {
    text: "Licence Sciences Humaines et Sociales, mention Travail",
    org: "CNAM",
  },
  { text: "DU Risques Psychosociaux", org: "Université Assas-Panthéon" },
  { text: "DESU Coaching professionnel", org: "Université Paris 8" },
  {
    text: "DU Coaching et performance mentale",
    org: "Université de Bourgogne",
  },
];

const professionnelles = [
  {
    title: "Psychologie du travail et prévention des risques professionnels",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    items: [
      "Acquérir des bases en prévention des risques professionnels – INRS",
      "Piloter une démarche Qualité de Vie au Travail – ANACT",
      "Manager par le travail réel – EM Lyon",
      "Participer à la prévention des conduites addictives en milieu professionnel – INRS",
      "Santé et usages de psychotropes – ADDITRA",
    ],
  },
  {
    title: "Santé mentale, crise et traumatisme",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    items: [
      "EMDR – Niveaux 1 et 2, Thérapie à distance – Institut Français EMDR",
      "Formation de formateur Premiers Secours en Santé Mentale – Module Standard – CNFPT",
      "Premiers Secours en Santé Mentale – Module Jeunes – PSSM",
      "Intervention en cas de crise suicidaire – Réseau Vie 37",
      "Évaluation du potentiel suicidaire – Réseau Vie 37",
      "Urgences Psychologiques Sapeurs-Pompiers – AEPSP",
      "Traumatisme vicariant et fatigue de compassion – AEPSP",
    ],
  },
  {
    title: "Coaching, accompagnement et dynamique de groupe",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    items: [
      "Animateur groupe codéveloppement professionnel et managérial – Cecodev",
      "Animateur groupes d\u0027analyse des pratiques – Fédération Française des Psychologues",
      "La posture de l\u0027accompagnateur en RH – CNFPT",
      "Manager par le travail réel – EM Lyon",
    ],
  },
  {
    title: "Outils, méthodes et développement personnel",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    items: [
      "Entretien motivationnel – FRAPS",
      "Compétences psychosociales – FRAPS",
      "Photolangage – FRAPS",
      "Instructeur MBSR (Mindfulness) – Demain",
      "Process Com – Kahler Communication",
      "Autobiographie réflexive – Groupe CAPP",
    ],
  },
];

export default function Formations() {
  return (
    <section id="formations" className={styles.section}>
      <div className={styles.blobLayer}>
        <div className={styles.blobTopLeft} />
        <div className={styles.blobBottomRight} />
      </div>
      <div className={styles.container}>
        <SectionTitle title="Mes formations & qualifications" />

        <Reveal variant="scale">
          <div className={styles.badgeWrapper}>
            <IPRPBadge />
          </div>
        </Reveal>

        <Reveal variant="fade-up">
          <h3 className={styles.subHeading}>Formations universitaires</h3>
        </Reveal>
        <Stagger className={styles.timeline}>
          <div className={styles.timelineLine} />
          <div className={styles.timelineItems}>
            {universitaires.map((item, i) => (
              <UniversitaireItem
                key={i}
                text={item.text}
                org={item.org}
                highlight={item.highlight}
              />
            ))}
          </div>
        </Stagger>

        <Reveal variant="fade-up">
          <h3 className={styles.subHeading}>Formations professionnelles</h3>
        </Reveal>
        <Stagger variant="scale" className={styles.proGrid}>
          {professionnelles.map((group) => (
            <FeatureCard
              key={group.title}
              title={group.title}
              icon={group.icon}
              layout="horizontal"
            >
              <ul className={styles.proList}>
                {group.items.map((item, i) => (
                  <li key={i} className={styles.proListItem}>
                    <span className={styles.proBullet} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
