"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Package } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PackagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="packages" className="min-h-screen px-6 py-20" ref={ref}>
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 font-mono">
            Open Source Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur border-border hover:bg-card transition-all duration-300 group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <Package className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{pkg.title}</h3>
                        <span className="text-xs text-muted-foreground font-mono">{pkg.category}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{pkg.description}</p>

                    <div className="flex flex-col gap-2 mt-auto">
                      <a
                        href={pkg.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      {pkg.liveUrl && (
                        <a
                          href={pkg.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>API Docs</span>
                        </a>
                      )}
                      {pkg.pypiUrl && (
                        <a
                          href={pkg.pypiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>PyPI</span>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
