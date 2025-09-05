import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        port: '',
        pathname: '/logos/**',
      },
      {
        protocol: 'https',
        hostname: 'www.framer.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap']
  }
};

export default nextConfig;
