"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState, useEffect, useRef } from "react";
>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/app/dashboard/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faBars,
  faTimes,
  faComments,
  faChartLine,
  faUsers,
  faProjectDiagram,
  faTachometerAlt,
<<<<<<< HEAD
} from "@fortawesome/free-solid-svg-icons";
=======
  faCode,
  faShoppingCart,
  faLaptopCode,
  faCogs,
  faUsers as faTeam,
  faRocket,
  faLightbulb,
  faHandshake,
  faDesktop,
  faMobile,
  faWordpress,
  faReact,
  faNodeJs,
  faAws,
  faGoogle,
  faPenNib,
  faNewspaper,
  faCalendar,
  faTag,
  faArrowRight,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91

interface NavbarProps {
  variant?: "landing" | "dashboard";
  user?: {
    name?: string | null;
    email?: string | null;
  } | null;
}

export function Navbar({ variant = "landing", user }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Dropdown navigation data
  const navigationData = {
    services: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions for your business",
      sections: [
        {
          title: "Web Development",
          icon: faCode,
          items: [
            { name: "Custom Web Applications", href: "/services/web-development", description: "Tailored solutions for your business needs" },
            { name: "E-commerce Platforms", href: "/services/ecommerce", description: "Online stores that convert visitors to customers" },
            { name: "Progressive Web Apps", href: "/services/pwa", description: "Fast, reliable, and engaging web experiences" },
            { name: "API Development", href: "/services/api", description: "Robust backend services and integrations" }
          ]
        },
        {
          title: "Mobile Development",
          icon: faMobile,
          items: [
            { name: "iOS Applications", href: "/services/ios", description: "Native iPhone and iPad applications" },
            { name: "Android Applications", href: "/services/android", description: "Native Android mobile solutions" },
            { name: "React Native Apps", href: "/services/react-native", description: "Cross-platform mobile development" },
            { name: "App Maintenance", href: "/services/maintenance", description: "Ongoing support and updates" }
          ]
        },
        {
          title: "Digital Strategy",
          icon: faLightbulb,
          items: [
            { name: "Technology Consulting", href: "/services/consulting", description: "Expert guidance for your tech decisions" },
            { name: "Digital Transformation", href: "/services/transformation", description: "Modernize your business processes" },
            { name: "Performance Optimization", href: "/services/optimization", description: "Speed up your existing applications" },
            { name: "Security Audits", href: "/services/security", description: "Protect your digital assets" }
          ]
        }
      ],
      featured: {
        title: "Featured Service",
        name: "Full-Stack Development",
        description: "End-to-end web application development with modern technologies",
        href: "/services/full-stack",
        badge: "Most Popular"
      }
    },
    about: {
      title: "About Techlogies",
      subtitle: "Learn more about our team, mission, and values",
      sections: [
        {
          title: "Company",
          icon: faRocket,
          items: [
            { name: "Our Story", href: "/about#story", description: "How Techlogies came to be" },
            { name: "Mission & Vision", href: "/about#mission", description: "Our purpose and future goals" },
            { name: "Core Values", href: "/about#values", description: "What drives us every day" },
            { name: "Achievements", href: "/about#achievements", description: "Milestones and recognition" }
          ]
        },
        {
          title: "Team",
          icon: faTeam,
          items: [
            { name: "Leadership", href: "/about/team#leadership", description: "Meet our executive team" },
            { name: "Developers", href: "/about/team#developers", description: "Our talented engineering team" },
            { name: "Designers", href: "/about/team#designers", description: "Creative minds behind our work" },
            { name: "Join Us", href: "/careers", description: "Open positions and culture" }
          ]
        },
        {
          title: "Process",
          icon: faCogs,
          items: [
            { name: "How We Work", href: "/about/process", description: "Our proven development methodology" },
            { name: "Quality Assurance", href: "/about/quality", description: "Testing and validation processes" },
            { name: "Project Management", href: "/about/management", description: "Agile and collaborative approach" },
            { name: "Support", href: "/about/support", description: "Ongoing maintenance and help" }
          ]
        }
      ],
      featured: {
        title: "Why Choose Us",
        name: "5+ Years of Excellence",
        description: "Trusted by 100+ clients worldwide with proven results",
        href: "/about#why-choose-us",
        badge: "Proven Track Record"
      }
    },
    portfolio: {
      title: "Our Work",
      subtitle: "Explore our successful projects and case studies",
      sections: [
        {
          title: "Web Applications",
          icon: faDesktop,
          items: [
            { name: "E-commerce Solutions", href: "/portfolio/ecommerce", description: "Online stores and marketplaces" },
            { name: "SaaS Platforms", href: "/portfolio/saas", description: "Software-as-a-Service applications" },
            { name: "Corporate Websites", href: "/portfolio/corporate", description: "Professional business websites" },
            { name: "Web Portals", href: "/portfolio/portals", description: "Custom portal solutions" }
          ]
        },
        {
          title: "Mobile Apps",
          icon: faMobile,
          items: [
            { name: "Fintech Apps", href: "/portfolio/fintech", description: "Financial technology solutions" },
            { name: "Healthcare Apps", href: "/portfolio/healthcare", description: "Medical and wellness applications" },
            { name: "Social Platforms", href: "/portfolio/social", description: "Community and networking apps" },
            { name: "Productivity Tools", href: "/portfolio/productivity", description: "Business efficiency applications" }
          ]
        },
        {
          title: "Technologies",
          icon: faLaptopCode,
          items: [
            { name: "React & Next.js", href: "/portfolio/react", description: "Modern web frameworks" },
            { name: "Node.js & Express", href: "/portfolio/nodejs", description: "Backend development" },
            { name: "React Native", href: "/portfolio/mobile", description: "Cross-platform mobile" },
            { name: "Cloud Solutions", href: "/portfolio/cloud", description: "AWS, Azure, and GCP" }
          ]
        }
      ],
      featured: {
        title: "Latest Project",
        name: "AI-Powered Analytics Platform",
        description: "Real-time data visualization and machine learning insights",
        href: "/portfolio/featured",
        badge: "New"
      }
    },
    blog: {
      title: "Tech Insights",
      subtitle: "Latest trends, tutorials, and industry insights",
      sections: [
        {
          title: "Categories",
          icon: faTag,
          items: [
            { name: "Web Development", href: "/blog/web-development", description: "Frontend and backend tutorials" },
            { name: "Mobile Development", href: "/blog/mobile", description: "iOS and Android insights" },
            { name: "DevOps & Cloud", href: "/blog/devops", description: "Infrastructure and deployment" },
            { name: "Design & UX", href: "/blog/design", description: "User experience best practices" }
          ]
        },
        {
          title: "Content Types",
          icon: faPenNib,
          items: [
            { name: "Tutorials", href: "/blog/tutorials", description: "Step-by-step guides" },
            { name: "Case Studies", href: "/blog/case-studies", description: "Real project breakdowns" },
            { name: "Industry News", href: "/blog/news", description: "Latest tech developments" },
            { name: "Best Practices", href: "/blog/best-practices", description: "Expert recommendations" }
          ]
        },
        {
          title: "Resources",
          icon: faNewspaper,
          items: [
            { name: "Newsletter", href: "/blog/newsletter", description: "Weekly tech updates" },
            { name: "Podcast", href: "/blog/podcast", description: "Tech talks and interviews" },
            { name: "Webinars", href: "/blog/webinars", description: "Live learning sessions" },
            { name: "Free Tools", href: "/blog/tools", description: "Developer resources" }
          ]
        }
      ],
      featured: {
        title: "Featured Article",
        name: "The Future of Web Development in 2024",
        description: "Exploring upcoming trends and technologies",
        href: "/blog/future-of-web-development-2024",
        badge: "Trending"
      }
    }
  };

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
    setIsHovering(true);
  };

  const handleDropdownLeave = () => {
    setIsHovering(false);
    dropdownTimeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setActiveDropdown(null);
      }
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    } else if (e.key === 'Escape') {
      setActiveDropdown(null);
    }
  };
