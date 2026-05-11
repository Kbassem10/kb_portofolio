"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Users,
  Layers,
  Sparkles,
  GraduationCap,
  MapPin,
  Mail,
} from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

export function AboutSection() {
  const { ref, inView, containerVariants, itemVariants } = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex min-h-[80vh] items-center px-4 py-20 md:px-6 md:py-28"
    >
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 font-mono text-sm uppercase tracking-wider text-muted-foreground"
        >
          ⟣ About
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-balance text-3xl font-bold tracking-tight md:text-5xl"
        >
          Engineer by training.{" "}
          <span className="text-muted-foreground">
            Product-obsessed by choice.
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          I take ideas and turn them into real, working products — end to end.
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <Users className="h-3.5 w-3.5" /> For everyone
            </div>
            <h3 className="text-xl font-semibold md:text-2xl">
              What I actually do
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              I take a business idea and turn it into a working website or app
              that people can use on any device. I handle the design, the logic,
              and getting it live.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <Bullet icon={<Sparkles className="h-4 w-4 text-accent" />}>
                From idea to live product.
              </Bullet>
              <Bullet icon={<Sparkles className="h-4 w-4 text-accent" />}>
                Works on phones, tablets, and browsers.
              </Bullet>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <Code2 className="h-3.5 w-3.5" /> For engineers
            </div>
            <h3 className="text-xl font-semibold md:text-2xl">
              How I actually build
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Python on the backend (Django / DRF / Flask), React + TypeScript
              on the frontend. PostgreSQL, Docker, PWAs. Small iterative cycles.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <Bullet icon={<Layers className="h-4 w-4 text-accent-2" />}>
                DRF + React/Next + PostgreSQL + Docker
              </Bullet>
              <Bullet icon={<Layers className="h-4 w-4 text-accent-2" />}>
                REST APIs, JWT, i18n, PWAs, Playwright
              </Bullet>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
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
      </motion.div>
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
