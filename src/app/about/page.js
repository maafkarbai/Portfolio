'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NewspaperHeader from '@/components/NewspaperHeader';
import NewspaperLayout from '@/components/NewspaperLayout';
import NewspaperFooter from '@/components/NewspaperFooter';

export default function AboutPage() {
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
            DEVELOPER PROFILE
          </h1>
          <p className="font-serif text-lg italic">
            Exclusive Interview with Abdulla Farooq
          </p>
        </motion.div>

        {/* Main Article */}
        <motion.article 
          className="bg-white border-2 border-black p-8 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2 border-r border-gray-300 pr-8">
              <div className="mb-6">
                <span className="bg-black text-white px-3 py-1 text-xs font-mono">
                  EXCLUSIVE INTERVIEW
                </span>
              </div>

              <h2 className="font-heathergreen text-3xl font-bold mb-4">
                "Code is Poetry in Motion"
              </h2>
              <h3 className="font-serif text-lg italic mb-6 text-gray-700">
                Local Developer Shares Journey from Student to Industry Leader
              </h3>

              <div className="font-serif leading-relaxed space-y-4">
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                  In an exclusive interview at his digital headquarters, Abdulla Farooq 
                  reflects on a career that has transformed from curious student to 
                  sought-after full-stack developer. His journey reads like a modern 
                  success story of dedication, continuous learning, and innovative thinking.
                </p>

                <p>
                  "I started coding in 2018," Farooq recalls, adjusting his workspace 
                  filled with multiple monitors and coffee cups. "What began as curiosity 
                  about how websites worked has evolved into a passion for creating 
                  digital experiences that solve real-world problems."
                </p>

                <div className="bg-gray-100 p-4 border-l-4 border-black my-6">
                  <h4 className="font-bold mb-2">💼 CAREER TIMELINE</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span><strong>2018:</strong> Started learning web development</span>
                      <span className="text-gray-600">Self-taught journey begins</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>2020:</strong> First freelance projects</span>
                      <span className="text-gray-600">Local business websites</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>2022:</strong> Full-stack specialization</span>
                      <span className="text-gray-600">React, Node.js mastery</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>2024:</strong> Portfolio expansion</span>
                      <span className="text-gray-600">50+ projects completed</span>
                    </div>
                  </div>
                </div>

                <p>
                  His approach to development is methodical yet creative. "Every project 
                  starts with understanding the client's vision," he explains. "Technology 
                  should serve the user experience, not dominate it."
                </p>

                <p>
                  This philosophy has earned him recognition among peers and clients alike. 
                  Recent projects include e-commerce platforms that increased sales by 300%, 
                  productivity tools adopted by 500+ users, and this innovative 
                  newspaper-themed portfolio.
                </p>

                {/* Skills breakdown */}
                <div className="bg-blue-50 p-6 border-2 border-black my-6">
                  <h4 className="font-heathergreen text-xl font-bold mb-4 text-center">
                    TECHNICAL ARSENAL
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold mb-2">Frontend Mastery</h5>
                      <ul className="text-sm space-y-1">
                        <li>• React & Next.js (Expert)</li>
                        <li>• TypeScript (Advanced)</li>
                        <li>• Tailwind CSS (Expert)</li>
                        <li>• Framer Motion (Advanced)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">Backend Excellence</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Node.js & Express (Expert)</li>
                        <li>• Prisma ORM (Advanced)</li>
                        <li>• PostgreSQL/SQLite (Expert)</li>
                        <li>• API Development (Expert)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  When asked about his availability for new opportunities, Farooq's 
                  eyes light up. "I'm always excited about challenging projects. 
                  Whether it's a startup needing an MVP or an enterprise requiring 
                  scalable solutions, I bring the same enthusiasm and expertise."
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile image */}
              <div className="border-2 border-black p-2 bg-gray-100">
                <Image
                  src="/Abdulla Image.jpeg"
                  alt="Abdulla Farooq - Developer Profile"
                  width={250}
                  height={300}
                  className="w-full h-48 object-cover grayscale"
                />
                <div className="text-center py-2 bg-white border-t border-gray-300">
                  <p className="font-serif text-xs italic">
                    Abdulla Farooq in his development environment
                  </p>
                </div>
              </div>

              {/* Key facts */}
              <div className="border-2 border-black p-4 bg-yellow-50">
                <h4 className="font-bold mb-3 text-center">📋 QUICK FACTS</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Age:</strong> 26</div>
                  <div><strong>Location:</strong> Remote/Hybrid</div>
                  <div><strong>Experience:</strong> 5+ Years</div>
                  <div><strong>Projects:</strong> 50+ Completed</div>
                  <div><strong>Speciality:</strong> Full-Stack</div>
                  <div><strong>Availability:</strong> Immediate</div>
                </div>
              </div>

              {/* Contact CTA */}
              <motion.div 
                className="bg-green-600 text-white p-4 border-2 border-black text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="font-bold mb-2">🎯 READY TO HIRE?</h4>
                <div className="text-xs space-y-1">
                  <p>📧 abdulla@example.com</p>
                  <p>📱 +1 (555) 123-4567</p>
                  <p>💼 linkedin.com/in/abdulla</p>
                </div>
                <div className="mt-3 pt-2 border-t border-green-400">
                  <p className="font-bold text-xs">INTERVIEW READY!</p>
                </div>
              </motion.div>

              {/* Client testimonial */}
              <div className="border border-gray-400 p-3">
                <h5 className="font-bold mb-2 text-center">CLIENT REVIEW</h5>
                <p className="text-xs font-serif italic text-center mb-2">
                  "Abdulla delivered our e-commerce platform ahead of schedule 
                  and exceeded all expectations. His attention to detail and 
                  problem-solving skills are exceptional."
                </p>
                <p className="text-xs text-center">- Sarah Johnson, CEO TechStart</p>
                <div className="text-center mt-1">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Additional sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white border-2 border-black p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-heathergreen text-2xl font-bold mb-4 border-b border-black pb-2">
              EDUCATION & CERTIFICATIONS
            </h3>
            <div className="space-y-3 font-serif text-sm">
              <div>
                <h4 className="font-bold">Bachelor of Computer Science</h4>
                <p className="text-gray-600">University of Technology (2016-2020)</p>
              </div>
              <div>
                <h4 className="font-bold">Full-Stack Web Development</h4>
                <p className="text-gray-600">FreeCodeCamp Certification (2018)</p>
              </div>
              <div>
                <h4 className="font-bold">React Advanced Patterns</h4>
                <p className="text-gray-600">Epic React by Kent C. Dodds (2022)</p>
              </div>
              <div>
                <h4 className="font-bold">AWS Cloud Practitioner</h4>
                <p className="text-gray-600">Amazon Web Services (2023)</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white border-2 border-black p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-heathergreen text-2xl font-bold mb-4 border-b border-black pb-2">
              RECENT ACHIEVEMENTS
            </h3>
            <div className="space-y-3 font-serif text-sm">
              <div>
                <h4 className="font-bold">🏆 Developer of the Month</h4>
                <p className="text-gray-600">Local Tech Community (March 2024)</p>
              </div>
              <div>
                <h4 className="font-bold">📈 Client Satisfaction: 98%</h4>
                <p className="text-gray-600">Based on 50+ project reviews</p>
              </div>
              <div>
                <h4 className="font-bold">⚡ Average Delivery Time</h4>
                <p className="text-gray-600">15% faster than industry standard</p>
              </div>
              <div>
                <h4 className="font-bold">💡 Innovation Award</h4>
                <p className="text-gray-600">Best UI/UX Design (2023)</p>
              </div>
            </div>
          </motion.div>
        </div>

      </NewspaperLayout>
      <NewspaperFooter />
    </div>
  );
}