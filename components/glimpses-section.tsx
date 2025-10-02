"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Filter } from "lucide-react"
import Image from "next/image"
import { photos } from "@/constants/data"

export default function GlimpsesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  

  const categories = [
    { id: "all", label: "All", count: photos.length },
    { id: "event", label: "Events", count: photos.filter((p) => p.category === "event").length },
    { id: "workshop", label: "Workshops", count: photos.filter((p) => p.category === "workshop").length },
    {
      id: "team-activity",
      label: "Team Activities",
      count: photos.filter((p) => p.category === "team-activity").length,
    },
    { id: "award", label: "Awards", count: photos.filter((p) => p.category === "award").length },
  ]

  const filteredPhotos =
    selectedCategory === "all" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <section id="glimpses" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">Glimpses</h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in delay-300">
            Explore our memorable moments captured through events, workshops, and activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-500">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`${
                selectedCategory === category.id
                  ? "bg-blue-400 text-primary hover:bg-blue-300"
                  : "border-blue-400 bg-blue-400 text-black hover:bg-blue-300"
              } transition-all duration-300 transform hover:scale-105`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredPhotos.map((photo, index) => (
            <Card
              key={photo.id}
              className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 group overflow-hidden animate-card-appear"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <Image
                  src={photo.url || "/placeholder.svg"}
                  alt={photo.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-blue-600 text-white border-0 text-xs capitalize">
                    {photo.category.replace("-", " ")}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{photo.title}</h3>
                    <p className="text-blue-200 text-xs">{photo.description}</p>
                    <p className="text-blue-300 text-xs mt-1" suppressHydrationWarning>{new Date(photo.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
