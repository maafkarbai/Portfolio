import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function NewspaperFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-black text-white py-8 px-4"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <section aria-label="About The Farooq Times">
            <h3 className="font-heathergreen text-xl font-bold mb-4">THE FAROOQ TIMES</h3>
            <p className="font-serif text-sm text-gray-300 leading-relaxed">
              Your premier source for cutting-edge web development news, project updates, 
              and digital innovation coverage.
            </p>
          </section>

          <nav aria-label="Site departments">
            <h4 className="font-bold mb-4 tracking-wider">DEPARTMENTS</h4>
            <ul className="font-serif text-sm space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer" aria-label="Go to About page">About</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors cursor-pointer" aria-label="Go to Projects page">Projects</Link></li>
              <li><Link href="/resume" className="hover:text-white transition-colors cursor-pointer" aria-label="Go to Resume page">Resume</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors cursor-pointer" aria-label="Go to Contact section">Classifieds</Link></li>
            </ul>
          </nav>

          <nav aria-label="Social media links">
            <h4 className="font-bold mb-4 tracking-wider">CONNECT</h4>
            <ul className="font-serif text-sm space-y-2 text-gray-300">
              <li>
                <a href="https://github.com/maafkarbai" target="_blank" className="hover:text-white transition-colors cursor-pointer flex items-center gap-2" aria-label="Visit GitHub profile (opens in new tab)">
                  <FaGithub size={16} className="text-white" />
                  GitHub Bureau
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/abdullafarooq" target="_blank" className="hover:text-white transition-colors cursor-pointer flex items-center gap-2" aria-label="Visit LinkedIn profile (opens in new tab)">
                  <FaLinkedin size={16} className="text-[#0A66C2]" />
                  LinkedIn Office
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors cursor-pointer flex items-center gap-2" aria-label="Visit X (Twitter) profile">
                  <FaXTwitter size={16} className="text-white" />
                  Twitter Wire
                </a>
              </li>
              <li>
                <a href="mailto:voilad8a@gmail.com" className="hover:text-white transition-colors cursor-pointer flex items-center gap-2" aria-label="Send email">
                  <FaEnvelope size={16} className="text-white" />
                  Email Telegraph
                </a>
              </li>
            </ul>
          </nav>

          <section aria-label="Services offered">
            <h4 className="font-bold mb-4 tracking-wider">SERVICES</h4>
            <ul className="font-serif text-sm space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Full-Stack Solutions</li>
              <li>Database Design</li>
              <li>API Development</li>
            </ul>
          </section>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-serif text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} The Farooq Times • All Rights Reserved</p>
              <p className="text-xs">Published daily from the digital newsroom</p>
            </div>
            
            <div className="flex items-center gap-4 text-xs">
              <span>Est. 2024</span>
              <span>•</span>
              <span>Portfolio Edition</span>
              <span>•</span>
              <span>Vol. 1</span>
            </div>
          </div>
        </div>

        {/* Final tagline */}
        <div className="text-center mt-6 pt-4 border-t border-gray-800">
          <p className="font-heathergreen text-lg italic">
&ldquo;All The Code That&rsquo;s Fit To Print&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}