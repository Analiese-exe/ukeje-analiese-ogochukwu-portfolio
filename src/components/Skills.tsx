import { 
  Palette, 
  Users, 
  Layers, 
  Monitor, 
  Accessibility, 
  TestTube,
  Layout,
  Smartphone
} from "lucide-react";

const skills = [
  { 
    name: "UI Design", 
    percentage: 90,
    icon: Smartphone,
  },
  { 
    name: "UX Design", 
    percentage: 85,
    icon: Users,
  },
  { 
    name: "Wireframing & Prototyping", 
    percentage: 97,
    icon: Layout,
  },
  { 
    name: "Design Systems", 
    percentage: 90,
    icon: Layers,
  },
  { 
    name: "Accessibility Design", 
    percentage: 90,
    icon: Accessibility,
  },
  { 
    name: "Responsive Design", 
    percentage: 85,
    icon: Monitor,
  },
  { 
    name: "Interaction Design", 
    percentage: 97,
    icon: Palette,
  },
  { 
    name: "Usability Testing", 
    percentage: 90,
    icon: TestTube,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Skills
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
        </div>

        <div className="space-y-8 fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <skill.icon className="w-5 h-5 text-white" />
                  <h3 className="text-white text-lg font-medium">{skill.name}</h3>
                </div>
                <span className="text-white/60 text-sm font-medium">{skill.percentage}%</span>
              </div>
              <div className="progress-bar h-2">
                <div 
                  className="progress-fill h-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.percentage}%`,
                    transitionDelay: `${index * 0.1 + 0.5}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};