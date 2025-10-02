"use client"

import AnimatedBackground from "@/components/animated-background"
import Navigation from "@/components/navigation"
import WhoAreWeSection from "@/components/who-are-we-section"
import Footer from "@/components/footer"

export default function WhoAreWePage() {
  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <WhoAreWeSection />
      </div>
      <Footer />
    </div>
  )
}
