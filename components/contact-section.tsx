"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialIcons = {
    LinkedIn: Linkedin,
    GitHub: Github,
    Twitter: Twitter,
  }

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20" ref={ref}>
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-mono">Get In Touch</h2>

          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Let&apos;s Build Something Together</h3>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col items-center gap-8">
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-lg font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Send me an email</span>
            </a>

            <div className="flex gap-6">
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIcons[link.name as keyof typeof socialIcons]
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {portfolioData.personalInfo.name}.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
