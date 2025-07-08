import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "SJ",
    quote: "Analiese's design work transformed our user experience completely. Her attention to accessibility and user-centered approach is exceptional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    avatar: "MC",
    quote: "Working with Analiese was a pleasure. Her designs are not only beautiful but also practical and easy to implement.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "UX Researcher",
    avatar: "ER",
    quote: "Her understanding of user psychology and accessibility standards sets her apart. Analiese creates truly inclusive designs.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Startup Founder",
    avatar: "DT",
    quote: "Analiese helped us create a design system that scaled perfectly with our growth. Highly recommend her expertise.",
    rating: 5
  }
];

export const Testimonials = () => {
  const leftTestimonials = testimonials.slice(0, 2);
  const rightTestimonials = testimonials.slice(2, 4);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            What People Say
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 h-96 fade-in">
          {/* Left column - scrolling up */}
          <div className="marquee-fade overflow-hidden">
            <div className="vertical-marquee-up space-y-6">
              {[...leftTestimonials, ...leftTestimonials].map((testimonial, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl">
                  <blockquote className="text-white/80 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - scrolling down */}
          <div className="marquee-fade overflow-hidden">
            <div className="vertical-marquee-down space-y-6">
              {[...rightTestimonials, ...rightTestimonials].map((testimonial, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl">
                  <blockquote className="text-white/80 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};