"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECT_META } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectArt from "./ProjectArt";
import { Parallax, ScrollReveal } from "./ScrollAnimations";

export default function Projects(): React.JSX.Element {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Parallax distance={35}>
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              {t.projects.label}
            </p>
            <h2 className="mb-16 text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
              {t.projects.heading}
              <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
                .
              </span>
            </h2>
          </ScrollReveal>
        </Parallax>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECT_META.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <motion.article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:bg-[var(--color-light-bg-card)]"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.65, 0.05, 0, 1] }}
              >
                {/* Gradient background area */}
                <div
                  className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  {/* Thematic background art */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 text-white opacity-[0.12] transition-opacity duration-500 group-hover:opacity-30"
                  >
                    <ProjectArt id={project.id} className="h-full w-full" />
                  </div>

                  {/* Project number */}
                  <span className="absolute right-6 top-6 text-6xl font-bold text-white/10">
                    {project.id}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
                    {t.projects.items[project.id].title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                    {t.projects.items[project.id].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)] [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[var(--color-accent)] [html[data-theme=light]_&]:bg-[var(--color-light-accent)]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: hoveredId === project.id ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
                />
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
