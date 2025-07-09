import { Home, Briefcase, Pen, Mail } from "lucide-react";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar-3d fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-6 py-3">
      <div className="flex items-center gap-6">
        <button 
          onClick={() => scrollToSection('home')}
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Home className="w-5 h-5 text-white" />
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
        >
          <Briefcase className="w-5 h-5 text-white" />
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
        >
          <Pen className="w-5 h-5 text-white" />
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
        >
          <Mail className="w-5 h-5 text-white" />
        </button>
      </div>
    </nav>
  );
};