>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91

  useEffect(() => {
    if (variant === "landing") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

<<<<<<< HEAD
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [variant]);

=======
      const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
          setActiveDropdown(null);
          setIsMenuOpen(false);
        }
      };

      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setActiveDropdown(null);
          setIsMenuOpen(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [variant]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const menuItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  if (variant === "dashboard") {
    return (
      <motion.header
        className="relative bg-gradient-to-r from-[#1a2332] via-[#2a3441] to-[#1a2332] shadow-2xl border-b border-gray-700/30"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/10 via-transparent to-[#4689ec]/10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center space-x-4"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/dashboard">
                <motion.div
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#4689ec] rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <Image
                      src="/Logo.svg"
                      alt="Techlogies"
                      width={48}
                      height={48}
                      className="relative rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </Link>
              <div className="flex flex-col">
                <motion.span
                  className="text-2xl font-bold text-white tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Techlogies
                </motion.span>
                <motion.span
                  className="text-xs text-gray-400 uppercase tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Dashboard
                </motion.span>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/dashboard"
                className="group relative px-6 py-3 text-white hover:text-[#4689ec] font-medium transition-all duration-300 rounded-xl hover:bg-white/5"
              >
                <span className="relative z-10 flex items-center">
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    className="w-4 h-4 mr-2"
                  />
                  Dashboard
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4689ec] group-hover:w-8 transition-all duration-300"></div>
              </Link>
              <Link
                href="/dashboard/contacts"
                className="group relative px-6 py-3 text-gray-300 hover:text-[#4689ec] font-medium transition-all duration-300 rounded-xl hover:bg-white/5"
              >
                <span className="relative z-10 flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="w-4 h-4 mr-2" />
                  Contacts
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4689ec] group-hover:w-8 transition-all duration-300"></div>
              </Link>
              <Link
                href="/dashboard/deals"
                className="group relative px-6 py-3 text-gray-300 hover:text-[#4689ec] font-medium transition-all duration-300 rounded-xl hover:bg-white/5"
              >
                <span className="relative z-10 flex items-center">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="w-4 h-4 mr-2"
                  />
                  Deals
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4689ec] group-hover:w-8 transition-all duration-300"></div>
              </Link>
              <Link
                href="/dashboard/projects"
                className="group relative px-6 py-3 text-gray-300 hover:text-[#4689ec] font-medium transition-all duration-300 rounded-xl hover:bg-white/5"
              >
                <span className="relative z-10 flex items-center">
                  <FontAwesomeIcon
                    icon={faProjectDiagram}
                    className="w-4 h-4 mr-2"
                  />
                  Projects
                </span>
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
                <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4689ec]/50 to-transparent"></div>
      </motion.header>
    );
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-xl"
          : "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white/95 to-indigo-50/30"></div>
      <div className="relative px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="relative">
              <Image
                src={Logo}
                alt="Techlogies"
                width={100}
                height={100}
                className="relative group-hover:scale-110 transition-all duration-500"
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
          </Link>

          {/* Navigation Links - Center */}
