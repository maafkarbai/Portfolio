import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        service: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { 
      serviceId, 
      name, 
      email, 
      phone, 
      description, 
      budget, 
      timeline, 
      currency = 'USD',
      localPrice 
    } = body;

    // Validation
    if (!serviceId || !name || !email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields: serviceId, name, email, description' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if service exists
    const service = await prisma.service.findUnique({
      where: { id: parseInt(serviceId) }
    });

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    // Create booking record using Prisma
    const newBooking = await prisma.booking.create({
      data: {
        serviceId: parseInt(serviceId),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        description: description.trim(),
        budget: budget || null,
        timeline: timeline || null,
        currency,
        localPrice: localPrice || null,
        status: 'pending'
      },
      include: {
        service: true
      }
    });

    // Send email notification (optional - you can implement this later)
    try {
      // You can add email notification logic here using nodemailer
      // similar to the contact form
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the booking if email fails
    }

    return NextResponse.json({
      message: 'Booking submitted successfully',
      booking: newBooking
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}