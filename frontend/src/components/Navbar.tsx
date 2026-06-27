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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-black/90 backdrop-blur-md border-b border-white/5 shadow-xl"
          : "py-6 bg-black"
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
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/50 border border-white/10 shadow-lg transition-all duration-300 group-hover:border-yellow-500/30 group-hover:bg-slate-900/80">
            <span className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg
              className="w-5.5 h-5.5 text-yellow-500 group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Layers representing stacks and system frameworks */}
              <polygon points="12 2 2 7 12 12 22 7 12 2" className="fill-yellow-500/20 stroke-yellow-400 transition-colors duration-300 group-hover:fill-yellow-500/30" />
              <polyline points="2 17 12 22 22 17" className="stroke-yellow-500" />
              <polyline points="2 12 12 17 22 12" className="stroke-yellow-400" />
            </svg>
            {/* Soft backlight glow behind logo on hover */}
            <span className="absolute -inset-1 rounded-xl bg-yellow-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-yellow-400 transition-colors duration-300">
            Creative Stack <span className="text-yellow-500 font-medium">Agency</span>
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
                      ? "text-yellow-400 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {item.label}
                  {/* Subtle moving bottom dot indicator for active tab */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
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
            className="group relative px-6 py-2.5 rounded-none border border-yellow-500 bg-transparent text-yellow-500 hover:bg-yellow-500 hover:text-black font-display font-semibold text-sm tracking-wide transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300">
              GET A QUOTE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex lg:hidden p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-yellow-400 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 w-full h-[100dvh] z-[9999] bg-[#0B0B0B] p-8 pt-24 transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button at Top */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[10000]"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <ul className="flex flex-col gap-6 mb-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-lg font-display font-medium tracking-wider block py-2 border-b border-white/5 hover:text-yellow-400 ${
                  activeSection === item.id ? "text-yellow-400 pl-2" : "text-gray-300"
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
          className="w-full py-3.5 text-center rounded-none border border-yellow-500 bg-transparent hover:bg-yellow-500 text-yellow-500 hover:text-black font-display font-semibold transition-colors shadow-lg"
        >
          GET A QUOTE
        </button>
      </div>
    </nav>
  );
}
