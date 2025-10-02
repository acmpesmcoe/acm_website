"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Award, Users, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import { executiveCommittee, departmentCoordinators, alumniNetwork, coreTeam } from "@/constants/data"

export default function OurTeamSection() {
  return (
    <section id="our-team" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">Our Team</h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in delay-300">
            Meet the dedicated individuals who drive PES MCOE's ACM Student's Chapter's mission and vision forward.
          </p>
        </div>

        {/* 1. Department Coordinators (Maps to executiveCommittee data) */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            <Crown className="w-8 h-8 inline-block mr-2 text-yellow-400 animate-crown-shine" />
            Department Coordinators
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveCommittee.map((member, index) => (
              <Card
                key={member.id}
                className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 animate-team-card-appear"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 group">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-400 group-hover:scale-110 transition-transform duration-300 animate-profile-glow"
                    />
                    <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-crown-shine" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-blue-300 text-sm mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-300 hover:text-white hover:bg-blue-400/10 p-2"
                      onClick={() => window.open(member.linkedin, "_blank")}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-300 hover:text-white hover:bg-blue-400/10 p-2"
                      onClick={() => window.open(`mailto:${member.email}`, "_blank")}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 2. Executive Committee (Maps to departmentCoordinators data) */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            <Award className="w-8 h-8 inline-block mr-2 text-blue-400 animate-award-spin" />
            Executive Committee
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentCoordinators.map((member, index) => (
              <Card
                key={member.id}
                className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 animate-team-card-appear"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 group">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-400 group-hover:scale-110 transition-transform duration-300 animate-profile-glow"
                    />
                    <Award className="absolute -top-2 -right-2 w-6 h-6 text-blue-400 animate-award-spin" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-blue-300 text-sm mb-1">{member.role}</p>
                  <p className="text-blue-400 text-xs mb-4">{member.department}</p>
                  <div className="flex justify-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-300 hover:text-white hover:bg-blue-400/10 p-2"
                      onClick={() => window.open(member.linkedin, "_blank")}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-300 hover:text-white hover:bg-blue-400/10 p-2"
                      onClick={() => window.open(`mailto:${member.email}`, "_blank")}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 3. Core Team (Maps to coreTeam data) */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            <Award className="w-8 h-8 inline-block mr-2 text-blue-400 animate-award-spin" />
            Core Team
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <Card
                key={member.id}
                className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 animate-team-card-appear"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 group">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-400 group-hover:scale-110 transition-transform duration-300 animate-profile-glow"
                    />
                    <Award className="absolute -top-2 -right-2 w-6 h-6 text-blue-400 animate-award-spin" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-blue-300 text-sm mb-1">{member.role}</p>
                  <p className="text-blue-400 text-xs mb-4">{member.department}</p>
                  <div className="flex justify-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-300 hover:text-white hover:bg-blue-400/10 p-2"
                      onClick={() => window.open(member.linkedin, "_blank")}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-300 hover:text-white hover:bg-blue-400/10 p-2"
                      onClick={() => window.open(`mailto:${member.email}`, "_blank")}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Alumni Network */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            <Users className="w-8 h-8 inline-block mr-2 text-green-400 animate-user-bounce" />
            Alumni Network
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniNetwork.map((member, index) => (
              <Card
                key={member.id}
                className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 animate-team-card-appear"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 group">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-400 group-hover:scale-110 transition-transform duration-300 animate-profile-glow"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-blue-300 text-sm mb-1">{member.role}</p>
                  <p className="text-green-400 text-xs mb-1">{member.department}</p>
                  <p className="text-blue-400 text-xs mb-4">Class of {member.year}</p>
                  <div className="flex justify-center">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-300 hover:text-white hover:bg-blue-400/10 p-2"
                      onClick={() => window.open(member.linkedin, "_blank")}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-600 hover:bg-green-700 text-white border-0 font-semibold px-8 py-3 animate-button-glow">
              <Users className="w-5 h-5 mr-2" />
              Join Alumni Network
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}