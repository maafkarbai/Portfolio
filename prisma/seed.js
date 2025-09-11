const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Sample projects
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js, featuring a responsive design and smooth animations.',
      imageUrl: '/projects/portfolio.jpg',
      demoUrl: 'https://your-portfolio.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      technologies: 'Next.js, React, Tailwind CSS, Motion, Prisma',
      featured: true,
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
      imageUrl: '/projects/ecommerce.jpg',
      demoUrl: 'https://your-ecommerce.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      technologies: 'Next.js, React, Node.js, PostgreSQL, Stripe',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      imageUrl: '/projects/taskapp.jpg',
      demoUrl: 'https://your-taskapp.com',
      githubUrl: 'https://github.com/yourusername/taskapp',
      technologies: 'React, Node.js, Socket.io, MongoDB',
      featured: false,
    },
  ];

  // Create projects
  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  // Sample services
  const services = [
    {
      name: 'Tech Support & Consultation',
      description: 'Professional technical support and consultation services for your existing projects, troubleshooting, code reviews, and technical guidance.',
      basePrice: 20.0,
      category: 'tech-support',
      duration: '1-2 days',
      features: JSON.stringify([
        'Code review and debugging',
        'Technical troubleshooting',
        'Performance optimization advice',
        'Best practices consultation',
        'Technology stack recommendations',
        '24-48 hour response time'
      ]),
      active: true,
    },
    {
      name: 'Full-Stack Web Development',
      description: 'Complete web application development from concept to deployment. Modern, responsive, and scalable solutions using cutting-edge technologies.',
      basePrice: 500.0,
      category: 'fullstack',
      duration: '2-6 weeks',
      features: JSON.stringify([
        'Full-stack web application development',
        'Modern React/Next.js frontend',
        'Robust backend API development',
        'Database design and implementation',
        'Responsive mobile-first design',
        'Deployment and hosting setup',
        'Code documentation and handover',
        'Post-launch support included'
      ]),
      active: true,
    }
  ];

  // Create services
  for (const service of services) {
    await prisma.service.create({
      data: service,
    });
  }

  console.log('✅ Database seeded successfully');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });