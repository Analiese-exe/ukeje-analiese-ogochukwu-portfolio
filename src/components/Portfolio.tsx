import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    title: "AI Law Chatbot",
    image: "⚖️",
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
        </div>

        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-modern h-96 w-full rounded-xl flex items-center justify-center text-8xl mb-6 cursor-pointer hover:scale-105 transition-all duration-300">
                  <span>{project.image}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <Button className="btn-elevated px-6 py-3 rounded-lg font-medium">
                  View Behance Case Study
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center fade-in">
          <Link to="/projects">
            <Button className="btn-outline px-8 py-3 rounded-lg font-medium">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};