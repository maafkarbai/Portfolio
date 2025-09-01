'use client';
import { motion } from 'framer-motion';
import NewspaperHeader from '@/components/NewspaperHeader';
import NewspaperLayout from '@/components/NewspaperLayout';
import NewspaperFooter from '@/components/NewspaperFooter';

export default function ResumePage() {
  const handleDownload = () => {
    // Create a downloadable resume PDF link
    const link = document.createElement('a');
    link.href = '/resume-abdulla-farooq.pdf';
    link.download = 'Abdulla-Farooq-Resume.pdf';
    link.click();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NewspaperHeader />
      <NewspaperLayout>
        {/* Page Header */}
        <motion.div 
          className="text-center py-8 border-b-4 border-black mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heathergreen text-5xl font-bold mb-2">
            PROFESSIONAL RESUME
          </h1>
          <p className="font-serif text-lg italic">
            Complete Career Documentation - Abdulla Farooq
          </p>
          <motion.button
            onClick={handleDownload}
            className="mt-4 bg-red-600 text-white px-6 py-2 font-mono text-sm hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 DOWNLOAD PDF VERSION
          </motion.button>
        </motion.div>

        {/* Resume Content */}
        <div className="bg-white border-2 border-black p-8 mb-8">
          {/* Header Section */}
          <motion.div 
            className="text-center border-b-2 border-black pb-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-heathergreen text-4xl font-bold mb-2">ABDULLA FAROOQ</h1>
            <h2 className="font-serif text-xl text-gray-700 mb-4">Full-Stack Web Developer</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm font-mono">
              <div>📧 abdulla@example.com</div>
              <div>📱 +1 (555) 123-4567</div>
              <div>🌐 abdullafarooq.dev</div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm font-mono mt-2">
              <div>💼 linkedin.com/in/abdulla-farooq</div>
              <div>🔗 github.com/abdulla-farooq</div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Professional Summary */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-heathergreen text-2xl font-bold border-b border-black pb-2 mb-4">
                  PROFESSIONAL SUMMARY
                </h3>
                <div className="font-serif text-sm leading-relaxed">
                  <p className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                    Passionate Full-Stack Developer with 5+ years of experience creating 
                    innovative web applications and digital solutions. Proven track record 
                    of delivering high-quality projects that increase client satisfaction 
                    and business revenue. Expert in modern JavaScript frameworks, backend 
                    development, and database management with a focus on performance 
                    optimization and user experience.
                  </p>
                </div>
              </motion.section>

              {/* Experience */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-heathergreen text-2xl font-bold border-b border-black pb-2 mb-4">
                  PROFESSIONAL EXPERIENCE
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-black pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">Senior Full-Stack Developer</h4>
                        <p className="text-gray-600 font-serif">TechSolutions Inc.</p>
                      </div>
                      <span className="text-sm font-mono bg-gray-100 px-2 py-1">2022 - Present</span>
                    </div>
                    <ul className="font-serif text-sm space-y-1">
                      <li>• Led development of 15+ web applications using React, Next.js, and Node.js</li>
                      <li>• Increased client project delivery speed by 30% through optimized workflows</li>
                      <li>• Mentored 3 junior developers and conducted code reviews</li>
                      <li>• Implemented CI/CD pipelines reducing deployment time by 50%</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-400 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">Full-Stack Developer</h4>
                        <p className="text-gray-600 font-serif">Digital Innovations Ltd.</p>
                      </div>
                      <span className="text-sm font-mono bg-gray-100 px-2 py-1">2020 - 2022</span>
                    </div>
                    <ul className="font-serif text-sm space-y-1">
                      <li>• Developed e-commerce platform serving 10,000+ daily users</li>
                      <li>• Collaborated with UX/UI team to improve user experience by 40%</li>
                      <li>• Built RESTful APIs and microservices architecture</li>
                      <li>• Maintained 99.9% uptime through monitoring and optimization</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-gray-400 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">Junior Web Developer</h4>
                        <p className="text-gray-600 font-serif">StartupHub Co.</p>
                      </div>
                      <span className="text-sm font-mono bg-gray-100 px-2 py-1">2018 - 2020</span>
                    </div>
                    <ul className="font-serif text-sm space-y-1">
                      <li>• Built responsive websites using HTML, CSS, JavaScript, and PHP</li>
                      <li>• Assisted in database design and optimization projects</li>
                      <li>• Participated in agile development process and sprint planning</li>
                      <li>• Completed 25+ client projects with 98% satisfaction rate</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-heathergreen text-2xl font-bold border-b border-black pb-2 mb-4">
                  EDUCATION & CERTIFICATIONS
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold">Bachelor of Computer Science</h4>
                        <p className="text-gray-600 font-serif">University of Technology</p>
                      </div>
                      <span className="text-sm font-mono bg-gray-100 px-2 py-1">2016 - 2020</span>
                    </div>
                    <p className="font-serif text-sm">
                      Graduated Magna Cum Laude • GPA: 3.8/4.0 • Dean's List: 6 semesters
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 border border-gray-300">
                      <h5 className="font-bold mb-2">Professional Certifications</h5>
                      <ul className="space-y-1 font-serif">
                        <li>• AWS Cloud Practitioner (2023)</li>
                        <li>• React Advanced Patterns (2022)</li>
                        <li>• Full-Stack Web Development (2018)</li>
                        <li>• JavaScript Algorithms (2021)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 border border-gray-300">
                      <h5 className="font-bold mb-2">Achievements</h5>
                      <ul className="space-y-1 font-serif">
                        <li>• Developer of the Month (2024)</li>
                        <li>• Innovation Award (2023)</li>
                        <li>• Client Choice Award (2022)</li>
                        <li>• Perfect Attendance (2021)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Right Column - Skills & Additional Info */}
            <div className="space-y-8">
              {/* Technical Skills */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="font-heathergreen text-xl font-bold border-b border-black pb-2 mb-4">
                  TECHNICAL SKILLS
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm mb-2 bg-black text-white px-2 py-1">FRONTEND</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>React/Next.js</span>
                        <span className="font-mono">Expert</span>
                      </div>
                      <div className="flex justify-between">
                        <span>TypeScript</span>
                        <span className="font-mono">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tailwind CSS</span>
                        <span className="font-mono">Expert</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Framer Motion</span>
                        <span className="font-mono">Advanced</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm mb-2 bg-black text-white px-2 py-1">BACKEND</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Node.js/Express</span>
                        <span className="font-mono">Expert</span>
                      </div>
                      <div className="flex justify-between">
                        <span>PostgreSQL</span>
                        <span className="font-mono">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Prisma ORM</span>
                        <span className="font-mono">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>REST APIs</span>
                        <span className="font-mono">Expert</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm mb-2 bg-black text-white px-2 py-1">TOOLS & OTHERS</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Git/GitHub</span>
                        <span className="font-mono">Expert</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Docker</span>
                        <span className="font-mono">Intermediate</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AWS</span>
                        <span className="font-mono">Intermediate</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Figma</span>
                        <span className="font-mono">Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Key Projects */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="font-heathergreen text-xl font-bold border-b border-black pb-2 mb-4">
                  KEY PROJECTS
                </h3>
                
                <div className="space-y-3 text-xs">
                  <div className="bg-gray-50 p-3 border border-gray-300">
                    <h4 className="font-bold mb-1">E-Commerce Platform</h4>
                    <p className="font-serif mb-1">Next.js, PostgreSQL, Stripe integration</p>
                    <p className="text-gray-600">300% sales increase for client</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 border border-gray-300">
                    <h4 className="font-bold mb-1">Task Management App</h4>
                    <p className="font-serif mb-1">React, Node.js, Real-time features</p>
                    <p className="text-gray-600">500+ daily active users</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 border border-gray-300">
                    <h4 className="font-bold mb-1">Portfolio Website</h4>
                    <p className="font-serif mb-1">Next.js, Framer Motion, Unique design</p>
                    <p className="text-gray-600">Newspaper-themed innovation</p>
                  </div>
                </div>
              </motion.section>

              {/* Languages */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="font-heathergreen text-xl font-bold border-b border-black pb-2 mb-4">
                  LANGUAGES
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="font-mono">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Arabic</span>
                    <span className="font-mono">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>French</span>
                    <span className="font-mono">Conversational</span>
                  </div>
                </div>
              </motion.section>

              {/* Availability Status */}
              <motion.section
                className="bg-green-600 text-white p-4 border-2 border-black text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-bold mb-2">🚀 CURRENT STATUS</h3>
                <div className="text-xs space-y-1">
                  <p><strong>AVAILABLE FOR HIRE</strong></p>
                  <p>Remote/Hybrid positions</p>
                  <p>2 weeks notice period</p>
                  <p>Immediate freelance projects</p>
                </div>
                <div className="mt-2 pt-2 border-t border-green-400">
                  <p className="font-bold text-xs">CONTACT WITHIN 24 HOURS!</p>
                </div>
              </motion.section>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="bg-black text-white p-8 border-2 border-black text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="font-heathergreen text-3xl font-bold mb-4">
            READY TO MAKE YOUR NEXT HIRE?
          </h2>
          <p className="font-serif mb-6 text-lg">
            Download my resume or contact me directly for immediate availability
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.button
              onClick={handleDownload}
              className="bg-red-600 text-white px-8 py-3 font-mono text-sm hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 DOWNLOAD PDF RESUME
            </motion.button>
            <motion.a
              href="mailto:abdulla@example.com"
              className="bg-green-600 text-white px-8 py-3 font-mono text-sm hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📧 CONTACT DIRECTLY
            </motion.a>
            <motion.a
              href="/projects"
              className="border-2 border-white px-8 py-3 font-mono text-sm hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👀 VIEW PORTFOLIO
            </motion.a>
          </div>
        </motion.div>

      </NewspaperLayout>
      <NewspaperFooter />
    </div>
  );
}