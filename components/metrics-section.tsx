"use client"

import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { portfolioData } from "@/lib/portfolio-data"

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  // `amount: 0.2` triggers as soon as 20% of the tile is visible — reliable
  // for tiles that sit close to the fold on any screen height.
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to])

  // Safety net: if the IntersectionObserver never fires (e.g. element sits in
  // an overflow-hidden ancestor that confuses the observer), still land on
  // the real value after a brief delay.
  useEffect(() => {
    const id = window.setTimeout(() => {
      setValue((v) => (v === 0 ? to : v))
    }, 2500)
    return () => window.clearTimeout(id)
  }, [to])

  return (
    <span ref={ref}>
      {Math.round(value).toLocaleString()}
      {suffix}
    </span>
  )
}

export function MetricsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section
      ref={ref}
      className="relative px-4 py-16 md:px-6 md:py-20"
      aria-label="Impact metrics"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="glass grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-3"
          style={{
            backgroundColor: "color-mix(in oklab, var(--border) 80%, transparent)",
          }}
        >
          {portfolioData.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="flex flex-col items-start gap-1 bg-background/70 p-6 md:p-8"
            >
              <span className="font-mono text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                <Counter to={m.value} suffix={m.suffix} />
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {m.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
