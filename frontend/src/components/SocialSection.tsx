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

  return (
    <section id="social" className="relative py-28 bg-white overflow-hidden border-t border-gray-100">
      {/* Visual background flares */}
      <div className="absolute top-1/2 right-[15%] w-80 h-80 bg-blue-50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-purple-50 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Animated subtle mesh overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full mb-4 font-mono text-[10px] uppercase text-blue-700 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            COMMUNITY DIRECTORY
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight mb-4 animate-float">
            Connect With Creative Stack Agency
          </h2>
          <p className="text-gray-600 text-sm font-normal leading-relaxed">
            Follow our design galleries, check out our raw open-source codebase commits, watch coding quick-tips, or chat with our project onboarding directors over private messaging channels.
          </p>
        </div>

        {/* Bento Grid Social Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl shadow-sm"
            >
              
              {/* Top Details bar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  
                  {/* Platform Icon */}
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors">
                    {getSocialIcon(platform.iconName, "w-5 h-5")}
                  </div>

                  {/* Followers metrics chip */}
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    {platform.statsText}
                  </span>

                </div>

                <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                  {platform.platformName}
                </h3>

                <p className="text-gray-600 text-xs leading-relaxed font-normal mt-2 mb-6">
                  {platform.description}
                </p>
              </div>

              {/* Visit Button CTA */}
              <a
                href={platform.visitUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-600 hover:text-white font-display font-semibold text-xs text-gray-700 transition-colors duration-200 text-center inline-flex items-center justify-center gap-1.5 cursor-pointer"
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
