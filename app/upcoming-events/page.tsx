"use client"

import AnimatedBackground from "@/components/animated-background"
import Navigation from "@/components/navigation"
import UpcomingEventsSection from "@/components/upcoming-events-section"
import Footer from "@/components/footer"

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-20">
        <UpcomingEventsSection />
      </div>
      <Footer />
    </div>
  )
}
