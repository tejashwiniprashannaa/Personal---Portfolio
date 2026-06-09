"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { education, awards } from "@/lib/portfolio-data"
import { Reveal, SectionHeading } from "@/components/motion-primitives"

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="04" title="Awards & Education" />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-balance">
                {education.school}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{education.degree}</p>
              <span className="mt-3 inline-block rounded-md border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                {education.cgpa}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Awards & Certifications
              </h3>
              <ul className="space-y-3">
                {awards.map((award, i) => (
                  <motion.li
                    key={award}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {award}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
