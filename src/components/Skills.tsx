import { 
  Palette, 
  Users, 
  Layers, 
  Monitor, 
  Accessibility, 
  Globe,
  TestTube
} from "lucide-react";

const skills = [
  { name: "Figma", icon: Palette },
  { name: "Framer", icon: Layers },
  { name: "Webflow", icon: Globe },
  { name: "Adobe Illustrator", icon: Palette },
  { name: "ChatGPT", icon: Users },
  { name: "Notion", icon: Monitor },
  { name: "HTML/CSS", icon: TestTube },
  { name: "Accessibility", icon: Accessibility },
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

        <div className="flex flex-wrap justify-center gap-8 fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group hoverable"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-white/50 minimal-card">
                <skill.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};