"use client"

import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<{ 
    left: string; 
    top: string; 
    animationDelay: string; 
    animationDuration: string; 
  }[]>([])
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Generate particles only once on client
  useEffect(() => {
    const arr = Array.from({ length: 20 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${i * 0.5}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }))
    setParticles(arr)
  }, [])

  return (
    <>
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 animate-grid-move"></div>
        <div className="absolute inset-0 bg-grid-pattern-2 opacity-15 animate-grid-move-reverse"></div>
        <div className="absolute inset-0 bg-grid-pattern-3 opacity-10 animate-grid-diagonal"></div>
        <div className="absolute inset-0 bg-wave-pattern opacity-5 animate-wave"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300 rounded-full animate-float-2"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-blue-500 rounded-full animate-float-3"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-200 rounded-full animate-float-4"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float-5"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-300 rounded-full animate-float-6"></div>

        {/* Morphing Shapes */}
        <div className="absolute top-32 right-32 w-16 h-16 bg-blue-400/10 animate-morph-1"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-blue-300/10 animate-morph-2"></div>

        {/* Particle Trail */}
        <div className="absolute inset-0 animate-particle-trail">
          {particles.map((style, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle"
              style={style}
            ></div>
          ))}
        </div>
      </div>

      {/* Parallax Background Elements */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
    </>
  )
}
