import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Send email notification (optional)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Handle multiple recipients (comma-separated)
      const recipients = process.env.CONTACT_EMAIL 
        ? process.env.CONTACT_EMAIL.split(',').map(email => email.trim())
        : ['voilad8a@gmail.com'];

      // Send email to all recipients
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: recipients,
        subject: `🗞️ The Farooq Times - New Contact: ${name}`,
        html: `
          <div style="font-family: 'Times New Roman', serif; max-width: 600px; margin: 0 auto; border: 3px solid #000; background: #fff;">
            <div style="background: #000; color: #fff; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">📰 THE FAROOQ TIMES</h1>
              <p style="margin: 5px 0 0 0; font-style: italic;">Breaking: New Contact Form Submission</p>
            </div>
            
            <div style="padding: 30px;">
              <h2 style="border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
                NEW MESSAGE RECEIVED
              </h2>
              
              <div style="border-left: 4px solid #000; padding-left: 20px; margin: 20px 0;">
                <p><strong>👤 Contact Name:</strong> ${name}</p>
                <p><strong>📧 Email Address:</strong> ${email}</p>
                <p><strong>📅 Received:</strong> ${new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
              
              <h3 style="border-bottom: 1px solid #000; padding-bottom: 5px;">📝 Message Content:</h3>
              <div style="background: #f5f5f5; padding: 15px; border: 1px solid #ccc; margin: 10px 0;">
                <p style="line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 15px; background: #000; color: #fff; text-align: center;">
                <p style="margin: 0; font-weight: bold;">📞 QUICK RESPONSE RECOMMENDED</p>
                <p style="margin: 5px 0 0 0; font-size: 12px;">Reply to: ${email}</p>
              </div>
            </div>
            
            <div style="background: #f0f0f0; padding: 10px; text-align: center; font-size: 12px; border-top: 1px solid #ccc;">
              <p style="margin: 0;">The Farooq Times - Portfolio Contact System</p>
              <p style="margin: 5px 0 0 0; font-style: italic;">"All The Code That's Fit To Print"</p>
            </div>
          </div>
        `,
        // Plain text fallback
        text: `
THE FAROOQ TIMES - NEW CONTACT SUBMISSION

Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleDateString()}

Message:
${message}

---
Reply to: ${email}
        `
      });
    }

    return NextResponse.json(
      { message: 'Message sent successfully', id: contact.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}