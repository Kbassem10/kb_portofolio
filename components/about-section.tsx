"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20" ref={ref}>
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-mono">About Me</h2>

          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 max-w-3xl text-pretty">
            {portfolioData.personalInfo.bio}
          </p>

          <div className="mt-12 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span>{portfolioData.personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="hover:text-foreground transition-colors"
              >
                {portfolioData.personalInfo.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}