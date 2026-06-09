"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <Reveal className="mb-12 flex items-end gap-4">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
        {title}
      </h2>
      <div className="mb-2 h-px flex-1 bg-border" />
    </Reveal>
  )
}
