"use client"

import { useEffect, useState, useMemo } from "react"
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
  Menu,
  X,
  Search,
  Filter,
  Package as PackageIcon,
  Twitter,
} from "lucide-react"
import { PROJECTS, type Project } from "@/lib/projects"

// Theme Toggle Component with 44px min touch target
function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 animate-pulse border border-slate-300/40 dark:border-white/10" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label="Toggle light and dark theme"
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5 text-rose-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-blue-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [activeSection, setActiveSection] = useState<string>("hero")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["work", "projects", "facts", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            return
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("hero")
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const featuredProjects = useMemo(() => PROJECTS.filter((p) => p.featured), [])
  const pastProjects = useMemo(() => PROJECTS.filter((p) => !p.featured), [])

  // Filter categories for the archive
  const filteredArchive = useMemo(() => {
    return pastProjects.filter((project) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      if (!matchesSearch) return false

      if (selectedCategory === "all") return true
      if (selectedCategory === "web") {
        return project.tags.some((t) =>
          ["Django", "React", "Next.js", "Web App", "Rental Management", "Flask"].includes(t)
        )
      }
      if (selectedCategory === "ai") {
        return (
          project.tags.some((t) =>
            ["AI", "Gemini AI", "Minimax AI", "Learning"].includes(t)
          ) || project.title.toLowerCase().includes("ai")
        )
      }
      if (selectedCategory === "pwa") {
        return project.tags.some((t) => ["PWA", "Electron"].includes(t))
      }
      if (selectedCategory === "packages") {
        return project.tags.some((t) =>
          ["Python", "REST API", "File Upload", "Email", "Currency", "Exchange Rates"].includes(t)
        )
      }
      return true
    })
  }, [pastProjects, selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070B14] text-[#09111E] dark:text-[#F8FAFC] font-sans selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-200 transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Subtle Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 mask-fade-edges" />
      </div>

      {/* Sticky Glass Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC]/85 dark:bg-[#070B14]/85 backdrop-blur-xl transition-all duration-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-full bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 dark:border-rose-400/40 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-sm shadow-sm group-hover:scale-105 transition-transform shrink-0">
              KB
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm font-heading text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                Karim Bassem
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate hidden sm:block">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#work"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeSection === "work"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-rose-600 dark:border-rose-500 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/5"
              }`}
            >
              Work
            </a>
            <a
              href="#projects"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeSection === "projects"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-rose-600 dark:border-rose-500 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/5"
              }`}
            >
              All Projects
            </a>
            <a
              href="#facts"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeSection === "facts"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-rose-600 dark:border-rose-500 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/5"
              }`}
            >
              Facts
            </a>
            <a
              href="#contact"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeSection === "contact"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-rose-600 dark:border-rose-500 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/5"
              }`}
            >
              Contact
            </a>
            <div className="ml-1 pl-2 border-l border-slate-300/60 dark:border-white/10">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Glass Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC]/95 dark:bg-[#070B14]/95 backdrop-blur-2xl px-4 py-3 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <span>Featured Work</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <span>All Projects & Packages</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="#facts"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <span>Quick Facts & Tech Stack</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
          </nav>
        )}
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-20 space-y-20">
        {/* HERO SECTION — BENTO GRID (Stitch Screen 4) */}
        <section className="pt-2 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Main Bio Bento Card */}
            <div className="lg:col-span-8 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
              <div className="space-y-6">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/50 text-xs font-semibold text-emerald-700 dark:text-emerald-300 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for contracts & software roles
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.15] text-slate-900 dark:text-white">
                    Hi, I'm Karim. <br />
                    <span className="text-blue-600 dark:text-blue-400">
                      I build software{" "}
                    </span>
                    <span className="text-rose-600 dark:text-rose-500">
                      people actually use.
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                    Software Developer, Founder of{" "}
                    <a
                      href="https://www.imhotep-tech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 hover:underline underline-offset-4 font-semibold transition-colors inline-flex items-center gap-0.5"
                    >
                      Imhotep Tech
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    , and CS Student.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-8 pt-4">
                <a
                  href="#work"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider font-heading shadow-md shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Terminal className="h-4 w-4" />
                  View Featured Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-transparent border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase tracking-wider font-heading hover:bg-rose-500/10 hover:border-rose-500/40 hover:text-rose-600 dark:hover:text-rose-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </div>
            </div>

            {/* Profile & Quick Stats Bento Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Profile Photo Card */}
              <div className="bento-card rounded-2xl overflow-hidden shadow-sm aspect-square relative group">
                <Image
                  src="/kbassem.jpg"
                  alt="Karim Bassem"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bento-card rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center text-center group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                  <div className="w-8 h-8 rounded-full bg-rose-500/10 dark:bg-rose-400/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-2">
                    <GraduationCap className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                    3.96
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    GPA
                  </span>
                </div>

                <div className="bento-card rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center text-center group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                    {PROJECTS.length}+
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED WORK & SYSTEMS SECTION (`#work`) */}
        <section id="work" className="space-y-6 scroll-mt-24">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-rose-600 dark:text-rose-400">
              <Sparkles className="h-3.5 w-3.5" />
              Featured Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
              Featured Work & Systems
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Hand-crafted web, mobile, and quantum tools built for real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bento-card rounded-2xl p-6 flex flex-col justify-between group shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 border border-slate-200/80 dark:border-white/10"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-heading uppercase tracking-wider bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200/60 dark:border-rose-800/40 shrink-0">
                      Featured
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 min-h-[38px]"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/40 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all flex items-center gap-1.5 min-h-[38px]"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-1.5 min-h-[38px]"
                        aria-label={`Play Store app for ${project.title}`}
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                        Play Store
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && !project.playStoreUrl && (
                      <span className="text-xs text-slate-400 italic py-1">Internal Tool</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ALL PROJECTS & LIBRARIES / ARCHIVE SECTION (`#projects`, Stitch Screen 2) */}
        <section id="projects" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-blue-600 dark:text-blue-400">
                <Terminal className="h-3.5 w-3.5" />
                Open Source & Packages
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
                More Projects & Libraries
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                100% complete archive of apps, Python libraries, and tools built across various stacks.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search archive..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300"
              }`}
            >
              All ({pastProjects.length})
            </button>
            <button
              onClick={() => setSelectedCategory("web")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
                selectedCategory === "web"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300"
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setSelectedCategory("ai")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
                selectedCategory === "ai"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300"
              }`}
            >
              AI / ML
            </button>
            <button
              onClick={() => setSelectedCategory("pwa")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
                selectedCategory === "pwa"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300"
              }`}
            >
              PWAs & Tools
            </button>
            <button
              onClick={() => setSelectedCategory("packages")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
                selectedCategory === "packages"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300"
              }`}
            >
              APIs & Libraries
            </button>
          </div>

          {/* Archive Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArchive.map((project) => {
              const primaryLink = project.liveUrl || project.githubUrl

              return (
                <div
                  key={project.title}
                  className="bento-card rounded-2xl p-5 flex flex-col justify-between group hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 border border-slate-200/80 dark:border-white/10"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold font-heading text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      {primaryLink && (
                        <a
                          href={primaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all shrink-0"
                          aria-label={`Open link for ${project.title}`}
                        >
                          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 mt-5 pt-3.5 border-t border-slate-200/60 dark:border-white/5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-badge text-[11px] py-0.5 px-2">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 pt-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-white transition-colors"
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
                          className="inline-flex items-center gap-1 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          {project.liveUrl.includes("pypi.org")
                            ? "PyPI Package"
                            : "Live Deployment"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredArchive.length === 0 && (
            <div className="text-center py-12 bento-card rounded-2xl">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                No projects matched your search criteria.
              </p>
            </div>
          )}
        </section>

        {/* QUICK FACTS & TECH STACK SECTION (`#facts`, Stitch Screen 3) */}
        <section id="facts" className="space-y-6 scroll-mt-24">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-rose-600 dark:text-rose-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Background & Skills
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
              Quick Facts & Tech Stack
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Academic excellence, studio leadership, and end-to-end tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Education Card (4 cols) */}
            <div className="md:col-span-4 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm group hover:scale-[1.01] active:scale-[0.99] transition-all duration-200">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400 flex items-center justify-center mb-6">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                  Education
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  4th-Year Computer Science Student at{" "}
                  <strong className="text-slate-900 dark:text-white">Nile University</strong>.
                </p>
              </div>

              <div className="space-y-2.5 bg-slate-100/70 dark:bg-slate-900/70 p-4 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-rose-400" />
                  <span>
                    Cumulative GPA:{" "}
                    <strong className="text-rose-600 dark:text-rose-400 font-bold">
                      3.96 / 4.00
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-rose-400" />
                  <span>
                    Presidential Honors on 2 terms with{" "}
                    <strong className="text-rose-600 dark:text-rose-400 font-bold">4.0 GPA</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Studio & Engineering Card (8 cols) */}
            <div className="md:col-span-8 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm group hover:scale-[1.01] active:scale-[0.99] transition-all duration-200">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center mb-6">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                  Studio & Engineering
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  Founder & Lead Developer at{" "}
                  <a
                    href="https://www.imhotep-tech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 hover:underline font-bold transition-colors"
                  >
                    Imhotep Tech
                  </a>
                  . Building web platforms, cross-platform mobile apps, and open-source developer tools.
                </p>
              </div>

              <div className="bg-slate-100/70 dark:bg-slate-900/70 p-5 rounded-xl border-l-4 border-blue-600 dark:border-blue-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white font-bold">Focus:</strong> High
                performance, clean domain architecture, accessible design, and real-world deployment.
              </div>
            </div>

            {/* Full Tech Stack Card (12 cols) */}
            <div className="md:col-span-12 bento-card rounded-2xl p-6 sm:p-8 shadow-sm group hover:scale-[1.005] transition-all duration-200">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200/80 dark:border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  Full Tech Stack
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "React Native",
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "PWA",
                  "Django",
                  "Django REST",
                  "FastAPI",
                  "Flask",
                  "Python",
                  "Qiskit",
                  "PostgreSQL",
                  "SQLite",
                  "Docker",
                  "Tailscale",
                  "Git",
                  "Playwright",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge text-xs px-3.5 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA & CONTACT SECTION (`#contact`) */}
        <section id="contact" className="scroll-mt-24">
          <div className="bento-card rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8 border border-slate-200/80 dark:border-white/10">
            <div className="space-y-2 max-w-xl text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
                Let's build something extraordinary.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Available for contract engineering roles, technical advisory, and high-impact software projects.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://github.com/kbassem10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 flex items-center justify-center shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karimbassem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 flex items-center justify-center shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:karimbassemj@gmail.com"
                className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-500 text-white font-semibold text-xs uppercase tracking-wider font-heading shadow-md shadow-rose-500/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 flex items-center gap-2 min-h-[44px]"
                aria-label="Email Karim Bassem"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center justify-center gap-6 mb-4">
              <a
                href="https://github.com/kbassem10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/karimbassem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/kbassem10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold"
              >
                Twitter
              </a>
            </div>
            <p>© {new Date().getFullYear()} Karim Bassem Joseph.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

