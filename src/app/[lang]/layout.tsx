import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { LANGS, htmlLang, translations, type Lang } from "@/lib/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://stnprosupply.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "STN Pro Supply — MRO & Industrial Parts Supplier in Thailand",
    template: "%s | STN Pro Supply",
  },
  description:
    "STN Pro Supply sources and delivers MRO parts, bearings, fasteners, pneumatics and electrical components to factories in every region of Thailand.",
  keywords: [
    "STN Pro Supply",
    "MRO parts Thailand",
    "industrial supply Thailand",
    "maintenance parts supplier",
    "bearings supplier Thailand",
    "pneumatics supplier Thailand",
    "industrial hardware trading",
    "泰国 MRO 供应商",
    "ผู้จัดจำหน่ายอะไหล่โรงงาน",
  ],
  alternates: {
    canonical: siteUrl,
    languages: {
      en: `${siteUrl}/en`,
      th: `${siteUrl}/th`,
      "zh-CN": `${siteUrl}/zh`,
      "x-default": `${siteUrl}/en`,
    },
  },
  verification: {
    google: "pxnsXHK03uefZ2C-YIsjyAGXgkGgvjCIuGQAFzcwPJc",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "STN Pro Supply Limited Partnership",
    title: "STN Pro Supply — MRO & Industrial Parts Supplier in Thailand",
    description:
      "MRO parts, bearings, fasteners, pneumatics and electrical components for factories across Thailand.",
    locale: "en_US",
    alternateLocale: ["th_TH", "zh_CN"],
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "STN Pro Supply — industrial MRO parts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STN Pro Supply — MRO & Industrial Parts Supplier in Thailand",
    description:
      "MRO parts, bearings, fasteners, pneumatics and electrical components for factories across Thailand.",
    images: [`${siteUrl}/og.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang: raw } = await params;
  if (!LANGS.includes(raw as Lang)) notFound();
  const lang = raw as Lang;

  const T = translations[lang];
  const inLanguage = htmlLang[lang];

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "STN Pro Supply Limited Partnership",
    alternateName: "STN Pro Supply",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    image: `${siteUrl}/og.jpg`,
    description: T.footer_blurb,
    email: "stnprosupply@gmail.com",
    telephone: "+66-84-293-5519",
    address: {
      "@type": "PostalAddress",
      streetAddress: "599/97 อาคารลุมพินีวิลล์ ตึกบี 2 ชั้น 7 ถ.ประชาอุทิศ",
      addressLocality: "Bangkok",
      addressRegion: "Bangkok",
      postalCode: "10310",
      addressCountry: "TH",
    },
    areaServed: { "@type": "Country", name: "Thailand" },
    knowsLanguage: ["en", "th", "zh"],
    sameAs: ["https://line.me/R/ti/p/@stnprosupply"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+66-84-293-5519",
      email: "stnprosupply@gmail.com",
      contactType: "sales",
      areaServed: "TH",
      availableLanguage: ["en", "th", "zh"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MRO supply services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: T.serv_mro, description: T.serv_mro_desc } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: T.serv_proc, description: T.serv_proc_desc } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: T.serv_sched, description: T.serv_sched_desc } },
      ],
    },
  };

  return (
    <html lang={inLanguage}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
