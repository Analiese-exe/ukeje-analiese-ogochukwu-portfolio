import { 
  Palette, 
  Users, 
  Layers, 
  Monitor, 
  Accessibility, 
  Smartphone,
  MousePointer,
  TestTube
} from "lucide-react";

const skillCategories = [
  {
    title: "Design Skills",
    skills: [
      { name: "User Interface Design", description: "Web & Mobile", icon: Monitor },
      { name: "User Experience Design", description: "User-Centered Approach", icon: Users },
      { name: "Wireframing & Prototyping", description: "From Concept to Reality", icon: Layers },
      { name: "Design Systems", description: "Component Libraries", icon: Palette }
    ]
  },
  {
    title: "Specialized Skills",
    skills: [
      { name: "Accessibility Design", description: "WCAG & ARIA", icon: Accessibility },
      { name: "Responsive Design", description: "Adaptive Layouts", icon: Smartphone },
      { name: "Interaction Design", description: "Micro-interactions", icon: MousePointer },
      { name: "Usability Testing", description: "Feedback Integration", icon: TestTube }
    ]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="glass p-6 rounded-2xl group hover:border-primary/50 hover:scale-105 transition-all duration-300 hoverable"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <skill.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};