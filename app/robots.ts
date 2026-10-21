import type { MetadataRoute } from "next";

// Autorise Google à tout parcourir et lui indique où trouver le sitemap
// (visible sur https://lms-digital.com/robots.txt).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://lms-digital.com/sitemap.xml",
    host: "https://lms-digital.com",
  };
}
