import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://www.workonwork.fr";

export const metadata: Metadata = {
  title:
    "Annick Chaline Devos – Psychologue du travail Orléans, Tours, Paris | Coaching, RPS, QVT",
  description:
    "Psychologue du travail à Orléans, Tours et Paris. Spécialisée en risques psychosociaux (RPS), qualité de vie au travail (QVT), souffrance au travail, burn-out, coaching professionnel, préparation mentale et EMDR. Cabinet à Saint-Jean-de-la-Ruelle. Habilitée IPRP.",
  keywords: [
    "psychologue du travail",
    "psychologue du travail Orléans",
    "psychologue du travail Tours",
    "psychologue du travail Paris",
    "risques psychosociaux",
    "RPS",
    "qualité de vie au travail",
    "QVT",
    "souffrance au travail",
    "burn-out",
    "burnout",
    "bore-out",
    "coaching professionnel",
    "préparation mentale",
    "EMDR",
    "IPRP",
    "accompagnement professionnel",
    "soutien psychologique au travail",
    "harcèlement au travail",
    "épuisement professionnel",
    "transition professionnelle",
    "santé mentale au travail",
    "prévention RPS Orléans",
    "coach professionnel Orléans",
    "psychologue Saint-Jean-de-la-Ruelle",
    "PSSM",
    "analyse des pratiques",
    "codéveloppement",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Annick Chaline Devos – Psychologue du travail Orléans, Tours, Paris",
    description:
      "Psychologue du travail spécialisée RPS, QVT, burn-out, coaching professionnel et EMDR. Plus de 40 ans d'expérience. Cabinet à Saint-Jean-de-la-Ruelle, interventions Orléans, Tours et Paris.",
    url: siteUrl,
    siteName: "Work on Work – Annick Chaline Devos",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${siteUrl}${basePath}/annick-chaline-devos.png`,
        width: 500,
        height: 600,
        alt: "Annick Chaline Devos – Psychologue du travail à Orléans, Tours et Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Annick Chaline Devos – Psychologue du travail Orléans, Tours, Paris",
    description:
      "Psychologue du travail spécialisée RPS, QVT, burn-out, coaching professionnel et EMDR. Cabinet à Saint-Jean-de-la-Ruelle.",
    images: [`${siteUrl}${basePath}/annick-chaline-devos.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: `${basePath}/favicon.ico`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={poppins.variable}
    >
      <body className={styles.body}>{children}</body>
    </html>
  );
}
