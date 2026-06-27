import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DIALOGUES = [
  { id: 'home', text: "Welcome to Creative Stack Agency! I'm your AI guide. Let's build something extraordinary together." },
  { id: 'about', text: "Here's the core of who we are. Our world-class team is dedicated to premium craftsmanship." },
  { id: 'services', text: "Your brand deserves to shine! We create logos, brand identities, UI/UX designs, and more." },
  { id: 'portfolio', text: "Take a look at our award-winning digital architectures and successful case studies." },
  { id: 'team', text: "Meet the creative minds behind the magic. Our squad of experts is ready to scale your vision." },
  { id: 'courses', text: "Want to master the highest status stacks? Check out our elite online skill academy!" },
  { id: 'process', text: "We follow a strict, high-performance workflow to guarantee flawless project delivery." },
  { id: 'pricing', text: "Transparent, scalable investment tiers designed for businesses of all sizes." },
  { id: 'contact', text: "Ready to start? Fill out the form below and let's get your project in motion!" }
];

export default function FloatingAIAssistant() {
  const robotRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMessage, setCurrentMessage] = useState(DIALOGUES[0].text);
  const [isVisible, setIsVisible] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  // Random Idle Animations (Blinking and Waving)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // Quick blink
    }, Math.random() * 4000 + 3000); // Random blink every 3-7 seconds

    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000); // Wave for 2 seconds
    }, Math.random() * 10000 + 10000); // Random wave every 10-20 seconds

    return () => {
      clearInterval(blinkInterval);
      clearInterval(waveInterval);
    };
  }, []);

  // GSAP ScrollTrigger for section awareness and parallax movement
  useEffect(() => {
    if (!containerRef.current) return;

    // Create ScrollTriggers for each section to update the dialogue
    const triggers: ScrollTrigger[] = [];

    DIALOGUES.forEach((dialogue) => {
      const section = document.getElementById(dialogue.id);
      if (section) {
        const st = ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setCurrentMessage(dialogue.text),
          onEnterBack: () => setCurrentMessage(dialogue.text),
        });
        triggers.push(st);
      }
    });

    // Parallax floating effect based on scroll velocity
    const floatST = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        // Move the robot slightly up/down based on scroll velocity to simulate floating/dodging
        const velocity = self.getVelocity();
        gsap.to(containerRef.current, {
          y: -velocity * 0.05, // Slight opposite movement
          rotationZ: velocity * 0.005, // Slight tilt
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    });

    return () => {
      triggers.forEach(t => t.kill());
      floatST.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={containerRef}
      drag
      dragConstraints={{ left: -100, right: 100, top: -500, bottom: 50 }}
      dragElastic={0.1}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9998] flex flex-col items-end pointer-events-auto cursor-grab active:cursor-grabbing"
      style={{ touchAction: 'none' }} // Prevent scrolling when dragging on mobile
    >
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 10, scale: 0.9, transformOrigin: 'bottom right' }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="relative max-w-[240px] md:max-w-[280px] mb-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
        >
          {/* Close button for the bubble/assistant */}
          <button 
            onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
            className="absolute -top-2 -right-2 p-1 rounded-full bg-gray-900 text-white hover:bg-red-500 transition-colors shadow-lg z-10"
          >
            <X className="w-3 h-3" />
          </button>
          
          <p className="text-gray-800 text-xs font-medium leading-relaxed">
            {currentMessage}
          </p>
          
          {/* Bubble Tail */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white/95 backdrop-blur-xl border-b border-r border-white/20 rotate-45 transform origin-center shadow-sm"></div>
        </motion.div>
      </AnimatePresence>

      {/* AI Robot Character (SVG/CSS Hybrid) */}
      <motion.div
        ref={robotRef}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative w-24 h-28 flex flex-col items-center group"
      >
        {/* Glow behind robot */}
        <div className="absolute inset-0 bg-yellow-500/30 blur-2xl rounded-full mix-blend-screen scale-150 group-hover:bg-yellow-400/40 transition-colors duration-500"></div>

        {/* Floating Particles */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -inset-4 opacity-50"
        >
          <Sparkles className="absolute top-0 right-2 w-3 h-3 text-yellow-300 animate-pulse" />
          <Sparkles className="absolute bottom-4 left-0 w-2 h-2 text-yellow-500 animate-ping" style={{ animationDuration: '3s' }} />
        </motion.div>

        {/* Head */}
        <motion.div 
          className="relative w-16 h-14 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-400 shadow-[inset_0_-4px_10px_rgba(0,0,0,0.2),0_10px_15px_-3px_rgba(0,0,0,0.3)] z-10 flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          {/* Visor */}
          <div className="w-12 h-7 bg-[#0B0B0B] rounded-full relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Visor Reflection */}
            <div className="absolute top-0 left-2 w-8 h-2 bg-white/10 rounded-full blur-[1px] rotate-[-10deg]"></div>
            
            {/* Eyes */}
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <motion.div 
                animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                className="w-2 h-3 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]"
              ></motion.div>
              <motion.div 
                animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                className="w-2 h-3 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Neck connector */}
        <div className="w-4 h-2 bg-yellow-500/80 -mt-1 z-0 shadow-inner"></div>

        {/* Body */}
        <div className="relative w-14 h-16 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-[2rem] shadow-[inset_0_-5px_15px_rgba(0,0,0,0.2),0_15px_20px_-5px_rgba(0,0,0,0.4)] z-10 flex flex-col items-center justify-start pt-3">
          {/* Chest details */}
          <div className="flex gap-1.5">
            <div className="w-1 h-3 bg-[#0B0B0B] rounded-full opacity-60"></div>
            <div className="w-1 h-3 bg-[#0B0B0B] rounded-full opacity-60"></div>
          </div>
          
          {/* Left Arm (Waving) */}
          <motion.div 
            animate={isWaving ? { rotate: [0, -40, 10, -30, 0] } : { rotate: 10 }}
            transition={isWaving ? { duration: 1.5, ease: "easeInOut" } : { duration: 0 }}
            style={{ originX: 0.5, originY: 0.1 }}
            className="absolute top-2 -left-4 w-3.5 h-10 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full shadow-md z-0"
          ></motion.div>

          {/* Right Arm */}
          <motion.div 
            animate={{ rotate: -10 }}
            className="absolute top-2 -right-4 w-3.5 h-10 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full shadow-md z-0"
          ></motion.div>
        </div>

        {/* Thruster Base */}
        <div className="w-8 h-3 bg-gray-800 rounded-b-full -mt-2 z-0 relative flex justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
          {/* Flame */}
          <motion.div 
            animate={{ scaleY: [1, 1.3, 0.9, 1.2], opacity: [0.6, 0.9, 0.5, 0.8] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            style={{ originY: 0 }}
            className="w-4 h-6 bg-gradient-to-b from-yellow-300 via-yellow-500 to-transparent rounded-b-full absolute top-full blur-[2px]"
          ></motion.div>
        </div>

      </motion.div>
    </motion.div>
  );
}
