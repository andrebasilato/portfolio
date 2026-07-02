"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Parallax, ScrollReveal } from "./ScrollAnimations";

export default function About(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column */}
          <Parallax distance={35}>
            <ScrollReveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
                {t.about.label}
              </p>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
                {t.about.headingLine1}
                <br />
                {t.about.headingLine2}
                <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
                  .
                </span>
              </h2>
            </ScrollReveal>
          </Parallax>

          {/* Right column */}
          <div className="flex flex-col justify-center gap-6">
            {[t.about.paragraph1, t.about.paragraph2, t.about.paragraph3].map(
              (paragraph, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                  <p className="text-lg leading-relaxed text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ),
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-[var(--color-border)] pt-16 md:grid-cols-4 [html[data-theme=light]_&]:border-[var(--color-light-border)]">
          {t.about.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
