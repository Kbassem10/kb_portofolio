"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ArrowUpRight, Command } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

type NavItem = {
  name: string
  href: string
  id?: string
}

const navItems: NavItem[] = [
  { name: "About", href: "#about", id: "about" },
  { name: "Imhotep Tech", href: "#imhotep", id: "imhotep" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Packages", href: "#packages", id: "packages" },
  { name: "Contact", href: "#contact", id: "contact" },
]

type NavigationProps = {
  onOpenCommand?: () => void
}

export function Navigation({ onOpenCommand }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((i) => i.id).filter(Boolean) as string[]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/KBLogo.png"
            alt="KB Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="font-mono text-base font-semibold tracking-tight">
            {portfolioData.personalInfo.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-muted/70 ring-1 ring-border"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            )
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {onOpenCommand && (
            <button
              onClick={onOpenCommand}
              className="group flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5" />
              <span>Quick nav</span>
              <kbd className="ml-1 hidden rounded border border-border bg-background/70 px-1.5 py-0.5 text-[10px] lg:inline-block">
                ⌘K
              </kbd>
            </button>
          )}
          <a
            href={portfolioData.imhotepTech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 font-mono text-xs font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Imhotep&nbsp;Tech
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="p-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 600 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={portfolioData.imhotepTech.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-3 py-2.5 font-mono text-sm font-medium text-accent-foreground"
              >
                Visit Imhotep Tech
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
