"use client"

import AnimatedBackground from "@/components/animated-background"
import Navigation from "@/components/navigation"
import OurTeamSection from "@/components/our-team-section"
import Footer from "@/components/footer"

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <OurTeamSection />
      </div>
      <Footer />
    </div>
  )
}
