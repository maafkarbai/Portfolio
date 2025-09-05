"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

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

  useEffect(() => {
    if (variant === "landing") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [variant]);

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
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/10 via-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] rounded-full group-hover:w-10 transition-all duration-300"></div>
            </Link>
          </nav>

          {/* Hire Us Button - Right Side */}
          <div className="flex items-center">
            <Link href="#contact">
              <Button className="bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] hover:from-[#3a7bd5] hover:to-[#4689ec] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-10 py-4 font-semibold border-2 border-white relative overflow-hidden group text-lg">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center">
                  <FontAwesomeIcon icon={faComments} className="w-5 h-5 mr-3" />
                  Hire Us
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                </span>
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#4689ec] hover:bg-[#4689ec]/5 transition-colors duration-300 rounded-xl"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="w-6 h-6"
              />
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
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] hover:from-[#3a7bd5] hover:to-[#4689ec] text-white font-semibold rounded-xl px-8 py-4 text-lg">
                  Hire Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4689ec]/30 to-transparent"></div>
    </motion.header>
  );
}
