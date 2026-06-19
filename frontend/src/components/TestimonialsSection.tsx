import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Star, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft,
  MessageSquare, 
  Quote, 
  Check, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Music, 
  Volume2, 
  VolumeX, 
  ExternalLink,
  MessageCircle,
  ThumbsUp,
  Heart,
  Share2,
  Send,
  MoreVertical,
  CheckCircle2,
  FileCode,
  Award,
  Users
} from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";
import { postToBackend } from "../lib/api";

interface AgencyStory {
  id: string;
  platformName: string;
  username: string;
  subtitle: string;
  ctaText: string;
  visitUrl: string;
  brandColor: string;
  accentBg: string;
  backgroundImage: string;
  caption: string;
  statsText: string;
  interactionType: "whatsapp" | "tiktok" | "youtube" | "instagram" | "github" | "linkedin" | "facebook" | "telegram";
}

const STORIES_DATA: AgencyStory[] = [
  {
    id: "whatsapp",
    platformName: "WhatsApp Stories",
    username: "Creative Stack Agency",
    subtitle: "Active Status • Official Channel",
    ctaText: "Join WhatsApp Channel",
    visitUrl: "https://whatsapp.com/channel/0029VbCVtZ7Id7nSBLYXOQ1c",
    brandColor: "#25D366",
    accentBg: "from-green-500/10 to-emerald-500/10",
    backgroundImage: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80",
    caption: "💡 Daily project updates, design announcements, and private client onboarding feeds directly.",
    statsText: "Official Broadcast",
    interactionType: "whatsapp"
  },
  {
    id: "tiktok",
    platformName: "TikTok Shorts",
    username: "@creative.stack.ag",
    subtitle: "Creative Stack Team • 48k+ Views",
    ctaText: "Watch TikTok Shorts",
    visitUrl: "https://www.tiktok.com/@creative.stack.ag",
    brandColor: "#EE1D52",
    accentBg: "from-pink-500/10 to-rose-500/10",
    backgroundImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    caption: "🚀 Lightning-fast web speedruns, client reveal clips, database schemas, and developer workflows.",
    statsText: "Rapid Speedruns",
    interactionType: "tiktok"
  },
  {
    id: "youtube",
    platformName: "YouTube Studio",
    username: "Creative Stack Hub",
    subtitle: "18k+ Subscribers • Tutorials",
    ctaText: "Subscribe on YouTube",
    visitUrl: "https://www.youtube.com/channel/UCjXYUc0PR0s-kIZKFR1MFiw",
    brandColor: "#FF0000",
    accentBg: "from-red-500/10 to-amber-500/10",
    backgroundImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    caption: "🎥 Direct coding tutorials, multi-stack agency architecture breakdowns, and full software masterclasses.",
    statsText: "Vanguard Studio",
    interactionType: "youtube"
  },
  {
    id: "instagram",
    platformName: "Instagram Board",
    username: "creativestackagency",
    subtitle: "Figma Grid • Premium UI Grid",
    ctaText: "Explore Instagram Feed",
    visitUrl: "https://www.instagram.com/creativestackagency",
    brandColor: "#C13584",
    accentBg: "from-purple-500/10 to-pink-500/10",
    backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    caption: "✨ Behind-the-scenes designs, modern custom transitions, dark pixel layouts, and aesthetic elements.",
    statsText: "Creative Grid",
    interactionType: "instagram"
  },
  {
    id: "github",
    platformName: "GitHub Commits",
    username: "creativestackagency",
    subtitle: "2.5k Commits • Repositories",
    ctaText: "Inspect Repositories",
    visitUrl: "https://github.com/creativestackagency",
    brandColor: "#ffffff",
    accentBg: "from-slate-800/10 to-gray-900/10",
    backgroundImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    caption: "💻 High-performance open-source libraries, clean React boilerplates, and developer deployment files.",
    statsText: "2.4k+ Commits",
    interactionType: "github"
  },
  {
    id: "linkedin",
    platformName: "LinkedIn Network",
    username: "Creative Stack Agency",
    subtitle: "B2B Milestones • Corporate Feed",
    ctaText: "Connect on LinkedIn",
    visitUrl: "https://www.linkedin.com/in/akram-academy-3a297b407",
    brandColor: "#0077B5",
    accentBg: "from-blue-500/10 to-indigo-500/10",
    backgroundImage: "https://images.unsplash.com/photo-1521791136361-2e4a7e000252?auto=format&fit=crop&w=800&q=80",
    caption: "👔 Professional insights, corporate reviews, strategic updates, and structural announcements.",
    statsText: "Corporate Feed",
    interactionType: "linkedin"
  },
  {
    id: "facebook",
    platformName: "Facebook Community",
    username: "Creative Stack Agency",
    subtitle: "Official Business Page • Updates",
    ctaText: "Join Facebook Page",
    visitUrl: "https://www.facebook.com/profile.php?id=61590618728298",
    brandColor: "#1877F2",
    accentBg: "from-blue-600/10 to-blue-700/10",
    backgroundImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    caption: "👥 Full community reviews, client case study reels, active discussion boards, and corporate updates.",
    statsText: "Official Page",
    interactionType: "facebook"
  },
  {
    id: "telegram",
    platformName: "Telegram Channel",
    username: "Creative Stack Agency",
    subtitle: "Direct Contact • Active Now",
    ctaText: "Connect on Telegram",
    visitUrl: "https://t.me/+923027434569",
    brandColor: "#0088cc",
    accentBg: "from-[#0088cc]/10 to-[#0088cc]/20",
    backgroundImage: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=800&q=80",
    caption: "✈️ Chat directly with Creative Stack Agency (+92 302 7434569) on Telegram for instant onboarding and custom designs.",
    statsText: "03027434569",
    interactionType: "telegram"
  }
];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem("creative_stack_testimonials");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0].rating === "number") {
          return parsed;
        }
      }
      return TESTIMONIALS_DATA;
    } catch {
      return TESTIMONIALS_DATA;
    }
  });
  const [activeReviewId, setActiveReviewId] = useState<string>("t1");
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [storyProgress, setStoryProgress] = useState<number>(0);
  const [isStoryPlaying, setIsStoryPlaying] = useState<boolean>(true);
  const [whatsappNotifications, setWhatsappNotifications] = useState<number>(0);
  const [animatedHearts, setAnimatedHearts] = useState<{ id: number; left: number }[]>([]);

  // Form states for submitting a review
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [newClientName, setNewClientName] = useState<string>("");
  const [newRole, setNewRole] = useState<string>("");
  const [newCompanyName, setNewCompanyName] = useState<string>("");
  const [newRating, setNewRating] = useState<number>(5);
  const [newQuote, setNewQuote] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const activeStory = STORIES_DATA[activeStoryIndex];

  // Rotate story progress automatically
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isStoryPlaying) {
      timer = setInterval(() => {
        setStoryProgress((prev) => {
          if (prev >= 100) {
            // Move to next story
            setActiveStoryIndex((prevIdx) => (prevIdx + 1) % STORIES_DATA.length);
            return 0;
          }
          return prev + 1; // Faster tick for smoother response
        });
      }, 50); // total 5 seconds per story (100 * 50ms)
    }
    return () => clearInterval(timer);
  }, [isStoryPlaying, activeStoryIndex]);

  // Handle WhatsApp mock arrival
  useEffect(() => {
    if (activeStory.interactionType === "whatsapp") {
      const interval = setInterval(() => {
        setWhatsappNotifications((prev) => (prev + 1) % 4);
      }, 1500);
      return () => clearInterval(interval);
    } else {
      setWhatsappNotifications(0);
    }
  }, [activeStoryIndex]);

  // Handle TikTok hearts generator
  useEffect(() => {
    if (activeStory.interactionType === "tiktok") {
      const interval = setInterval(() => {
        setAnimatedHearts((prev) => [
          ...prev.slice(-15),
          { id: Date.now(), left: Math.floor(Math.random() * 40) + 30 }
        ]);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setAnimatedHearts([]);
    }
  }, [activeStoryIndex]);

  // Manual story navigation
  const handlePrevStory = () => {
    setActiveStoryIndex((prev) => {
      const nextIdx = prev === 0 ? STORIES_DATA.length - 1 : prev - 1;
      setStoryProgress(0);
      return nextIdx;
    });
  };

  const handleNextStory = () => {
    setActiveStoryIndex((prev) => {
      const nextIdx = (prev + 1) % STORIES_DATA.length;
      setStoryProgress(0);
      return nextIdx;
    });
  };

  const selectStory = (idx: number) => {
    setActiveStoryIndex(idx);
    setStoryProgress(0);
  };

  // Get platforms icon
  const getPlatformIcon = (type: string, className: string) => {
    switch (type) {
      case "whatsapp":
        return <MessageCircle className={className} />;
      case "tiktok":
        return <Music className={className} />;
      case "youtube":
        return <Youtube className={className} />;
      case "instagram":
        return <Instagram className={className} />;
      case "github":
        return <Github className={className} />;
      case "linkedin":
        return <Linkedin className={className} />;
      case "facebook":
        return <Facebook className={className} />;
      case "telegram":
        return <Send className={className} />;
      default:
        return <MessageCircle className={className} />;
    }
  };

  const saveTestimonials = (items: any[]) => {
    try {
      localStorage.setItem("creative_stack_testimonials", JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    if (!newClientName.trim()) newErrors.clientName = "Name is required";
    if (!newRole.trim()) newErrors.role = "Role is required";
    if (!newCompanyName.trim()) newErrors.companyName = "Company/Agency is required";
    if (!newQuote.trim()) newErrors.quote = "Feedback is required";
    else if (newQuote.trim().length < 10) newErrors.quote = "Review must be at least 10 characters long";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    
    const newId = `t-user-${Date.now()}`;
    const newReviewItem = {
      id: newId,
      clientName: newClientName,
      role: newRole,
      companyName: newCompanyName,
      rating: newRating,
      quote: newQuote,
      companyLogoSvg: `<svg viewBox="0 0 100 24" fill="currentColor" class="h-5 text-gray-500 hover:text-white transition-colors"><rect x="15" y="6" width="12" height="12" rx="2" fill-opacity="0.5"/><text x="40" y="16" font-family="monospace" font-size="10" font-weight="semibold" letter-spacing="1">${newCompanyName.substring(0, 8).toUpperCase()}</text></svg>`
    };

    const updatedTestimonials = [newReviewItem, ...testimonials];
    setTestimonials(updatedTestimonials);
    saveTestimonials(updatedTestimonials);
    void postToBackend("/api/testimonials", newReviewItem);
    setActiveReviewId(newId);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
      setNewClientName("");
      setNewRole("");
      setNewCompanyName("");
      setNewRating(5);
      setNewQuote("");
    }, 2000);
  };

  const activeReview = testimonials.find(r => r.id === activeReviewId) || testimonials[0];

  return (
    <section id="testimonials" className="relative py-28 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background radial spotlight circles */}
      <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-blue-500/5 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 font-mono text-[10px] uppercase text-blue-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            REVIEWS & STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4 animate-float">
            What Elite Brands Say About Us<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Leading agencies do not hide behind vague promises. Explore our direct corporate client testimonials, and watch our live active social channels reels and status feeds.
          </p>
        </div>

        {/* Dynamic Split block: Left testimonials reader, Right active interactive social stories feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Testimonial Reader */}
          <div className="lg:col-span-7 space-y-6">
            
            {isFormOpen ? (
              <div className="relative rounded-2xl bg-slate-900/40 border border-blue-500/30 p-8 shadow-2xl backdrop-blur-sm animate-fade-in">
                <div className="absolute top-6 right-6 font-mono text-[9px] text-blue-400 font-bold bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  NEW REVIEW
                </div>
                
                <h3 className="font-display font-bold text-lg text-white mb-1 flex items-center gap-2">
                  <span>Elite Experience Submission</span>
                  <Award className="w-4 h-4 text-yellow-400" />
                </h3>
                <p className="text-gray-400 text-xs font-light mb-6">
                  Share your high-status milestone outcome working with Creative Stack Agency.
                </p>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-3 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-bounce">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="font-display font-bold text-md text-emerald-400">Review Submitted Successfully!</h4>
                    <p className="text-xs text-gray-300 font-light">Your digital brand endorsement is now active in our global feed.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    {/* Two column inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Your Name</label>
                        <input
                          type="text"
                          value={newClientName}
                          onChange={(e) => setNewClientName(e.target.value)}
                          placeholder="e.g. Aftab Akram"
                          className={`bg-slate-950/80 border rounded-xl px-4 py-2.5 text-xs text-gray-200 focus:border-blue-500/50 focus:outline-none transition-colors ${
                            errors.clientName ? "border-red-500" : "border-white/10"
                          }`}
                        />
                        {errors.clientName && <span className="text-[9px] text-red-500 font-mono">{errors.clientName}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Your Role & Title</label>
                        <input
                          type="text"
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                          placeholder="e.g. Founder & CEO"
                          className={`bg-slate-950/80 border rounded-xl px-4 py-2.5 text-xs text-gray-200 focus:border-blue-500/50 focus:outline-none transition-colors ${
                            errors.role ? "border-red-500" : "border-white/10"
                          }`}
                        />
                        {errors.role && <span className="text-[9px] text-red-500 font-mono">{errors.role}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Company / Brand Name</label>
                        <input
                          type="text"
                          value={newCompanyName}
                          onChange={(e) => setNewCompanyName(e.target.value)}
                          placeholder="e.g. Creative Stack Agency"
                          className={`bg-slate-950/80 border rounded-xl px-4 py-2.5 text-xs text-gray-200 focus:border-blue-500/50 focus:outline-none transition-colors ${
                            errors.companyName ? "border-red-500" : "border-white/10"
                          }`}
                        />
                        {errors.companyName && <span className="text-[9px] text-red-500 font-mono">{errors.companyName}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5 justify-center">
                        <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold mb-1">Elite Star Rating</label>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewRating(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              className="focus:outline-none p-1 transition-transform hover:scale-125 cursor-pointer"
                            >
                              <Star
                                className={`w-5 h-5 ${
                                  star <= (hoverRating || newRating)
                                    ? "fill-yellow-500 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
                                    : "text-gray-600"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Your Review & Feedback</label>
                      <textarea
                        value={newQuote}
                        onChange={(e) => setNewQuote(e.target.value)}
                        placeholder="Describe your design aesthetics, speed, conversion rates, or milestones delivered by our elite team..."
                        rows={3}
                        className={`bg-slate-950/80 border rounded-xl px-4 py-2.5 text-xs text-gray-200 focus:border-blue-500/50 focus:outline-none transition-colors resize-none ${
                          errors.quote ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.quote && <span className="text-[9px] text-red-500 font-mono">{errors.quote}</span>}
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="px-4 py-2 rounded-xl text-xs font-mono border border-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        CANCEL
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        SUBMIT ENDORSEMENT
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="relative rounded-2xl bg-agency-card border border-white/15 p-8 shadow-2xl animate-fade-in">
                <Quote className="absolute top-6 right-6 w-16 h-16 text-white/[0.02] pointer-events-none" />

                {/* Stars render */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(activeReview?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-400" />
                  ))}
                </div>

                {/* Quote block */}
                <blockquote className="text-white text-md sm:text-lg leading-relaxed font-light mb-8 italic">
                  "{activeReview.quote}"
                </blockquote>

                {/* Client info bar */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-400/20 flex items-center justify-center font-display font-bold text-blue-400 text-sm">
                      {activeReview.clientName.charAt(0)}
                    </div>
                    <div>
                      <span className="block font-display font-bold text-white text-sm">
                        {activeReview.clientName}
                      </span>
                      <span className="block text-[11px] text-gray-400 font-mono">
                        {activeReview.role} at <span className="text-blue-400 font-medium">{activeReview.companyName}</span>
                      </span>
                    </div>
                  </div>

                  {/* Simulated corporate SVG vector logo */}
                  <div className="w-24 opacity-60 hover:opacity-100 transition-opacity">
                    {activeReview.companyLogoSvg && activeReview.companyLogoSvg.startsWith("<svg") ? (
                      <div dangerouslySetInnerHTML={{ __html: activeReview.companyLogoSvg }} />
                    ) : (
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{activeReview.companyName}</span>
                    )}
                  </div>

                </div>

              </div>
            )}

            {/* Testimonials Toggles */}
            <div className="flex items-center gap-3 pl-2 flex-wrap">
              {testimonials.map((rev: any) => (
                <button
                  key={rev.id}
                  onClick={() => {
                    setActiveReviewId(rev.id);
                    setIsFormOpen(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 border cursor-pointer ${
                    activeReviewId === rev.id && !isFormOpen
                      ? "bg-white/5 border-blue-500 text-blue-400 font-semibold"
                      : "bg-transparent border-white/5 text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {rev.companyName.toUpperCase()}
                </button>
              ))}

              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 border cursor-pointer flex items-center gap-1.5 ${
                  isFormOpen
                    ? "bg-blue-500 text-white border-blue-500 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-pulse"
                    : "bg-transparent border-[#0088cc]/30 text-blue-400 hover:border-blue-500 hover:text-blue-300 shadow-[0_0_10px_rgba(0,136,204,0.1)] hover:shadow-[0_0_15px_rgba(0,136,204,0.2)]"
                }`}
              >
                <span>{isFormOpen ? "VIEW REVIEWS" : "✍️ WRITE REVIEW"}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Premium Interactive Social Media Stories player mockup */}
          <div className="lg:col-span-5 relative">
            <h3 className="font-display font-medium text-xs text-gray-500 uppercase tracking-widest text-center lg:text-left mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              ELITE VIDEO STORIES & FEEDS
            </h3>

            {/* Stories Selector Rings */}
            <div className="flex items-center justify-between gap-1 mb-4 overflow-x-auto pb-2 scrollbar-none">
              {STORIES_DATA.map((story, index) => {
                const isActive = activeStoryIndex === index;
                return (
                  <button
                    key={story.id}
                    onClick={() => selectStory(index)}
                    className="flex flex-col items-center gap-1.5 focus:outline-none flex-shrink-0 cursor-pointer group"
                  >
                    {/* Ring indicator */}
                    <div className={`w-11 h-11 rounded-full p-[2px] transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-to-tr from-blue-500 via-pink-500 to-yellow-400 scale-105" 
                        : "bg-white/10 hover:bg-white/20"
                    }`}>
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                        {getPlatformIcon(story.interactionType, "w-4 h-4")}
                      </div>
                    </div>
                    <span className={`text-[9px] font-mono transition-colors ${
                      isActive ? "text-blue-400 font-semibold" : "text-gray-500 group-hover:text-gray-300"
                    }`}>
                      {story.id.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Simulated Phone viewport containing dynamic status media */}
            <div className="relative rounded-2xl border border-white/15 bg-slate-950 overflow-hidden shadow-2xl h-[420px] flex flex-col justify-between group">
              
              {/* Tap overlays left & right */}
              <div 
                onClick={handlePrevStory}
                className="absolute inset-y-0 left-0 w-[20%] z-20 cursor-w-resize"
                title="Previous Story"
              />
              <div 
                onClick={handleNextStory}
                className="absolute inset-y-0 right-0 w-[20%] z-20 cursor-e-resize"
                title="Next Story"
              />

              {/* Story background media simulation */}
              <div className="absolute inset-0 z-0">
                <img
                  src={activeStory.backgroundImage}
                  alt={activeStory.platformName}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-[1.01] transition-transform duration-[4000ms] ease-out pointer-events-none"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90 z-5`} />
                <div className="absolute inset-0 bg-grid-white/[0.02] z-5 pointer-events-none" />
              </div>

              {/* Progress Bars (Segmented Instagram Status indicator bar) */}
              <div className="relative z-30 p-3 flex gap-1 bg-slate-950/30 backdrop-blur-[1px]">
                {STORIES_DATA.map((st, idx) => {
                  let progressPercent = 0;
                  if (idx < activeStoryIndex) progressPercent = 100;
                  else if (idx === activeStoryIndex) progressPercent = storyProgress;
                  return (
                    <div key={st.id} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-75 ease-linear"
                        style={{ 
                          width: `${progressPercent}%`,
                          backgroundColor: activeStory.brandColor 
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Live Status Top Info Bar */}
              <div className="relative z-20 px-4 py-2 flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  {/* Mock platform icon badge with color */}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs shadow-md border border-white/10" 
                       style={{ backgroundColor: activeStory.brandColor + '25', borderColor: activeStory.brandColor + '40' }}>
                    {getPlatformIcon(activeStory.interactionType, "w-4 h-4")}
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-display font-medium text-xs text-white flex items-center gap-1">
                        {activeStory.username}
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 fill-current" />
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-gray-400 block -mt-0.5">
                      {activeStory.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 z-30">
                  <button 
                    onClick={() => setIsStoryPlaying(!isStoryPlaying)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {isStoryPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[8px] font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded text-gray-400 uppercase tracking-widest leading-none">
                    {activeStory.statsText}
                  </span>
                </div>
              </div>

              {/* Dynamic Interactive Render depending on platform style */}
              <div className="relative z-10 flex-1 px-4 flex flex-col justify-center pointer-events-none">
                
                {activeStory.interactionType === "whatsapp" && (
                  <div className="space-y-2 max-w-[90%] mx-auto w-full">
                    {/* Simulated incoming chat messages with realistic typing delayed effect */}
                    <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-2.5 backdrop-blur-sm self-start animate-fade-in text-[11px] leading-relaxed relative overflow-hidden">
                      <div className="flex items-center gap-1.5 mb-1 text-[9px] font-semibold text-emerald-400">
                        <span>Aftab Akram</span>
                        <span className="text-gray-500">• Founder</span>
                      </div>
                      <p className="text-gray-200">Just pushed 3 massive MERN stack dashboard modules live in our GitHub portfolio!</p>
                    </div>

                    {whatsappNotifications >= 1 && (
                      <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-2.5 backdrop-blur-sm self-start animate-fade-in text-[11px] leading-relaxed">
                        <div className="flex items-center gap-1.5 mb-1 text-[9px] font-semibold text-emerald-400">
                          <span>M. Sami Ullah</span>
                          <span className="text-gray-500">• CTO & Lead</span>
                        </div>
                        <p className="text-gray-200">Perfect. Integrations are running flawlessly across all custom client builds.</p>
                      </div>
                    )}

                    {whatsappNotifications >= 2 && (
                      <div className="bg-slate-900/40 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm self-start animate-fade-in text-[11px] leading-relaxed">
                        <div className="flex items-center gap-1.5 mb-1 text-[9px] font-semibold text-blue-400">
                          <span>Maryam Nawaz</span>
                          <span className="text-gray-500">• Partner</span>
                        </div>
                        <p className="text-gray-200">Both custom UI databases are now 100% responsive and active.</p>
                      </div>
                    )}
                  </div>
                )}

                {activeStory.interactionType === "tiktok" && (
                  <div className="relative h-full w-full flex items-end justify-between pb-2">
                    {/* Floating Hearts overlay */}
                    <div className="absolute inset-y-0 right-10 left-10 overflow-hidden pointer-events-none">
                      {animatedHearts.map((heart) => (
                        <div
                          key={heart.id}
                          className="absolute text-red-500 font-bold animate-float pointer-events-none text-xl"
                          style={{
                            left: `${heart.left}%`,
                            bottom: '0px',
                            animationDuration: '1.8s',
                            opacity: 0.8
                          }}
                        >
                          ❤️
                        </div>
                      ))}
                    </div>

                    {/* TikTok User Data and Spinning Music disk */}
                    <div className="flex-1 pr-6 flex flex-col justify-end text-left">
                      <div className="text-[10px] text-gray-300 font-light max-w-[85%] self-start space-y-1">
                        <p className="text-blue-300 font-bold">@creative.stack.ag</p>
                        <p className="leading-snug">Speed-building a premium responsive React dashboard in 45 seconds! #React #MERN #UI #Design</p>
                        <p className="text-gray-400 flex items-center gap-1 pt-1 font-mono text-[9px]">
                          <Music className="w-3 h-3 text-red-400 animate-spin" />
                          Creative Stack Agency - Original Sound
                        </p>
                      </div>
                    </div>

                    {/* Right vertical TikTok action buttons */}
                    <div className="flex flex-col gap-2.5 items-center mr-1">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-rose-500">
                          <Heart className="w-4 h-4 fill-current text-red-500" />
                        </div>
                        <span className="text-[8px] text-gray-400 font-mono">1.2K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[8px] text-gray-400 font-mono">240</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white">
                          <Share2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[8px] text-gray-400 font-mono">Share</span>
                      </div>
                      {/* Spinning Disk */}
                      <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center animate-spin">
                        <div className="w-3 h-3 rounded-full bg-black border border-white/20" />
                      </div>
                    </div>
                  </div>
                )}

                {activeStory.interactionType === "youtube" && (
                  <div className="w-full text-center space-y-2 py-6">
                    <div className="aspect-video w-[90%] mx-auto rounded-xl border border-white/10 bg-black/80 relative overflow-hidden flex items-center justify-center group-hover:border-red-500/40 transition-colors">
                      {/* Subscriptions count floating */}
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-red-600 rounded text-[8px] font-mono font-bold uppercase tracking-wider text-white">
                        4K ULTRA
                      </span>

                      {/* YouTube Play Icon centered */}
                      <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>

                      {/* Video status feedback bar */}
                      <div className="absolute inset-x-0 bottom-0 p-1.5 bg-black/70 flex items-center justify-between text-[8px] font-mono text-gray-400">
                        <span>08:45 / 15:30</span>
                        <span>Auto HD</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-200">"Mastering Modular MERN React Architecture Strategy"</p>
                      <p className="text-[9px] text-gray-400 mt-0.5 font-mono">18k+ active corporate developers joined our coding hubs.</p>
                    </div>
                  </div>
                )}

                {activeStory.interactionType === "instagram" && (
                  <div className="w-full h-full flex flex-col justify-between py-6">
                    <div className="flex-1 flex items-center justify-center">
                      {/* Interactive mock Figma poll sticker */}
                      <div className="bg-slate-900/80 border border-pink-500/30 rounded-xl p-4 text-center backdrop-blur-md shadow-2xl max-w-[85%] w-full">
                        <span className="text-[9px] uppercase font-mono tracking-wider text-pink-400 font-semibold block mb-1">CSA FIGMA POLL</span>
                        <h4 className="text-xs font-semibold text-white mb-3">Rate our latest Custom High-Contrast dark dashboard concept!</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <button className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-[10px] text-gray-200 hover:bg-pink-500 hover:text-white transition-all cursor-pointer">
                            Amazing! 🔥 (87%)
                          </button>
                          <button className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-[10px] text-gray-200 hover:bg-pink-500 hover:text-white transition-all cursor-pointer">
                            Incredible 🚀 (13%)
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Location sticker */}
                    <div className="self-center bg-white/10 border border-white/10 rounded-full py-1 px-3 backdrop-blur-sm shadow-md text-[9px] font-mono text-blue-300 flex items-center gap-1.5 animate-bounce">
                      📍 Okara, Punjab
                    </div>
                  </div>
                )}

                {activeStory.interactionType === "github" && (
                  <div className="w-full font-mono text-[9px] bg-slate-950/90 border border-white/5 rounded-xl p-3 shadow-lg space-y-1.5 max-w-[95%] mx-auto max-h-[160px] overflow-hidden text-left">
                    <div className="flex items-center justify-between border-b border-white/5 pb-1 text-gray-500">
                      <span>$ git log --oneline -n 3</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-emerald-400">
                      <span className="text-gray-500">c5d8e20</span> - <span className="text-white">feat: added responsive visual stories feed section</span>
                    </div>
                    <div className="text-emerald-400">
                      <span className="text-gray-500">a8d9311</span> - <span className="text-white">refactor: localized all custom student profiles</span>
                    </div>
                    <div className="text-emerald-400">
                      <span className="text-gray-500">e3f1012</span> - <span className="text-white">docs: completed detailed co-founder skill metrics</span>
                    </div>
                    <div className="pt-1.5 border-t border-white/5 flex items-center justify-between text-[8px] text-gray-500">
                      <span className="flex items-center gap-1">
                        <FileCode className="w-3 h-3 text-blue-400" />
                        types.ts & data.ts
                      </span>
                      <span className="text-emerald-500">Deploy Successful</span>
                    </div>
                  </div>
                )}

                {activeStory.interactionType === "linkedin" && (
                  <div className="w-full py-4 px-2">
                    <div className="bg-slate-900/75 border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm space-y-3 shadow-xl text-left max-w-[95%] mx-auto">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-[11px] font-bold text-white uppercase tracking-tight">Creative Stack Agency (CSA)</h4>
                          <span className="text-[8px] font-mono text-gray-400 block mt-0.5">2,300 followers • Web Development Leads</span>
                        </div>
                        <Award className="w-5 h-5 text-blue-400" />
                      </div>
                      
                      <p className="text-[10px] leading-relaxed text-gray-300 font-light">
                        "We are proud to announce the continuous evolution of our Web Development services. Over 40 enterprise projects delivered in Okara, Lodhran, and Gojra, Punjab. Scaling digital pipelines is corporate art."
                      </p>

                      <div className="flex items-center gap-3 pt-1 border-t border-white/5 text-[8px] text-gray-400">
                        <div className="flex items-center gap-1">
                          <span className="text-rose-400">👍</span><span>120 Recommendations</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>💬</span><span>48 Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStory.interactionType === "facebook" && (
                  <div className="w-full py-4 px-2">
                    <div className="bg-slate-900/80 border border-blue-600/20 rounded-xl p-4 backdrop-blur-sm text-left max-w-[95%] mx-auto space-y-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                          F
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold text-white">Creative Stack Official Business Page</h4>
                          <span className="text-[7px] font-mono text-gray-400 block -mt-0.5">Punjab, Pakistan • Recommended by 100% clients</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-gray-200">
                        Check out our official business milestone review highlights! Visit our page to explore complete case studies, live previews, and design systems.
                      </p>

                      <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px] text-gray-400 font-mono">
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <ThumbsUp className="w-3 h-3 text-blue-400" /> Like Page
                        </button>
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <Share2 className="w-3 h-3" /> Share Post
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeStory.interactionType === "telegram" && (
                  <div className="w-full py-4 px-2">
                    <div className="bg-[#0f1d2a]/90 border border-[#0088cc]/20 rounded-xl p-4 backdrop-blur-sm text-left max-w-[95%] mx-auto space-y-2.5 animate-fade-in">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#0088cc] flex items-center justify-center text-white font-bold text-xs">
                          CS
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold text-white">Creative Stack Agency</h4>
                          <span className="text-[7px] font-mono text-[#00aaff] block -mt-0.5">Online • Official Channel</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-gray-200 leading-relaxed">
                        Hello! Welcome to Creative Stack Agency. You can message our team anytime at <span className="text-[#00aaff] font-mono font-medium">+92 302 7434569</span> or start a secure chat for dynamic high-performance UI designs and system integrations.
                      </p>

                      <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[8px] text-gray-500 font-mono">
                        <span className="flex items-center gap-1 text-[#00aaff]">
                          <CheckCircle2 className="w-3 h-3 text-[#00aaff] fill-current" /> delivered & active
                        </span>
                        <span>10:14 AM</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Dynamic Bottom Captions Frame */}
              <div className="relative z-20 p-4">
                
                {/* Simulated captions text */}
                <div className="min-h-12 text-center mb-3 px-2 flex items-center justify-center">
                  <p className="text-[11px] sm:text-xs text-blue-200 font-display font-light leading-relaxed">
                    "{activeStory.caption}"
                  </p>
                </div>

                {/* Main Prominent Call-To-Action Button targeting that specific account */}
                <a
                  href={activeStory.visitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl font-display font-semibold text-xs text-white transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] pointer-events-auto filter brightness-100 hover:brightness-110 active:scale-95"
                  style={{ 
                    backgroundColor: activeStory.brandColor, 
                    boxShadow: `0 4px 20px ${activeStory.brandColor}30` 
                  }}
                >
                  <span>{activeStory.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
