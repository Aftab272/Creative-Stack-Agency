import React from "react";
import { motion } from "motion/react";
import { Zap, Command, Cloud, Anchor, Feather, Database } from "lucide-react";

export default function ClientLogos() {
  const logos = [
    { name: "Vanguard", icon: <Command className="w-6 h-6" /> },
    { name: "Chronos", icon: <Zap className="w-6 h-6" /> },
    { name: "Aether Cloud", icon: <Cloud className="w-6 h-6" /> },
    { name: "Marinetech", icon: <Anchor className="w-6 h-6" /> },
    { name: "Feather UI", icon: <Feather className="w-6 h-6" /> },
    { name: "Core DB", icon: <Database className="w-6 h-6" /> },
  ];

  // duplicate for infinite scroll loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full relative z-10 py-10 border-y border-gray-100 bg-white overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center font-display text-sm text-gray-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
          TRUSTED BY 100+ CLIENTS
        </p>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.ul 
          className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none"
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors duration-300">
              {logo.icon}
              <span className="font-display font-black text-xl tracking-tighter opacity-80">{logo.name}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
