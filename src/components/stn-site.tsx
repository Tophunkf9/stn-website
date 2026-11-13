"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  ArrowRight,
  Building2,
  Shield,
  Zap,
  Users,
  Factory,
  Wrench,
  MessageSquare,
  Search,
  FileText,
  Truck,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { translations, type Lang } from "@/lib/i18n";
import { brandGroups } from "@/lib/brand-groups";

const ADDRESS_TH =
  "อาคารลุมพินีวิลล์ ตึกบี 2 ชั้น 7 เลขที่ 599/97 ถ.ประชาอุทิศ แขวงสามเสนนอก เขตห้วยขวาง กทม. 10310";
const EMAIL = "stnprosupply@gmail.com";
const PHONE = "084-293-5519";

const trustedBrandLogos = [
  "abb", "ari-armaturen", "arita", "burkert", "carlo-gavazzi", "crane", "danfoss",
  "endress-hauser", "fag", "festo", "fyh", "harting", "hirose", "ifm", "ina",
  "keyence", "leuze", "martin", "mitsubishi", "mueller", "nsk", "ntn", "omron",
  "optibelt", "oriental-motor", "panasonic", "pepperl-fuchs", "phoenix-contact",
  "pilz", "schneider", "sick", "siemens", "skf", "smc", "thk", "timken",
  "tsubaki", "vishay", "wago", "wika", "yaskawa",
];

const langLinks: { code: Lang; href: string; label: string }[] = [
  { code: "en", href: "/", label: "EN" },
  { code: "th", href: "/th", label: "TH" },
  { code: "zh", href: "/zh", label: "中文" },
];

