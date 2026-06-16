import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast count to 100 within 1.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 400); // give it a moment at 100%
          return 100;
        }
        return prev + 4;
      });
    }, 45); // 1.5s total roughly

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0a]"
    >
      <div className="relative flex flex-col items-center w-full max-w-sm px-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">
            Creative Stack
          </span>
        </motion.div>

        <div className="w-full flex items-center justify-between mb-3 text-xs font-mono">
          <span className="text-gray-400">LOADING EXPERIENCE</span>
          <span className="text-blue-400 font-bold">{progress}%</span>
        </div>

        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
