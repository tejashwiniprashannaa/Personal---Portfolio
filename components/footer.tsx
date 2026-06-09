"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { Reveal } from "@/components/motion-primitives"

const tap = { scale: 0.96 }

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-mono text-sm text-primary">Get in touch</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Let&apos;s build something solid.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-lg text-muted-foreground transition-colors hover:text-primary"
          >
            {profile.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-3">
            {[
              { href: profile.github, icon: Github, label: "GitHub" },
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                whileTap={tap}
                transition={{ type: "spring", stiffness: 400, damping: 16 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </Reveal>

        <p className="mt-16 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name} &middot; {profile.location}
        </p>
      </div>
    </footer>
  )
}
