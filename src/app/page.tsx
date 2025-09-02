import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 -z-10"></div>
        <div className="mx-auto max-w-2xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-tight">
            Digital Solutions for{" "}
            <span className="text-[#4689ec] relative">
              Modern Businesses
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#4689ec]/20" viewBox="0 0 200 12" fill="currentColor">
                <path d="M0,6 Q50,0 100,6 T200,6 L200,12 L0,12 Z" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-600 max-w-prose mx-auto">
            Transform your business with cutting-edge technology solutions. We build scalable web applications, 
            manage your digital presence, and help you grow with custom CRM systems.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6 flex-col sm:flex-row">
            <Button 
              size="lg" 
              className="bg-[#4689ec] hover:bg-[#3a7bd5] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Link href="#services" className="group text-lg font-semibold leading-6 text-gray-700 hover:text-[#4689ec] transition-colors duration-200">
              Learn more 
              <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-[#4689ec] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-gray-600">
              Complete digital solutions tailored to your business needs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#4689ec]/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#4689ec]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4689ec]/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#4689ec]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
                  <p className="text-gray-600 leading-7">Custom websites and web applications built with modern technologies like Next.js, React, and Node.js.</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#4689ec]/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '150ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#4689ec]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4689ec]/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#4689ec]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">CRM Systems</h3>
                  <p className="text-gray-600 leading-7">Tailored customer relationship management systems to streamline your business operations and boost productivity.</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#4689ec]/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#4689ec]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#4689ec]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4689ec]/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#4689ec]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Strategy</h3>
                  <p className="text-gray-600 leading-7">Comprehensive digital transformation consulting to help your business thrive in the digital age.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Techlogies</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a forward-thinking technology agency specializing in creating digital solutions that drive business growth. 
              Our team combines technical expertise with strategic thinking to deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Ready to transform your business? Let's start the conversation.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-[#4689ec] hover:bg-[#3a7bd5] text-white">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo-blue-white-bg.png"
                alt="Techlogies"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-lg font-semibold text-gray-900">Techlogies</span>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              © 2024 Techlogies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
