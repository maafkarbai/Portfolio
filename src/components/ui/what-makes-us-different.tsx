"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
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
    y: 60,
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

const cardVariants = {
  hidden: {
    y: 80,
    opacity: 0,
    scale: 0.8
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2 + index * 0.2,
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  })
}

const features = [
  {
    icon: "🚀",
    title: "Lightning Fast Development",
    description: "We use cutting-edge technologies and agile methodologies to deliver projects 40% faster than industry standards, without compromising quality.",
    highlight: "40% Faster Delivery",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🎯",
    title: "Results-Driven Approach",
    description: "Every solution is crafted with your business goals in mind. We measure success by your ROI, not just deliverables.",
    highlight: "ROI-Focused Solutions",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "🛡️",
    title: "Enterprise-Grade Security",
    description: "Built-in security from day one. Our solutions follow industry best practices and comply with GDPR, HIPAA, and SOC 2 standards.",
    highlight: "Bank-Level Security",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "🎨",
    title: "Award-Winning Design",
    description: "Our design team has won 15+ international awards. We create experiences that users love and remember.",
    highlight: "15+ Design Awards",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "🔄",
    title: "24/7 Support & Maintenance",
    description: "Your success doesn't stop at launch. We provide round-the-clock support and proactive maintenance to ensure optimal performance.",
    highlight: "Always Available",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    description: "Built to grow with your business. Our solutions can handle 10x traffic growth without breaking a sweat.",
    highlight: "10x Scalability",
    color: "from-teal-500 to-green-500"
  }
]

export function WhatMakesUsDifferent() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const backgroundRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!backgroundRef.current || !isInView) return

    // Animate background gradient
    gsap.to(backgroundRef.current, {
      backgroundPosition: "100% 100%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true
    })
  }, [isInView])

  useEffect(() => {
    if (!statsRef.current || !isInView) return

    // Animate statistics counters
    const statsElements = statsRef.current.querySelectorAll('[data-stat]')
    statsElements.forEach((element) => {
      const targetValue = parseInt(element.getAttribute('data-stat') || '0')
      gsap.fromTo(element, 
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          delay: 1,
          snap: { innerText: 1 },
          ease: "power2.out"
        }
      )
    })
  }, [isInView])

  return (
    <motion.section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(70, 137, 236, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: "100% 100%"
        }}
      />

      {/* Grid Pattern */}
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.span 
            className="inline-block px-6 py-2 mb-6 text-sm font-semibold tracking-wider text-[#4689ec] bg-[#4689ec]/10 rounded-full border border-[#4689ec]/20"
            whileHover={{ scale: 1.05 }}
          >
            ✨ What Sets Us Apart
          </motion.span>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6"
            variants={itemVariants}
          >
            What Makes Us{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#4689ec] via-purple-500 to-[#4689ec]"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Different
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We don't just build software – we craft digital experiences that transform businesses. 
            Here's why industry leaders choose Techlogies over the competition.
          </motion.p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          ref={statsRef}
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            { label: "Projects Delivered", value: 127, suffix: "+" },
            { label: "Client Satisfaction", value: 99, suffix: "%" },
            { label: "Team Members", value: 25, suffix: "+" },
            { label: "Years Experience", value: 8, suffix: "+" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <motion.div 
                    className="text-4xl sm:text-5xl font-black text-[#4689ec] mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <span data-stat={stat.value}>0</span>{stat.suffix}
                  </motion.div>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              custom={index}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card Background with Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
              
              {/* Card Content */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-500 border border-gray-100 h-full">
                {/* Icon */}
                <motion.div 
                  className="text-5xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4689ec] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Highlight Badge */}
                <motion.div 
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${feature.color} text-white text-sm font-bold rounded-full shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.highlight}
                </motion.div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-8 right-8 w-8 h-8 bg-[#4689ec]/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg className="w-4 h-4 text-[#4689ec]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button 
              className="relative bg-gradient-to-r from-[#4689ec] via-purple-500 to-[#4689ec] text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group overflow-hidden border-2 border-white/20"
              style={{ backgroundSize: "200% 100%" }}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                initial={false}
              />
              <span className="relative flex items-center">
                Experience the Difference
                <motion.svg 
                  className="ml-3 w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
          <p className="text-gray-600 mt-4 text-lg">
            Ready to see what sets us apart? Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}