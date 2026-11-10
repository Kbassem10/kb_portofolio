"use client"

import React from "react"
import { Code, Database, Cpu, Layers } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"
import { TiltCard } from "./tilt-card"

export function SkillsMatrix() {
  const icons: Record<string, React.ReactNode> = {
    frontend: <Layers className="w-5 h-5 text-blue-500" />,
    backend: <Code className="w-5 h-5 text-rose-500" />,
    data: <Database className="w-5 h-5 text-indigo-500" />,
    fundamentals: <Cpu className="w-5 h-5 text-emerald-500" />,
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {portfolioData.skillGroups.map((group) => (
        <TiltCard
          key={group.id}
          maxTilt={6}
          scaleOnHover={1.02}
          className="antigravity-glass rounded-2xl p-6 flex flex-col justify-between border border-slate-200/80 dark:border-white/10 hover:border-blue-400/30 transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0">
                {icons[group.id] || <Layers className="w-5 h-5 text-blue-500" />}
              </div>
              <div>
                <h4 className="font-bold font-heading text-slate-900 dark:text-white text-base">
                  {group.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {group.blurb}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-100/90 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  )
}
