import React, { useState } from "react";
import { Sparkles, Check, ChevronRight, User, BookOpen, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { postToBackend } from "../lib/api";

export default function AdmissionFormSection() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const courses = [
    "Full Stack Web Development",
    "App Development Masterclass",
    "Shopify Genesis",
    "UI/UX Design Certification",
    "Digital Marketing Pro"
  ];

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) return;
    if (step === 2 && !formData.course) return;
    setStep(s => s + 1);
  };

  const handleBack = () => {
    setStep(s => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.course) return;
    void postToBackend("/api/admissions", formData);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setStep(1);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    }, 5000);
  };

  return (
    <section id="admissions" className="relative py-28 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 font-mono text-[10px] uppercase text-blue-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Admissions Open
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Apply for Enrollment<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 font-light max-w-2xl mx-auto">
            Secure your spot in our upcoming batches. Fill out the application form below to begin your journey with our expert-led programs.
          </p>
        </div>

        <div className="bg-agency-card rounded-3xl border border-white/10 p-8 sm:p-12 overflow-hidden mx-auto max-w-2xl relative shadow-2xl backdrop-blur-md">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/5 rounded-full" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
            
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className={`relative z-10 flex border-2 items-center justify-center w-10 h-10 rounded-full font-mono text-sm transition-colors duration-300 ${
                  step >= i ? "bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/20" : "bg-black/40 border-white/10 text-gray-400"
                }`}
              >
                {step > i ? <Check className="w-5 h-5 text-white" /> : i}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative min-h-[300px]">
              <AnimatePresence mode="popLayout">
               {success ? (
                 <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center bg-transparent"
                 >
                   <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-sm animate-pulse">
                     <Check className="w-8 h-8 animate-bounce" />
                   </div>
                   <h3 className="font-display font-bold text-2xl text-white mb-2">Application Received!</h3>
                   <p className="text-gray-400 font-light text-sm max-w-xs">
                     Our admission team will review your details and contact you shortly with the next steps.
                   </p>
                 </motion.div>
               ) : step === 1 ? (
                 <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                 >
                   <div className="flex items-center gap-3 text-blue-400 mb-6">
                     <User className="w-5 h-5" />
                     <h3 className="font-display font-semibold text-lg text-white">Personal Information</h3>
                   </div>
                   <div>
                     <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name *</label>
                     <input
                       type="text"
                       required
                       value={formData.name}
                       onChange={e => setFormData({...formData, name: e.target.value})}
                       className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all font-sans"
                       placeholder="e.g. John Doe"
                     />
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address *</label>
                       <input
                         type="email"
                         required
                         value={formData.email}
                         onChange={e => setFormData({...formData, email: e.target.value})}
                         className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all font-sans"
                         placeholder="e.g. john@example.com"
                       />
                     </div>
                     <div>
                       <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 ml-1">Phone Number *</label>
                       <input
                         type="tel"
                         required
                         value={formData.phone}
                         onChange={e => setFormData({...formData, phone: e.target.value})}
                         className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all font-sans"
                         placeholder="+1 (555) 000-0000"
                       />
                     </div>
                   </div>
                   <div className="pt-4">
                     <button type="button" onClick={handleNext} disabled={!formData.name || !formData.email || !formData.phone} className="w-full sm:w-auto ml-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-medium tracking-wide transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                       Next Step <ChevronRight className="w-4 h-4" />
                     </button>
                   </div>
                 </motion.div>
               ) : step === 2 ? (
                  <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                 >
                   <div className="flex items-center gap-3 text-blue-400 mb-6">
                     <BookOpen className="w-5 h-5" />
                     <h3 className="font-display font-semibold text-lg text-white">Select Your Path</h3>
                   </div>
                   <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 ml-1">Desired Course / Program *</label>
                   <div className="grid grid-cols-1 gap-3">
                     {courses.map(course => (
                       <button
                         key={course}
                         type="button"
                         onClick={() => setFormData({...formData, course})}
                         className={`w-full px-5 py-4 text-left rounded-xl border transition-all duration-200 cursor-pointer ${
                           formData.course === course 
                             ? "bg-blue-500/10 border-blue-500 text-blue-300 shadow-sm shadow-blue-500/10" 
                             : "bg-white/5 border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/10"
                         }`}
                       >
                         <div className="flex items-center justify-between">
                           <span className={`font-sans font-medium text-sm ${formData.course === course ? "text-blue-300" : "text-gray-300"}`}>{course}</span>
                           <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.course === course ? "border-blue-500 bg-blue-500" : "border-white/10"}`}>
                             {formData.course === course && <Check className="w-3 h-3 text-white" />}
                           </div>
                         </div>
                       </button>
                     ))}
                   </div>
                   <div className="pt-4 flex items-center gap-4">
                     <button type="button" onClick={handleBack} className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 font-display font-medium tracking-wide transition-all cursor-pointer">
                       Back
                     </button>
                     <button type="button" onClick={handleNext} disabled={!formData.course} className="flex-1 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-medium tracking-wide transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                       Next Step <ChevronRight className="w-4 h-4" />
                     </button>
                   </div>
                 </motion.div>
               ) : (
                  <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                 >
                   <div className="flex items-center gap-3 text-blue-400 mb-6">
                     <MessageSquare className="w-5 h-5" />
                     <h3 className="font-display font-semibold text-lg text-white">Final Details</h3>
                   </div>
                   <div>
                     <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 ml-1">Additional Message (Optional)</label>
                     <textarea
                       rows={4}
                       value={formData.message}
                       onChange={e => setFormData({...formData, message: e.target.value})}
                       className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all font-sans resize-none"
                       placeholder="Any specific goals, background, or questions?"
                     />
                   </div>
                   <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 flex items-start gap-3">
                     <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                     <p className="text-xs text-blue-300 leading-relaxed font-sans font-medium">
                       You are applying for <strong>{formData.course}</strong>. By submitting, you agree to our admissions policy.
                     </p>
                   </div>
                   <div className="pt-4 flex items-center gap-4">
                     <button type="button" onClick={handleBack} className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 font-display font-medium tracking-wide transition-all cursor-pointer">
                       Back
                     </button>
                     <button type="submit" className="flex-1 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-medium tracking-wide transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer">
                       Submit Application
                     </button>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
