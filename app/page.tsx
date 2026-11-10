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
  Clock,
  MapPin,
  Copy,
  Check,
  ChevronDown,
} from "lucide-react"

import { portfolioData, type Project, type Package } from "@/lib/portfolio-data"
import { FloatingBackground } from "@/components/antigravity/floating-background"
import { RoleRotator } from "@/components/antigravity/role-rotator"
import { TiltCard } from "@/components/antigravity/tilt-card"
import { ProjectCard } from "@/components/antigravity/project-card"
import { PackageCard } from "@/components/antigravity/package-card"
import { SkillsMatrix } from "@/components/antigravity/skills-matrix"
import { StudioCard } from "@/components/antigravity/studio-card"

// Theme Toggle Component with 44px minimum touch target
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
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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

// Live Cairo Time Hook
function useCairoTime() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const update = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Cairo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        setTime(formatter.format(new Date()))
      } catch {
        setTime("")
      }
    }
    update()
    const timer = setInterval(update, 30000)
    return () => clearInterval(timer)
  }, [])

  return time
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [copiedEmail, setCopiedEmail] = useState(false)

  const cairoTime = useCairoTime()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["featured", "projects", "packages", "skills", "about", "contact"]
      const scrollPosition = window.scrollY + 220

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

  // Copy email helper
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2400)
  }

  // All projects from lib/portfolio-data.ts
  const allProjects = portfolioData.projects
  const featuredProjects = useMemo(() => allProjects.filter((p) => p.featured), [allProjects])
  const packages = portfolioData.packages

  // Filtered projects according to category pill & search query
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.plainDescription.toLowerCase().includes(query) ||
        project.technicalDescription.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query)

      if (!matchesSearch) return false

      if (selectedCategory === "all") return true
      if (selectedCategory === "featured") return project.featured
      if (selectedCategory === "web-mobile") {
        return project.category === "Web App" || project.category === "Web & Mobile App"
      }
      if (selectedCategory === "business") {
        return project.category === "Business Tool"
      }
      if (selectedCategory === "quantum") {
        return project.category === "Quantum / Research"
      }
      if (selectedCategory === "ai") {
        return project.category === "AI / ML" || project.category === "Quantum / Research"
      }
      if (selectedCategory === "pwa-games") {
        return (
          project.category === "PWA" ||
          project.category === "Game" ||
          project.category === "Early Work"
        )
      }
      return true
    })
  }, [allProjects, selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070B14] text-[#09111E] dark:text-[#F8FAFC] font-sans selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-200 transition-colors duration-300 relative overflow-x-hidden">
      {/* 3D Antigravity Floating Background with Ambient Orbs */}
      <FloatingBackground />

      {/* Sticky Glass Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC]/80 dark:bg-[#070B14]/80 backdrop-blur-2xl transition-all duration-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform shrink-0 border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-white/5">
              <Image
                src="/KBLogo.png"
                alt="Karim Bassem Logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm font-heading text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                {portfolioData.personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate hidden sm:block">
                {portfolioData.personalInfo.role} • Imhotep Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            <a
              href="#featured"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeSection === "featured"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-white/5 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              Featured
            </a>
            <a
              href="#projects"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all flex items-center gap-1.5 ${
                activeSection === "projects"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-white/5 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <span>All Projects</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                {allProjects.length}
              </span>
            </a>
            <a
              href="#packages"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all flex items-center gap-1.5 ${
                activeSection === "packages"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-white/5 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <span>Libraries</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                {packages.length}
              </span>
            </a>
            <a
              href="#skills"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeSection === "skills"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-white/5 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              Stack & Studio
            </a>
            <a
              href="#about"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeSection === "about"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-white/5 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              Education
            </a>
            <a
              href="#contact"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeSection === "contact"
                  ? "text-rose-600 dark:text-rose-400 bg-rose-500/10 dark:bg-white/5 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              Contact
            </a>
            <div className="ml-2 pl-2 border-l border-slate-300/60 dark:border-white/10">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Glass Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC]/95 dark:bg-[#070B14]/95 backdrop-blur-2xl px-4 py-3 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <a
              href="#featured"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between min-h-[44px]"
            >
              <span>Featured Work</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between min-h-[44px]"
            >
              <span>All Projects ({allProjects.length})</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between min-h-[44px]"
            >
              <span>Libraries & APIs ({packages.length})</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between min-h-[44px]"
            >
              <span>Studio & Tech Stack</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between min-h-[44px]"
            >
              <span>Education & Quick Facts</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-all flex items-center justify-between min-h-[44px]"
            >
              <span>Contact Karim</span>
              <ArrowUpRight className="h-4 w-4 text-rose-500" />
            </a>
          </nav>
        )}
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-6 sm:pt-10 pb-24 space-y-24">
        {/* HERO SECTION — ANTIGRAVITY BENTO GRID */}
        <section className="pt-2 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Main Bio Bento Card */}
            <TiltCard
              maxTilt={5}
              scaleOnHover={1.01}
              className="lg:col-span-8 antigravity-glass rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-antigravity relative overflow-hidden group border border-slate-200/80 dark:border-white/10"
            >
              <div className="space-y-6">
                {/* Cairo Time & Location */}
                {cairoTime && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{cairoTime} • Cairo, Egypt</span>
                  </div>
                )}

                {/* Main Headline with 3D Word Rotator */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-bold font-heading tracking-tight leading-[1.12] text-slate-900 dark:text-white">
                    Hi, I'm {portfolioData.personalInfo.firstName}. <br />
                    <span className="text-slate-900 dark:text-white">I build </span>
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                      software{" "}
                    </span>
                    <span className="bg-gradient-to-r from-rose-600 to-amber-600 dark:from-rose-400 dark:to-amber-300 bg-clip-text text-transparent">
                      people actually use.
                    </span>
                  </h1>

                  {/* 3D Animated Role Rotator */}
                  <div className="text-lg sm:text-2xl font-semibold font-heading text-slate-700 dark:text-slate-300 flex items-center gap-2 pt-1">
                    <span className="text-slate-400 dark:text-slate-500">I am a</span>
                    <RoleRotator roles={portfolioData.roles} intervalMs={3000} />
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed pt-2">
                    {portfolioData.personalInfo.bio}{" "}
                    <a
                      href={portfolioData.imhotepTech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 font-semibold underline underline-offset-4 transition-colors inline-flex items-center gap-0.5"
                    >
                      {portfolioData.imhotepTech.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </p>
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="flex flex-wrap items-center gap-3.5 mt-8 pt-6 border-t border-slate-200/70 dark:border-white/10">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider font-heading shadow-md shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Terminal className="h-4 w-4" />
                  Explore All {allProjects.length} Projects
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase tracking-wider font-heading hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                  aria-label="Copy Karim's email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied Email!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-slate-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                {/* Social Icon Pills */}
                <div className="flex items-center gap-2 ml-auto">
                  {portfolioData.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center min-h-[44px] min-w-[44px]"
                      aria-label={`${social.name} Profile`}
                    >
                      {social.name === "GitHub" && <Github className="h-4.5 w-4.5" />}
                      {social.name === "LinkedIn" && <Linkedin className="h-4.5 w-4.5" />}
                      {social.name === "Twitter" && <Twitter className="h-4.5 w-4.5" />}
                    </a>
                  ))}
                </div>
              </div>
            </TiltCard>

            {/* Profile Photo & Spatial Stats Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Profile Card with 3D Depth */}
              <TiltCard
                maxTilt={8}
                scaleOnHover={1.02}
                className="antigravity-glass rounded-3xl overflow-hidden shadow-antigravity aspect-square relative group border border-slate-200/80 dark:border-white/10"
              >
                <Image
                  src="/kbassem.jpg"
                  alt="Karim Bassem Joseph"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Photo Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold font-heading tracking-wide">
                      {portfolioData.personalInfo.name}
                    </p>
                    <p className="text-[11px] text-slate-300 font-mono">
                      Founder @ Imhotep Tech
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </TiltCard>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <TiltCard
                  maxTilt={6}
                  scaleOnHover={1.03}
                  className="antigravity-glass rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-slate-200/80 dark:border-white/10"
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-2">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                    3.96
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    GPA (Honors)
                  </span>
                </TiltCard>

                <TiltCard
                  maxTilt={6}
                  scaleOnHover={1.03}
                  className="antigravity-glass rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-slate-200/80 dark:border-white/10"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                    <Layers className="h-5 w-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                    {allProjects.length}+
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    Shipped Apps
                  </span>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS BAND */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {portfolioData.metrics.map((metric) => (
            <TiltCard
              key={metric.label}
              maxTilt={5}
              scaleOnHover={1.02}
              className="antigravity-glass rounded-2xl p-6 flex items-center gap-4 border border-slate-200/80 dark:border-white/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                  {metric.value}
                  {metric.suffix}
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {metric.label}
                </div>
              </div>
            </TiltCard>
          ))}
        </section>

        {/* FEATURED WORK & FLAGSHIP SYSTEMS (`#featured`) */}
        <section id="featured" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-rose-600 dark:text-rose-400">
                <Sparkles className="h-3.5 w-3.5" />
                Flagship Systems
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
                Featured Work & Real-World Deployments
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium max-w-2xl">
                High-scale production systems in active use by businesses and thousands of customers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} priorityFeatured={true} />
            ))}
          </div>
        </section>

        {/* ALL PROJECTS SECTION (`#projects`) — SHOWING 100% OF PROJECTS IN portfolio-data.ts */}
        <section id="projects" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-blue-600 dark:text-blue-400">
                <Terminal className="h-3.5 w-3.5" />
                Comprehensive Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
                All Projects ({allProjects.length})
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Every project from portfolio data with both plain-English business value and deep technical architecture specs.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full sm:w-72 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by tech, name, or domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 text-xs font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[44px]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 items-center" role="tablist">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all min-h-[40px] ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100/90 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200/80 dark:border-white/5"
              }`}
            >
              All ({allProjects.length})
            </button>
            <button
              onClick={() => setSelectedCategory("featured")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all min-h-[40px] ${
                selectedCategory === "featured"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100/90 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200/80 dark:border-white/5"
              }`}
            >
              Featured ({featuredProjects.length})
            </button>
            <button
              onClick={() => setSelectedCategory("business")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all min-h-[40px] ${
                selectedCategory === "business"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100/90 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200/80 dark:border-white/5"
              }`}
            >
              Business Tools
            </button>
            <button
              onClick={() => setSelectedCategory("web-mobile")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all min-h-[40px] ${
                selectedCategory === "web-mobile"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100/90 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200/80 dark:border-white/5"
              }`}
            >
              Web & Mobile Apps
            </button>
            <button
              onClick={() => setSelectedCategory("quantum")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all min-h-[40px] ${
                selectedCategory === "quantum"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100/90 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200/80 dark:border-white/5"
              }`}
            >
              Quantum & Research
            </button>
            <button
              onClick={() => setSelectedCategory("ai")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all min-h-[40px] ${
                selectedCategory === "ai"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100/90 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200/80 dark:border-white/5"
              }`}
            >
              AI / ML
            </button>
            <button
              onClick={() => setSelectedCategory("pwa-games")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all min-h-[40px] ${
                selectedCategory === "pwa-games"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-slate-100/90 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200/80 dark:border-white/5"
              }`}
            >
              PWAs, Games & Early Work
            </button>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 antigravity-glass rounded-2xl border border-slate-200/80 dark:border-white/10">
              <p className="text-base font-medium text-slate-600 dark:text-slate-300">
                No projects matched "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline min-h-[44px] px-3 py-2"
              >
                Reset filters & search
              </button>
            </div>
          )}
        </section>

        {/* PUBLISHED LIBRARIES & REUSABLE PACKAGES SECTION (`#packages`) */}
        <section id="packages" className="space-y-6 scroll-mt-24">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              <PackageIcon className="h-3.5 w-3.5" />
              Published Packages
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
              Libraries & APIs ({packages.length})
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Reusable Python libraries published on PyPI and free developer APIs built for other engineers to import and use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.title} pkg={pkg} />
            ))}
          </div>
        </section>

        {/* STUDIO SPOTLIGHT & ENGINEERING MATRIX (`#skills`) */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <StudioCard />

          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-rose-600 dark:text-rose-400">
                <Code className="h-3.5 w-3.5" />
                Technical Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
                Engineering Stack & Foundations
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Grouped by architectural capability — from pixel-level interfaces to database queries and testing.
              </p>
            </div>

            <SkillsMatrix />
          </div>
        </section>

        {/* EDUCATION & QUICK FACTS (`#about`) */}
        <section id="about" className="space-y-6 scroll-mt-24">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
              Education & Honors
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Top academic performance combined with hands-on software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Degree Card */}
            <TiltCard
              maxTilt={5}
              scaleOnHover={1.01}
              className="md:col-span-7 antigravity-glass rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 dark:border-white/10"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400 flex items-center justify-center mb-6">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-1.5">
                  {portfolioData.education.program}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-6">
                  {portfolioData.education.school} • {portfolioData.education.location}
                </p>
              </div>

              <div className="space-y-3 bg-slate-100/80 dark:bg-slate-900/80 p-5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                <div className="flex items-center justify-between">
                  <span>Cumulative GPA:</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400 text-sm">
                    3.96 / 4.00
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Presidential Honors:</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400 text-sm">
                    2 Terms (4.0 GPA)
                  </span>
                </div>
              </div>
            </TiltCard>

            {/* Philosophy & Delivery Card */}
            <TiltCard
              maxTilt={5}
              scaleOnHover={1.01}
              className="md:col-span-5 antigravity-glass rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 dark:border-white/10"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                  Engineering Philosophy
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  "I build things people actually use." Whether it's replacing paper cards with digital PWAs or architecting domain-driven APIs, I believe software only succeeds when users love using it.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Based in {portfolioData.personalInfo.location}</span>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* CTA & CONTACT SECTION (`#contact`) */}
        <section id="contact" className="scroll-mt-24">
          <TiltCard
            maxTilt={4}
            scaleOnHover={1.01}
            className="antigravity-glass rounded-3xl p-8 sm:p-12 shadow-antigravity relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-200/80 dark:border-white/10"
          >
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/25 text-xs font-semibold font-heading uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                Get in Touch
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
                Have a project or problem to solve?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Whether you need a custom web app, an API integration, or an automation pipeline, feel free to reach out.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3.5 shrink-0">
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-500 text-white font-semibold text-xs uppercase tracking-wider font-heading shadow-md shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 min-h-[44px]"
                aria-label={`Send an email to ${portfolioData.personalInfo.email}`}
              >
                <Mail className="h-4 w-4" />
                Email Karim
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-5 py-3.5 rounded-xl bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase tracking-wider font-heading hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 min-h-[44px]"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </TiltCard>

          {/* Footer Info */}
          <footer className="mt-16 text-center text-xs text-slate-500 dark:text-slate-400 font-medium space-y-3">
            <div className="flex items-center justify-center gap-6">
              {portfolioData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
                >
                  {social.name}
                </a>
              ))}
              <a
                href={portfolioData.imhotepTech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold"
              >
                Imhotep Tech
              </a>
            </div>
            <p>
              © {new Date().getFullYear()} {portfolioData.personalInfo.name}. Designed with spatial depth & weightlessness.
            </p>
          </footer>
        </section>
      </main>
    </div>
  )
}
