'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewspaperHeader() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <motion.header 
      className="border-b-4 border-black bg-white sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top banner with date */}
      <div className="border-b border-gray-300 py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <span className="font-mono">{currentDate}</span>
          <span className="font-serif italic">Portfolio Edition</span>
        </div>
      </div>

      {/* Main header */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="border-b border-t border-black py-3 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="font-heathergreen text-5xl md:text-7xl font-bold tracking-wider">
              ABDULLA FAROOQ
            </h1>
            <p className="font-serif text-lg mt-2 text-gray-700">Full-Stack Developer</p>
          </motion.div>
        </div>
      </div>

      {/* Navigation bar */}
      <motion.div 
        className="bg-black text-white py-3 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-center gap-8 text-base font-mono uppercase tracking-wider">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:underline transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:underline transition-colors py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:underline transition-colors py-2"
            >
              Contact
            </button>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}