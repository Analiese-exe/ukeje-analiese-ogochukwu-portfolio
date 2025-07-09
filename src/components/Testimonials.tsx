import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    quote: "Analiese's design work transformed our user experience completely. Her attention to accessibility and user-centered approach is exceptional.",
    avatar: "/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png"
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    quote: "Working with Analiese was a pleasure. Her designs are not only beautiful but also practical and easy to implement.",
    avatar: "/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Researcher", 
    quote: "Her understanding of user psychology and accessibility standards sets her apart. Analiese creates truly inclusive designs.",
    avatar: "/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png"
  },
  {
    name: "David Thompson",
    role: "Startup Founder",
    quote: "Analiese helped us create a design system that scaled perfectly with our growth. Highly recommend her expertise.",
    avatar: "/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png"
  },
  {
    name: "Lisa Wang",
    role: "Design Director",
    quote: "Outstanding work ethic and creative problem-solving skills. Analiese consistently delivers innovative solutions.",
    avatar: "/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png"
  },
  {
    name: "James Miller",
    role: "CEO at InnovateTech",
    quote: "Her collaborative approach and attention to detail made our project a huge success. Truly professional.",
    avatar: "/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) return [testimonials[currentIndex]];
    
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-6 mx-auto max-w-6xl">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
          Testimonials
        </h2>
      </div>

      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-glow"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-glow"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Testimonials grid */}
        <div className="mx-12">
          <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'} transition-all duration-500`}>
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-card p-8 rounded-2xl max-w-sm mx-auto w-full transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-white/60 text-xs">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-white/80 italic leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};