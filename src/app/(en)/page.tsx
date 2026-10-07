import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { HOME_LANGUAGE_ALTERNATES, SITE_URL } from "@/i18n/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
    languages: HOME_LANGUAGE_ALTERNATES,
  },
};

export default function Home() {
  return <HomePage />;
}
