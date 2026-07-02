"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";
import {
  Parallax,
  ScrollReveal,
  StaggerContainer,
  staggerItemVariants,
} from "./ScrollAnimations";
import MarqueeText from "./MarqueeText";

export default function Skills(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <section className="relative py-32">
      {/* Marquee banner */}
      <div className="mb-24 border-y border-[var(--color-border)] py-6 [html[data-theme=light]_&]:border-[var(--color-light-border)]">
        <MarqueeText
          items={SKILLS}
          className="text-4xl font-bold text-[var(--color-text-primary)]/10 md:text-6xl [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]/10"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Parallax distance={35}>
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              {t.skills.label}
            </p>
            <h2 className="mb-16 text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
              {t.skills.heading}
              <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
                .
              </span>
            </h2>
          </ScrollReveal>
        </Parallax>

        <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill}
              variants={staggerItemVariants}
              className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors duration-300 hover:border-[var(--color-accent)]/30 [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:bg-[var(--color-light-bg-card)] [html[data-theme=light]_&]:hover:border-[var(--color-light-accent)]/30"
            >
              <motion.div
                className="absolute inset-0 bg-[var(--color-accent)]/5"
                initial={{ clipPath: "circle(0% at 0% 100%)" }}
                whileHover={{ clipPath: "circle(150% at 0% 100%)" }}
                transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
              />
              <span className="relative z-10 text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)] [html[data-theme=light]_&]:group-hover:text-[var(--color-light-accent)]">
                {skill}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
