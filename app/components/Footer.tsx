import Image from "next/image";
import styles from "./Footer.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navLinks = [
  { href: "#specificite", label: "Mon approche" },
  { href: "#parcours", label: "Parcours" },
  { href: "#interventions", label: "Interventions" },
  { href: "#preparation-mentale", label: "Préparation mentale" },
  { href: "#emdr", label: "EMDR" },
  { href: "#formations", label: "Formations" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <Image
                src={`${basePath}/ico.png`}
                alt="Work on Work"
                width={40}
                height={40}
                className={styles.logoImg}
              />
              <div className={styles.logoText}>
                <span className={styles.brandName}>
                  Annick <span className={styles.brandAccent}>Chaline Devos</span>
                </span>
                <span className={styles.brandRole}>Psychologue du travail</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Psychologue du travail à Orléans, Tours et Paris.
              Spécialisée RPS, QVT, coaching professionnel, préparation mentale et EMDR.
            </p>
            <div className={styles.iprpBadge}>
              <svg
                className={styles.iprpIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Habilitée IPRP &ndash; DREETS Centre-Val de Loire</span>
            </div>
          </div>

          {/* Navigation column */}
          <nav className={styles.navCol} aria-label="Navigation footer">
            <h3 className={styles.colTitle}>Navigation</h3>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contact</h3>
            <address className={styles.addressBlock}>
              <a href="tel:+33663920219" className={styles.contactLink}>
                <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +33 6 63 92 02 19
              </a>
              <a href="mailto:annick.devos@workonwork.fr" className={styles.contactLink}>
                <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                annick.devos@workonwork.fr
              </a>
              <p className={styles.addressLine}>
                <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                37 chemin de Chaingy, 45140 Saint-Jean-de-la-Ruelle
              </p>
              <a
                href="https://www.linkedin.com/in/annick-chaline-devos-6866921b/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <svg className={styles.contactIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </address>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Work on Work. Tous droits réservés.
          </p>
          <p className={styles.geo}>
            Orléans &middot; Tours &middot; Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
