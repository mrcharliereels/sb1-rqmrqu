import React from 'react';
import { Video, Palette, Sparkles, Globe } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional editing for commercials, short films, and social media content.',
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Expert color correction and grading to enhance visual appeal.',
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Creative motion graphics and visual effects to elevate your content.',
  },
  {
    icon: Globe,
    title: 'Remote Collaboration',
    description: 'Seamless workflow with clients worldwide, ensuring timely delivery.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}