'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import NewspaperHeader from '@/components/NewspaperHeader';
import NewspaperLayout from '@/components/NewspaperLayout';
import NewspaperFooter from '@/components/NewspaperFooter';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution Transforms Online Shopping",
      subtitle: "Full-Stack Platform Increases Client Sales by 300%",
      category: "fullstack",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind", "Prisma"],
      description: "A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform revolutionized the client's online presence and significantly boosted their revenue.",
      achievements: [
        "300% increase in sales within first quarter",
        "99.9% uptime achieved",
        "Advanced security implementation",
        "Mobile-first responsive design"
      ],
      features: [
        "Real-time inventory tracking",
        "Multi-payment gateway integration",
        "Advanced analytics dashboard",
        "SEO optimized product pages"
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Live & Active",
      client: "TechMart Solutions",
      timeline: "3 months"
    },
    {
      id: 2,
      title: "Task Management Platform Boosts Team Productivity",
      subtitle: "Revolutionary Collaboration Tool Adopted by 500+ Users",
      category: "frontend",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      description: "An innovative task management platform with real-time collaboration features, automated workflow optimization, and advanced reporting capabilities that transformed how teams organize their work.",
      achievements: [
        "500+ active daily users",
        "40% productivity increase reported",
        "Real-time synchronization across devices",
        "Industry recognition for UX design"
      ],
      features: [
        "Real-time collaboration",
        "Automated task assignment",
        "Advanced reporting & analytics",
        "Mobile app companion"
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Scaling Phase",
      client: "ProductivityPro Inc",
      timeline: "4 months"
    },
    {
      id: 3,
      title: "Portfolio Website Sets New Design Standards",
      subtitle: "Newspaper Theme Breaks Conventional Developer Portfolio Boundaries",
      category: "frontend",
      technologies: ["Next.js", "Tailwind", "Framer Motion", "Prisma"],
      description: "This unique newspaper-themed portfolio demonstrates innovative approaches to personal branding, combining traditional print media aesthetics with modern web technologies.",
      achievements: [
        "Unique design concept implementation",
        "Fully responsive newspaper layout",
        "Interactive animated elements",
        "High performance optimization"
      ],
      features: [
        "Newspaper-style layout",
        "Smooth scroll animations",
        "Contact form integration",
        "Performance optimized"
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Recently Launched",
      client: "Personal Project",
      timeline: "2 months"
    },
    {
      id: 4,
      title: "Real Estate Platform Modernizes Property Search",
      subtitle: "Advanced Filtering System Connects Buyers with Dream Homes",
      category: "fullstack",
      technologies: ["Next.js", "PostgreSQL", "MapBox", "Tailwind", "Node.js"],
      description: "A modern real estate platform featuring advanced property search, interactive maps, virtual tours integration, and comprehensive property management tools for agents and buyers.",
      achievements: [
        "50% faster property discovery",
        "Interactive map integration",
        "Virtual tour capabilities",
        "Agent dashboard optimization"
      ],
      features: [
        "Advanced property filtering",
        "Interactive map search",
        "Virtual tour integration",
        "Agent management system"
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "In Development",
      client: "RealtyTech Solutions",
      timeline: "5 months"
    },
    {
      id: 5,
      title: "Restaurant Chain Management System",
      subtitle: "Digital Transformation Streamlines Multi-Location Operations",
      category: "backend",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Express", "JWT"],
      description: "A comprehensive management system for restaurant chains, handling inventory, staff scheduling, order processing, and financial reporting across multiple locations.",
      achievements: [
        "25% reduction in operational costs",
        "Real-time inventory tracking",
        "Automated staff scheduling",
        "Comprehensive reporting suite"
      ],
      features: [
        "Multi-location management",
        "Real-time inventory sync",
        "Staff scheduling automation",
        "Financial reporting dashboard"
      ],
      demoUrl: "#",
      githubUrl: "#",
      status: "Production Ready",
      client: "Bistro Chain Co.",
      timeline: "6 months"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Stories' },
    { key: 'fullstack', label: 'Full-Stack Features' },
    { key: 'frontend', label: 'Frontend Headlines' },
    { key: 'backend', label: 'Backend Reports' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            PROJECT ARCHIVES
          </h1>
          <p className="font-serif text-lg italic">
            Complete Coverage of Development Success Stories
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          className="mb-8 border-2 border-black bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center bg-black text-white py-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 mx-2 my-1 font-mono text-sm transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-white text-black'
                    : 'hover:bg-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.article 
              key={project.id}
              className="bg-white border-2 border-black p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main article content */}
                <div className="md:col-span-2 border-r border-gray-300 pr-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="bg-black text-white px-3 py-1 text-xs font-mono tracking-wider uppercase">
                      {project.category} Development
                    </span>
                    <span className="text-xs text-gray-600">
                      Timeline: {project.timeline}
                    </span>
                  </div>
                  
                  <h2 className="font-heathergreen text-3xl font-bold mb-2 leading-tight">
                    {project.title}
                  </h2>
                  
                  <h3 className="font-serif text-lg italic mb-4 text-gray-700">
                    {project.subtitle}
                  </h3>

                  <div className="font-serif text-sm leading-relaxed space-y-3 mb-6">
                    <p className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="bg-blue-50 p-4 border-l-4 border-black mb-6">
                    <h4 className="font-bold mb-3">🔧 KEY FEATURES IMPLEMENTED:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="text-xs flex items-center">
                          <span className="mr-2">▸</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-green-50 p-4 border-l-4 border-black mb-6">
                    <h4 className="font-bold mb-3">🏆 PROJECT ACHIEVEMENTS:</h4>
                    <div className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="text-xs flex items-center">
                          <span className="mr-2">✓</span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.demoUrl}
                      className="bg-black text-white px-6 py-2 text-xs font-mono hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW LIVE DEMO
                    </motion.a>
                    <motion.a 
                      href={project.githubUrl}
                      className="border-2 border-black px-6 py-2 text-xs font-mono hover:bg-black hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      SOURCE CODE
                    </motion.a>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Project Status */}
                  <div className="border-2 border-black p-4 bg-green-50">
                    <h4 className="font-bold mb-2 text-center">📊 PROJECT STATUS</h4>
                    <div className="text-center">
                      <div className="bg-green-600 text-white px-3 py-1 text-xs font-mono mb-2">
                        {project.status}
                      </div>
                      <p className="text-xs font-serif">
                        Client: {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div>
                    <h4 className="font-bold border-b border-black pb-2 mb-3">
                      🛠️ TECHNOLOGY STACK
                    </h4>
                    <div className="space-y-2">
                      {project.technologies.map((tech, i) => (
                        <div key={i} className="bg-gray-100 p-2 text-xs font-mono border border-gray-300">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hire CTA */}
                  <motion.div 
                    className="bg-red-600 text-white p-4 border-2 border-black text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="font-bold text-sm mb-2">🚀 SIMILAR PROJECT NEEDED?</h4>
                    <div className="text-xs space-y-1">
                      <p>Get a custom quote</p>
                      <p className="font-bold">abdulla@example.com</p>
                      <p className="border-t border-red-400 pt-1 mt-2 text-xs">
                        FREE CONSULTATION
                      </p>
                    </div>
                  </motion.div>

                  {/* Client Review */}
                  <div className="border border-gray-400 p-3 bg-gray-50">
                    <h5 className="font-bold mb-2 text-center text-xs">CLIENT FEEDBACK</h5>
                    <div className="text-center">
                      <span className="text-yellow-500 text-lg">★★★★★</span>
                      <p className="text-xs font-serif italic mt-1">
                        "Exceptional quality and timely delivery"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-12 bg-black text-white p-8 border-2 border-black text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="font-heathergreen text-3xl font-bold mb-4">
            READY FOR YOUR PROJECT TO MAKE HEADLINES?
          </h2>
          <p className="font-serif mb-6">
            Join the roster of satisfied clients with success stories worth printing
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 font-mono text-sm hover:bg-green-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START YOUR PROJECT
            </motion.a>
            <motion.a
              href="/about"
              className="border-2 border-white px-8 py-3 font-mono text-sm hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.a>
          </div>
        </motion.div>

      </NewspaperLayout>
      <NewspaperFooter />
    </div>
  );
}