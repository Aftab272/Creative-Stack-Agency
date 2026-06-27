import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Cpu, Clock, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onStartProjectClick: () => void;
  onViewPortfolioClick: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HeroSection({ onStartProjectClick, onViewPortfolioClick }: HeroSectionProps) {
  // Live Dashboard State
  const [activeTab, setActiveTab] = useState<"traffic" | "conversion" | "speed">("traffic");
  const [latency, setLatency] = useState(24);
  const [activeUsers, setActiveUsers] = useState(1342);
  const [speedLoading, setSpeedLoading] = useState(false);
  const [speedScore, setSpeedScore] = useState<number | null>(null);

  // Live sales stream
  const [latestBooking, setLatestBooking] = useState("David Sterling (Aether) initiated project");
  const bookings = [
    "David Sterling (Aether) initiated project",
    "Elena Rostova (Vanguard) verified payment",
    "Jonathan Cole (Chronos AI) locked strategy",
    "Marcus Drake boosted ad pipeline"
  ];

  useEffect(() => {
    // Tick active users up/down for visual live state
    const userInterval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 7) - 3);
    }, 4000);

    // Rotate bookings ticker to present active workflows
    let bookingIndex = 0;
    const bookingInterval = setInterval(() => {
      bookingIndex = (bookingIndex + 1) % bookings.length;
      setLatestBooking(bookings[bookingIndex]);
    }, 6000);

    // Dynamic latency fluctuates
    const latencyInterval = setInterval(() => {
      setLatency(prev => {
        const next = prev + Math.floor(Math.random() * 3) - 1;
        return next < 15 ? 15 : next > 32 ? 32 : next;
      });
    }, 3000);

    return () => {
      clearInterval(userInterval);
      clearInterval(bookingInterval);
      clearInterval(latencyInterval);
    };
  }, []);

  const handleRunSpeedTest = () => {
    if (speedLoading) return;
    setSpeedLoading(true);
    setSpeedScore(null);
    setTimeout(() => {
      setSpeedScore(99);
      setSpeedLoading(false);
    }, 1800);
  };

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "8+", label: "Bespoke Services" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-agency-bg flex flex-col justify-center"
    >
      {/* Background Animated Gradients / Spotlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none animate-float" />
      
      {/* 3D Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Text Elements & Copywriting */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          
          {/* Small Gold Heading */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="font-display font-semibold text-sm uppercase tracking-widest text-yellow-500">
              WE BUILD DIGITAL SOLUTIONS
            </span>
          </motion.div>

          {/* Core display headline */}
          <motion.h1 variants={itemVariants} className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter text-gray-900 leading-[1.1] mb-6">
            We Build Digital <br />
            Experiences
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-normal">
            We are a creative digital agency providing web development, design and digital marketing services to help your business grow.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto items-center">
            <button
              onClick={onViewPortfolioClick}
              className="interactive-hover group px-8 py-4 rounded-md bg-yellow-500 text-black font-display font-semibold tracking-wide hover:bg-yellow-400 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20"
            >
              EXPLORE SERVICES
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => {}}
              className="interactive-hover group px-6 py-4 rounded-md bg-transparent text-gray-900 font-display font-semibold tracking-wide hover:text-yellow-500 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 group-hover:border-yellow-500 text-yellow-500">
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </span>
              WATCH VIDEO
            </button>
          </motion.div>

          {/* Stats Bar Removed for design matching */}

        </motion.div>

        {/* Right: Highly Interactive 3D Agency Analytics Dashboard Visualizer */}
        <motion.div 
          initial={{ opacity: 0, x: 40, rotateY: -15, rotateX: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: -5, rotateX: 5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="lg:col-span-5 relative w-full flex justify-center perspective-grid group"
        >
          
          {/* Decorative glowing gradient ring in the background of the dashboard */}
          <div className="absolute inset-x-0 -top-10 h-64 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 blur-[60px] rounded-full pointer-events-none" />

          {/* Interactive Core Glass Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="lg:col-span-5 relative w-full flex justify-center group"
          >
            {/* Laptop Mockup placeholder */}
            <div className="relative w-full max-w-[500px] aspect-[16/10] bg-gray-800 rounded-t-xl rounded-b-sm shadow-2xl border-4 border-gray-900 flex flex-col overflow-hidden">
              <div className="w-full h-4 bg-gray-900 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
              </div>
              <div className="flex-1 bg-[#111111] p-6 relative flex flex-col items-start justify-center">
                <span className="text-yellow-500 font-bold text-xs mb-2">CreativeStack</span>
                <h3 className="text-white font-bold text-2xl leading-tight mb-2">We Create<br/>Solutions That<br/><span className="text-yellow-500">Drive Success</span></h3>
                <button className="px-3 py-1 bg-yellow-500 text-black text-[10px] font-bold rounded shadow-lg">GET STARTED</button>
                
                {/* Decorative wave */}
                <svg className="absolute bottom-0 right-0 w-3/4 opacity-30" viewBox="0 0 200 100" fill="none">
                  <path d="M0,100 C50,50 100,100 200,0 L200,100 Z" fill="url(#gold-wave)"/>
                  <defs>
                    <linearGradient id="gold-wave" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Laptop Base */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] max-w-[560px] h-4 bg-gray-300 rounded-b-xl rounded-t-sm shadow-md border-b-2 border-gray-400 z-0"></div>

            {/* Mobile Mockup */}
            <div className="absolute -right-4 -bottom-8 w-24 h-48 bg-gray-900 rounded-2xl shadow-2xl border-4 border-gray-800 p-2 z-10 flex flex-col">
              <div className="flex-1 bg-[#111111] rounded-xl relative flex flex-col items-center justify-center p-2 text-center overflow-hidden">
                <h4 className="text-white font-bold text-[10px] leading-tight mb-2">We Create Solutions That Drive Success</h4>
                <button className="px-2 py-0.5 bg-yellow-500 text-black text-[6px] font-bold rounded">GET STARTED</button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
