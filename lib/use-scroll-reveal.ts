"use client"

import { useRef } from "react"
import { useInView, type Variants } from "framer-motion"

/**
 * Shared scroll-reveal animation hook.
 *
 * Returns a `ref` to attach to the section wrapper, a boolean `inView`,
 * and pre-built Framer Motion variants for the container and each child item.
 *
 * Usage:
 *   const { ref, inView, containerVariants, itemVariants } = useScrollReveal()
 *   <motion.section ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
 *     <motion.div variants={itemVariants}>…</motion.div>
 *   </motion.section>
 */
export function useScrollReveal(margin = "-12%") {
  const ref = useRef(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: margin as any })

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return { ref, inView, containerVariants, itemVariants }
}
