"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "acm@college.edu",
      animation: "animate-contact-card-1",
    },
    {
      icon: MapPin,
      title: "Address",
      content: [
        "Computer Science Building, Room 201",
        "Tech University Campus",
        "123 University Ave, Tech City, TC 12345",
      ],
      animation: "animate-contact-card-2",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      animation: "animate-contact-card-3",
    },
  ]

  const socialLinks = [
    { icon: Github, animation: "animate-social-1" },
    { icon: Linkedin, animation: "animate-social-2" },
    { icon: Twitter, animation: "animate-social-3" },
  ]

  return (
    <section id="contact" className="py-20 bg-blue-900/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-down">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in delay-300">
            {"Ready to join our community? Have questions? We'd love to hear from you!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="animate-slide-in-left">
            <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-blue-900/20 border-blue-400/20 text-white placeholder:text-blue-300 animate-input-glow"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-blue-900/20 border-blue-400/20 text-white placeholder:text-blue-300 animate-input-glow delay-100"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-blue-900/20 border-blue-400/20 text-white placeholder:text-blue-300 animate-input-glow delay-200"
                  />
                </div>
                <Button className="w-full bg-blue-400 text-primary hover:bg-blue-300 border-0 font-semibold animate-send-button">
                  <Mail className="w-4 h-4 mr-2 animate-mail-fly" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 lg:space-y-8 animate-slide-in-right">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 sm:p-6 bg-blue-900/20 rounded-lg backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-300 ${info.animation}`}
                >
                  <div
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-400 rounded-full flex items-center justify-center animate-icon-pulse"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">{info.title}</h3>
                    {Array.isArray(info.content) ? (
                      <div className="text-blue-200 text-xs sm:text-sm">
                        {info.content.map((line, lineIndex) => (
                          <div key={lineIndex}>{line}</div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-blue-200 text-xs sm:text-sm">{info.content}</p>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Mini Map */}
            <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm overflow-hidden animate-map-card">
              <CardHeader>
                <CardTitle className="text-white text-base sm:text-lg">Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-64 bg-blue-800/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 sm:w-12 h-10 sm:h-12 text-blue-400 mx-auto mb-2 animate-map-pin" />
                    <p className="text-white font-semibold text-sm sm:text-base">Tech University</p>
                    <p className="text-blue-200 text-xs sm:text-sm">Computer Science Building</p>
                  </div>
                  {/* Simulated map grid */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-6 h-full animate-map-grid">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-blue-400/20"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-8 animate-social-section">
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={index}
                      size="lg"
                      variant="ghost"
                      className={`text-blue-300 hover:text-white hover:bg-blue-400/10 ${social.animation}`}
                    >
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6" />
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
