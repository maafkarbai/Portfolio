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