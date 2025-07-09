import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-24">
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 inline-block relative fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-white/20 p-1 mx-auto">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-medium text-white shadow-inner">
              A
            </div>
          </div>
        </div>

        {/* Name and title */}
        <div className="space-y-4 mb-8 fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-tight">
            Hello, I'm<br />
            <span className="text-white">Analiese,</span><br />
            <span className="text-white/80">a UX/UI Designer.</span>
          </h1>
        </div>

        {/* Animated subtitle */}
        <div className="mb-12 fade-in">
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            UX/UI Designer | Passionate about creating{" "}
            <span className="text-white font-medium">inclusive digital experiences</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 fade-in">
          <Button className="btn-outline w-full sm:w-auto px-8 py-3 rounded-lg font-medium">
            Work with me
          </Button>
          <Button className="btn-elevated w-full sm:w-auto px-8 py-3 rounded-lg font-medium">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};