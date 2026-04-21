"use client"

import { motion, useInView, AnimatePresence, LayoutGroup } from "framer-motion"
import { useMemo, useRef, useState } from "react"
import { ExternalLink, Github, Code2, Users, Sparkle } from "lucide-react"
import { portfolioData, type Project, type ProjectCategory } from "@/lib/portfolio-data"

const ALL_FILTER = "All" as const
type Filter = typeof ALL_FILTER | ProjectCategory

export function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })
  const [filter, setFilter] = useState<Filter>(ALL_FILTER)
  const [detailMode, setDetailMode] = useState<"plain" | "technical">("plain")

  const categories = useMemo<Filter[]>(() => {
    const seen = new Set<ProjectCategory>()
    portfolioData.projects.forEach((p) => seen.add(p.category))
    return [ALL_FILTER, ...Array.from(seen)]
  }, [])

  const visible = useMemo(
    () =>
      portfolioData.projects.filter(
        (p) => filter === ALL_FILTER || p.category === filter
      ),
    [filter]
  )

  return (
    <section
      id="projects"
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
          ⟣ Selected Work
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
              Projects that{" "}
              <span className="text-gradient-accent">ship.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Real products — not demos. Flip between a plain-English summary
              and the technical breakdown, or filter by type.
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label="Description style"
            className="inline-flex rounded-full border border-border bg-muted/40 p-1 font-mono text-xs"
          >
            <DetailToggle
              active={detailMode === "plain"}
              onClick={() => setDetailMode("plain")}
              icon={<Users className="h-3.5 w-3.5" />}
            >
              Plain English
            </DetailToggle>
            <DetailToggle
              active={detailMode === "technical"}
              onClick={() => setDetailMode("technical")}
              icon={<Code2 className="h-3.5 w-3.5" />}
            >
              Technical
            </DetailToggle>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          <LayoutGroup id="project-filters">
            {categories.map((c) => {
              const isActive = filter === c
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`relative rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-muted ring-1 ring-border"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 30,
                      }}
                    />
                  )}
                  {c}
                </button>
              )
            })}
          </LayoutGroup>
        </motion.div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                detailMode={detailMode}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function DetailToggle({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <button
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className={`relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {active && (
        <motion.span
          layoutId="detail-toggle-pill"
          className="absolute inset-0 -z-10 rounded-full bg-background ring-1 ring-border"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
      {icon}
      {children}
    </button>
  )
}

function ProjectCard({
  project,
  detailMode,
}: {
  project: Project
  detailMode: "plain" | "technical"
}) {
  const featured = !!project.featured

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-accent/50 ${
        featured
          ? "md:col-span-2 lg:col-span-4"
          : "md:col-span-1 lg:col-span-3"
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
          <Sparkle className="h-3 w-3" />
          Featured
        </span>
      )}

      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {project.category}
        </span>
        {project.impact && (
          <span className="rounded-full border border-accent-2/40 bg-accent-2/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-2">
            {project.impact}
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent md:text-2xl">
        {project.title}
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>

      <div className="relative mt-4 min-h-[5rem] flex-grow">
        <AnimatePresence mode="wait">
          <motion.p
            key={detailMode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm leading-relaxed text-foreground/85"
          >
            {detailMode === "plain"
              ? project.plainDescription
              : project.technicalDescription}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-border/60 pt-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            Source
          </a>
        )}
      </div>
    </motion.article>
  )
}
