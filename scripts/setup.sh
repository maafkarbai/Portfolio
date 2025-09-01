#!/bin/bash

# Portfolio Setup Script
# Sets up the development environment

set -e

echo "🎨 Setting up The Farooq Times Portfolio..."

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
  echo "❌ Bun is not installed. Please install Bun first:"
  echo "curl -fsSL https://bun.sh/install | bash"
  exit 1
fi

echo "📦 Installing dependencies..."
bun install

# Setup environment file
if [ ! -f .env ]; then
  echo "⚙️ Setting up environment variables..."
  cp .env.example .env
  echo "✅ Created .env file from template"
  echo "📝 Please update .env with your actual values"
else
  echo "✅ Environment file already exists"
fi

# Generate Prisma client
echo "🗄️  Setting up database..."
bun run db:generate

# Run initial migration
echo "🔄 Running database migrations..."
bun run db:migrate

# Seed database with sample data
echo "🌱 Seeding database..."
bun run db:seed

# Create necessary directories
echo "📁 Creating required directories..."
mkdir -p public/fonts
mkdir -p public/images
mkdir -p public/projects

echo "🎯 Setup checklist:"
echo "  ✅ Dependencies installed"
echo "  ✅ Environment configured"
echo "  ✅ Database initialized"
echo "  ✅ Sample data seeded"
echo ""
echo "📋 Next steps:"
echo "  1. Add your Heathergreen.otf font to src/app/fonts/"
echo "  2. Add your AbdullaSVGLOGO.svg to public/"
echo "  3. Add your Abdulla Image.jpeg to public/"
echo "  4. Update .env with your email settings"
echo "  5. Run 'bun dev' to start development"
echo ""
echo "🚀 Ready to develop! Run: bun dev"