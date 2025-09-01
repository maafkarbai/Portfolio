'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform Revolutionizes Online Shopping",
      subtitle: "Local Developer Creates Advanced Payment System",
      category: "TECHNOLOGY",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
      description: "A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform has increased client sales by 250% within the first quarter.",
      achievements: ["300% faster loading times", "99.9% uptime achieved", "Advanced security implementation"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management Application Boosts Team Productivity",
      subtitle: "Revolutionary Collaboration Tool Launches",
      category: "PRODUCTIVITY",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      description: "An innovative task management platform with real-time collaboration features, automated workflow optimization, and advanced reporting capabilities that have transformed how teams organize their work.",
      achievements: ["500+ active users", "40% productivity increase", "Real-time synchronization"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website Sets New Design Standards",
      subtitle: "Newspaper Theme Breaks Conventional Boundaries",
      category: "DESIGN",
      technologies: ["Next.js", "Tailwind", "Motion", "Prisma"],
      description: "This unique newspaper-themed portfolio demonstrates innovative approaches to personal branding, combining traditional print media aesthetics with modern web technologies.",
      achievements: ["Unique design concept", "Responsive layout", "Interactive elements"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-12 px-4 border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="border-b border-t border-black py-4 mb-6">
            <h2 className="font-heathergreen text-5xl font-bold tracking-wider">
              PROJECT SPOTLIGHT
            </h2>
            <p className="font-serif italic mt-2">Featured Development Stories</p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="bg-white border-2 border-black p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main article */}
                <div className="md:col-span-2 border-r border-gray-300 pr-8">
                  <div className="mb-4">
                    <span className="bg-black text-white px-3 py-1 text-xs font-mono tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heathergreen text-3xl font-bold mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <h4 className="font-serif text-lg italic mb-4 text-gray-700">
                    {project.subtitle}
                  </h4>

                  <div className="font-serif text-sm leading-relaxed space-y-3">
                    <p className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                      {project.description}
                    </p>
                    
                    <div className="bg-gray-100 p-4 border-l-4 border-black">
                      <h5 className="font-bold mb-2">Key Achievements:</h5>
                      <ul className="text-xs space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="before:content-['▸'] before:mr-2">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <a 
                      href={project.demoUrl}
                      className="bg-black text-white px-4 py-2 text-xs font-mono hover:bg-gray-800 transition-colors"
                    >
                      VIEW LIVE DEMO
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="border-2 border-black px-4 py-2 text-xs font-mono hover:bg-black hover:text-white transition-colors"
                    >
                      SOURCE CODE
                    </a>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold border-b border-black pb-2 mb-3">
                      TECHNOLOGY STACK
                    </h5>
                    <div className="space-y-2">
                      {project.technologies.map((tech, i) => (
                        <div key={i} className="bg-gray-100 p-2 text-xs font-mono">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black text-white p-4 text-center">
                    <p className="font-bold text-xs tracking-wider mb-2">
                      PROJECT STATUS
                    </p>
                    <p className="text-xs">
                      ✓ COMPLETED & DEPLOYED
                    </p>
                  </div>

                  <div className="border border-gray-300 p-3 text-center">
                    <p className="text-xs font-serif italic">
                      &ldquo;Another exceptional delivery from Farooq&rdquo;
                    </p>
                    <p className="text-xs mt-1">- Client Review</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}