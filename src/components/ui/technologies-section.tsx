"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, Suspense, lazy } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  Zap, 
  Database, 
  Cloud, 
  Container, 
  Palette, 
  Globe, 
  Code2, 
  Server, 
  Layers, 
  Rocket,
  ExternalLink,
  Sparkles
} from "lucide-react"

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
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

const techVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: -180
  },
  visible: (index: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + index * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  })
}

const technologies = [
  {
    name: "React",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Component-based UI library for building interactive user interfaces",
    color: "from-cyan-600 to-blue-700",
    bgColor: "bg-white",
    category: "Frontend",
    website: "https://reactjs.org",
    yearAdopted: "2019",
    proficiency: 95
  },
  {
    name: "Next.js",
    icon: Layers,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "Full-stack React framework with server-side rendering",
    color: "from-gray-900 to-black",
    bgColor: "bg-white",
    category: "Frontend",
    website: "https://nextjs.org",
    yearAdopted: "2020",
    proficiency: 90
  },
  {
    name: "TypeScript",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Statically typed superset of JavaScript",
    color: "from-blue-700 to-blue-900",
    bgColor: "bg-white",
    category: "Language",
    website: "https://typescriptlang.org",
    yearAdopted: "2019",
    proficiency: 92
  },
  {
    name: "Node.js",
    icon: Server,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime for server-side development",
    color: "from-green-700 to-green-900",
    bgColor: "bg-white",
    category: "Backend",
    website: "https://nodejs.org",
    yearAdopted: "2018",
    proficiency: 88
  },
  {
    name: "PostgreSQL",
    icon: Database,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Advanced open-source relational database",
    color: "from-blue-800 to-indigo-900",
    bgColor: "bg-white",
    category: "Database",
    website: "https://postgresql.org",
    yearAdopted: "2018",
    proficiency: 85
  },
  {
    name: "Prisma",
    icon: Database,
    logo: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
    description: "Modern database toolkit and ORM",
    color: "from-indigo-700 to-purple-800",
    bgColor: "bg-white",
    category: "ORM",
    website: "https://prisma.io",
    yearAdopted: "2021",
    proficiency: 87
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    description: "Utility-first CSS framework for rapid UI development",
    color: "from-cyan-700 to-teal-800",
    bgColor: "bg-white",
    category: "Styling",
    website: "https://tailwindcss.com",
    yearAdopted: "2020",
    proficiency: 93
  },
  {
    name: "AWS",
    icon: Cloud,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    description: "Comprehensive cloud computing platform",
    color: "from-orange-700 to-yellow-700",
    bgColor: "bg-white",
    category: "Cloud",
    website: "https://aws.amazon.com",
    yearAdopted: "2019",
    proficiency: 82
  },
  {
    name: "Docker",
    icon: Container,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Containerization platform for application deployment",
    color: "from-blue-700 to-cyan-800",
    bgColor: "bg-white",
    category: "DevOps",
    website: "https://docker.com",
    yearAdopted: "2020",
    proficiency: 80
  },
  {
    name: "Framer Motion",
    icon: Sparkles,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    description: "Production-ready motion library for React",
    color: "from-purple-700 to-pink-800",
    bgColor: "bg-white",
    category: "Animation",
    website: "https://framer.com/motion",
    yearAdopted: "2021",
    proficiency: 85
  },
  {
    name: "Vercel",
    icon: Rocket,
    logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    description: "Frontend cloud platform for deployment",
    color: "from-black to-gray-900",
    bgColor: "bg-white",
    category: "Deployment",
    website: "https://vercel.com",
    yearAdopted: "2020",
    proficiency: 88
  },
  {
    name: "Figma",
    icon: Palette,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: "Collaborative interface design tool",
    color: "from-red-700 to-orange-700",
    bgColor: "bg-white",
    category: "Design",
    website: "https://figma.com",
    yearAdopted: "2019",
    proficiency: 90
  }
]

const categories = [
  { name: "Frontend", color: "from-blue-600 to-cyan-700" },
  { name: "Backend", color: "from-green-600 to-emerald-700" },
  { name: "Database", color: "from-purple-600 to-indigo-700" },
  { name: "Cloud", color: "from-orange-600 to-yellow-600" },
  { name: "DevOps", color: "from-gray-600 to-slate-700" },
  { name: "Design", color: "from-pink-600 to-red-600" }
]

