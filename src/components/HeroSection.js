'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      id="hero" 
      className="bg-white py-8 px-4"
      aria-label="Abdulla Farooq - Full-Stack Developer Introduction"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main headline with animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-heathergreen text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🚀 FULL-STACK DEVELOPER
            <br />
            <span className="text-4xl md:text-5xl text-gray-700">💼 AVAILABLE FOR HIRE</span>
          </motion.h1>
          
          <motion.div 
            className="border-t border-b border-black py-4 my-6 max-w-3xl mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="font-serif text-xl italic">
              👨‍💻 Abdulla Farooq • Creating extraordinary digital experiences with modern technologies ✨
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button 
              onClick={scrollToContact}
              className="bg-black text-white px-8 py-4 text-lg font-mono tracking-wider hover:bg-gray-800 transition-all duration-300 border-2 border-black cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 HIRE ME NOW
            </motion.button>
            
            <motion.button 
              onClick={scrollToProjects}
              className="border-2 border-black px-8 py-4 text-lg font-mono tracking-wider hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📁 VIEW PROJECTS
            </motion.button>
          </motion.div>
        </motion.div>

        {/* About section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mt-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Profile Image */}
          <div className="order-2 md:order-1">
            <motion.div 
              className="border-4 border-black p-4 bg-gray-50"
              whileHover={{ rotate: 1, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/Abdulla Image.jpeg"
                alt="Abdulla Farooq - Professional Full-Stack Developer specializing in React, Next.js, and Node.js development"
                width={400}
                height={500}
                className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="text-center py-3 bg-white border-t-2 border-gray-300">
                <p className="font-serif text-sm italic">
                  Abdulla Farooq - Digital craftsman at work
                </p>
              </div>
            </motion.div>
          </div>

          {/* About Content */}
          <div className="order-1 md:order-2">
            <motion.h2 
              className="font-heathergreen text-4xl font-bold mb-6 border-b-2 border-black pb-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              👋 MEET THE DEVELOPER
            </motion.h2>
            
            <motion.div 
              className="font-serif text-lg leading-relaxed space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                Passionate full-stack developer with 5+ years of experience creating 
                innovative web applications. Specializing in React, Next.js, and Node.js 
                to deliver exceptional digital experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-100 p-4 border-2 border-black">
                  <h3 className="font-bold mb-2">🎨 Frontend</h3>
                  <p className="text-sm">React • Next.js • TypeScript</p>
                </div>
                <div className="bg-gray-100 p-4 border-2 border-black">
                  <h3 className="font-bold mb-2">⚙️ Backend</h3>
                  <p className="text-sm">Node.js • Prisma • PostgreSQL</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-300 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/maafkarbai"
            target="_blank"
            className="bg-black text-white px-4 py-2 font-mono text-sm hover:bg-gray-800 transition-colors cursor-pointer flex items-center gap-2"
            whileHover={{ y: -2 }}
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={20}
              height={20}
              className="filter invert"
            />
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/abdullafarooq"
            target="_blank"
            className="bg-black text-white px-4 py-2 font-mono text-sm hover:bg-gray-800 transition-colors cursor-pointer flex items-center gap-2"
            whileHover={{ y: -2 }}
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="filter invert"
            />
            LinkedIn
          </motion.a>
          <motion.a
            href="https://twitter.com/abdullafarooq"
            target="_blank"
            className="bg-black text-white px-4 py-2 font-mono text-sm hover:bg-gray-800 transition-colors cursor-pointer flex items-center gap-2"
            whileHover={{ y: -2 }}
          >
            <Image
              src="/twitter.png"
              alt="Twitter"
              width={20}
              height={20}
              className="filter invert"
            />
            Twitter
          </motion.a>
          <motion.a
            href="https://instagram.com/abdullafarooq"
            target="_blank"
            className="bg-black text-white px-4 py-2 font-mono text-sm hover:bg-gray-800 transition-colors cursor-pointer flex items-center gap-2"
            whileHover={{ y: -2 }}
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={20}
              height={20}
              className="filter invert"
            />
            Instagram
          </motion.a>
          <motion.a
            href="#hero"
            className="bg-black text-white px-4 py-2 font-mono text-sm hover:bg-gray-800 transition-colors cursor-pointer flex items-center gap-2"
            whileHover={{ y: -2 }}
          >
            <Image
              src="/website.png"
              alt="Portfolio"
              width={20}
              height={20}
              className="filter invert"
            />
            Portfolio
          </motion.a>
          <motion.a
            href="mailto:voilad8a@gmail.com"
            className="bg-black text-white px-4 py-2 font-mono text-sm hover:bg-gray-800 transition-colors cursor-pointer flex items-center gap-2"
            whileHover={{ y: -2 }}
          >
            <Image
              src="/EmailIcon.png"
              alt="Email"
              width={20}
              height={20}
              className="filter invert"
            />
            Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}