'use client';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "FULL-STACK",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
      description: "Comprehensive e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard. Increased client sales by 250%.",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      category: "PRODUCTIVITY",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      description: "Real-time collaboration platform with automated workflows and advanced reporting. Serving 500+ active users with 40% productivity increase.",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      category: "DESIGN",
      technologies: ["Next.js", "Tailwind", "Motion", "Prisma"],
      description: "Unique newspaper-themed portfolio combining traditional print aesthetics with modern web technologies and interactive elements.",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      className="bg-gray-50 py-12 px-4 border-t-4 border-black"
      aria-label="Featured Web Development Projects by Abdulla Farooq"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-b border-t border-black py-4 mb-6">
            <h2 className="font-heathergreen text-5xl font-bold tracking-wider">
              FEATURED PROJECTS
            </h2>
            <p className="font-serif italic mt-2 text-lg">Latest development highlights</p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              className="bg-white border-4 border-black p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="grid md:grid-cols-4 gap-8 items-start">
                {/* Project Info */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-black text-white px-3 py-1 text-sm font-mono tracking-wider">
                      {project.category}
                    </span>
                    <div className="h-px bg-black flex-1"></div>
                  </div>
                  
                  <h3 className="font-heathergreen text-4xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <div className="font-serif text-lg leading-relaxed mb-6">
                    <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <motion.a 
                      href={project.demoUrl}
                      className="bg-black text-white px-6 py-3 font-mono hover:bg-gray-800 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW DEMO
                    </motion.a>
                    <motion.a 
                      href={project.githubUrl}
                      className="border-2 border-black px-6 py-3 font-mono hover:bg-black hover:text-white transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW CODE
                    </motion.a>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="md:col-span-1">
                  <h5 className="font-bold border-b-2 border-black pb-2 mb-4">
                    TECH STACK
                  </h5>
                  <div className="space-y-2">
                    {project.technologies.map((tech, i) => (
                      <motion.div 
                        key={i} 
                        className="bg-gray-100 p-3 text-sm font-mono border border-gray-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-black text-white p-8 border-4 border-black">
            <h3 className="font-heathergreen text-3xl font-bold mb-4">
              INTERESTED IN MY WORK?
            </h3>
            <p className="font-serif text-lg mb-6">Let's discuss your next project</p>
            <motion.button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-3 font-mono tracking-wider hover:bg-gray-100 transition-colors border-2 border-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}