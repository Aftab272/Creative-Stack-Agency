import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Linkedin, Github, Twitter, Instagram, Facebook, Music, Award, HeartHandshake, CheckCircle, GraduationCap, Phone, Mail, X, MapPin } from "lucide-react";
import { TEAM_DATA } from "../data";

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = React.useState<any>(null);
  const founder = TEAM_DATA.find(member => member.id === "akram-founder");
  const cofounder = TEAM_DATA.find(member => member.id === "maryam-nawaz");
  const experts = TEAM_DATA.filter(member => member.id !== "akram-founder" && member.id !== "maryam-nawaz");

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="team" className="relative py-28 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 font-mono text-[10px] uppercase text-blue-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            The Human Capital
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight mb-4">
            Meet The Creative Minds
          </h2>
          <p className="text-gray-600 text-sm font-normal leading-relaxed">
            A cohesive squad of world-class developers, conversion designers, semantic SEO experts, and product strategy leads working together under a unified standard of craftsmanship.
          </p>
        </motion.div>

        {/* 1. Founder Spotlight Layout */}
        {founder && (
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="mb-16"
          >
            <h3 className="font-display font-medium text-xs text-gray-500 uppercase tracking-widest text-center mb-8">
              FOUNDER SPOTLIGHT
            </h3>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)", borderColor: "rgba(59,130,246,0.3)" }}
              className="relative rounded-3xl bg-[#0B0B0B] border border-white/10 overflow-hidden shadow-xl p-8 lg:p-12 max-w-5xl mx-auto group transition-colors duration-500"
            >
              {/* Outer hover border glow absolute layer */}
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Founder Image Column */}
                <div className="lg:col-span-4 relative flex justify-center">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] group/img">
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />
                    <img
                      src={founder.avatarUrl}
                      alt={founder.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                    />
                    
                    {/* Founder Badge */}
                    <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-[#0a0a0ade] border border-blue-500/30 text-[9px] font-mono tracking-widest text-blue-400 uppercase font-semibold">
                      DIRECTOR
                    </span>
                  </div>
                </div>

                {/* Founder Information Column */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  
                  {/* Experience block tag */}
                  <div className="flex items-center gap-2 mb-2 font-mono text-[9px] text-[#3b82f6] font-bold tracking-widest">
                    <Award className="w-4 h-4" />
                    {founder.experience.toUpperCase()}
                  </div>

                  <h4 className="text-3xl font-display font-bold text-white tracking-tight">
                    {founder.name}
                  </h4>
                  
                  <p className="text-blue-500 font-display text-sm font-medium mt-1">
                    {founder.role}
                  </p>

                  <p className="text-gray-300 text-sm mt-4 leading-relaxed font-normal">
                    {founder.bio}
                  </p>

                  {/* Skills Grid */}
                  <div className="mt-6">
                    <span className="font-mono text-[9px] text-gray-400 tracking-wider block mb-3 uppercase font-semibold">CORE ARCHITECTURE MASTERY:</span>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300 font-medium">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Handles in Grid */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-gray-500 text-[11px] font-mono font-medium">Direct Links:</span>
                    <div className="flex items-center gap-3">
                      {founder.socialLinks.linkedin && (
                        <a
                          href={founder.socialLinks.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/5 hover:border-blue-500 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {founder.socialLinks.github && (
                        <a
                          href={founder.socialLinks.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-slate-700 border border-white/5 hover:border-white/30 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {founder.socialLinks.twitter && (
                        <a
                          href={founder.socialLinks.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-[#1DA1F2] border border-white/5 hover:border-[#1DA1F2] text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {founder.socialLinks.instagram && (
                        <a
                          href={founder.socialLinks.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 border border-white/5 hover:border-pink-500 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="Instagram"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {founder.socialLinks.facebook && (
                        <a
                          href={founder.socialLinks.facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-blue-800 border border-white/5 hover:border-blue-700 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                      )}
                      {founder.socialLinks.tiktok && (
                        <a
                          href={founder.socialLinks.tiktok}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-black border border-white/5 hover:border-gray-800 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="TikTok"
                        >
                          <Music className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedMember(founder)}
                    className="mt-6 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-white/10 hover:border-blue-500/30 text-xs font-mono text-blue-400 hover:text-white transition-all text-center flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
                  >
                    <Award className="w-4 h-4 text-blue-400" />
                    View Creator's Experience & Timeline
                  </button>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}

        {/* Co-Founder Spotlight Layout */}
        {cofounder && (
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="mb-16"
          >
            <h3 className="font-display font-medium text-xs text-gray-500 uppercase tracking-widest text-center mb-8">
              CO-FOUNDER SPOTLIGHT
            </h3>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.15)", borderColor: "rgba(168,85,247,0.3)" }}
              className="relative rounded-3xl bg-[#0B0B0B] border border-white/10 overflow-hidden shadow-xl p-8 lg:p-12 max-w-5xl mx-auto group transition-colors duration-500"
            >
              {/* Outer hover border glow layer */}
              <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Co-Founder Image Column */}
                <div className="lg:col-span-4 relative flex justify-center">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] group/img">
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />
                    <img
                      src={cofounder.avatarUrl}
                      alt={cofounder.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                    />
                    
                    {/* Co-Founder Badge */}
                    <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-[#0a0a0ade] border border-purple-500/30 text-[9px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                      CO-FOUNDER
                    </span>
                  </div>
                </div>

                {/* Co-Founder Information Column */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  
                  {/* Experience block tag */}
                  <div className="flex items-center gap-2 mb-2 font-mono text-[9px] text-[#a855f7] font-bold tracking-widest">
                    <Award className="w-4 h-4 text-purple-400" />
                    {cofounder.experience.toUpperCase()}
                  </div>

                  <h4 className="text-3xl font-display font-bold text-white tracking-tight">
                    {cofounder.name}
                  </h4>
                  
                  <p className="text-purple-500 font-display text-sm font-medium mt-1">
                    {cofounder.role}
                  </p>

                  <p className="text-gray-300 text-sm mt-4 leading-relaxed font-normal">
                    {cofounder.bio}
                  </p>

                  {/* Skills Grid */}
                  <div className="mt-6">
                    <span className="font-mono text-[9px] text-gray-400 tracking-wider block mb-3 uppercase font-semibold">CO-FOUNDER & KEY EXPERT MASTERY:</span>
                    <div className="flex flex-wrap gap-2">
                      {cofounder.skills.slice(0, 6).map((skill: string, index: number) => (
                        <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300 font-medium">
                          <CheckCircle className="w-3 h-3 text-purple-500" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Handles in Grid */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-gray-500 text-[11px] font-mono font-medium">Direct Links:</span>
                    <div className="flex items-center gap-3">
                      {cofounder.socialLinks.linkedin && (
                        <a
                          href={cofounder.socialLinks.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/5 hover:border-blue-500 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {cofounder.socialLinks.github && (
                        <a
                          href={cofounder.socialLinks.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-slate-700 border border-white/5 hover:border-white/30 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {cofounder.socialLinks.facebook && (
                        <a
                          href={cofounder.socialLinks.facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-blue-800 border border-white/5 hover:border-blue-700 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                      )}
                      {cofounder.socialLinks.tiktok && (
                        <a
                          href={cofounder.socialLinks.tiktok}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-black border border-white/5 hover:border-gray-800 text-gray-400 hover:text-white transition-all shadow-md"
                          aria-label="TikTok"
                        >
                          <Music className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedMember(cofounder)}
                    className="mt-6 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-white/10 hover:border-purple-500/30 text-xs font-mono text-purple-400 hover:text-white transition-all text-center flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
                  >
                    <Award className="w-4 h-4 text-purple-400" />
                    View Co-Founder's Experience & Timeline
                  </button>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}

        {/* 2. Side-by-side Experts Grid / Carousel */}
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
             show: { transition: { staggerChildren: 0.1 } }
           }}
        >
          <h3 className="font-display font-medium text-xs text-gray-500 uppercase tracking-widest text-center mb-8">
            CREATIVE COLLABORATORS & EXPERTS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 md:px-0">
            {experts.map((member) => (
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "rgba(59,130,246,0.3)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                key={member.id}
                className="group relative rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-lg w-full h-full"
              >
                {/* Visual Glass highlights */}
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Photo & Core Bio Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-white/10 bg-black flex-shrink-0">
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                        {member.name}
                      </h4>
                      <span className="text-xs text-gray-400 font-mono italic block">{member.role}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed font-normal mb-6">
                    {member.bio}
                  </p>

                  {/* Contact & Education Panel (if available) */}
                  {(member.education || member.email || member.phone) && (
                    <div className="mb-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-[11px] font-mono text-gray-400">
                      {member.education && (
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <span className="truncate">{member.education}</span>
                        </div>
                      )}
                      {member.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <a href={`mailto:${member.email}`} className="hover:text-blue-300 transition-colors truncate">
                            {member.email}
                          </a>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <a href={`tel:${member.phone}`} className="hover:text-blue-300 transition-colors">
                            {member.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Skills lists */}
                  <div className="mb-6 relative z-10">
                    <span className="text-[10px] uppercase font-mono text-gray-400 tracking-wider block mb-2 font-medium">SPECIALTIES:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer and personal Social icons */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono text-gray-400">{member.experience}</span>
                  <div className="flex items-center gap-2 text-gray-400">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a href={member.socialLinks.instagram} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socialLinks.facebook && (
                      <a href={member.socialLinks.facebook} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                        <Facebook className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socialLinks.tiktok && (
                      <a href={member.socialLinks.tiktok} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                        <Music className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedMember(member)}
                  className="mt-4 w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-blue-600/10 border border-white/5 hover:border-blue-500/20 text-[11px] font-mono text-blue-400 hover:text-white transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  View Credentials & Bio
                </button>

              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Dynamic Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-3xl bg-[#09090bf9] border border-white/10 overflow-hidden shadow-2xl p-6 md:p-8 max-w-xl w-full max-h-[85vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Profile Image & Role Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 bg-black flex-shrink-0 shadow-lg">
                  <img
                    src={selectedMember.avatarUrl}
                    alt={selectedMember.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left flex-1 min-w-0">
                  <h4 className="font-display font-bold text-2xl text-white truncate">
                    {selectedMember.name}
                  </h4>
                  <p className="text-xs text-blue-400 font-mono font-medium mt-1 uppercase tracking-wider">{selectedMember.role}</p>
                  
                  {selectedMember.location && (
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-[11px] font-mono text-gray-500 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{selectedMember.location}</span>
                    </div>
                  )}
                  {selectedMember.projectsCompleted && (
                    <div className="inline-block mt-3 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300">
                      ✨ {selectedMember.projectsCompleted}
                    </div>
                  )}
                </div>
              </div>

              {/* Bio & Work Style */}
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="text-[10px] uppercase font-mono text-gray-500 tracking-wider mb-1.5 font-semibold">About Professional Path:</h5>
                  <p className="text-gray-300 text-xs leading-relaxed font-light">
                    {selectedMember.bio}
                  </p>
                </div>

                {selectedMember.workStyle && (
                  <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <h5 className="text-[10px] uppercase font-mono text-blue-400 tracking-wider mb-1 font-semibold">Client Collaboration Style:</h5>
                    <p className="text-gray-400 text-xs italic font-light">
                      "{selectedMember.workStyle}"
                    </p>
                  </div>
                )}
              </div>

              {/* Timelines (Experience and Education) */}
              {selectedMember.detailedExperience && selectedMember.detailedExperience.length > 0 && (
                <div className="mb-6">
                  <h5 className="text-[10px] uppercase font-mono text-gray-500 tracking-wider mb-3.5 font-semibold">Professional Courses & Milestones:</h5>
                  <div className="space-y-4 relative pl-4 border-l border-white/5">
                    {selectedMember.detailedExperience.map((exp: any, i: number) => (
                      <div key={i} className="relative group/time">
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 group-hover/time:bg-blue-400 transition-colors border-2 border-[#09090b]" />
                        <div className="flex items-baseline justify-between gap-2 flex-wrap">
                          <h6 className="text-[12px] font-mono font-bold text-white group-hover/time:text-blue-300 transition-colors">{exp.title}</h6>
                          <span className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">{exp.period}</span>
                        </div>
                        <p className="text-[10px] font-mono text-blue-400 font-light mt-0.5">{exp.company}</p>
                        <p className="text-gray-400 text-xs font-light leading-relaxed mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedMember.detailedEducation && selectedMember.detailedEducation.length > 0 && (
                <div className="mb-6">
                  <h5 className="text-[10px] uppercase font-mono text-gray-500 tracking-wider mb-3.5 font-semibold">Academic Path:</h5>
                  <div className="space-y-4 relative pl-4 border-l border-white/5">
                    {selectedMember.detailedEducation.map((edu: any, i: number) => (
                      <div key={i} className="relative group/time">
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 group-hover/time:bg-purple-400 transition-colors border-2 border-[#09090b]" />
                        <div className="flex items-baseline justify-between gap-2 flex-wrap">
                          <h6 className="text-[12px] font-mono font-bold text-white group-hover/time:text-purple-350 transition-colors">{edu.degree}</h6>
                          <span className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">{edu.period}</span>
                        </div>
                        <p className="text-[10px] font-mono text-purple-400 font-light mt-0.5">{edu.institute}</p>
                        <p className="text-gray-400 text-xs font-light leading-relaxed mt-1">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights & Bullet Points */}
              {selectedMember.highlights && selectedMember.highlights.length > 0 && (
                <div className="mb-6">
                  <h5 className="text-[10px] uppercase font-mono text-gray-500 tracking-wider mb-2 font-semibold">Key Capabilities & Delivery Highlights:</h5>
                  <ul className="space-y-2 text-xs font-light text-gray-300">
                    {selectedMember.highlights.map((hlt: string, idx: number) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Tab List */}
              {selectedMember.detailedSkills && selectedMember.detailedSkills.length > 0 && (
                <div className="mb-6">
                  <h5 className="text-[10px] uppercase font-mono text-gray-500 tracking-wider mb-3 font-semibold">Granular Skills Breakdown:</h5>
                  <div className="space-y-3">
                    {selectedMember.detailedSkills.map((cat: any, i: number) => (
                      <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-[9px] uppercase font-mono text-blue-300 tracking-wider font-semibold block mb-2">{cat.category}:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.list.map((sk: string, skIdx: number) => (
                            <span key={skIdx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 font-light">
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Social handles & footer of modal */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-[10px] font-mono text-gray-500">Contact directly:</span>
                <div className="flex items-center gap-3">
                  {selectedMember.email && (
                    <a href={`mailto:${selectedMember.email}`} className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="Email">
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedMember.socialLinks.linkedin && (
                    <a href={selectedMember.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedMember.socialLinks.github && (
                    <a href={selectedMember.socialLinks.github} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedMember.socialLinks.twitter && (
                    <a href={selectedMember.socialLinks.twitter} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedMember.socialLinks.instagram && (
                    <a href={selectedMember.socialLinks.instagram} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedMember.socialLinks.facebook && (
                    <a href={selectedMember.socialLinks.facebook} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedMember.socialLinks.tiktok && (
                    <a href={selectedMember.socialLinks.tiktok} target="_blank" rel="noreferrer" className="p-2 rounded bg-white/5 text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                      <Music className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
