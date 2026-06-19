import React, { useState } from "react";

export default function LeftFloatingContact() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const socials = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      tooltip: "Official Channel",
      url: "https://whatsapp.com/channel/0029VbCVtZ7Id7nSBLYXOQ1c",
      // Emerald green gradients & glows
      color: "#25D366",
      shadow: "shadow-[0_0_20px_rgba(37,211,102,0.6)]",
      bgColor: "bg-[#25D366]",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.474 1.332 4.987l-1.354 4.945 5.06-1.328c1.458.795 3.097 1.213 4.764 1.213h.004c5.504 0 9.988-4.482 9.988-9.988C22.017 6.482 17.525 2 12.012 2zm6.208 14.18c-.27.76-1.353 1.388-1.879 1.454-.474.06-1.092.1-3.19-.773-2.682-1.11-4.412-3.832-4.545-4.01-.132-.177-1.077-1.43-1.077-2.73 0-1.3.676-1.938.917-2.193.24-.255.526-.32.702-.32.176 0 .351.001.505.008.163.007.382-.062.597.45.22.527.753 1.838.819 1.97.066.13.11.285.022.46-.088.175-.132.285-.264.437-.131.154-.277.34-.395.457-.132.13-.27.272-.116.536.154.264.685 1.13 1.472 1.828.966.86 1.777 1.127 2.03 1.25.253.122.404.102.556-.073.153-.175.656-.763.83-1.02.173-.258.35-.215.592-.125.242.09 1.53.722 1.794.853.264.13.44.197.506.31.066.113.066.653-.204 1.413z" />
        </svg>
      ),
    },
    {
      id: "facebook",
      name: "Facebook",
      tooltip: "Agency Page",
      url: "https://www.facebook.com/profile.php?id=61590618728298",
      // Royal Blue and Gloomy
      color: "#1877F2",
      shadow: "shadow-[0_0_20px_rgba(24,119,242,0.6)]",
      bgColor: "bg-[#1877F2]",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      name: "Instagram",
      tooltip: "Visual Assets",
      url: "https://www.instagram.com/creativestackagency",
      // Hot magenta
      color: "#E1306C",
      shadow: "shadow-[0_0_20px_rgba(225,48,108,0.6)]",
      bgColor: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      id: "tiktok",
      name: "TikTok",
      tooltip: "Creative Updates",
      url: "https://www.tiktok.com/@creative.stack.ag",
      // Cyan/Red retro glow
      color: "#010101",
      shadow: "shadow-[0_0_20px_rgba(0,242,234,0.5)]",
      bgColor: "bg-black border border-white/20",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.11-2.89-.68-3.98-1.71-.12-.11-.25-.24-.37-.36v7.07c.05 4.14-2.82 8.01-6.89 8.95-4.25.99-8.73-1.26-10.12-5.18-1.55-4.32.74-9.35 4.96-10.83.91-.32 1.88-.47 2.84-.46v4.04c-1.57-.12-3.14.54-4.01 1.89-.95 1.47-.79 3.52.41 4.79 1.17 1.21 3.09 1.51 4.56.71 1.05-.57 1.69-1.68 1.67-2.88l-.01-11.33z" />
        </svg>
      ),
    },
    {
      id: "youtube",
      name: "YouTube",
      tooltip: "Visual Hub",
      url: "https://www.youtube.com/channel/UCjXYUc0PR0s-kIZKFR1MFiw",
      // Intense Red
      color: "#FF0000",
      shadow: "shadow-[0_0_20px_rgba(255,0,0,0.6)]",
      bgColor: "bg-[#FF0000]",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* 1. Desktop floating rail fixed on the right margin */}
      <div
        id="desktop-floating-contact"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 animate-float"
      >
        <div className="absolute inset-0 bg-white/[0.01] blur-md rounded-2xl border border-white/5 pointer-events-none" />
        <div className="p-2 py-4 rounded-full bg-agency-bg/85 backdrop-blur-md border border-white/5 flex flex-col gap-4 shadow-2xl relative">
          
          {socials.map((platform) => {
            const isHovered = hoveredId === platform.id;
            return (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredId(platform.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group"
                style={{
                  color: isHovered ? "#fff" : "#9ca3af",
                  backgroundColor: isHovered ? platform.color : "rgba(255,255,255,0.03)",
                  boxShadow: isHovered ? `0 0 15px ${platform.color}80` : "none",
                  transform: isHovered ? "scale(1.15) translateX(-4px)" : "none"
                }}
              >
                {/* Custom Vector Icon */}
                <div className="relative z-10 transition-transform duration-300 group-hover:rotate-6">
                  {platform.svg}
                </div>

                {/* Floating caption tag appearing on left of item */}
                <span
                  className={`absolute right-14 px-3 py-1.5 rounded-lg bg-[#0a0a0add] text-white font-display text-[11px] font-semibold tracking-wide border border-white/10 shadow-lg pointer-events-none transition-all duration-300 whitespace-nowrap ${
                    isHovered ? "opacity-100 translate-x-0 visible" : "opacity-0 translate-x-4 invisible"
                  }`}
                >
                  <span className="block text-white text-right font-bold">{platform.name}</span>
                  <span className="block text-[9px] text-gray-400 text-right font-normal">{platform.tooltip}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* 2. Mobile floating contacts optimized footer overlay. 
          Combines sticky CTA and WhatsApp */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A0A0A]/90 backdrop-blur-md border-t border-white/10 p-4 flex justify-between items-center gap-3">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const contactSec = document.getElementById("contact");
            if (contactSec) {
              const topOffset = contactSec.offsetTop - 80;
              window.scrollTo({
                top: topOffset,
                behavior: "smooth"
              });
            }
          }}
          className="flex-1 text-center py-3 rounded-lg bg-blue-600 text-white font-display font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95 transition-transform"
        >
          Apply Now
        </a>
        <a
          href="https://whatsapp.com/channel/0029VbCVtZ7Id7nSBLYXOQ1c"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.4)] border border-white/20 active:scale-95 transition-transform"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.474 1.332 4.987l-1.354 4.945 5.06-1.328c1.458.795 3.097 1.213 4.764 1.213h.004c5.504 0 9.988-4.482 9.988-9.988C22.017 6.482 17.525 2 12.012 2zm6.208 14.18c-.27.76-1.353 1.388-1.879 1.454-.474.06-1.092.1-3.19-.773-2.682-1.11-4.412-3.832-4.545-4.01-.132-.177-1.077-1.43-1.077-2.73 0-1.3.676-1.938.917-2.193.24-.255.526-.32.702-.32.176 0 .351.001.505.008.163.007.382-.062.597.45.22.527.753 1.838.819 1.97.066.13.11.285.022.46-.088.175-.132.285-.264.437-.131.154-.277.34-.395.457-.132.13-.27.272-.116.536.154.264.685 1.13 1.472 1.828.966.86 1.777 1.127 2.03 1.25.253.122.404.102.556-.073.153-.175.656-.763.83-1.02.173-.258.35-.215.592-.125.242.09 1.53.722 1.794.853.264.13.44.197.506.31.066.113.066.653-.204 1.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}
