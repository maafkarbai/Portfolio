# 📰 The Farooq Times - Portfolio Website

> **"All The Code That's Fit To Print"**

A unique newspaper-themed portfolio website showcasing Abdulla Farooq's full-stack development expertise. Built with modern web technologies and featuring an innovative print media aesthetic.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-purple)](https://www.framer.com/motion/)
[![Prisma](https://img.shields.io/badge/Prisma-6.15.0-2D3748)](https://www.prisma.io/)

## 🌟 Features

### 🎨 Design & UX
- **Newspaper Theme**: Authentic vintage newspaper layout and typography
- **Responsive Design**: Mobile-first approach with newspaper-style columns
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Custom Typography**: Heathergreen font integration for headlines
- **Dark/Light Modes**: Optimized for newspaper readability

### 💼 Portfolio Sections
- **Hero Section**: Breaking news style introduction with profile image
- **About Page**: Detailed developer profile with timeline and achievements
- **Projects Showcase**: Feature articles for each project with filtering
- **Resume/CV**: Professional resume with download functionality
- **Contact Form**: Classified ads style contact section

### 🚀 Technical Features
- **Full-Stack Architecture**: Next.js 15 with App Router
- **Database Integration**: Prisma ORM with SQLite/PostgreSQL support
- **Email System**: Nodemailer integration for contact forms
- **Performance Optimized**: Turbopack, image optimization, lazy loading
- **SEO Ready**: Comprehensive meta tags and structured data
- **PWA Support**: Web app manifest and service worker ready

### 🎯 Recruiter-Focused
- **Hiring Alerts**: Prominent availability banners throughout the site
- **Quick Contact CTAs**: Easy access to contact information
- **Skills Showcase**: Detailed technical expertise sections
- **Project Metrics**: Quantified achievements and impact
- **Resume Download**: PDF resume with professional formatting

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router and Turbopack
- **UI Library**: React 19 with modern hooks and patterns
- **Styling**: Tailwind CSS v4 with custom newspaper components
- **Animations**: Framer Motion for smooth interactions
- **Typography**: Custom font loading with fallbacks
- **Icons**: Custom SVG logo integration

### Backend
- **Runtime**: Node.js with Next.js API Routes
- **Database**: Prisma ORM (SQLite dev, PostgreSQL prod)
- **Email**: Nodemailer with SMTP configuration
- **Authentication**: JWT ready (extensible)
- **Validation**: Input sanitization and error handling

### DevOps & Deployment
- **Package Manager**: Bun for fast installs and builds
- **Containerization**: Docker with multi-stage builds
- **CI/CD**: Automated deployment scripts
- **Hosting**: Vercel, Netlify, and Docker support
- **Monitoring**: Performance tracking and analytics ready

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ or Bun runtime
- Git for version control
- Database (SQLite for dev, PostgreSQL for production)

### 1. Clone & Setup
```bash
# Clone the repository
git clone https://github.com/maafkarbai/portfolio.git
cd portfolio

# Run setup script (creates .env, installs deps, sets up DB)
chmod +x scripts/setup.sh
./scripts/setup.sh

# Or manual setup:
bun install
cp .env.example .env
bun run db:generate
bun run db:migrate
bun run db:seed
```

### 2. Add Assets
```bash
# Add your custom assets
public/
  ├── AbdullaSVGLOGO.svg          # Your logo for favicon
  ├── Abdulla Image.jpeg          # Profile photo
  └── resume-abdulla-farooq.pdf   # Resume for download

src/app/fonts/
  └── Heathergreen.otf           # Custom headline font
```

### 3. Configure Environment
```bash
# Update .env with your settings
SMTP_HOST=smtp.gmail.com
SMTP_USER=voilad8a@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=voilad8a@gmail.com

# Optional: Analytics and social links
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GITHUB_URL=https://github.com/maafkarbai
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/abdullafarooq
```

### 4. Development
```bash
# Start development server
bun dev

# Open database studio
bun run db:studio

# Run linting
bun run lint

# View at http://localhost:3000
```

## 📝 Content Customization

### Personal Information
Update the following files with your details:
- `src/components/HeroSection.js` - Main introduction and bio
- `src/components/NewspaperHeader.js` - Site title and tagline
- `src/app/about/page.js` - Detailed profile information
- `src/app/resume/page.js` - Professional experience and skills

### Projects Portfolio
- Update `src/app/projects/page.js` with your actual projects
- Add project images to `public/projects/`
- Update database seed in `prisma/seed.js` with your projects

### Contact Information
- Update email addresses in environment variables
- Customize contact form in `src/components/ClassifiedsSection.js`
- Update social media links in footer and components

## 🚀 Deployment

### Quick Deploy

#### Vercel (Recommended)
```bash
# Deploy to Vercel
./scripts/deploy.sh vercel

# Or manually:
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
# Deploy to Netlify
./scripts/deploy.sh netlify

# Or manually:
npm i -g netlify-cli
netlify deploy --prod
```

#### Docker
```bash
# Build and run with Docker
./scripts/deploy.sh docker

# Or manually:
docker build -t portfolio-app .
docker run -p 3000:3000 portfolio-app
```

### Production Configuration

#### Environment Variables
```bash
# Production .env settings
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:5432/db
SITE_URL=https://yourdomain.com
NEXTAUTH_URL=https://yourdomain.com

# Email configuration
SMTP_HOST=smtp.gmail.com
SMTP_USER=voilad8a@gmail.com
SMTP_PASS=your-secure-gmail-app-password

# Security (generate strong secrets)
JWT_SECRET=your-production-jwt-secret
NEXTAUTH_SECRET=your-production-nextauth-secret
```

#### Database Migration
```bash
# Production database setup
bun run db:migrate:prod
bun run db:seed
```

## 📊 Performance & SEO

### Built-in Optimizations
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Compression**: Gzip/Brotli compression enabled
- **Caching**: Optimized caching headers and strategies

### SEO Features
- **Meta Tags**: Comprehensive meta tag configuration
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Automatic sitemap generation
- **Mobile Optimization**: Mobile-first responsive design

### Analytics Integration
```javascript
// Google Analytics 4 setup
// Add to .env:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

// Automatic tracking for:
// - Page views
// - Project views  
// - Contact form submissions
// - Resume downloads
// - Social media clicks
```

## 🎨 Customization Guide

### Color Scheme
The newspaper theme uses a classic black and white palette with accent colors:
```css
/* Primary Colors */
--newspaper-black: #000000
--newspaper-white: #ffffff
--newsprint-gray: #f5f5f5

/* Accent Colors */
--breaking-news-red: #dc2626
--hiring-alert-green: #059669
--highlight-yellow: #fbbf24
```

### Typography
- **Headlines**: Heathergreen font (custom OTF)
- **Body Text**: Geist Sans (system fallback)
- **Code/Data**: Geist Mono
- **Decorative**: Times New Roman fallback

### Layout Components
- `NewspaperHeader.js` - Masthead and navigation
- `NewspaperLayout.js` - Three-column layout with sidebars
- `NewspaperFooter.js` - Footer with newspaper styling
- `NewspaperDecorations.js` - Ads, weather, stock ticker

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

### Development Setup
```bash
# Fork and clone
git clone https://github.com/maafkarbai/portfolio.git

# Create feature branch
git checkout -b feature/your-feature

# Make changes and test
bun dev
bun run lint
bun run build

# Submit pull request
```

### Code Style
- ESLint configuration included
- Prettier formatting recommended  
- Component-based architecture
- Consistent naming conventions

## 📚 Documentation

### API Routes
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve messages (admin)
- `GET /api/projects` - Fetch projects list
- `POST /api/projects` - Create project (admin)

### Database Schema
```prisma
model Contact {
  id        Int      @id @default(autoincrement())
  name      String
  email     String  
  message   String
  createdAt DateTime @default(now())
}

model Project {
  id           Int      @id @default(autoincrement())
  title        String
  description  String
  technologies String
  demoUrl      String?
  githubUrl    String?
  featured     Boolean  @default(false)
  createdAt    DateTime @default(now())
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About

**Abdulla Farooq** - Full Stack Developer  
📧 Email: voilad8a@gmail.com  
📱 Phone: +97433209192  
💼 LinkedIn: [linkedin.com/in/abdullafarooq](https://linkedin.com/in/abdullafarooq)  
🐙 GitHub: [github.com/maafkarbai](https://github.com/maafkarbai)

---

### 🎉 Ready to Make Headlines?

This newspaper-themed portfolio stands out from typical developer portfolios and is designed to catch recruiters' attention while showcasing technical expertise through innovative design.

**[🚀 View Live Demo](https://your-portfolio-url.com)** | **[📁 View Source](https://github.com/maafkarbai/portfolio)**

---

<div align="center">
  <i>"All The Code That's Fit To Print"</i><br>
  <b>The Farooq Times - 2024</b>
</div>