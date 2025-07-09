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
  { name: "HTML", icon: TestTube },
  { name: "JavaScript", icon: TestTube },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group hoverable text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};