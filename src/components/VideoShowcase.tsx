import React from 'react';

export function VideoShowcase() {
  const videoId = 'coVcNXWZbCw';

  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Work</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
            title="Featured Video Reel"
            className="w-full h-[600px] rounded-lg shadow-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}