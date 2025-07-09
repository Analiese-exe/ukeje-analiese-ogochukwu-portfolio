const tools = [
  { name: "Figma", image: "/lovable-uploads/2c86c3e5-2837-44e5-b5bc-7d1dc3c9969e.png" },
  { name: "Notion", image: "/lovable-uploads/98abe023-5937-47cc-bb4f-e613d705c5c9.png" },
  { name: "Behance", image: "/lovable-uploads/ac9b66a3-9c5c-4464-b807-66085bf5b919.png" },
  { name: "Cursor", image: "/lovable-uploads/521963ee-48e2-4117-8ac8-7ba832d56fd7.png" },
  { name: "Framer", image: "/lovable-uploads/a4292600-ffae-4527-9110-658b04fe0aeb.png" },
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
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className="w-12 h-12 object-contain group-hover:scale-125 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};