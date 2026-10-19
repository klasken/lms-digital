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

export const metadata: Metadata = {
  title: "LMS Digital · Création de sites internet",
  description:
    "Sites internet sur mesure pour traiteurs, pâtissières, artisans et indépendants : un design à votre image, pensé pour le téléphone et relié à votre Instagram.",
  openGraph: {
    title: "LMS Digital · Création de sites internet",
    description:
      "Sites internet sur mesure pour traiteurs, pâtissières, artisans et indépendants. Découvrez les réalisations.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a1c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${unbounded.variable} ${hanken.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
