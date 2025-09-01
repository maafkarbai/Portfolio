'use client';
import { WeatherWidget, StockTicker, Advertisement, NewspaperAd, CrosswordTeaser } from './NewspaperDecorations';

export default function NewspaperLayout({ children }) {
  return (
    <div className="newspaper-texture bg-gray-50">
      {/* Stock ticker at the top */}
      <StockTicker />
      
      <div className="max-w-8xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left sidebar */}
          <aside className="col-span-12 lg:col-span-2 space-y-6">
            <WeatherWidget />
            
            <Advertisement />
            
            <NewspaperAd 
              title="WEB HOSTING"
              content="Reliable hosting solutions for developers. 99.9% uptime guaranteed."
              price="FROM $5/MONTH"
            />
            
            <div className="border border-gray-400 p-3 bg-yellow-50">
              <h4 className="font-bold text-sm mb-2">QUICK LINKS</h4>
              <ul className="text-xs space-y-1 font-serif">
                <li>• Portfolio Archive</li>
                <li>• Client Testimonials</li>
                <li>• Technical Blog</li>
                <li>• Resume Download</li>
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <main className="col-span-12 lg:col-span-8">
            {children}
          </main>

          {/* Right sidebar */}
          <aside className="col-span-12 lg:col-span-2 space-y-6">
            <CrosswordTeaser />
            
            <div className="border-2 border-black p-4 bg-blue-50">
              <h4 className="font-bold text-center mb-3">ON THIS DAY</h4>
              <div className="font-serif text-xs space-y-2">
                <p><strong>2019:</strong> First React project deployed</p>
                <p><strong>2021:</strong> Started freelancing</p>
                <p><strong>2023:</strong> 50th project completed</p>
              </div>
            </div>
            
            <NewspaperAd 
              title="LEARN TO CODE"
              content="Master modern web development with our comprehensive tutorials."
              price="FREE RESOURCES"
            />
            
            <div className="border border-gray-400 p-3">
              <h4 className="font-bold text-sm mb-2">SOCIAL TELEGRAPH</h4>
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