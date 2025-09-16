"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, ArrowRight, Building2, Shield, Zap, Users, Factory, Wrench } from "lucide-react";

// STN PRO SUPPLY LIMITED PARTNERSHIP — Company Website (EN/TH)
// Tailwind + shadcn/ui + framer-motion. Drop into Next.js/React app as a page component.
// Brand: black / white / red accents

// --- Simple i18n (EN/TH) ---
const translations = {
  en: {
    nav_about: "About",
    nav_products: "Products",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_brands: "Brands",
    nav_contact: "Contact",
    nav_quote: "Get a quote",

    hero_title: "Industrial trading partner for maintenance parts & hardware",
    hero_sub: "We source and deliver the parts factories rely on—fast, reliable, and cost-effective.",
    cta_quote: "Request a quote",
    cta_browse: "Browse products",
    hero_trust: "Supplying manufacturers across Thailand",

    why_title: "Why STN",
    why_sub: "Outcomes over output. Less downtime, better value.",

    products_title: "Product Categories",
    products_sub: "Representative categories—contact us for specific brands and parts.",

    services_title: "Services",
    services_sub: "Flexible engagement models matched to your goals.",

    industries_title: "Industries Served",
    industries_sub: "STN supports a wide range of manufacturing sectors.",

    brands_title: "Key Brands",
    brands_sub: "Official and cross-brand sourcing from leading industrial manufacturers.",

    contact_title: "Contact STN",
    contact_sub: "Tell us what you need (part names, specs, brands, quantities) and we’ll reply quickly with options.",
    contact_send: "Send request",

    footer_company: "Company",
    footer_contact: "Contact",

    // Added to satisfy TypeScript for bilingual product/service labels
    prod_bearings: "Bearings & Power Transmission",
    prod_fasteners: "Fasteners & Hardware",
    prod_pneumatics: "Pneumatics & Hydraulics",
    prod_electrical: "Electrical & Control",
    prod_tools: "Tools & Safety",
    prod_misc: "Consumables & Misc.",

    serv_mro: "MRO Supply",
    serv_mro_desc: "Reliable sourcing for maintenance, repair, and operations; genuine parts and alternates.",
    serv_proc: "Procurement & Sourcing",
    serv_proc_desc: "Local + international procurement, cross-brand matching, and hard-to-find items.",
    serv_sched: "Scheduled Deliveries",
    serv_sched_desc: "Flexible delivery schedules and blanket orders to keep your lines running.",
  },
  th: {
    nav_about: "เกี่ยวกับเรา",
    nav_products: "สินค้า",
    nav_services: "บริการ",
    nav_industries: "อุตสาหกรรมที่ครอบคลุม",
    nav_brands: "แบรนด์",
    nav_contact: "ติดต่อ",
    nav_quote: "ขอใบเสนอราคา",

    hero_title: "พันธมิตรด้านการจัดหาชิ้นส่วนซ่อมบำรุงและฮาร์ดแวร์สำหรับโรงงาน",
    hero_sub: "จัดหาและส่งมอบชิ้นส่วนที่โรงงานต้องใช้—รวดเร็ว เชื่อถือได้ และคุ้มค่า",
    cta_quote: "ขอใบเสนอราคา",
    cta_browse: "ดูสินค้า",
    hero_trust: "จัดส่งให้ผู้ผลิตทั่วประเทศไทย",

    why_title: "ทำไมต้อง STN",
    why_sub: "ลดเวลาหยุดเครื่อง เพิ่มความคุ้มค่า เน้นผลลัพธ์",

    products_title: "หมวดหมู่สินค้า",
    products_sub: "ตัวอย่างหมวดหมู่—ติดต่อเราเพื่อสอบถามแบรนด์และชิ้นส่วนเฉพาะ",

    services_title: "บริการ",
    services_sub: "ปรับรูปแบบการให้บริการให้เหมาะกับเป้าหมายของคุณ",

    industries_title: "อุตสาหกรรมที่ครอบคลุม",
    industries_sub: "STN รองรับหลากหลายภาคการผลิต",

    brands_title: "แบรนด์ชั้นนำ",
    brands_sub: "จัดซื้อจากแบรนด์ชั้นนำและทางเลือกข้ามแบรนด์",

    contact_title: "ติดต่อ STN",
    contact_sub: "ระบุรายการที่ต้องการ (ชื่ออะไหล่ สเปก แบรนด์ ปริมาณ) แล้วเราจะตอบกลับอย่างรวดเร็ว",
    contact_send: "ขอใบเสนอราคา",

    footer_company: "เกี่ยวกับบริษัท",
    footer_contact: "ติดต่อ",

    // Product categories (TH)
    prod_bearings: "ตลับลูกปืนและส่งกำลัง",
    prod_fasteners: "สกรู น็อต และฮาร์ดแวร์",
    prod_pneumatics: "ระบบลมและไฮดรอลิก",
    prod_electrical: "ระบบไฟฟ้าและควบคุม",
    prod_tools: "เครื่องมือและอุปกรณ์ความปลอดภัย",
    prod_misc: "วัสดุสิ้นเปลืองและอื่น ๆ",

    // Services (TH)
    serv_mro: "การจัดหาชิ้นส่วน MRO",
    serv_mro_desc: "จัดหาชิ้นส่วนสำหรับงานซ่อมบำรุง การซ่อม และการปฏิบัติการ จากแบรนด์แท้และทางเลือก",
    serv_proc: "การจัดซื้อและการจัดหา",
    serv_proc_desc: "จัดซื้อทั้งในประเทศและต่างประเทศ จับคู่ข้ามแบรนด์ และหาสินค้าที่หายาก",
    serv_sched: "การส่งมอบตามกำหนด",
    serv_sched_desc: "กำหนดรอบการส่งมอบและสัญญาจัดซื้อเพื่อให้สายการผลิตไม่หยุดชะงัก",
  },
};

