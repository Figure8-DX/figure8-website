"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { dictionaries, Dictionary, Lang } from "./dictionaries";

export const LANG_STORAGE_KEY = "f8-lang";

/**
 * Routes that have an Arabic translation. On every other route the site stays
 * English/LTR and the language toggle is hidden, so untranslated pages never
 * render English text inside a right-to-left layout.
 */
export const TRANSLATED_PATHS = ["/"];

// Language preference store backed by localStorage. useSyncExternalStore renders
// the server snapshot ("en") during hydration, then the stored value.
const listeners = new Set<() => void>();
let memoryLang: Lang | null = null;

function readStoredLang(): Lang {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY) === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

function writeStoredLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Storage unavailable (private mode, blocked cookies): keep it in memory.
    memoryLang = lang;
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

type LanguageContextValue = {
  /** Language in effect on the current page. */
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Dictionary;
  /** Whether the current page has a translation (toggle is shown). */
  isTranslatedPage: boolean;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const preferred = useSyncExternalStore(
    subscribe,
    () => memoryLang ?? readStoredLang(),
    () => "en" as Lang,
  );

  const isTranslatedPage = TRANSLATED_PATHS.includes(pathname ?? "");
  const lang: Lang = isTranslatedPage ? preferred : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    // Set by the pre-hydration script in layout.tsx to hide the English
    // first render from Arabic visitors.
    root.classList.remove("lang-pending");
  }, [lang, dir]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir,
        t: dictionaries[lang],
        isTranslatedPage,
        setLang: writeStoredLang,
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

/**
 * Runs before React hydrates: applies the stored Arabic preference to <html>
 * and hides the page until the provider has rendered the Arabic content.
 */
export const LANGUAGE_BOOTSTRAP_SCRIPT = `(function(){try{var p=${JSON.stringify(
  TRANSLATED_PATHS,
)};if(p.indexOf(location.pathname)>-1&&localStorage.getItem(${JSON.stringify(
  LANG_STORAGE_KEY,
)})==="ar"){var d=document.documentElement;d.lang="ar";d.dir="rtl";d.classList.add("lang-pending");setTimeout(function(){d.classList.remove("lang-pending")},2000)}}catch(e){}})();`;
