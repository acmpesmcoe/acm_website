"use client"

import AnimatedBackground from "@/components/animated-background"
import Navigation from "@/components/navigation"
import JoinPascSection from "@/components/join-pasc-section"
import Footer from "@/components/footer"

export default function JoinPascPage() {
  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <JoinPascSection />
      </div>
      <Footer />
    </div>
  )
}
