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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.content}>
          <Hero />
          <Specificite />
          <Parcours />
          <Interventions />
          <PreparationMentale />
          <Emdr />
          <Formations />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
