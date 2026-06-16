import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onStartProjectClick: () => void;
}

export default function Navbar({ onStartProjectClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Team", href: "#team", id: "team" },
    { label: "Courses", href: "#courses", id: "courses" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Pricing", href: "#pricing", id: "pricing" },
    { label: "Social", href: "#social", id: "social" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Blur on scroll background check
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active tab highlighting
      const scrollPosition = window.scrollY + 120;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.offsetTop - 80; // Margin to clear sticky nav height
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-agency-bg/80 backdrop-blur-md border-b border-white/5 shadow-xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo in Space Grotesk */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Professional Glowing Isometric Stack Logo */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/50 border border-white/10 shadow-lg transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-slate-900/80">
            <span className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg 
              className="w-5.5 h-5.5 text-blue-500 group-hover:scale-110 transition-transform duration-300" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Layers representing stacks and system frameworks */}
              <polygon points="12 2 2 7 12 12 22 7 12 2" className="fill-blue-500/20 stroke-blue-400 transition-colors duration-300 group-hover:fill-blue-500/30" />
              <polyline points="2 17 12 22 22 17" className="stroke-blue-500" />
              <polyline points="2 12 12 17 22 12" className="stroke-blue-400" />
            </svg>
            {/* Soft backlight glow behind logo on hover */}
            <span className="absolute -inset-1 rounded-xl bg-blue-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
            Creative Stack <span className="text-blue-500 font-medium">Agency</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-white ${
                    activeSection === item.id
                      ? "text-blue-400 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {item.label}
                  {/* Subtle moving bottom dot indicator for active tab */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Toggle Right Side */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onStartProjectClick}
            className="group relative px-5 py-2.5 rounded-lg bg-white text-black font-display font-semibold text-sm tracking-wide overflow-hidden shadow-[0_4px_20px_-4px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/10"
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full" />
            <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-300">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex lg:hidden p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-blue-400 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs z-40 bg-[#0a0a0ae6] backdrop-blur-2xl border-l border-white/10 p-8 pt-24 shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 mb-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-lg font-display font-medium tracking-wider block py-2 border-b border-white/5 hover:text-blue-400 ${
                  activeSection === item.id ? "text-blue-400 pl-2" : "text-gray-300"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setIsMenuOpen(false);
            onStartProjectClick();
          }}
          className="w-full py-3.5 text-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-display font-semibold hover:opacity-95 transition-opacity shadow-lg"
        >
          Start Your Project
        </button>
      </div>
    </nav>
  );
}
