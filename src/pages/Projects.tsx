import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Ayinke Consulting Firm",
    description: "Consulting firm website with modern design",
    image: "/lovable-uploads/7e60dd25-b422-4889-bbc4-3eb0ba81a6da.png",
    behanceUrl: "#"
  },
  {
    title: "Unified Data Vault",
    description: "Secure data management system with intuitive interface",
    image: "/lovable-uploads/2a2d863e-77db-421f-b2d9-121d16d23c24.png",
    behanceUrl: "#"
  },
  {
    title: "AI Legal Chatbot",
    description: "Legal assistance chatbot with natural language processing",
    image: "/lovable-uploads/fe361b4c-75e8-4cae-ad2e-68c35aa30431.png",
    behanceUrl: "#"
  },
  {
    title: "Grant Management",
    description: "Streamlined platform for grant applications and tracking",
    image: "/lovable-uploads/2c992858-16d1-4af6-81b9-a9c73ad9a353.png",
    behanceUrl: "#"
  },
  {
    title: "Career Genius",
    description: "AI-powered career guidance and job matching platform",
    image: "/lovable-uploads/10b4a112-507f-4a0f-8d51-e9508f317f90.png",
    behanceUrl: "#"
  },
  {
    title: "BUCC Crunch",
    description: "University community platform for student developers",
    image: "/lovable-uploads/3732b2e1-8f8c-4f38-ab11-365c43ed268f.png",
    behanceUrl: "#"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
              All Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 fade-in max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="h-80 w-full bg-white/5 rounded-2xl overflow-hidden mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project title */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* CTA Button */}
                <a 
                  href={project.behanceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" className="px-6 py-3 rounded-lg font-medium border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
                    View Behance Case Study
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;