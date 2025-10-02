"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import { upcomingEvents } from "@/constants/data"

export default function UpcomingEventsSection() {
  return (
    <section id="upcoming-events" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Upcoming Events
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in delay-300">
            {"Don't miss out on our exciting upcoming events and workshops. Register now!"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {upcomingEvents.map((event, index) => (
            <Card
              key={event.id}
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
                  <Badge className="bg-blue-600 text-white border-0 font-semibold animate-badge-pulse">
                    {event.type}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white border-0 font-semibold animate-bounce-glow">Upcoming</Badge>
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
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white border-0 font-semibold animate-button-pulse"
                  onClick={() => window.open(event.registrationLink, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
