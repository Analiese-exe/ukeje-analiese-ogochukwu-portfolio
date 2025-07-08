import { Button } from "@/components/ui/button";
import { Download, Eye, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl top-1/3 -right-48 animate-pulse delay-1000"></div>
        <div className="absolute w-48 h-48 bg-primary/5 rounded-full blur-3xl bottom-1/4 left-1/4 animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar with glow ring */}
        <div className="mb-8 inline-block relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 float">
            <div className="w-full h-full rounded-full bg-card border border-primary/30 flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text">
              A
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping"></div>
        </div>

        {/* Name and title */}
        <div className="space-y-4 mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hello, I'm{" "}
            <span className="gradient-text">Analiese</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
            a UX/UI Designer.
          </h2>
        </div>

        {/* Animated subtitle */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            UX/UI Designer | Passionate about creating{" "}
            <span className="text-primary font-medium">inclusive digital experiences</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="glow" size="xl" className="w-full sm:w-auto hoverable">
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
          <Button variant="glass" size="xl" className="w-full sm:w-auto hoverable">
            <Eye className="w-5 h-5" />
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-muted-foreground mb-2">Discover My Work</p>
        <ChevronDown className="w-6 h-6 mx-auto text-primary animate-bounce" />
      </div>
    </section>
  );
};