import React, { useState } from "react";
import { Sparkles, Compass, Search, Award, Cpu, CheckCircle, Zap, ShieldAlert, ArrowDown } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export default function ProcessSection() {
  const [activeAccordionId, setActiveAccordionId] = useState<string>("01");

  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "Search": return <Search className={className} />;
      case "Compass": return <Compass className={className} />;
      case "Award": return <Award className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "CheckCircle": return <CheckCircle className={className} />;
      case "Zap": return <Zap className={className} />;
      default: return <Search className={className} />;
    }
  };

  return (
    <section id="process" className="relative py-28 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background shadows */}
      <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 font-mono text-[10px] uppercase text-blue-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            METHODOLOGY
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Our Operational Blueprint<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            How we translate high-status enterprise requirements into rapid live deployment and continuous marketing gains. Explore our detailed execution workflow below.
          </p>
        </div>

        {/* Timeline Grid (Alternating / Sequential list with Active Accordion details) */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          
          {/* Animated vertical connecting beam absolute element */}
          <div className="absolute left-[0px] top-6 bottom-16 w-[1.5px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 z-0 pointer-events-none opacity-80" />

          {PROCESS_STEPS.map((step) => {
            const isOpen = activeAccordionId === step.number;
            return (
              <div
                key={step.number}
                className="relative z-10 group"
              >
                {/* Micro Pulsing Side Node */}
                <span
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-black flex items-center justify-center transition-all duration-300 z-20 ${
                    isOpen
                      ? "border-blue-400 scale-125 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                      : "border-white/20 group-hover:border-blue-400/50"
                  }`}
                >
                  {isOpen && <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />}
                </span>

                {/* Step Body Capsule */}
                <div
                  onClick={() => setActiveAccordionId(step.number)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#0c0c0ced] border-blue-500/30 shadow-2xl shadow-blue-500/5"
                      : "bg-[#060606cf] border-white/5 hover:border-white/15"
                  }`}
                >
                  
                  {/* Summary Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      
                      {/* Big Monospace Step Number */}
                      <span className="font-display font-bold text-2xl text-blue-500/40 font-mono tracking-tight">
                        {step.number}
                      </span>

                      {/* Micro Icon */}
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors">
                        {getIcon(step.iconName, "w-4 h-4")}
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                          {step.title}
                        </h3>
                        <span className="sm:hidden block font-mono text-[9px] text-[#3b82f6] tracking-widest mt-0.5">{step.duration}</span>
                      </div>

                    </div>

                    <div className="flex items-center gap-4">
                      {/* Desktop tag mapping block duration */}
                      <span className="hidden sm:inline-block font-mono text-[9px] text-gray-500 bg-white/5 px-2.5 py-1 rounded border border-white/5 tracking-wider">
                        {step.duration.toUpperCase()}
                      </span>
                      <ArrowDown
                        className={`w-4 h-4 text-gray-500 hover:text-white transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Progressive expanding content details paragraph */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-xs font-light leading-relaxed border-t border-white/5 pt-4 pl-0.5 max-w-xl">
                      {step.description}
                    </p>

                    {/* Operational Insight Check */}
                    <div className="mt-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[8px] font-mono text-[#3b82f6] tracking-wider uppercase font-bold">OPERATIONAL INSIGHTS:</span>
                        <span className="block text-[11px] text-gray-300 mt-1 font-light font-sans">{step.detailedInsight}</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
