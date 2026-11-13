// Translations for stnprosupply.com — EN / TH / ZH (simplified)
// Single dictionary so every string lives in one place and every locale is complete.
// ponytail: plain objects, no i18n library. Add next-intl only if we need plurals/ICU.

export type Lang = "en" | "th" | "zh";

export const LANGS: Lang[] = ["en", "th", "zh"];

export type Translation = {
  nav_about: string;
  nav_products: string;
  nav_services: string;
  nav_industries: string;
  nav_coverage: string;
  nav_brands: string;
  nav_contact: string;
  nav_quote: string;
  nav_stnflow: string;

  hero_title: string;
  hero_sub: string;
  cta_quote: string;
  cta_browse: string;
  hero_trust: string;

  why_title: string;
  why_sub: string;
  why_1_title: string;
  why_1_desc: string;
  why_2_title: string;
  why_2_desc: string;
  why_3_title: string;
  why_3_desc: string;

  products_title: string;
  products_sub: string;
  prod_bearings: string;
  prod_bearings_items: string[];
  prod_fasteners: string;
  prod_fasteners_items: string[];
  prod_pneumatics: string;
  prod_pneumatics_items: string[];
  prod_electrical: string;
  prod_electrical_items: string[];
  prod_tools: string;
  prod_tools_items: string[];
  prod_misc: string;
  prod_misc_items: string[];

  services_title: string;
  services_sub: string;
  serv_mro: string;
  serv_mro_desc: string;
  serv_proc: string;
  serv_proc_desc: string;
  serv_sched: string;
  serv_sched_desc: string;

  stnflow_title: string;
  stnflow_sub: string;
  stnflow_step1_title: string;
  stnflow_step1_desc: string;
  stnflow_step2_title: string;
  stnflow_step2_desc: string;
  stnflow_step3_title: string;
  stnflow_step3_desc: string;
  stnflow_step4_title: string;
  stnflow_step4_desc: string;
  stnflow_step5_title: string;
  stnflow_step5_desc: string;
  stnflow_why_title: string;
  stnflow_why_1: string;
  stnflow_why_2: string;
  stnflow_why_3: string;
  stnflow_why_4: string;

  industries_title: string;
  industries_sub: string;
  industries: string[];

  coverage_title: string;
  coverage_sub: string;
  coverage_regions: { name: string; desc: string }[];
  coverage_note: string;

  brands_title: string;
  brands_sub: string;
  bg_automation: string;
  bg_pneumatics: string;
  bg_bearings: string;
  bg_valves: string;
  bg_instrumentation: string;
  bg_electrical: string;
  bg_tools: string;

  faq_title: string;
  faq_sub: string;
  faq: { q: string; a: string }[];

  contact_title: string;
  contact_sub: string;
  contact_send: string;
  contact_sent: string;

  form_name: string;
  form_email: string;
  form_company: string;
  form_phone: string;
  form_message: string;

  address_label: string;
  footer_company: string;
  footer_contact: string;
  footer_blurb: string;
  footer_rights: string;
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav_about: "About",
    nav_products: "Products",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_coverage: "Coverage",
    nav_brands: "Brands",
    nav_contact: "Contact",
    nav_quote: "Get a quote",
    nav_stnflow: "Process",

    hero_title: "Industrial trading partner for maintenance parts & hardware",
    hero_sub:
      "We source and deliver the parts factories rely on—fast, reliable, and cost-effective.",
    cta_quote: "Request a quote",
    cta_browse: "Browse products",
    hero_trust: "Supplying manufacturers in every region of Thailand",

    why_title: "Why STN",
    why_sub: "Outcomes over output. Less downtime, better value.",
    why_1_title: "Quality Assured",
    why_1_desc: "Trusted brands, traceable sourcing, and clear specs.",
    why_2_title: "Rapid Response",
    why_2_desc: "Same-day quotes and fast delivery to reduce downtime.",
    why_3_title: "Expert Support",
    why_3_desc: "Hands-on guidance for maintenance teams and engineers.",

    products_title: "Product Categories",
    products_sub: "Representative categories—contact us for specific brands and parts.",
    prod_bearings: "Bearings & Power Transmission",
    prod_bearings_items: ["Ball/Roller Bearings", "Belts & Pulleys", "Chains & Sprockets", "Couplings"],
    prod_fasteners: "Fasteners & Hardware",
    prod_fasteners_items: ["Bolts/Nuts/Washers", "Anchors", "Rivets", "Threaded Rod"],
    prod_pneumatics: "Pneumatics & Hydraulics",
    prod_pneumatics_items: ["Cylinders", "Valves", "Fittings", "Hoses"],
    prod_electrical: "Electrical & Control",
    prod_electrical_items: ["Sensors", "Switches", "Cables", "Motors", "VFDs"],
    prod_tools: "Tools & Safety",
    prod_tools_items: ["Hand/Power Tools", "Measurement", "PPE", "Lockout/Tagout"],
    prod_misc: "Consumables & Misc.",
    prod_misc_items: ["Sealants", "Lubricants", "Tapes", "Abrasives"],

    services_title: "Services",
    services_sub: "Flexible engagement models matched to your goals.",
    serv_mro: "MRO Supply",
    serv_mro_desc:
      "Reliable sourcing for maintenance, repair, and operations; genuine parts and alternates.",
    serv_proc: "Procurement & Sourcing",
    serv_proc_desc:
      "Local + international procurement, cross-brand matching, and hard-to-find items.",
    serv_sched: "Scheduled Deliveries",
    serv_sched_desc:
      "Flexible delivery schedules and blanket orders to keep your lines running.",

    stnflow_title: "STNflow — A Reliable Process, From First Request to the Shop Floor",
    stnflow_sub:
      "We designed every step to be fast and traceable, so your line spends less time waiting.",
    stnflow_step1_title: "Request",
    stnflow_step1_desc:
      "Send part names, specs, or photos—our team helps identify replacements if the original is discontinued.",
    stnflow_step2_title: "Source & Compare",
    stnflow_step2_desc:
      "We check pricing and stock across 60+ partner brands, with alternatives ready for urgent needs.",
    stnflow_step3_title: "Digital Quote",
    stnflow_step3_desc:
      "Get your quote as a link via STNflow—open and download the PDF instantly, no waiting on email attachments.",
    stnflow_step4_title: "Delivery",
    stnflow_step4_desc:
      "Scheduled or urgent delivery, with blanket orders available for recurring items.",
    stnflow_step5_title: "Follow-up & Planning",
    stnflow_step5_desc:
      "We check in after delivery and help you plan ahead for your next stock cycle.",
    stnflow_why_title: "Why Choose STN",
    stnflow_why_1: "One-stop MRO—no need to coordinate with multiple suppliers.",
    stnflow_why_2: "Trusted brands—with alternatives ready when stock runs out.",
    stnflow_why_3: "Transparent at every step—through our STNflow digital document system.",
    stnflow_why_4: "Fast response—less downtime for your production line.",

    industries_title: "Industries Served",
    industries_sub: "STN supports a wide range of manufacturing sectors.",
    industries: [
      "Food & Beverage",
      "Automotive & Parts",
      "Electronics",
      "Packaging",
      "General Manufacturing",
    ],

    coverage_title: "Service Coverage Across Thailand",
    coverage_sub:
      "We supply factories in every region of Thailand, with scheduled and urgent delivery.",
    coverage_regions: [
      { name: "Bangkok & Vicinity", desc: "Bangkok, Samut Prakan, Nonthaburi, Pathum Thani, Samut Sakhon" },
      { name: "Central & Western", desc: "Ayutthaya, Saraburi, Nakhon Pathom, Kanchanaburi, Ratchaburi" },
      { name: "Eastern Seaboard (EEC)", desc: "Chonburi, Rayong, Chachoengsao, Prachinburi" },
      { name: "Northern Thailand", desc: "Chiang Mai, Lamphun, Chiang Rai, Phitsanulok" },
      { name: "Northeastern Thailand", desc: "Nakhon Ratchasima, Khon Kaen, Udon Thani, Ubon Ratchathani" },
      { name: "Southern Thailand", desc: "Hat Yai, Songkhla, Surat Thani, Phuket" },
    ],
    coverage_note:
      "Delivery time depends on stock location—confirm with our team. On-site visits by appointment.",

    brands_title: "Key Brands",
    brands_sub: "Official and cross-brand sourcing from leading industrial manufacturers.",
    bg_automation: "Automation & Controls",
    bg_pneumatics: "Pneumatics & Fluid Power",
    bg_bearings: "Bearings & Power Transmission",
    bg_valves: "Valves & Flow Control",
    bg_instrumentation: "Instrumentation & Process",
    bg_electrical: "Electrical & Connectivity",
    bg_tools: "Tools & Industrial",

    faq_title: "Frequently Asked Questions",
    faq_sub: "Quick answers for maintenance and procurement teams.",
    faq: [
      {
        q: "Do you deliver outside Bangkok?",
        a: "Yes. We supply factories in every region of Thailand. Delivery time depends on the stock location of each item—our team confirms it with your quotation.",
      },
      {
        q: "Can you source discontinued or hard-to-find parts?",
        a: "Yes. Send the part number, nameplate photo, or drawing. We cross-reference across 60+ brands and propose a compatible replacement when the original is discontinued.",
      },
      {
        q: "Are the parts genuine?",
        a: "We supply genuine parts and clearly labelled alternatives. Specifications and brand are stated on every quotation before you order.",
      },
      {
        q: "How fast do I get a quotation?",
        a: "Same-day quotations for standard requests. Items that need cross-brand checking or import lead time may take longer—we tell you up front.",
      },
      {
        q: "How do I send a request?",
        a: "Use the form on this page, email stnprosupply@gmail.com, or message us on LINE @stnprosupply. Part names, specs, photos and quantities help us quote faster.",
      },
    ],

    contact_title: "Contact STN",
    contact_sub:
      "Tell us what you need (part names, specs, brands, quantities) and we’ll reply quickly with options.",
    contact_send: "Send request",
    contact_sent: "Your email app should now open with the request filled in. If it doesn’t, email us at stnprosupply@gmail.com.",

    form_name: "Your name",
    form_email: "Email",
    form_company: "Company",
    form_phone: "Phone",
    form_message: "List parts, brands, specs, quantities",

    address_label: "Address:",
    footer_company: "Company",
    footer_contact: "Contact",
    footer_blurb:
      "Trading company for manufacturing maintenance parts, hardware, tools, and MRO supplies.",
    footer_rights: "All rights reserved.",
  },

  th: {
    nav_about: "เกี่ยวกับเรา",
    nav_products: "สินค้า",
    nav_services: "บริการ",
    nav_industries: "อุตสาหกรรม",
    nav_coverage: "พื้นที่ให้บริการ",
    nav_brands: "แบรนด์",
    nav_contact: "ติดต่อ",
    nav_quote: "ขอใบเสนอราคา",
    nav_stnflow: "กระบวนการ",

    hero_title: "พันธมิตรด้านการจัดหาชิ้นส่วนซ่อมบำรุงและฮาร์ดแวร์สำหรับโรงงาน",
    hero_sub: "จัดหาและส่งมอบชิ้นส่วนที่โรงงานต้องใช้—รวดเร็ว เชื่อถือได้ และคุ้มค่า",
    cta_quote: "ขอใบเสนอราคา",
    cta_browse: "ดูสินค้า",
    hero_trust: "จัดส่งให้ผู้ผลิตทั่วทุกภาคของประเทศไทย",

    why_title: "ทำไมต้อง STN",
    why_sub: "ลดเวลาหยุดเครื่อง เพิ่มความคุ้มค่า เน้นผลลัพธ์",
    why_1_title: "คุณภาพที่ตรวจสอบได้",
    why_1_desc: "แบรนด์ที่เชื่อถือได้ แหล่งที่มาโปร่งใส และสเปกชัดเจน",
    why_2_title: "ตอบสนองรวดเร็ว",
    why_2_desc: "เสนอราคาภายในวันเดียว จัดส่งเร็ว เพื่อลดเวลาหยุดเครื่อง",
    why_3_title: "ทีมงานให้คำปรึกษา",
    why_3_desc: "แนะนำหน้างานสำหรับทีมซ่อมบำรุงและวิศวกร",

    products_title: "หมวดหมู่สินค้า",
    products_sub: "ตัวอย่างหมวดหมู่—ติดต่อเราเพื่อสอบถามแบรนด์และชิ้นส่วนเฉพาะ",
    prod_bearings: "ตลับลูกปืนและระบบส่งกำลัง",
    prod_bearings_items: ["ตลับลูกปืนเม็ดกลม/เม็ดเรียง", "สายพานและพูเลย์", "โซ่และเฟืองโซ่", "คัปปลิ้ง"],
    prod_fasteners: "สกรู น็อต และฮาร์ดแวร์",
    prod_fasteners_items: ["สกรู/น็อต/แหวน", "พุกยึด", "หมุดย้ำ", "เหล็กเกลียวเต็มตัว"],
    prod_pneumatics: "ระบบลมและไฮดรอลิก",
    prod_pneumatics_items: ["กระบอกลม", "วาล์ว", "ข้อต่อ", "สายยาง"],
    prod_electrical: "ระบบไฟฟ้าและควบคุม",
    prod_electrical_items: ["เซ็นเซอร์", "สวิตช์", "สายไฟ", "มอเตอร์", "อินเวอร์เตอร์ (VFD)"],
    prod_tools: "เครื่องมือและความปลอดภัย",
    prod_tools_items: ["เครื่องมือมือ/ไฟฟ้า", "เครื่องมือวัด", "อุปกรณ์ป้องกันส่วนบุคคล", "ล็อกเอาท์แท็กเอาท์"],
    prod_misc: "วัสดุสิ้นเปลืองและอื่น ๆ",
    prod_misc_items: ["สารซีล", "สารหล่อลื่น", "เทป", "วัสดุขัดสี"],

    services_title: "บริการ",
    services_sub: "ปรับรูปแบบการให้บริการให้เหมาะกับเป้าหมายของคุณ",
    serv_mro: "การจัดหาชิ้นส่วน MRO",
    serv_mro_desc:
      "จัดหาชิ้นส่วนสำหรับงานซ่อมบำรุง การซ่อม และการปฏิบัติการ จากแบรนด์แท้และทางเลือก",
    serv_proc: "การจัดซื้อและการจัดหา",
    serv_proc_desc: "จัดซื้อทั้งในประเทศและต่างประเทศ จับคู่ข้ามแบรนด์ และหาสินค้าที่หายาก",
    serv_sched: "การส่งมอบตามกำหนด",
    serv_sched_desc: "กำหนดรอบการส่งมอบและสัญญาจัดซื้อเพื่อให้สายการผลิตไม่หยุดชะงัก",

    stnflow_title: "STNflow — กระบวนการจัดหาที่ไว้ใจได้ ตั้งแต่คำขอแรกจนถึงหน้างาน",
    stnflow_sub: "เราออกแบบทุกขั้นตอนให้เร็วและตรวจสอบได้ ลดเวลาที่สายการผลิตของคุณต้องหยุดรอ",
    stnflow_step1_title: "รับคำขอ",
    stnflow_step1_desc:
      "รับสเปก ชื่อชิ้นส่วน หรือรูปภาพจากลูกค้า พร้อมทีมงานช่วยระบุรุ่นทดแทนหากของเดิมเลิกผลิต",
    stnflow_step2_title: "จัดหาและเทียบราคา",
    stnflow_step2_desc:
      "ตรวจสอบราคาและสต็อกจากเครือข่ายแบรนด์กว่า 60 แบรนด์ พร้อมทางเลือกในกรณีเร่งด่วน",
    stnflow_step3_title: "ส่งใบเสนอราคาแบบดิจิทัล",
    stnflow_step3_desc:
      "ส่งใบเสนอราคาเป็นลิงก์ผ่านระบบ STNflow เปิดดูและดาวน์โหลด PDF ได้ทันทีจากมือถือหรือคอมพิวเตอร์",
    stnflow_step4_title: "จัดส่ง",
    stnflow_step4_desc:
      "จัดส่งตามกำหนดหรือแบบเร่งด่วน รองรับคำสั่งซื้อแบบต่อเนื่อง (blanket order) สำหรับของใช้ประจำ",
    stnflow_step5_title: "ติดตามผลและวางแผนล่วงหน้า",
    stnflow_step5_desc: "ทีมงานติดตามผลหลังส่งมอบ พร้อมให้คำแนะนำเพื่อวางแผนสต็อกครั้งถัดไป",
    stnflow_why_title: "ทำไมต้องเลือก STN",
    stnflow_why_1: "ครบในที่เดียว—ไม่ต้องประสานงานกับซัพพลายเออร์หลายเจ้า",
    stnflow_why_2: "แบรนด์ที่ไว้ใจ—พร้อมทางเลือกเมื่อของขาดตลาด",
    stnflow_why_3: "โปร่งใสทุกขั้นตอน—ผ่านระบบเอกสารดิจิทัล STNflow",
    stnflow_why_4: "ตอบสนองเร็ว—ลดเวลาหยุดสายการผลิต",

    industries_title: "อุตสาหกรรมที่ให้บริการ",
    industries_sub: "STN รองรับหลากหลายภาคการผลิต",
    industries: ["อาหารและเครื่องดื่ม", "ยานยนต์และชิ้นส่วน", "อิเล็กทรอนิกส์", "บรรจุภัณฑ์", "การผลิตทั่วไป"],

    coverage_title: "พื้นที่ให้บริการทั่วทุกภาคของประเทศไทย",
    coverage_sub: "เราจัดส่งให้โรงงานในทุกภาคของประเทศไทย ทั้งแบบตามกำหนดและเร่งด่วน",
    coverage_regions: [
      { name: "กรุงเทพฯ และปริมณฑล", desc: "กรุงเทพฯ สมุทรปราการ นนทบุรี ปทุมธานี สมุทรสาคร" },
      { name: "ภาคกลางและภาคตะวันตก", desc: "อยุธยา สระบุรี นครปฐม กาญจนบุรี ราชบุรี" },
      { name: "ภาคตะวันออก (EEC)", desc: "ชลบุรี ระยอง ฉะเชิงเทรา ปราจีนบุรี" },
      { name: "ภาคเหนือ", desc: "เชียงใหม่ ลำพูน เชียงราย พิษณุโลก" },
      { name: "ภาคตะวันออกเฉียงเหนือ", desc: "นครราชสีมา ขอนแก่น อุดรธานี" },
      { name: "ภาคใต้", desc: "หาดใหญ่ สงขลา สุราษฎร์ธานี ภูเก็ต" },
    ],
    coverage_note:
      "ระยะเวลาจัดส่งขึ้นอยู่กับแหล่งสต็อก—ยืนยันกับทีมงานของเรา • เข้าเยี่ยมหน้างานตามนัดหมาย",

    brands_title: "แบรนด์ชั้นนำ",
    brands_sub: "จัดซื้อจากแบรนด์ชั้นนำและทางเลือกข้ามแบรนด์",
    bg_automation: "ระบบอัตโนมัติและควบคุม",
    bg_pneumatics: "ระบบลมและไฮดรอลิก",
    bg_bearings: "ตลับลูกปืนและระบบส่งกำลัง",
    bg_valves: "วาล์วและอุปกรณ์ควบคุมการไหล",
    bg_instrumentation: "เครื่องมือวัดและกระบวนการ",
    bg_electrical: "ระบบไฟฟ้าและการเชื่อมต่อ",
    bg_tools: "เครื่องมือและงานอุตสาหกรรม",

    faq_title: "คำถามที่พบบ่อย",
    faq_sub: "คำตอบเร็ว ๆ สำหรับทีมซ่อมบำรุงและจัดซื้อ",
    faq: [
      {
        q: "จัดส่งต่างจังหวัดไหม?",
        a: "จัดส่งทั่วทุกภาคของประเทศไทย ระยะเวลาขึ้นอยู่กับแหล่งสต็อกของแต่ละรายการ ทีมงานจะยืนยันพร้อมใบเสนอราคา",
      },
      {
        q: "หาของที่เลิกผลิตหรือหายากได้ไหม?",
        a: "ได้ ส่งรหัสสินค้า รูปป้าย nameplate หรือแบบ drawing มาได้เลย เราจะเทียบข้ามแบรนด์กว่า 60 แบรนด์ และเสนอรุ่นทดแทนที่ใส่กันได้",
      },
      {
        q: "สินค้าเป็นของแท้ไหม?",
        a: "เราจัดหาของแท้และทางเลือกที่ระบุชัดเจน โดยแจ้งแบรนด์และสเปกในใบเสนอราคาก่อนสั่งซื้อทุกครั้ง",
      },
      {
        q: "ขอใบเสนอราคาใช้เวลานานแค่ไหน?",
        a: "รายการมาตรฐานเสนอราคาภายในวันเดียว รายการที่ต้องเทียบข้ามแบรนด์หรือนำเข้าอาจใช้เวลามากกว่า เราจะแจ้งล่วงหน้า",
      },
      {
        q: "ส่งคำขอได้ทางไหนบ้าง?",
        a: "ใช้ฟอร์มในหน้านี้ อีเมล stnprosupply@gmail.com หรือ LINE @stnprosupply โดยระบุชื่ออะไหล่ สเปก รูป และจำนวน จะช่วยให้เสนอราคาได้เร็วขึ้น",
      },
    ],

    contact_title: "ติดต่อ STN",
    contact_sub: "ระบุรายการที่ต้องการ (ชื่ออะไหล่ สเปก แบรนด์ ปริมาณ) แล้วเราจะตอบกลับอย่างรวดเร็ว",
    contact_send: "ส่งคำขอ",
    contact_sent:
      "โปรแกรมอีเมลของคุณจะเปิดขึ้นพร้อมรายละเอียดคำขอ หากไม่เปิด กรุณาอีเมลมาที่ stnprosupply@gmail.com",

    form_name: "ชื่อของคุณ",
    form_email: "อีเมล",
    form_company: "บริษัท",
    form_phone: "โทรศัพท์",
    form_message: "ระบุรายการ อะไหล่ แบรนด์ สเปก จำนวน",

    address_label: "ที่อยู่:",
    footer_company: "เกี่ยวกับบริษัท",
    footer_contact: "ติดต่อ",
    footer_blurb: "บริษัทค้าส่งชิ้นส่วนซ่อมบำรุง ฮาร์ดแวร์ เครื่องมือ และวัสดุสิ้นเปลืองสำหรับโรงงาน",
    footer_rights: "สงวนลิขสิทธิ์",
  },

  zh: {
    nav_about: "关于我们",
    nav_products: "产品",
    nav_services: "服务",
    nav_industries: "服务行业",
    nav_coverage: "服务范围",
    nav_brands: "品牌",
    nav_contact: "联系我们",
    nav_quote: "获取报价",
    nav_stnflow: "服务流程",

    hero_title: "工业维修零部件与五金供应伙伴",
    hero_sub: "我们为工厂采购并交付所需的零部件——快速、可靠、高性价比。",
    cta_quote: "获取报价",
    cta_browse: "浏览产品",
    hero_trust: "为泰国各地区的工厂供货",

    why_title: "为什么选择 STN",
    why_sub: "注重结果，降低停机，提升价值。",
    why_1_title: "品质保证",
    why_1_desc: "正规品牌、来源可追溯、规格清晰。",
    why_2_title: "快速响应",
    why_2_desc: "当天报价，快速交货，减少停机时间。",
    why_3_title: "专业支持",
    why_3_desc: "为维修团队和工程师提供实用指导。",

    products_title: "产品类别",
    products_sub: "以下为代表性类别——具体品牌与型号请联系我们。",
    prod_bearings: "轴承与传动",
    prod_bearings_items: ["球轴承/滚子轴承", "皮带与皮带轮", "链条与链轮", "联轴器"],
    prod_fasteners: "紧固件与五金",
    prod_fasteners_items: ["螺栓/螺母/垫圈", "膨胀螺栓", "铆钉", "全螺纹牙条"],
    prod_pneumatics: "气动与液压",
    prod_pneumatics_items: ["气缸", "阀门", "接头", "软管"],
    prod_electrical: "电气与控制",
    prod_electrical_items: ["传感器", "开关", "电缆", "电机", "变频器"],
    prod_tools: "工具与安全防护",
    prod_tools_items: ["手动/电动工具", "量具", "个人防护用品", "挂牌上锁"],
    prod_misc: "耗材及其他",
    prod_misc_items: ["密封胶", "润滑剂", "胶带", "磨料磨具"],

    services_title: "服务",
    services_sub: "灵活的合作模式，配合您的目标。",
    serv_mro: "MRO 供应",
    serv_mro_desc: "为维护、维修和运行提供可靠的采购服务，正品与替代方案兼备。",
    serv_proc: "采购与寻源",
    serv_proc_desc: "国内与国际采购、跨品牌匹配，以及紧缺件寻源。",
    serv_sched: "定期配送",
    serv_sched_desc: "灵活的配送周期与框架订单，保障产线不间断运行。",

    stnflow_title: "STNflow — 从首次询价到车间交付的可靠流程",
    stnflow_sub: "每个环节都力求快速、可追溯，减少产线等待时间。",
    stnflow_step1_title: "提交需求",
    stnflow_step1_desc: "提供零件名称、规格或照片——若原型号停产，我们的团队协助确认替代型号。",
    stnflow_step2_title: "寻源与比价",
    stnflow_step2_desc: "在 60 多个合作品牌中核对价格与库存，并为紧急需求准备替代方案。",
    stnflow_step3_title: "电子报价",
    stnflow_step3_desc: "通过 STNflow 以链接形式发送报价，可直接打开并下载 PDF，无需等待邮件附件。",
    stnflow_step4_title: "交货",
    stnflow_step4_desc: "按计划或紧急配送，常备件可签订框架订单。",
    stnflow_step5_title: "跟进与规划",
    stnflow_step5_desc: "交货后主动跟进，协助您规划下一轮备件库存。",
    stnflow_why_title: "为什么选择 STN",
    stnflow_why_1: "一站式 MRO——无需对接多家供应商。",
    stnflow_why_2: "可信品牌——缺货时有替代方案。",
    stnflow_why_3: "全程透明——通过 STNflow 电子单据系统。",
    stnflow_why_4: "响应迅速——减少产线停机。",

    industries_title: "服务行业",
    industries_sub: "STN 服务多种制造行业。",
    industries: ["食品饮料", "汽车及零部件", "电子", "包装", "通用制造"],

    coverage_title: "服务范围覆盖全泰国",
    coverage_sub: "我们为泰国各地区的工厂供货，提供定期配送与紧急配送服务。",
    coverage_regions: [
      { name: "曼谷及周边", desc: "曼谷、北榄、暖武里、巴吞他尼、龙仔厝" },
      { name: "中部与西部", desc: "大城、北标、佛统、北碧、叻丕" },
      { name: "东部经济走廊 (EEC)", desc: "春武里、罗勇、北柳、巴真" },
      { name: "北部地区", desc: "清迈、南奔、清莱、彭世洛" },
      { name: "东北部地区", desc: "呵叻、孔敬、乌隆他尼" },
      { name: "南部地区", desc: "合艾、宋卡、素叻他尼、普吉" },
    ],
    coverage_note: "交货时间取决于库存所在地——请与我们的团队确认。可预约上门拜访。",

    brands_title: "主要品牌",
    brands_sub: "从领先工业制造商直接采购或跨品牌寻源。",
    bg_automation: "自动化与控制",
    bg_pneumatics: "气动与流体动力",
    bg_bearings: "轴承与传动",
    bg_valves: "阀门与流量控制",
    bg_instrumentation: "仪表与过程控制",
    bg_electrical: "电气与连接",
    bg_tools: "工具与工业用品",

    faq_title: "常见问题",
    faq_sub: "为维修与采购团队准备的快速解答。",
    faq: [
      {
        q: "曼谷以外地区也配送吗？",
        a: "配送。我们为泰国各地区工厂供货。具体交期取决于各货品的库存所在地，我们会在报价时与您确认。",
      },
      {
        q: "停产或紧缺的零件也能找到吗？",
        a: "可以。请提供型号、铭牌照片或图纸，我们会跨 60 多个品牌比对，并在原型号停产时提出可替换方案。",
      },
      {
        q: "是正品吗？",
        a: "我们提供正品及标注清晰的替代品，下单前会在报价单上列明品牌与规格。",
      },
      {
        q: "多久能拿到报价？",
        a: "标准需求当天报价；需要跨品牌比对或进口的货品可能需要更长时间，我们会提前告知。",
      },
      {
        q: "如何提交询价？",
        a: "可使用本页表单、发送邮件至 stnprosupply@gmail.com，或在 LINE @stnprosupply 留言。提供零件名称、规格、照片和数量可以加快报价。",
      },
    ],

    contact_title: "联系 STN",
    contact_sub: "请告知所需产品（名称、规格、品牌、数量），我们会尽快回复方案。",
    contact_send: "发送询价",
    contact_sent: "邮件程序已打开并填好询价内容；若未打开，请直接发邮件至 stnprosupply@gmail.com。",

    form_name: "您的姓名",
    form_email: "邮箱",
    form_company: "公司",
    form_phone: "电话",
    form_message: "请列出零件、品牌、规格与数量",

    address_label: "地址：",
    footer_company: "公司",
    footer_contact: "联系方式",
    footer_blurb: "工业维修零部件、五金、工具及 MRO 用品贸易公司。",
    footer_rights: "版权所有",
  },
};

export const metaByLang: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "MRO & Industrial Parts Supplier in Thailand | STN Pro Supply",
    description:
      "STN Pro Supply sources and delivers MRO parts, bearings, fasteners, pneumatics and electrical components to factories in every region of Thailand.",
  },
  th: {
    title: "ผู้จัดจำหน่ายอะไหล่โรงงาน MRO ทั่วประเทศไทย | STN Pro Supply",
    description:
      "STN Pro Supply จัดหาและจัดส่งอะไหล่ซ่อมบำรุง ตลับลูกปืน สกรู น็อต ระบบลม ไฟฟ้า ให้โรงงานทั่วทุกภาคของประเทศไทย",
  },
  zh: {
    title: "泰国工业 MRO 零部件供应商 | STN Pro Supply",
    description:
      "STN Pro Supply 为泰国各地区工厂供应维修零部件、轴承、紧固件、气动与电气元件，快速报价并配送到厂。",
  },
};

export const htmlLang: Record<Lang, string> = { en: "en", th: "th", zh: "zh-CN" };
