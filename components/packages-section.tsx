"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Package } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function PackagesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section
      id="packages"
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
          ⟣ Open Source
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-3xl font-bold tracking-tight md:text-5xl"
        >
          Libraries &amp; APIs{" "}
          <span className="text-muted-foreground">anyone can use.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          The reusable pieces I&apos;ve pulled out of my own projects and
          published for the community. Free, maintained, and small enough to
          actually read.
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {portfolioData.packages.map((pkg, i) => (
            <motion.article
              key={pkg.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group glass flex flex-col rounded-2xl p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-muted/60 text-accent">
                  <Package className="h-4 w-4" />
                </span>
                <span className="rounded-full border border-border/60 bg-muted/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {pkg.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                {pkg.title}
              </h3>

              <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-4 text-sm">
                <a
                  href={pkg.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                {pkg.liveUrl && (
                  <a
                    href={pkg.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    API
                  </a>
                )}
                {pkg.pypiUrl && (
                  <a
                    href={pkg.pypiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    PyPI
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
