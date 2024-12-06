import React from 'react';
import { Film, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900 to-blue-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-violet-600/20 animate-gradient-x" />
      <div className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6 group">
            <Film className="h-8 w-8 text-white group-hover:text-blue-400 transition-colors" />
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              MrCharlieReelsEdits
            </span>
          </div>
          <p className="text-gray-300 text-center mb-8">
            Transforming ideas into compelling visual stories
          </p>
          
          <div className="flex space-x-6 mb-8">
            <a
              href="https://www.instagram.com/mrcharlie_reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/Mrcharliereels/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/charles-kobi-arhin-402b17170/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} MrCharlieReelsEdits. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}