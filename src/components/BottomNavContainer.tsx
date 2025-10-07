import { Link, useLocation } from "react-router-dom";
import { Github, Instagram, Linkedin, Home, User, Folder } from "lucide-react";

export default function BottomNavContainer() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
    { path: "/about", icon: <User className="w-5 h-5" />, label: "About" },
    { path: "/projects", icon: <Folder className="w-5 h-5" />, label: "Projects" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-between gap-8 px-8 py-4 rounded-2xl 
        bg-gradient-to-r from-[#00D4FF]/10 via-[#0072FF]/10 to-[#00D4FF]/10 
        border border-[#00D4FF]/30 backdrop-blur-md 
        shadow-[0_0_25px_rgba(0,212,255,0.2)] 
        hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] 
        transition-all duration-500">
        
        {/* Left: Brand */}
        <span className="text-white font-semibold text-lg tracking-tight select-none">
          zan4yov
        </span>

        {/* Middle: Social Icons */}
        <div className="flex items-center gap-5 text-gray-300">
          <a
            href="https://github.com/zan4yov"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D4FF] transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/razanvvr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D4FF] transition-all hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/razan-reswara-376b54326/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D4FF] transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Nav Buttons */}
        <div className="flex items-center gap-3 bg-[#0a0a0a]/70 p-2 rounded-xl border border-[#00D4FF]/20">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`p-3 rounded-lg transition-all flex items-center justify-center ${
                  isActive
                    ? "bg-[#00D4FF]/30 text-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.4)]"
                    : "hover:bg-[#00D4FF]/10 text-gray-300 hover:text-[#00D4FF]"
                }`}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
