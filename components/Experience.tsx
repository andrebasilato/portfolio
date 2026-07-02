"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Parallax, ScrollReveal } from "./ScrollAnimations";

export default function Experience(): React.JSX.Element {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>(t.experience.items[0].id);

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Parallax distance={35}>
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              {t.experience.label}
            </p>
            <h2 className="mb-16 text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
              {t.experience.heading}
              <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
                .
              </span>
            </h2>
          </ScrollReveal>
        </Parallax>

        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left: Company list */}
          <ScrollReveal>
            <div className="flex flex-col gap-1">
              {t.experience.items.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`group relative flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-all duration-300 ${
                    activeId === exp.id
                      ? "bg-[var(--color-bg-card)] [html[data-theme=light]_&]:bg-[var(--color-light-bg-card)]"
                      : "hover:bg-[var(--color-bg-card)]/50 [html[data-theme=light]_&]:hover:bg-[var(--color-light-bg-card)]/50"
                  }`}
                >
                  {activeId === exp.id && (
                    <motion.div
                      className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full bg-[var(--color-accent)] [html[data-theme=light]_&]:bg-[var(--color-light-accent)]"
                      layoutId="experience-indicator"
                      transition={{
                        duration: 0.4,
                        ease: [0.65, 0.05, 0, 1],
                      }}
                    />
                  )}
                  <div>
                    <p
                      className={`font-medium transition-colors duration-300 ${
                        activeId === exp.id
                          ? "text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]"
                          : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)] [html[data-theme=light]_&]:group-hover:text-[var(--color-light-text-primary)]"
                      }`}
                    >
                      {exp.company}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                      {exp.period}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Detail panel */}
          <ScrollReveal delay={0.2}>
            <div className="relative min-h-[250px] rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 lg:p-12 [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:bg-[var(--color-light-bg-card)]">
              <AnimatePresence mode="wait">
                {t.experience.items
                  .filter((e) => e.id === activeId)
                  .map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.65, 0.05, 0, 1],
                    }}
                  >
                    <p className="mb-2 text-sm text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
                      {exp.period}
                    </p>
                    <h3 className="mb-1 text-2xl font-bold text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="mb-6 text-lg text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                      {exp.company}
                    </p>
                    <p className="leading-relaxed text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
