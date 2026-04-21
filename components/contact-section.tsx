"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
}

export function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="gradient-border relative overflow-hidden rounded-3xl p-[1px]"
        >
          <div className="glass relative overflow-hidden rounded-[calc(var(--radius)+1rem)] px-6 py-12 text-center md:px-12 md:py-20">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              ⟣ Let&apos;s talk
            </p>

            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-5xl">
              Got a project?{" "}
              <span className="text-gradient-accent">Let&apos;s build it.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether you need a full-stack product, an API, or help moving an
              idea from &ldquo;what if&rdquo; to &ldquo;it&apos;s live&rdquo; —
              I&apos;m a short email away.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                <Mail className="h-4 w-4" />
                Send me an email
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-3 font-mono text-xs text-foreground transition-colors hover:border-accent/50 hover:bg-muted/60"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-accent" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    {portfolioData.personalInfo.email}
                  </>
                )}
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-5">
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIcons[link.name]
                if (!Icon) return null
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row">
          <p className="font-mono">
            © {new Date().getFullYear()} {portfolioData.personalInfo.name} ·
            Made with care in {portfolioData.personalInfo.location}.
          </p>
          <div className="flex flex-wrap items-center gap-4 font-mono">
            <a
              href={portfolioData.imhotepTech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Imhotep Tech <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="#top"
              className="transition-colors hover:text-foreground"
            >
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
