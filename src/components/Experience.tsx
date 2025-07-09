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
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
            Experience
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-medium text-white">
                  {exp.title}
                </h3>
                <h4 className="text-lg text-white/70">
                  {exp.company} • {exp.period} • {exp.location}
                </h4>
              </div>
              
              <div className="space-y-1">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <p key={highlightIndex} className="text-white/80 leading-relaxed">
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};