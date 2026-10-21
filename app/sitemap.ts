import type { MetadataRoute } from "next";

// Liste des pages à donner à Google (visible sur https://lms-digital.com/sitemap.xml).
const SITE_URL = "https://lms-digital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
