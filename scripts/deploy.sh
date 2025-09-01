#!/bin/bash

# Portfolio Deployment Script
# Supports multiple deployment targets

set -e

echo "🚀 Starting deployment process..."

# Check if environment is specified
if [ -z "$1" ]; then
  echo "❌ Please specify deployment target: vercel, netlify, or docker"
  echo "Usage: ./scripts/deploy.sh [vercel|netlify|docker]"
  exit 1
fi

DEPLOY_TARGET=$1

# Pre-deployment checks
echo "🔍 Running pre-deployment checks..."

# Check if .env file exists
if [ ! -f .env ]; then
  echo "⚠️  No .env file found. Copying from .env.example"
  cp .env.example .env
  echo "📝 Please update .env with your production values"
fi

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Generate Prisma client
echo "🗄️  Generating Prisma client..."
bun run db:generate

# Run linting
echo "🧹 Running linter..."
bun run lint

# Build the project
echo "🏗️  Building project..."
bun run build

# Run deployment based on target
case $DEPLOY_TARGET in
  "vercel")
    echo "🔷 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
      vercel --prod
    else
      echo "❌ Vercel CLI not installed. Install with: npm i -g vercel"
      exit 1
    fi
    ;;
  
  "netlify")
    echo "🟢 Deploying to Netlify..."
    if command -v netlify &> /dev/null; then
      netlify deploy --prod --dir=.next
    else
      echo "❌ Netlify CLI not installed. Install with: npm i -g netlify-cli"
      exit 1
    fi
    ;;
  
  "docker")
    echo "🐳 Building Docker container..."
    docker build -t portfolio-app .
    echo "✅ Docker image built successfully!"
    echo "🚀 Run with: docker run -p 3000:3000 portfolio-app"
    ;;
  
  *)
    echo "❌ Unknown deployment target: $DEPLOY_TARGET"
    echo "Supported targets: vercel, netlify, docker"
    exit 1
    ;;
esac

echo "✅ Deployment completed successfully!"
echo "🎉 Your portfolio is now live!"