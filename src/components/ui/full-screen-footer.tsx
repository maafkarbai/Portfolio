"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ArrowRight, 
  ArrowUp,
  Linkedin,
  Twitter,
  Github
} from "lucide-react"

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

const logoVariants = {
  hidden: {
    scale: 0,
    rotate: -180
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      type: "spring",
      stiffness: 100
    }
  }
}

export function FullScreenFooter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.footer
      ref={ref}
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-24">
          {/* Left Side - Company Info & CTA */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div 
              className="flex items-center justify-center lg:justify-start mb-12"
              variants={logoVariants}
            >
              <div className="relative cursor-pointer">
                <Image
                  src="/Logo.svg"
                  alt="Techlogies Logo - Digital Solutions Company"
                  width={100}
                  height={100}
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="ml-6">
                <h3 className="text-4xl font-bold text-white tracking-tight">
                  Techlogies
                </h3>
                <p className="text-gray-400 text-lg font-medium mt-2">
                  Digital Solutions & Innovation
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Ready to{" "}
                <span className="text-[#4689ec]">Transform</span>
                <br />
                Your Business?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Let's build something extraordinary together. Get in touch and discover 
                how we can elevate your digital presence to new heights.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="bg-[#4689ec] hover:bg-[#3a7bd5] text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl px-12 py-6 text-xl font-bold cursor-pointer group border-0"
                  aria-label="Start your project with Techlogies"
                  role="button"
                  tabIndex={0}
                >
                  <span className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="#contact" 
                  className="cursor-pointer"
                  aria-label="Navigate to contact section"
                >
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-600 text-white hover:text-[#4689ec] hover:border-[#4689ec] px-12 py-6 text-xl font-bold transition-all duration-300 rounded-2xl hover:bg-gray-800 cursor-pointer"
                    role="button"
                    tabIndex={0}
                  >
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Links & Info */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Services Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Services
                <div className="absolute bottom-0 left-0 w-10 h-1 bg-[#4689ec] rounded-full"></div>
              </h4>
              <ul className="space-y-4" role="list">
                {['Web Development', 'CRM Systems', 'Digital Strategy', 'UI/UX Design'].map((service, index) => (
                  <motion.li 
                    key={service}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-300 hover:text-[#4689ec] transition-colors duration-300 font-medium text-lg cursor-pointer flex items-center group"
                      aria-label={`Learn more about ${service}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                      {service}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company & Contact Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Contact
                <div className="absolute bottom-0 left-0 w-10 h-1 bg-[#4689ec] rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <motion.div 
                  className="text-gray-300 font-medium text-lg cursor-pointer hover:text-[#4689ec] transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 mr-3 group-hover:text-[#4689ec]" aria-hidden="true" />
                  <a href="mailto:hello@techlogies.com" aria-label="Send email to hello@techlogies.com">
                    hello@techlogies.com
                  </a>
                </motion.div>
                <motion.div 
                  className="text-gray-300 font-medium text-lg cursor-pointer hover:text-[#4689ec] transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:text-[#4689ec]" aria-hidden="true" />
                  <a href="tel:+15551234567" aria-label="Call +1 (555) 123-4567">
                    +1 (555) 123-4567
                  </a>
                </motion.div>
                <motion.div 
                  className="text-gray-300 font-medium text-lg flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 mr-3 group-hover:text-[#4689ec] transition-colors duration-300" aria-hidden="true" />
                  <span>San Francisco, CA</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 mt-12" role="list" aria-label="Social media links">
                {[
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/techlogies' },
                  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/techlogies' },
                  { name: 'GitHub', icon: Github, href: 'https://github.com/techlogies' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#4689ec] transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit our ${social.name} page`}
                    role="link"
                  >
                    <social.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 pt-12 pb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="text-gray-400 text-center lg:text-left">
              <p className="text-lg font-medium">
                © 2024 Techlogies. All rights reserved.
              </p>
              <p className="text-base mt-2">
                Crafted with ❤️ and cutting-edge technology
              </p>
            </div>

            <div className="flex space-x-8 text-gray-400">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#4689ec] transition-colors duration-300 font-medium text-lg cursor-pointer"
                  whileHover={{ y: -2 }}
                  aria-label={`Read our ${link}`}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#4689ec] rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-[#4689ec]/25 transition-all duration-300 cursor-pointer z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          aria-label="Scroll to top of page"
          role="button"
          tabIndex={0}
        >
          <ArrowUp className="w-8 h-8" aria-hidden="true" />
        </motion.button>
      </div>
    </motion.footer>
  )
}