"use client"

import { Command } from "cmdk"
import { AnimatePresence, motion } from "framer-motion"
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Home,
  User,
  FolderGit2,
  Wrench,
  Package,
  Sparkles,
  Copy,
  type LucideIcon,
} from "lucide-react"
import { useEffect, useState } from "react"
import { portfolioData } from "@/lib/portfolio-data"

type CommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Item = {
  id: string
  label: string
  hint?: string
  icon: LucideIcon
  keywords?: string
  run: () => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
      if (e.key === "Escape") onOpenChange(false)
    }
    window.addEventListener("keydown", down)
    return () => window.removeEventListener("keydown", down)
  }, [open, onOpenChange])

  const close = () => onOpenChange(false)

  const go = (hash: string) => () => {
    close()
    if (typeof window !== "undefined") {
      window.location.hash = hash
    }
  }

  const openLink = (url: string) => () => {
    close()
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const copyEmail = () => {
    close()
    if (typeof navigator !== "undefined") {
      navigator.clipboard?.writeText(portfolioData.personalInfo.email)
    }
  }

  const navItems: Item[] = [
    { id: "top", label: "Home", icon: Home, run: go("top") },
    { id: "about", label: "About", icon: User, run: go("about") },
    {
      id: "imhotep",
      label: "Imhotep Tech (section)",
      icon: Sparkles,
      run: go("imhotep"),
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderGit2,
      run: go("projects"),
    },
    { id: "skills", label: "Skills", icon: Wrench, run: go("skills") },
    { id: "packages", label: "Packages", icon: Package, run: go("packages") },
    { id: "contact", label: "Contact", icon: Mail, run: go("contact") },
  ]

  const linkItems: Item[] = [
    {
      id: "imhoteptech-site",
      label: "Open Imhotep Tech ↗",
      hint: "imhoteptech.vercel.app",
      icon: ArrowUpRight,
      run: openLink(portfolioData.imhotepTech.url),
    },
    {
      id: "email",
      label: "Send email",
      hint: portfolioData.personalInfo.email,
      icon: Mail,
      run: () => {
        close()
        window.location.href = `mailto:${portfolioData.personalInfo.email}`
      },
    },
    {
      id: "copy-email",
      label: "Copy email to clipboard",
      hint: portfolioData.personalInfo.email,
      icon: Copy,
      run: copyEmail,
    },
    {
      id: "github",
      label: "GitHub",
      icon: Github,
      run: openLink("https://github.com/kbassem10"),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: Linkedin,
      run: openLink("https://www.linkedin.com/in/karimbassem"),
    },
    {
      id: "twitter",
      label: "Twitter / X",
      icon: Twitter,
      run: openLink("https://x.com/kbassem10"),
    },
  ]

  const projectItems: Item[] = portfolioData.projects
    .filter((p) => p.liveUrl)
    .map((p) => ({
      id: `proj-${p.title}`,
      label: p.title,
      hint: p.category,
      keywords: p.technologies.join(" "),
      icon: FolderGit2,
      run: openLink(p.liveUrl as string),
    }))

  if (!mounted) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[18vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-background/70 backdrop-blur-md"
          />
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-popover/95 shadow-2xl backdrop-blur-xl"
          >
            <Command
              label="Quick navigation"
              className="flex flex-col"
              loop
            >
              <div className="border-b border-border px-4 py-3">
                <Command.Input
                  placeholder="Jump to a section, a project, a link…"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  autoFocus
                />
              </div>
              <Command.List className="max-h-[50vh] overflow-y-auto px-2 py-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
                  No match. Try &quot;Imhotep&quot;, &quot;projects&quot;, or
                  &quot;email&quot;.
                </Command.Empty>

                <Group heading="Navigate" items={navItems} />
                <Group heading="Links" items={linkItems} />
                <Group heading="Projects" items={projectItems} />
              </Command.List>

              <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-2 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-3 font-mono">
                  <span>
                    <Kbd>↑</Kbd>
                    <Kbd>↓</Kbd> navigate
                  </span>
                  <span>
                    <Kbd>↵</Kbd> select
                  </span>
                  <span>
                    <Kbd>esc</Kbd> close
                  </span>
                </div>
                <span className="font-mono">kbassem.vercel.app</span>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Group({ heading, items }: { heading: string; items: Item[] }) {
  if (!items.length) return null
  return (
    <Command.Group
      heading={heading}
      className="mb-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground"
    >
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Command.Item
            key={item.id}
            value={`${item.label} ${item.hint ?? ""} ${item.keywords ?? ""}`}
            onSelect={item.run}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground/90 outline-none transition-colors aria-selected:bg-muted aria-selected:text-foreground"
          >
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span className="flex-1 truncate">{item.label}</span>
            {item.hint && (
              <span className="font-mono text-xs text-muted-foreground">
                {item.hint}
              </span>
            )}
          </Command.Item>
        )
      })}
    </Command.Group>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="mx-0.5 rounded border border-border bg-background/70 px-1 py-0.5 text-[10px]">
      {children}
    </kbd>
  )
}
