const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedServices() {
  console.log("Seeding services...");

  const services = [
    {
      name: "Tech Support & Consultation",
      description:
        "Professional technical support and consultation services for your existing projects, troubleshooting, code reviews, and technical guidance.",
      basePrice: 20.0,
      category: "tech-support",
      duration: "1-2 days",
      features: JSON.stringify([
        "Code review and debugging",
        "Technical troubleshooting",
        "Performance optimization advice",
        "Best practices consultation",
        "Technology stack recommendations",
        "24-48 hour response time",
      ]),
      active: true,
    },
    {
      name: "Full-Stack Web Development",
      description:
        "Complete web application development from concept to deployment. Modern, responsive, and scalable solutions using cutting-edge technologies.",
      basePrice: 500.0,
      category: "fullstack",
      duration: "2-6 weeks",
      features: JSON.stringify([
        "Full-stack web application development",
        "Modern React/Next.js frontend",
        "Robust backend API development",
        "Database design and implementation",
        "Responsive mobile-first design",
        "Deployment and hosting setup",
        "Code documentation and handover",
        "Post-launch support included",
      ]),
      active: true,
    },
  ];

  for (const service of services) {
    const existingService = await prisma.service.findFirst({
      where: { name: service.name },
    });

    if (!existingService) {
      await prisma.service.create({
        data: service,
      });
      console.log(`✓ Created service: ${service.name}`);
    } else {
      console.log(`- Service already exists: ${service.name}`);
    }
  }

  console.log("Services seeding completed!");
}

seedServices()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
