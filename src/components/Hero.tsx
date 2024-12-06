import React from 'react';
import { ChevronDown } from 'lucide-react';
import { getYouTubeThumbnail } from '../utils/youtube';

export function Hero() {
  const youtubeUrl = 'https://youtu.be/coVcNXWZbCw?si=tKrVeiAScpnWkW5B';
  const thumbnailUrl = getYouTubeThumbnail(youtubeUrl);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Crafting Visual Stories
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Professional video editing that brings your vision to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full transition-colors"
          >
            Let's Collaborate
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}