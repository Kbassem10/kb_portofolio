"use client"

import React, { useState } from "react"
import { ArrowUpRight, Github, Smartphone, Sparkles, Layers, Code, CheckCircle, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/portfolio-data"
import { TiltCard } from "./tilt-card"

interface ProjectCardProps {
  project: Project
  priorityFeatured?: boolean
}

export function ProjectCard({ project, priorityFeatured = false }: ProjectCardProps) {
  // Mode: "plain" (business value) | "tech" (deep architecture specs)
  const [viewMode, setViewMode] = useState<"plain" | "tech">("plain")

  const primaryLink = project.liveUrl || project.playStoreUrl || project.githubUrl

  return (
    <TiltCard
      maxTilt={priorityFeatured ? 6 : 8}
      scaleOnHover={1.015}
      className={`h-full flex flex-col justify-between antigravity-glass rounded-2xl p-6 sm:p-7 transition-all duration-300 border ${
        project.featured
          ? "border-blue-500/30 dark:border-blue-400/30 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/20"
          : "border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
      }`}
    >
      <div className="space-y-4">
        {/* Top Metadata Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase font-heading bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">
              {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase font-heading bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/25">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          {project.impact && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
              <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
              <span className="truncate max-w-[190px]">{project.impact}</span>
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {primaryLink && (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-white/5 transition-all shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label={`Open primary link for ${project.title}`}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>

          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 leading-snug">
            {project.tagline}
          </p>
        </div>

        {/* View Mode Toggle: Business Value vs Deep Tech */}
        <div className="pt-1">
          <div className="inline-flex p-0.5 rounded-lg bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 text-[11px] font-medium">
            <button
              type="button"
              onClick={() => setViewMode("plain")}
              className={`px-2.5 py-1 rounded-md transition-all font-heading ${
                viewMode === "plain"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              Plain English
            </button>
            <button
              type="button"
              onClick={() => setViewMode("tech")}
              className={`px-2.5 py-1 rounded-md transition-all font-heading ${
                viewMode === "tech"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              Tech Specs
            </button>
          </div>
        </div>

        {/* Dynamic Description based on Mode */}
        <div className="min-h-[70px]">
          {viewMode === "plain" ? (
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed animate-in fade-in-50 duration-200">
              {project.plainDescription}
            </p>
          ) : (
            <div className="rounded-xl bg-slate-100/70 dark:bg-slate-950/50 p-3 border border-slate-200/60 dark:border-white/5 animate-in fade-in-50 duration-200">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-1.5">
                <Code className="w-3.5 h-3.5 text-blue-500" />
                Architecture & Implementation
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-mono leading-relaxed">
                {project.technicalDescription}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Area: Technologies & Action Links */}
      <div className="space-y-4 mt-6 pt-5 border-t border-slate-200/70 dark:border-white/10">
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium hover:border-blue-400/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-semibold font-heading shadow-sm shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 min-h-[44px]"
              aria-label={`Live Demo for ${project.title}`}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 text-slate-800 dark:text-slate-200 text-xs font-semibold font-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex items-center gap-1.5 min-h-[44px]"
              aria-label={`GitHub Repository for ${project.title}`}
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold font-heading shadow-sm shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 min-h-[44px]"
              aria-label={`Google Play Store App for ${project.title}`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Play Store
            </a>
          )}

          {!project.liveUrl && !project.githubUrl && !project.playStoreUrl && (
            <span className="text-xs text-slate-400 italic py-2">
              Internal Architecture
            </span>
          )}
        </div>
      </div>
    </TiltCard>
  )
}
