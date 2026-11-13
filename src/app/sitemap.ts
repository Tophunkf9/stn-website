import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/i18n";

const siteUrl = "https://stnprosupply.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return LANGS.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: lang === "en" ? 1 : 0.8,
    alternates: {
      languages: {
        en: `${siteUrl}/en`,
        th: `${siteUrl}/th`,
        "zh-CN": `${siteUrl}/zh`,
        "x-default": `${siteUrl}/en`,
      },
    },
  }));
}
