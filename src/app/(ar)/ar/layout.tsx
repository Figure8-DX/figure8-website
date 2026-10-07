import type { Metadata } from "next";
import "../../globals.css";
import { fontVariables } from "../../fonts";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { HOME_LANGUAGE_ALTERNATES, SITE_URL, SITE_URL_AR } from "@/i18n/seo";

const title =
  "Figure8 DX - استشارات التحوّل الرقمي | شريك التقنية في دول الخليج";
const description =
  "شركة استشارات في التحوّل الرقمي منذ 2019، نمكّن الحكومات والمؤسسات في دول الخليج والشرق الأوسط وشمال أفريقيا والاتحاد الأوروبي من خلال البنية المؤسسية والاستراتيجية الرقمية والحلول التقنية.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "التحول الرقمي",
    "البنية المؤسسية",
    "استشارات التحول الرقمي",
    "التحول بالذكاء الاصطناعي",
    "التميز المؤسسي",
    "الحلول الحكومية",
    "دول الخليج",
    "Figure8 DX",
  ],
  authors: [{ name: "Figure8 DX" }],
  creator: "Figure8 DX",
  publisher: "Figure8 DX",
  alternates: {
    canonical: SITE_URL_AR,
    languages: HOME_LANGUAGE_ALTERNATES,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: SITE_URL_AR,
    siteName: "Figure8 DX",
    title,
    description,
    images: [
      {
        url: "/Figure8-05.png",
        width: 1200,
        height: 630,
        alt: "Figure8 DX - التميّز الرقمي في منطقة الخليج",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Figure8-05.png"],
    creator: "@Figure8DX",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function ArabicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for the Arabic homepage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: SITE_URL_AR,
    inLanguage: "ar",
    isPartOf: {
      "@type": "WebSite",
      name: "Figure8 DX",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Figure8 DX",
      url: SITE_URL,
      logo: `${SITE_URL}/Figure8-05.png`,
    },
  };

  return (
    <html lang="ar" dir="rtl">
      <body className={`${fontVariables} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <LanguageProvider lang="ar">{children}</LanguageProvider>
      </body>
    </html>
  );
}
