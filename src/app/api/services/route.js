import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { active: true },
      orderBy: { createdAt: 'asc' }
    });

    // Parse features JSON string back to array
    const servicesWithParsedFeatures = services.map(service => ({
      ...service,
      features: JSON.parse(service.features || '[]')
    }));

    return NextResponse.json(servicesWithParsedFeatures);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
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

    const service = await prisma.service.create({
      data: {
        name: name.trim(),
        description: description.trim(),
        basePrice,
        category,
        duration: duration?.trim() || null,
        features: JSON.stringify(features || []),
        active: true
      }
    });

    // Return service with parsed features
    const serviceWithParsedFeatures = {
      ...service,
      features: JSON.parse(service.features || '[]')
    };

    return NextResponse.json({
      message: 'Service created successfully',
      service: serviceWithParsedFeatures
    });

  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}