# Deployment Guide

## Database Setup for Vercel

Your contact form is failing because SQLite doesn't work on Vercel's serverless environment. You need to use PostgreSQL for production.

### Option 1: Vercel Postgres (Recommended)

1. Go to your Vercel dashboard
2. Navigate to your project
3. Go to Storage → Create Database → Postgres
4. Follow the setup wizard
5. Copy the `DATABASE_URL` from the connection details
6. Add it to your project's environment variables in Vercel

### Option 2: External PostgreSQL Provider

Choose one of these providers:
- **Neon** (recommended for simplicity): https://neon.tech
- **Supabase**: https://supabase.com
- **Railway**: https://railway.app
- **PlanetScale**: https://planetscale.com

### Environment Variables to Set in Vercel

Go to your Vercel project → Settings → Environment Variables and add:

```
DATABASE_URL=postgresql://username:password@hostname:port/database
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=jubiouz8g@gmail.com
SMTP_PASS=betx omxb ryex wzlz
CONTACT_EMAIL=jubiouz8g@gmail.com,voilad8a@gmail.com
JWT_SECRET=c0ac7301edecac599c91f1c661251127
NEXTAUTH_SECRET=your-nextauth-secret-change-in-production
NEXTAUTH_URL=https://abdullafarooq.com
NEXT_PUBLIC_SITE_URL=https://abdullafarooq.com
```

### After Setting Up Database

1. The database tables will be created automatically when the first API call is made
2. Test your contact form to ensure it works
3. Check Vercel function logs if you encounter any issues

### Quick Fix Steps

1. Create a PostgreSQL database using one of the providers above
2. Copy the `DATABASE_URL` connection string
3. Add it to Vercel environment variables
4. Redeploy your project

The contact form should work after these steps are completed.