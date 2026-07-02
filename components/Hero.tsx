"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import HeroTechReveal from "@/components/HeroTechReveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  // 0 when the hero is at the top of the viewport, 1 once it has scrolled out.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Orbs drift at different speeds (compositor-only transforms).
  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Hero content gently lifts and fades as it leaves the viewport.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[120px]"
          style={prefersReducedMotion ? undefined : { y: orbOneY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-900/20 blur-[100px]"
          style={prefersReducedMotion ? undefined : { y: orbTwoY }}
        />
      </div>

      {/* Cursor-proximity tech reveal (decorative, desktop only) */}
      <HeroTechReveal />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl text-center"
        style={
          prefersReducedMotion
            ? undefined
            : { y: contentY, opacity: contentOpacity }
        }
      >
        {/* Overline */}
        <motion.p
          className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.65, 0.05, 0, 1] }}
        >
          {t.hero.overline}
        </motion.p>

        {/* Main heading */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tighter text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.65, 0.05, 0, 1] }}
          >
            Andre
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tighter text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.65, 0.05, 0, 1] }}
          >
            Basilato
            <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              .
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-8 max-w-lg text-lg text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7, ease: [0.65, 0.05, 0, 1] }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.9, ease: [0.65, 0.05, 0, 1] }}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-medium text-[var(--color-bg-primary)] transition-transform duration-300 hover:scale-105 [html[data-theme=light]_&]:bg-[var(--color-light-accent)] [html[data-theme=light]_&]:text-white"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-medium text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)] [html[data-theme=light]_&]:hover:border-[var(--color-light-accent)] [html[data-theme=light]_&]:hover:text-[var(--color-light-accent)]"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.75 }}
      >
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--color-border)] p-1.5 [html[data-theme=light]_&]:border-[var(--color-light-border)]"
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <div className="h-2 w-0.5 rounded-full bg-[var(--color-accent)] [html[data-theme=light]_&]:bg-[var(--color-light-accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
