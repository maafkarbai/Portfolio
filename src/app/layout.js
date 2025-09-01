import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Temporarily commented out until font file is placed
// const heathergreen = localFont({
//   src: "./fonts/Heathergreen.otf",
//   variable: "--font-heathergreen",
//   display: "swap",
// });

export const metadata = {
  title: "Abdulla Farooq - Full-Stack Developer | Portfolio",
  description:
    "Abdulla Farooq - Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and modern web applications. Available for hire. View my projects and get in touch.",
  keywords: [
    // Core Skills & Technologies
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    
    // Technologies & Frameworks
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Express.js",
    "REST API",
    "GraphQL",
    "Socket.io",
    "Stripe Integration",
    
    // Services & Specializations
    "Web Application Development",
    "E-commerce Development",
    "Database Design",
    "API Development",
    "Responsive Web Design",
    "Modern Web Development",
    "Full-Stack Solutions",
    "Custom Web Applications",
    "SaaS Development",
    "Web Performance Optimization",
    
    // Professional
    "Freelance Developer",
    "Remote Developer",
    "Hire Developer",
    "Portfolio",
    "Web Development Services",
    "Professional Developer",
    "Experienced Developer",
    "Available for Hire",
    
    // Location & Personal
    "Qatar Developer",
    "Middle East Developer",
    "Abdulla Farooq",
    "Abdullah Farooq",
    "Portfolio Website",
    "Developer Portfolio"
  ].join(", "),
  authors: [{ name: "Abdulla Farooq", url: "https://abdullafarooq.com" }],
  creator: "Abdulla Farooq",
  publisher: "Abdulla Farooq",
  icons: {
    icon: [
      { url: "/AbdullaSVGLOGO.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: [{ url: "/AbdullaSVGLOGO.svg", type: "image/svg+xml" }],
    apple: [{ url: "/AbdullaSVGLOGO.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
