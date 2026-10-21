import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";

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
const SEO_TITLE = "LMS Digital";
const SEO_DESCRIPTION =
  "Besoin d'un site internet ? Nous créons votre site vitrine ou e-commerce clé en main. Attirez de nouveaux clients facilement. Solutions adaptées à tout budget.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: "/",
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
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a1c",
};

// Dit à Google le nom officiel du site (affiché en haut du résultat de recherche).
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: ["LMS", "lms-digital.com"],
  url: `${SITE_URL}/`,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
