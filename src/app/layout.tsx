import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techlogies - Technology Solutions",
  description: "Professional technology solutions for your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#4A90E2" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scrollbar`}
      >
        {/* Skip to content link for screen readers */}
        <a 
          href="#main-content" 
          className="skip-to-content"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        
        <div id="root">
          <main id="main-content" role="main" aria-label="Main content">
            {children}
          </main>
        </div>
        
        {/* Live region for dynamic content announcements */}
        <div 
          aria-live="polite" 
          aria-atomic="true" 
          className="sr-only"
          id="live-region"
        ></div>
      </body>
    </html>
  );
}
