"use client"

import React from "react"
import { ArrowUpRight, Rocket, ShieldCheck, Check } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"
import { TiltCard } from "./tilt-card"

export function StudioCard() {
  const { imhotepTech } = portfolioData

  return (
    <TiltCard
      maxTilt={5}
      scaleOnHover={1.01}
      className="antigravity-glass rounded-2xl p-6 sm:p-8 border border-blue-500/20 dark:border-blue-400/20 shadow-md transition-all duration-300 relative overflow-hidden group"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/25 text-xs font-semibold font-heading uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5 text-blue-500" />
            Software Studio
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            {imhotepTech.name}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {imhotepTech.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {imhotepTech.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
              >
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 flex items-center">
          <a
            href={imhotepTech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider font-heading shadow-md shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-[44px]"
            aria-label={`Visit ${imhotepTech.name} official website`}
          >
            Visit Studio
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </TiltCard>
  )
}
