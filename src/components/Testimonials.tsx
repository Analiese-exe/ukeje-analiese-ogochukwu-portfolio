import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Odumuyiwa Teslim",
    role: "Collaborator & Client",
    quote: "Working with Analiese was efficient and focused. She took feedback well, delivered on time, and kept the user experience front and center. Solid collaborator."
  },
  {
    name: "Mr. Izuchukwu",
    role: "Client – CareerGenius",
    quote: "Analiese understood the assignment. The design was clean, thoughtful, and met the needs of our young audience without overcomplicating anything. Great communication throughout."
  },
  {
    name: "William",
    role: "BUCC Collaborator",
    quote: "I have had the opportunity to collaborate with Analiese Ukeje on several development projects during my time at BUCC as the lead developer. As the Lead Product Designer, she consistently demonstrated strong design capabilities and effective cross-functional teamwork. Analiese approaches projects with a thorough understanding of both user experience principles."
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
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 mx-auto max-w-6xl">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
          Testimonials
        </h2>
      </div>

      <div className="relative">
        {isMobile ? (
          // Mobile: Horizontal carousel with arrows
          <>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:shadow-lg hover:shadow-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:shadow-lg hover:shadow-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="mx-12 overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-[#1A1A1A] p-8 rounded-2xl max-w-sm mx-auto">
                      <blockquote className="text-white/80 italic leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
          </>
        ) : (
          // Desktop/Tablet: Rotating layout (center + sides)
          <div className="flex items-center justify-center gap-8">
            {/* Left card */}
            <div className="w-80 opacity-70 scale-90 transition-all duration-700 ease-in-out">
              <div className="bg-[#1A1A1A] p-6 rounded-2xl">
                <blockquote className="text-white/80 italic leading-relaxed mb-4 text-sm">
                  "{testimonials[(currentIndex + 2) % testimonials.length].quote}"
                </blockquote>
                <div className="text-white font-semibold text-base">{testimonials[(currentIndex + 2) % testimonials.length].name}</div>
                <div className="text-white/60 text-xs">{testimonials[(currentIndex + 2) % testimonials.length].role}</div>
              </div>
            </div>

            {/* Center card (main) */}
            <div className="w-96 scale-100 transition-all duration-700 ease-in-out">
              <div className="bg-[#1A1A1A] p-8 rounded-2xl">
                <blockquote className="text-white/80 italic leading-relaxed mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-white/60 text-sm">{testimonials[currentIndex].role}</div>
              </div>
            </div>

            {/* Right card */}
            <div className="w-80 opacity-70 scale-90 transition-all duration-700 ease-in-out">
              <div className="bg-[#1A1A1A] p-6 rounded-2xl">
                <blockquote className="text-white/80 italic leading-relaxed mb-4 text-sm">
                  "{testimonials[(currentIndex + 1) % testimonials.length].quote}"
                </blockquote>
                <div className="text-white font-semibold text-base">{testimonials[(currentIndex + 1) % testimonials.length].name}</div>
                <div className="text-white/60 text-xs">{testimonials[(currentIndex + 1) % testimonials.length].role}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};