"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { Reveal, SectionHeading } from "@/components/motion-primitives"

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <span className="font-mono text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.features}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                  )}

                  {project.backendRepo && (
                    <a
                      href={project.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                      Backend
                    </a>
                  )}

                  {project.frontendRepo && (
                    <a
                      href={project.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                      Frontend
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}