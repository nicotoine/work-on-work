import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page introuvable – Work on Work",
  description:
    "La page que vous recherchez n'existe pas ou a été déplacée.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.blobLayer} aria-hidden>
          <div className={styles.blobTopRight} />
          <div className={styles.blobBottomLeft} />
        </div>

        <div className={styles.container}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page introuvable</h1>
          <p className={styles.text}>
            La page que vous recherchez n&apos;existe pas, a été déplacée ou
            l&apos;adresse comporte une erreur.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryButton}>
              Retour à l&apos;accueil
            </Link>
            <Link href="/#contact" className={styles.secondaryButton}>
              Contacter Annick
            </Link>
          </div>

          <nav className={styles.shortcuts} aria-label="Raccourcis">
            <p className={styles.shortcutsLabel}>Sections du site&nbsp;:</p>
            <ul className={styles.shortcutsList}>
              <li>
                <Link href="/#specificite" className={styles.shortcutLink}>
                  Ma spécificité
                </Link>
              </li>
              <li>
                <Link href="/#parcours" className={styles.shortcutLink}>
                  Mon parcours
                </Link>
              </li>
              <li>
                <Link href="/#interventions" className={styles.shortcutLink}>
                  Mes interventions
                </Link>
              </li>
              <li>
                <Link href="/#preparation-mentale" className={styles.shortcutLink}>
                  Préparation mentale
                </Link>
              </li>
              <li>
                <Link href="/#emdr" className={styles.shortcutLink}>
                  EMDR
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className={styles.shortcutLink}>
                  Mentions légales
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
