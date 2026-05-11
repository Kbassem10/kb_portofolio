"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Database, Cpu } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const groupIcons: Record<string, React.ReactNode> = {
  frontend: <Monitor className="h-4 w-4" />,
  backend: <Server className="h-4 w-4" />,
  data: <Database className="h-4 w-4" />,
  fundamentals: <Cpu className="h-4 w-4" />,
}

export function SkillsSection() {
  const { ref, inView, containerVariants, itemVariants } = useScrollReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className="relative px-4 py-20 md:px-6 md:py-28"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 font-mono text-sm uppercase tracking-wider text-muted-foreground"
        >
          ⟣ Toolkit
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-balance text-3xl font-bold tracking-tight md:text-5xl"
        >
          What I reach for{" "}
          <span className="text-muted-foreground">every day.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          The tools I use every day.
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolioData.skillGroups.map((group) => (
            <motion.div
              key={group.id}
              variants={itemVariants}
              className="glass rounded-2xl p-6 md:p-7"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-muted/60 text-accent">
                  {groupIcons[group.id] ?? <Cpu className="h-4 w-4" />}
                </span>
                <div>
                  <h3 className="text-base font-semibold md:text-lg">
                    {group.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{group.blurb}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border/60 bg-muted/30 px-3 py-1 font-mono text-xs text-foreground/85 transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
