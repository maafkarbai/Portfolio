import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";

export const metadata = {
  title: "404 - Page Not Found | Techlogies",
  description: "The page you're looking for doesn't exist. Let's get you back on track.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] via-white to-blue-50/20">
      <Navbar variant="landing" />
      
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* 404 Illustration */}
            <div className="mb-12">
              <div className="relative">
                {/* Large 404 Number */}
                <div className="text-[200px] lg:text-[300px] font-black text-transparent bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#FF9505] bg-clip-text leading-none select-none">
                  404
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#4A90E2] rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#2EC4B6] rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#FF9505] rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-[#4A90E2]/20 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold tracking-tight text-[#1C1C1C] sm:text-6xl mb-6">
              Oops! Page Not Found
            </h1>
            <p className="text-xl leading-8 text-gray-700 mb-8">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, it happens to the best of us!
            </p>

            {/* Helpful Suggestions */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12 text-left">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 text-center">
                What can you do?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v1H8V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Check the URL</h3>
                    <p className="text-gray-600 text-sm">Make sure the web address is spelled correctly.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2EC4B6]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Try Our Search</h3>
                    <p className="text-gray-600 text-sm">Use our navigation to find what you're looking for.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF9505]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#FF9505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Contact Us</h3>
                    <p className="text-gray-600 text-sm">We're here to help you find what you need.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Go Home</h3>
                    <p className="text-gray-600 text-sm">Start fresh from our homepage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] hover:from-[#2EC4B6] hover:to-[#4A90E2] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-12 py-4 font-semibold text-lg">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                  </span>
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl px-12 py-4 font-semibold text-lg">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Support
                  </span>
                </Button>
              </Link>
            </div>

            {/* Popular Links */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-6">Popular Pages</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { name: 'Services', href: '/services' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Portfolio', href: '/#portfolio' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 bg-gray-100 hover:bg-[#4A90E2]/10 text-gray-700 hover:text-[#4A90E2] rounded-xl transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}