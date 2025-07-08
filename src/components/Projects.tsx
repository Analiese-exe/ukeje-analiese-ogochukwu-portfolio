import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BUCC Crunch",
    description: "University community platform for student developers",
    tags: ["Community", "Dashboard", "Mobile Design"],
    image: "🎓"
  },
  {
    title: "Career Genius",
    description: "AI-powered career guidance and job matching platform",
    tags: ["AI", "Career", "Matching"],
    image: "🧠"
  },
  {
    title: "Unified Data Vault",
    description: "Secure data management system with intuitive interface",
    tags: ["Data", "Security", "Dashboard"],
    image: "🔐"
  },
  {
    title: "Web-Based Blood Supply",
    description: "Healthcare platform for blood donation management",
    tags: ["Healthcare", "Management", "Emergency"],
    image: "🩸"
  },
  {
    title: "Grant Management Platform",
    description: "Streamlined platform for grant applications and tracking",
    tags: ["Finance", "Management", "Forms"],
    image: "💰"
  },
  {
    title: "AI Law Chatbot",
    description: "Legal assistance chatbot with natural language processing",
    tags: ["AI", "Legal", "Chatbot"],
    image: "⚖️"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my design work across various industries and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/50 hover:scale-105 transition-all duration-300 hoverable"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl relative overflow-hidden">
                <span className="relative z-10">{project.image}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project actions */}
                <div className="flex gap-3">
                  <Button variant="glass" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="glow" size="lg" className="hoverable">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};