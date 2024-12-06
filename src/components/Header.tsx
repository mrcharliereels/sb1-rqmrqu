import React from 'react';
import { Menu, X, Film } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-blue-600/10 to-violet-600/10 animate-gradient-x" />
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 group">
            <Film className="h-8 w-8 text-white group-hover:text-blue-400 transition-colors" />
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              MrCharlieReelsEdits
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-blue-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-white hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}