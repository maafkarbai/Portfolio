'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewspaperHeader() {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <motion.header 
      className="border-b-2 border-black bg-white sticky top-0 z-50 shadow-sm"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Compact header */}
      <div className="py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-heathergreen text-2xl md:text-3xl font-bold tracking-wider">
              ABDULLA FAROOQ
            </h1>
            <span className="hidden md:block font-serif text-sm text-gray-600 border-l border-gray-300 pl-4">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            className="flex gap-6 text-sm font-mono uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:text-gray-600 transition-colors py-2 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-gray-600 transition-colors py-2 cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
}