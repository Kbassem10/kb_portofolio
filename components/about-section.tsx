"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Users,
  Layers,
  Sparkles,
  GraduationCap,
  MapPin,
  Mail,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex min-h-[80vh] items-center px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm uppercase tracking-wider text-muted-foreground"
        >
          ⟣ About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-3xl font-bold tracking-tight md:text-5xl"
        >
          Engineer by training.{" "}
          <span className="text-muted-foreground">
            Product-obsessed by choice.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {portfolioData.personalInfo.bio}
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <Users className="h-3.5 w-3.5" /> For everyone
            </div>
            <h3 className="text-xl font-semibold md:text-2xl">
              What I actually do
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              I take a business idea — a loyalty program, a clinic system, a
              finance tracker — and turn it into a real working website or app
              that people can use on their phone, tablet, or computer. I handle
              everything: the look &amp; feel, the logic behind the scenes, and
              getting it online.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <Bullet icon={<Sparkles className="h-4 w-4 text-accent" />}>
                Turn an idea into a live, shareable product.
              </Bullet>
              <Bullet icon={<Sparkles className="h-4 w-4 text-accent" />}>
                Make it work on phones, tablets, and browsers.
              </Bullet>
              <Bullet icon={<Sparkles className="h-4 w-4 text-accent" />}>
                Keep it fast, reliable, and easy to maintain.
              </Bullet>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <Code2 className="h-3.5 w-3.5" /> For engineers
            </div>
            <h3 className="text-xl font-semibold md:text-2xl">
              How I actually build
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Full-stack with Python on the backend (Django / DRF / Flask) and
              React + TypeScript on the frontend. PostgreSQL for data, Docker
              for shipping, PWAs for reach. I write integration-tested code,
              care about API design, and ship on small iterative cycles.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <Bullet icon={<Layers className="h-4 w-4 text-accent-2" />}>
                DRF + React/Next + PostgreSQL + Docker
              </Bullet>
              <Bullet icon={<Layers className="h-4 w-4 text-accent-2" />}>
                REST APIs, JWT, i18n, PWAs, Electron shells
              </Bullet>
              <Bullet icon={<Layers className="h-4 w-4 text-accent-2" />}>
                Playwright E2E, Vercel / pythonanywhere deploys
              </Bullet>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass mt-5 rounded-2xl p-6 md:p-8"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
              <Zap className="h-3.5 w-3.5" /> How I ship faster
            </div>
            <h3 className="text-xl font-semibold md:text-2xl">
              AI-accelerated, not{" "}
              <span className="text-muted-foreground line-through">
                vibe-coded.
              </span>
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              I use AI as a force multiplier — not a shortcut. It drafts
              boilerplate, scaffolds tests, and helps me explore options fast,
              but every commit is reviewed, understood, and owned by me.
              That&apos;s how I turn weeks of engineering into days without
              sacrificing security, testability, or long-term maintainability.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              <Bullet icon={<Zap className="h-4 w-4 text-accent" />}>
                AI drafts the first pass — I refactor, review, and harden it.
              </Bullet>
              <Bullet icon={<ShieldCheck className="h-4 w-4 text-accent" />}>
                Every line read, understood, and tested before it ships.
              </Bullet>
              <Bullet icon={<ShieldCheck className="h-4 w-4 text-accent" />}>
                Secrets, auth, and data flows designed by me — never by an LLM.
              </Bullet>
              <Bullet icon={<Layers className="h-4 w-4 text-accent-2" />}>
                Code stays maintainable because I own the architecture.
              </Bullet>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground"
        >
          <Chip icon={<MapPin className="h-3.5 w-3.5" />}>
            {portfolioData.personalInfo.location}
          </Chip>
          <Chip icon={<GraduationCap className="h-3.5 w-3.5" />}>
            {portfolioData.education.program},{" "}
            {portfolioData.education.school}
          </Chip>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 transition-colors hover:border-accent/50 hover:text-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            {portfolioData.personalInfo.email}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Bullet({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5">{icon}</span>
      <span>{children}</span>
    </li>
  )
}

function Chip({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1">
      {icon}
      {children}
    </span>
  )
}
