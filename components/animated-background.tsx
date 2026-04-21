"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

/**
 * Ambient page background: animated gradient blobs + faint grid,
 * plus a cursor-following spotlight on desktop.
 *
 * All motion-dependent children are gated behind `mounted` to avoid SSR/CSR
 * hydration mismatches (useReducedMotion + pointer state are client-only).
 */
export function AnimatedBackground() {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [pos, setPos] = useState({ x: 0.5, y: 0.3 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || reduce) return
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return

    let raf = 0
    const handler = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setPos({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        })
      })
    }
    window.addEventListener("pointermove", handler, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handler)
      cancelAnimationFrame(raf)
    }
  }, [mounted, reduce])

  const showMotion = mounted && !reduce

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Faint grid — static, safe for SSR */}
      <div className="absolute inset-0 bg-grid mask-fade-edges opacity-60" />

      {/* Ambient gradient blobs — client-only */}
      {showMotion && (
        <>
          <motion.div
            className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
            animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -right-32 h-[44rem] w-[44rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent-2) 18%, transparent), transparent 60%)",
            }}
            animate={{ x: [0, -30, 20, 0], y: [0, -20, 10, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Cursor spotlight (desktop only, pointer-based) — client-only */}
      {showMotion && (
        <div
          className="absolute inset-0 transition-[background] duration-200 ease-out"
          style={{
            background: `radial-gradient(420px circle at ${pos.x * 100}% ${
              pos.y * 100
            }%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 70%)`,
          }}
        />
      )}
    </div>
  )
}
