import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";
import { EMAIL, ENTREPRISE, INSTAGRAM_URL } from "./data/site";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

// Adresse officielle du site (www.lms-digital.com redirige vers celle-ci).
const SITE_URL = "https://lms-digital.com";
const SITE_NAME = "LMS Digital";

// Titre et description affichés dans les résultats Google.
// Le titre commence par le nom de la marque, puis dit ce que fait le site :
// Google réécrit moins souvent un titre complet qu'un titre réduit au seul nom.
const SEO_TITLE = "LMS Digital – Création de sites internet";
const SEO_DESCRIPTION =
  "LMS Digital crée votre site internet sur mesure : sites vitrines et e-commerce pour traiteurs, pâtissiers, artisans et indépendants, pensés pour le mobile.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SEO_TITLE,
    // Les autres pages s'affichent sous la forme « Titre de la page · LMS Digital ».
    template: `%s · ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Prouve à Google Search Console que le site t'appartient.
  verification: {
    google: "mUxzW3ld50E5IKOr-_a0OTWDB0ONIrNEgvJGP_Fonfk",
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/logo-lms-digital.png", alt: "Logo LMS Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/logo-lms-digital.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a1c",
};

// Données structurées lues par Google :
// - WebSite : le nom officiel du site (affiché en haut du résultat de recherche) ;
// - ProfessionalService : l'entreprise (adresse, contact, Instagram, zone servie),
//   utile pour les recherches locales du type « création site internet Lille ».
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "LMS",
      url: `${SITE_URL}/`,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#entreprise` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#entreprise`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo-lms-digital.png`,
      image: `${SITE_URL}/logo-lms-digital.png`,
      description: SEO_DESCRIPTION,
      email: EMAIL,
      telephone: "+33695510437",
      founder: { "@type": "Person", name: ENTREPRISE.nom },
      foundingDate: "2026-03-11",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 avenue Foch",
        postalCode: "59800",
        addressLocality: "Lille",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Lille" },
        { "@type": "Country", name: "France" },
      ],
      sameAs: [INSTAGRAM_URL, ENTREPRISE.annuaire],
      knowsAbout: ["Création de sites internet", "Site vitrine", "Site e-commerce", "Webdesign", "Référencement"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${unbounded.variable} ${hanken.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