export default function STNSite({ lang }: { lang: Lang }) {
  const T = translations[lang];

  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const productCategories = [
    { title: T.prod_bearings, items: T.prod_bearings_items },
    { title: T.prod_fasteners, items: T.prod_fasteners_items },
    { title: T.prod_pneumatics, items: T.prod_pneumatics_items },
    { title: T.prod_electrical, items: T.prod_electrical_items },
    { title: T.prod_tools, items: T.prod_tools_items },
    { title: T.prod_misc, items: T.prod_misc_items },
  ];

  const services = [
    { title: T.serv_mro, desc: T.serv_mro_desc },
    { title: T.serv_proc, desc: T.serv_proc_desc },
    { title: T.serv_sched, desc: T.serv_sched_desc },
  ];

  // ponytail: mailto keeps the form working with zero backend. Swap to Formspree/Resend
  // if leads need to land in a mailbox/CMS instead of the visitor's email client.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Quote request — ${form.company || form.name || "Website"}`;
    const body = [
      `${T.form_name}: ${form.name}`,
      `${T.form_email}: ${form.email}`,
      `${T.form_company}: ${form.company}`,
      `${T.form_phone}: ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50/20 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 shrink-0" />
            <span className="font-semibold tracking-tight text-sm md:text-base whitespace-nowrap">
              STN PRO SUPPLY
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-4 text-[13px]">
            <a href="#about" className="hover:text-slate-700">{T.nav_about}</a>
            <a href="#products" className="hover:text-slate-700">{T.nav_products}</a>
            <a href="#services" className="hover:text-slate-700">{T.nav_services}</a>
            <a href="#stnflow" className="hover:text-slate-700">{T.nav_stnflow}</a>
            <a href="#industries" className="hover:text-slate-700">{T.nav_industries}</a>
            <a href="#coverage" className="hover:text-slate-700">{T.nav_coverage}</a>
            <a href="#brands" className="hover:text-slate-700">{T.nav_brands}</a>
            <a href="#contact" className="hover:text-slate-700">{T.nav_contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {langLinks.map((l) => (
                <Link
                  key={l.code}
                  href={l.href}
                  hrefLang={l.code === "zh" ? "zh-CN" : l.code}
                  aria-current={lang === l.code ? "true" : undefined}
                  className={`inline-flex h-8 items-center rounded-md border px-2 text-sm whitespace-nowrap ${
                    lang === l.code ? "ring-1 ring-slate-400 bg-slate-50" : "hover:bg-slate-50"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <a href="#contact">{T.nav_quote}</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-20 md:pt-28 pb-8 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
                <Image
                  src="/hero-parts.jpg"
                  alt="STN Pro Supply — industrial MRO parts including bearings, fasteners, pneumatics, and electrical components"
                  width={1600}
                  height={1194}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-200/40 rounded-full blur-2xl -z-10" />
            </motion.div>
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">{T.hero_title}</h1>
              <p className="mt-4 text-lg text-slate-600">{T.hero_sub}</p>
              <div className="mt-6 flex gap-3">
                <Button asChild className="group bg-red-600 hover:bg-red-700 text-white">
                  <a href="#contact">
                    {T.cta_quote}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-red-600 text-red-700 hover:bg-red-50">
                  <a href="#products">{T.cta_browse}</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-slate-500">
                <Factory className="w-4 h-4" />
                <span className="text-sm">{T.hero_trust}</span>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 md:mt-14 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-12 items-center animate-marquee-rtl">
              {[...trustedBrandLogos, ...trustedBrandLogos].map((slug, i) => (
                <img
                  key={`${slug}-${i}`}
                  src={`/logos/${slug}.png`}
                  alt={slug}
                  className="h-12 md:h-16 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why STN */}
      <section id="about" className="max-w-6xl mx-auto px-4 pt-4 md:pt-6 pb-16 md:pb-20 scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.why_title}</h2>
          <p className="mt-3 text-slate-600">{T.why_sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Shield className="w-6 h-6" />, title: T.why_1_title, desc: T.why_1_desc },
            { icon: <Zap className="w-6 h-6" />, title: T.why_2_title, desc: T.why_2_desc },
            { icon: <Users className="w-6 h-6" />, title: T.why_3_title, desc: T.why_3_desc },
          ].map((f, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-xl bg-red-50">{f.icon}</div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-white border-y scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.products_title}</h2>
            <p className="mt-3 text-slate-600">{T.products_sub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {productCategories.map((c, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Wrench className="w-5 h-5" /> {c.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  <ul className="list-disc ml-5 space-y-1">
                    {c.items.map((x, j) => (
                      <li key={j}>{x}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16 md:py-20 scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.services_title}</h2>
          <p className="mt-3 text-slate-600">{T.services_sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* STNflow Process */}
      <section id="stnflow" className="bg-white border-y scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.stnflow_title}</h2>
            <p className="mt-3 text-slate-600">{T.stnflow_sub}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <MessageSquare className="w-6 h-6" />, title: T.stnflow_step1_title, desc: T.stnflow_step1_desc },
              { icon: <Search className="w-6 h-6" />, title: T.stnflow_step2_title, desc: T.stnflow_step2_desc },
              { icon: <FileText className="w-6 h-6" />, title: T.stnflow_step3_title, desc: T.stnflow_step3_desc },
              { icon: <Truck className="w-6 h-6" />, title: T.stnflow_step4_title, desc: T.stnflow_step4_desc },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: T.stnflow_step5_title, desc: T.stnflow_step5_desc },
            ].map((step, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-xl bg-red-50">{step.icon}</div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">{step.desc}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-slate-50 p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">{T.stnflow_why_title}</h3>
            <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {[T.stnflow_why_1, T.stnflow_why_2, T.stnflow_why_3, T.stnflow_why_4].map((w, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white border-y scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.industries_title}</h2>
            <p className="mt-3 text-slate-600">{T.industries_sub}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {T.industries.map((ind, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="pt-6 text-center text-slate-700">{ind}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="max-w-6xl mx-auto px-4 py-16 md:py-20 scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center justify-center gap-2">
            <MapPin className="w-7 h-7 text-red-600" /> {T.coverage_title}
          </h2>
          <p className="mt-3 text-slate-600">{T.coverage_sub}</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {T.coverage_regions.map((r, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{r.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">{r.desc}</CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">{T.coverage_note}</p>
      </section>

      {/* Brands (grouped) */}
      <section id="brands" className="bg-white border-y scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.brands_title}</h2>
            <p className="mt-3 text-slate-600">{T.brands_sub}</p>
          </div>
          <div className="space-y-12">
            {brandGroups.map((group, gi) => (
              <div key={gi}>
                <h3 className="text-xl font-semibold mb-4">{T[group.titleKey] as string}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                  {group.brands.map((b, i) => (
                    <div
                      key={i}
                      className="rounded-xl border p-4 text-center shadow-sm hover:shadow transition flex flex-col items-center justify-center bg-white"
                    >
                      {b.logo ? (
                        <img src={b.logo} alt={`${b.name} logo`} className="max-h-12 object-contain mb-2" />
                      ) : (
                        <span className="mb-2 h-12 flex items-center justify-center text-lg font-semibold tracking-wide text-slate-700">
                          {b.name}
                        </span>
                      )}
                      <span className="text-sm font-medium text-slate-800">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-4 py-16 md:py-20 scroll-mt-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.faq_title}</h2>
          <p className="mt-3 text-slate-600">{T.faq_sub}</p>
        </div>
        <div className="space-y-3">
          {T.faq.map((item, i) => (
            <details key={i} className="group rounded-xl border bg-white p-4 shadow-sm">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between gap-4">
                {item.q}
                <span className="text-red-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white max-w-3xl mx-auto px-4 py-16 md:py-20 border-t scroll-mt-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.contact_title}</h2>
          <p className="mt-3 text-slate-600">{T.contact_sub}</p>
        </div>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="pt-6">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder={T.form_name}
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder={T.form_email}
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="company"
                  placeholder={T.form_company}
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder={T.form_phone}
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <Textarea
                name="message"
                placeholder={T.form_message}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="flex items-center gap-3 flex-wrap">
                <Button type="submit" className="group bg-red-600 hover:bg-red-700 text-white">
                  {T.contact_send}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <div className="flex items-center gap-4 text-slate-500 text-sm">
                  <span className="inline-flex items-center gap-1">
                    <Mail className="w-4 h-4" /> {EMAIL}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="w-4 h-4" /> {PHONE}
                  </span>
                </div>
              </div>
              {sent && <p className="text-sm text-slate-600">{T.contact_sent}</p>}
            </form>
            <div className="mt-6 text-sm text-slate-600">
              <p>
                <strong>{T.address_label}</strong> {ADDRESS_TH}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5" />
              <span className="font-semibold tracking-tight">STN PRO SUPPLY LIMITED PARTNERSHIP</span>
            </div>
            <p className="text-slate-600">{T.footer_blurb}</p>
          </div>
          <div>
            <p className="font-medium mb-2">{T.footer_company}</p>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#about" className="hover:text-slate-800">{T.nav_about}</a></li>
              <li><a href="#products" className="hover:text-slate-800">{T.nav_products}</a></li>
              <li><a href="#services" className="hover:text-slate-800">{T.nav_services}</a></li>
              <li><a href="#stnflow" className="hover:text-slate-800">{T.nav_stnflow}</a></li>
              <li><a href="#coverage" className="hover:text-slate-800">{T.nav_coverage}</a></li>
              <li><a href="#brands" className="hover:text-slate-800">{T.nav_brands}</a></li>
              <li><a href="#faq" className="hover:text-slate-800">{T.faq_title}</a></li>
              <li><a href="#contact" className="hover:text-slate-800">{T.nav_contact}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">{T.footer_contact}</p>
            <ul className="space-y-2 text-slate-600">
              <li>{PHONE}</li>
              <li>{EMAIL}</li>
              <li>LINE ID: @stnprosupply</li>
              <li>LINE: Tophunk</li>
              <li>{ADDRESS_TH}</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-6 border-t">
          © {new Date().getFullYear()} STN PRO SUPPLY LIMITED PARTNERSHIP. {T.footer_rights}
        </div>
      </footer>
    </div>
  );
}
