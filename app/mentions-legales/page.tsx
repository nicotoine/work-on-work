import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mentions légales – Work on Work | Annick Chaline Devos",
  description:
    "Mentions légales du site Work on Work, cabinet de psychologie du travail d'Annick Chaline Devos à Saint-Jean-de-la-Ruelle.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <article className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Mentions légales</h1>
            <div className={styles.underline} />
            <p className={styles.intro}>
              Conformément aux dispositions des articles 6-III et 19 de la loi
              n° 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie
              numérique, voici les informations relatives à l&apos;édition et à
              l&apos;hébergement du site{" "}
              <strong>www.workonwork.fr</strong>.
            </p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Éditeur du site</h2>
            <ul className={styles.infoList}>
              <li>
                <strong>Annick Chaline Devos</strong>, psychologue du travail
              </li>
              <li>
                Cabinet — Maison médicale, 37 chemin de Chaingy, 45140
                Saint-Jean-de-la-Ruelle
              </li>
              <li>
                Téléphone&nbsp;:{" "}
                <a href="tel:+33663920219" className={styles.inlineLink}>
                  +33 6 63 92 02 19
                </a>
              </li>
              <li>
                Courriel&nbsp;:{" "}
                <a
                  href="mailto:annick.devos@workonwork.fr"
                  className={styles.inlineLink}
                >
                  annick.devos@workonwork.fr
                </a>
              </li>
              <li>N° SIREN&nbsp;: 820 181 063</li>
              <li>N° ADELI&nbsp;: 41 93 0332 6</li>
              <li>Habilitée IPRP — DREETS Centre-Val de Loire</li>
            </ul>
            <p className={styles.paragraph}>
              Le titre de psychologue est protégé par la loi n° 85-772 du 25
              juillet 1985. La praticienne est responsable du contenu
              rédactionnel du présent site. Les textes sont rédigés par une
              spécialiste du sujet.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Directrice de la publication</h2>
            <p className={styles.paragraph}>Annick Chaline Devos.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Hébergeur</h2>
            <p className={styles.paragraph}>
              Le site est hébergé par{" "}
              <strong>GitHub Pages</strong>
              {" "}— GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco,
              CA 94107, États-Unis.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Propriété intellectuelle</h2>
            <p className={styles.paragraph}>
              L&apos;ensemble des contenus présents sur ce site (textes,
              images, graphismes, logo, icônes, mise en page) est la propriété
              exclusive d&apos;Annick Chaline Devos, sauf mention contraire.
              Toute reproduction, représentation, modification ou exploitation
              totale ou partielle, par quelque procédé que ce soit, sans
              autorisation écrite préalable, est interdite et constitue une
              contrefaçon sanctionnée par les articles L.335-2 et suivants du
              Code de la propriété intellectuelle.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Crédits</h2>
            <ul className={styles.infoList}>
              <li>
                Photographies&nbsp;: Annick Chaline Devos — tous droits
                réservés.
              </li>
              <li>
                Icônes&nbsp;: pictogrammes vectoriels personnalisés intégrés au
                site.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Traitement des données personnelles
            </h2>
            <p className={styles.paragraph}>
              Les données collectées via le formulaire de contact (nom,
              prénom, adresse e-mail, détail de la demande, disponibilités)
              sont utilisées exclusivement pour répondre à votre demande, sur
              la base de votre consentement explicite recueilli au moment de
              l&apos;envoi du formulaire.
            </p>
            <p className={styles.paragraph}>
              L&apos;acheminement du formulaire est assuré par notre
              sous-traitant{" "}
              <strong>Web3Forms</strong>{" "}(Statics Hosting UG, Schmalenbachstr.
              4, 45128 Essen, Allemagne — hébergement dans l&apos;Union
              européenne), qui transmet le contenu du formulaire par courriel
              à Annick Chaline Devos sans le conserver. Aucun autre tiers
              n&apos;a accès aux données.
            </p>
            <p className={styles.paragraph}>
              Les courriels reçus sont conservés dans la messagerie
              professionnelle d&apos;Annick Chaline Devos pendant{" "}
              <strong>3 ans maximum</strong> à compter du dernier échange,
              puis supprimés.
            </p>
            <p className={styles.paragraph}>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez
              d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
              de portabilité et d&apos;opposition concernant vos données
              personnelles. Pour exercer ces droits, adressez votre demande par
              courriel à{" "}
              <a
                href="mailto:annick.devos@workonwork.fr?subject=Traitement%20des%20donn%C3%A9es%20personnelles"
                className={styles.inlineLink}
              >
                annick.devos@workonwork.fr
              </a>{" "}
              en précisant l&apos;objet «&nbsp;Traitement des données
              personnelles&nbsp;», en indiquant vos nom, prénom, adresse
              électronique et le détail de votre demande.
            </p>
            <p className={styles.paragraph}>
              Si vous estimez que vos données personnelles ne sont pas traitées
              dans le respect de la réglementation, vous pouvez introduire une
              réclamation auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies</h2>
            <p className={styles.paragraph}>
              Ce site n&apos;utilise{" "}
              <strong>aucun cookie</strong>
              {" "}de suivi, de mesure d&apos;audience ou de profilage
              publicitaire. Aucun outil d&apos;analyse comportementale (Google
              Analytics ou équivalent) n&apos;est intégré.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Secret professionnel</h2>
            <p className={styles.paragraph}>
              En tant que psychologue, Annick Chaline Devos est tenue au secret
              professionnel et respecte le Code de déontologie des psychologues
              (mars 1996, actualisé en 2012).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Liens hypertextes</h2>
            <p className={styles.paragraph}>
              Ce site peut contenir des liens vers d&apos;autres sites
              Internet. Annick Chaline Devos n&apos;exerce aucun contrôle sur
              ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
