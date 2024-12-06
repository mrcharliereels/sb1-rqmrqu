import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Creative Solutions Inc.',
    content: 'Charles transformed our marketing videos into compelling stories. His attention to detail and creative vision exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Independent Filmmaker',
    company: 'Chen Productions',
    content: 'Working with Charles was a game-changer for my short film. His technical expertise and storytelling ability brought my vision to life.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Social Media Manager',
    company: 'Digital Trends',
    content: 'The quality and turnaround time of Charles\'s work is exceptional. He consistently delivers content that performs well across all our platforms.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="h-8 w-8 text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}