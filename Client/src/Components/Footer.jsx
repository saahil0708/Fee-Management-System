"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  // Show footer when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Spacer to ensure content doesn't get hidden behind footer */}
      <div className="h-96"></div>

      {/* Footer */}
      <footer
        className={`fixed bottom-0 left-0 w-screen h-auto bg-slate-900 text-white transform transition-transform duration-700 ease-in-out z-50 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ width: "100vw" }}
      >
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>

        <div className="w-full px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* University Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold">U</span>
                </div>
                <h3 className="text-xl font-bold">University Portal</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering students with comprehensive academic management tools and seamless payment solutions for a
                better educational experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "Student Dashboard",
                  "Payment History",
                  "Academic Records",
                  "Course Registration",
                  "Library Services",
                  "Support Center",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">Services</h4>
              <ul className="space-y-2">
                {[
                  "Online Payments",
                  "Fee Management",
                  "Academic Calendar",
                  "Grade Reports",
                  "Hostel Booking",
                  "Career Services",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    123 University Avenue
                    <br />
                    Education City, State 12345
                    <br />
                    India
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+91 98765 43210</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">support@university.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© 2024 University Portal. Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>for students</span>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-5"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-5"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-5"></div>
        </div>
      </footer>
    </>
  )
}
