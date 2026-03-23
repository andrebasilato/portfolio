"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { ScrollReveal } from "./ScrollAnimations";

export default function Projects(): React.JSX.Element {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
            Selected Work
          </p>
          <h2 className="mb-16 text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
            Projects
            <span className="text-[var(--color-accent)] [html[data-theme=light]_&]:text-[var(--color-light-accent)]">
              .
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <motion.a
                href={project.href}
                className="group relative block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] [html[data-theme=light]_&]:border-[var(--color-light-border)] [html[data-theme=light]_&]:bg-[var(--color-light-bg-card)]"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.65, 0.05, 0, 1] }}
              >
                {/* Gradient background area */}
                <div
                  className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  {/* Hover reveal overlay */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-[var(--color-accent)]/10 backdrop-blur-sm"
                        initial={{ clipPath: "circle(0% at 50% 50%)" }}
                        animate={{ clipPath: "circle(100% at 50% 50%)" }}
                        exit={{ clipPath: "circle(0% at 50% 50%)" }}
                        transition={{
                          duration: 0.6,
                          ease: [0.65, 0.05, 0, 1],
                        }}
                      >
                        <span className="rounded-full bg-[var(--color-accent)] px-6 py-2 text-sm font-medium text-[var(--color-bg-primary)]">
                          View Project
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Project number */}
                  <span className="absolute right-6 top-6 text-6xl font-bold text-white/10">
                    {project.id}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[var(--color-text-primary)] [html[data-theme=light]_&]:text-[var(--color-light-text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)] [html[data-theme=light]_&]:text-[var(--color-light-text-secondary)]">
                    {project.description}
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
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
