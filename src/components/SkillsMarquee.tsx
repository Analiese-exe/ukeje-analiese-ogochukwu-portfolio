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

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Notion", icon: Users },
  { name: "ChatGPT", icon: Lightbulb },
  { name: "Adobe Illustrator", icon: Palette },
  { name: "Framer", icon: Layers },
  { name: "Webflow", icon: Globe },
];

export const SkillsMarquee = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="relative">
        {/* Horizontal marquee */}
        <div className="marquee-container">
          <div className="flex gap-16 marquee-track">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 group hoverable"
              >
                <div className="w-16 h-16 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <tool.icon className="w-10 h-10 text-white group-hover:scale-125 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};