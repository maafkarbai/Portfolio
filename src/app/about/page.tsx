import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { FullScreenFooter } from "@/components/ui/full-screen-footer";

export const metadata = {
  title: "About Us - Techlogies | Technology Solutions",
  description: "Learn about our team, mission, and why clients trust Techlogies for their technology solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            About Techlogies
          </h1>
          <p className="text-xl leading-8 text-white/90 max-w-2xl mx-auto">
            We're a passionate team of technology experts dedicated to transforming businesses through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-1 bg-[#4A90E2] mb-6 rounded-full"></div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe that every business deserves access to powerful digital tools that can transform their operations and unlock their full potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-[#4A90E2] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation First</h3>
                    <p className="text-gray-600">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#2EC4B6]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-[#2EC4B6] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Client-Centric Approach</h3>
                    <p className="text-gray-600">Your success is our priority. We build solutions tailored to your unique needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#FF9505]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-[#FF9505] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality & Reliability</h3>
                    <p className="text-gray-600">We deliver robust, scalable solutions that you can depend on.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 to-[#2EC4B6]/20 rounded-2xl transform rotate-3"></div>
              <Image
                src="/Team Picture.jpg"
                alt="Techlogies Team at Work"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-[#4A90E2] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-gray-600">
              Experienced professionals passionate about technology and your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
              <p className="text-[#4A90E2] font-semibold mb-4">Lead Developer</p>
              <p className="text-gray-600 mb-6">
                Full-stack developer with 8+ years of experience in modern web technologies and cloud architecture.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#4A90E2] hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-r from-[#2EC4B6] to-[#FF9505] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Davis</h3>
              <p className="text-[#2EC4B6] font-semibold mb-4">UI/UX Designer</p>
              <p className="text-gray-600 mb-6">
                Creative designer specializing in user experience and modern interface design with a focus on accessibility.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#2EC4B6] hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-r from-[#FF9505] to-[#4A90E2] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Johnson</h3>
              <p className="text-[#FF9505] font-semibold mb-4">Project Manager</p>
              <p className="text-gray-600 mb-6">
                Experienced project manager ensuring smooth delivery and exceptional client communication throughout development.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#FF9505] hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Process
            </h2>
            <div className="w-20 h-1 bg-[#4A90E2] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-gray-600">
              A proven workflow that delivers exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A90E2] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
              <p className="text-gray-600">
                We understand your business goals, challenges, and requirements through detailed consultation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2EC4B6] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600">
                We create a comprehensive project plan with timelines, milestones, and technical specifications.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF9505] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-600">
                Our team builds your solution using modern technologies and best practices.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1C1C1C] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Launch</h3>
              <p className="text-gray-600">
                We deploy your solution and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl leading-8 text-white/90 mb-10">
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#4A90E2] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-12 py-4 font-semibold text-lg">
              <span className="flex items-center">
                Start Your Project
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </Link>
        </div>
      </section>

      <FullScreenFooter />
    </div>
  );
}