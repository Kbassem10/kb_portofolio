"use client"

import React from "react"
import { ArrowUpRight, Github, Package as PackageIcon, Terminal, ExternalLink } from "lucide-react"
import type { Package } from "@/lib/portfolio-data"
import { TiltCard } from "./tilt-card"

interface PackageCardProps {
  pkg: Package
}

export function PackageCard({ pkg }: PackageCardProps) {
  const isPyPi = Boolean(pkg.pypiUrl)

  return (
    <TiltCard
      maxTilt={7}
      scaleOnHover={1.015}
      className="h-full flex flex-col justify-between antigravity-glass rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
    >
      <div className="space-y-4">
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase font-heading bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
            {pkg.category === "Python Library" ? (
              <Terminal className="w-3 h-3 text-indigo-500" />
            ) : (
              <PackageIcon className="w-3 h-3 text-indigo-500" />
            )}
            {pkg.category}
          </span>

          <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
            {pkg.category === "Python Library" ? "PyPI Package" : "Public REST API"}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {pkg.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {pkg.description}
          </p>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-slate-200/70 dark:border-white/10">
        {pkg.githubUrl && (
          <a
            href={pkg.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 text-slate-800 dark:text-slate-200 text-xs font-semibold font-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex items-center gap-1.5 min-h-[44px]"
            aria-label={`GitHub Repo for ${pkg.title}`}
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        )}

        {pkg.liveUrl && (
          <a
            href={pkg.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold font-heading flex items-center gap-1.5 min-h-[44px]"
            aria-label={`Live API for ${pkg.title}`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            Live API
          </a>
        )}

        {pkg.pypiUrl && (
          <a
            href={pkg.pypiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-rose-700 dark:text-rose-300 hover:bg-rose-600 hover:text-white transition-all text-xs font-semibold font-heading flex items-center gap-1.5 min-h-[44px]"
            aria-label={`PyPI Package for ${pkg.title}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            PyPI Package
          </a>
        )}
      </div>
    </TiltCard>
  )
}
