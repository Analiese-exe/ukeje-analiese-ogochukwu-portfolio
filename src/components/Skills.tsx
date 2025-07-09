import { 
  Palette, 
  Users, 
  Layers, 
  Monitor, 
  Accessibility, 
  Layout,
  Smartphone
} from "lucide-react";

const skills = [
  { 
    name: "User Interface Design (Web & Mobile)", 
    icon: Smartphone,
    description: "Creating intuitive and visually appealing interfaces for web and mobile applications"
  },
  { 
    name: "User Experience Design", 
    icon: Users,
    description: "Designing user-centered experiences through research and iterative design"
  },
  { 
    name: "Wireframing & Prototyping", 
    icon: Layout,
    description: "Creating low and high-fidelity prototypes to validate design concepts"
  },
  { 
    name: "Design Systems & Component Libraries", 
    icon: Layers,
    description: "Building scalable design systems and reusable component libraries"
  },
  { 
    name: "Accessibility Design (WCAG, ARIA)", 
    icon: Accessibility,
    description: "Ensuring digital products are accessible to users with diverse abilities"
  },
  { 
    name: "Responsive & Adaptive Design", 
    icon: Monitor,
    description: "Creating designs that work seamlessly across all devices and screen sizes"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card-modern p-6 rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};