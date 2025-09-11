"use client";
import {
  WeatherWidget,
  StockTicker,
  Advertisement,
  NewspaperAd,
  CrosswordTeaser,
} from "./NewspaperDecorations";

export default function NewspaperLayout({ children }) {
  return (
    <div className="newspaper-texture bg-gray-50">
      {/* Stock ticker at the top */}
      <StockTicker />

      <div className="px-4 py-8 mx-auto max-w-8xl">
        <div className="grid grid-cols-12 gap-6">
          {/* Left sidebar */}
          <aside 
            className="col-span-12 space-y-6 lg:col-span-2"
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
            className="col-span-12 lg:col-span-8"
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
                  <span>GitHub: Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>LinkedIn: Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span>Twitter: Quiet</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
