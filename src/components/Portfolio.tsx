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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-modern h-80 rounded-xl flex items-center justify-center text-8xl mb-4 cursor-pointer">
                  <span>{project.image}</span>
                </div>
                <h3 className="text-xl font-semibold text-white text-center">
                  {project.title}
                </h3>
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