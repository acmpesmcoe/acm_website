"use client"

import AnimatedBackground from "@/components/animated-background"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  )
}
