"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const titleVariants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  }
}

const highlightVariants = {
  hidden: {
    y: 100,
    opacity: 0,
    scale: 0.8
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      delay: 0.5,
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  }
}

export function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!backgroundRef.current || !floatingElementsRef.current) return

    // GSAP background animation
    gsap.to(backgroundRef.current, {
      backgroundPosition: "100% 100%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true
    })

    // Floating elements animation
    const elements = floatingElementsRef.current.children
    Array.from(elements).forEach((element, index) => {
      gsap.to(element, {
        y: -20,
        x: Math.sin(index) * 10,
        rotation: Math.cos(index) * 5,
        duration: 3 + index * 0.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      })
    })
  }, [])

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(70, 137, 236, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: "100% 100%"
        }}
      />

      {/* Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#4689ec]/20 rounded-full blur-sm"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-indigo-400/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-purple-400/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-400/20 rounded-full blur-sm"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-[#4689ec]/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-60 right-1/3 w-7 h-7 bg-indigo-400/30 rounded-full blur-sm"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(70, 137, 236, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(70, 137, 236, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div variants={itemVariants}>
          <motion.span 
            className="inline-block px-6 py-2 mb-8 text-sm font-semibold tracking-wider text-[#4689ec] bg-[#4689ec]/10 rounded-full border border-[#4689ec]/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ Award-Winning Digital Agency
          </motion.span>
        </motion.div>

        {/* Main Heading with 90px font size and proper typography hierarchy */}
        <motion.div variants={titleVariants} className="mb-8">
          <h1 className="font-black tracking-tight leading-[0.85] text-gray-900">
            {/* First line - 90px on large screens, responsive scaling */}
            <div className="text-[45px] sm:text-[60px] md:text-[75px] lg:text-[90px] xl:text-[90px]">
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Digital Solutions
              </motion.span>
            </div>
            
            {/* Second line - Proportionally smaller (Golden ratio: ~0.618) */}
            <div className="text-[28px] sm:text-[37px] md:text-[46px] lg:text-[56px] xl:text-[56px] mt-2">
              <span className="text-gray-700">for </span>
              <motion.span 
                className="relative text-[#4689ec] inline-block"
                variants={highlightVariants}
              >
                Modern Businesses
                {/* Animated underline */}
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#4689ec]/30" 
                  viewBox="0 0 300 12" 
                  fill="currentColor"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                >
                  <motion.path 
                    d="M0,6 Q75,0 150,6 T300,6 L300,12 L0,12 Z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                </motion.svg>
              </motion.span>
            </div>
          </h1>
        </motion.div>

        {/* Subheading with proper typography scale */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-normal">
            Transform your business with cutting-edge technology solutions. We build scalable web applications, 
            manage your digital presence, and help you grow with{" "}
            <motion.span 
              className="text-[#4689ec] font-semibold"
              whileHover={{ color: "#3a7bd5" }}
            >
              custom CRM systems
            </motion.span>
            {" "}that deliver real results.
          </p>
        </motion.div>

        {/* CTA Buttons with advanced animations */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-[#4689ec] via-[#3a7bd5] to-[#4689ec] hover:from-[#3a7bd5] hover:via-[#4689ec] hover:to-[#3a7bd5] text-white px-10 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl border-2 border-white/20 backdrop-blur-sm group overflow-hidden"
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                initial={false}
              />
              <span className="relative flex items-center">
                Get Started Today
                <motion.svg 
                  className="ml-3 w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#services">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-gray-300 hover:border-[#4689ec] text-gray-700 hover:text-[#4689ec] px-10 py-4 text-xl font-semibold transition-all duration-300 rounded-2xl backdrop-blur-sm hover:bg-[#4689ec]/5"
              >
                View Our Work
                <motion.span 
                  className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats or Trust Indicators */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center"
        >
          <motion.div 
            className="group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl sm:text-4xl font-bold text-[#4689ec] mb-1 group-hover:text-[#3a7bd5] transition-colors">
              50+
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">
              Projects Delivered
            </div>
          </motion.div>
          
          <motion.div 
            className="group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl sm:text-4xl font-bold text-[#4689ec] mb-1 group-hover:text-[#3a7bd5] transition-colors">
              100%
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">
              Client Satisfaction
            </div>
          </motion.div>
          
          <motion.div 
            className="group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl sm:text-4xl font-bold text-[#4689ec] mb-1 group-hover:text-[#3a7bd5] transition-colors">
              24/7
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">
              Support Available
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-[#4689ec] rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2 font-medium">Scroll</p>
      </motion.div>
    </motion.section>
  )
}