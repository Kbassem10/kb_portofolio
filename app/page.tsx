"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  GraduationCap,
  Code,
  Rocket,
  Smartphone,
  ExternalLink,
  Terminal,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react"
import { PROJECTS } from "@/lib/projects"

// Theme Toggle Component with 44px min touch target
function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-11 h-11 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 animate-pulse border border-slate-300/40 dark:border-white/10" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      aria-label="Toggle light and dark theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-sky-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const featuredProjects = PROJECTS.filter((p) => p.featured)
  const pastProjects = PROJECTS.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080C14] text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Grid Pattern Only — Zero Light Streaks / Blurs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25 dark:opacity-15 mask-fade-edges" />
      </div>

      {/* Sticky Glass Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-white/10 bg-slate-50/80 dark:bg-[#080C14]/80 backdrop-blur-xl transition-all duration-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-slate-300/60 dark:border-white/15 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/KBLogo.png"
                alt="KB Logo"
                fill
                priority
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Karim Bassem
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Software Developer
              </span>
            </div>
          </a>

          <nav className="flex items-center gap-1.5 sm:gap-3">
            <a
              href="#work"
              className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all min-h-[44px] flex items-center"
            >
              Work
            </a>
            <a
              href="#projects"
              className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all min-h-[44px] flex items-center"
            >
              All Projects
            </a>
            <a
              href="#facts"
              className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all min-h-[44px] flex items-center"
            >
              Facts
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all min-h-[44px] flex items-center"
            >
              Contact
            </a>
            <div className="ml-1 pl-2 border-l border-slate-300/60 dark:border-white/10">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-8 pb-20 space-y-16">
        {/* HERO SECTION — BENTO GRID ARCHETYPE */}
        <section className="pt-4 sm:pt-8">
          <div className="grid grid-cols-12 gap-5">
            {/* Main Bio Bento Card */}
            <div className="col-span-12 lg:col-span-8 bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6 relative z-10">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/70 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  Available for contracts & software roles
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-indigo-500/40 dark:border-indigo-400/40 shadow-xl group-hover:scale-[1.03] transition-transform duration-300">
                    <Image
                      src="/kbassem.jpg"
                      alt="Karim Bassem"
                      fill
                      priority
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                      Hi, I'm Karim. <br className="hidden sm:inline" />
                      <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-400 bg-clip-text text-transparent">
                        I build software people actually use.
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                      Software Developer, Founder of{" "}
                      <a
                        href="https://imhoteptech.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-cyan-400 hover:underline underline-offset-4 font-semibold transition-colors inline-flex items-center gap-0.5"
                      >
                        Imhotep Tech
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      , and CS Student.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-8 relative z-10">
                <a
                  href="#work"
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out min-h-[44px] flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  View Featured Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-white/10 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-slate-300/80 dark:hover:bg-slate-700/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out min-h-[44px] flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </div>
            </div>

            {/* Quick Stats Bento Box */}
            <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bento-card rounded-3xl p-5 flex flex-col justify-between group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Academics
                  </span>
                  <div className="p-2 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400">
                    <GraduationCap className="h-4.5 w-4.5" />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    3.96 <span className="text-sm font-semibold text-slate-500">GPA</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                    Nile Univ • Presidential Honors (4.0 GPA 2x)
                  </p>
                </div>
              </div>

              <div className="bento-card rounded-3xl p-5 flex flex-col justify-between group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Portfolio Track
                  </span>
                  <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    18+ <span className="text-sm font-semibold text-slate-500">Projects</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                    Full-Stack Web, Mobile Apps, Open Source CLI & APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED WORK SECTION — BENTO GRID CARDS */}
        <section id="work" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 dark:border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-cyan-400">
                <Sparkles className="h-3.5 w-3.5" />
                Featured Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white mt-1">
                Featured Work & Systems
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Hand-crafted web, mobile, and quantum tools built for real impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bento-card rounded-3xl p-6 flex flex-col justify-between relative group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out border border-slate-200/80 dark:border-white/10"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300 border border-indigo-500/20">
                      Featured
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  {/* Tag Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-200/70 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-300/40 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links with 44px min touch targets */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/60 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-300/80 dark:hover:bg-slate-700 transition-all min-h-[44px] inline-flex items-center gap-1.5"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all min-h-[44px] inline-flex items-center gap-1.5"
                        aria-label={`Live website for ${project.title}`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white transition-all min-h-[44px] inline-flex items-center gap-1.5"
                        aria-label={`Play Store app for ${project.title}`}
                      >
                        <Smartphone className="h-4 w-4" />
                        Play Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ALL PAST & OPEN SOURCE PROJECTS SECTION */}
        <section id="projects" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 dark:border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-cyan-400">
                <Terminal className="h-3.5 w-3.5" />
                Open Source & Packages
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white mt-1">
                More Projects & Libraries
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              100% complete archive of apps, Python libraries, and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastProjects.map((project) => {
              const primaryLink = project.liveUrl || project.githubUrl

              return (
                <div
                  key={project.title}
                  className="bento-card rounded-2xl p-5 flex flex-col justify-between group hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 border border-slate-200/70 dark:border-white/10"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      {primaryLink && (
                        <a
                          href={primaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-all min-w-[36px] min-h-[36px] flex items-center justify-center shrink-0"
                          aria-label={`Open link for ${project.title}`}
                        >
                          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 mt-4 pt-3 border-t border-slate-200/50 dark:border-white/5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-300/30 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-white transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub Repo
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          {project.liveUrl.includes("pypi.org") ? "PyPI Package" : "Live Deployment"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* QUICK FACTS & EXPERTISE SECTION */}
        <section id="facts" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 dark:border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-cyan-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Background & Skills
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white mt-1">
                Quick Facts & Tech Stack
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Academic excellence, studio leadership, and end-to-end tooling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Education Fact */}
            <div className="bento-card rounded-3xl p-6 space-y-4 group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400 w-fit">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Education</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  4th-Year Computer Science Student at <strong className="text-slate-900 dark:text-white">Nile University</strong>.
                </p>
                <div className="mt-3 p-3 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/40 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 space-y-1">
                  <div>• Cumulative GPA: <span className="text-indigo-600 dark:text-cyan-400 font-bold">3.96 / 4.00</span></div>
                  <div>• Presidential Honors on 2 terms with <span className="text-indigo-600 dark:text-cyan-400 font-bold">4.0 GPA</span></div>
                </div>
              </div>
            </div>

            {/* Studio Fact */}
            <div className="bento-card rounded-3xl p-6 space-y-4 group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400 w-fit">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Studio & Engineering</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Founder & Lead Developer at{" "}
                  <a
                    href="https://imhoteptech.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-cyan-400 hover:underline font-bold"
                  >
                    Imhotep Tech
                  </a>
                  . Building web platforms, cross-platform mobile apps, and open-source tools.
                </p>
                <div className="mt-3 p-3 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/40 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300">
                  Focus: High performance, clean architecture, accessible design, and real-world deployment.
                </div>
              </div>
            </div>

            {/* Full Tech Stack */}
            <div className="bento-card rounded-3xl p-6 space-y-4 group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400 w-fit">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Full Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {[
                    "React Native", "Next.js", "React", "TypeScript", "Tailwind CSS", "PWA",
                    "Django", "Django REST", "FastAPI", "Flask", "Python", "Qiskit",
                    "PostgreSQL", "SQLite", "Docker", "Tailscale", "Git", "Playwright"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-200/70 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-300/40 dark:border-white/10 hover:border-indigo-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER / CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <div className="bento-card rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 border border-slate-200/80 dark:border-white/10">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Let's build something extraordinary.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Available for contract engineering roles, technical advisory, and high-impact software projects.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://github.com/kbassem10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/70 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karimbassem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/70 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:karimbassemj@gmail.com"
                className="px-5 py-3 rounded-2xl bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 flex items-center gap-2 min-h-[48px]"
                aria-label="Email Karim Bassem"
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </div>
          </div>

          <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
            © {new Date().getFullYear()} Karim Bassem Joseph. Built with Next.js & Tailwind CSS. All rights reserved.
          </div>
        </section>
      </main>
    </div>
  )
}
