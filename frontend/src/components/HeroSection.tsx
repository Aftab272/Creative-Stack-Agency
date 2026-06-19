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
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const MicroActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState(1342);
  useEffect(() => {
    const userInterval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 7) - 3);
    }, 4000);
    return () => clearInterval(userInterval);
  }, []);
  return <span className="block font-display font-bold text-md text-white mt-0.5">{activeUsers}</span>;
};

const MicroLatency = () => {
  const [latency, setLatency] = useState(24);
  useEffect(() => {
    const latencyInterval = setInterval(() => {
      setLatency(prev => {
        const next = prev + Math.floor(Math.random() * 3) - 1;
        return next < 15 ? 15 : next > 32 ? 32 : next;
      });
    }, 3000);
    return () => clearInterval(latencyInterval);
  }, []);
  return <span className="block font-display font-bold text-md text-white mt-0.5">{latency}ms</span>;
};

const MicroBookingTicker = () => {
  const bookings = [
    "David Sterling (Aether) initiated project",
    "Elena Rostova (Vanguard) verified payment",
    "Jonathan Cole (Chronos AI) locked strategy",
    "Marcus Drake boosted ad pipeline"
  ];
  const [latestBooking, setLatestBooking] = useState(bookings[0]);
  useEffect(() => {
    let bookingIndex = 0;
    const bookingInterval = setInterval(() => {
      bookingIndex = (bookingIndex + 1) % bookings.length;
      setLatestBooking(bookings[bookingIndex]);
    }, 6000);
    return () => clearInterval(bookingInterval);
  }, []);

  return (
    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2.5 overflow-hidden">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
        <span className="font-mono text-[10px] text-gray-400 whitespace-nowrap animate-pulse">
          {latestBooking}
        </span>
      </div>
      <span className="font-mono text-[9px] text-blue-400 flex-shrink-0 bg-blue-500/10 px-1.5 py-0.5 rounded ml-2">
        JUST NOW
      </span>
    </div>
  );
};

