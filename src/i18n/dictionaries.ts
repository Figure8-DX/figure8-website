import type { ServiceId } from "@/config/services";

export type Lang = "en" | "ar";

/**
 * UI copy for the translated pages. Product names, frameworks, standards,
 * platforms and the brand's English keywords (X Ops, 80/20, Kaizen, the hero
 * headline) intentionally stay in English inside the Arabic strings.
 */
const en = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    industries: "Industries",
    insights: "Insights",
    contact: "Contact",
    cta: "Let's Connect",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    logoAlt: "Figure8 DX Logo",
    /** Label of the toggle button: the language it switches TO. */
    switchLanguage: "العربية",
    switchLanguageAria: "Switch to Arabic",
  },
  hero: {
    chips: ["for Excellence", "for Transformation", "for Innovation", "for Product"],
    subheadline:
      "We partner with government entities, enterprises, and startups to deliver digital transformation that creates real value,",
    subheadlineHighlight: "without eliminating the human factor.",
    cta: "Let's Connect",
    stats: {
      years: "Years Of Industry Experience",
      projects: "Successful Projects",
      certifications: "Provided Certifications",
    },
    logoAlt: "Figure8 3D Brand Logo",
  },
  about: {
    titlePrefix: "About ",
    subtitle:
      "Established in 2019, Figure8 DX works with governments, enterprises, startups, and NGOs across the GCC, MENA, and EU.",
    philosophyTitlePrefix: "Our ",
    philosophyTitleHighlight: "Philosophy",
    // "<intro> X Ops <sep1> 80/20 <sep2> Kaizen <end>"
    philosophyIntro: "Our philosophy sits at the intersection of",
    philosophySep1: " , ",
    philosophySep2: "Rule, and",
    philosophyEnd: ".",
    philosophyFocus: "We focus on value-driven digital work built through",
    philosophyFocusHighlight: "small, meaningful, and continuous improvement.",
    cards: {
      xOps: [
        "Everything Ops",
        "Holistic Digital Ops Framework",
        "Digital Factory",
        "Ops Visibility",
        "Ops Continuous Improvement",
      ],
      eightyTwenty: [
        "Roughly 80% of results come from 20% of causes",
        "Focus on what Matters",
        "Smart Prioritization",
        "Faster time-to-market",
        "Value Realization",
      ],
      kaizen: [
        "Good Change",
        "Small, Incremental Change",
        "Employee Involvement",
        "Waste Reduction",
        "Continuous Improvement",
      ],
    },
  },
  services: {
    titlePrefix: "Our ",
    titleHighlight: "Services",
    subtitle:
      "Comprehensive digital transformation services designed for governmental and enterprise excellence.",
    allServices: "All Services",
    explore: "Explore",
    learnMore: "Learn more",
  },
  expertise: {
    title: "Our Expertise",
    cards: [
      {
        metric: "Frameworks",
        label: "Expertise",
        description:
          "Expertise in international and national standards and best practices like TOGAF, ITIL, COBIT, ISO42010, ISO20000, CMMI, QIYAS, DXMI, NDI, NAII",
      },
      {
        metric: "Platforms",
        label: "Expertise",
        description:
          "Deep expertise in platforms like Alfabet, Orbus iServer, BizzDesign, ARIS, OvalEdge, and more.",
      },
      {
        metric: "Industries",
        label: "Expertise",
        description:
          "Expertise in industries like Government, Healthcare, Education, Energy, Telecom, Hospitality, Transportation & Logistics, and Manufacturing",
      },
      {
        metric: "Regional",
        label: "Expertise",
        description:
          "Proven experience delivering transformation initiatives across KSA, UAE, Oman, Kuwait, Qatar, and Lebanon.",
      },
    ],
    international: "International Standards & Best Practices",
    ksa: "KSA National Standards",
    platforms: "Technology Platforms",
  },
  clients: {
    titlePrefix: "Our ",
    titleHighlight: "Clients",
    subtitle: "Trusted by leading organizations across the region.",
    loading: "Loading clients...",
    errorEmpty: "No clients available at this time.",
    errorLoad: "Unable to load clients. Please try again later.",
    none: "No clients to display at this time.",
  },
  contact: {
    titlePrefix: "Book a Quick",
    titleHighlight: " Meeting",
    subtitle:
      "Choose a time that works for you. Simple, fast, and completely free. Just a friendly conversation to explore how we can help.",
    schedule: "Schedule a Meeting",
    privacyTitle: "Privacy & Security Assured:",
    privacyBody:
      "All inquiries are handled with strict confidentiality. We comply with international data protection standards and maintain ISO 9001 certification for quality assurance in public sector engagements.",
    expectTitle: "What to expect:",
    expect: [
      "15-30 minute casual conversation",
      "100% confidential discussion",
      "No pressure or obligation",
    ],
    getInTouch: "Get in Touch",
    email: "Email",
    uae: "UAE",
    ksa: "KSA",
    availability: "Available: Sunday to Friday, 9 AM - 5 PM GST",
  },
  footer: {
    tagline: "Transform. Build. Thrive.",
    about:
      "Digital transformation partner since 2019, operating across the GCC, MENA, and EU.",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact",
    email: "Email",
    phone: "Phone",
    connect: "Connect",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    industries: "القطاعات",
    insights: "رؤى",
    contact: "اتصل بنا",
    cta: "لنتواصل",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    logoAlt: "شعار Figure8 DX",
    switchLanguage: "English",
    switchLanguageAria: "التبديل إلى الإنجليزية",
  },
  hero: {
    chips: ["للتميّز", "للتحوّل", "للابتكار", "للمنتج"],
    subheadline:
      "نتعاون مع الجهات الحكومية والمؤسسات والشركات الناشئة لتحقيق تحوّل رقمي يصنع قيمة حقيقية،",
    subheadlineHighlight: "دون إغفال العنصر البشري.",
    cta: "لنتواصل",
    stats: {
      years: "عامًا من الخبرة",
      projects: "مشروعًا ناجحًا",
      certifications: "شهادة احترافية",
    },
    logoAlt: "شعار Figure8 ثلاثي الأبعاد",
  },
  about: {
    titlePrefix: "عن ",
    subtitle:
      "تأسست Figure8 DX عام 2019، وتعمل مع الحكومات والمؤسسات والشركات الناشئة والمنظمات غير الحكومية في دول الخليج والشرق الأوسط وشمال أفريقيا والاتحاد الأوروبي.",
    philosophyTitlePrefix: "",
    philosophyTitleHighlight: "فلسفتنا",
    philosophyIntro: "تقوم فلسفتنا على التقاء",
    philosophySep1: "، وقاعدة",
    philosophySep2: "و",
    philosophyEnd: ".",
    philosophyFocus: "نركّز على عمل رقمي قائم على القيمة، يُبنى من خلال",
    philosophyFocusHighlight: "تحسينات صغيرة وهادفة ومستمرة.",
    cards: {
      xOps: [
        "Everything Ops",
        "إطار شامل للعمليات الرقمية",
        "المصنع الرقمي",
        "وضوح الرؤية على العمليات",
        "التحسين المستمر للعمليات",
      ],
      eightyTwenty: [
        "قرابة 80% من النتائج تأتي من 20% من الأسباب",
        "التركيز على ما يهم",
        "ترتيب ذكي للأولويات",
        "إطلاق أسرع إلى السوق",
        "تحقيق القيمة",
      ],
      kaizen: [
        "التغيير نحو الأفضل",
        "تغيير صغير وتدريجي",
        "إشراك الموظفين",
        "الحد من الهدر",
        "التحسين المستمر",
      ],
    },
  },
  services: {
    titlePrefix: "",
    titleHighlight: "خدماتنا",
    subtitle:
      "خدمات تحوّل رقمي شاملة مصممة لتحقيق التميّز في الجهات الحكومية والمؤسسات.",
    allServices: "جميع الخدمات",
    explore: "استكشف",
    learnMore: "اعرف المزيد",
  },
  expertise: {
    title: "خبراتنا",
    cards: [
      {
        metric: "الأطر والمعايير",
        label: "خبرة",
        description:
          "خبرة في المعايير وأفضل الممارسات الدولية والوطنية مثل TOGAF و ITIL و COBIT و ISO42010 و ISO20000 و CMMI و QIYAS و DXMI و NDI و NAII",
      },
      {
        metric: "المنصات",
        label: "خبرة",
        description:
          "خبرة عميقة في منصات مثل Alfabet و Orbus iServer و BizzDesign و ARIS و OvalEdge وغيرها.",
      },
      {
        metric: "القطاعات",
        label: "خبرة",
        description:
          "خبرة في قطاعات مثل الحكومة، والرعاية الصحية، والتعليم، والطاقة، والاتصالات، والضيافة، والنقل والخدمات اللوجستية، والتصنيع",
      },
      {
        metric: "إقليميًا",
        label: "خبرة",
        description:
          "خبرة مثبتة في تنفيذ مبادرات التحوّل في السعودية والإمارات وعُمان والكويت وقطر ولبنان.",
      },
    ],
    international: "المعايير الدولية وأفضل الممارسات",
    ksa: "المعايير الوطنية في المملكة العربية السعودية",
    platforms: "المنصات التقنية",
  },
  clients: {
    titlePrefix: "",
    titleHighlight: "عملاؤنا",
    subtitle: "موضع ثقة كبرى الجهات في المنطقة.",
    loading: "جارٍ تحميل العملاء...",
    errorEmpty: "لا يوجد عملاء لعرضهم حاليًا.",
    errorLoad: "تعذّر تحميل العملاء. يُرجى المحاولة لاحقًا.",
    none: "لا يوجد عملاء لعرضهم حاليًا.",
  },
  contact: {
    titlePrefix: "احجز",
    titleHighlight: " اجتماعًا سريعًا",
    subtitle:
      "اختر الوقت الذي يناسبك. بسيط وسريع ومجاني تمامًا. مجرد محادثة ودية لاستكشاف كيف يمكننا مساعدتك.",
    schedule: "حدّد موعد اجتماع",
    privacyTitle: "الخصوصية والأمان مضمونان:",
    privacyBody:
      "نتعامل مع جميع الاستفسارات بسرية تامة. نلتزم بالمعايير الدولية لحماية البيانات، ونحمل شهادة ISO 9001 لضمان الجودة في مشاريع القطاع العام.",
    expectTitle: "ما الذي تتوقعه:",
    expect: [
      "محادثة ودية مدتها 15-30 دقيقة",
      "نقاش سري بنسبة 100%",
      "دون أي ضغط أو التزام",
    ],
    getInTouch: "تواصل معنا",
    email: "البريد الإلكتروني",
    uae: "الإمارات",
    ksa: "السعودية",
    availability: "متاحون: من الأحد إلى الجمعة، 9 صباحًا - 5 مساءً بتوقيت الخليج",
  },
  footer: {
    tagline: "حوِّل. ابنِ. ازدهِر.",
    about:
      "شريك التحوّل الرقمي منذ 2019، نعمل في دول الخليج والشرق الأوسط وشمال أفريقيا والاتحاد الأوروبي.",
    quickLinks: "روابط سريعة",
    services: "الخدمات",
    contact: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    connect: "تابعنا",
    rights: "جميع الحقوق محفوظة.",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, ar };

