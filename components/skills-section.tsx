"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Monitor, Server, Database, Cpu } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const groupIcons: Record<string, React.ReactNode> = {
  frontend: <Monitor className="h-4 w-4" />,
  backend: <Server className="h-4 w-4" />,
  data: <Database className="h-4 w-4" />,
  fundamentals: <Cpu className="h-4 w-4" />,
}

export function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section
      id="skills"
      ref={ref}
      className="relative px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm uppercase tracking-wider text-muted-foreground"
        >
          ⟣ Toolkit
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-3xl font-bold tracking-tight md:text-5xl"
        >
          What I reach for{" "}
          <span className="text-muted-foreground">every day.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Grouped by what they actually do — so everyone, not just engineers,
          can read the map.
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolioData.skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
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
      </div>
    </section>
  )
}
