import React from "react";
import { ArrowUp, Sparkles, MessageCircle, Facebook, Instagram, Music, Github, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  // Navigation callbacks
  const handleQuickLaunch = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.offsetTop - 85;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-[#0A0A0A]/40 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      
      {/* Background soft color spotlight */}
      <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Columns Grid schema */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 border-b border-white/5 pb-16">
          
          {/* Column 1: Core profile */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <a href="#home" onClick={(e) => handleQuickLaunch(e, "home")} className="flex items-center gap-3 group cursor-pointer">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/50 border border-white/10 shadow-sm transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-slate-900/80">
                <svg 
                  className="w-4.5 h-4.5 text-blue-500" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" className="fill-blue-500/20 stroke-blue-400" />
                  <polyline points="2 17 12 22 22 17" className="stroke-blue-500" />
                  <polyline points="2 12 12 17 22 12" className="stroke-blue-400" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Creative Stack <span className="text-blue-500 font-medium">Agency</span>
              </span>
            </a>
            <p className="text-gray-400 text-xs font-light leading-relaxed max-w-xs pt-2">
              A premium, full-service digital agency helping enterprise scale and startups rise through tailored, high-performance web engineering and luxury-targeted design models.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[11px] text-white uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "Services", "Portfolio", "Team", "Process", "Pricing", "Social", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleQuickLaunch(e, item.toLowerCase())}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-xs font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services specifications */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[11px] text-white uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-gray-400">
              <li>
                <a href="#services" onClick={(e) => handleQuickLaunch(e, "services")} className="hover:text-blue-450 transition-colors">Web Apps Development</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleQuickLaunch(e, "services")} className="hover:text-blue-450 transition-colors">Custom iOS & Android</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleQuickLaunch(e, "services")} className="hover:text-blue-450 transition-colors">Headless Shopify Plus</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleQuickLaunch(e, "services")} className="hover:text-blue-450 transition-colors">Corporate UI/UX Guideline</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleQuickLaunch(e, "services")} className="hover:text-blue-450 transition-colors">Cinematic sound/video edits</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleQuickLaunch(e, "services")} className="hover:text-blue-450 transition-colors">SEO Campaign Scaling</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Links to channels */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[11px] text-white uppercase tracking-widest mb-4">
              Community Channels
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-gray-400">
              <li>
                <a href="https://whatsapp.com/channel/0029VbCVtZ7Id7nSBLYXOQ1c" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp Broadcast</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61590618728298" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Facebook Page</a>
              </li>
              <li>
                <a href="https://www.instagram.com/creativestackagency" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">Instagram Portfolio</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@creative.stack.ag" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">TikTok Lessons</a>
              </li>
              <li>
                <a href="https://github.com/creativestackagency" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Key Contacts */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[11px] text-white uppercase tracking-widest mb-4">
              Contact Station
            </h4>
            <ul className="space-y-3 text-xs font-light text-gray-400">
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-mono tracking-wider">ONBOARDING EMAIL DIRECT</span>
                <a href="mailto:maryamnawazdev7780@gmail.com" className="text-white hover:text-blue-400 transition-colors mt-0.5">
                  maryamnawazdev7780@gmail.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-mono tracking-wider">AGENCY PHONE CORE</span>
                <a href="tel:+923027434569" className="text-white hover:text-blue-400 transition-colors mt-0.5">
                  +923027434569
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-mono tracking-wider">OFFICIAL RESPONSE SLAT</span>
                <span className="text-emerald-400 font-semibold mt-0.5">Under 15 Minutes Response</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer blocks */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          {/* Logo brand & metadata */}
          <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
            <p className="text-gray-500 text-[11px] font-mono">
              &copy; {currentYear} Creative Stack Agency. All rights protected under international SLA mandates.
            </p>
            <p className="text-gray-500 text-[10px] font-sans flex items-center justify-center md:justify-start gap-1">
              Built with creativity, technology, and absolute engineering standards
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            </p>
          </div>

          {/* Social media direct logo buttons row */}
          <div className="flex items-center gap-3">
            <a href="https://whatsapp.com/channel/0029VbCVtZ7Id7nSBLYXOQ1c" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#25D366] hover:text-[#25D366] text-gray-500 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61590618728298" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#1877F2] hover:text-[#1877F2] text-gray-500 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/creativestackagency" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#E1306C] hover:text-[#E1306C] text-gray-500 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@creative.stack.ag" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 text-gray-500 transition-colors" aria-label="TikTok">
              <Music className="w-4 h-4" />
            </a>
            <a href="https://github.com/creativestackagency" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white hover:text-white text-gray-500 transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/channel/UCjXYUc0PR0s-kIZKFR1MFiw" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#FF0000] hover:text-[#FF0000] text-gray-500 transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="mailto:maryamnawazdev7780@gmail.com" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-blue-450 hover:text-blue-450 text-gray-500 transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Core Scroll to top clicker */}
          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-xl bg-white/5 hover:bg-blue-600 border border-white/5 hover:border-blue-500 text-gray-400 hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer absolute right-0 -top-16 md:static"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
