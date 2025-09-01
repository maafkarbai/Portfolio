# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Next.js 15 portfolio application for Abdulla Farooq, using React 19, Tailwind CSS v4, and Turbo Pack for enhanced performance.

## Development Commands

- `bun dev` - Start development server with Turbopack
- `bun run build` - Build for production with Turbopack
- `bun start` - Start production server
- `bun run lint` - Run ESLint
- `bun run db:migrate` - Run database migrations
- `bun run db:generate` - Generate Prisma client
- `bun run db:studio` - Open Prisma Studio
- `bun run db:seed` - Seed database with sample data

## Architecture

- **Package Manager**: Bun
- **Framework**: Next.js 15 with App Router
- **Database**: SQLite with Prisma ORM
- **Styling**: Tailwind CSS v4 with PostCSS plugin
- **Animation**: Motion library for animations
- **Email**: Nodemailer for contact form notifications
- **Fonts**: Geist Sans and Geist Mono from Google Fonts, Heathergreen (custom OTF)
- **Build Tool**: Turbo Pack (enabled for both dev and build)

## Key Configuration

- ESLint uses Next.js core web vitals configuration
- PostCSS configured with Tailwind CSS v4 plugin
- Tailwind config includes custom Heathergreen font family
- Custom fonts loaded via Next.js localFont with CSS variables
- Clean Next.js configuration with no custom modifications

## Project Structure

- `src/app/` - App Router pages and layouts
- `src/app/api/` - API routes for backend functionality
- `src/app/api/contact/` - Contact form API endpoint
- `src/app/api/projects/` - Projects management API
- `src/lib/` - Utility functions and configurations
- `src/lib/prisma.js` - Prisma client singleton
- `public/fonts/` - Custom font files (Heathergreen.otf)
- `prisma/` - Database schema and migrations
- `prisma/schema.prisma` - Database schema definition
- `prisma/seed.js` - Database seeding script
- `tailwind.config.js` - Tailwind configuration with custom fonts

## Backend Features

- **Contact Form**: POST `/api/contact` - Save contact messages and send email notifications
- **Projects API**: GET/POST `/api/projects` - Manage portfolio projects
- **Database Models**: Contact and Project models with Prisma ORM
- **Email Integration**: Optional SMTP configuration for contact notifications

## Environment Setup

1. Copy `.env.example` to `.env` and configure variables
2. Run `bun run db:generate` to generate Prisma client
3. Run `bun run db:seed` to populate with sample data
4. Configure SMTP settings for email functionality (optional)

## Font Usage

- `font-sans` - Geist Sans (default)
- `font-mono` - Geist Mono (code/technical text)
- `font-heathergreen` - Heathergreen (decorative/headings)

## Notes

- Uses SQLite for development (easily switchable to PostgreSQL/MySQL)
- Email notifications require SMTP configuration
- Database automatically created on first migration
- Prisma Studio available for database management
- Custom Heathergreen font requires the .otf file in public/fonts/
