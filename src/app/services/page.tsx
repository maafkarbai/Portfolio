import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { FullScreenFooter } from "@/components/ui/full-screen-footer";

export const metadata = {
  title: "Services - Techlogies | Web Development, CMS, E-commerce & More",
  description: "Comprehensive technology services including web development, custom software, CRM systems, e-commerce solutions, SEO, and maintenance.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-xl leading-8 text-white/90 max-w-2xl mx-auto">
            Comprehensive technology solutions to transform your business and drive growth.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Web Development */}
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Web Development</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Custom websites and web applications built with modern technologies. From simple landing pages to complex enterprise applications.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-4"></div>
                  <span className="text-gray-700">Responsive Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#2EC4B6] rounded-full mr-4"></div>
                  <span className="text-gray-700">Modern Frameworks (Next.js, React)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FF9505] rounded-full mr-4"></div>
                  <span className="text-gray-700">Performance Optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-4"></div>
                  <span className="text-gray-700">SEO-Ready Architecture</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-500 mb-2">Starting from</p>
                <p className="text-3xl font-bold text-[#4A90E2] mb-4">$2,500</p>
                <Link href="#contact">
                  <Button className="w-full bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] hover:from-[#2EC4B6] hover:to-[#4A90E2] text-white font-semibold py-3 rounded-xl">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* E-commerce Solutions */}
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2EC4B6] to-[#FF9505] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">E-commerce Solutions</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Complete online stores with payment processing, inventory management, and customer analytics to boost your sales.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#2EC4B6] rounded-full mr-4"></div>
                  <span className="text-gray-700">Payment Gateway Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FF9505] rounded-full mr-4"></div>
                  <span className="text-gray-700">Inventory Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-4"></div>
                  <span className="text-gray-700">Analytics Dashboard</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#2EC4B6] rounded-full mr-4"></div>
                  <span className="text-gray-700">Mobile-First Design</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-500 mb-2">Starting from</p>
                <p className="text-3xl font-bold text-[#2EC4B6] mb-4">$5,000</p>
                <Link href="#contact">
                  <Button className="w-full bg-gradient-to-r from-[#2EC4B6] to-[#FF9505] hover:from-[#FF9505] hover:to-[#2EC4B6] text-white font-semibold py-3 rounded-xl">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Custom Software Development */}
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF9505] to-[#4A90E2] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom Software Development</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Tailored software solutions including CRM systems, business management tools, and enterprise applications.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FF9505] rounded-full mr-4"></div>
                  <span className="text-gray-700">CRM & ERP Systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-4"></div>
                  <span className="text-gray-700">Business Process Automation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#2EC4B6] rounded-full mr-4"></div>
                  <span className="text-gray-700">Database Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FF9505] rounded-full mr-4"></div>
                  <span className="text-gray-700">API Development</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-500 mb-2">Starting from</p>
                <p className="text-3xl font-bold text-[#FF9505] mb-4">$7,500</p>
                <Link href="#contact">
                  <Button className="w-full bg-gradient-to-r from-[#FF9505] to-[#4A90E2] hover:from-[#4A90E2] hover:to-[#FF9505] text-white font-semibold py-3 rounded-xl">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Content Management Systems */}
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1C1C1C] to-[#4A90E2] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Management Systems</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Easy-to-manage websites with powerful admin panels, perfect for businesses that need to update content regularly.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1C1C1C] rounded-full mr-4"></div>
                  <span className="text-gray-700">User-Friendly Admin Panel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-4"></div>
                  <span className="text-gray-700">Content Scheduling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#2EC4B6] rounded-full mr-4"></div>
                  <span className="text-gray-700">Media Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FF9505] rounded-full mr-4"></div>
                  <span className="text-gray-700">Multi-User Access Control</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-500 mb-2">Starting from</p>
                <p className="text-3xl font-bold text-[#1C1C1C] mb-4">$3,500</p>
                <Link href="#contact">
                  <Button className="w-full bg-gradient-to-r from-[#1C1C1C] to-[#4A90E2] hover:from-[#4A90E2] hover:to-[#1C1C1C] text-white font-semibold py-3 rounded-xl">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Additional Services
            </h2>
            <div className="w-20 h-1 bg-[#4A90E2] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-gray-600">
              Comprehensive support services to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SEO Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 bg-[#4A90E2]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
              <p className="text-gray-600 mb-6">
                Improve your search engine rankings and drive organic traffic to your website.
              </p>
              <p className="text-2xl font-bold text-[#4A90E2] mb-4">$500/month</p>
              <Link href="#contact">
                <Button variant="outline" className="w-full border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 bg-[#2EC4B6]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Keep your website secure, updated, and performing at its best with ongoing maintenance.
              </p>
              <p className="text-2xl font-bold text-[#2EC4B6] mb-4">$200/month</p>
              <Link href="#contact">
                <Button variant="outline" className="w-full border-[#2EC4B6] text-[#2EC4B6] hover:bg-[#2EC4B6] hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Consulting */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 bg-[#FF9505]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#FF9505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Strategy</h3>
              <p className="text-gray-600 mb-6">
                Strategic consulting to help you make informed technology decisions and digital transformation.
              </p>
              <p className="text-2xl font-bold text-[#FF9505] mb-4">$150/hour</p>
              <Link href="#contact">
                <Button variant="outline" className="w-full border-[#FF9505] text-[#FF9505] hover:bg-[#FF9505] hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-[#4A90E2] mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long does a website take to complete?</h3>
              <p className="text-gray-600">
                Typically, a custom website takes 4-8 weeks from start to finish. E-commerce sites and complex applications may take 8-16 weeks. We provide detailed timelines during our initial consultation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What technology stack do you use?</h3>
              <p className="text-gray-600">
                We specialize in modern technologies including Next.js, React, Node.js, PostgreSQL, and cloud platforms like AWS. We choose the best technology stack based on your specific needs and requirements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do you provide ongoing support after launch?</h3>
              <p className="text-gray-600">
                Yes! We offer comprehensive maintenance packages starting at $200/month, including security updates, performance monitoring, content updates, and technical support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Can you help with existing website improvements?</h3>
              <p className="text-gray-600">
                Absolutely! We can audit your existing website and provide recommendations for performance improvements, security updates, design refreshes, or feature additions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl leading-8 text-white/90 mb-10">
            Let's discuss your project requirements and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact">
              <Button className="bg-white text-[#4A90E2] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-12 py-4 font-semibold text-lg">
                <span className="flex items-center">
                  Get Free Quote
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A90E2] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-12 py-4 font-semibold text-lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FullScreenFooter />
    </div>
  );
}