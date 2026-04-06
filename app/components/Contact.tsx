import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import ContactForm from "./contact/ContactForm";
import MapCard from "./contact/MapCard";
import CoordinatesCard from "./contact/CoordinatesCard";
import InterventionModesCard from "./contact/InterventionModesCard";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
    >
      <div className={styles.blobLayer}>
        <div className={styles.blobTop} />
        <div className={styles.blobBottom} />
      </div>
      <div className={styles.container}>
        <SectionTitle title={<>Contactez votre psychologue du travail<br />Orléans &middot; Tours &middot; Bourges &middot; Paris</>} />
        <div className={styles.grid}>
          <Reveal variant="slide-right">
            <ContactForm />
          </Reveal>

          <Reveal variant="slide-left" delay={150}>
            <div className={styles.sidebar}>
              <MapCard
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.5!2d1.8636!3d47.9078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e4f5a5a5a5a5%3A0x0!2s37+Chemin+de+Chaingy%2C+45140+Saint-Jean-de-la-Ruelle!5e0!3m2!1sfr!2sfr!4v1"
                title="Cabinet Annick Chaline Devos - Maison médicale, 37 chemin de Chaingy, Saint-Jean de la Ruelle"
                venueName="Maison médicale"
                address="37 chemin de Chaingy, 45140 Saint-Jean de la Ruelle"
              />
              <CoordinatesCard />
              <InterventionModesCard />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
