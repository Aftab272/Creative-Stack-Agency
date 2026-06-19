import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface RepeatCTAProps {
  onStartProjectClick: () => void;
  title?: string;
  subtitle?: string;
}

export default function RepeatCTA({ 
  onStartProjectClick, 
  title = "Ready to elevate your digital presence?", 
  subtitle = "Join our exclusive roster of premium clients." 
}: RepeatCTAProps) {
  return (
    <section className="relative py-24 border-y border-white/5 bg-gradient-to-b from-agency-bg to-[#0d0d0f] overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 font-mono text-[10px] uppercase text-gray-300">
            <Sparkles className="w-3 h-3 text-blue-400" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-gray-400 font-light mb-10 max-w-xl mx-auto">
            {subtitle}
          </p>
          <button
            onClick={onStartProjectClick}
            className="interactive-hover group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-display font-semibold tracking-wide hover:shadow-[0_10px_35px_-8px_rgba(59,130,246,0.6)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            Start Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
