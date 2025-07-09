import { Button } from "@/components/ui/button";
import { Download, Eye, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar with minimal glow */}
        <div className="mb-8 inline-block relative fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border border-white/20 p-1 float mx-auto">
            <div className="w-full h-full rounded-full bg-transparent border border-white/10 flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              A
            </div>
          </div>
        </div>

        {/* Name and title */}
        <div className="space-y-4 mb-8 fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white">
            Hello, I'm{" "}
            <span className="text-white">Analiese</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/70 font-light">
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
          <Button variant="outline" size="xl" className="w-full sm:w-auto hoverable">
            Work with me
          </Button>
          <Button variant="elevated" size="xl" className="w-full sm:w-auto hoverable">
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </div>
      </div>

    </section>
  );
};