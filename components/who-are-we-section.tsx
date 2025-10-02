"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import Image from "next/image"
import { achievements, journeyMilestones } from "@/constants/data"

export default function WhoAreWeSection() {
  return (
    <section id="who-are-we" className="py-20 bg-blue-900/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Who Are We
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in delay-300">
            Learn about our mission, vision, values, and the journey that defines PASC.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 animate-slide-in-left">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-pulse">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-200 text-center leading-relaxed">
                To advance computing as a science and profession, foster innovation among students, and create a
                collaborative environment where future tech leaders can grow and thrive through practical learning and
                industry exposure.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 animate-slide-in-up delay-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-pulse delay-200">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-200 text-center leading-relaxed">
                To be the leading student organization that bridges the gap between academic learning and industry
                requirements, producing skilled professionals who contribute meaningfully to the global technology
                landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 animate-slide-in-right delay-400">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-pulse delay-400">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-white text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-blue-200 space-y-2 text-center">
                <li>• Excellence in everything we do</li>
                <li>• Inclusive and diverse community</li>
                <li>• Continuous learning and growth</li>
                <li>• Ethical and responsible innovation</li>
                <li>• Collaboration and teamwork</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Major Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            Major Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={achievement.id}
                  className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-pulse">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                    <p className="text-blue-400 font-semibold">{achievement.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200 text-center text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Our Journey Timeline */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 h-full animate-timeline-grow"></div>

            <div className="space-y-12">
              {journeyMilestones.map((milestone, index) => (
                <div
                  key={milestone.id}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-timeline-item`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          
                          <div>
                            <h4 className="text-blue-400 font-bold text-2xl">{milestone.year}</h4>
                            <h5 className="text-white font-semibold text-lg">{milestone.title}</h5>
                          </div>
                        </div>
                        <p className="text-blue-200 text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-blue-400 rounded-full border-4 border-primary animate-timeline-dot"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
