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
    "Dubai Developer",
    "UAE Developer",
    "Pakistani Developer",
    "Cybersecurity",
    "Ethical Hacker",
    "Qatar Developer",
    "Middle East Developer",
    "Abdulla Farooq",
    "Abdullah Farooq",
    "Portfolio Website",
    "Developer Portfolio",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdulla Farooq",
    alternateName: "Abdullah Farooq",
    jobTitle: "Full-Stack Developer",
    description:
      "Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and modern web applications",
    url: "https://abdullafarooq.com",
    email: "voilad8a@gmail.com",
    telephone: "+97433209192",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Qatar",
    },
    sameAs: [
      "https://github.com/maafkarbai",
      "https://linkedin.com/in/abdullafarooq",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Database Design",
      "API Development",
      "E-commerce Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Qatar",
      },
      skills:
        "React, Next.js, Node.js, JavaScript, TypeScript, PostgreSQL, MongoDB, Tailwind CSS, API Development, Database Design",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
