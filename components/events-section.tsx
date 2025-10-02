"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Filter } from "lucide-react"
import Image from "next/image"
import { events } from "@/constants/data"

export default function EventsSection() {
  const [selectedYear, setSelectedYear] = useState("2024")

  return (
    <section id="events" className="py-20 bg-blue-900/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Our Events
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto mb-8 animate-fade-in delay-300">
            Explore our comprehensive collection of events organized throughout the years.
          </p>

          <div className="flex justify-center animate-fade-in delay-500">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-40 sm:w-48 bg-blue-900/20 border-blue-400/20 text-white animate-select-glow">
                <Filter className="w-4 h-4 mr-2 animate-filter-spin" />
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent className="bg-primary border-blue-400/20">
                <SelectItem value="2024" className="text-white hover:bg-blue-900/20">
                  2024
                </SelectItem>
                <SelectItem value="2023" className="text-white hover:bg-blue-900/20">
                  2023
                </SelectItem>
                <SelectItem value="2022" className="text-white hover:bg-blue-900/20">
                  2022
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events[selectedYear as keyof typeof events]?.map((event, index) => (
            <Card
              key={index}
              className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden animate-card-appear"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-400 text-primary border-0 font-semibold animate-badge-pulse">
                    {event.type}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-white text-lg sm:text-xl group-hover:text-blue-200 transition-colors">
                    {event.title}
                  </CardTitle>
                  <Calendar className="w-5 h-5 text-blue-400 animate-calendar-flip" />
                </div>
                <CardDescription className="text-blue-300 text-sm">
                  {event.date} • {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 mb-4 text-sm sm:text-base">{event.description}</p>
                <Button className="w-full bg-blue-400 text-primary hover:bg-blue-300 border-0 font-semibold animate-button-pulse">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
