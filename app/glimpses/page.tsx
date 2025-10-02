"use client"

import AnimatedBackground from "@/components/animated-background"
import Navigation from "@/components/navigation"
import GlimpsesSection from "@/components/glimpses-section"
import Footer from "@/components/footer"

export default function GlimpsesPage() {
  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <GlimpsesSection />
      </div>
      <Footer />
    </div>
  )
}
