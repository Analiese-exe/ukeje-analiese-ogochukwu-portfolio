const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    quote: "Analiese's design work transformed our user experience completely. Her attention to accessibility and user-centered approach is exceptional.",
    avatar: "👩‍💼"
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    quote: "Working with Analiese was a pleasure. Her designs are not only beautiful but also practical and easy to implement.",
    avatar: "👨‍💻"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Researcher",
    quote: "Her understanding of user psychology and accessibility standards sets her apart. Analiese creates truly inclusive designs.",
    avatar: "👩‍🔬"
  },
  {
    name: "David Thompson",
    role: "Startup Founder",
    quote: "Analiese helped us create a design system that scaled perfectly with our growth. Highly recommend her expertise.",
    avatar: "👨‍💼"
  },
  {
    name: "Lisa Wang",
    role: "Design Director",
    quote: "Outstanding work ethic and creative problem-solving skills. Analiese consistently delivers innovative solutions.",
    avatar: "👩‍🎨"
  },
  {
    name: "James Miller",
    role: "CEO at InnovateTech",
    quote: "Her collaborative approach and attention to detail made our project a huge success. Truly professional.",
    avatar: "👨‍💼"
  }
];

export const Testimonials = () => {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="py-20 px-6 mx-auto max-w-5xl">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
          Testimonials
        </h2>
      </div>

      {/* Desktop: Two columns of vertical marquee */}
      <div className="hidden md:block">
        <div className="flex gap-8 justify-center">
          {/* First column - moves up */}
          <div className="relative overflow-hidden h-96 marquee-fade">
            <div className="flex flex-col gap-8 animate-marquee-up">
              {[...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
                <div key={index} className="card-modern w-72 max-w-[300px] p-6 flex-shrink-0 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{testimonial.name}</div>
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

          {/* Second column - moves down */}
          <div className="relative overflow-hidden h-96 marquee-fade">
            <div className="flex flex-col gap-8 animate-marquee-down">
              {[...secondRow, ...secondRow, ...secondRow].map((testimonial, index) => (
                <div key={index} className="card-modern w-72 max-w-[300px] p-6 flex-shrink-0 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{testimonial.name}</div>
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
        </div>
      </div>

      {/* Mobile: Single horizontal marquee */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="card-modern min-w-72 p-6 flex-shrink-0 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
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
      </div>
    </section>
  );
};