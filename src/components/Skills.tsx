import { 
  Palette, 
  Users, 
  Layers, 
  Monitor, 
  Accessibility, 
  Globe,
  TestTube,
  Layout,
  Smartphone
} from "lucide-react";

const skills = [
  { 
    name: "User Interface Design (Web & Mobile)", 
    icon: Smartphone,
    description: "Creating intuitive interfaces for web and mobile platforms"
  },
  { 
    name: "User Experience Design", 
    icon: Users,
    description: "Designing user-centered experiences that solve real problems"
  },
  { 
    name: "Wireframing & Prototyping", 
    icon: Layout,
    description: "Building interactive prototypes and detailed wireframes"
  },
  { 
    name: "Design Systems & Component Libraries", 
    icon: Layers,
    description: "Creating scalable design systems for consistent experiences"
  },
  { 
    name: "Accessibility Design (WCAG, ARIA)", 
    icon: Accessibility,
    description: "Ensuring inclusive design for all users and abilities"
  },
  { 
    name: "Responsive & Adaptive Design", 
    icon: Monitor,
    description: "Crafting designs that work seamlessly across all devices"
  },
  { 
    name: "Interaction Design", 
    icon: Palette,
    description: "Designing meaningful interactions and micro-animations"
  },
  { 
    name: "Usability Testing & Feedback Integration", 
    icon: TestTube,
    description: "Validating designs through user testing and iteration"
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group hoverable bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-white/5">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-white/70 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};