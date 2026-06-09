"use client"

import { motion } from "framer-motion"
import { skillGroups } from "@/lib/portfolio-data"
import { Reveal, SectionHeading } from "@/components/motion-primitives"

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="Technical Skills" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 16 }}
                      className="cursor-default rounded-lg border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
