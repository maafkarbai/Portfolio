"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NewspaperHeader() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white border-b-2 border-black shadow-sm"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Compact header */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo/Name */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold tracking-wider font-heathergreen md:text-3xl">
              ABDULLA FAROOQ
            </h1>
            <span className="hidden pl-4 font-serif text-sm text-gray-600 border-l border-gray-300 md:block">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="flex gap-6 font-mono text-sm tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="py-2 transition-colors cursor-pointer hover:text-gray-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="py-2 transition-colors cursor-pointer hover:text-gray-600"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-white transition-colors bg-black cursor-pointer hover:bg-gray-800"
            >
              Contact
            </button>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
}
