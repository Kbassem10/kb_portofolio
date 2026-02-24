"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20" ref={ref}>
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 font-mono">
            Skills & Technologies
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-medium mb-6 text-foreground/80">Core Technologies</h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {portfolioData.skills.core.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm font-mono hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6 text-foreground/80">Additional Skills</h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {portfolioData.skills.additional.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 bg-muted/30 border border-border/50 rounded-lg text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
