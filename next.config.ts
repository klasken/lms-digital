import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Une seule adresse officielle : https://lms-digital.com (sans www).
  // Toute visite sur www.lms-digital.com est renvoyée définitivement (308) vers la même page sans www,
  // pour que Google ne voie plus deux copies du site et garde l'adresse sans www.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lms-digital.com" }],
        destination: "https://lms-digital.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
