import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FullScreenFooter } from "@/components/ui/full-screen-footer";
import { WhatMakesUsDifferent } from "@/components/ui/what-makes-us-different";
import { TechnologiesSection } from "@/components/ui/technologies-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="landing" />

      <HeroSection />

      {/* Services Section */}
      <section
        id="services"
        className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-[#4689ec] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-gray-600">
              Complete digital solutions tailored to your business needs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <Link
                href="#contact"
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#4689ec]/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#4689ec]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4689ec]/20 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[#4689ec]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Web Development
                  </h3>
                  <p className="text-gray-600 leading-7 mb-6">
                    Custom websites and web applications built with modern
                    technologies like Next.js, React, and Node.js.
                  </p>
                  <div className="flex items-center text-[#4689ec] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Order Now</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link
                href="#contact"
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#4689ec]/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: "150ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#4689ec]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4689ec]/20 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[#4689ec]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    CRM Systems
                  </h3>
                  <p className="text-gray-600 leading-7 mb-6">
                    Tailored customer relationship management systems to
                    streamline your business operations and boost productivity.
                  </p>
                  <div className="flex items-center text-[#4689ec] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Order Now</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link
                href="#contact"
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#4689ec]/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: "300ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#4689ec]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4689ec]/20 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[#4689ec]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Digital Strategy
                  </h3>
                  <p className="text-gray-600 leading-7 mb-6">
                    Comprehensive digital transformation consulting to help your
                    business thrive in the digital age.
                  </p>
                  <div className="flex items-center text-[#4689ec] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Order Now</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 sm:py-32 bg-gradient-to-r from-gray-50 via-white to-blue-50/20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-fade-in">
              <div className="w-20 h-1 bg-[#4689ec] mb-6 rounded-full"></div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                About Techlogies
              </h2>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                We are a forward-thinking technology agency specializing in
                creating digital solutions that drive business growth. Our team
                combines technical expertise with strategic thinking to deliver
                results that matter.
              </p>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                With years of experience in web development, CRM systems, and
                digital strategy, we help businesses transform their ideas into
                powerful digital experiences that engage customers and drive
                success.
              </p>
              <Link href="#contact">
                <Button className="bg-gradient-to-r from-[#4689ec] to-[#3a7bd5] hover:from-[#3a7bd5] hover:to-[#4689ec] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-10 py-4 font-semibold text-lg">
                  <span className="flex items-center">
                    Let's Work Together
                    <svg
                      className="w-5 h-5 ml-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>

            {/* Right Side - Team Picture */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4689ec]/20 to-[#3a7bd5]/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative">
                  <Image
                    src="/Team%20Picture.jpg"
                    alt="Techlogies Team"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-lg">
                      Our Amazing Team
                    </p>
                    <p className="text-white/80 text-sm">
                      Ready to bring your vision to life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechnologiesSection />

      {/* Portfolio/Case Studies Section */}
      <section
        id="portfolio"
        className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Portfolio
            </h2>
            <div className="w-20 h-1 bg-[#4A90E2] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-gray-600 mb-16">
              Real projects, real results. See how we've helped businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Case Study 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-[#4A90E2]/10 to-[#2EC4B6]/10 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] opacity-90"></div>
                <div className="relative text-white text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <p className="font-semibold">E-commerce Platform</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Modern E-commerce Solution
              </h3>
              <p className="text-gray-600 mb-6">
                Built a complete e-commerce platform with custom inventory
                management, resulting in 40% increase in online sales and
                improved customer experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] text-sm rounded-full font-medium">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-[#2EC4B6]/10 text-[#2EC4B6] text-sm rounded-full font-medium">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-[#FF9505]/10 text-[#FF9505] text-sm rounded-full font-medium">
                  Stripe
                </span>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500 mb-2">Results:</p>
                <p className="text-[#2EC4B6] font-semibold">
                  +40% Sales Increase • +60% User Engagement
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-[#2EC4B6]/10 to-[#FF9505]/10 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#FF9505] opacity-90"></div>
                <div className="relative text-white text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="font-semibold">CRM System</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Custom CRM Platform
              </h3>
              <p className="text-gray-600 mb-6">
                Developed a comprehensive CRM system with automated workflows,
                reducing manual tasks by 50% and improving customer retention by
                25%.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] text-sm rounded-full font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-[#2EC4B6]/10 text-[#2EC4B6] text-sm rounded-full font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-[#FF9505]/10 text-[#FF9505] text-sm rounded-full font-medium">
                  MongoDB
                </span>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500 mb-2">Results:</p>
                <p className="text-[#2EC4B6] font-semibold">
                  -50% Manual Tasks • +25% Customer Retention
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="#contact">
              <Button className="bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] hover:from-[#2EC4B6] hover:to-[#4A90E2] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-10 py-4 font-semibold text-lg">
                <span className="flex items-center">
                  View More Projects
                  <svg
                    className="w-5 h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-gray-50 via-white to-blue-50/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-[#4A90E2] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-gray-600 mb-16">
              Don't just take our word for it. Here's what our clients think.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Techlogies transformed our online presence completely. The
                e-commerce platform they built increased our sales by 40% within
                the first quarter."
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">CEO, Fashion Forward</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The CRM system they developed streamlined our entire workflow.
                We've reduced manual tasks by 50% and our team is more
                productive than ever."
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-500">
                  Operations Manager, Tech Solutions Inc
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Professional, reliable, and results-driven. Techlogies
                delivered exactly what we needed, on time and within budget.
                Highly recommended!"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                <p className="text-sm text-gray-500">
                  Founder, Digital Marketing Pro
                </p>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="border-t border-gray-200 pt-16">
            <p className="text-center text-gray-500 mb-8 font-medium">
              Trusted by leading companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              <div className="flex justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">
                    CLIENT 1
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">
                    CLIENT 2
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">
                    CLIENT 3
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">
                    CLIENT 4
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">
                    CLIENT 5
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">
                    CLIENT 6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatMakesUsDifferent />

      {/* Free Resources Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Free Resources
            </h2>
            <div className="w-20 h-1 bg-[#4A90E2] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-gray-600">
              Helpful tools and guides to boost your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Audit Tool */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4A90E2]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#4A90E2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Free Website Audit
              </h3>
              <p className="text-gray-600 mb-6">
                Get a comprehensive analysis of your website's performance, SEO,
                and user experience.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] hover:from-[#2EC4B6] hover:to-[#4A90E2] text-white font-semibold py-3 rounded-xl">
                  Get Free Audit
                </Button>
              </Link>
            </div>

            {/* Development Checklist */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#2EC4B6]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#2EC4B6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Website Launch Checklist
              </h3>
              <p className="text-gray-600 mb-6">
                A comprehensive checklist to ensure your website is ready for
                launch and optimized for success.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full border-[#2EC4B6] text-[#2EC4B6] hover:bg-[#2EC4B6] hover:text-white py-3 rounded-xl"
                >
                  Download Free
                </Button>
              </Link>
            </div>

            {/* ROI Calculator */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#FF9505]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#FF9505]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Website ROI Calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Calculate the potential return on investment for your new
                website or e-commerce platform.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full border-[#FF9505] text-[#FF9505] hover:bg-[#FF9505] hover:text-white py-3 rounded-xl"
                >
                  Use Calculator
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want more resources? Check out our blog for the latest insights.
            </p>
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-8 py-3 rounded-xl font-semibold"
              >
                Visit Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FullScreenFooter />
    </div>
  );
}
