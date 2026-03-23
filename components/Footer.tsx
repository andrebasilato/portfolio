"use client";

import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] px-6 py-12 [html[data-theme=light]_&]:border-[var(--color-light-border)]">
      {/* SVG decorative shape */}
      <div className="pointer-events-none absolute -top-px left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 40"
          className="w-full text-[var(--color-accent)]/10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q300,0 600,20 T1200,20 V40 H0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]"
          >
            {SITE_CONFIG.name.split(" ")[0]}
            <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              .
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)] [html[data-theme=light]_&]:hover:text-[var(--color-light-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
            &copy; {currentYear} {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
