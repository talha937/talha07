'use client';

import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {portfolioData.contact.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          Built with Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
