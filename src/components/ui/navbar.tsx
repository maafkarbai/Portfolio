"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface NavbarProps {
  variant?: "landing" | "dashboard"
  user?: {
    name?: string | null
    email?: string | null
  } | null
}

export function Navbar({ variant = "landing", user }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (variant === "dashboard") {
    return (
      <header className="relative bg-gradient-to-r from-[#1a2332] via-[#2a3441] to-[#1a2332] shadow-2xl border-b border-gray-700/30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/10 via-transparent to-[#4689ec]/10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#4689ec] rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Image
                    src="/logo-blue-white-bg.png"
                    alt="Techlogies"
                    width={48}
                    height={48}
                    className="relative rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">Techlogies</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Dashboard</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/dashboard"
                className="group relative px-6 py-3 text-white hover:text-[#4689ec] font-medium transition-all duration-300 rounded-xl hover:bg-white/5"
              >
                <span className="relative z-10">Dashboard</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4689ec] group-hover:w-8 transition-all duration-300"></div>
              </Link>
              <Link
                href="/dashboard/contacts"
                className="group relative px-6 py-3 text-gray-300 hover:text-[#4689ec] font-medium transition-all duration-300 rounded-xl hover:bg-white/5"
              >
                <span className="relative z-10">Contacts</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4689ec] group-hover:w-8 transition-all duration-300"></div>
              </Link>
              <Link
                href="/dashboard/deals"
                className="group relative px-6 py-3 text-gray-300 hover:text-[#4689ec] font-medium transition-all duration-300 rounded-xl hover:bg-white/5"
              >
                <span className="relative z-10">Deals</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4689ec] group-hover:w-8 transition-all duration-300"></div>
              </Link>
              <Link
                href="/dashboard/projects"
                className="group relative px-6 py-3 text-gray-300 hover:text-[#4689ec] font-medium transition-all duration-300 rounded-xl hover:bg-white/5"
              >
                <span className="relative z-10">Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4689ec] group-hover:w-8 transition-all duration-300"></div>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">
                  {user?.name || user?.email}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-red-500/10 hover:border-red-400 hover:text-red-400 transition-all duration-300 rounded-xl px-4 py-2 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4689ec]/50 to-transparent"></div>
      </header>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white/95 to-indigo-50/30"></div>
      <div className="relative px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4689ec] rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Image
                src="/logo-blue-white-bg.png"
                alt="Techlogies"
                width={56}
                height={56}
                className="relative rounded-3xl shadow-xl group-hover:scale-110 transition-all duration-500 border-2 border-white"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[#4689ec] transition-colors duration-300">
                Techlogies
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                Technology Solutions
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-2">
            <Link 
              href="#services" 
              className="group relative px-6 py-4 text-gray-700 hover:text-[#4689ec] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4689ec]/5"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/10 via-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] rounded-full group-hover:w-10 transition-all duration-300"></div>
            </Link>
            <Link 
              href="#about" 
              className="group relative px-6 py-4 text-gray-700 hover:text-[#4689ec] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4689ec]/5"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/10 via-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] rounded-full group-hover:w-10 transition-all duration-300"></div>
            </Link>
            <Link 
              href="#portfolio" 
              className="group relative px-6 py-4 text-gray-700 hover:text-[#4689ec] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4689ec]/5"
            >
              <span className="relative z-10">Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/10 via-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] rounded-full group-hover:w-10 transition-all duration-300"></div>
            </Link>
            <Link 
              href="#contact" 
              className="group relative px-6 py-4 text-gray-700 hover:text-[#4689ec] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4689ec]/5"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/10 via-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] rounded-full group-hover:w-10 transition-all duration-300"></div>
            </Link>
            <div className="pl-4 ml-4 border-l border-gray-200">
              <Link href="/auth/signin">
                <Button 
                  className="bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] hover:from-[#3a7bd5] hover:to-[#4689ec] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-8 py-3 font-semibold border-2 border-white relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  </span>
                </Button>
              </Link>
            </div>
          </nav>
          
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#4689ec] hover:bg-[#4689ec]/5 transition-colors duration-300 rounded-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-2xl">
          <nav className="px-6 py-6 space-y-4">
            <Link 
              href="#services" 
              className="block px-4 py-3 text-gray-700 hover:text-[#4689ec] hover:bg-[#4689ec]/5 font-semibold rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="block px-4 py-3 text-gray-700 hover:text-[#4689ec] hover:bg-[#4689ec]/5 font-semibold rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#portfolio" 
              className="block px-4 py-3 text-gray-700 hover:text-[#4689ec] hover:bg-[#4689ec]/5 font-semibold rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="#contact" 
              className="block px-4 py-3 text-gray-700 hover:text-[#4689ec] hover:bg-[#4689ec]/5 font-semibold rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] hover:from-[#3a7bd5] hover:to-[#4689ec] text-white font-semibold rounded-xl">
                  Sign In
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4689ec]/30 to-transparent"></div>
    </header>
  )
}