// Lazy load heavy components
const TechCard = lazy(() => Promise.resolve({ 
  default: ({ tech, index }: { tech: any; index: number }) => <TechCardComponent tech={tech} index={index} />
}))

function TechCardComponent({ tech, index }: { tech: any; index: number }) {
  const router = useRouter()
  
  const handleTechClick = () => {
    // Navigate to tech detail page or external website
    if (tech.website) {
      window.open(tech.website, '_blank')
    }
  }

  return (
    <motion.div
      variants={techVariants}
      custom={index}
      className="group relative cursor-pointer"
      whileHover={{ 
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onClick={handleTechClick}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-110`}></div>
      
      {/* Card */}
      <motion.div 
        className={`relative ${tech.bgColor} rounded-3xl p-6 lg:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full backdrop-blur-sm`}
        whileHover={{ 
          scale: 1.02,
          transition: { type: "spring", stiffness: 400 }
        }}
      >
        {/* Tech Logo with Next.js Image and Lucide Icon Fallback */}
        <div className="relative w-16 h-16 lg:w-20 lg:h-20 mb-4 mx-auto">
          <Image
            src={tech.logo}
            alt={`${tech.name} logo`}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 64px, 80px"
            priority={index < 4} // Priority load for first 4 images
            onError={(e) => {
              // Fallback to Lucide icon if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const IconComponent = tech.icon;
                parent.innerHTML = '';
                parent.className = 'relative w-16 h-16 lg:w-20 lg:h-20 mb-4 mx-auto flex items-center justify-center text-gray-600';
              }
            }}
          />
          {/* Lucide Icon Overlay (hidden by default, shown on image error) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none" id={`icon-fallback-${index}`}>
            <tech.icon className="w-12 h-12 lg:w-16 lg:h-16 text-gray-600" />
          </div>
        </div>

        {/* Proficiency Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <motion.div 
            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${tech.proficiency}%` }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
          />
        </div>

        {/* Tech Name */}
        <motion.h3 
          className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed] transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          {tech.name}
        </motion.h3>

        {/* Year Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Since {tech.yearAdopted}
          </span>
          <span className="text-xs text-gray-600 font-semibold">
            {tech.proficiency}% Proficient
          </span>
        </div>

        {/* Description */}
        <p className="text-sm lg:text-base text-gray-700 mb-4 leading-relaxed font-medium">
          {tech.description}
        </p>

        {/* Category Badge */}
        <motion.div 
          className={`inline-block px-3 py-1 bg-gradient-to-r ${tech.color} text-white text-xs font-bold rounded-full shadow-sm`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {tech.category}
        </motion.div>

        {/* External Link Indicator */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-gray-200"
          whileHover={{ scale: 1.2, rotate: 90 }}
        >
          <ExternalLink className="w-4 h-4 text-gray-800" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function TechnologiesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const backgroundRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const orbitsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!backgroundRef.current || !isInView) return

    // Animate background gradient
    gsap.to(backgroundRef.current, {
      backgroundPosition: "100% 100%",
      duration: 25,
      ease: "none",
      repeat: -1,
      yoyo: true
    })
  }, [isInView])

  useEffect(() => {
    if (!floatingRef.current || !isInView) return

    // Floating elements animation
    const elements = floatingRef.current.children
    Array.from(elements).forEach((element, index) => {
      gsap.set(element, {
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * 400,
        scale: 0.3 + Math.random() * 0.7
      })

      gsap.to(element, {
        y: "-=80",
        x: `+=${Math.sin(index) * 50}`,
        rotation: 360,
        duration: 10 + Math.random() * 5,
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3
      })
    })
  }, [isInView])

  useEffect(() => {
    if (!orbitsRef.current || !isInView) return

    // Orbital animation around center
    const orbits = orbitsRef.current.children
    Array.from(orbits).forEach((orbit, index) => {
      gsap.to(orbit, {
        rotation: 360,
        duration: 20 + index * 5,
        ease: "none",
        repeat: -1
      })
    })
  }, [isInView])

  return (
    <motion.section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden bg-white"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(70, 137, 236, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
          `,
          backgroundSize: "100% 100%"
        }}
      />

      {/* Floating Tech Icons */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 20 }).map((_, i) => {
          const tech = technologies[i % technologies.length];
          const IconComponent = tech?.icon || Code2;
          return (
            <div
              key={i}
              className="absolute"
              style={{ 
                filter: "blur(1px)",
                color: i % 2 ? "#4689ec" : "#a855f7"
              }}
            >
              <IconComponent className="w-16 h-16" />
            </div>
          );
        })}
      </div>

      {/* Orbital Rings */}
      <div ref={orbitsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((ring) => (
          <div
            key={ring}
            className={`absolute border border-gray-200/20 rounded-full`}
            style={{
              width: `${300 + ring * 150}px`,
              height: `${300 + ring * 150}px`,
              animation: `spin ${30 + ring * 10}s linear infinite${ring % 2 ? " reverse" : ""}`
            }}
          >
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#4689ec]/20 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500/20 rounded-full transform -translate-x-1/2 translate-y-1"></div>
            <div className="absolute left-0 top-1/2 w-2 h-2 bg-cyan-500/20 rounded-full transform -translate-x-1 -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-2 h-2 bg-pink-500/20 rounded-full transform translate-x-1 -translate-y-1/2"></div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.span 
            className="inline-block px-6 py-2 mb-6 text-sm font-semibold tracking-wider text-[#4689ec] bg-[#4689ec]/10 rounded-full border border-[#4689ec]/20"
            whileHover={{ scale: 1.05 }}
          >
            🚀 Our Tech Stack
          </motion.span>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6"
            variants={itemVariants}
          >
            Technologies That{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#4689ec] via-purple-500 to-cyan-500"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "300% 300%" }}
            >
              Power
            </motion.span>
            <br />
            Our Solutions
          </motion.h2>
          
          <motion.p 
            className="text-xl leading-8 text-gray-700 max-w-3xl mx-auto font-medium"
            variants={itemVariants}
          >
            We leverage cutting-edge technologies and industry-leading tools to build scalable, 
            performant, and future-proof digital solutions that drive real business results.
          </motion.p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-full font-semibold shadow-lg cursor-pointer`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {category.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Grid with Lazy Loading */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <Suspense 
              key={tech.name}
              fallback={
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 h-full animate-pulse">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-lg mx-auto mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                </div>
              }
            >
              <TechCard tech={tech} index={index} />
            </Suspense>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "12+", label: "Core Technologies", icon: Code2 },
              { number: "99.9%", label: "Uptime Guarantee", icon: Zap },
              { number: "50%", label: "Faster Development", icon: Rocket },
              { number: "24/7", label: "Monitoring", icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="mb-2">
                      <stat.icon className="w-8 h-8 mx-auto text-[#2563eb] group-hover:text-[#7c3aed] transition-colors" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-[#2563eb] mb-2 group-hover:text-[#7c3aed] transition-colors">
                      {stat.number}
                    </div>
                    <p className="text-gray-800 font-semibold text-sm lg:text-base">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Performance & Optimization
            </h3>
            <p className="text-gray-700 font-medium">
              Built with Next.js optimization features for maximum performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "Core Web Vitals",
                score: "100",
                description: "Perfect Lighthouse scores",
                icon: Zap
              },
              {
                metric: "Image Optimization",
                score: "Auto",
                description: "Next.js Image component with WebP",
                icon: Globe
              },
              {
                metric: "Code Splitting",
                score: "Dynamic",
                description: "Lazy loading & bundle optimization",
                icon: Layers
              },
              {
                metric: "SSR/SSG",
                score: "Hybrid",
                description: "Server-side & static generation",
                icon: Server
              }
            ].map((perf, index) => (
              <motion.div
                key={perf.metric}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="mb-3">
                  <perf.icon className="w-10 h-10 mx-auto text-[#2563eb]" />
                </div>
                <div className="text-2xl font-bold text-[#2563eb] mb-2">{perf.score}</div>
                <h4 className="font-bold text-gray-900 mb-2">{perf.metric}</h4>
                <p className="text-sm text-gray-600">{perf.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" passHref>
              <motion.button 
                className="relative bg-gradient-to-r from-[#4689ec] via-purple-500 to-cyan-500 text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group overflow-hidden border-2 border-white/20"
                style={{ backgroundSize: "300% 100%" }}
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  initial={false}
                />
                <span className="relative flex items-center">
                  Explore Our Solutions
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
            </Link>
          </motion.div>
          <p className="text-gray-700 mt-4 text-lg font-medium">
            Ready to leverage these powerful technologies? Let's build your next project together.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.section>
  )
}