type ServiceCopy = { title: string; description: string; features: string[] };

/** Arabic copy for the services in src/config/services.ts, keyed by id. */
export const SERVICES_AR: Record<ServiceId, ServiceCopy> = {
  "digital-transformation": {
    title: "استشارات التحوّل الرقمي",
    description: "توجيه استراتيجي لمبادرات التحوّل الرقمي الشاملة",
    features: [
      "تطوير الاستراتيجية الرقمية وخارطة الطريق",
      "تقييم النضج الرقمي",
      "تخطيط التمكين التقني",
      "إدارة التغيير وتعزيز التبنّي",
      "إطار الحوكمة الرقمية",
      "تصميم برامج الابتكار",
    ],
  },
  ea: {
    title: "البنية المؤسسية (EA)",
    description: "أطر وحوكمة شاملة للبنية المؤسسية لدعم التحوّل الرقمي",
    features: [
      "تأسيس مكتب البنية المؤسسية وميثاقه",
      "نمذجة مجالات البنية",
      "تمكين الأدوات (Alfabet, Orbus, LeanIX)",
      "المواءمة مع الأنظمة والمعايير",
      "تخطيط البنية وإعداد خرائط الطريق",
      "تشغيل البنية المؤسسية والحوكمة المستمرة",
    ],
  },
  "ai-governance": {
    title: "التحوّل بالذكاء الاصطناعي",
    description: "استراتيجية متكاملة للذكاء الاصطناعي وتمكينه والامتثال لمتطلباته",
    features: [
      "تقييم الجاهزية للتحوّل بالذكاء الاصطناعي",
      "استراتيجية التحوّل بالذكاء الاصطناعي",
      "تأسيس مركز التميّز للذكاء الاصطناعي (AI CoE)",
      "اكتشاف حالات استخدام الذكاء الاصطناعي وتمكينها",
      "امتثال وتدقيق الذكاء الاصطناعي",
    ],
  },
  "digital-innovation": {
    title: "ابتكار المنتجات الرقمية",
    description: "استراتيجية المنتجات الرقمية ومختبرات الابتكار وإدارة المنتجات",
    features: [
      "استراتيجية المنتجات الرقمية وتنفيذها",
      "تأسيس مختبر ابتكار المنتجات الرقمية",
      "إدارة المنتجات الرقمية",
      "تدقيق المنتجات الرقمية وتقييم نضجها",
    ],
  },
  tqm: {
    title: "التميّز المؤسسي",
    description: "أطر التميّز والتحسين المستمر وبناء القدرات",
    features: [
      "أطر التميّز المؤسسي (EFQM, KAQA)",
      "برامج Lean Six Sigma والتحسين المستمر",
      "تصميم نموذج التشغيل وإدارة الأداء",
      "أنظمة إدارة الجودة وتطبيق معايير ISO",
      "التغيير المؤسسي وبناء القدرات",
    ],
  },
  cx: {
    title: "تجربة العملاء (CX)",
    description: "تصميم يتمحور حول الإنسان وتحسين التجربة عبر جميع القنوات",
    features: [
      "تطوير استراتيجية ورؤية تجربة العملاء",
      "رسم رحلة العميل",
      "تدقيق التجربة وتقييمها",
      "قياس تجربة العملاء وحلقات التغذية الراجعة",
      "تصميم التجربة متعددة القنوات",
      "النماذج الأولية لتجربة المستخدم وتصميم الخدمات",
    ],
  },
  bpm: {
    title: "إدارة إجراءات الأعمال (BPM)",
    description: "تحسين الإجراءات وأتمتتها لتحقيق التميّز التشغيلي",
    features: [
      "تأسيس مكتب إدارة إجراءات الأعمال",
      "توثيق إجراءات الأعمال وتحليلها",
      "إعادة هندسة الإجراءات وتحسينها",
      "تطبيق أدوات إدارة الإجراءات (Orbus, ARIS)",
      "التنقيب في الإجراءات (Process Mining) وتحليل الاختناقات",
      "التدريب على إدارة الإجراءات وأفضل الممارسات",
    ],
  },
  "data-management": {
    title: "إدارة البيانات",
    description: "أطر شاملة لحوكمة البيانات وتحليلها",
    features: [
      "حوكمة البيانات وإدارة جودتها",
      "استراتيجية البيانات وخارطة الطريق",
      "إدارة البيانات الرئيسية",
      "تصميم بنية البيانات",
      "تطبيق التحليلات وذكاء الأعمال (BI)",
      "خصوصية البيانات وأمنها",
    ],
  },
};

export function localizeService<T extends ServiceCopy & { id: ServiceId }>(
  service: T,
  lang: Lang,
): T {
  return lang === "ar" ? { ...service, ...SERVICES_AR[service.id] } : service;
}
