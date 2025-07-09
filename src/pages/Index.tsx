import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Profile } from "@/components/Profile";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation />
      <Hero />
      <SkillsMarquee />
      <Profile />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
