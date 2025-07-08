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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            Feedback from colleagues and clients I've worked with
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="glass p-8 rounded-2xl text-center max-w-2xl mx-auto">
                  {/* Quote icon */}
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                  
                  {/* Quote text */}
                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        className="w-5 h-5 text-primary fill-current animate-pulse" 
                        style={{ animationDelay: `${starIndex * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center font-bold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hoverable ${
                  index === currentIndex 
                    ? 'bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};