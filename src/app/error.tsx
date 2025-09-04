"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] via-white to-red-50/20">
      <Navbar variant="landing" />
      
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Error Illustration */}
            <div className="mb-12">
              <div className="relative">
                {/* Error Icon */}
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-8">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Floating Warning Elements */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold tracking-tight text-[#1C1C1C] sm:text-6xl mb-6">
              Something Went Wrong
            </h1>
            <p className="text-xl leading-8 text-gray-700 mb-8">
              We encountered an unexpected error. Our team has been notified and is working on a fix.
            </p>

            {/* Error Details (Development Mode) */}
            {process.env.NODE_ENV === 'development' && error.message && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 text-left">
                <h2 className="text-lg font-semibold text-red-800 mb-3">Error Details:</h2>
                <code className="text-sm text-red-700 font-mono break-all">
                  {error.message}
                </code>
                {error.digest && (
                  <p className="text-sm text-red-600 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Recovery Suggestions */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12 text-left">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 text-center">
                Let's get you back on track
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Try Again</h3>
                    <p className="text-gray-600 text-sm">Sometimes a simple refresh fixes the issue.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2EC4B6]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Go Home</h3>
                    <p className="text-gray-600 text-sm">Return to our homepage and start fresh.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF9505]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#FF9505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Contact Support</h3>
                    <p className="text-gray-600 text-sm">We're here to help resolve any issues.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">Check Status</h3>
                    <p className="text-gray-600 text-sm">Visit our services page to see if this is a known issue.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={reset}
                className="bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] hover:from-[#2EC4B6] hover:to-[#4A90E2] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl px-12 py-4 font-semibold text-lg"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </span>
              </Button>

              <Link href="/">
                <Button variant="outline" className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl px-12 py-4 font-semibold text-lg">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Go Home
                  </span>
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" className="border-2 border-[#FF9505] text-[#FF9505] hover:bg-[#FF9505] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl px-12 py-4 font-semibold text-lg">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6" />
                    </svg>
                    Get Help
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}