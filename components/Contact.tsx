"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";
import { ScrollReveal } from "./ScrollAnimations";

function SocialIcon({ icon }: { icon: string }): React.JSX.Element {
  switch (icon) {
    case "github":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "email":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
  }
}

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
            Get in Touch
          </p>
          <h2 className="mb-6 text-[clamp(2rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
            Let&apos;s work
            <br />
            together
            <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              .
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-12 max-w-lg text-lg text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
            Have a project in mind or just want to chat? I am always open to
            discussing new opportunities, creative ideas, or ways to bring your
            vision to life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--color-accent)] px-10 py-4 text-base font-medium text-[var(--color-bg-primary)] transition-transform duration-300 hover:scale-105 [html[data-theme=light]_&]:bg-[var(--color-light-accent)] [html[data-theme=light]_&]:text-white"
          >
            <span>Say Hello</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </ScrollReveal>

        {/* Social links */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 flex items-center justify-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.icon !== "email" ? "_blank" : undefined}
                rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)] [html[data-theme=light]_&]:hover:border-[var(--color-light-accent)] [html[data-theme=light]_&]:hover:text-[var(--color-light-accent)]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                aria-label={link.label}
              >
                <SocialIcon icon={link.icon} />
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
