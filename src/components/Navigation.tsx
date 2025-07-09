import { Home, Briefcase, Pen, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar-3d fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-6 py-3 navbar-spacing">
      <div className="flex items-center gap-6">
        <Link 
          to="/"
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-glow ${
            location.pathname === '/' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          <Home className="w-5 h-5 text-white" />
        </Link>
        <Link 
          to="/projects"
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-glow ${
            location.pathname === '/projects' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          <Briefcase className="w-5 h-5 text-white" />
        </Link>
        <Link 
          to="/blog"
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-glow ${
            location.pathname === '/blog' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          <Pen className="w-5 h-5 text-white" />
        </Link>
        <Link 
          to="/contact"
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-glow ${
            location.pathname === '/contact' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          <Mail className="w-5 h-5 text-white" />
        </Link>
      </div>
    </nav>
  );
};