<<<<<<< HEAD
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-2">
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
=======
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-2" ref={navRef}>
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="group relative px-6 py-4 text-gray-700 hover:text-[#4A90E2] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4A90E2]/5 focus-ring flex items-center"
                onKeyDown={(e) => handleKeyDown(e, 'services')}
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                <span className="relative z-10">Services</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`ml-2 w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/10 via-[#4A90E2]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-full group-hover:w-10 transition-all duration-300"></div>
              </button>
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="group relative px-6 py-4 text-gray-700 hover:text-[#4A90E2] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4A90E2]/5 focus-ring flex items-center"
                onKeyDown={(e) => handleKeyDown(e, 'about')}
                aria-expanded={activeDropdown === 'about'}
                aria-haspopup="true"
              >
                <span className="relative z-10">About</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`ml-2 w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === 'about' ? 'rotate-180' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/10 via-[#4A90E2]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-full group-hover:w-10 transition-all duration-300"></div>
              </button>
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('portfolio')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="group relative px-6 py-4 text-gray-700 hover:text-[#4A90E2] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4A90E2]/5 focus-ring flex items-center"
                onKeyDown={(e) => handleKeyDown(e, 'portfolio')}
                aria-expanded={activeDropdown === 'portfolio'}
                aria-haspopup="true"
              >
                <span className="relative z-10">Portfolio</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`ml-2 w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === 'portfolio' ? 'rotate-180' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/10 via-[#4A90E2]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-full group-hover:w-10 transition-all duration-300"></div>
              </button>
            </div>

            {/* Blog Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('blog')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="group relative px-6 py-4 text-gray-700 hover:text-[#4A90E2] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4A90E2]/5 focus-ring flex items-center"
                onKeyDown={(e) => handleKeyDown(e, 'blog')}
                aria-expanded={activeDropdown === 'blog'}
                aria-haspopup="true"
              >
                <span className="relative z-10">Blog</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`ml-2 w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === 'blog' ? 'rotate-180' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/10 via-[#4A90E2]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-full group-hover:w-10 transition-all duration-300"></div>
              </button>
            </div>

            {/* Contact Link (No Dropdown) */}
            <Link
              href="/contact"
              className="group relative px-6 py-4 text-gray-700 hover:text-[#4A90E2] font-semibold transition-all duration-300 rounded-2xl hover:bg-[#4A90E2]/5 focus-ring"
>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/10 via-[#4A90E2]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-full group-hover:w-10 transition-all duration-300"></div>
            </Link>
          </nav>

          {/* Hire Us Button - Right Side */}
          <div className="flex items-center">
<<<<<<< HEAD
            <Link href="#contact">
              <Button className="bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] hover:from-[#3a7bd5] hover:to-[#4689ec] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-10 py-4 font-semibold border-2 border-white relative overflow-hidden group text-lg">
=======
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] hover:from-[#2EC4B6] hover:to-[#4A90E2] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-10 py-4 font-semibold border-2 border-white relative overflow-hidden group text-lg focus-ring">
>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center">
                  <FontAwesomeIcon icon={faComments} className="w-5 h-5 mr-3" />
                  Hire Us
<<<<<<< HEAD
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
=======
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF9505] rounded-full animate-ping"></div>
>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91
                </span>
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 transition-colors duration-300 rounded-xl focus-ring"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="w-6 h-6"
<<<<<<< HEAD
=======
                aria-hidden="true"
>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91
              />
            </Button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] hover:from-[#3a7bd5] hover:to-[#4689ec] text-white font-semibold rounded-xl px-8 py-4 text-lg">
                  Hire Us
                </Button>
=======
      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-2xl overflow-hidden"
          >
            <nav className="px-6 py-6 space-y-4">
              {/* Mobile Services Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'services-mobile' ? null : 'services-mobile')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 font-semibold rounded-xl transition-all duration-300 focus-ring"
                  aria-expanded={activeDropdown === 'services-mobile'}
                >
                  <span>Services</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === 'services-mobile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'services-mobile' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {navigationData.services.sections.flatMap(section => 
                        section.items.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 rounded-lg transition-all duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile About Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'about-mobile' ? null : 'about-mobile')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 font-semibold rounded-xl transition-all duration-300 focus-ring"
                  aria-expanded={activeDropdown === 'about-mobile'}
                >
                  <span>About</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === 'about-mobile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'about-mobile' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {navigationData.about.sections.flatMap(section => 
                        section.items.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 rounded-lg transition-all duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Portfolio Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'portfolio-mobile' ? null : 'portfolio-mobile')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 font-semibold rounded-xl transition-all duration-300 focus-ring"
                  aria-expanded={activeDropdown === 'portfolio-mobile'}
                >
                  <span>Portfolio</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === 'portfolio-mobile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'portfolio-mobile' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {navigationData.portfolio.sections.flatMap(section => 
                        section.items.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 rounded-lg transition-all duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Blog Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'blog-mobile' ? null : 'blog-mobile')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 font-semibold rounded-xl transition-all duration-300 focus-ring"
                  aria-expanded={activeDropdown === 'blog-mobile'}
                >
                  <span>Blog</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === 'blog-mobile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'blog-mobile' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {navigationData.blog.sections.flatMap(section => 
                        section.items.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 rounded-lg transition-all duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:text-[#4A90E2] hover:bg-[#4A90E2]/5 font-semibold rounded-xl transition-all duration-300 focus-ring"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveDropdown(null);
                }}
              >
                Contact
>>>>>>> a1c1ad17d9d5296fcc9cb1cbf9398a0ee3f38d91
              </Link>

              {/* CTA Button */}
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  href="/contact" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  <Button className="w-full bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] hover:from-[#2EC4B6] hover:to-[#4A90E2] text-white font-semibold rounded-xl px-8 py-4 text-lg focus-ring">
                    <FontAwesomeIcon icon={faComments} className="w-5 h-5 mr-3" />
                    Hire Us
                  </Button>
                </Link>
              </div>

              {/* Quick Links */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Links</p>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/services/consulting"
                    className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Get Consultation
                  </Link>
                  <Link
                    href="/portfolio/featured"
                    className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Latest Work
                  </Link>
                  <Link
                    href="/about#why-choose-us"
                    className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Why Choose Us
                  </Link>
                  <Link
                    href="/blog/newsletter"
                    className="text-sm text-gray-600 hover:text-[#4A90E2] transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Newsletter
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menu Dropdowns */}
      <AnimatePresence>
        {activeDropdown && navigationData[activeDropdown as keyof typeof navigationData] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-2xl z-40"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
              {(() => {
                const dropdownData = navigationData[activeDropdown as keyof typeof navigationData];
                return (
                  <div className="grid grid-cols-12 gap-8">
                    {/* Header Section */}
                    <div className="col-span-12 mb-8">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {dropdownData.title}
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                          {dropdownData.subtitle}
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-full mx-auto mt-4"></div>
                      </div>
                    </div>

                    {/* Navigation Sections */}
                    <div className="col-span-12 lg:col-span-9">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dropdownData.sections.map((section, index) => (
                          <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-6"
                          >
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-[#4A90E2]/10 rounded-xl flex items-center justify-center mr-3">
                                <FontAwesomeIcon
                                  icon={section.icon}
                                  className="w-5 h-5 text-[#4A90E2]"
                                />
                              </div>
                              <h4 className="text-xl font-bold text-gray-900">
                                {section.title}
                              </h4>
                            </div>
                            <div className="space-y-3">
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="group block p-3 rounded-xl hover:bg-[#4A90E2]/5 transition-all duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex items-start">
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 group-hover:text-[#4A90E2] transition-colors duration-200 mb-1">
                                        {item.name}
                                      </h5>
                                      <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                                        {item.description}
                                      </p>
                                    </div>
                                    <FontAwesomeIcon
                                      icon={faArrowRight}
                                      className="w-3 h-3 text-[#4A90E2] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200 mt-1 ml-2"
                                    />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Featured Section */}
                    <div className="col-span-12 lg:col-span-3">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-[#4A90E2]/10 to-[#2EC4B6]/10 rounded-2xl p-6 border border-[#4A90E2]/20 h-full"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-semibold text-[#4A90E2] uppercase tracking-wider">
                            {dropdownData.featured.title}
                          </span>
                          <span className="px-2 py-1 bg-[#4A90E2] text-white text-xs font-bold rounded-full">
                            {dropdownData.featured.badge}
                          </span>
                        </div>
                        <Link
                          href={dropdownData.featured.href}
                          className="group block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#4A90E2] transition-colors duration-200 mb-3">
                            {dropdownData.featured.name}
                          </h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {dropdownData.featured.description}
                          </p>
                          <div className="flex items-center text-[#4A90E2] font-semibold group-hover:translate-x-1 transition-transform duration-200">
                            <span>Learn More</span>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="w-4 h-4 ml-2"
                            />
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4689ec]/30 to-transparent"></div>
    </motion.header>
  );
}
