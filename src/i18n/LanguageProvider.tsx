"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { dictionaries, Dictionary, Lang } from "./dictionaries";

/** Path of the homepage in each language. */
export const HOME_PATHS: Record<Lang, string> = { en: "/", ar: "/ar" };

type LanguageContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Dictionary;
  /** Homepage for the current language, for in-page anchors like #about. */
  homePath: string;
  /**
   * The same page in the other language, or null when it has no translation
   * (the toggle is hidden then).
   */
  alternatePath: string | null;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * The language comes from the route: everything under /ar is Arabic and
 * everything else is English. Only the homepage is translated so far.
 */
export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const other: Lang = lang === "ar" ? "en" : "ar";
  const isHome = pathname === HOME_PATHS[lang];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir: lang === "ar" ? "rtl" : "ltr",
        t: dictionaries[lang],
        homePath: HOME_PATHS[lang],
        alternatePath: isHome ? HOME_PATHS[other] : null,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
