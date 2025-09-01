'use client';

import Link from 'next/link';

export default function NewspaperHeader() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b-4 border-black bg-white">
      {/* Top banner with date and weather */}
      <div className="border-b border-gray-300 py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <span className="font-mono">{currentDate}</span>
          <div className="flex gap-4">
            <span>Vol. 2024 • No. 001</span>
            <span>Portfolio Edition</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="border-b border-t border-black py-2 mb-4">
            <h1 className="font-heathergreen text-6xl md:text-8xl font-bold tracking-wider">
              THE FAROOQ TIMES
            </h1>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm font-serif">
            <span className="border-l border-r border-black px-4 py-1">ESTABLISHED 2024</span>
            <span className="italic">Portfolio • Projects • Contact</span>
            <span className="border-l border-r border-black px-4 py-1">ALL THE CODE THAT&rsquo;S FIT TO PRINT</span>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-center gap-6 text-sm font-mono uppercase tracking-wider">
            <Link href="/" className="hover:underline transition-colors">Home</Link>
            <Link href="/about" className="hover:underline transition-colors">About</Link>
            <Link href="/projects" className="hover:underline transition-colors">Projects</Link>
            <Link href="/resume" className="hover:underline transition-colors">Resume</Link>
            <Link href="/#contact" className="hover:underline transition-colors">Classifieds</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}