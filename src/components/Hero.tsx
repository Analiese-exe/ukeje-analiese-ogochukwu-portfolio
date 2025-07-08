import { Button } from "@/components/ui/button";
import { Download, Eye, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar with minimal glow */}
        <div className="mb-8 inline-block relative fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 p-1 float">
            <div className="w-full h-full rounded-full bg-transparent border border-white/10 flex items-center justify-center text-4xl md:text-5xl font-semibold text-white">
              A
            </div>
          </div>
        </div>

        {/* Name and title */}
        <div className="space-y-4 mb-8 fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white">
            Hello, I'm{" "}
            <span className="text-white">Analiese</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/70 font-light">
            a UX/UI Designer.
          </h2>
        </div>

        {/* Animated subtitle */}
        <div className="mb-12 fade-in">
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            UX/UI Designer | Passionate about creating{" "}
            <span className="text-white font-medium">inclusive digital experiences</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 fade-in">
          <Button variant="minimal" size="xl" className="w-full sm:w-auto hoverable">
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto hoverable">
            <Eye className="w-5 h-5" />
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center fade-in">
        <p className="text-sm text-white/60 mb-2">Discover My Work</p>
        <ChevronDown className="w-6 h-6 mx-auto text-white animate-bounce" />
      </div>
    </section>
  );
};