import React from "react";
import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Dynamic mesh gradient spots */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/30 blur-[120px] transform-gpu"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.2, 0.15],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[100px] transform-gpu"
      />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}
      />
      
      {/* Subtle grid base */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
    </div>
  );
}
