import { NextResponse } from 'next/server';

// Mock services data - will be replaced with database once migration works
const mockServices = [
  {
    id: 1,
    name: 'Tech Support & Consultation',
    description: 'Professional technical support and consultation services for your existing projects, troubleshooting, code reviews, and technical guidance.',
    basePrice: 20.0,
    category: 'tech-support',
    duration: '1-2 days',
    features: [
      'Code review and debugging',
      'Technical troubleshooting',
      'Performance optimization advice',
      'Best practices consultation',
      'Technology stack recommendations',
      '24-48 hour response time'
    ],
    active: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Full-Stack Web Development',
    description: 'Complete web application development from concept to deployment. Modern, responsive, and scalable solutions using cutting-edge technologies.',
    basePrice: 500.0,
    category: 'fullstack',
    duration: '2-6 weeks',
    features: [
      'Full-stack web application development',
      'Modern React/Next.js frontend',
      'Robust backend API development',
      'Database design and implementation',
      'Responsive mobile-first design',
      'Deployment and hosting setup',
      'Code documentation and handover',
      'Post-launch support included'
    ],
    active: true,
    createdAt: new Date().toISOString()
  }
];

export async function GET() {
  try {
    // For now return mock data
    // Once database migration works, this will be:
    // const services = await prisma.service.findMany({
    //   where: { active: true },
    //   orderBy: { createdAt: 'asc' }
    // });

    const services = mockServices.filter(service => service.active);

    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { 
      name, 
      description, 
      basePrice, 
      category, 
      duration, 
      features 
    } = body;

    // Validation
    if (!name || !description || !basePrice || !category) {
      return NextResponse.json(
        { error: 'Missing required fields: name, description, basePrice, category' },
        { status: 400 }
      );
    }

    if (typeof basePrice !== 'number' || basePrice <= 0) {
      return NextResponse.json(
        { error: 'basePrice must be a positive number' },
        { status: 400 }
      );
    }

    if (!['tech-support', 'fullstack'].includes(category)) {
      return NextResponse.json(
        { error: 'category must be either "tech-support" or "fullstack"' },
        { status: 400 }
      );
    }

    // For now, we'll simulate creating a service
    // Once database migration works, this will be:
    // const service = await prisma.service.create({
    //   data: {
    //     name: name.trim(),
    //     description: description.trim(),
    //     basePrice,
    //     category,
    //     duration: duration?.trim() || null,
    //     features: JSON.stringify(features || []),
    //     active: true
    //   }
    // });

    const mockService = {
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      basePrice,
      category,
      duration: duration?.trim() || null,
      features: features || [],
      active: true,
      createdAt: new Date().toISOString()
    };

    console.log('New service created:', mockService);

    return NextResponse.json({
      message: 'Service created successfully',
      service: mockService
    });

  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}