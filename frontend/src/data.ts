import { Service, Project, TeamMember, ProcessStep, PricingPlan, SocialPlatform, Testimonial } from "./types";
import samiAvatar from "./assets/images/sami_new_pic.png";
import hasnainAvatar from "./assets/images/hasnain_new_pic.png";
import aftabAvatar from "./assets/images/owner_pic_new.jpg";
import maryamAvatar from "./assets/images/maryam_new_pic.jpg";
import tehreemAvatar from "./assets/images/tehreem_new_pic.jpg";
import nomanAvatar from "./assets/images/noman_new_pic.jpg";
import shumailaAvatar from "./assets/images/shumaila_new_pic.jpg";
import fiazAvatar from "./assets/images/fiaz_new_pic.png";
import ayeshaAvatar from "./assets/images/ayesha_new_pic.jpg";

export const SERVICES_DATA: Service[] = [
  {
    id: "web-dev",
    iconName: "Globe",
    title: "Web Development",
    description: "Architecting bespoke, high-performance web applications, serverless systems, and lightning-fast developer landing pages.",
    bulletPoints: [
      "Custom Enterprise Business Websites",
      "Robust Full-Stack SaaS Platforms",
      "Conversion-Optimized Landing Pages"
    ],
    category: "Development",
    details: "Using modern technology stacks optimized for sub-second paint timelines, strong visual fluidity, SEO indexing, and absolute scalability on the cloud.",
    duration: "4 - 8 weeks",
    deliverables: ["Full-Stack React codebase", "Interactive Figma Handover", "Vercel/AWS Edge Deployment", "1 Year Tech Support"]
  },
  {
    id: "app-dev",
    iconName: "Smartphone",
    title: "App Development",
    description: "Designing and building premium native & cross-platform applications with ultra-fluid touch response and elegant gestures.",
    bulletPoints: [
      "Native Apple iOS Apps",
      "Android Enterprise Devices Playbook",
      "High-Performance Cross-Platform Apps"
    ],
    category: "Development",
    details: "Immersive applications featuring buttery smooth tactile animations, fully offline functionality, standard biometric authentication, and cloud telemetry.",
    duration: "6 - 12 weeks",
    deliverables: ["App Store Production Submission", "Google Play Store Deploy", "Shared Canvas Interactive Prototype", "Backend API Stack docs"]
  },
  {
    id: "shopify-dev",
    iconName: "ShoppingBag",
    title: "Shopify Development",
    description: "Premium bespoke e-commerce store design and custom Shopify Liquid/Hydrogen apps built to convert visits to recurring carts.",
    bulletPoints: [
      "Custom-Coded Themes",
      "Speed & Core Web Vitals Optimization",
      "Cart-Value Conversion Engineering"
    ],
    category: "Commerce",
    details: "Unlocking custom Checkout logic, high-speed instant load mechanics, unique product selection sheets, and integrated predictive search algorithms.",
    duration: "3 - 6 weeks",
    deliverables: ["Custom Shopify Theme Hub", "Pre-optimized Checkout Pipeline", "Dynamic Abandonment Automation", "A/B Testing Harness"]
  },
  {
    id: "graphic-design",
    iconName: "Palette",
    title: "Graphic Design & UI/UX",
    description: "Sculpting minimal, high-status brand systems, premium interactive layouts, and high-conversion graphic visual assets.",
    bulletPoints: [
      "Iconic Brand Identities & Guidelines",
      "Linear & Stripe Inspired UI/UX Layouts",
      "Vector Creative Marketing Assets"
    ],
    category: "Design",
    details: "We start from blank digital canvases on Figma to curate bespoke vector systems, strict typography grids, hand-crafted icons, and micro-motion vectors.",
    duration: "2 - 5 weeks",
    deliverables: ["Comprehensive Design System", "Brand Guideline Deck", "Figma Interactive Prototypes", "Ready Vector Exports (SVG/EPS)"]
  },
  {
    id: "wordpress-dev",
    iconName: "Layers",
    title: "WordPress Development",
    description: "Engineering tailored headless or solid-framework WordPress applications optimized to solve editorial and marketing workflows.",
    bulletPoints: [
      "Hand-Coded Custom Themes & Gutenberg Blocks",
      "Enterprise Speed & CDN Acceleration",
      "Secure Bulletproof Core Infrastructure"
    ],
    category: "Development",
    details: "Bypassing heavy boilerplate templates for custom, light-weight components that scale perfectly and empower non-technical content executives.",
    duration: "3 - 5 weeks",
    deliverables: ["Fully Configured Custom CMS Template", "Advanced Custom Fields Matrix", "Cloudflare Optimization Guide", "Admin Video Walkthroughs"]
  },
  {
    id: "video-editing",
    iconName: "Video",
    title: "Video Editing",
    description: "Compelling, highly styled commercial ads, cinematic motion graphic stories, and disruptive social-first vertical content.",
    bulletPoints: [
      "Premium Brand & Commercial Ad Spots",
      "Bespoke Cinematic Motion Graphics",
      "Viral Hook Vertical Narrative Editing"
    ],
    category: "Creative Content",
    details: "Injecting bespoke sound design, custom grading profiles, energetic titles, and frame-accurate timing to anchor user viewer retention rates.",
    duration: "1 - 3 weeks",
    deliverables: ["Uncompressed ProRes Masters", "Fully Optimized Vertical Framings", "Premium Sound Asset Licensing", "Social-Ready Hook Variants"]
  },
  {
    id: "social-marketing",
    iconName: "Users",
    title: "Social Media Marketing",
    description: "Orchestrating algorithmic-aligned social content systems, active community flywheels, and creative authority marketing.",
    bulletPoints: [
      "Organic Growth Strategy",
      "High-Retention Visual Content Production",
      "Community Building & Campaign Strategy"
    ],
    category: "Marketing",
    details: "Elevating your brand into an industry authority with content calendars, automated community replies, and viral creative loops.",
    duration: "Ongoing Monthly",
    deliverables: ["30-Day Narrative Calendar", "Bespoke Post Canvas Templates", "Weekly Core Performance Analytics", "Live Community Management Dashboard"]
  },
  {
    id: "digital-marketing",
    iconName: "TrendingUp",
    title: "Digital Marketing",
    description: "Laser-focused lead-generation machines, advanced SEO architecture, and scale-ready PPC social advertising.",
    bulletPoints: [
      "High-Intent Retargeting Ads",
      "Organic Semantic SEO Architecture",
      "Omni-channel High-Value Lead Generation"
    ],
    category: "Marketing",
    details: "Structuring target-rich buyer personas to scale multi-channel acquisition campaigns while ensuring positive Customer Acquisition Cost (CAC) yields.",
    duration: "Ongoing Monthly",
    deliverables: ["PPC Strategy Blueprints", "SEO Semantic Map Dashboard", "Monthly ROI Growth Reports", "Ad Creative Asset Exports"]
  }
];

