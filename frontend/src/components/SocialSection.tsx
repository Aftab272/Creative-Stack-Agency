import React from "react";
import { Sparkles, MessageCircle, Facebook, Instagram, Music, Github, Youtube, ArrowUpRight, Send, PhoneCall } from "lucide-react";
import { SOCIAL_PLATFORMS } from "../data";

export default function SocialSection() {
  
  // Custom Icon Selector mapping to inline SVGs or Lucides
  const getSocialIcon = (name: string, className: string) => {
    switch (name) {
      case "MessageCircle":
        return <MessageCircle className={className} />;
      case "Facebook":
        return <Facebook className={className} />;
      case "Instagram":
        return <Instagram className={className} />;
      case "Music":
        // Using Music for TikTok
        return <Music className={className} />;
      case "Github":
        return <Github className={className} />;
      case "Youtube":
        return <Youtube className={className} />;
      case "Send":
        return <Send className={className} />;
      case "PhoneCall":
        return <PhoneCall className={className} />;
      default:
        return <MessageCircle className={className} />;
    }
  };

  const getSocialButtonClass = (name: string) => {
    switch (name) {
      case "MessageCircle": // WhatsApp
        return "bg-[#25D366] text-white hover:bg-[#128C7E]";
      case "Facebook":
        return "bg-[#1877F2] text-white hover:bg-[#0C58C3]";
      case "Instagram":
        return "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white hover:opacity-90";
      case "Music": // TikTok
        return "bg-white text-black hover:bg-gray-200";
      case "Github":
        return "bg-[#24292e] text-white border border-white/20 hover:bg-[#1b1f23]";
      case "Youtube":
        return "bg-[#FF0000] text-white hover:bg-[#CC0000]";
      case "Send": // Telegram
        return "bg-[#0088cc] text-white hover:bg-[#0077b3]";
      case "PhoneCall":
        return "bg-yellow-500 text-black hover:bg-yellow-400";
      default:
        return "bg-yellow-500 text-black hover:bg-yellow-400";
    }
  };

  return (
    <section id="social" className="relative py-28 bg-[#0B0B0B] overflow-hidden border-t border-white/5">
      {/* Visual background flares */}
      <div className="absolute top-1/2 right-[15%] w-80 h-80 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-yellow-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Animated subtle mesh overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-4 font-mono text-[10px] uppercase text-yellow-500 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
            COMMUNITY DIRECTORY
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-4 animate-float">
            Connect With Creative Stack Agency
          </h2>
          <p className="text-gray-400 text-sm font-normal leading-relaxed">
            Follow our design galleries, check out our raw open-source codebase commits, watch coding quick-tips, or chat with our project onboarding directors over private messaging channels.
          </p>
        </div>

        {/* Bento Grid Social Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className="group relative p-6 rounded-2xl bg-[#0B0B0B] border border-white/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-[0_10px_40px_-10px_rgba(234,179,8,0.15)] shadow-xl"
            >
              
              {/* Top Details bar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  
                  {/* Platform Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-yellow-500 transition-colors">
                    {getSocialIcon(platform.iconName, "w-5 h-5")}
                  </div>

                  {/* Followers metrics chip */}
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {platform.statsText}
                  </span>

                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-yellow-500 transition-colors">
                  {platform.platformName}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed font-normal mt-2 mb-6">
                  {platform.description}
                </p>
              </div>

              {/* Visit Button CTA */}
              <a
                href={platform.visitUrl}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3 rounded-xl font-display font-bold text-xs transition-colors duration-300 text-center inline-flex items-center justify-center gap-1.5 cursor-pointer ${getSocialButtonClass(platform.iconName)}`}
              >
                {platform.buttonLabel}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
