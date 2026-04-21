"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function ImhotepSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-15%" })
  const it = portfolioData.imhotepTech

  return (
    <section
      id="imhotep"
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
          ⟣ Featured Venture
        </motion.p>

        <motion.a
          href={it.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group gradient-border shine relative block overflow-hidden rounded-3xl bg-gradient-to-br from-card to-background p-[1px]"
        >
          <div className="glass relative flex flex-col gap-10 overflow-hidden rounded-[calc(var(--radius)+1rem)] p-8 md:p-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  My Studio
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  imhoteptech.vercel.app
                </span>
              </div>

              <h3 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                <span className="text-gradient-accent">{it.name}</span>
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {it.description}
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {it.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-foreground/85"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform group-hover:scale-[1.03]">
                  Visit Imhotep Tech
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-xs text-muted-foreground">
                  Opens in a new tab
                </span>
              </div>
            </div>

            <div className="relative aspect-[5/4] w-full flex-shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-background/60 lg:w-[32rem]">
              <MockBrowser url={it.url} tagline={it.tagline} />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}

function MockBrowser({ url, tagline }: { url: string; tagline: string }) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center gap-1.5 border-b border-border/70 bg-muted/40 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" />
        <span className="ml-3 flex-1 truncate rounded-md border border-border/60 bg-background/70 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
          {url.replace("https://", "")}
        </span>
      </div>
      <div className="relative flex flex-1 flex-col items-start justify-center gap-3 overflow-hidden p-6">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Software Studio
          </div>
          <div className="text-3xl font-bold leading-tight tracking-tight text-gradient-accent">
            Imhotep Tech
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {["Django", "React", "PWA", "APIs", "Docker"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/60 bg-muted/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