export default function HeroSection({ onStartProjectClick, onViewPortfolioClick }: HeroSectionProps) {
  // Live Dashboard State
  const [activeTab, setActiveTab] = useState<"traffic" | "conversion" | "speed">("traffic");
  const [speedLoading, setSpeedLoading] = useState(false);
  const [speedScore, setSpeedScore] = useState<number | null>(null);

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
      className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-transparent flex flex-col justify-center"
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
          
          {/* Sparkle badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 animate-float">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-300 font-semibold">
              The Standard of Creative Engineering
            </span>
          </motion.div>

          {/* Core display headline */}
          <motion.h1 variants={itemVariants} className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter text-white leading-none mb-6">
            Build<span className="text-blue-500">.</span> <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Design. Scale.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-8 font-light">
            We create websites, mobile apps, digital experiences, and growth systems that help brands move faster, scale globally, and look better.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <button
              onClick={onStartProjectClick}
              className="interactive-hover group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-display font-semibold tracking-wide hover:shadow-[0_10px_35px_-8px_rgba(59,130,246,0.6)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onViewPortfolioClick}
              className="interactive-hover group px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-display font-semibold tracking-wide active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Portfolio
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pt-8 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* Right: Highly Interactive 3D Agency Analytics Dashboard Visualizer */}
        <motion.div 
          initial={{ opacity: 0, x: 40, rotateY: -15, rotateX: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: -5, rotateX: 5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.6 }}
          className="lg:col-span-5 relative w-full flex justify-center perspective-grid group"
        >
          
          {/* Decorative glowing gradient ring in the background of the dashboard */}
          <div className="absolute inset-x-0 -top-10 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[60px] rounded-full pointer-events-none" />

          {/* Interactive Core Glass Panel */}
          <motion.div 
            whileHover={{ scale: 1.02, rotateY: 0, rotateX: 0, borderColor: "rgba(59,130,246,0.5)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-[440px] rounded-2xl glass-effect p-6 shadow-3xl border border-white/10"
          >
            
            {/* Window Frame Controls */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="font-mono text-[10px] text-gray-500 ml-2">creative-stack-agency-live.json</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[9px] text-green-400">CORE UPCAST</span>
              </div>
            </div>

            {/* Simulated Live Analytics Bar */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-[9px] uppercase font-mono text-gray-500 tracking-wider">VIRTUAL SEED</span>
                <MicroActiveUsers />
                <span className="block text-[8px] text-blue-400 mt-1 font-mono">Live Session Influx</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-[9px] uppercase font-mono text-gray-500 tracking-wider">EDGE LATENCY</span>
                <MicroLatency />
                <span className="block text-[8px] text-emerald-400 mt-1 font-mono">Optimize Server</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-[9px] uppercase font-mono text-gray-500 tracking-wider">SEC PROTOCOL</span>
                <span className="block font-display font-bold text-md text-white mt-0.5">SHA-256</span>
                <span className="block text-[8px] text-purple-400 mt-1 font-mono">Shield Active</span>
              </div>

            </div>

            {/* Chart Segment - Toggle Tabs */}
            <div className="flex items-center gap-1 p-1 bg-white/5 rounded-lg border border-white/5 mb-4">
              <button
                onClick={() => setActiveTab("traffic")}
                className={`flex-1 py-1 px-1.5 rounded text-[10px] font-mono text-center transition-all ${
                  activeTab === "traffic" ? "bg-blue-600 text-white shadow-md font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                TRAFFIC INDEX
              </button>
              <button
                onClick={() => setActiveTab("conversion")}
                className={`flex-1 py-1 px-1.5 rounded text-[10px] font-mono text-center transition-all ${
                  activeTab === "conversion" ? "bg-blue-600 text-white shadow-md font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                CONVERSION BOOST
              </button>
              <button
                onClick={() => setActiveTab("speed")}
                className={`flex-1 py-1 px-1.5 rounded text-[10px] font-mono text-center transition-all ${
                  activeTab === "speed" ? "bg-blue-600 text-white shadow-md font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                CORE ENGINE
              </button>
            </div>

            {/* Custom Interactive SVG Graph Panel */}
            <div className="relative h-32 rounded-xl bg-black/40 border border-white/5 p-3 flex flex-col justify-end overflow-hidden mb-6">
              
              {activeTab === "traffic" && (
                <>
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                    <span className="text-[9px] font-mono text-gray-400">Total API requests: 1.4M (Quarterly)</span>
                  </div>
                  {/* Neon SVG Polyline Plot */}
                  <svg className="w-full h-20" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Fill */}
                    <path d="M0,40 L0,30 L15,22 L30,35 L50,15 L66,28 L84,5 L100,20 L100,40 Z" fill="url(#chart-glow)" />
                    {/* Line */}
                    <path d="M0,30 L15,22 L30,35 L50,15 L66,28 L84,5 L100,20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="84" cy="5" r="2" fill="#fff" className="animate-pulse" />
                  </svg>
                </>
              )}

              {activeTab === "conversion" && (
                <>
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    <span className="text-[9px] font-mono text-gray-400">Average Store Checkout rate: +14.6% Increase</span>
                  </div>
                  {/* Bar columns */}
                  <div className="w-full h-20 flex items-end justify-between px-4 pb-2">
                    <div className="w-4 bg-white/15 rounded-t h-4" />
                    <div className="w-4 bg-white/15 rounded-t h-8" />
                    <div className="w-4 bg-white/15 rounded-t h-12" />
                    <div className="w-4 bg-blue-600/50 rounded-t h-14" />
                    <div className="w-4 bg-blue-500 rounded-t h-[72px] relative">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-emerald-400">GOLD</span>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "speed" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <p className="text-[10px] text-gray-400 font-mono mb-2">Evaluate current client compilation speeds:</p>
                  
                  {speedLoading ? (
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-blue-400 animate-spin" />
                      <span className="text-[10px] font-mono text-blue-400">Interrogating asset weights...</span>
                    </div>
                  ) : speedScore !== null ? (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center font-display font-black text-green-400 text-xs shadow-[0_0_15px_rgba(34,197,94,0.3)] bg-green-500/10">
                        {speedScore}
                      </div>
                      <div className="text-left">
                        <span className="block text-[10px] font-mono text-green-400 font-semibold">Instant-Load Certified</span>
                        <span className="block text-[8px] text-gray-500">Speed optimized with Vite Edge</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={handleRunSpeedTest}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono text-[9px] active:scale-95 transition-all shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
                    >
                      ▶ EXECUTE LIGHTHOUSE PIPELINE
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Live Streaming Booking ticker */}
            <MicroBookingTicker />

          </motion.div>

          {/* Floating UI Elements surrounding the dashboard */}
          <div className="absolute -top-12 -left-12 p-3 rounded-xl glass-effect border border-white/10 hidden sm:flex items-center gap-3 shadow-xl animate-float pointer-events-none">
            <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-mono">Performance Score</span>
              <span className="block text-xs font-bold text-white font-display">0.24s Page Speed</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-12 p-3 rounded-xl glass-effect border border-white/10 hidden sm:flex items-center gap-3 shadow-xl animate-float-slow pointer-events-none">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-mono">AWS Shield</span>
              <span className="block text-xs font-bold text-white font-display">99.99% Cloud SLA</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
