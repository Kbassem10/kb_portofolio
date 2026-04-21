"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { ImhotepSection } from "@/components/imhotep-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { PackagesSection } from "@/components/packages-section"
import { ContactSection } from "@/components/contact-section"
import { AnimatedBackground } from "@/components/animated-background"
import { CommandPalette } from "@/components/command-palette"

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false)

  return (
    <main className="relative">
      <AnimatedBackground />
      <Navigation onOpenCommand={() => setCmdOpen(true)} />

      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <ImhotepSection />
      <ProjectsSection />
      <SkillsSection />
      <PackagesSection />
      <ContactSection />

      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </main>
  )
}
