"use client";
import {
  WeatherWidget,
  Advertisement,
  NewspaperAd,
  CrosswordTeaser,
} from "./NewspaperDecorations";

export default function NewspaperLayout({ children }) {
  return (
    <div className="newspaper-texture bg-gray-50">

      <div className="px-4 py-8 mx-auto max-w-8xl">
        <div className="grid grid-cols-12 gap-6">
          {/* Left sidebar */}
          <aside 
            className="col-span-12 space-y-6 lg:col-span-3"
            role="complementary"
            aria-label="Quick links and weather"
          >
            <WeatherWidget />

            <Advertisement />

            <nav 
              className="p-3 border border-gray-400 bg-yellow-50"
              role="navigation"
              aria-label="Quick links"
            >
              <h4 className="mb-3 text-sm font-bold">📋 QUICK LINKS</h4>
              <ul className="space-y-2 font-serif text-xs">
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center w-full gap-2 text-left transition-colors cursor-pointer hover:text-blue-600"
                    aria-label="Navigate to portfolio section"
                  >
                    📁 Portfolio Archive
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("testimonials")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center w-full gap-2 text-left transition-colors cursor-pointer hover:text-blue-600"
                    aria-label="Navigate to testimonials section"
                  >
                    💬 Client Testimonials
                  </button>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="flex items-center gap-2 transition-colors cursor-pointer hover:text-blue-600"
                    aria-label="Go to technical blog"
                  >
                    📝 Technical Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/resume-abdulla-farooq.pdf"
                    target="_blank"
                    className="flex items-center gap-2 transition-colors cursor-pointer hover:text-blue-600"
                    aria-label="Download resume PDF (opens in new tab)"
                  >
                    📄 Resume Download
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <main 
            className="col-span-12 lg:col-span-7"
            role="main"
            aria-label="Main content"
          >
            {children}
          </main>

          {/* Right sidebar */}
          <aside 
            className="col-span-12 space-y-6 lg:col-span-2"
            role="complementary"
            aria-label="Additional content and social links"
          >
            <CrosswordTeaser />

            <div className="p-4 border-2 border-black bg-blue-50">
              <h4 className="mb-3 font-bold text-center">ON THIS DAY</h4>
              <div className="space-y-2 font-serif text-xs">
                <p>
                  <strong>2019:</strong> First React project deployed
                </p>
                <p>
                  <strong>2021:</strong> Started freelancing
                </p>
                <p>
                  <strong>2023:</strong> 50th project completed
                </p>
              </div>
            </div>

            <NewspaperAd
              title="LEARN TO CODE"
              content="Master modern web development with our comprehensive tutorials."
              price="FREE RESOURCES"
            />

            <div className="p-3 border border-gray-400">
              <h4 className="mb-2 text-sm font-bold">SOCIAL TELEGRAPH</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <a 
                    href="https://github.com/maafkarbai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors hover:text-green-600"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub: Active
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <a 
                    href="https://www.linkedin.com/in/abdullafarooq/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors hover:text-blue-600"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn: Available
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
