import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
              Blog
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 fade-in">
            <a
              href="https://medium.com/@ukejeanaliese/ai-is-killing-our-planet-and-noone-seems-to-give-a-shit-4c575fa14c0c"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-modern p-8 rounded-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-white mb-4 group-hover:text-white/80 transition-colors">
                  AI is destroying our planet, and no one seems to care
                </h2>
                <p className="text-white/70 leading-relaxed">
                  An exploration of the environmental impact of artificial intelligence and our collective responsibility to address this growing concern.
                </p>
                <div className="mt-6 text-white/50 text-sm">
                  Read on Medium →
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;