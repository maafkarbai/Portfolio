# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development with Turbopack
npm run dev

# Build with Turbopack
npm run build

# Production server
npm run start

# Linting
npm run lint
```

## Architecture Overview

This is a Next.js 15 application with TypeScript, featuring a multi-tenant CRM/business management system. The architecture follows these key patterns:

### Technology Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with email and Google providers
- **UI**: React with Tailwind CSS v4, Radix UI components
- **Validation**: Zod schemas for API and form validation
- **Animations**: Framer Motion, GSAP, AOS, Lottie React
- **3D Graphics**: Three.js with React Three Fiber

### Database Architecture (Multi-tenant)

The application uses a multi-tenant architecture where:

- Users belong to multiple Tenants via Membership relationships
- All business data (Contacts, Deals, Projects, Notes) is scoped to a Tenant
- Prisma client is configured with custom output path: `src/generated/prisma`

Key models:

- `Tenant` - Organization/company level
- `User` - Individual users with NextAuth integration
- `Membership` - Many-to-many relationship with roles (owner, admin, member)
- `Contact`, `Deal`, `Project`, `Note` - Business entities scoped to tenants

### API Architecture

RESTful APIs following `/api/tenants/[tenantId]/[resource]` pattern:

- Tenant-scoped routes: `/api/tenants/[tenantId]/contacts`, `/api/tenants/[tenantId]/deals`, etc.
- User context: `/api/me` for current user info
- Dashboard data: `/api/dashboard/[tenantId]`

All APIs use:

- Standardized response format via `src/lib/api-response.ts` helpers
- Zod validation schemas from `src/lib/validation.ts`
- Database helpers in `src/lib/db-helpers.ts`

### Authentication & Authorization

- NextAuth.js configuration in `src/lib/auth.ts`
- JWT strategy with custom session callbacks
- Middleware in `middleware.ts` handles:
  - CORS for API routes
  - Route protection for `/dashboard/*`
  - Redirect logic between auth pages and dashboard

### Frontend Structure

- Landing page with marketing sections: hero, technologies, differentiators, footer
- Protected dashboard routes requiring authentication
- UI components in `src/components/ui/` using shadcn/ui patterns
- Custom components for business features

### Environment Configuration

Required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - NextAuth session secret
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` - OAuth credentials
- Email server configuration for magic link authentication

## Key Development Patterns

### API Route Structure

```typescript
// Standard error handling and validation
export async function POST(
  request: Request,
  { params }: { params: { tenantId: string } }
) {
  const validation = schema.safeParse(await request.json());
  if (!validation.success) {
    return validationErrorResponse(validation.error.issues);
  }
  // Business logic
  return successResponse(result);
}
```

### Database Queries

Always include tenant scoping:

```typescript
const contacts = await prisma.contact.findMany({
  where: { tenantId },
  include: { owner: true },
});
```

### Image Configuration

Next.js image optimization configured for external sources:

- DevIcons from cdn.jsdelivr.net
- Vector logos from cdn.worldvectorlogo.com
- Framer assets, Vercel assets, GitHub raw content

### UI Components

- Tailwind CSS v4 with CSS variables
- Geist font family (sans and mono)
- Component composition following Radix UI patterns
- Motion and 3D components for enhanced UX

### Security & Forms

- Google reCAPTCHA v2 integration for contact form spam protection
- React Hook Form with Zod validation for robust form handling
- Form submission with reCAPTCHA verification
- TypeScript declarations for reCAPTCHA API

### Setup Instructions

**reCAPTCHA Configuration:**
1. Get keys from [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin/)
2. Add environment variables:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   ```
3. Replace `YOUR_SITE_KEY_HERE` in contact form with actual site key
4. See `RECAPTCHA_SETUP.md` for detailed setup guide

### Color Pallete

Primary Blue: #4A90E2 (Logo, CTAs, links)
Secondary Teal: #2EC4B6 (Highlights, icons, infographics)
Accent Orange: #FF9505 (Warnings, emphasis, secondary CTAs)
Dark Neutral: #1C1C1C (Headings, footer background)
Light Neutral: #F5F5F5 (Backgrounds, cards, sections)
Pure White: #FFFFFF (Content background, whitespace)

### UI/UX Design Principles for Techlogies (A web development Agency website)

1. Clarity & Simplicity

Keep it minimal – avoid clutter, use whitespace to let content breathe.

Straightforward navigation – no more than 5–7 main menu items.

Simple messaging – tagline should say what you do in one sentence.

2. Consistency

Use a consistent color palette (2–3 main colors, 1 accent).

Stick to 1–2 fonts (one for headings, one for body).

Button styles should look the same across the site.

3. Visual Hierarchy

Headings > Subheadings > Body text for readability.

Bigger + bolder = more important (e.g., pricing plans or CTAs).

Use contrast (bright CTA button on muted background).

4. Accessibility

Ensure WCAG compliance:

Color contrast (don’t use light gray on white).

Alt text for images.

Keyboard navigation friendly.

Responsive design: must look good on mobile, tablet, desktop.

5. User Control & Feedback

Hover effects on buttons/links for feedback.

Loading indicators for forms or portfolio carousels.

Undo options for forms (e.g., editable fields before submission).

6. Consistent Flow (Conversion-Oriented UX)

Above-the-fold CTA (visible without scrolling).

Logical flow: Homepage → Services → Portfolio → Testimonials → Contact.

Reduce friction: short forms (Name, Email, Project Idea).

7. Trust Elements

Place testimonials, client logos, certifications where users decide.

Show real project screenshots instead of stock images.

Add case study storytelling (problem → solution → results)

8. Micro-Interactions & Animations

Subtle animations (fade-in, slide-up) for sections.

Hover micro-interactions (icons shift slightly, CTA highlights).

Keep them lightweight (don’t slow page speed).

### Requirements

1. Core Pages/Sections

Homepage – Quick intro, tagline, services snapshot, strong call-to-action (CTA).

About Us – Who you are, mission, team photos/bios, why clients should trust you.

Services – Detailed breakdown (e.g., Web Design, Web Apps, E-commerce, CMS, SEO, Maintenance).

Portfolio/Case Studies – Show real projects with screenshots, live links, challenges, and results.

Testimonials/Clients – Reviews, logos of companies you’ve worked with.

Blog/Insights – Articles on trends, guides, and agency updates.

Contact Page – Form, email, phone, map, and social media links.

2. Trust & Authority Builders

Certifications & Partnerships (e.g., AWS, Google Cloud, Shopify partner).

Awards & Media Mentions.

Detailed Case Studies with metrics (e.g., “Increased client’s sales by 40%”).

Process/Workflow Section – Step-by-step explanation of how you deliver projects.

3. Technical Must-Haves

Fast performance (Core Web Vitals optimized).

Responsive design (mobile-first).

SEO-ready (structured data, meta tags, sitemaps).

Security (HTTPS, trust badges if relevant).

Clear CTAs (Book a Call, Get a Quote, Start a Project).

4. Extra Conversion Boosters

Pricing Plans/Estimator – Even if rough, helps set expectations.

FAQ Section – Answer common concerns (“How long does a website take?,” “What tech stack do you use?”).

Free Resources – eBooks, checklists, or audit tools for lead generation.

Live Chat / WhatsApp integration.

5. Visual/UX Elements

Clean modern UI with your branding.

Animations/Micro-interactions (but lightweight).

Use of before/after project visuals.

Consistent color palette & typography.
