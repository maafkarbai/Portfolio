"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import NewspaperHeader from "@/components/NewspaperHeader";
import NewspaperLayout from "@/components/NewspaperLayout";
import NewspaperFooter from "@/components/NewspaperFooter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NewspaperHeader />
      <NewspaperLayout>
        {/* Page Header */}
        <motion.div
          className="py-8 mb-8 text-center border-b-4 border-black"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-2 text-5xl font-bold font-heathergreen">
            DEVELOPER PROFILE
          </h1>
          <p className="font-serif text-lg italic">
            Exclusive Interview with Abdulla Farooq
          </p>
        </motion.div>

        {/* Main Article */}
        <motion.article
          className="p-8 mb-8 bg-white border-2 border-black"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid gap-8 md:grid-cols-3">
            {/* Main content */}
            <div className="pr-8 border-r border-gray-300 md:col-span-2">
              <div className="mb-6">
                <span className="px-3 py-1 font-mono text-xs text-white bg-black">
                  EXCLUSIVE INTERVIEW
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-bold font-heathergreen">
                &ldquo;Code is Poetry in Motion&rdquo;
              </h2>
              <h3 className="mb-6 font-serif text-lg italic text-gray-700">
                Local Developer Shares Journey from Student to Industry Leader
              </h3>

              <div className="space-y-4 font-serif leading-relaxed">
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                  In an exclusive interview at his digital headquarters, Abdulla
                  Farooq reflects on a career that has transformed from curious
                  student to sought-after full-stack developer. His journey
                  reads like a modern success story of dedication, continuous
                  learning, and innovative thinking.
                </p>

                <p>
                  &ldquo;I started coding in 2018,&rdquo; Farooq recalls,
                  adjusting his workspace filled with multiple monitors and
                  coffee cups. &ldquo;What began as curiosity about how websites
                  worked has evolved into a passion for creating digital
                  experiences that solve real-world problems.&rdquo;
                </p>

                <div className="p-4 my-6 bg-gray-100 border-l-4 border-black">
                  <h4 className="mb-2 font-bold">💼 CAREER TIMELINE</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>
                        <strong>2018:</strong> Started learning web development
                      </span>
                      <span className="text-gray-600">
                        Self-taught journey begins
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        <strong>2020:</strong> First freelance projects
                      </span>
                      <span className="text-gray-600">
                        Local business websites
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        <strong>2022:</strong> Full-stack specialization
                      </span>
                      <span className="text-gray-600">
                        React, Node.js mastery
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        <strong>2024:</strong> Portfolio expansion
                      </span>
                      <span className="text-gray-600">
                        50+ projects completed
                      </span>
                    </div>
                  </div>
                </div>

                <p>
                  His approach to development is methodical yet creative.
                  &ldquo;Every project starts with understanding the
                  client&rsquo;s vision,&rdquo; he explains. &ldquo;Technology
                  should serve the user experience, not dominate it.&rdquo;
                </p>

                <p>
                  This philosophy has earned him recognition among peers and
                  clients alike. Recent projects include e-commerce platforms
                  that increased sales by 300%, productivity tools adopted by
                  500+ users, and this innovative newspaper-themed portfolio.
                </p>

                {/* Skills breakdown */}
                <div className="p-6 my-6 border-2 border-black bg-blue-50">
                  <h4 className="mb-4 text-xl font-bold text-center font-heathergreen">
                    TECHNICAL ARSENAL
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="mb-2 font-bold">Frontend Mastery</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• React & Next.js (Expert)</li>
                        <li>• TypeScript (Advanced)</li>
                        <li>• Tailwind CSS (Expert)</li>
                        <li>• Framer Motion (Advanced)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 font-bold">Backend Excellence</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Node.js & Express (Expert)</li>
                        <li>• Prisma ORM (Advanced)</li>
                        <li>• PostgreSQL/SQLite (Expert)</li>
                        <li>• API Development (Expert)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  When asked about his availability for new opportunities,
                  Farooq&rsquo;s eyes light up. &ldquo;I&rsquo;m always excited
                  about challenging projects. Whether it&rsquo;s a startup
                  needing an MVP or an enterprise requiring scalable solutions,
                  I bring the same enthusiasm and expertise.&rdquo;
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile image */}
              <div className="p-2 bg-gray-100 border-2 border-black">
                <Image
                  src="/Abdulla Image.jpeg"
                  alt="Abdulla Farooq - Developer Profile"
                  width={250}
                  height={300}
                  className="object-cover w-full h-48 grayscale"
                />
                <div className="py-2 text-center bg-white border-t border-gray-300">
                  <p className="font-serif text-xs italic">
                    Abdulla Farooq in his development environment
                  </p>
                </div>
              </div>

              {/* Key facts */}
              <div className="p-4 border-2 border-black bg-yellow-50">
                <h4 className="mb-3 font-bold text-center">📋 QUICK FACTS</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Age:</strong> 26
                  </div>
                  <div>
                    <strong>Location:</strong> Remote/Hybrid
                  </div>
                  <div>
                    <strong>Experience:</strong> 5+ Years
                  </div>
                  <div>
                    <strong>Projects:</strong> 50+ Completed
                  </div>
                  <div>
                    <strong>Speciality:</strong> Full-Stack
                  </div>
                  <div>
                    <strong>Availability:</strong> Immediate
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <motion.div
                className="p-4 text-center text-white bg-green-600 border-2 border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="mb-2 font-bold">🎯 READY TO HIRE?</h4>
                <div className="space-y-1 text-xs">
                  <p>📧 voilad8a@gmail.com</p>
                  <p>📱 +97433209192</p>
                  <p>💼 linkedin.com/in/abdullafarooq</p>
                </div>
                <div className="pt-2 mt-3 border-t border-green-400">
                  <p className="text-xs font-bold">INTERVIEW READY!</p>
                </div>
              </motion.div>

              {/* Client testimonial */}
              <div className="p-3 border border-gray-400">
                <h5 className="mb-2 font-bold text-center">CLIENT REVIEW</h5>
                <p className="mb-2 font-serif text-xs italic text-center">
                  &ldquo;Abdulla delivered our e-commerce platform ahead of
                  schedule and exceeded all expectations. His attention to
                  detail and problem-solving skills are exceptional.&rdquo;
                </p>
                <p className="text-xs text-center">
                  - Sarah Johnson, CEO TechStart
                </p>
                <div className="mt-1 text-center">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Additional sections */}
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="p-6 bg-white border-2 border-black"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="pb-2 mb-4 text-2xl font-bold border-b border-black font-heathergreen">
              EDUCATION & CERTIFICATIONS
            </h3>
            <div className="space-y-3 font-serif text-sm">
              <div>
                <h4 className="font-bold">Bachelor of Computer Science</h4>
                <p className="text-gray-600">
                  University of Technology (2016-2020)
                </p>
              </div>
              <div>
                <h4 className="font-bold">Full-Stack Web Development</h4>
                <p className="text-gray-600">
                  FreeCodeCamp Certification (2018)
                </p>
              </div>
              <div>
                <h4 className="font-bold">React Advanced Patterns</h4>
                <p className="text-gray-600">
                  Epic React by Kent C. Dodds (2022)
                </p>
              </div>
              <div>
                <h4 className="font-bold">AWS Cloud Practitioner</h4>
                <p className="text-gray-600">Amazon Web Services (2023)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-6 bg-white border-2 border-black"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="pb-2 mb-4 text-2xl font-bold border-b border-black font-heathergreen">
              RECENT ACHIEVEMENTS
            </h3>
            <div className="space-y-3 font-serif text-sm">
              <div>
                <h4 className="font-bold">🏆 Developer of the Month</h4>
                <p className="text-gray-600">
                  Local Tech Community (March 2024)
                </p>
              </div>
              <div>
                <h4 className="font-bold">📈 Client Satisfaction: 98%</h4>
                <p className="text-gray-600">Based on 50+ project reviews</p>
              </div>
              <div>
                <h4 className="font-bold">⚡ Average Delivery Time</h4>
                <p className="text-gray-600">
                  15% faster than industry standard
                </p>
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
