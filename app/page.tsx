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
  Smartphone
} from "lucide-react"
import { PROJECTS } from "@/lib/projects"

// Theme Toggle Component
function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
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
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200/50 dark:border-neutral-800/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
            <div className="relative h-7 w-7 overflow-hidden rounded-md">
              <Image
                src="/KBLogo.png"
                alt="KB Logo"
                fill
                priority
                sizes="28px"
              />
            </div>
          </a>
          <nav className="flex items-center gap-6">
            <a href="#work" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#facts" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors">
              Facts
            </a>
            <a href="#contact" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex flex-col items-start gap-6">
            {/* Rounded Profile Avatar */}
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-neutral-800 shadow-sm transition-transform hover:scale-105 duration-300">
              <Image
                src="/kbassem.jpg"
                alt="Karim Bassem"
                fill
                priority
                sizes="80px"
                className="object-cover"
              />
            </div>
            
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-neutral-900 dark:text-neutral-100">
                Hi, I'm Karim. I build{" "}
                <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-500 dark:from-white dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
                  software that people actually use.
                </span>
              </h1>
              <p className="text-lg md:text-xl font-medium text-neutral-500 dark:text-neutral-400">
                Software Developer, Founder of{" "}
                <a
                  href="https://imhoteptech.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 dark:text-neutral-255 hover:underline underline-offset-4 transition-colors font-semibold"
                >
                  Imhotep Tech
                </a>
                , and CS Student.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-sm font-semibold transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="work" className="py-12 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-8">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col justify-between gap-5 p-5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-50/20 dark:bg-neutral-900/10 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-neutral-900/30 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-3.5 mt-auto">
                  {/* Action Links */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
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
                        className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Live Web
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                        Play Store
                      </a>
                    )}
                  </div>
                  
                  {/* Tag Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/30 dark:border-neutral-700/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Projects Section */}
        <section className="py-12 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
            Past Projects
          </h2>
          <div className="space-y-3">
            {pastProjects.map((project) => {
              const link = project.liveUrl || project.githubUrl
              
              const Content = (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-800/40 bg-neutral-50/10 dark:bg-neutral-900/5 hover:border-neutral-400 dark:hover:border-neutral-650 hover:bg-white dark:hover:bg-neutral-900/20 transition-all duration-200">
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 flex items-center gap-1 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200">
                      {project.title}
                      {link && (
                        <ArrowUpRight className="h-3 w-3 text-neutral-400 dark:text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      )}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1 sm:mt-0">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/10 dark:border-neutral-700/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )

              if (link) {
                return (
                  <a
                    key={project.title}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {Content}
                  </a>
                )
              }

              return <div key={project.title}>{Content}</div>
            })}
          </div>
        </section>

        {/* Quick Facts Section */}
        <section id="facts" className="py-12 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-8">
            Quick Facts
          </h2>
          <div className="space-y-4">
            {/* Education Fact */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-800/40 bg-neutral-50/10 dark:bg-neutral-900/5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-200">
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">Education</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                  4th-Year CS Student at Nile University (3.96 GPA, Presidential Honors on 2 terms with 4.0 GPA)
                </p>
              </div>
            </div>

            {/* Expanded Tech Stack Fact */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-800/40 bg-neutral-50/10 dark:bg-neutral-900/5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-200">
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                <Code className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">Full Tech Stack</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    "React Native", "Next.js", "React", "TypeScript", "Tailwind CSS", "PWA",
                    "Django", "Django REST", "FastAPI", "Flask", "Python", "Qiskit",
                    "PostgreSQL", "SQLite", "Docker", "Tailscale", "Git", "Playwright"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-850 dark:text-neutral-200 border border-neutral-200/30 dark:border-neutral-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Fact */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-200/40 dark:border-neutral-800/40 bg-neutral-50/10 dark:bg-neutral-900/5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-200">
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">Studio</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Founder of{" "}
                  <a
                    href="https://imhoteptech.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 dark:text-neutral-250 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:text-neutral-950 dark:hover:text-white transition-colors font-semibold"
                  >
                    Imhotep Tech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact Section */}
        <section id="contact" className="py-12 border-t border-neutral-200/50 dark:border-neutral-800/50 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
                Let's build something.
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Available for contract roles and interesting projects.
              </p>
            </div>
            
            <div className="flex items-center justify-center sm:justify-end gap-3">
              <a
                href="https://github.com/kbassem10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-55 dark:hover:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-500"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karimbassem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-55 dark:hover:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-500"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:karimbassemj@gmail.com"
                className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-55 dark:hover:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-500"
                aria-label="Email Me"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Karim Bassem Joseph. All rights reserved.
          </div>
        </section>
      </main>
    </div>
  )
}