type Lang = keyof typeof translations;

// Brand groups with placeholders for logos under /public/logos
const brandGroups: { title: string; brands: { name: string; logo: string }[] }[] = [
  {
    title: "Automation & Controls",
    brands: [
      { name: "OMRON", logo: "/logos/omron.png" },
      { name: "SIEMENS", logo: "/logos/siemens.png" },
      { name: "Mitsubishi", logo: "/logos/mitsubishi.png" },
      { name: "Panasonic", logo: "/logos/panasonic.png" },
      { name: "IFM", logo: "/logos/ifm.png" },
      { name: "PILZ", logo: "/logos/pilz.png" },
      { name: "Pepperl+Fuchs", logo: "/logos/pepperl-fuchs.png" },
      { name: "SCHNEIDER ELECTRIC", logo: "/logos/schneider.png" },
      { name: "ABB", logo: "/logos/abb.png" },
      { name: "Phoenix Contact", logo: "/logos/phoenix-contact.png" },
      { name: "SICK", logo: "/logos/sick.png" },
      { name: "Keyence", logo: "/logos/keyence.png" },
      { name: "Balluff", logo: "/logos/balluff.png" },
      { name: "Autonics", logo: "/logos/autonics.png" },
      { name: "Leuze", logo: "/logos/leuze.png" },
      { name: "Turck", logo: "/logos/turck.png" },
      { name: "IDEC", logo: "/logos/idec.png" },
      { name: "HARTING", logo: "/logos/harting.png" },
      { name: "HIROSE ELECTRIC", logo: "/logos/hirose.png" },
      { name: "WAGO", logo: "/logos/wago.png" },
      { name: "ORIENTAL MOTOR", logo: "/logos/oriental-motor.png" },
      { name: "Carlo Gavazzi", logo: "/logos/carlo-gavazzi.png" },
      { name: "DANFOSS", logo: "/logos/danfoss.png" },
      { name: "FUJI ELECTRIC", logo: "/logos/fuji-electric.png" },
      { name: "VISHAY", logo: "/logos/vishay.png" },
    ],
  },
  {
    title: "Pneumatics & Fluid Power",
    brands: [
      { name: "AirTAC", logo: "/logos/airtac.png" },
      { name: "SMC", logo: "/logos/smc.png" },
      { name: "NORGREN", logo: "/logos/norgren.png" },
      { name: "FESTO", logo: "/logos/festo.png" },
      { name: "SECOH", logo: "/logos/secoh.png" },
      { name: "HIBLOW", logo: "/logos/hiblow.png" },
    ],
  },
  {
    title: "Bearings & Power Transmission",
    brands: [
      { name: "FAG", logo: "/logos/fag.png" },
      { name: "NSK", logo: "/logos/nsk.png" },
      { name: "NTN", logo: "/logos/ntn.png" },
      { name: "SKF", logo: "/logos/skf.png" },
      { name: "TIMKEN", logo: "/logos/timken.png" },
      { name: "IKO", logo: "/logos/iko.png" },
      { name: "INA", logo: "/logos/ina.png" },
      { name: "FYH", logo: "/logos/fyh.png" },
      { name: "MCGILL", logo: "/logos/mcgill.png" },
      { name: "THK", logo: "/logos/thk.png" },
      { name: "GATES", logo: "/logos/gates.png" },
      { name: "optibelt", logo: "/logos/optibelt.png" },
      { name: "BANDO", logo: "/logos/bando.png" },
      { name: "MITSUBOSHI", logo: "/logos/mitsuboshi.png" },
      { name: "TSUBAKI", logo: "/logos/tsubaki.png" },
      { name: "KANA", logo: "/logos/kana.png" },
      { name: "SEALMASTER", logo: "/logos/sealmaster.png" },
      { name: "Martin", logo: "/logos/martin.png" },
      { name: "FLEXCO", logo: "/logos/flexco.png" },
    ],
  },
  {
    title: "Valves & Flow Control",
    brands: [
      { name: "ARI-Armaturen", logo: "/logos/ari-armaturen.png" },
      { name: "ARITA", logo: "/logos/arita.png" },
      { name: "ASAHI", logo: "/logos/asahi.png" },
      { name: "KITZ", logo: "/logos/kitz.png" },
      { name: "CRANE", logo: "/logos/crane.png" },
      { name: "BURKERT", logo: "/logos/burkert.png" },
      { name: "MUELLER", logo: "/logos/mueller.png" },
      { name: "NIBCO", logo: "/logos/nibco.png" },
      { name: "SPIREX SARCO", logo: "/logos/spirex-sarco.png" },
    ],
  },
  {
    title: "Instrumentation & Process",
    brands: [
      { name: "Endress + Hauser", logo: "/logos/endress-hauser.png" },
      { name: "WIKA", logo: "/logos/wika.png" },
      { name: "WINTERS", logo: "/logos/winters.png" },
      { name: "NUOVA FIMA", logo: "/logos/nuova-fima.png" },
      { name: "WATANABE", logo: "/logos/watanabe.png" },
      { name: "SATO", logo: "/logos/sato.png" },
      { name: "VAQUA", logo: "/logos/vaqua.png" },
      { name: "HC", logo: "/logos/hc.png" },
    ],
  },
  {
    title: "Electrical & Connectivity",
    brands: [
      { name: "HARTING", logo: "/logos/harting.png" },
      { name: "HIROSE ELECTRIC", logo: "/logos/hirose.png" },
      { name: "WAGO", logo: "/logos/wago.png" },
      { name: "VISHAY", logo: "/logos/vishay.png" },
    ],
  },
  {
    title: "Tools & Industrial",
    brands: [
      { name: "KENNEDY", logo: "/logos/kennedy.png" },
      { name: "MATLOCK", logo: "/logos/matlock.png" },
      { name: "KOKEN", logo: "/logos/koken.png" },
      { name: "THOR HAMMER", logo: "/logos/thor-hammer.png" },
      { name: "SENATOR", logo: "/logos/senator.png" },
      { name: "BOTT", logo: "/logos/bott.png" },
      { name: "YAMOTO", logo: "/logos/yamoto.png" },
      { name: "YASKAWA", logo: "/logos/yaskawa.png" },
    ],
  },
];

