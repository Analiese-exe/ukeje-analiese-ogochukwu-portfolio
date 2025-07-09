import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "Career Genius",
    image: "🧠",
    link: "https://behance.net/career-genius"
  },
  {
    title: "Ayinke Consulting Firm",
    image: "💼",
    link: "https://behance.net/ayinke-consulting"
  },
  {
    title: "Unified Data Vault",
    image: "🔐",
    link: "https://behance.net/unified-data-vault"
  },
  {
    title: "AI Legal Chatbot",
    image: "⚖️",
    link: "https://behance.net/ai-legal-chatbot"
  },
  {
    title: "BUCC Crunch",
    image: "🎓",
    link: "https://behance.net/bucc-crunch"
  },
  {
    title: "Grant Management Platform",
    image: "💰",
    link: "https://behance.net/grant-management"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
              All Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 fade-in">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="h-64 bg-white/5 rounded-2xl flex items-center justify-center text-6xl relative overflow-hidden mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                  <span className="relative z-10">{project.image}</span>
                </div>

                {/* Project title */}
                <h3 className="text-xl font-medium text-white text-center group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;