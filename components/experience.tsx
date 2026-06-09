"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"
import { experiences } from "@/lib/portfolio-data"
import { Reveal, SectionHeading } from "@/components/motion-primitives"

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="Experience" />

        <div ref={ref} className="relative pl-8 sm:pl-12">
          {/* track */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-border sm:left-[15px]" />
          {/* animated progress line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[7px] top-2 h-full w-px origin-top bg-primary sm:left-[15px]"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.title + exp.company} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative"
                >
                  <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background sm:-left-[41px]">
                    <span className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-125" />
                  </span>

                  <div className="rounded-2xl border border-border bg-card/40 p-6 transition-colors group-hover:border-primary/40 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                        <Briefcase className="h-4 w-4 text-primary" />
                        {exp.title}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {exp.company}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
