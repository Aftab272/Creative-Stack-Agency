import React, { useState, useEffect } from "react";
import { Brain, Clock, Award, RotateCcw, Check, X as XIcon, Trophy, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Mock question bank (could be moved to data.ts, but keeping here for modularity)
const QUESTION_BANK = [
  { id: "q1", category: "Computer Science", question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Dynamic Object Mechanism"], correctIndex: 0 },
  { id: "q2", category: "General Knowledge", question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctIndex: 1 },
  { id: "q3", category: "Artificial Intelligence", question: "What is a 'Neural Network' modeled after?", options: ["Galactic systems", "The human brain", "Fibonacci sequence", "Molecular structures"], correctIndex: 1 },
  { id: "q4", category: "Course Based", question: "What is the primary language used for styling web pages?", options: ["HTML", "JavaScript", "Python", "CSS"], correctIndex: 3 },
  { id: "q5", category: "Computer Science", question: "Which protocol is used for secure communication over a computer network?", options: ["FTP", "HTTP", "HTTPS", "SMTP"], correctIndex: 2 },
  { id: "q6", category: "Artificial Intelligence", question: "Which of these is a machine learning framework?", options: ["React", "TensorFlow", "Django", "Laravel"], correctIndex: 1 },
  { id: "q7", category: "General Knowledge", question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctIndex: 3 },
  { id: "q8", category: "Computer Science", question: "What does SQL stand for?", options: ["Structured Query Language", "Strong Question Layer", "Sequential Query List", "Standard Quality Logic"], correctIndex: 0 },
];

// Utility to shuffle an array
function shuffleArray<T>(array: T[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function QuizSection() {
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per quiz
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Initialize Quiz
  const startQuiz = () => {
    // Select 5 random questions
    const shuffledBank = shuffleArray(QUESTION_BANK).slice(0, 5);
    
    // Shuffle options for each question to prevent pattern guessing
    const formattedQuestions = shuffledBank.map(q => {
       const optionsWithIndex = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correctIndex }));
       const shuffledOptions = shuffleArray(optionsWithIndex);
       return { ...q, options: shuffledOptions };
    });

    setQuestions(formattedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(60);
    setIsActive(true);
    setIsFinished(false);
    setSelectedOption(null);
    setHasAnswered(false);
  };

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsFinished(true);
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, isFinished, timeLeft]);

  const handleOptionSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);

    const isCorrect = questions[currentIndex].options[index].isCorrect;
    if (isCorrect) setScore(s => s + 1);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setHasAnswered(false);
      } else {
        setIsFinished(true);
        setIsActive(false);
      }
    }, 1500); // Wait 1.5 seconds before moving to next question
  };

  const progress = questions.length > 0 ? ((currentIndex) / questions.length) * 100 : 0;

  return (
    <section id="quiz" className="relative py-28 bg-[#0a0a0ade] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 font-mono text-[10px] uppercase text-blue-300 font-semibold shadow-sm">
            <Brain className="w-3.5 h-3.5 text-blue-400" />
            Skill Assessment Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Test Your Knowledge<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 font-light max-w-2xl mx-auto">
            Try our randomized dynamic MCQ engine. Prove your expertise in AI, Web Dev, and technical engineering before joining our cohort.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-agency-card relative rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-10 min-h-[400px] flex flex-col justify-center">
            
          <AnimatePresence mode="wait">
            {!isActive && !isFinished && (
              <motion.div 
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center flex flex-col items-center justify-center py-10"
              >
                <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex flex-col items-center justify-center mb-6">
                  <Brain className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Ready to begin?</h3>
                <p className="text-gray-400 text-sm mb-8 max-w-sm">
                  You will face 5 random questions across multiple disciplines. You have 60 seconds total.
                </p>
                <button
                  onClick={startQuiz}
                  className="interactive-hover group px-8 py-4 rounded-xl bg-blue-600 text-white font-display font-semibold tracking-wide hover:bg-blue-500 hover:shadow-[0_10px_35px_-8px_rgba(59,130,246,0.6)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Assessment <Sparkles className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            )}

            {isActive && (
               <motion.div 
                 key="active"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="flex flex-col w-full"
               >
                 {/* Top Status Bar */}
                 <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                   <div className="flex flex-col gap-1 w-1/2">
                     <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 uppercase tracking-widest px-1">
                       <span>Progress: {currentIndex + 1} / {questions.length}</span>
                       <span>{Math.round(progress)}%</span>
                     </div>
                     <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                     </div>
                   </div>
                   
                   <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold transition-colors ${timeLeft <= 10 ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-white/5 text-gray-300 border-white/10"}`}>
                     <Clock className={`w-4 h-4 ${timeLeft <= 10 ? "animate-pulse" : ""}`} />
                     {timeLeft}s
                   </div>
                 </div>

                 {/* Question Body */}
                 <div className="flex-1 w-full flex flex-col mb-8">
                   <span className="text-[10px] text-blue-400 font-mono uppercase tracking-widest mb-3 block">
                     Category: {questions[currentIndex]?.category}
                   </span>
                   <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-6 leading-relaxed">
                     {questions[currentIndex]?.question}
                   </h3>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                     {questions[currentIndex]?.options.map((opt: any, idx: number) => {
                       const isSelected = selectedOption === idx;
                       const showCorrect = hasAnswered && opt.isCorrect;
                       const showWrong = hasAnswered && isSelected && !opt.isCorrect;

                       let buttonClasses = "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20";
                       if (showCorrect) buttonClasses = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
                       else if (showWrong) buttonClasses = "border-red-500/50 bg-red-500/10 text-red-400";
                       else if (hasAnswered) buttonClasses = "border-white/5 bg-transparent text-gray-600 opacity-50";

                       return (
                         <button
                           key={idx}
                           disabled={hasAnswered}
                           onClick={() => handleOptionSelect(idx)}
                           className={`relative w-full text-left p-4 rounded-xl border text-sm font-sans transition-all duration-300 ${buttonClasses}`}
                         >
                           <div className="flex justify-between items-center gap-2">
                             <span>{opt.text}</span>
                             {showCorrect && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                             {showWrong && <XIcon className="w-4 h-4 text-red-400 shrink-0" />}
                           </div>
                         </button>
                       );
                     })}
                   </div>
                 </div>
               </motion.div>
            )}

            {isFinished && (
               <motion.div 
                 key="results"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="text-center flex flex-col items-center justify-center py-10"
               >
                 <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center mb-6 shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)]">
                   <Trophy className="w-12 h-12 text-emerald-400" />
                 </div>
                 
                 <h3 className="text-3xl font-display font-bold text-white mb-2">Assessment Complete</h3>
                 <p className="text-gray-400 text-sm mb-8">
                   You scored <strong className="text-emerald-400 text-xl">{score}</strong> out of <strong className="text-white text-xl">{questions.length}</strong>
                 </p>

                 {score >= 4 ? (
                   <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-8 max-w-sm mx-auto">
                     <p className="text-xs text-blue-300 font-mono">Excellent performance. You demonstrate strong foundational knowledge suited for our advanced cohorts.</p>
                   </div>
                 ) : (
                   <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-8 max-w-sm mx-auto">
                     <p className="text-xs text-amber-300 font-mono">Good effort. We recommend reviewing some core concepts before enrolling in intensive full-stack modules.</p>
                   </div>
                 )}

                 <button
                   onClick={startQuiz}
                   className="interactive-hover group px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-semibold text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 mx-auto cursor-pointer"
                 >
                   <RotateCcw className="w-4 h-4" />
                   Retry Assessment
                 </button>
               </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
