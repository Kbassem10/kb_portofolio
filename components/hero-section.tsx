"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { portfolioData } from "@/lib/portfolio-data"
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react"

const longestRole = portfolioData.roles.reduce(
  (longest, current) => (current.length > longest.length ? current : longest),
  ""
)

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [localTime, setLocalTime] = useState<string>("")

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % portfolioData.roles.length),
      2400
    )
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const format = () => {
      try {
        const t = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: portfolioData.personalInfo.timezone,
          hour12: false,
        }).format(new Date())
        setLocalTime(t)
      } catch {
        setLocalTime("")
      }
    }
    format()
    const id = setInterval(format, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-4 pt-24 pb-16 md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1 font-mono text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {portfolioData.personalInfo.availableForWork
            ? "Available for work & collaborations"
            : "Currently shipping — let's talk soon"}
        </motion.div>

        <motion.h1
          className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient-accent">
            {portfolioData.personalInfo.firstName}.
          </span>
          <br className="hidden sm:block" />
          <span className="block pt-2 text-foreground/90 sm:inline sm:pt-0">
            I build software that{" "}
            <span className="underline decoration-accent/60 decoration-2 underline-offset-8">
              people actually use.
            </span>
          </span>
        </motion.h1>

        <motion.div
          className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-mono text-foreground/60">{"//"}</span>
          <span>I work as a</span>
          <span className="relative inline-block overflow-hidden align-baseline font-mono font-medium leading-[1.35] text-foreground">
            {/* Invisible sizer: reserves the width/height of the longest role. */}
            <span aria-hidden className="invisible whitespace-nowrap">
              {longestRole}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center whitespace-nowrap"
              >
                {portfolioData.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          I design, build, and ship full-stack web applications — from the database up
          to the pixels. Founder of{" "}
          <a
            href={portfolioData.imhotepTech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-medium text-foreground underline decoration-accent/70 decoration-2 underline-offset-4 hover:decoration-accent"
          >
            Imhotep Tech
            <ArrowUpRight className="inline h-3.5 w-3.5" />
          </a>
          , Computer Science student at Nile University, and the person behind
          10+ shipped projects used by hundreds of people.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            See the work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={portfolioData.imhotepTech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:bg-muted/60"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            Visit Imhotep Tech
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Or just say hi →
          </a>
        </motion.div>

        <motion.ul
          className="mt-10 flex flex-wrap gap-2 text-xs"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.56 }}
        >
          {portfolioData.valueProps.map((vp) => (
            <li
              key={vp}
              className="rounded-full border border-border/60 bg-muted/30 px-3 py-1 font-mono text-muted-foreground"
            >
              {vp}
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="inline-flex items-center gap-1.5 font-mono">
            <MapPin className="h-3.5 w-3.5" />
            {portfolioData.personalInfo.location}
          </span>
          {localTime && (
            <span className="font-mono">
              Local time{" "}
              <span className="text-foreground/80">{localTime}</span>
            </span>
          )}
          <span className="font-mono">
            Ⓒ Imhotep Tech &middot; est. by the founder
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  )
}
