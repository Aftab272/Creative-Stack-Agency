import React, { useState, useEffect } from "react";
import {
  Sparkles, BookOpen, Clock, Calendar, ShieldCheck, Award, MessageCircle,
  Users, CheckCircle, GraduationCap, ArrowRight, PlayCircle, Star, Send,
  User, ClipboardCheck, DollarSign, Wallet, Phone, BookOpenCheck, HelpCircle,
  Check, RefreshCw, Layers
} from "lucide-react";
import { postToBackend } from "../lib/api";

interface EnrollRecord {
  id: string;
  studentName: string;
  fatherName: string;
  education: string;
  field: string;
  instituteName: string;
  courseSelected: string;
  phone: string;
  paymentMethod: string;
  paymentAddress: string;
  classTime: string;
  timePeriod: string;
  certificateOpt: boolean;
  weekendTestOpt: boolean;
  score: number;
  enrolledAt: string;
  status: string;
}

const COURSES_DATA = [
  {
    id: "mern-mastery",
    title: "MERN Full Stack Development Mastery",
    mentor: "M Aftab Akram & M Sami Ullah",
    period: "3 Months",
    timings: "05:00 PM - 06:30 PM",
    days: "Monday - Friday (Weekly Test Sat)",
    price: "15,000 PKR Only",
    badge: "Most Demanded",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript API", "Deployment Platforms"],
    description: "Go from scratch to deploying advanced production systems. Build ultra-fast database architectures, secure cookie authentications, and pixel-perfect custom animated React layouts."
  },
  {
    id: "python-ai",
    title: "Python AI & Agentic Automation Systems",
    mentor: "M Hasnain",
    period: "3 Months",
    timings: "07:00 PM - 08:30 PM",
    days: "Monday - Friday (Weekly Test Sat)",
    price: "15,000 PKR Only",
    badge: "Cutting-Edge AI",
    skills: ["AI Agents", "Python", "Large Language Models", "Automation Pipelines", "FastAPI", "Prompt Eng."],
    description: "Engineer custom context-aware AI models. Connect @google/genai wrappers, structure automated task routines, process workflows, and manage relational storage endpoints."
  },
  {
    id: "uiux-interactive",
    title: "Advanced UI/UX Web Design & CSS Animation",
    mentor: "Shumaila Zulfqar & Ayesha Aslam",
    period: "3 Months",
    timings: "03:30 PM - 05:00 PM",
    days: "Monday - Friday (Weekly Test Sat)",
    price: "12,000 PKR Only",
    badge: "Luxury UI Grid",
    skills: ["Figma Gradients", "CSS Keyframes", "Micro-interactions", "Prototyping", "Design Systems"],
    description: "Craft elite luxury user interfaces. Master whitespace rhythms, font pairing hierarchies, custom SVG vector designs, glassmorphisms, and premium interactive hover transitions."
  },
  {
    id: "graphic-design",
    title: "Graphic Design, Branding & Adobe Creative Cloud",
    mentor: "Ume Tehreem",
    period: "2.5 Months",
    timings: "12:00 PM - 01:30 PM",
    days: "Monday - Friday (Weekly Test Sat)",
    price: "10,000 PKR Only",
    badge: "Creative Art",
    skills: ["Adobe Illustrator", "Photoshop Layouts", "Typography Layout", "Branding Assets", "Logo Design"],
    description: "Develop pristine brand identities, logos, brochures, high-converting social media posts, corporate decks, and high-status illustrations. Master color theory, branding grids, and vector shapes."
  },
  {
    id: "digital-marketing",
    title: "Social Media & Digital Marketing",
    mentor: "Maryam Nawaz",
    period: "2.5 Months",
    timings: "10:30 AM - 12:00 PM",
    days: "Monday - Friday (Weekly Test Sat)",
    price: "10,000 PKR Only",
    badge: "Business Growth",
    skills: ["SEO Optimization", "Content Strategy", "Meta Ads Manager", "Google Analytics", "Brand Campaigns"],
    description: "Drive hyper-targeted client lead flows, configure automated Facebook Pixel metrics, scale organic traffic footprints, manage highbudget social marketing accounts, and formulate SEO strategies."
  },
  {
    id: "ms-office",
    title: "Creative MS Office Mastery & Documentation",
    mentor: "M Sami Ullah",
    period: "2 Months",
    timings: "02:00 PM - 03:30 PM",
    days: "Monday - Friday (Weekly Test Sat)",
    price: "8,000 PKR Only",
    badge: "Essential Office",
    skills: ["Advanced Excel", "MS Word", "PowerPoint Decks", "Business Reports", "Formula Automations"],
    description: "Become an expert in premium documentation. Create high-affinity data charts, automated spreadsheet formula maps, corporate templates, and outstanding pitch presentation layouts."
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which technologies form the popular high-performance 'MERN' stack?",
    options: [
      "MySQL, Express, React, Node.js",
      "MongoDB, Express, React, Node.js",
      "MongoDB, Ember, Ruby, NestJS",
      "MySQL, Elixir, React, Next.js"
    ],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    id: 2,
    question: "Which model series is developed by Google for high-level multi-modal reasoning?",
    options: [
      "GPT-4",
      "Claude",
      "Gemini",
      "DeepSeek"
    ],
    answerIndex: 2,
    category: "AI"
  },
  {
    id: 3,
    question: "What is the typical web load performance speed target delivered by Creative Stack Agency for landers?",
    options: [
      "Under 2.5 seconds",
      "Under 1.0 second",
      "Under 0.2 seconds",
      "Around 5.0 seconds"
    ],
    answerIndex: 2,
    category: "Creative Stack Services"
  },
  {
    id: 4,
    question: "Which design tool is primarily used at Creative Stack Agency for vector UI mockups & high-fidelity art?",
    options: [
      "Figma",
      "Adobe Photoshop",
      "Paint 3D",
      "Corel DRAW"
    ],
    answerIndex: 0,
    category: "Creative Stack Services"
  },
  {
    id: 5,
    question: "In CPU & GPU computer processing systems, what does GPU stand for?",
    options: [
      "General Processing Unit",
      "Graphics Processing Unit",
      "Global Power Utility",
      "Gateway Protocol Unit"
    ],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    id: 6,
    question: "In Artificial Intelligence (AI) model integration, what does NLP stand for?",
    options: [
      "Neural Language Protocol",
      "Network Loop Protection",
      "Natural Language Processing",
      "Node Latency Path"
    ],
    answerIndex: 2,
    category: "AI"
  },
  {
    id: 7,
    question: "Which SQL database utilizes relational columns and structural table models?",
    options: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Cassandra"
    ],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    id: 8,
    question: "What is the professional title and role of Maryam Nawaz inside Creative Stack Agency?",
    options: [
      "UI Designer only",
      "Partner & Co-Founder · Full Stack Developer",
      "General Recruiter",
      "System Administrator"
    ],
    answerIndex: 1,
    category: "Creative Stack Services"
  },
  {
    id: 9,
    question: "Who is widely recognized as the historical 'Father of Computer Science'?",
    options: [
      "Bill Gates",
      "Elon Musk",
      "Alan Turing",
      "Steve Jobs"
    ],
    answerIndex: 2,
    category: "General Knowledge"
  },
  {
    id: 10,
    question: "Which CSS utility framework does Creative Stack Agency default to for pristine responsive styling?",
    options: [
      "Tailwind CSS",
      "Bootstrap 3",
      "Material UI CSS",
      "Sass variables"
    ],
    answerIndex: 0,
    category: "Creative Stack Services"
  },
  {
    id: 11,
    question: "What does the abbreviation 'AI' stand for?",
    options: [
      "Automated Interface",
      "Artificial Intelligence",
      "Analytical Information",
      "Applied Integration"
    ],
    answerIndex: 1,
    category: "AI"
  },
  {
    id: 12,
    question: "Which program code is primarily parsed on client-side inside standard web browsers?",
    options: [
      "Python",
      "JavaScript / ECMAScript",
      "C++ Code",
      "Ruby script"
    ],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    id: 13,
    question: "Who is the Director at Creative Stack Agency overseeing core project solutions?",
    options: [
      "Aftab Akram",
      "Sundar Pichai",
      "Mark Zuckerberg",
      "Satya Nadella"
    ],
    answerIndex: 0,
    category: "Creative Stack Services"
  },
  {
    id: 14,
    question: "Which of these is a strongly typed superset of JavaScript commonly compiled to vanilla JS?",
    options: [
      "Python 3",
      "C# Language",
      "TypeScript",
      "PHP Web Engine"
    ],
    answerIndex: 2,
    category: "Computer Science"
  },
  {
    id: 15,
    question: "Which of these is primarily utilized for offline vector design and document styling rather than web search query lookups?",
    options: [
      "Google Search",
      "Microsoft Bing",
      "Yahoo Portal",
      "Microsoft Word & Office"
    ],
    answerIndex: 3,
    category: "General Knowledge"
  }
];