export const PORTFOLIO_DATA: Project[] = [
  {
    id: "apex-saas",
    title: "Apex Cloud Orchestration Platform",
    clientName: "Apex Inc.",
    description: "Designed and built an ultra-premium, dark-themed cloud logistics system for next-generation developer ops.",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    caseStudy: "Apex required a heavy dashboard interface to manage over 1500 concurrent container metrics without latency or UI lag. We delivered a WebGL-enhanced charting interface that loads in 0.2s and elevates their brand stature to industry elite.",
    results: [
      "+410% Average User Dashboard Stickiness",
      "99.98% App State Render Efficiency",
      "0.24s Initial Virtual Grid Load Time"
    ],
    category: "Web",
    tags: ["React SPA", "Vite", "D3.js", "Tailwind CSS v4", "Lucide Assets"],
    challenge: "Apex's legacy system had messy, slow tabular grids that caused developer frustration and slowed incident diagnostic pipelines.",
    solution: "We re-engineered their interface using cached canvas rendering pipelines, custom responsive layouts, and a clean keyboard navigation layout."
  },
  {
    id: "orbit-delivery",
    title: "Orbit Premium Parcel Dispatch",
    clientName: "Orbit Logistics",
    description: "Architected a luxury-themed, smooth iOS & Android parcel tracking mobile app with interactive route physics.",
    previewImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    caseStudy: "We crafted an iOS and Android experience emphasizing fluid drag gestures, beautiful live-tracking map sheets, and customized notifications that elevated the typical delivery app to a premium member club feel.",
    results: [
      "4.9 Rank App Store Score (over 12k reviews)",
      "+135% Order Volume Growth Year-Over-Year",
      "Less than 5ms Notification Deliver Latency"
    ],
    category: "Apps",
    tags: ["React Native", "iOS & Android", "Spring Engine", "Map API", "Biometrics"],
    challenge: "Deliveries felt generic and friction-heavy. Users wanted zero-click tracking and a beautiful interactive route outline.",
    solution: "We introduced spring physics-based gesture layouts and an integrated premium status feed that mirrors high-end watch trackers."
  },
  {
    id: "vanguard-shopify",
    title: "Vanguard Minimalist Timepieces",
    clientName: "Vanguard Studios",
    description: "Developed a stunning, headless Shopify Liquid storefront with instant cart caching and 3D watch previewing.",
    previewImage: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?auto=format&fit=crop&w=1200&q=80",
    caseStudy: "Transforming standard watch retail into an elegant, high-status gallery experience. By engineering custom liquid theme components, cached image preloading, and custom animations, we drove conversion rates beyond industry standards.",
    results: [
      "+340% Conversions Rate Spike on Desktop",
      "AOV (Average Order Value) Uplifted by 48%",
      "99/100 Google Lighthouse Speed Rating"
    ],
    category: "Shopify",
    tags: ["Custom Liquid", "Shopify Plus", "CSS Variables", "CDN Optimization"],
    challenge: "Vanguard's previous site was slow, cluttered, and didn't reflect the high premium feel of their $2,500 luxury timepieces.",
    solution: "We implemented an elegant, high-contrast, black-canvas grid layout that framed watch faces as architectural art pieces."
  },
  {
    id: "aura-branding",
    title: "Aura Creative Collective Identity",
    clientName: "Aura Paris",
    description: "Designed a comprehensive modern brand identity, including dynamic typography systems and spatial animations.",
    previewImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    caseStudy: "Aura Paris required a complete modern brand positioning strategy to connect with global tech-adjacent architects. We curated custom vector typography, printed collateral layout specs, and an interactive spatial portfolio mockup.",
    results: [
      "Globally Recognized in European Design Awards",
      "Instant Brand Placement across 14 Top Showrooms",
      "Perfect Cohesive Digital + Print Asset Alignment"
    ],
    category: "Branding",
    tags: ["Visual Identity", "FIGMA Design", "Vector Crafting", "Brandbook Guidelines"],
    challenge: "Aura possessed high-end talent but their branding looked like a generic software template, alienating elite furniture designers.",
    solution: "We sculpted a bespoke custom-display serif system paired with generous whitespace layouts and highly subtle graphite colors."
  },
  {
    id: "chronos-growth",
    title: "Chronos Multi-Channel Campaign",
    clientName: "Chronos AI Corp",
    description: "Executed a comprehensive lead generation and organic SEO campaign that secured market dominance.",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    caseStudy: "Chronos launched their high-ticket operational artificial intelligence module to enterprise boards. We managed their visual PPC ads, curated 14 targeted, authoritative ranking guides, and deployed search pipelines that captured key decision maker leads.",
    results: [
      "+820% Structured Marketing Leads in 90 Days",
      "Ranked #1 for 18 High-Volume Competitive Tech Keywords",
      "5.2x Direct Investment Ads ROI Ratio"
    ],
    category: "Marketing",
    tags: ["Growth Marketing", "Semantic SEO", "Meta/Google Ads", "Conversion Pipelines"],
    challenge: "Chronos spent over $50k on generic agencies without seeing real pipeline conversions or qualified executive discovery bookings.",
    solution: "We structured a high-relevance semantic hub targeting exact technical enterprise pain points and backed it with custom-edited brand video creatives."
  },
  {
    id: "wordpress-creative-portfolio",
    title: "WordPress Elite Business & Agency Hub",
    clientName: "Creative Showcase",
    description: "Built a fully speed-optimized, premium WordPress site leveraging high-performance layouts, precise element structures, and clean SEO workflows.",
    previewImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    caseStudy: "The project involved constructing a fast, stunning portfolio and multi-functional agency CMS utilizing advanced block configurations, dynamic stylesheets, and Yoast search optimizations to secure organic authority.",
    results: [
      "98/100 Core Web Vitals Optimization",
      "99.9% High Availability Dynamic Hosting",
      "Perfect Response-Adaptive Design Layout"
    ],
    category: "WordPress",
    tags: ["WordPress Core", "Elementor Pro", "SEO optimization", "Semantic Templates"],
    liveUrl: "https://project.lovestoblog.com/",
    challenge: "The client needed a responsive, super-fast visual platform to showcase custom design work without high developer maintenance overhead.",
    solution: "We customized an optimized WordPress lightweight child theme, configured WP Rocket caches, and established an exact visual style matches framework."
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "akram-founder",
    name: "M. Aftab Akram",
    role: "Full Stack Developer · Owner / Founder of CSA",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "Integration & Deployment", "Git & GitHub", "Video Editing & Media", "Digital marketing"],
    experience: "Founder of CSA & MERN Stack Integration Lead",
    education: "BS Software Engineering (5th Semester)",
    email: "ranaaftabakram982@gmail.com",
    phone: "+923027434569",
    bio: "Aftab manages Creative Stack Agency's GitHub repositories, documentation, and media presence. He prepares video previews, tutorials, and demos to showcase projects. In addition, he provides integration & deployment, helping connect modules and maintain smooth workflows across the team.",
    avatarUrl: aftabAvatar,
    socialLinks: {
      github: "https://github.com/Aftab272",
      tiktok: "https://www.tiktok.com/@aftab.akram084?_r=1&_t=ZS-97CwA7J6XBp",
      linkedin: "https://www.linkedin.com/in/akram-academy-3a297b407",
      facebook: "https://www.facebook.com/share/1BEa2P3h4Q/",
      instagram: "https://www.instagram.com/aftabakram528?igsh=bGxwcDZrZnZkeWdx"
    },
    location: "Dokota, Punjab",
    projectsCompleted: "30 plus completed",
    workStyle: "I am a passionate MERN Stack Developer. I believe in continuous learning, open-source contribution, simple communication, and practical, durable deployment pipelines.",
    highlights: [
      "Owner & Founder of Creative Stack Agency (CSA) managing over 30+ projects",
      "Passionate MERN Stack Developer with deep module-integration expertise",
      "Manages client GitHub streams, repositories, documentation, and media tutorials",
      "Delivers high-speed cloud deployments and modular interface architectures",
      "Experienced video editor specializing in crisp, professional video demos and tech tutorials"
    ],
    detailedSkills: [
      {
        category: "Frontend Development",
        list: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "Responsive Design", "UI/UX Layouts"]
      },
      {
        category: "Backend & Storage",
        list: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Authentication", "MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Redis", "Firebase", "Database Design"]
      },
      {
        category: "Tools & Cloud Dev",
        list: ["Git & GitHub", "Vite", "VS Code", "Postman", "npm/yarn", "Webpack", "Docker", "AWS", "TypeScript", "Python", "Java", "C++"]
      },
      {
        category: "AI & Media Design",
        list: ["AI Automation Tools", "Professional Video Editing", "Machine Learning Basics", "Automation Scripts", "AI-Powered Solutions"]
      }
    ],
    detailedExperience: [
      {
        title: "Owner, Founder & Integration Lead",
        period: "2023 - Present",
        company: "Creative Stack Agency / Team4Stack",
        description: "Leading the agency's modular integrations, GitHub source streams, documentation systems, and generating video guides/demos for projects."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Software Engineering (BSSE)",
        period: "2024 - Present",
        institute: "COMSATS University Islamabad (Vehari Campus)",
        description: "Currently in 5th Semester. Enhancing high-status software models, algorithms, object-oriented design, systems engineering, and full-stack patterns."
      },
      {
        degree: "FSc Pre-Engineering / Computer track",
        period: "2021 - 2023",
        institute: "Muslim College Multan Adda Billi Wala",
        description: "Completed intermediate college studies with high analytical focus on mathematics and engineering logic."
      },
      {
        degree: "Matriculation (Computer Science)",
        period: "2019 - 2021",
        institute: "Govt Public High School Dokota",
        description: "Secondary education with key foundations in computer logic, basic programming patterns, and secondary mathematics."
      }
    ]
  },
  {
    id: "maryam-nawaz",
    name: "Maryam Nawaz",
    role: "Partner & Co-Founder · Full Stack Developer",
    skills: ["Full Stack Dev", "Frontend Curation", "UI/UX Layouts", "MongoDB Schema Design", "RESTful Interfaces", "Git Core", "Client hunting", "Social media marketing"],
    experience: "Partner/Co-Founder & MERN Developer",
    education: "BS Computer Science (University of Okara)",
    phone: "+92 304 7556084",
    email: "maryamnawazdev7780@gmail.com",
    bio: "Maryam is a Partner and Co-Founder of Creative Stack Agency. She specializes in crafting responsive frontend layers and structuring full-stack database architectures. Passionate about engineering high-performance modern web software, she coordinates with our design and development leads to ensure fluid cross-device execution.",
    avatarUrl: maryamAvatar,
    socialLinks: {
      github: "https://github.com/maryamnawazdev7780-has",
      linkedin: "https://www.linkedin.com/in/maryam-nawaz-47643b404",
      facebook: "https://www.facebook.com/share/1Jcsi9fwzZ/",
      tiktok: "https://www.tiktok.com/@mn711395"
    },
    location: "Gojra, Punjab",
    projectsCompleted: "20 plus completed",
    workStyle: "I believe in clean, component-driven development, reusable design systems, and highly stable backend codebases.",
    highlights: [
      "Co-Founder & Key Strategic Partner of Creative Stack Agency (CSA)",
      "Experienced Full Stack Web Developer managing complete React frontend and Express backend modules",
      "Specialist in fluid CSS layouts, modern custom animations, and cross-device rendering parameters",
      "Performs systematic repository version control workflows and direct component integrations"
    ],
    detailedSkills: [
      {
        category: "Frontend Development",
        list: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3", "Responsive UI/UX Layouts", "State Management"]
      },
      {
        category: "Backend & Systems",
        list: ["Node.js", "Express.js", "MongoDB / Mongoose", "Git & GitHub VCS", "RESTful API Integration", "JSON Web Tokens (JWT)"]
      }
    ],
    detailedExperience: [
      {
        title: "Co-Founder & Partner / Full Stack Engineer",
        period: "2023 - Present",
        company: "Creative Stack Agency (CSA)",
        description: "Leading responsive frontend architecture development, structuring custom DB schemas, managing API endpoint contracts, and coordinating deployment cycles."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Computer Science (BSCS)",
        period: "2023 - Present",
        institute: "University of Okara",
        description: "Currently pursuing BSCS. Building a strong theoretical and practical database, algorithm analysis, OOP, and software engineering framework foundation."
      }
    ]
  },
  {
    id: "sami-cto",
    name: "M. Sami Ullah",
    role: "Full Stack Developer · Team Lead & Client Manager",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "MERN Stack", "Responsive UI/UX Design", "API Integration", "Microsoft Office Expert"],
    experience: "Owner of Team4Stack & Lead Software Engineer",
    education: "BS Software Engineering (4th Semester)",
    email: "sami@team4stack.com",
    bio: "Sami leads the team and communicates directly with clients to understand their requirements. He designs system architecture, oversees deployments, and mentors the team. Alongside leadership, he actively writes code to ensure smooth and timely project delivery.",
    avatarUrl: samiAvatar,
    socialLinks: {
      github: "https://github.com/Sami3234",
      tiktok: "https://www.tiktok.com/@m.sami_daha"
    },
    location: "Vehari, Punjab",
    projectsCompleted: "25 plus completed",
    workStyle: "I prefer simple communication, practical delivery, and designs that stay readable on every screen size.",
    highlights: [
      "Responsive design that stays clean on mobile screens",
      "Owner of Team4Stack with practical student and business projects",
      "Portfolio, landing page, and frontend development with React",
      "Online course support and guidance for learners",
      "Microsoft Office complete workflow including documents, sheets, and presentations",
      "Careful attention to spacing, readability, and section flow"
    ],
    detailedSkills: [
      {
        category: "Frontend Development",
        list: ["React.js", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3", "Responsive UI / spacing", "Mobile-first layouts"]
      },
      {
        category: "Other Strengths & Core Support",
        list: ["API Integration", "Database Design", "Authentication Flow", "Automation", "Online Course Support", "Microsoft Word, Excel & PowerPoint"]
      }
    ],
    detailedExperience: [
      {
        title: "Owner and Developer",
        period: "2023 - Present",
        company: "Team4Stack and Freelance Projects",
        description: "Leading Team4Stack while building responsive interfaces, business websites, portfolios, and practical student projects."
      },
      {
        title: "MERN Stack Course",
        period: "2025",
        company: "We Connect Software House, Vehari",
        description: "Completed hands-on training in React, Node.js, Express, MongoDB, APIs, and modern full-stack project structure."
      },
      {
        title: "Computer Course",
        period: "2023",
        company: "Vocational Training Institute, Vehari",
        description: "Built strong basics in programming, operating systems, internet tools, and complete computer workflow."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Software Engineering (BSSE)",
        period: "2024 - Present",
        institute: "COMSATS University Islamabad, Vehari Campus",
        description: "Currently in 4th semester (Spring 2026), improving software engineering fundamentals, programming, algorithms, and project execution."
      },
      {
        degree: "Intermediate in Computer Science",
        period: "2021 - 2022",
        institute: "Leads College, Vehari",
        description: "Completed intermediate studies with a computer science track and a strong base in mathematics and programming fundamentals."
      }
    ]
  },
  {
    id: "hasnain-ai",
    name: "M. Hasnain",
    role: "Full Stack Developer · Frontend Lead",
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "Express", "Git", "Tailwind CSS"],
    experience: "MERN Stack Developer & Frontend Architect",
    education: "BS Software Engineering (3rd Semester)",
    email: "hasnainwasli17@gmail.com",
    phone: "+92 312 6430166",
    bio: "Hasnain focuses on crafting responsive and modern user interfaces. He designs authentication flows, dashboards, and scalable components using React and Tailwind. With a sharp eye for UI/UX, he ensures the product looks professional and integrates seamlessly with backend APIs.",
    avatarUrl: hasnainAvatar,
    socialLinks: {
      github: "https://github.com/hasnain17576"
    },
    location: "Kamalia, Punjab",
    projectsCompleted: "15 plus completed",
    workStyle: "I am a passionate MERN Stack Developer. I am dedicated to creating innovative and efficient web solutions. My journey is driven by curiosity and a desire to solve real-world problems through technology.",
    highlights: [
      "Crafts highly responsive and modern user interfaces using React and Tailwind CSS",
      "Designs secure authentication flows, dashboards, and scalable components",
      "Sharp eye for consistent UI/UX layouts, spacing, and mobile devices rendering",
      "Robust client-side components integrating seamlessly with backend APIs",
      "Strong version control practices and collaborative repository workflow on GitHub"
    ],
    detailedSkills: [
      {
        category: "Frontend Stack",
        list: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Bootstrap", "Fluid UI Layouts / Spacing", "Mobile-Responsive Architecture"]
      },
      {
        category: "Backend & Systems",
        list: ["Node.js", "Express.js", "MongoDB", "Git & GitHub VCS", "Restful API Integrations", "Security Auth Flows", "JSON Web Tokens (JWT)"]
      }
    ],
    detailedExperience: [
      {
        title: "Full Stack Web Developer & Frontend Lead",
        period: "2024 - Present",
        company: "Creative Stack Agency & Freelance",
        description: "Focusing on crafting lightweight, fast, and responsive user interfaces. Designing client dashboards, multi-stage forms, and seamless database structures."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Software Engineering (BSSE)",
        period: "2024 - Present",
        institute: "COMSATS University Islamabad",
        description: "Currently in 3rd Semester. Developing strong theoretical and practical bases in algorithms, object-oriented design, systems engineering, and modern web application patterns."
      },
      {
        degree: "FSc Pre-Medical",
        period: "2021 - 2023",
        institute: "Punjab Group of Colleges",
        description: "Completed intermediate pre-medical studies with an emphasis on analytical reasoning, biology, chemistry, and physics foundations."
      },
      {
        degree: "Matriculation (Computer Science)",
        period: "2019 - 2021",
        institute: "Hassan Public High School Sandhilanawali",
        description: "Completed secondary education with high marks, establishing basic technical, computing, and mathematical parameters."
      }
    ]
  },
  {
    id: "shumaila-zulfqar",
    name: "Shumaila Zulfqar",
    role: "WordPress Developer & UI Designer",
    skills: ["WordPress Development", "WooCommerce", "Elementor Pro", "SEO & Copywriting"],
    experience: "WordPress Developer & Content strategist",
    education: "BS English (Aspire College Okara)",
    bio: "Shumaila specializes in building highly functional, speed-optimized WordPress platforms and aligning digital designs with compelling content strategy. By combining her analytical studies in English Literature with modern CMS architectures, she crafts sites that engage visitors and rank high on search engines.",
    avatarUrl: shumailaAvatar,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shumaila-zulfqar-531349397?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    location: "Vehari, Punjab",
    projectsCompleted: "15 plus completed",
    workStyle: "I focus on delivering simple, clean, and highly stable CMS solutions with semantic structure and professional design standards.",
    highlights: [
      "Custom WordPress design, WooCommerce setup, and plugin architecture integration",
      "Stunning landing pages using premium builders with exact responsiveness and tracking",
      "Strong command over copy structure, SEO formatting, and digital branding layout",
      "Regular backups, custom page templates, and performance tuning configurations"
    ],
    detailedSkills: [
      {
        category: "WordPress Stack",
        list: ["WordPress Core", "WooCommerce", "Elementor Pro", "Custom Themes", "Avada / Divi / Astra", "Contact Forms & Mailchimp", "Gutenberg Layouts"]
      },
      {
        category: "Content & Optimization",
        list: ["SEO (Yoast / RankMath)", "Copywriting & Editing", "Speed Optimization (WP-Rocket)", "Site Migrations & Backups", "Responsive Design Rules"]
      }
    ],
    detailedExperience: [
      {
        title: "WordPress Developer & Web Lead",
        period: "2023 - Present",
        company: "Creative Stack Agency (CSA)",
        description: "Developing scalable WordPress e-stores, professional business websites, organizing page hierarchy, and ensuring responsive execution across devices."
      }
    ],
    detailedEducation: [
      {
        degree: "BS English",
        period: "2022 - Present",
        institute: "Aspire College, Okara",
        description: "Currently studying. Deepening analytical critical reasoning, professional communications, written composition, and digital communications methodology."
      }
    ]
  },
  {
    id: "ume-tehreem",
    name: "Ume Tehreem",
    role: "Intermediate Graphic Designer",
    skills: ["UI Design", "Adobe Illustrator", "Canva & Photoshop", "Vector Layouts", "Brand Assets", "Logo Design", "Social Media Creatives"],
    experience: "Graphic Designer & Brand Asset Curator",
    education: "FSc (Aspire College Okara)",
    phone: "03035855167",
    bio: "Tehreem is an Intermediate Graphic Designer at Creative Stack Agency. She specializes in crafting beautiful visual aesthetics, logo layouts, and custom social media designs, translating client concepts into highly engaging visual experiences.",
    avatarUrl: tehreemAvatar,
    socialLinks: {
      github: "https://github.com/",
      facebook: "https://www.facebook.com/share/1945suCZ1C/"
    },
    location: "Okara, Punjab",
    projectsCompleted: "15 plus completed",
    workStyle: "I believe in clean visual hierarchies, beautiful color combinations, and highly structured branding components.",
    highlights: [
      "Custom brand identity crafting including logos, presentation decks, and business vectors",
      "Stunning social media visual sets and high-retention post structures using professional platforms",
      "Exceptional command over color psychology, modern typography rules, and aesthetic grid compositions",
      "Regular client collaboration on visual assets translating dynamic objectives into beautiful layouts"
    ],
    detailedSkills: [
      {
        category: "Design Core",
        list: ["UI/UX Design", "Canva", "Adobe Photoshop", "Adobe Illustrator", "Figma Design System", "Brand Identity Guidelines", "Typography Pairing"]
      },
      {
        category: "Marketing & Assets",
        list: ["Social Media Creatives", "Logo Crafting", "Banner Ad Design", "Vector Artwork", "Presentation Layouts", "Graphics Optimization"]
      }
    ],
    detailedExperience: [
      {
        title: "Graphic Designer & Brand Curator",
        period: "2024 - Present",
        company: "Creative Stack Agency (CSA)",
        description: "Designing striking vector graphics, social media post templates, logo concepts, and cohesive branding guidelines for modern digital businesses."
      }
    ],
    detailedEducation: [
      {
        degree: "FSc Pre-Engineering",
        period: "2022 - 2024",
        institute: "Aspire College, Okara",
        description: "Focused on physics, chemistry, mathematics, and digital computational workflow parameters."
      }
    ]
  },
  {
    id: "m-noman",
    name: "M. Noman",
    role: "Frontend Developer (React.js)",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "UI/UX Layouts", "Vite & npm", "HTML5 & CSS3"],
    experience: "Frontend Developer & UI Specialist",
    education: "BS Artificial Intelligence (IUB, 5th Semester)",
    phone: "03261619179",
    email: "muhammadnomansaeed62@gmail.com",
    bio: "Noman is a Frontend Developer at Creative Stack Agency, specializing in React.js, TypeScript, and modern responsive design. Keenly focused on pixel-perfect component architecture, he builds highly interactive, secure, and lightning-fast user interfaces.",
    avatarUrl: nomanAvatar,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/muhammad-noman-b15968362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      facebook: "https://www.facebook.com/share/18pktwAtKH/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/abna_adam0?igsh=MTM4ajh4dmpsNnBldQ%3D%3D&utm_source=qr",
      tiktok: "https://www.tiktok.com/@abnaadam04?_r=1&_t=ZS-97CoYLmTE7o"
    },
    location: "Lodhran, Punjab",
    projectsCompleted: "15 plus completed",
    workStyle: "I am dedicated to code cleanliness, type-safety, client satisfaction, and responsive design systems.",
    highlights: [
      "Frontend Developer at Creative Stack Agency (CSA) specializing in modular React.js UI workflows",
      "Expertise in designing pixel-perfect, screen-adaptive web modules with Tailwind CSS",
      "Implements fluid interactive animations, state management systems, and custom layouts",
      "Collaborates with the design lead to deliver clean, fast, and accessible digital platforms"
    ],
    detailedSkills: [
      {
        category: "Frontend Core",
        list: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3", "Bootstrap", "Responsive Layouts", "State Management"]
      },
      {
        category: "Tools & Systems",
        list: ["Vite", "npm/yarn", "Git & GitHub", "VS Code", "Postman", "Webpack", "UI Systems"]
      }
    ],
    detailedExperience: [
      {
        title: "Frontend Developer & UI Specialist",
        period: "2024 - Present",
        company: "Creative Stack Agency (CSA)",
        description: "Developing responsive frontend architectures, implementing interactive layouts with React.js & Tailwind CSS, and ensuring pixel-perfect translation of wireframe designs."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Science in Artificial Intelligence (BS AI)",
        period: "2023 - Present",
        institute: "The Islamia University of Bahawalpur (IUB)",
        description: "Currently in 5th Semester. Gaining deep insights in algorithmic design, object-oriented systems, computational thinking, and modern web application logic frameworks."
      }
    ]
  },
  {
    id: "fiaz-backend",
    name: "M. Fiaz Ahmed",
    role: "Full Stack Developer · Backend, QA & Finance Manager",
    skills: ["Backend Development", "API Security", "Database Systems", "Software QA/Testing", "Project Finance", "TypeScript", "Node.js", "Express", "MongoDB", "Budget Planning"],
    experience: "Backend Engineer, QA Auditor & CS Specialist",
    education: "Bachelor of Software Engineering (BSSE)",
    email: "fiazdeveloper@gmail.com",
    bio: "Fiaz specializes in backend development, building secure APIs and managing databases. He also takes responsibility for QA/testing, ensuring bug-free and high-performance products. Beyond development, he manages project finances, calculating costs and keeping the team aligned with budgets.",
    avatarUrl: fiazAvatar,
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com"
    },
    location: "Vehari, Punjab",
    projectsCompleted: "18 plus completed",
    workStyle: "I focus on complete API security, high-retention database speed, QA automation testing, and transparent project expense reports.",
    highlights: [
      "Specialist in backend system architectures, custom RESTful endpoints, and database connection pools",
      "Manages complete QA testing, edge-case debugging, bug tracking, and pre-release audits",
      "Directs project financial tracking, software cost estimates, and budget adherence parameters"
    ],
    detailedSkills: [
      {
        category: "Backend & System Design",
        list: ["Node.js", "Express.js", "MongoDB / Mongoose", "SQL Schema Design", "RESTful Interfaces", "JWT & Middleware Security"]
      },
      {
        category: "QA, Systems & Finance",
        list: ["Manual & Automated Testing", "API Collections (Postman)", "UI/UX Cross-Device Quality QA", "Bug-tracking", "Budget Planning & Cost Estimation"]
      }
    ],
    detailedExperience: [
      {
        title: "Full Stack Developer · Backend, QA & Finance Manager",
        period: "2024 - Present",
        company: "Creative Stack Agency (CSA)",
        description: "Designing robust systems, building lightweight endpoints, organizing data indexes, verifying build stability, and regulating development budgets."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Software Engineering (BSSE)",
        period: "2024 - Present",
        institute: "COMSATS University Islamabad (Vehari Campus)",
        description: "Currently in 5th Semester. Enhancing high-status software models, algorithms, object-oriented design, systems engineering, and full-stack patterns."
      }
    ]
  },
  {
    id: "ayesha-developer",
    name: "Ayesha Aslam",
    role: "Full Stack Developer · UI Architect",
    skills: ["Full Stack Development", "Frontend Development", "Backend Development", "Responsive Web Design", "React.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
    experience: "Full Stack Developer & Core Frontend Engineer",
    education: "BS Computer Science (KIPS College Okara)",
    phone: "+92 3298102474",
    email: "ayeshaweb16@gmail.com",
    bio: "I am a Full Stack Developer and a BS Computer Science student. I specialize in developing modern, responsive, and user-friendly web applications. I am passionate about learning new technologies and creating efficient digital solutions.",
    avatarUrl: ayeshaAvatar,
    socialLinks: {
      github: "https://github.com/Ayeshadeveloper14",
      linkedin: "https://www.linkedin.com/in/ayesha-aslam-9971a9397",
      facebook: "https://web.facebook.com/profile.php?id=61579189760363"
    },
    location: "Okara, Punjab",
    projectsCompleted: "12 plus completed",
    workStyle: "I am committed to designing clean structured components, intuitive UI spaces, and highly-optimized modern full-stack workflows.",
    highlights: [
      "Expertise in designing elegant, mobile-adaptive screens and landing pages with Tailwind CSS",
      "Builds modular React components with strict state control and customizable visual layers",
      "Passionate about front-to-back integration, robust REST APIs, and responsive layout styling"
    ],
    detailedSkills: [
      {
        category: "Frontend Stack",
        list: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Responsive Web Design", "HTML5 & CSS3", "Bootstrap"]
      },
      {
        category: "Backend & Architecture",
        list: ["Node.js", "Express.js", "MongoDB / SQL Basics", "RESTful Integration", "VCS (Git & GitHub)", "State Management"]
      }
    ],
    detailedExperience: [
      {
        title: "Full Stack Web Developer & UI Architect",
        period: "2024 - Present",
        company: "Creative Stack Agency (CSA) / Freelance",
        description: "Creating highly interactive user interfaces, writing secure endpoint integrations, maintaining modular layouts, and leading mobile responsiveness audits."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Science in Computer Science (BSCS)",
        period: "2023 - Present",
        institute: "KIPS College Okara",
        description: "Currently studying. Acquiring deep analytical foundations in data structures, algorithms, object-oriented concepts, and database structures."
      }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Blueprinting",
    description: "Deep dive workshops to map out your architecture backlog, user journeys, brand benchmarks, and market vulnerabilities.",
    detailedInsight: "We map out the exact scope of requirements, align design preferences, outline full timeline milestones, and build a unified strategic document that acts as our development North Star.",
    duration: "Week 1",
    iconName: "Search"
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Defining user flows, layout wireframes, high-affinity funnels, database architectures, and key system integrations.",
    detailedInsight: "Translating discovery data into concrete, optimized architecture plans. We detail API maps, Shopify collections, landing page hierarchies, and campaign structures.",
    duration: "Week 2",
    iconName: "Compass"
  },
  {
    number: "03",
    title: "Premium Design",
    description: "Handcrafting pristine luxury mockups in Figma inspired by the strict standards of elite, high-conversion layouts.",
    detailedInsight: "Designing with exact type hierarchies, bespoke icon models, smooth motion transitions, custom animations, and glassmorphic micro-details tailored to attract elite tier clients.",
    duration: "Weeks 3 - 4",
    iconName: "Award"
  },
  {
    number: "04",
    title: "High-Performance Dev",
    description: "Coded with absolute semantic precision. Utilizing clean, responsive TypeScript structures compiled for ultimate speed.",
    detailedInsight: "Converting designs into production-ready repositories. We compile, lint, test, optimize images, configure custom Liquid/headless pipelines, and write responsive animations.",
    duration: "Weeks 5 - 7",
    iconName: "Cpu"
  },
  {
    number: "05",
    title: "Quality Check & Launch",
    description: "Intense testing across browser architectures, loading tests, security audits, and global CDN deployments.",
    detailedInsight: "We run Core Web Vitals checks, optimize all metadata fields, establish secure cloud database parameters, and push the platform to high-status live production.",
    duration: "Week 8",
    iconName: "CheckCircle"
  },
  {
    number: "06",
    title: "Velocity-Driven Growth",
    description: "On-site SEO scaling, continuous conversion analysis, retargeting campaigns, and constant optimization support.",
    detailedInsight: "Establishing organic content loops, optimizing conversion funnels based on real consumer hotmaps, and constant iterative platform enhancements to double customer value.",
    duration: "Ongoing Monthly",
    iconName: "Zap"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Velocity",
    priceMonthly: 1499,
    priceYearly: 1199,
    period: "month",
    description: "Perfect for state-of-the-art startups and growing local brands seeking high-end UI design and high-conversion landing assets.",
    features: [
      "Custom Coded Corporate Portal (Up to 5 Pages)",
      "Vite React or WordPress Engine Setup",
      "Fully Responsive Fluid Layout System",
      "Core SEO Semantic Schema Mapping",
      "Figma Vector UI Mockup Sheets",
      "Dynamic Floating Contact Integrations",
      "14 Days Dedicated Post-Launch Support"
    ],
    timeline: "Estimated 2-4 Week Handover",
    actionText: "Initiate Starter Plan"
  },
  {
    id: "growth",
    name: "Growth Engine Plus",
    priceMonthly: 3499,
    priceYearly: 2799,
    period: "month",
    description: "Our signature flagship service. Perfect for e-commerce Shopify high-flyers and SaaS business models seeking scale.",
    features: [
      "Headless Shopify or Advanced SaaS Portal",
      "Bespoke Interactive 3D CSS Dashboard Widgets",
      "Full eCommerce/Stripe Payments Integrations",
      "Premium Motion Animations Stack",
      "High-Conversion Copywriting & Asset Curations",
      "3-Channel Social Ads Strategy & Setup",
      "Comprehensive Database Sync (Firestore/Postgres)",
      "30 Days Core Tech Support & Adjustments",
      "Featured Founder Akram Advisor Highlight"
    ],
    timeline: "Estimated 4-6 Week Handover",
    badge: "Most Demanded",
    actionText: "Supercharge Growth"
  },
  {
    id: "enterprise",
    name: "Enterprise Authority",
    priceMonthly: 7499,
    priceYearly: 5999,
    period: "month",
    description: "The complete technology partner package. Dedicated designers, engineers, and growth agents mapping your long term strategy.",
    features: [
      "Omni-channel Development (Web, iOS & Android Apps)",
      "Uncapped Figma Workspace & Marketing Assets Design",
      "Cinematic Ad Creative Video Editing Subscriptions",
      "Continuous Semantic SEO Link Building (Weekly)",
      "Unlimited SLA Support Response (Under 2 Hours)",
      "Weekly Core Strategy Boards with Akram Al-Kamel",
      "Unlimited Revisions & Core Custom Integrations"
    ],
    timeline: "Continuous Dedicated Pipeline",
    actionText: "Deploy Enterprise Partnership"
  }
];

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "whatsapp",
    platformName: "WhatsApp Channel",
    iconName: "MessageCircle",
    description: "Follow our official automated broadcast channel for project rollouts, live design critiques, and team announcements.",
    visitUrl: "https://whatsapp.com/channel/0029VbCVtZ7Id7nSBLYXOQ1c",
    buttonLabel: "Join Channel",
    statsText: "Official Broadcast",
    accentGradient: "from-[#25D366]/20 to-[#128C7E]/20 hover:border-[#25D366]/40"
  },
  {
    id: "facebook",
    platformName: "Facebook Community",
    iconName: "Facebook",
    description: "Connect with our official business page, view visual assets, track client milestones, and direct-message our onboarding queue.",
    visitUrl: "https://www.facebook.com/profile.php?id=61590618728298",
    buttonLabel: "Visit Community",
    statsText: "Official Page",
    accentGradient: "from-[#1877F2]/20 to-[#0F5AE6]/20 hover:border-[#1877F2]/40"
  },
  {
    id: "instagram",
    platformName: "Instagram Board",
    iconName: "Instagram",
    description: "Behind-the-scenes design previews, UX micro-interactions, responsive wireframes, and dark high-contrast inspiration boards.",
    visitUrl: "https://www.instagram.com/creativestackagency",
    buttonLabel: "View Insights",
    statsText: "Creative Grid",
    accentGradient: "from-[#E1306C]/20 to-[#C13584]/20 hover:border-[#E1306C]/40"
  },
  {
    id: "tiktok",
    platformName: "TikTok Shorts",
    iconName: "Music",
    description: "High-performance interface speedruns, client reveal clips, modern coding advice, and tech-stack highlights.",
    visitUrl: "https://www.tiktok.com/@creative.stack.ag",
    buttonLabel: "Watch Shorts",
    statsText: "Rapid Updates",
    accentGradient: "from-[#EE1D52]/20 to-[#69C9D0]/20 hover:border-[#EE1D52]/40"
  },
  {
    id: "github",
    platformName: "GitHub Repository",
    iconName: "Github",
    description: "Access our premium open-source boilerplates, high-speed CSS utilities, and custom layouts.",
    visitUrl: "https://github.com/creativestackagency",
    buttonLabel: "Inspect Code",
    statsText: "2k+ Commits",
    accentGradient: "from-[#333]/30 to-[#444]/30 hover:border-white/30"
  },
  {
    id: "youtube",
    platformName: "YouTube Studio",
    iconName: "Youtube",
    description: "Full masterclasses, high-status coding tutorials, video editing guidelines, and software showcases.",
    visitUrl: "https://www.youtube.com/channel/UCjXYUc0PR0s-kIZKFR1MFiw",
    buttonLabel: "Subscribe Hub",
    statsText: "18k+ Video Builders",
    accentGradient: "from-[#FF0000]/20 to-[#CC0000]/20 hover:border-[#FF0000]/40"
  },
  {
    id: "telegram",
    platformName: "Telegram Channel",
    iconName: "Send",
    description: "Connect directly with Creative Stack Agency (+92 302 7434569) on Telegram for instant onboarding assessments and project consultations.",
    visitUrl: "https://t.me/+923027434569",
    buttonLabel: "Chat on Telegram",
    statsText: "03027434569",
    accentGradient: "from-[#0088cc]/20 to-[#0088cc]/30 hover:border-[#0088cc]/40"
  },
  {
    id: "botim",
    platformName: "Botim App Connection",
    iconName: "PhoneCall",
    description: "Connect or call our core team on the Botim app (03027434569) for direct audio inquiries, voice notes, and official admissions consults.",
    visitUrl: "https://web.botim.me/",
    buttonLabel: "Chat on Botim",
    statsText: "03027434569",
    accentGradient: "from-[#00CC66]/20 to-[#00994C]/20 hover:border-[#00CC66]/40"
  },
  {
    id: "fiverr",
    platformName: "Fiverr Workspace",
    iconName: "Fiverr",
    description: "Connect with us on Fiverr for secure project contract escrow, structured design milestone delivery, and fully certified custom development gigs.",
    visitUrl: "https://www.fiverr.com/",
    buttonLabel: "Hire on Fiverr",
    statsText: "SLA Certified Gigs",
    accentGradient: "from-[#1DBF73]/20 to-[#109655]/20 hover:border-[#1DBF73]/40"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    clientName: "David Sterling",
    role: "Founder & CEO",
    companyName: "Aether Lab Inc.",
    rating: 5,
    quote: "Creative Stack Agency rebuilt our corporate site with React. Our page-load speed decreased from 3.4 seconds to an outstanding 0.2s, which fundamentally boosted our pipeline conversion rate by 42%. They are absolute tech artists.",
    companyLogoSvg: `<svg viewBox="0 0 100 24" fill="currentColor" class="h-5 text-gray-500 hover:text-white transition-colors"><rect x="10" y="4" width="8" height="16" rx="2" fill-opacity="0.3"/><rect x="22" y="4" width="16" height="16" rx="2"/><circle cx="50" cy="12" r="8" fill-opacity="0.5"/><text x="64" y="16" font-family="monospace" font-size="10" font-weight="bold" letter-spacing="1">AETHER</text></svg>`
  },
  {
    id: "t2",
    clientName: "Elena Rostova",
    role: "Head of Digital Commerce",
    companyName: "Vanguard Watch Studios",
    rating: 5,
    quote: "The custom Shopify code developed by Aftab and the design layouts delivered by Maryam boosted our brand trust. Average Order Value went up by 48% and mobile conversions spiked dramatically. Seamless, premium, responsive. Outstanding!",
    companyLogoSvg: `<svg viewBox="0 0 100 24" fill="currentColor" class="h-5 text-gray-500 hover:text-white transition-colors"><polygon points="12,2 22,22 2,22" fill-opacity="0.5"/><path d="M40,12 L56,12 M48,4 L48,20" stroke="currentColor" stroke-width="2"/><text x="64" y="16" font-family="monospace" font-size="10" font-weight="bold" letter-spacing="1">VANGUARD</text></svg>`
  },
  {
    id: "t3",
    clientName: "Jonathan Cole",
    role: "VP of Product Marketing",
    companyName: "Chronos AI",
    rating: 5,
    quote: "Their semantic SEO mapping and targeted PPC asset editing got us onto page 1 of Google search results for all our premium enterprise metrics in 90 days. Incredible ROI and beautiful custom reports. Highly recommend.",
    companyLogoSvg: `<svg viewBox="0 0 100 24" fill="currentColor" class="h-5 text-gray-500 hover:text-white transition-colors"><rect x="5" y="5" width="14" height="14" rx="3"/><circle cx="40" cy="12" r="6" fill-opacity="0.4"/><polygon points="56,6 64,12 56,18" fill-opacity="0.7"/><text x="70" y="16" font-family="monospace" font-size="10" font-weight="bold" letter-spacing="1">CHRONOS</text></svg>`
  }
];
