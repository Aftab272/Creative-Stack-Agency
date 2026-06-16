import React, { useState, useRef } from "react";
import { Sparkles, ArrowRight, X, ExternalLink, Target, CheckSquare, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Web", "Apps", "Design", "Marketing"];

  // Filter products
  const filteredProjects = selectedCategory === "All"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <section id="portfolio" className="relative py-28 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 font-mono text-[10px] uppercase text-blue-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              CASE STUDIES
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Crafted Interfaces. Massive Scale<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-light leading-relaxed">
              Explore our record of high-performance technical engineering, luxury visual branding, headless commerce systems, and search-dominant SEO acquisitions.
            </p>
          </div>

          {/* Interactive Category Filter Menu */}
          <div className="flex flex-nowrap bg-white/5 rounded-xl border border-white/5 overflow-x-auto md:overflow-visible no-scrollbar p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wider transition-all duration-350 cursor-pointer flex-shrink-0 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid Layout - Swipeable on Mobile */}
        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 font-sans snap-x snap-mandatory hide-scroll-bar"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(59,130,246,0.15)" }}
                key={project.id}
                className="group interactive-hover relative rounded-2xl bg-agency-card border border-white/5 hover:border-blue-400/20 overflow-hidden shadow-2xl transition-colors duration-500 flex flex-col justify-between min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center"
              >
              {/* Image Preview Container */}
              <div className="relative h-56 w-full overflow-hidden bg-[#111]">
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                <img
                  src={project.previewImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Float Category Overlay tag */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#0a0a0ade] border border-white/10 text-[9px] font-mono tracking-widest text-blue-400 uppercase font-semibold">
                    {project.category}
                  </span>
                  {project.projectType && (
                     <span className="px-2.5 py-1 rounded bg-[#0a0a0ade] border border-white/10 text-[9px] font-mono tracking-widest text-purple-400 uppercase font-semibold hide-on-mobile">
                       {project.projectType}
                     </span>
                  )}
                </div>

                {/* Micro tech chips row */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-1 pr-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-black/40 text-[8px] font-mono text-gray-300 border border-white/5 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">{project.clientName}</span>
                  <h3 className="font-display font-bold text-xl text-white mt-1 group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-3 line-clamp-2 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Quantifiable Results Panel */}
                <div className="mt-6 pt-4 border-t border-white/5 bg-white/[0.01] p-3 rounded-xl border border-white/5">
                  <span className="font-mono text-[8px] text-blue-400 tracking-wider block mb-1.5 uppercase font-bold">CORE CAMPAIGN IMPACT:</span>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((res, index) => (
                      <li key={index} className="text-[10px] text-gray-300 font-medium flex items-center gap-1.5 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer links */}
                <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
                  <button
                    onClick={() => setActiveCaseStudyProject(project)}
                    className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-white font-display font-semibold transition-colors cursor-pointer group/btn flex-1"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center gap-3 shrink-0">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors tooltip group/live-btn inline-flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-emerald-400 md:hidden group-hover/live-btn:block transition-all">Live</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 px-6 border border-white/5 rounded-3xl bg-agency-card mt-8 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10">
              <Sparkles className="w-6 h-6 text-blue-400 opacity-50" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">No projects found</h3>
            <p className="text-gray-400 font-light text-sm max-w-sm mb-6 relative z-10">We couldn't find any case studies matching the "{selectedCategory}" category right now.</p>
            <button 
              onClick={() => setSelectedCategory("All")}
              className="px-6 py-2.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-colors relative z-10"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

      </div>

      {/* Interactive Case Study Detail Modal Block */}
      {activeCaseStudyProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-2xl bg-agency-bg border border-white/10 shadow-3xl overflow-y-auto max-h-[92vh] flex flex-col">
            
            {/* Close trigger */}
            <button
              onClick={() => setActiveCaseStudyProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer z-30 backdrop-blur-sm"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Banner with opacity overlay overflow-hidden rounded-t-2xl */}
            <div className="relative h-56 sm:h-72 w-full bg-black flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-agency-bg via-agency-bg/50 to-transparent z-10" />
              <img
                src={activeCaseStudyProject.previewImage}
                alt={activeCaseStudyProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded bg-[#0a0a0ade] border border-white/10 text-[9px] font-mono tracking-widest text-blue-400 uppercase font-semibold backdrop-blur-sm">
                    {activeCaseStudyProject.category}
                  </span>
                  {activeCaseStudyProject.projectType && (
                     <span className="px-2.5 py-1 rounded bg-[#0a0a0ade] border border-white/10 text-[9px] font-mono tracking-widest text-purple-400 uppercase font-semibold backdrop-blur-sm">
                       {activeCaseStudyProject.projectType}
                     </span>
                  )}
                </div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight mb-2">
                  {activeCaseStudyProject.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm max-w-xl font-light">
                    {activeCaseStudyProject.description}
                </p>
              </div>
            </div>

            {/* Case Study Content Grid */}
            <div className="p-6 sm:p-10 flex-1 overflow-y-auto">
              
              {/* Highlight Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {activeCaseStudyProject.results.map((res, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-display font-black text-emerald-400 tracking-tight block">
                      {res.split(" ")[0]}
                    </span>
                    <span className="text-xs text-gray-400 font-light mt-1.5 font-mono leading-tight px-2">
                      {res.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 border-b border-white/5 pb-10">
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-400">
                    <Target className="w-5 h-5" />
                    <h4 className="font-display font-semibold text-xs uppercase tracking-wider">THE CORE CHALLENGE:</h4>
                  </div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {activeCaseStudyProject.challenge || "Our client required immediate, highly scalable system deployments to resolve mounting conversion bottlenecks and system processing speed constraints."}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckSquare className="w-5 h-5" />
                    <h4 className="font-display font-semibold text-xs uppercase tracking-wider">ENGINEERED SOLUTION:</h4>
                  </div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {activeCaseStudyProject.solution || "We designed a streamlined technical platform utilizing modular cached components, CDN load balancers, and a premium UX strategy to optimize cart stickiness."}
                  </p>
                </div>

              </div>

              {/* Technical Specifications */}
              <div className="mb-10">
                <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider mb-4">
                  DEPLOYED TECHNOLOGIES & CONSTRUCTS:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCaseStudyProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Narrative */}
              <div className="mb-10 p-5 rounded-xl bg-[#0a0a0ade] border border-white/10">
                <h4 className="font-display font-medium text-xs text-gray-400 uppercase tracking-widest mb-2">
                  STRATEGIC SUMMARY
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {activeCaseStudyProject.caseStudy}
                </p>
              </div>

              {/* Actions panel */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                 {activeCaseStudyProject.githubUrl && (
                  <a
                    href={activeCaseStudyProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 text-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-semibold text-sm transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
                {activeCaseStudyProject.liveUrl && (
                  <a
                    href={activeCaseStudyProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 text-center rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white font-display font-semibold text-sm transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    Visit Live Environment
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
