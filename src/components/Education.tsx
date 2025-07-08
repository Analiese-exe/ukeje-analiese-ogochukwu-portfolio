import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "West African Senior School Certificate (WASSCE)",
    school: "Nigerian Turkish International College",
    location: "Ogun, Nigeria",
    period: "2015 – 2021",
    description: "Completed secondary education with a strong foundation in sciences and humanities."
  },
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Babcock University",
    location: "Ilishan Remo, Nigeria",
    period: "2021 – 2025",
    description: "Relevant coursework in Web design aesthetics and IT project management."
  }
];

export const Education = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            My Education
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-16">
            {education.map((item, index) => (
              <div key={index} className="relative flex gap-8 group">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="flex-1 glass p-8 rounded-2xl group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2 md:mb-0">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <h4 className="font-semibold">{item.school}</h4>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{item.location}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};