import type React from "react"

export interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
  type: string
  image: string
  status: "past" | "upcoming"
  registrationLink?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  department?: string
  linkedin?: string
  email?: string
  year?: string
}

export interface Photo {
  id: string
  url: string
  title: string
  category: "event" | "workshop" | "team-activity" | "award" | "campus-life"
  date: string
  description?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  message: string
  image: string
  year: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  icon: React.ComponentType<{ className?: string }>
}

export interface JourneyMilestone {
  id: string
  year: string
  title: string
  description: string
  image?: string
}
