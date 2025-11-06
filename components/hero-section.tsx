"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/.25),transparent_40%),radial-gradient(circle_at_80%_30%,hsl(var(--accent)/.2),transparent_45%),radial-gradient(circle_at_50%_80%,hsl(var(--accent)/.15),transparent_45%)]" />
      </div>
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {portfolioData.personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {portfolioData.personalInfo.title}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft fast, accessible products—backed by clean APIs and modern UI—
            that turn ideas into shipped, reliable software.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors text-sm font-medium"
            >
              Work With Me
            </a>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="px-3 py-1 rounded-full border border-border/60 bg-muted/30 font-mono">Founder @ Imhotep Tech</span>
            <span className="px-3 py-1 rounded-full border border-border/60 bg-muted/30 font-mono">Python • Django • React</span>
            <span className="px-3 py-1 rounded-full border border-border/60 bg-muted/30 font-mono">Built 10+ shipped projects</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  )
}
