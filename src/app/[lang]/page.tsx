import type { Metadata } from "next";
import { notFound } from "next/navigation";
import STNSite from "@/components/stn-site";
import { LANGS, metaByLang, translations, type Lang } from "@/lib/i18n";

const siteUrl = "https://stnprosupply.com";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  if (!LANGS.includes(raw as Lang)) return {};
  const lang = raw as Lang;
  const m = metaByLang[lang];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        en: `${siteUrl}/en`,
        th: `${siteUrl}/th`,
        "zh-CN": `${siteUrl}/zh`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${lang}`,
      title: m.title,
      description: m.description,
      locale: lang === "en" ? "en_US" : lang === "th" ? "th_TH" : "zh_CN",
      alternateLocale: ["en_US", "th_TH", "zh_CN"].filter(
        (l) => l !== (lang === "en" ? "en_US" : lang === "th" ? "th_TH" : "zh_CN"),
      ),
      images: [{ url: `${siteUrl}/og.jpg`, width: 1200, height: 630, alt: "STN Pro Supply" }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!LANGS.includes(raw as Lang)) notFound();
  const lang = raw as Lang;

  const T = translations[lang];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: T.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <STNSite lang={lang} />
    </>
  );
}
