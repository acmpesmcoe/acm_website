"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Star, Brain, Target, User, Crown, Award, Building } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const teams = [
    {
      name: "Tech Team",
      icon: Code,
      iconAnimation: "animate-code-blink",
      cardAnimation: "animate-team-card-1",
      members: [
        { name: "John Doe", role: "Head", image: "/placeholder.svg?height=150&width=150", isHead: true },
        { name: "Jane Smith", role: "Co-Head", image: "/placeholder.svg?height=150&width=150", isHead: false },
      ],
    },
    {
      name: "Design Team",
      icon: Star,
      iconAnimation: "animate-star-twinkle",
      cardAnimation: "animate-team-card-2",
      members: [
        { name: "Mike Johnson", role: "Head", image: "/placeholder.svg?height=150&width=150", isHead: true },
        { name: "Sarah Wilson", role: "Co-Head", image: "/placeholder.svg?height=150&width=150", isHead: false },
      ],
    },
    {
      name: "Document Team",
      icon: Brain,
      iconAnimation: "animate-brain-pulse",
      cardAnimation: "animate-team-card-3",
      members: [
        { name: "Alex Brown", role: "Head", image: "/placeholder.svg?height=150&width=150", isHead: true },
        { name: "Emily Davis", role: "Co-Head", image: "/placeholder.svg?height=150&width=150", isHead: false },
      ],
    },
    {
      name: "Marketing Team",
      icon: Target,
      iconAnimation: "animate-target-spin",
      cardAnimation: "animate-team-card-4",
      members: [
        { name: "Chris Lee", role: "Head", image: "/placeholder.svg?height=150&width=150", isHead: true },
        { name: "Lisa Wang", role: "Co-Head", image: "/placeholder.svg?height=150&width=150", isHead: false },
      ],
    },
  ]

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Our Teams
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in delay-300">
            Meet the dedicated teams that drive ACM's success and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {teams.map((team, teamIndex) => {
            const IconComponent = team.icon
            return (
              <Card
                key={teamIndex}
                className={`bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 ${team.cardAnimation}`}
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl sm:text-2xl flex items-center">
                    <IconComponent className={`w-6 h-6 mr-2 text-blue-400 ${team.iconAnimation}`} />
                    {team.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {team.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="text-center">
                        <div className="relative mb-4 group">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={`${team.name} ${member.role}`}
                            width={150}
                            height={150}
                            className={`w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto object-cover border-4 border-blue-400 group-hover:scale-110 transition-transform duration-300 animate-profile-glow ${memberIndex === 1 ? "delay-200" : ""}`}
                          />
                          {member.isHead ? (
                            <Crown
                              className={`absolute -top-2 -right-2 w-5 sm:w-6 h-5 sm:h-6 text-yellow-400 animate-crown-shine ${teamIndex > 1 ? "delay-600" : "delay-300"}`}
                            />
                          ) : (
                            <Award
                              className={`absolute -top-2 -right-2 w-5 sm:w-6 h-5 sm:h-6 text-blue-400 animate-award-spin ${teamIndex > 1 ? "delay-400" : "delay-200"}`}
                            />
                          )}
                        </div>
                        <h3 className="text-white font-bold text-sm sm:text-base">{member.name}</h3>
                        <p className="text-blue-300 text-xs sm:text-sm">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Staff In-charge */}
        <div className="mt-16 text-center">
          <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 max-w-md mx-auto animate-staff-card">
            <CardHeader>
              <CardTitle className="text-white text-xl sm:text-2xl flex items-center justify-center">
                <User className="w-6 h-6 mr-2 text-blue-400 animate-user-bounce" />
                Staff In-charge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="relative mb-4 group">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Staff In-charge"
                    width={200}
                    height={200}
                    className="w-28 sm:w-32 h-28 sm:h-32 rounded-full mx-auto object-cover border-4 border-blue-400 group-hover:scale-110 transition-transform duration-300 animate-profile-glow-staff"
                  />
                  <Building className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 text-blue-400 bg-primary rounded-full p-1 animate-building-sway" />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl">Dr. Robert Smith</h3>
                <p className="text-blue-300 text-sm sm:text-base">Professor, Computer Science</p>
                <p className="text-blue-400 text-xs sm:text-sm mt-2">Staff In-charge</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
