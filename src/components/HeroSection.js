'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="about" className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main headline with animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-heathergreen text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            LOCAL DEVELOPER CREATES
            <br />
            EXTRAORDINARY DIGITAL EXPERIENCES
          </motion.h1>
          <motion.div 
            className="border-t border-b border-black py-2 my-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="font-serif text-lg italic">
              Abdulla Farooq revolutionizes web development with cutting-edge solutions
            </p>
          </motion.div>
          
          {/* Recruiter CTA Banner */}
          <motion.div 
            className="bg-red-600 text-white py-3 px-6 mx-auto max-w-2xl border-2 border-black mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-4 font-mono text-sm">
              <span className="animate-pulse">🔥 HIRING ALERT 🔥</span>
              <span>FULL-STACK DEVELOPER AVAILABLE FOR IMMEDIATE HIRE</span>
              <span className="animate-pulse">🔥</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Three-column newspaper layout */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Left column - About with Profile Image */}
          <motion.div 
            className="border-r border-gray-300 pr-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="font-heathergreen text-2xl font-bold mb-4 border-b border-black pb-2">
              ABOUT THE DEVELOPER
            </h2>
            
            {/* Profile Image with newspaper style */}
            <div className="mb-6">
              <div className="border-2 border-black p-2 bg-gray-100">
                <Image
                  src="/Abdulla Image.jpeg"
                  alt="Abdulla Farooq - Full Stack Developer"
                  width={280}
                  height={320}
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="text-center py-2 bg-white border-t border-gray-300">
                  <p className="font-serif text-xs italic">
                    Abdulla Farooq at work in his digital newsroom
                  </p>
                </div>
              </div>
            </div>
            
            <div className="font-serif text-sm leading-relaxed space-y-3">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                Abdulla Farooq, a prominent figure in the digital development scene, 
                has been making waves with innovative web applications and user experiences 
                that set new industry standards.
              </p>
              <p>
                With expertise spanning modern frameworks and technologies, Farooq continues 
                to push boundaries in full-stack development, creating solutions that combine 
                technical excellence with exceptional design.
              </p>
              
              {/* Recruiter-focused highlights */}
              <div className="mt-4 p-3 bg-yellow-50 border-2 border-black">
                <h3 className="font-bold text-sm mb-2">🎯 FOR HIRING MANAGERS:</h3>
                <ul className="text-xs space-y-1">
                  <li>✓ Available for immediate start</li>
                  <li>✓ Remote/Hybrid work ready</li>
                  <li>✓ 5+ years experience</li>
                  <li>✓ Portfolio of 50+ projects</li>
                </ul>
              </div>
              
              <div className="mt-4 p-3 bg-gray-100 border-l-4 border-black">
                <p className="text-xs italic">
                  &ldquo;Innovation happens at the intersection of technology and creativity&rdquo; - A. Farooq
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center column - Skills */}
          <motion.div 
            className="border-r border-gray-300 pr-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="font-heathergreen text-2xl font-bold mb-4 border-b border-black pb-2">
              TECHNICAL EXPERTISE
            </h2>
            <div className="font-serif text-sm space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="font-bold text-base mb-2">Frontend Technologies</h3>
                <p className="leading-relaxed">
                  React, Next.js, JavaScript, TypeScript, Tailwind CSS, and modern 
                  animation libraries deliver exceptional user experiences.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="font-bold text-base mb-2">Backend Systems</h3>
                <p className="leading-relaxed">
                  Node.js, Prisma, PostgreSQL, and API development ensure robust 
                  and scalable server-side solutions.
                </p>
              </motion.div>

              {/* Enhanced recruiter info */}
              <motion.div 
                className="bg-blue-50 p-3 border-2 border-black"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <h4 className="font-bold text-sm mb-2">📊 CURRENT AVAILABILITY:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>💼 Status: <strong>Open to offers</strong></div>
                  <div>🏠 Location: <strong>Remote/Hybrid</strong></div>
                  <div>⏰ Notice: <strong>2 weeks</strong></div>
                  <div>💰 Rate: <strong>Competitive</strong></div>
                </div>
              </motion.div>

              <div className="bg-gray-50 p-3 border border-gray-300">
                <h4 className="font-bold text-sm mb-1">BREAKING:</h4>
                <p className="text-xs">
                  New project deployment increases client satisfaction by 300%
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Latest news */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="font-heathergreen text-2xl font-bold mb-4 border-b border-black pb-2">
              LATEST PROJECTS
            </h2>
            <div className="font-serif text-sm space-y-4">
              <motion.article 
                className="border-b border-gray-200 pb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="font-bold text-base mb-1">Portfolio Website Launch</h3>
                <p className="text-xs text-gray-600 mb-2">Published Today</p>
                <p className="leading-relaxed">
                  Revolutionary newspaper-themed portfolio showcases creative approach 
                  to developer presentation and user engagement.
                </p>
              </motion.article>

              <motion.article 
                className="border-b border-gray-200 pb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <h3 className="font-bold text-base mb-1">E-commerce Platform</h3>
                <p className="text-xs text-gray-600 mb-2">Last Week</p>
                <p className="leading-relaxed">
                  Full-stack solution increases client sales by implementing 
                  advanced payment processing and inventory management.
                </p>
              </motion.article>

              {/* Recruiter-focused CTA */}
              <motion.div 
                className="bg-green-600 text-white p-4 border-2 border-black"
                initial={{ scale: 0.8, rotate: -2 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.3, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <h3 className="font-bold text-sm mb-2 text-center">🚀 HIRE ABDULLA NOW!</h3>
                <div className="text-xs space-y-1 text-center">
                  <p>📧 Email: <strong>voilad8a@gmail.com</strong></p>
                  <p>📱 Phone: <strong>+97433209192</strong></p>
                  <p>💼 LinkedIn: <strong>linkedin.com/in/abdullafarooq</strong></p>
                </div>
                <div className="mt-2 pt-2 border-t border-green-400 text-center">
                  <p className="font-bold text-xs">RESPONSE WITHIN 24 HOURS GUARANTEED</p>
                </div>
              </motion.div>

              <div className="bg-black text-white p-3 text-center">
                <p className="font-bold text-xs tracking-wider">
                  MORE PROJECTS ON PAGE 2
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}