export default function CoursesSection() {
  // Navigation & Interactive states
  const [activeTab, setActiveTab] = useState<"catalog" | "quiz" | "form" | "records">("catalog");
  const [selectedCourse, setSelectedCourse] = useState<string>("mern-mastery");
  
  // Test/Quiz states
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Form registration states
  const [fullname, setFullname] = useState<string>("");
  const [fatherName, setFatherName] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [field, setField] = useState<string>("");
  const [instituteName, setInstituteName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("JazzCash");
  const [paymentAddress, setPaymentAddress] = useState<string>("");
  const [classTime, setClassTime] = useState<string>("05:00 PM - 06:30 PM");
  const [timePeriod, setTimePeriod] = useState<string>("3 Months");
  const [certificateOpt, setCertificateOpt] = useState<boolean>(true);
  const [weekendTestOpt, setWeekendTestOpt] = useState<boolean>(true);

  // Error/Success state managers
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [newStudentId, setNewStudentId] = useState<string>("");

  // Saved records
  const [myEnrollments, setMyEnrollments] = useState<EnrollRecord[]>([]);

  // Real-time dynamic simulator state for students currently taking active classes
  const [liveStudentCounts, setLiveStudentCounts] = useState<{ [key: string]: number }>({
    "mern-mastery": 42,
    "python-ai": 36,
    "uiux-interactive": 39,
    "graphic-design": 31,
    "digital-marketing": 35,
    "ms-office": 28
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate slight numeric variation in student count to look perfectly realistic
      setLiveStudentCounts(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(key => {
          const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
          const newVal = next[key] + delta;
          if (next[key] !== undefined && newVal >= 22 && newVal <= 60) {
            next[key] = newVal;
          }
        });
        return next;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("creative_stack_enrollments");
      if (saved) {
        setMyEnrollments(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Local storage lookup failed", e);
    }
  }, []);

  // Update time period when course changes
  useEffect(() => {
    const matched = COURSES_DATA.find(c => c.id === selectedCourse);
    if (matched) {
      setTimePeriod(matched.period);
      setClassTime(matched.timings);
    }
  }, [selectedCourse]);

  const handleSelectAnswer = (optionIndex: number) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: optionIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const evaluateQuiz = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (userAnswers[idx] === q.answerIndex) {
        score += 2; // Each correct question gets 2 marks (total 30 marks)
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    // Proceed to form phase after feedback
    setTimeout(() => {
      setActiveTab("form");
    }, 2800);
  };

  const startEligibilityQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setQuizScore(null);
    setQuizSubmitted(false);
    setQuizStarted(true);
    setActiveTab("quiz");
  };

  const handleRestartQuiz = () => {
    startEligibilityQuiz();
  };

  const handleCourseEnrollClick = (courseId: string) => {
    setSelectedCourse(courseId);
    startEligibilityQuiz();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!fullname.trim()) errors.fullname = "Full Name is required";
    if (!fatherName.trim()) errors.fatherName = "Father's Name is required";
    if (!education.trim()) errors.education = "Educational degree is required";
    if (!field.trim()) errors.field = "Field / Subject of study is required";
    if (!instituteName.trim()) errors.instituteName = "Institute Name is required";
    if (!phone.trim()) errors.phone = "Phone number is required";
    if (!paymentAddress.trim()) errors.paymentAddress = "Transaction ID / Payment Verification is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const studentUid = `CSA-STU-${Math.floor(10000 + Math.random() * 90000)}-2026`;
    const finalScore = quizScore ?? 0;

    const newEnrollment: EnrollRecord = {
      id: studentUid,
      studentName: fullname,
      fatherName,
      education,
      field,
      instituteName,
      courseSelected: selectedCourse,
      phone,
      paymentMethod,
      paymentAddress,
      classTime,
      timePeriod,
      certificateOpt,
      weekendTestOpt,
      score: finalScore,
      enrolledAt: new Date().toLocaleString(),
      status: "Verification Pending"
    };

    const updatedList = [newEnrollment, ...myEnrollments];
    setMyEnrollments(updatedList);
    try {
      localStorage.setItem("creative_stack_enrollments", JSON.stringify(updatedList));
    } catch (err) {
      console.error(err);
    }
    void postToBackend("/api/enrollments", newEnrollment);

    setNewStudentId(studentUid);
    setSubmissionSuccess(true);

    // Send WhatsApp messages
    const courseTitle = getCourseTitle(selectedCourse);
    const text = encodeURIComponent(`Hello, I have submitted my course application.\nName: ${fullname}\nCourse: ${courseTitle}\nPhone: ${phone}\nID: ${studentUid}`);
    
    // Open first WhatsApp window
    window.open(`https://wa.me/92302743456?text=${text}`, '_blank');
    
    // Open second WhatsApp window with slight delay to avoid aggressive popup blockers
    setTimeout(() => {
      window.open(`https://wa.me/923047556084?text=${text}`, '_blank');
    }, 600);

    // Timeout clear form fields
    setTimeout(() => {
      setSubmissionSuccess(false);
      setFullname("");
      setFatherName("");
      setEducation("");
      setField("");
      setInstituteName("");
      setPhone("");
      setPaymentAddress("");
      setActiveTab("records");
    }, 3500);
  };

  const getCourseTitle = (courseId: string) => {
    const item = COURSES_DATA.find(c => c.id === courseId);
    return item ? item.title : "Creative Stack Course";
  };

  const getMentorForCourse = (courseId: string) => {
    const item = COURSES_DATA.find(c => c.id === courseId);
    return item ? item.mentor : "Creative Team Mentor";
  };

  return (
    <section id="courses" className="relative py-28 bg-transparent overflow-hidden border-t border-white/5">
      {/* Absolute glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/10 right-[10%] w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid structure details */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with dynamic stats metrics */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 font-mono text-[10px] uppercase text-purple-300 font-semibold tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            ELITE ONLINE SKILL ACADEMY
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight leading-none mb-4">
            Master the Highest Status Stacks
          </h2>
          
          <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Take our custom curated algorithmic eligibility entrance test, unlock high-retention technical training modules, study under elite Pakistani agency stakeholders, and secure certified verification keys.
          </p>

          {/* Quick Realtime Academy Counters */}
          <div className="grid grid-cols-3 max-w-lg mx-auto bg-white border border-gray-100 divide-x divide-gray-100 rounded-2xl py-4 shadow-sm">
            <div className="text-center">
              <span className="block text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">480+</span>
              <span className="block text-[9px] font-mono uppercase tracking-wider text-gray-500 mt-1">Total Students</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">320+</span>
              <span className="block text-[9px] font-mono uppercase tracking-wider text-gray-500 mt-1">Passout Alumni</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-display font-bold text-green-400 animate-pulse">12 Slots</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mt-1">Remaining present</span>
            </div>
          </div>
        </div>

        {/* Global tab panels toggle navigation */}
        <div className="flex items-center justify-center gap-3 mb-10 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("catalog")}
            className={`flex-1 py-2 px-3 text-xs font-mono font-medium rounded-xl border transition-all cursor-pointer text-center ${
              activeTab === "catalog"
                ? "bg-purple-500/10 border-purple-500/40 text-purple-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.15)]"
                : "bg-transparent border-white/5 text-gray-400 hover:text-white"
            }`}
          >
            📚 Courses Catalog
          </button>
          
          <button
            onClick={() => {
              if (quizStarted) {
                setActiveTab("quiz");
              } else {
                handleRestartQuiz();
              }
            }}
            className={`flex-1 py-2 px-3 text-xs font-mono font-medium rounded-xl border transition-all cursor-pointer text-center ${
              activeTab === "quiz"
                ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
                : "bg-white border-gray-100 text-gray-500 hover:text-gray-900"
            }`}
          >
            📋 Eligibility Quiz
          </button>

          <button
            onClick={() => setActiveTab("records")}
            className={`flex-1 py-2 px-3 text-xs font-mono font-medium rounded-xl border transition-all cursor-pointer text-center relative ${
              activeTab === "records"
                ? "bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm"
                : "bg-white border-gray-100 text-gray-500 hover:text-gray-900"
            }`}
          >
            👤 Your Admissions
            {myEnrollments.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-500 text-[8px] font-bold text-white flex items-center justify-center animate-bounce">
                {myEnrollments.length}
              </span>
            )}
          </button>
        </div>

        {/* Dynamic Panel Content Renderer */}
        {activeTab === "catalog" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-fade-in">
            {COURSES_DATA.map((course) => (
              <div 
                key={course.id}
                className="relative rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/20 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
              >
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#0a0a0ade] border border-purple-500/15 text-[8px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                  {course.badge}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 text-purple-400 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <BookOpenCheck className="w-4 h-4 text-purple-400 animate-pulse" />
                      <span>ADMISSION SLOTS OPEN</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold font-mono tracking-wide">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>CLASS LIVE</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 tracking-tight leading-tight group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>

                  {/* Mentor Block Information details */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-600 mt-3 font-mono border-b border-gray-100 pb-4 mb-4">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-500" />
                      Mentor: <strong className="text-gray-900 font-medium">{course.mentor}</strong>
                    </span>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      Timings: <strong className="text-gray-900 font-medium">{course.timings}</strong>
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                    {course.description}
                  </p>

                  {/* REAL-TIME STUDENT ATTENDANCE TELEMETRY */}
                  <div className="my-6 p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-2.5 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                    
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>LIVE SESSION</span>
                      </div>
                      <div className="text-gray-600">
                        <span className="text-emerald-600 font-extrabold text-sm">{liveStudentCounts[course.id] || 32} Students</span> taking class now
                      </div>
                    </div>

                    {/* Progress Bar of live headcount */}
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                        style={{ width: `${(((liveStudentCounts[course.id] || 32) / 60) * 100).toFixed(1)}%` }}
                      />
                    </div>

                    <div className="text-[10px] font-mono text-gray-500 flex items-center justify-between">
                      <span>Mon - Fri Active Streams</span>
                      <span>Class Size: 60 Limit</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider block font-semibold">Technical mastery skills delivered:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-gray-100 border border-gray-200 text-[10px] font-mono text-gray-700 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left w-full sm:w-auto">
                    <span className="block text-[9px] font-mono text-gray-500 uppercase">Interactive Course Fee</span>
                    <span className="text-lg font-mono font-bold text-emerald-600">{course.price}</span>
                  </div>

                  <button
                    onClick={() => handleCourseEnrollClick(course.id)}
                    className="w-full sm:w-auto py-2.5 px-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-semibold rounded-xl tracking-wide transition-all shadow-lg hover:shadow-purple-500/20 inline-flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>TAKE ELIGIBILITY QUIZ</span>
                    <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-gray-100 shadow-xl p-6 sm:p-10 backdrop-blur-md animate-fade-in relative overflow-hidden">
            
            {/* Visual Header bar indicator */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            {!quizStarted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto animate-bounce">
                  <HelpCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-gray-900">Academy Entrance Eligibility Test</h3>
                  <p className="text-gray-600 text-xs max-w-md mx-auto font-normal leading-relaxed">
                    This test evaluates your alignment with high-performance technology frameworks. Scoring points satisfies admission standards.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-left max-w-sm mx-auto space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-700">
                    <Check className="w-3.5 h-3.5 text-blue-500" />
                    <span>Total of 15 questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-700">
                    <Check className="w-3.5 h-3.5 text-blue-500" />
                    <span>30 Marks Core Evaluation Metrics</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-700">
                    <Check className="w-3.5 h-3.5 text-blue-500" />
                    <span>Covers CS, AI, GK & Creative Stack</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 max-w-xs mx-auto">
                  <label className="text-[10px] font-mono text-gray-500 uppercase text-center mb-1">Target Course Program</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:outline-none"
                  >
                    {COURSES_DATA.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setQuizStarted(true)}
                  className="w-full max-w-xs py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                >
                  START ELIGIBILITY TEST NOW
                </button>
              </div>
            ) : quizSubmitted ? (
              <div className="text-center py-10 space-y-6 animate-fade-in">
                
                {/* Score badge indicator */}
                <div className="w-24 h-24 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex flex-col items-center justify-center mx-auto text-indigo-400 shadow-xl drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <span className="text-3xl font-display font-extrabold leading-none">{quizScore}</span>
                  <span className="text-[9px] font-mono tracking-wider uppercase text-indigo-300 mt-1">/ 30 MARKS</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-gray-900">
                    {quizScore && quizScore >= 16 ? "🎯 High Score Achieved!" : "📈 Score Verified!"}
                  </h3>
                  <p className="text-gray-600 text-xs font-normal max-w-md mx-auto">
                    Your entrance score results have been linked directly to our core registration servers. Loading your admissions verification form...
                  </p>
                </div>

                {/* Micro spinner loader */}
                <div className="flex items-center justify-center gap-2 text-indigo-400 font-mono text-xs pt-4">
                  <RefreshCw className="w-4 h-4 animate-spin text-indigo-400" />
                  <span>PREPARING ADMISSIONS PLATFORM FORM...</span>
                </div>

              </div>
            ) : (
              <div>
                {/* Active Question Panel header meta */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono text-blue-400 font-semibold uppercase">
                      {QUIZ_QUESTIONS[currentQuestionIndex].category}
                    </span>
                    <span className="text-gray-500 text-[10px] font-mono">Question {currentQuestionIndex + 1} of 15</span>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-gray-300">
                      {Object.keys(userAnswers).length} / 15 Answered
                    </span>
                  </div>
                </div>

                {/* Progress bar visual metrics */}
                <div className="w-full bg-gray-100 rounded-full h-1 mb-8 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-1 transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / 15) * 100}%` }}
                  />
                </div>

                {/* Question block */}
                <h4 className="text-gray-900 font-display font-semibold text-lg leading-relaxed mb-6">
                  {QUIZ_QUESTIONS[currentQuestionIndex].question}
                </h4>

                {/* Multiple options grid */}
                <div className="space-y-3 mb-8">
                  {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(idx)}
                      className={`w-full p-4 rounded-xl text-left text-xs font-mono border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        userAnswers[currentQuestionIndex] === idx
                          ? "bg-blue-50 border-blue-200 text-blue-700"
                          : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      <span>{option}</span>
                      {userAnswers[currentQuestionIndex] === idx && (
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Actions toggles pagination footer */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={handlePrevQuestion}
                    className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-mono text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    PREVIOUS
                  </button>

                  {currentQuestionIndex === 14 ? (
                    <button
                      disabled={userAnswers[currentQuestionIndex] === undefined}
                      onClick={evaluateQuiz}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-mono text-xs font-bold tracking-wider cursor-pointer shadow-lg active:scale-95"
                    >
                      SUBMIT TEST & CALCULATE SCORE
                    </button>
                  ) : (
                    <button
                      disabled={userAnswers[currentQuestionIndex] === undefined}
                      onClick={handleNextQuestion}
                      className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-900 font-mono text-xs font-bold tracking-wider cursor-pointer flex items-center gap-1"
                    >
                      <span>NEXT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            )}

          </div>
        )}

        {activeTab === "form" && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-gray-100 p-6 sm:p-10 shadow-xl backdrop-blur-md animate-fade-in relative">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />

            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-8">
              <div>
                <span className="px-2.5 py-1 rounded bg-purple-50 border border-purple-200 text-[9px] font-mono text-purple-700 uppercase tracking-wider font-semibold">
                  ENTRY PROFILE SCORED: {quizScore ?? 0} MARKS
                </span>
                <h3 className="text-xl font-display font-extrabold text-gray-900 mt-1.5">Creative Stack Admission Registration</h3>
              </div>
              
              <div className="hidden sm:block text-right">
                <span className="text-[10px] font-mono text-gray-400 block uppercase">Program Period</span>
                <span className="text-xs font-mono text-purple-400 font-bold">{timePeriod} Duration</span>
              </div>
            </div>

            {submissionSuccess ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                  <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="text-2xl font-display font-bold text-emerald-600">Student Registered Successfully!</h4>
                <p className="text-gray-600 text-xs font-normal max-w-sm mx-auto">
                  Your official candidate slot has been recorded with identification number:
                </p>
                <div className="px-4 py-2.5 bg-gray-50 border border-emerald-200 text-emerald-700 font-mono text-sm max-w-xs mx-auto rounded-xl font-bold tracking-widest shadow-sm">
                  {newStudentId}
                </div>
                <p className="text-gray-500 text-[10px] font-mono pt-4">Linking details. Loading dashboard list...</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Standard Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Full Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Student Complete Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="e.g. M. Sami Ullah"
                        className={`w-full bg-gray-50 border rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 focus:border-purple-500 focus:outline-none transition-colors ${
                          formErrors.fullname ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {formErrors.fullname && <span className="text-[9px] text-red-500 font-mono">{formErrors.fullname}</span>}
                  </div>

                  {/* Father Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Father's Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        placeholder="e.g. M. Fiaz Ahmed"
                        className={`w-full bg-gray-50 border rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 focus:border-purple-500 focus:outline-none transition-colors ${
                          formErrors.fatherName ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {formErrors.fatherName && <span className="text-[9px] text-red-500 font-mono">{formErrors.fatherName}</span>}
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  
                  {/* Education field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Qualification / Education</label>
                    <input
                      type="text"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      placeholder="e.g. BSCS, BSSE, Intermediate"
                      className={`w-full bg-gray-50 border rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:border-purple-500 focus:outline-none transition-colors ${
                        formErrors.education ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {formErrors.education && <span className="text-[9px] text-red-500 font-mono">{formErrors.education}</span>}
                  </div>

                  {/* Field of study */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Field / Subject Study</label>
                    <input
                      type="text"
                      value={field}
                      onChange={(e) => setField(e.target.value)}
                      placeholder="e.g. Computer Science, engineering"
                      className={`w-full bg-gray-50 border rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:border-purple-500 focus:outline-none transition-colors ${
                        formErrors.field ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {formErrors.field && <span className="text-[9px] text-red-500 font-mono">{formErrors.field}</span>}
                  </div>

                  {/* Institute Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Institute / College / Varsity</label>
                    <input
                      type="text"
                      value={instituteName}
                      onChange={(e) => setInstituteName(e.target.value)}
                      placeholder="e.g. COMSATS, KIPS Okara"
                      className={`w-full bg-gray-50 border rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:border-purple-500 focus:outline-none transition-colors ${
                        formErrors.instituteName ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {formErrors.instituteName && <span className="text-[9px] text-red-500 font-mono">{formErrors.instituteName}</span>}
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Select Course Program dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Select Target Course Program</label>
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:border-purple-500 focus:outline-none"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                      ))}
                    </select>
                    
                    {selectedCourse && (
                      <span className="text-[10px] font-mono text-purple-400 font-bold block mt-1">
                        👉 Lead Menton: {getMentorForCourse(selectedCourse)}
                      </span>
                    )}
                  </div>

                  {/* Contact phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Phone WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +92 302 7434569"
                        className={`w-full bg-gray-50 border rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 focus:border-purple-500 focus:outline-none transition-colors ${
                          formErrors.phone ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {formErrors.phone && <span className="text-[9px] text-red-500 font-mono">{formErrors.phone}</span>}
                  </div>

                </div>

                {/* Additional parameters course options toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                  
                  {/* Certificate toggle option info */}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={certificateOpt}
                      onChange={(e) => setCertificateOpt(e.target.checked)}
                      className="mt-1 accent-purple-500"
                    />
                    <div>
                      <span className="block text-xs font-mono font-bold text-gray-200">Request Printed physical Certificate</span>
                      <span className="block text-[10px] font-mono text-gray-500 font-light leading-relaxed">
                        Secure high-status official candidate certificate verified by Creative Stack directors.
                      </span>
                    </div>
                  </label>

                  {/* Weekend test authorization tool */}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={weekendTestOpt}
                      onChange={(e) => setWeekendTestOpt(e.target.checked)}
                      className="mt-1 accent-purple-500"
                    />
                    <div>
                      <span className="block text-xs font-mono font-bold text-gray-200">Weekend Evaluation Test Program</span>
                      <span className="block text-[10px] font-mono text-gray-500 font-light leading-relaxed">
                        Compete in weekly algorithmic hackathons. Progress grades logged directly to profile boards.
                      </span>
                    </div>
                  </label>

                </div>

                {/* Corporate billing fee deposit block */}
                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-blue-600 font-semibold">
                    <Wallet className="w-4 h-4 text-blue-600" />
                    <span>Secure Online Admission Fee Deposit & Address Verification</span>
                  </div>

                  <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                    Deposit corresponding admission fees to our direct official accounts. Transfer parameters under the verification address (Transaction ID) should be typed below:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-white border border-gray-100 rounded-xl font-mono text-center shadow-sm">
                      <span className="block text-[8px] text-gray-500 uppercase font-semibold">🍊 JazzCash Account</span>
                      <span className="block text-[11px] text-gray-900 font-bold mt-1">0302 7434569</span>
                      <span className="block text-[8px] text-gray-500 mt-0.5">Title: Creative Stack</span>
                    </div>
                    <div className="p-3 bg-white border border-gray-100 rounded-xl font-mono text-center shadow-sm">
                      <span className="block text-[8px] text-gray-500 uppercase font-semibold">🟢 EasyPaisa Account</span>
                      <span className="block text-[11px] text-gray-900 font-bold mt-1">0302 7434569</span>
                      <span className="block text-[8px] text-gray-500 mt-0.5">Title: Creative Stack</span>
                    </div>
                    <div className="p-3 bg-white border border-gray-100 rounded-xl font-mono text-center shadow-sm">
                      <span className="block text-[8px] text-gray-500 uppercase font-semibold">🏦 Direct Bank Transfer</span>
                      <span className="block text-[10px] text-gray-900 font-bold mt-1">UBL / HBL / ABL / MCB</span>
                      <span className="block text-[8px] text-gray-500 mt-0.5">Query over WhatsApp</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-500 uppercase font-semibold">Select Deposit Channel method</label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:outline-none"
                      >
                        <option value="JazzCash">🍊 JazzCash Wallet</option>
                        <option value="EasyPaisa">🟢 EasyPaisa App</option>
                        <option value="UBL">🏦 UBL (United Bank Limited)</option>
                        <option value="HBL">🏦 HBL (Habib Bank Limited)</option>
                        <option value="ABL">🏦 ABL (Allied Bank Limited)</option>
                        <option value="MCB">🏦 MCB Bank / MCM</option>
                        <option value="Bank Transfer">🏦 Other Bank Transfer</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-500 uppercase font-semibold">Transaction ID / Payment Verification Code</label>
                      <input
                        type="text"
                        value={paymentAddress}
                        onChange={(e) => setPaymentAddress(e.target.value)}
                        placeholder="e.g. TRX-9824156-HSA"
                        className={`bg-white border rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:border-purple-500 focus:outline-none transition-all ${
                          formErrors.paymentAddress ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {formErrors.paymentAddress && <span className="text-[9px] text-red-500 font-mono">{formErrors.paymentAddress}</span>}
                    </div>
                  </div>

                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveTab("quiz")}
                    className="px-4 py-2 text-xs font-mono border border-gray-200 rounded-xl text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    BACK TO TEST
                  </button>

                  <button
                    type="submit"
                    className="py-3 px-8 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all shadow-xl shadow-purple-600/20 hover:shadow-purple-600/30 flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    SUBMIT REGISTRATION FORM
                  </button>
                </div>

              </form>
            )}

          </div>
        )}

        {activeTab === "records" && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-xl text-gray-900">Your Academy Student Registry</h3>
              <button
                onClick={() => {
                  setSelectedCourse("mern-mastery");
                  setActiveTab("catalog");
                }}
                className="py-2 px-4 rounded-xl border border-purple-200 hover:border-purple-500 text-purple-600 text-xs font-mono font-medium hover:text-purple-700 transition-all cursor-pointer flex items-center gap-1.5 bg-purple-50"
              >
                <span>➕ ENROLL NEW COURSE</span>
              </button>
            </div>

            {myEnrollments.length === 0 ? (
              <div className="text-center py-16 rounded-2xl bg-white border border-gray-100 shadow-xl space-y-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 mx-auto">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-md text-gray-900">No active course registrations matched</h4>
                <p className="text-gray-600 text-xs font-normal max-w-sm mx-auto">
                  Take the algorithmic entrance test, answer the CS/AI problems, and complete the registration fields to verify your slot.
                </p>
                <button
                  onClick={() => setActiveTab("catalog")}
                  className="py-2.5 px-5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold tracking-wider rounded-xl cursor-pointer"
                >
                  EXPLORE COURSE CATALOG
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myEnrollments.map((record) => (
                  <div 
                    key={record.id}
                    className="relative rounded-2xl bg-white border border-gray-100 p-6 shadow-xl space-y-4 overflow-hidden"
                  >
                    {/* Status accent indicator badge tag */}
                    <div className="absolute top-4 right-4 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-[9px] font-mono font-bold text-amber-600 uppercase tracking-widest">{record.status}</span>
                    </div>

                    <div>
                      <span className="font-mono text-[9px] text-gray-500 uppercase block">Candidate Regist. ID</span>
                      <span className="font-mono text-[11px] font-extrabold text-purple-600 tracking-wider">{record.id}</span>
                    </div>

                    <h4 className="text-md font-display font-bold text-gray-900 tracking-tight leading-tight">
                      {getCourseTitle(record.courseSelected)}
                    </h4>

                    {/* Quick values grid details */}
                    <div className="grid grid-cols-2 gap-3 text-[11px] font-mono pt-2 border-t border-gray-100">
                      <div>
                        <span className="text-gray-500 block">STUDENT</span>
                        <span className="text-gray-900 block leading-tight font-medium">{record.studentName}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">FATHER NAME</span>
                        <span className="text-gray-900 block leading-tight font-medium">{record.fatherName}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">EDUCATION</span>
                        <span className="text-gray-900 block leading-tight font-medium">{record.education} ({record.field})</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">PRESET TIME</span>
                        <span className="text-gray-900 block leading-tight font-medium">{record.classTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">CHANNEL DEPOSIT</span>
                        <span className="text-emerald-600 block font-bold uppercase tracking-wider">{record.paymentMethod}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">TEST MARKS SCORE</span>
                        <span className="text-blue-600 block font-extrabold">{record.score} / 30 Marks</span>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between text-[10px] font-mono text-gray-600">
                      <span>📆 Verified Date: {record.enrolledAt.split(",")[0]}</span>
                      <span className="text-purple-600 font-bold uppercase">Candidate Logged</span>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
