"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Trophy } from "lucide-react"
import Image from "next/image"
import { clubHighlights } from "@/constants/data"

export default function ClubSection() {
  return (
    <section id="club" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            About Our Club
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in delay-300">
            Discover the vibrant community that makes ACM a hub of innovation and learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="space-y-6">
            <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl flex items-center">
                  <Building className="w-6 h-6 mr-2 text-blue-400 animate-icon-bounce" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 leading-relaxed text-sm sm:text-base">
                  To advance computing as a science and profession, foster innovation among students, and create a
                  collaborative environment where future tech leaders can grow and thrive.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 animate-slide-in-left delay-200">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-blue-400 animate-trophy-spin" />
                  Our Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-blue-200 space-y-2 text-sm sm:text-base">
                  <li className="animate-fade-in delay-300">• 50+ successful events organized</li>
                  <li className="animate-fade-in delay-400">• 200+ active members</li>
                  <li className="animate-fade-in delay-500">• 15+ industry partnerships</li>
                  <li className="animate-fade-in delay-600">• Winner of Best Student Chapter 2023</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm overflow-hidden group animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-white text-lg sm:text-xl">Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="ACM Team Group Photo"
                    width={500}
                    height={300}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clubHighlights.map((item, index) => (
            <Card
              key={index}
              className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                    <p className="text-blue-200 text-xs sm:text-sm">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
