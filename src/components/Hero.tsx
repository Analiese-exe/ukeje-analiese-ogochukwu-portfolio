import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight mb-6">
              Hello, I'm<br />
              <span className="text-white">Analiese,</span><br />
              <span className="text-white/80">a UX/UI Designer.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              UX/UI Designer | Passionate about creating{" "}
              <span className="text-white font-medium">inclusive digital experiences</span>
            </p>

            <Button className="btn-elevated px-8 py-4 rounded-lg font-medium text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Right: Circular Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-white/20 p-2 float">
                <img 
                  src="/lovable-uploads/7d6950df-6866-4b58-9715-463dc4e3c7ec.png" 
                  alt="Analiese" 
                  className="w-full h-full rounded-full object-cover border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};