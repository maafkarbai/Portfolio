import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

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

    // Check if service exists (for now we'll skip this since DB migration is pending)
    // const service = await prisma.service.findUnique({
    //   where: { id: parseInt(serviceId) }
    // });

    // if (!service) {
    //   return NextResponse.json(
    //     { error: 'Service not found' },
    //     { status: 404 }
    //   );
    // }

    // For now, we'll create a booking record in a simple way
    // Once DB migration is working, we'll use proper Prisma models
    const booking = {
      serviceId: parseInt(serviceId),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      description: description.trim(),
      budget: budget || null,
      timeline: timeline || null,
      currency,
      localPrice: localPrice || null,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // For now, we'll simulate saving to database
    // In a real scenario, this would be:
    // const newBooking = await prisma.booking.create({ data: booking });

    console.log('New booking received:', booking);

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
      booking: { ...booking, id: Date.now() } // Mock ID for now
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}