"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { scrollToSection } from "@/lib/scrollToSection";
import { useLanguage } from "@/i18n/LanguageProvider";

type NavItem =
  | { label: string; kind: "scroll"; id: string }
  | { label: string; kind: "route"; href: string };

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t, lang, homePath, alternatePath } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      setScrollProgress(Math.min(progress, 100));
    };

    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { label: t.nav.home, kind: "scroll", id: "hero" },
    { label: t.nav.about, kind: "scroll", id: "about" },
    { label: t.nav.services, kind: "route", href: "/services" },
    { label: t.nav.industries, kind: "route", href: "/industries" },
    { label: t.nav.insights, kind: "route", href: "/blog" },
    { label: t.nav.contact, kind: "scroll", id: "contact" },
  ];

  const otherLang = lang === "ar" ? "en" : "ar";

  // Links to the same page in the other language; hidden on untranslated pages.
  const languageToggle = (className: string) =>
    alternatePath ? (
      <a
        href={alternatePath}
        hrefLang={otherLang}
        lang={otherLang}
        aria-label={t.nav.switchLanguageAria}
        className={`text-[#DDDFE0] hover:text-white border border-white/20 hover:border-[#EB5824] rounded-lg font-medium transition-colors duration-300 ${className}`}
      >
        {t.nav.switchLanguage}
      </a>
    ) : null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#212E3F] backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-[#212E3F]/95 backdrop-blur-xl border-b border-white/5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <a
              href="#hero"
              onClick={() => handleNavClick("hero")}
              className="inline-flex items-center"
            >
              <img
                src="/Figure8-05.png"
                alt={t.nav.logoAlt}
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const linkClass =
                "relative text-[#DDDFE0] hover:text-white transition-colors duration-300 group cursor-pointer";
              const inner = (
                <>
                  <span className="relative z-10 font-medium">{item.label}</span>
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 start-0 w-0 h-0.5 bg-[#EB5824] group-hover:w-full transition-all duration-300"></div>
                  {/* Hover background glow */}
                  <div className="absolute inset-0 rounded-md bg-[#EB5824]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                </>
              );

              return item.kind === "route" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={linkClass}
                >
                  {inner}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={`${homePath}#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={linkClass}
                >
                  {inner}
                </a>
              );
            })}
          </div>

          {/* Language toggle + CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {languageToggle("px-3 py-2 text-sm")}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="group relative px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--color-brand-600)",
                boxShadow: "0 0 0 0 var(--color-brand-500)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-brand-hover)";
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(235, 88, 36, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-brand-600)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 0 var(--color-brand-500)";
              }}
            >
              <span className="relative z-10">{t.nav.cta}</span>
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-brand-600), #ff6b3d)",
                }}
              ></div>
            </a>
          </div>

          {/* Mobile: language toggle + menu button */}
          <div className="lg:hidden flex items-center gap-3">
            {languageToggle("px-2 py-1 text-xs")}
            <button
              type="button"
              className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label={
                isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu
              }
            >
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="pt-6 pb-6 border-t border-[#EB5824]/20 mt-4">
            <nav
              className="flex flex-col space-y-3"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                const linkClass =
                  "text-start text-[#DDDFE0] hover:text-white hover:bg-[#EB5824]/10 px-4 py-3 rounded-lg transition-all duration-300 group cursor-pointer";
                const inner = (
                  <span className="font-medium group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transform transition-transform duration-300 inline-block">
                    {item.label}
                  </span>
                );

                return item.kind === "route" ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={linkClass}
                  >
                    {inner}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={`${homePath}#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={linkClass}
                  >
                    {inner}
                  </a>
                );
              })}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="mt-2 w-full px-6 py-4 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-brand-600), #ff6b3d)",
                  boxShadow: "0 0 0 0 rgba(235, 88, 36, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 10px 15px -3px rgba(235, 88, 36, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 0 rgba(235, 88, 36, 0.3)";
                }}
              >
                {t.nav.cta}
              </a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      {isScrolled && (
        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#212E3F]/30">
          <div
            className="h-full bg-gradient-to-r from-[#EB5824] to-[#ff6b3d] transition-all duration-150"
            style={{
              width: `${scrollProgress}%`,
            }}
          ></div>
        </div>
      )}
    </header>
  );
}
