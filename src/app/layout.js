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
  title: "The Farooq Times - Portfolio Abdulla Farooq",
  description:
    "Abdulla Farooq's Portfolio Website - Full-Stack Developer specializing in modern web applications",
  keywords:
    "Full-Stack Developer, React, Next.js, Node.js, Portfolio, Web Development",
  authors: [{ name: "Abdulla Farooq", url: "https://abdullafarooq.dev" }],
  creator: "Abdulla Farooq",
  publisher: "The Farooq Times",
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
