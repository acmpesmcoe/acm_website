"use client"

import AnimatedBackground from "@/components/animated-background"
import Navigation from "@/components/navigation"
import PastEventsSection from "@/components/past-events-section"
import Footer from "@/components/footer"

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <PastEventsSection />
      </div>
      <Footer />
    </div>
  )
}
