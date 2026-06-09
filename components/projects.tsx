"use client"

import { motion } from "framer-motion"
import { Github, ArrowUpRight } from "lucide-react"
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
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.period}
                    </span>
                  </div>
                  <span className="rounded-full border border-border p-2 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
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

                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground transition-colors group-hover:text-primary">
                  <Github className="h-3.5 w-3.5" />
                  <span className="truncate font-mono">
                    {project.repo.replace("https://", "")}
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
