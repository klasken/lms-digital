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

const SITE_URL = "https://lms.digital";
const SITE_NAME = "LMS Digital";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: "LMS Digital · Création de sites internet",
  description:
    "Sites internet sur mesure pour traiteurs, pâtissières, artisans et indépendants : un design à votre image, pensé pour le téléphone et relié à votre Instagram.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LMS Digital · Création de sites internet",
    description:
      "Sites internet sur mesure pour traiteurs, pâtissières, artisans et indépendants. Découvrez les réalisations.",
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
  alternateName: ["LMS", "lms.digital"],
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
