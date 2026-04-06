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

export const metadata: Metadata = {
  title: "Annick Chaline Devos - Psychologue du travail | Orléans Tours Paris",
  description:
    "Psychologue du travail spécialisée dans les risques psychosociaux, la qualité de vie au travail, le coaching professionnel et la préparation mentale. Cabinet à Saint-Jean de la Ruelle.",
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
