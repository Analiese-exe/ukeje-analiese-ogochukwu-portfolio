import { 
  Figma, 
  Code, 
  Smartphone, 
  Palette, 
  Globe, 
  Accessibility,
  Layers,
  TestTube,
  Users,
  Lightbulb
} from "lucide-react";

const skills = [
  { name: "Figma", icon: Figma, color: "text-purple-400" },
  { name: "Adobe XD", icon: Palette, color: "text-pink-400" },
  { name: "Framer", icon: Layers, color: "text-blue-400" },
  { name: "HTML/CSS", icon: Code, color: "text-orange-400" },
  { name: "JavaScript", icon: Code, color: "text-yellow-400" },
  { name: "React", icon: Code, color: "text-cyan-400" },
  { name: "Mobile Design", icon: Smartphone, color: "text-green-400" },
  { name: "Accessibility", icon: Accessibility, color: "text-indigo-400" },
  { name: "Prototyping", icon: Lightbulb, color: "text-amber-400" },
  { name: "User Testing", icon: TestTube, color: "text-red-400" },
  { name: "Design Systems", icon: Layers, color: "text-teal-400" },
  { name: "User Research", icon: Users, color: "text-violet-400" },
];

export const SkillsMarquee = () => {
  return (
    <section className="py-16 overflow-hidden bg-card/20">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        
        {/* Marquee container */}
        <div className="flex animate-[marquee_40s_linear_infinite] hover:animate-none">
          {/* First set */}
          {skills.map((skill, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="glass p-6 rounded-2xl w-24 h-24 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50 hoverable">
                <skill.icon className={`w-8 h-8 ${skill.color} mb-2 group-hover:scale-125 transition-transform`} />
                <span className="text-xs text-muted-foreground font-medium">{skill.name}</span>
              </div>
            </div>
          ))}
          
          {/* Second set for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="glass p-6 rounded-2xl w-24 h-24 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50 hoverable">
                <skill.icon className={`w-8 h-8 ${skill.color} mb-2 group-hover:scale-125 transition-transform`} />
                <span className="text-xs text-muted-foreground font-medium">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};