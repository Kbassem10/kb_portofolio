"use client"

import React, { useEffect, useState } from "react"

export function FloatingBackground() {
  const [mounted, setMounted] = useState(false)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax offset
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMouseOffset({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Dynamic Ambient Gradient Orbs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/15 dark:bg-blue-600/15 blur-[120px] transition-transform duration-700 ease-out animate-pulse-glow"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/3 -left-32 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-rose-500/10 dark:bg-rose-500/15 blur-[120px] transition-transform duration-700 ease-out animate-pulse-glow"
        style={{
          transform: `translate3d(${mouseOffset.x * -0.6}px, ${mouseOffset.y * -0.6}px, 0)`,
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute -bottom-32 right-1/4 w-88 h-88 sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[130px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
        }}
      />

      {/* Grid Pattern with Edge Fade */}
      <div className="absolute inset-0 bg-grid opacity-35 dark:opacity-20 mask-fade-edges" />

      {/* Subtle Floating Antigravity Spatial Glyphs */}
      <div
        className="absolute top-[18%] right-[8%] hidden lg:block animate-float-slow opacity-40 dark:opacity-30"
        style={{
          transform: `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 0)`,
        }}
      >
        <div className="w-16 h-16 rounded-2xl border border-blue-400/30 dark:border-blue-400/20 bg-blue-500/5 backdrop-blur-sm rotate-12 flex items-center justify-center text-blue-500 text-xs font-mono font-bold shadow-lg">
          {"</>"}
        </div>
      </div>

      <div
        className="absolute top-[45%] left-[5%] hidden lg:block animate-float-reverse opacity-35 dark:opacity-25"
        style={{
          transform: `translate3d(${mouseOffset.x * -1}px, ${mouseOffset.y * -1}px, 0)`,
        }}
      >
        <div className="w-14 h-14 rounded-2xl border border-rose-400/30 dark:border-rose-400/20 bg-rose-500/5 backdrop-blur-sm -rotate-6 flex items-center justify-center text-rose-500 text-xs font-mono font-bold shadow-lg">
          λ:py
        </div>
      </div>

      <div
        className="absolute bottom-[22%] right-[10%] hidden lg:block animate-float-slow opacity-30 dark:opacity-20"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.9}px, ${mouseOffset.y * 0.9}px, 0)`,
        }}
      >
        <div className="w-12 h-12 rounded-xl border border-emerald-400/30 dark:border-emerald-400/20 bg-emerald-500/5 backdrop-blur-sm rotate-45 flex items-center justify-center text-emerald-500 text-[10px] font-mono shadow-md">
          git
        </div>
      </div>
    </div>
  )
}
