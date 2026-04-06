import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specificite from "./components/Specificite";
import Parcours from "./components/Parcours";
import Interventions from "./components/Interventions";
import PreparationMentale from "./components/PreparationMentale";
import Emdr from "./components/Emdr";
import Formations from "./components/Formations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./page.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Psychologist", "LocalBusiness"],
      "@id": "https://www.workonwork.fr/#psychologue",
      name: "Annick Chaline Devos – Psychologue du travail",
      alternateName: "Work on Work",
      description:
        "Psychologue du travail spécialisée dans les risques psychosociaux (RPS), la qualité de vie au travail (QVT), le coaching professionnel, la préparation mentale et l'EMDR. Interventions à Orléans, Tours et Paris.",
      url: "https://www.workonwork.fr",
      telephone: "+33663920219",
      email: "annick.devos@workonwork.fr",
      image: `https://www.workonwork.fr${basePath}/annick-chaline-devos.png`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "37 chemin de Chaingy, Maison médicale",
        addressLocality: "Saint-Jean-de-la-Ruelle",
        postalCode: "45140",
        addressRegion: "Centre-Val de Loire",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.9078,
        longitude: 1.8636,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Orléans",
          sameAs: "https://fr.wikipedia.org/wiki/Orl%C3%A9ans",
        },
        {
          "@type": "City",
          name: "Tours",
          sameAs: "https://fr.wikipedia.org/wiki/Tours",
        },
        {
          "@type": "City",
          name: "Paris",
          sameAs: "https://fr.wikipedia.org/wiki/Paris",
        },
        {
          "@type": "AdministrativeArea",
          name: "Centre-Val de Loire",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de psychologie du travail",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Prévention des risques psychosociaux (RPS)",
              description:
                "Diagnostic RPS, plan d'actions, enquêtes harcèlement au travail",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Soutien psychologique au travail",
              description:
                "Accompagnement burn-out, souffrance au travail, épuisement professionnel, violences au travail",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Qualité de vie au travail (QVT)",
              description:
                "Audit organisationnel, accompagnement des changements, climat social",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Coaching professionnel",
              description:
                "Leadership, transition de carrière, prise de poste, efficacité professionnelle",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Préparation mentale",
              description:
                "Coaching mental pour concours, compétitions, prise de parole, performance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "EMDR",
              description:
                "Psychothérapie EMDR pour traumatismes et souffrances liées au travail",
            },
          },
        ],
      },
      sameAs: ["https://www.linkedin.com/in/annick-chaline-devos-6866921b/"],
      knowsAbout: [
        "Risques psychosociaux",
        "Qualité de vie au travail",
        "Burn-out",
        "Bore-out",
        "Souffrance au travail",
        "Harcèlement au travail",
        "Coaching professionnel",
        "Préparation mentale",
        "EMDR",
        "PSSM",
        "Codéveloppement",
        "Analyse des pratiques",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Titre de Psychologue du travail – CNAM Paris",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "DU Risques Psychosociaux – Université Assas-Panthéon",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "DESU Coaching professionnel – Université Paris 8",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "DU Coaching et performance mentale – Université de Bourgogne",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Habilitation IPRP – DREETS Centre-Val de Loire",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.workonwork.fr/#website",
      url: "https://www.workonwork.fr",
      name: "Work on Work – Psychologue du travail Orléans Tours Paris",
      description:
        "Cabinet de psychologie du travail : RPS, QVT, coaching, préparation mentale, EMDR",
      inLanguage: "fr-FR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.workonwork.fr/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://www.workonwork.fr",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.content}>
          <Hero />
          <Specificite />
          <Parcours />
          <Formations />
          <Interventions />
          <PreparationMentale />
          <Emdr />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
