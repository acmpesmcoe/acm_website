"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6">
            <Badge className="bg-blue-400 text-primary border-0 px-4 py-2 text-sm animate-bounce-glow font-semibold">
              PES's Modern College of Engineering's
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 animate-text-glow-rainbow">ACM</h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Association for Computing Machinery Student Chapter
          </p>

          <p className="text-base sm:text-lg text-blue-300 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-500">
            Empowering the next generation of tech innovators through cutting-edge events, workshops, and collaborative
            learning experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
            <Link href="/who-are-we">
              <Button
                size="lg"
                className="bg-blue-400 text-primary hover:bg-blue-300 border-0 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-400/25 animate-button-glow"
              >
                <Rocket className="w-5 h-5 mr-2 animate-rocket" />
                Explore Us
              </Button>
            </Link>

            <Link href="/upcoming-events">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400/30 text-white bg-blue-400 hover:bg-blue-400 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 animate-border-glow"
              >
                View Events
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-infinite">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </div>
    </section>
  )
}