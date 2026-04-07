import SectionTitle from "./SectionTitle";
import InterventionGroup from "./interventions/InterventionGroup";
import styles from "./Interventions.module.css";

const particulier = [
  {
    title: "Entretien de soutien psychologique",
    text: "Souffrance au travail, épuisement professionnel, burn-out, bore-out, perte de sens, difficultés relationnelles, violences au travail, PSE, perte de motivation...",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Accompagnement des transitions professionnelles",
    text: "Gestion de carrière, mobilité, reclassement, reconversion professionnelle, prise de poste, reprise après arrêt longue durée, préparation à la retraite...",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Aide à la libération de votre plein potentiel",
    text: "Pour lancer et concrétiser vos projets et vos ambitions professionnelles, et oser votre excellence.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const entreprises = [
  {
    title: "Prévention des risques psychosociaux",
    text: "Accompagnement de démarche RPS, évaluation et diagnostic approfondi des RPS, élaboration et mise en œuvre d'un plan d'actions, enquêtes harcèlement au travail",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
  },
  {
    title: "Soutien psychologique",
    text: "Permanence sur site, entretien individuel de soutien psychologique, groupe de paroles, cellule d'écoute d'urgence, gestion de crise et des situations complexes",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Optimisation de l'organisation et de la qualité de vie au travail",
    text: "Accompagnement des changements (organisationnels, restructuration, PSE, transitions professionnelles), analyse du travail, audit organisationnel, audit de climat social",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Amélioration des pratiques",
    text: "Groupe d'analyse des pratiques, codéveloppement professionnel et managérial",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Formation et sensibilisation",
    text: "RPS, harcèlement au travail, discrimination, burnout, bore-out, brown-out, santé mentale au travail, premiers secours en santé mentale",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Maintien dans l'emploi et reprise du travail",
    text: "Accompagnement au maintien dans l'emploi et à la reprise du travail",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Coaching professionnel",
    text: "Posture managériale et leadership, efficacité et organisation professionnelles, communication et intelligence émotionnelle, transition et évolution de carrière",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

export default function Interventions() {
  return (
    <section id="interventions" className={styles.section}>
      <div className={styles.blobLayer}>
        <div className={styles.blobTop} />
        <div className={styles.blobBottom} />
      </div>
      <div className={styles.container}>
        <SectionTitle title="Mes interventions : particulier et entreprise" />

        <div className={styles.particulierWrapper}>
          <InterventionGroup
            heading="Entreprises"
            items={entreprises}
            columns="cols2md3lg"
          />
        </div>
        <InterventionGroup
          heading="Particulier"
          items={particulier}
          columns="cols3md"
        />
      </div>
    </section>
  );
}
