"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Users, Star, Trophy, Target} from "lucide-react"
import Image from "next/image"
import { testimonials } from "@/constants/data"

export default function JoinPascSection() {
  const benefits = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with like-minded students and industry professionals",
    },
    {
      icon: Star,
      title: "Skill Development",
      description: "Enhance your technical and soft skills through workshops and events",
    },
    {
      icon: Trophy,
      title: "Leadership Experience",
      description: "Take on leadership roles and organize impactful events",
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Access to internships, job opportunities, and career guidance",
    },
  ]

  const membershipOptions = [
    {
      title: "Student Member",
      price: "Free",
      duration: "Academic Year",
      features: [
        "Access to all events and workshops",
        "Networking opportunities",
        "Certificate of participation",
        "Access to study materials",
      ],
    },
    {
      title: "Premium Member",
      price: "$25",
      duration: "Academic Year",
      features: [
        "All Student Member benefits",
        "Priority registration for events",
        "Exclusive workshops and seminars",
        "Mentorship program access",
        "Industry project opportunities",
      ],
    },
    {
      title: "Lifetime Member",
      price: "$100",
      duration: "Lifetime",
      features: [
        "All Premium Member benefits",
        "Alumni network access",
        "Lifetime event access",
        "Special recognition",
        "Voting rights in elections",
      ],
    },
  ]

  return (
    <section id="join-pasc" className="py-20 bg-blue-900/10 relative z-10">
      <div className="container mx-auto px-4">
        {/* Why Join Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Join PASC
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in delay-300">
            Become part of a thriving community of tech enthusiasts and future leaders.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">Why Join Us?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card
                  key={index}
                  className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-pulse">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-white text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200 text-center text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Membership Options */}
        {/* <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            Membership Options
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipOptions.map((option, index) => (
              <Card
                key={index}
                className={`bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 transform hover:scale-105 animate-slide-in-up ${
                  index === 1 ? "border-blue-400 scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl mb-2">{option.title}</CardTitle>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{option.price}</div>
                  <p className="text-blue-300 text-sm">{option.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-blue-200 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-400 hover:bg-blue-300 text-primary border-0 font-semibold">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Membership Application */}
        {/* <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            Membership Application
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm animate-slide-in-up">
              <CardHeader>
                <CardTitle className="text-white text-xl text-center">Apply for Membership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-blue-900/20 border-blue-400/20 text-white placeholder:text-blue-300"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-blue-900/20 border-blue-400/20 text-white placeholder:text-blue-300"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-blue-900/20 border-blue-400/20 text-white placeholder:text-blue-300"
                />
                <Input
                  placeholder="Student ID"
                  className="bg-blue-900/20 border-blue-400/20 text-white placeholder:text-blue-300"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger className="bg-blue-900/20 border-blue-400/20 text-white">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary border-blue-400/20">
                      <SelectItem value="cs" className="text-white">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="it" className="text-white">
                        Information Technology
                      </SelectItem>
                      <SelectItem value="ce" className="text-white">
                        Computer Engineering
                      </SelectItem>
                      <SelectItem value="other" className="text-white">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-blue-900/20 border-blue-400/20 text-white">
                      <SelectValue placeholder="Year of Study" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary border-blue-400/20">
                      <SelectItem value="1" className="text-white">
                        1st Year
                      </SelectItem>
                      <SelectItem value="2" className="text-white">
                        2nd Year
                      </SelectItem>
                      <SelectItem value="3" className="text-white">
                        3rd Year
                      </SelectItem>
                      <SelectItem value="4" className="text-white">
                        4th Year
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea
                  placeholder="Why do you want to join PASC? (Optional)"
                  rows={4}
                  className="bg-blue-900/20 border-blue-400/20 text-white placeholder:text-blue-300"
                />
                <Button className="w-full bg-blue-400 hover:bg-blue-300 text-primary border-0 font-semibold animate-send-button">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div> */}

        {/* What Our Members Say */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            What Our Members Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
                    />
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-blue-300 text-sm">{testimonial.role}</p>
                      <p className="text-blue-400 text-xs">Class of {testimonial.year}</p>
                    </div>
                  </div>
                  <p className="text-blue-200 text-sm italic">"{testimonial.message}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
