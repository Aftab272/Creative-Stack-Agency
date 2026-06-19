import React, { useState } from "react";
import { 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Palette, 
  Layers, 
  Video, 
  Users, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2, 
  Clock, 
  Sparkles, 
  X
} from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";
import { motion, AnimatePresence } from "motion/react";

// Icon Mapper
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Globe": return <Globe className={className} />;
    case "Smartphone": return <Smartphone className={className} />;
    case "ShoppingBag": return <ShoppingBag className={className} />;
    case "Palette": return <Palette className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Video": return <Video className={className} />;
    case "Users": return <Users className={className} />;
    case "TrendingUp": return <TrendingUp className={className} />;
    default: return <Globe className={className} />;
  }
};

interface ServicesSectionProps {
  onStartProjectClick: () => void;
}

export default function ServicesSection({ onStartProjectClick }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="services" className="relative py-28 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 font-mono text-[10px] uppercase text-blue-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Core Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Bespoke Services. Proven Growth<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 text-md leading-relaxed font-light">
            We bypass generic templates to engineer custom-coded, search-optimized web applications, engaging video assets, and elite marketing frameworks tailored to maximize client conversions.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(59,130,246,0.25)", borderColor: "rgba(59,130,246,0.3)" }}
              key={service.id}
              className="group interactive-hover relative p-6 rounded-2xl bg-agency-card border border-white/5 shadow-lg transition-colors duration-500 flex flex-col justify-between"
            >
              {/* Background gradient border subtle on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div>
                {/* Custom Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:bg-blue-600/15 group-hover:border-blue-400/20 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-all duration-300 mb-6">
                  <IconComponent name={service.iconName} className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Sub-deliverables list */}
                <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {service.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-2 text-[11px] text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-400/80" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveModalService(service)}
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold group/btn cursor-pointer py-1 mt-2 tracking-wide self-start"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
              </button>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Interactive Detail Modal Block */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-agency-bg border border-white/10 p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal header details */}
            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white/10">
              <div className="w-14 h-14 rounded-xl bg-blue-600/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                <IconComponent name={activeModalService.iconName} className="w-7 h-7" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#3b82f6] font-bold">
                  {activeModalService.category} Specification
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-0.5">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Bullet list description */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {activeModalService.details}
              </p>
            </div>

            {/* Speed timeline metrics */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <div>
                  <span className="block text-[8px] font-mono text-gray-500 uppercase">TYPICAL TIMEFRAME</span>
                  <span className="block text-xs font-semibold text-white">{activeModalService.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="block text-[8px] font-mono text-gray-500 uppercase">QUALITY STATUS</span>
                  <span className="block text-xs font-semibold text-white">Full Handover Kit</span>
                </div>
              </div>
            </div>

            {/* Checklist of deliverables */}
            <div className="mb-8">
              <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider mb-3">
                PROJECT EXPORTS & HANDOVER KIT:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalService.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-gray-400 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA action trigger */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onStartProjectClick();
                }}
                className="flex-1 py-3.5 text-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-semibold text-sm transition-colors cursor-pointer shadow-lg font-bold"
              >
                Inquire About This Service
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
