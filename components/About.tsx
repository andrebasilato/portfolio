"use client";

import { ScrollReveal } from "./ScrollAnimations";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column */}
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              About
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
              Building the web,
              <br />
              one pixel at a time
              <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
                .
              </span>
            </h2>
          </ScrollReveal>

          {/* Right column */}
          <div className="flex flex-col justify-center gap-6">
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                I am a Full Stack Developer with a passion for creating digital
                experiences that are both visually stunning and technically
                robust. I believe great software is built at the intersection of
                design and engineering.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg leading-relaxed text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                From architecting scalable backend systems to crafting
                pixel-perfect interfaces, I approach every project with
                meticulous attention to detail and a relentless focus on
                performance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg leading-relaxed text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                When I am not coding, you can find me exploring new technologies,
                contributing to open source, or finding inspiration in design,
                music, and the outdoors.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-[var(--color-border)] pt-16 md:grid-cols-4 [html[data-theme=light]_&]:border-[var(--color-light-border)]">
          {[
            { value: "7+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "20+", label: "Technologies" },
            { value: "100%", label: "Commitment" },
          ].map((stat, i) => (
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
