import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

const experiences = [
  {
    title: "Lead Product Designer",
    company: "Sierra",
    location: "Lagos, Nigeria",
    period: "Sep 2024 – Present",
    highlights: [
      "✨ Designed core features for student engagement & analytics",
      "🎯 Enhanced motivation through skill tracking & visual UX",
      "📊 Improved user retention by 40% through intuitive design"
    ]
  },
  {
    title: "UI/UX Design Lead",
    company: "Rodney",
    location: "Lagos, Nigeria",
    period: "Dec 2024 – Present",
    highlights: [
      "🧠 Designed AI-powered tools for neurodiverse students",
      "♿ Emphasized accessibility and emotional UX",
      "🔧 Built comprehensive design system"
    ]
  },
  {
    title: "UI/UX Designer",
    company: "JobBeta",
    location: "Toronto, Canada",
    period: "Remote",
    highlights: [
      "🔍 Optimized interfaces with audience research",
      "🧪 Conducted usability testing with design iteration loops",
      "📱 Designed responsive mobile-first experiences"
    ]
  },
  {
    title: "Product Designer",
    company: "BUCC Dev Team",
    location: "Babcock University",
    period: "University Project",
    highlights: [
      "🎓 Led design for internal university platforms",
      "👥 Collaborated with development team",
      "🏆 Improved student engagement through better UX"
    ]
  },
  {
    title: "Product Designer",
    company: "Google Developer Groups Babcock",
    location: "Lagos, Nigeria",
    period: "Community Role",
    highlights: [
      "🛠️ Crafted interfaces for developer tools",
      "📅 Designed event management platforms",
      "🌟 Enhanced community engagement experience"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            Building exceptional digital experiences across various domains
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-50"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 group">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:scale-110">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass p-8 rounded-2xl group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-3">
                        <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};