import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BUCC Crunch",
    image: "🎓",
  },
  {
    title: "Career Genius",
    image: "🧠",
  },
  {
    title: "Unified Data Vault",
    image: "🔐",
  },
  {
    title: "AI Law Chatbot",
    image: "⚖️",
  },
  {
    title: "Community Health Manual",
    image: "🏥",
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Portfolio
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-modern h-64 rounded-xl flex items-center justify-center text-6xl mb-4 cursor-pointer">
                <span>{project.image}</span>
              </div>
              <h3 className="text-xl font-semibold text-white text-center">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center fade-in">
          <Button className="btn-outline px-8 py-3 rounded-lg font-medium">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};