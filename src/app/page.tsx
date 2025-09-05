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

      <WhatMakesUsDifferent />

      <FullScreenFooter />
    </div>
  );
}