export default function STNWebsite() {
  const [lang, setLang] = useState<Lang>("en");
  const T = translations[lang];

  const productCategories = [
    { title: lang === 'en' ? "Bearings & Power Transmission" : T.prod_bearings, items: ["Ball/Roller Bearings", "Belts & Pulleys", "Chains & Sprockets", "Couplings"] },
    { title: lang === 'en' ? "Fasteners & Hardware" : T.prod_fasteners, items: ["Bolts/Nuts/Washers", "Anchors", "Rivets", "Threaded Rod"] },
    { title: lang === 'en' ? "Pneumatics & Hydraulics" : T.prod_pneumatics, items: ["Cylinders", "Valves", "Fittings", "Hoses"] },
    { title: lang === 'en' ? "Electrical & Control" : T.prod_electrical, items: ["Sensors", "Switches", "Cables", "Motors", "VFDs"] },
    { title: lang === 'en' ? "Tools & Safety" : T.prod_tools, items: ["Hand/Power Tools", "Measurement", "PPE", "Lockout/Tagout"] },
    { title: lang === 'en' ? "Consumables & Misc." : T.prod_misc, items: ["Sealants", "Lubricants", "Tapes", "Abrasives"] },
  ];

  const services = [
    { title: lang === 'en' ? "MRO Supply" : T.serv_mro, desc: lang === 'en' ? "Reliable sourcing for maintenance, repair, and operations; genuine parts and alternates." : T.serv_mro_desc },
    { title: lang === 'en' ? "Procurement & Sourcing" : T.serv_proc, desc: lang === 'en' ? "Local + international procurement, cross-brand matching, and hard-to-find items." : T.serv_proc_desc },
    { title: lang === 'en' ? "Scheduled Deliveries" : T.serv_sched, desc: lang === 'en' ? "Flexible delivery schedules and blanket orders to keep your lines running." : T.serv_sched_desc },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50/20 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            <span className="font-semibold tracking-tight">STN PRO SUPPLY LIMITED PARTNERSHIP</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-slate-700">{T.nav_about}</a>
            <a href="#products" className="hover:text-slate-700">{T.nav_products}</a>
            <a href="#services" className="hover:text-slate-700">{T.nav_services}</a>
            <a href="#industries" className="hover:text-slate-700">{T.nav_industries}</a>
            <a href="#brands" className="hover:text-slate-700">{T.nav_brands}</a>
            <a href="#contact" className="hover:text-slate-700">{T.nav_contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Button variant="outline" className={`h-8 px-2 ${lang === 'en' ? 'ring-1 ring-slate-400' : ''}`} onClick={() => setLang('en')} aria-pressed={lang==='en'}>EN</Button>
              <Button variant="outline" className={`h-8 px-2 ${lang === 'th' ? 'ring-1 ring-slate-400' : ''}`} onClick={() => setLang('th')} aria-pressed={lang==='th'}>TH</Button>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">{T.nav_quote}</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                {T.hero_title}
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                {T.hero_sub}
              </p>
              <div className="mt-6 flex gap-3">
                <Button className="group bg-red-600 hover:bg-red-700 text-white">{T.cta_quote} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" /></Button>
                <Button variant="outline" className="border-red-600 text-red-700 hover:bg-red-50">{T.cta_browse}</Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-slate-500">
                <Factory className="w-4 h-4" />
                <span className="text-sm">{T.hero_trust}</span>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6 grid gap-4">
                <div className="rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 h-full w-full grid place-content-center text-center">
                  <p className="text-slate-700">Place STN logo here</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-200/40 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.why_title}</h2>
          <p className="mt-3 text-slate-600">{T.why_sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[{ icon: <Shield className="w-6 h-6" />, title: "Quality Assured", desc: "Trusted brands, traceable sourcing, and clear specs." }, { icon: <Zap className="w-6 h-6" />, title: "Rapid Response", desc: "Same-day quotes and fast delivery to reduce downtime." }, { icon: <Users className="w-6 h-6" />, title: "Expert Support", desc: "Hands-on guidance for maintenance teams and engineers." }].map((f, i) => (
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
      <section id="products" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.products_title}</h2>
            <p className="mt-3 text-slate-600">{T.products_sub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {productCategories.map((c, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2"><Wrench className="w-5 h-5" /> {c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  <ul className="list-disc ml-5 space-y-1">
                    {c.items.map((x, j) => <li key={j}>{x}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
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

      {/* Industries */}
      <section id="industries" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.industries_title}</h2>
            <p className="mt-3 text-slate-600">{T.industries_sub}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {["Food & Beverage", "Automotive & Parts", "Electronics", "Packaging", "General Manufacturing"].map((ind, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="pt-6 text-center text-slate-700">{ind}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands (Grouped) */}
      <section id="brands" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.brands_title}</h2>
            <p className="mt-3 text-slate-600">{T.brands_sub}</p>
          </div>
          <div className="space-y-12">
            {brandGroups.map((group, gi) => (
              <div key={gi}>
                <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                  {group.brands.map((b, i) => (
                    <div key={i} className="rounded-xl border p-4 text-center shadow-sm hover:shadow transition flex flex-col items-center justify-center bg-white">
                      <img src={b.logo} alt={`${b.name} logo`} className="max-h-12 object-contain mb-2" />
                      <span className="text-sm font-medium text-slate-800">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white max-w-3xl mx-auto px-4 py-16 md:py-20 border-t">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{T.contact_title}</h2>
          <p className="mt-3 text-slate-600">{T.contact_sub}</p>
        </div>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="pt-6">
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder={lang === 'en' ? 'Your name' : 'ชื่อของคุณ'} required />
                <Input type="email" placeholder={lang === 'en' ? 'Email' : 'อีเมล'} required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder={lang === 'en' ? 'Company' : 'บริษัท'} />
                <Input placeholder={lang === 'en' ? 'Phone' : 'โทรศัพท์'} />
              </div>
              <Textarea placeholder={lang === 'en' ? 'List parts, brands, specs, quantities' : 'ระบุรายการ อะไหล่ แบรนด์ สเปก จำนวน'} rows={5} />
              <div className="flex items-center gap-3 flex-wrap">
                <Button type="submit" className="group bg-red-600 hover:bg-red-700 text-white">{T.contact_send} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" /></Button>
                <div className="flex items-center gap-4 text-slate-500 text-sm">
                  <span className="inline-flex items-center gap-1"><Mail className="w-4 h-4" /> stnprosupply@gmail.com</span>
                  <span className="inline-flex items-center gap-1"><Phone className="w-4 h-4" /> 084-293-5519</span>
                </div>
              </div>
            </form>
            <div className="mt-6 text-sm text-slate-600">
              <p><strong>{lang === 'en' ? 'Address (TH):' : 'ที่อยู่ (ไทย):'}</strong> อาคารลุมพินีวิลล์ ตึกบี 2 ชั้น 7 เลขที่ 599/97 ถ.ประชาอุทิศ แขวงสามเสนนอก เขตห้วยขวาง กทม. 10310</p>
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
            <p className="text-slate-600">Trading company for manufacturing maintenance parts, hardware, tools, and MRO supplies.</p>
          </div>
          <div>
            <p className="font-medium mb-2">{T.footer_company}</p>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#about" className="hover:text-slate-800">{T.nav_about}</a></li>
              <li><a href="#products" className="hover:text-slate-800">{T.nav_products}</a></li>
              <li><a href="#services" className="hover:text-slate-800">{T.nav_services}</a></li>
              <li><a href="#brands" className="hover:text-slate-800">{T.nav_brands}</a></li>
              <li><a href="#contact" className="hover:text-slate-800">{T.nav_contact}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">{T.footer_contact}</p>
            <ul className="space-y-2 text-slate-600">
              <li>084-293-5519</li>
              <li>stnprosupply@gmail.com</li>
              <li>Bangkok, Thailand</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-6 border-t">© {new Date().getFullYear()} STN PRO SUPPLY LIMITED PARTNERSHIP. All rights reserved.</div>
      </footer>
    </div>
  );
}
