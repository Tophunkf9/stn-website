"use client";

import Script from "next/script";
import { useEffect } from "react";

// Google Analytics 4. Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in Vercel → Settings →
// Environment Variables, or replace the fallback below. With no ID nothing is loaded.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

type Gtag = (...args: unknown[]) => void;

export function track(event: string, params: Record<string, unknown> = {}) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (gtag) gtag("event", event, params);
}

export default function Analytics() {
  // One delegated listener records every LINE / phone / email click, wherever the link is.
  useEffect(() => {
    if (!GA_ID) return;
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a");
      const href = a?.getAttribute("href") || "";
      const location = a?.closest("header, footer, section")?.id || a?.closest("header, footer")?.tagName.toLowerCase() || "page";
      if (href.includes("line.me")) track("contact_line", { link_url: href, location });
      else if (href.startsWith("tel:")) track("contact_phone", { link_url: href, location });
      else if (href.startsWith("mailto:")) track("contact_email", { link_url: href, location });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
