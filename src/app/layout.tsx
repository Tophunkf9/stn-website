import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://stnprosupply.com";
const siteDescription =
  "Industrial trading partner for maintenance parts & hardware in Thailand. We source and deliver the MRO parts factories rely on\u2014bearings, fasteners, pneumatics, electrical, tools, and more\u2014fast, reliable, and cost-effective.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "STN PRO SUPPLY LIMITED PARTNERSHIP",
    template: "%s | STN Pro Supply",
  },
  description: siteDescription,
  keywords: [
    "STN Pro Supply",
    "MRO parts Thailand",
    "industrial supply Thailand",
    "maintenance parts supplier",
    "bearings and fasteners",
    "industrial hardware trading",
  ],
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "pxnsXHK03uefZ2C-YIsjyAGXgkGgvjCIuGQAFzcwPJc",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "STN Pro Supply Limited Partnership",
    title: "STN PRO SUPPLY LIMITED PARTNERSHIP",
    description: siteDescription,
    locale: "en_US",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "STN Pro Supply" }],
  },
  twitter: {
    card: "summary",
    title: "STN PRO SUPPLY LIMITED PARTNERSHIP",
    description: siteDescription,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "STN Pro Supply Limited Partnership",
  alternateName: "STN Pro Supply",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description: siteDescription,
  email: "stnprosupply@gmail.com",
  telephone: "+66-84-293-5519",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
