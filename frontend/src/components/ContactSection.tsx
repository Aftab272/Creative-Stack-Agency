import React, { useState, useEffect } from "react";
import { Sparkles, Mail, Clock, Calendar, Check, Send, PhoneCall, AlertCircle, X, ArrowRight } from "lucide-react";
import { postToBackend } from "../lib/api";

interface ContactSectionProps {
  selectedPlanId: string;
  selectedBudgetTag: string;
  onClearPlanSelect: () => void;
}

interface SubmittedInquiry {
  id: string;
  name: string;
  email: string;
  projectTypes: string[];
  budget: string;
  message: string;
  date: string;
  status: string;
}

export default function ContactSection({ selectedPlanId, selectedBudgetTag, onClearPlanSelect }: ContactSectionProps) {
  // Local persistent storage
  const [inquiries, setInquiries] = useState<SubmittedInquiry[]>([]);
  const [success, setSuccess] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeProjectTypes, setActiveProjectTypes] = useState<string[]>([]);
  const [activeBudget, setActiveBudget] = useState("Under $2k");

  // Booking Modal
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookedDate, setBookedDate] = useState("");
  const [bookedTime, setBookedTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const projectTypesList = [
    "SaaS Platform",
    "Bespoke Web App",
    "Headless Shopify",
    "Creative Branding",
    "Lead Acquisition / Ads",
    "Sleek WordPress",
    "Cinematic Video Edit",
    "iOS / Android Apps"
  ];

  const budgetsList = [
    "Under $2k",
    "$2k - $5k",
    "$5k - $10k",
    "$10k+"
  ];

  // Load inquiries from localStorage on startup
  useEffect(() => {
    const historical = localStorage.getItem("creative_stack_inquiries");
    if (historical) {
      try {
        setInquiries(JSON.parse(historical));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Sync chosen budget and plans from pricing select
  useEffect(() => {
    if (selectedPlanId) {
      // Auto toggle project type matching
      if (selectedPlanId === "starter") {
        setActiveProjectTypes(["Bespoke Web App"]);
        setActiveBudget("Under $2k");
      } else if (selectedPlanId === "growth") {
        setActiveProjectTypes(["Headless Shopify", "SaaS Platform"]);
        setActiveBudget("$2k - $5k");
      } else if (selectedPlanId === "enterprise") {
        setActiveProjectTypes(["iOS / Android Apps", "SaaS Platform"]);
        setActiveBudget("$10k+");
      }
    }
  }, [selectedPlanId, selectedBudgetTag]);

  const handleToggleProjectType = (type: string) => {
    if (activeProjectTypes.includes(type)) {
      setActiveProjectTypes(prev => prev.filter(t => t !== type));
    } else {
      setActiveProjectTypes(prev => [...prev, type]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please populate Name, Email, and message guidelines.");
      return;
    }

    const newInquiry: SubmittedInquiry = {
      id: "inq_" + Date.now(),
      name,
      email,
      projectTypes: activeProjectTypes.length > 0 ? activeProjectTypes : ["General Inquiry"],
      budget: activeBudget,
      message,
      date: new Date().toLocaleDateString("en-US", { hour: "2-digit", minute: "2-digit" }),
      status: "Pipeline Queued (Under 15m ETA)"
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem("creative_stack_inquiries", JSON.stringify(updated));
    void postToBackend("/api/inquiries", newInquiry);

    // Reset Form
    setName("");
    setEmail("");
    setMessage("");
    setActiveProjectTypes([]);
    onClearPlanSelect();
    setSuccess(true);

    // Roll back success after 8 seconds
    setTimeout(() => setSuccess(false), 8000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookedDate || !bookedTime) {
      alert("Please select a date and time slot.");
      return;
    }
    void postToBackend("/api/bookings", {
      date: bookedDate,
      time: bookedTime
    });
    setBookingSuccess(true);
    setTimeout(() => {
      setShowBookingModal(false);
      setBookingSuccess(false);
      setBookedDate("");
      setBookedTime("");
      alert("Creative Call Confirmed with Akram! An invite link has been dispatched to your calendar.");
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0b0b0b] overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-yellow-700/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section - CTA Banner Style */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 pb-16 border-b border-white/10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-500">
              <Send className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-2">
                Have A Project In Mind?
              </h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Let's work together and bring your ideas to life.
              </p>
            </div>
          </div>
          <button className="mt-8 md:mt-0 px-8 py-4 bg-yellow-500 text-black font-display font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-yellow-400 transition-colors">
            GET A FREE QUOTE
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Form and Map columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Form Panel */}
          <div className="lg:col-span-7 rounded-2xl bg-agency-card border border-white/10 p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute inset-0 bg-white/[0.01] rounded-2xl pointer-events-none" />
            
            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase text-gray-500 tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-yellow-500 hover:border-white/15 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase text-gray-500 tracking-wider">Your Mail Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@enterprise.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-yellow-500 hover:border-white/15 transition-all"
                  />
                </div>
              </div>

              {/* Requirement Multi-select pills */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-[9px] uppercase text-gray-400 tracking-wider font-bold">Select Project Requirements *</label>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wide">(Select multiple)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectTypesList.map((type) => {
                    const isSelected = activeProjectTypes.includes(type);
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => handleToggleProjectType(type)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-yellow-600/10 border-yellow-500 text-yellow-400 font-semibold"
                            : "bg-[#0a0a0ade] border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Toggle chips */}
              <div className="space-y-3">
                <label className="font-mono text-[9px] uppercase text-gray-400 tracking-wider font-bold block">Assigned Budget Threshold *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetsList.map((bg) => {
                    const isSelected = activeBudget === bg;
                    return (
                      <button
                        type="button"
                        key={bg}
                        onClick={() => setActiveBudget(bg)}
                        className={`py-3 px-1 rounded-xl text-xs font-mono border transition-all cursor-pointer text-center ${
                          isSelected
                            ? "bg-yellow-600 text-black border-yellow-500 font-semibold shadow-md"
                            : "bg-[#0a0a0ade] border-white/5 text-gray-500 hover:text-white"
                        }`}
                      >
                        {bg}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Input guidelines */}
              <div className="space-y-2">
                <label className="font-mono text-[9px] uppercase text-gray-500 tracking-wider">Brief Project Description Guideline *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your timeline mandates, database scaling preferences, Shopify integrations, design systems or specific challenges..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-blue-500 hover:border-white/15 transition-all resize-none"
                />
              </div>

              {/* Operational CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
                
                <button
                  type="submit"
                  className="flex-1 group py-4 rounded-xl bg-yellow-600 hover:bg-yellow-500 text-black font-display font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Transmit Ticket
                </button>

                <button
                  type="button"
                  onClick={() => setShowBookingModal(true)}
                  className="flex-1 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-display font-semibold text-xs tracking-wider uppercase hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Book Live Strategy Session
                </button>

              </div>

            </form>

            {/* Success indicator capsule */}
            {success && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 animate-bounce" />
                <div>
                  <span className="block font-bold">Inquiry Transmitted Successfully!</span>
                  <span className="block text-[10px] text-gray-400 font-light mt-0.5">Akram has been triggered. Experience our direct response within 15 minutes. See your queued ticket records below!</span>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: High-tech Map Placeholder + Metadata */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* World Map Vector Frame */}
            <div className="rounded-2xl border border-white/15 bg-black p-6 shadow-xl relative overflow-hidden h-72 flex flex-col justify-between">
              
              {/* Live Status overlay */}
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-[#0a0a0ade] border border-white/10 text-[9px] font-mono tracking-widest text-[#eab308] uppercase font-bold flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-500 animate-ping" />
                Global Server Hubs
              </div>

              {/* Gorgeous abstract futuristic world map dots vector */}
              <div className="absolute inset-0 opacity-40 hover:opacity-60 transition-opacity flex items-center justify-center pointer-events-none p-4">
                <svg viewBox="0 0 400 200" fill="currentColor" className="w-full h-full text-gray-600">
                  {/* Grid lines */}
                  <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.02)" strokeDasharray="2" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.02)" strokeDasharray="2" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.02)" strokeDasharray="2" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(255,255,255,0.02)" strokeDasharray="2" />
                  <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(255,255,255,0.02)" strokeDasharray="2" />
                  <line x1="300" y1="0" x2="300" y2="200" stroke="rgba(255,255,255,0.02)" strokeDasharray="2" />
                  
                  {/* Glowing Node dots representing servers */}
                  <circle cx="80" cy="70" r="3" fill="#3b82f6" className="animate-ping" />
                  <circle cx="80" cy="70" r="2" fill="#3b82f6" />
                  <text x="88" y="73" fill="#9ca3af" fontSize="8" fontFamily="monospace">East-US-01</text>

                  <circle cx="210" cy="60" r="3" fill="#8b5cf6" className="animate-ping" />
                  <circle cx="210" cy="60" r="2" fill="#8b5cf6" />
                  <text x="218" y="63" fill="#9ca3af" fontSize="8" fontFamily="monospace">Paris-Hub</text>

                  <circle cx="330" cy="110" r="3" fill="#3b82f6" className="animate-ping" />
                  <circle cx="330" cy="110" r="2" fill="#3b82f6" />
                  <text x="338" y="113" fill="#9ca3af" fontSize="8" fontFamily="monospace">Tokyo-Grid</text>
                  
                  {/* Decorative curved paths between hubs */}
                  <path d="M80,70 Q145,50 210,60" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="3" />
                  <path d="M210,60 Q270,85 330,110" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" strokeDasharray="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Empty spacing for graphic depth */}
              <div />

              {/* Core Information tag */}
              <div className="relative z-20">
                <span className="block font-mono text-[9px] text-[#3b82f6] uppercase tracking-wider font-bold">OPERATING STATUS</span>
                <span className="block text-white font-display font-medium text-xs mt-1">Distributed Edge Infrastructure</span>
                <p className="text-gray-400 text-[10px] font-sans font-light mt-1 max-w-xs">
                  We deploy codebases to 45 edge regions concurrently through redundant Content Delivery Networks.
                </p>
              </div>

            </div>

            {/* Quick Profile Parameters */}
            <div className="space-y-4 rounded-xl border border-white/5 bg-white/[0.01] p-6 text-xs font-mono">
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <div>
                  <span className="block text-[8px] text-gray-500 uppercase">DIRECT EMAIL INTAKE</span>
                  <a href="mailto:creativestackagency513@gmail.com" className="block text-white hover:text-yellow-300 font-medium font-sans">
                    creativestackagency513@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-yellow-400" />
                <div>
                  <span className="block text-[8px] text-gray-500 uppercase">AGENCY PHONE CORE</span>
                  <a href="tel:+923027434569" className="block text-white hover:text-yellow-300 font-medium font-sans">
                    +923027434569
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-yellow-400" />
                <div>
                  <span className="block text-[8px] text-gray-500 uppercase">OFFICIAL RESPONSE BOUND</span>
                  <span className="block text-emerald-400 font-bold font-sans">
                    Under 15 Minutes Response SLA
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <div>
                  <span className="block text-[8px] text-gray-500 uppercase">BUSINESS WORK-HOURS</span>
                  <span className="block text-white font-sans font-medium">
                    Monday – Friday (09:00 – 18:00 UTC)
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Real Dynamic Client-Side Pending Inquiry Records section (Showcases functional persistence) */}
        {inquiries.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <h3 className="font-display font-bold text-lg text-white">Your Registered Agency Tickets</h3>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("creative_stack_inquiries");
                  setInquiries([]);
                }}
                className="text-xs text-gray-500 hover:text-red-400 font-mono transition-colors cursor-pointer"
              >
                [ Purge My Local History ]
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inquiries.map((inq) => (
                <div key={inq.id} className="p-5 rounded-xl bg-white/[0.02] border border-white/10 relative">
                  <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                    <span className="font-mono text-[9px] text-[#3b82f6] tracking-wider uppercase font-bold">ID: {inq.id.split("_")[1]}</span>
                    <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {inq.status}
                    </span>
                  </div>
                  
                  <div className="space-y-1 mt-3">
                    <span className="block text-white font-display font-bold text-sm">{inq.name}</span>
                    <span className="block font-mono text-[10px] text-gray-500">{inq.email}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {inq.projectTypes.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-yellow-500/5 text-[9px] font-mono text-yellow-300 border border-yellow-500/10">
                        {t}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 rounded bg-purple-500/5 text-[9px] font-mono text-purple-300 border border-purple-500/10">
                      {inq.budget}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs font-light mt-4 italic line-clamp-2 leading-relaxed">
                    "{inq.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Book Call Scheduling Overlay Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl bg-agency-bg border border-white/15 p-8 shadow-3xl">
            
            {/* Close trigger */}
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mx-auto mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Select Consultation Time</h3>
              <p className="text-[11px] text-gray-400 mt-1 font-mono">Simulate booking a 30-min strategist pipeline review on GMeet.</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              <div className="space-y-1 text-left">
                <label className="font-mono text-[9px] text-gray-500 uppercase">Choose Date</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={bookedDate}
                  onChange={(e) => setBookedDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="font-mono text-[9px] text-gray-500 uppercase">Available Slots (UTC)</label>
                <select
                  required
                  value={bookedTime}
                  onChange={(e) => setBookedTime(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="" className="bg-black">-- Select Slot --</option>
                  <option value="09:30 - 10:00" className="bg-black">09:30 - 10:00 AM</option>
                  <option value="11:00 - 11:30" className="bg-black">11:00 - 11:30 AM</option>
                  <option value="14:00 - 14:30" className="bg-black">14:00 - 14:30 PM</option>
                  <option value="16:30 - 17:00" className="bg-black">16:30 - 17:00 PM</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={bookingSuccess}
                  className="w-full py-3 text-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  {bookingSuccess ? "Validating Availability..." : "Lock in Date Slot"}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  );
}
