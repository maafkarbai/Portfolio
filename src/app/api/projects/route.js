import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');

    const projects = await prisma.project.findMany({
      where: featured === 'true' ? { featured: true } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request) {
  try {
    const { title, description, imageUrl, demoUrl, githubUrl, technologies, featured } = await request.json();

    // Validate required fields
    if (!title || !description || !technologies) {
      return NextResponse.json(
        { error: 'Title, description, and technologies are required' },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        demoUrl,
        githubUrl,
        technologies,
        featured: featured || false,
      },
    });

    return NextResponse.json(
      { message: 'Project created successfully', project },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}