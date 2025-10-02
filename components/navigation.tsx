"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "past-events", label: "Past Events", href: "/past-events" },
    { id: "upcoming-events", label: "Upcoming Events", href: "/upcoming-events" },
    // { id: "join-pasc", label: "Join PASC", href: "/join-pasc" },
    { id: "glimpses", label: "Glimpses", href: "/glimpses" },
    { id: "who-are-we", label: "Who Are We", href: "/who-are-we" },
    { id: "our-team", label: "Our Team", href: "/our-team" },
  ]

  const getActiveSection = () => {
    const currentItem = navItems.find((item) => item.href === pathname)
    return currentItem ? currentItem.id : "home"
  }

  const activeSection = getActiveSection()

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-md border-b border-blue-400/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* LOGO: Size set to h-20 w-20 */}
            <img
              src="/images/pes_finalboss-removebg-preview.png"
              alt={"P.E.S's MCOE ACM Logo"}
              className="h-20 w-20 object-contain" // Height and Width are now 20 units
            />
            <span className="text-2xl font-bold text-white animate-text-shimmer">{"P.E.S's MCOE ACM Student Chapter"}</span>
            <img
              src="/images/acmlogo.png"
              alt={"P.E.S's MCOE ACM Logo"}
              className="h-20 w-20 object-contain" // Height and Width are now 20 units
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative transform hover:scale-110 ${
                  activeSection === item.id ? "text-blue-400" : "text-white/80"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 animate-expand"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 animate-spin-in" />
            ) : (
              <Menu className="w-6 h-6 animate-bounce-subtle" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-4"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 bg-primary/95 backdrop-blur-md rounded-lg mt-4 border border-blue-400/20">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleNavClick}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-blue-400/10 hover:text-blue-400 transform hover:translate-x-2 ${
                  activeSection === item.id ? "text-blue-400 bg-blue-400/10" : "text-white/80"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}