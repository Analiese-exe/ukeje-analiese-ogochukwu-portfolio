import { Home, Briefcase, User, Mail, Eye } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
        <div className="flex items-center gap-6">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Home className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Briefcase className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <User className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Eye className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Mail className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};