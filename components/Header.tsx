"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLocale = (): void => {
    setLocale(locale === "pt-BR" ? "en" : "pt-BR");
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)] [html[data-theme=light]_&]:bg-[var(--color-light-bg-primary)]/80 [html[data-theme=light]_&]:border-[var(--color-light-border)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]"
          >
            {SITE_CONFIG.name.split(" ")[0]}
            <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              .
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)] [html[data-theme=light]_&]:hover:text-[var(--color-light-accent)]"
              >
                {t.nav[item.key]}
              </a>
            ))}
            {mounted && (
              <>
                <button
                  onClick={toggleLocale}
                  className="rounded-full p-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)] [html[data-theme=light]_&]:hover:text-[var(--color-light-accent)]"
                  aria-label={t.header.switchLanguage}
                >
                  {locale === "pt-BR" ? "EN" : "PT"}
                </button>
                <button
                  onClick={toggleTheme}
                  className="rounded-full p-2 text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)] [html[data-theme=light]_&]:hover:text-[var(--color-light-accent)]"
                  aria-label={t.header.toggleTheme}
                >
                  {theme === "dark" ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t.header.toggleMenu}
          >
            <motion.span
              className="block h-0.5 w-6 bg-[var(--color-text-primary)] [html[data-theme=light]_&]:bg-[var(--color-light-text-primary)]"
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-[var(--color-text-primary)] [html[data-theme=light]_&]:bg-[var(--color-light-text-primary)]"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-[var(--color-text-primary)] [html[data-theme=light]_&]:bg-[var(--color-light-text-primary)]"
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--color-bg-primary)] [html[data-theme=light]_&]:bg-[var(--color-light-bg-primary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.65, 0.05, 0, 1] }}
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-light text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)] [html[data-theme=light]_&]:hover:text-[var(--color-light-accent)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {t.nav[item.key]}
                </motion.a>
              ))}
              {mounted && (
                <motion.div
                  className="mt-4 flex items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={toggleTheme}
                    className="rounded-full border border-[var(--color-border)] px-6 py-2 text-sm text-[var(--color-text-secondary)] [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]"
                  >
                    {theme === "dark" ? t.header.lightMode : t.header.darkMode}
                  </button>
                  <button
                    onClick={toggleLocale}
                    className="rounded-full border border-[var(--color-border)] px-6 py-2 text-sm text-[var(--color-text-secondary)] [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]"
                    aria-label={t.header.switchLanguage}
                  >
                    {t.header.languageName}
                  </button>
                </motion.div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
