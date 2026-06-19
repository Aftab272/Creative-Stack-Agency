import TeamMember from "../models/Team.js";

export const initialTeam = [
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
    avatarUrl: "", // populated as static path asset on frontend fallback
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
      "Delivers high-speed cloud deployments and modular interface architectures"
    ],
    detailedSkills: [
      {
        category: "Frontend Development",
        list: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap"]
      },
      {
        category: "Backend & Storage",
        list: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Mongoose", "PostgreSQL"]
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
        description: "Currently in 5th Semester. Enhancing software platforms, algorithms, object-oriented design, systems engineering, and full-stack patterns."
      }
    ]
  },
  {
    id: "maryam-nawaz",
    name: "Maryam Nawaz",
    role: "Partner & Co-Founder · Full Stack Developer",
    skills: ["Full Stack Dev", "Frontend Curation", "UI/UX Layouts", "MongoDB Schema Design", "RESTful Interfaces", "Git Core"],
    experience: "Partner/Co-Founder & MERN Developer",
    education: "BS Computer Science (University of Okara)",
    email: "maryamnawazdev7780@gmail.com",
    phone: "+92 304 7556084",
    bio: "Maryam is a Partner and Co-Founder of Creative Stack Agency. She specializes in crafting responsive frontend layers and structuring full-stack database architectures. Passionate about engineering high-performance modern web software, she coordinates with our design and development leads to ensure fluid cross-device execution.",
    avatarUrl: "",
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
      "Specialist in fluid CSS layouts, modern custom animations, and cross-device rendering parameters"
    ],
    detailedSkills: [
      {
        category: "Frontend Development",
        list: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3"]
      }
    ],
    detailedExperience: [
      {
        title: "Co-Founder & Partner / Full Stack Engineer",
        period: "2023 - Present",
        company: "Creative Stack Agency (CSA)",
        description: "Leading responsive frontend architecture development, structuring custom DB schemas, and coordinating deployment cycles."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Computer Science (BSCS)",
        period: "2023 - Present",
        institute: "University of Okara",
        description: "Currently pursuing BSCS. Building database and software foundations."
      }
    ]
  },
  {
    id: "sami-cto",
    name: "M. Sami Ullah",
    role: "Full Stack Developer · Team Lead & Client Manager",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "MERN Stack", "Responsive UI/UX Design"],
    experience: "Owner of Team4Stack & Lead Software Engineer",
    education: "BS Software Engineering (4th Semester)",
    email: "sami@team4stack.com",
    bio: "Sami leads the team and communicates directly with clients to understand their requirements. He designs system architecture, oversees deployments, and mentors the team.",
    avatarUrl: "",
    socialLinks: {
      github: "https://github.com/Sami3234",
      tiktok: "https://www.tiktok.com/@m.sami_daha"
    },
    location: "Vehari, Punjab",
    projectsCompleted: "25 plus completed",
    workStyle: "I prefer simple communication, practical delivery, and designs that stay readable on every screen size.",
    highlights: [
      "Responsive design that stays clean on mobile screens",
      "Owner of Team4Stack with practical student and business projects"
    ],
    detailedSkills: [
      {
        category: "Frontend Development",
        list: ["React.js", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"]
      }
    ],
    detailedExperience: [
      {
        title: "Owner and Developer",
        period: "2023 - Present",
        company: "Team4Stack and Freelance Projects",
        description: "Building responsive interfaces, business websites, portfolios, and practical projects."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Software Engineering (BSSE)",
        period: "2024 - Present",
        institute: "COMSATS University Islamabad, Vehari Campus",
        description: "Improving software engineering fundamentals, algorithms, and project execution."
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
    bio: "Hasnain focuses on crafting responsive and modern user interfaces. He designs authentication flows, dashboards, and scalable components using React and Tailwind.",
    avatarUrl: "",
    socialLinks: {
      github: "https://github.com/hasnain17576"
    },
    location: "Kamalia, Punjab",
    projectsCompleted: "15 plus completed",
    workStyle: "I am a passionate MERN Stack Developer. My journey is driven by curiosity and a desire to solve real-world problems.",
    highlights: [
      "Crafts highly responsive and modern user interfaces using React and Tailwind CSS",
      "Designs secure authentication flows, dashboards, and scalable components"
    ],
    detailedSkills: [
      {
        category: "Frontend Stack",
        list: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
      }
    ],
    detailedExperience: [
      {
        title: "Full Stack Web Developer & Frontend Lead",
        period: "2024 - Present",
        company: "Creative Stack Agency & Freelance",
        description: "Focusing on crafting lightweight, fast, and responsive user interfaces."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Software Engineering (BSSE)",
        period: "2024 - Present",
        institute: "COMSATS University Islamabad",
        description: "Developing strong bases in algorithms, object-oriented design, systems engineering."
      }
    ]
  },
  {
    id: "shumaila-zulfqar",
    name: "Shumaila Zulfqar",
    role: "Professional WordPress Developer · WooCommerce Expert",
    skills: ["WordPress Curation", "Elementor Pro", "WooCommerce", "WordPress Customizer", "Plugins Configuration", "Live Chats"],
    experience: "Lead WordPress & Woo Architect",
    education: "Bachelor in Computer Science (Ongoing)",
    email: "shumailazulfqar82@gmail.com",
    bio: "Shumaila structures enterprise custom WordPress portals, e-commerce checkouts, subscription funnels, and Gutenberg custom systems. She brings speed optimization and live chat capabilities to editorial websites.",
    avatarUrl: "",
    socialLinks: {
      github: "https://github.com/shumaila25"
    },
    location: "Okara, Punjab",
    projectsCompleted: "18 plus completed",
    workStyle: "Ensuring zero redundancy, high responsiveness, and easy content management.",
    highlights: [
      "WooCommerce checkout optimization and custom gateways",
      "Professional Elementor speed audits"
    ],
    detailedSkills: [
      {
        category: "WordPress Stack",
        list: ["WordPress Theme Builder", "Elementor Pro", "WooCommerce Integration", "Plugin Customizer"]
      }
    ],
    detailedExperience: [
      {
        title: "Senior WordPress Engineer",
        period: "2024 - Present",
        company: "Team4Stack",
        description: "Formulating custom high-speed WordPress themes and customized client content funnels."
      }
    ],
    detailedEducation: [
      {
        degree: "Bachelor of Computer Science (BCS)",
        period: "2023 - Present",
        institute: "University of Okara",
        description: "Advancing digital layouts, algorithms, and modular design strategies."
      }
    ]
  },
  {
    id: "ume-tehreem",
    name: "Ume Tehreem",
    role: "UI/UX & Graphic Designer · Brand Catalyst",
    skills: ["Figma Systems", "Brand Identities", "Typography Grids", "Sound Engineering Profiles", "Micro-Motions", "Canva Pro"],
    experience: "Lead UI Designer & Brand Strategist",
    education: "Undergrad Software track",
    bio: "Tehreem curates gorgeous vector artwork, iconic brand identities, linear spacing themes, and interactive prototypes directly from scratch on Figma. She oversees luxury agency brand continuity guidelines.",
    avatarUrl: "",
    socialLinks: {},
    location: "Sargodha, Punjab",
    projectsCompleted: "40 plus brand kits completed",
    workStyle: "Curating sleek layouts focusing heavily on typography pair lists, luxury whitespace, and micro-animations.",
    highlights: [
      "Curator of sleek layouts on Figma supporting major development conversions",
      "Brand consultant formulating visual guideline systems from scratch"
    ],
    detailedSkills: [
      {
        category: "Creative Tools",
        list: ["Figma Design", "Adobe Photoshop", "Canva Premium", "Typography Grids", "Sound grading profiles"]
      }
    ],
    detailedExperience: [
      {
        title: "Lead UI Engineer & Brand Catalyst",
        period: "2024 - Present",
        company: "Creative Stack Agency",
        description: "Interpreting customer core visions into pristine vector systems, UI blocks, and strict typographic grids."
      }
    ],
    detailedEducation: [
      {
        degree: "Undergrad studies",
        period: "2023 - Present",
        institute: "Punjab",
        description: "Deep research into graphic frameworks, human-computer interfaces, and responsive interaction parameters."
      }
    ]
  },
  {
    id: "m-noman",
    name: "Muhammad Noman",
    role: "Front-End Developer · UI Engineer",
    skills: ["HTML5 & CSS3", "Bootstrap 5", "JavaScript (ES6)", "Tailwind responsive design", "Custom component layouts"],
    experience: "UI Layout Coder & Frontend Developer",
    education: "Software studies",
    bio: "Noman structures clean, reusable component frameworks using React and CSS, checking cross-browser rendering grids and mobile touch interactions.",
    avatarUrl: "",
    socialLinks: {},
    location: "Multan, Punjab",
    projectsCompleted: "12 completed web structures",
    highlights: [
      "Custom responsive code styling",
      "Cross-browser grid rendering validation"
    ],
    detailedSkills: [
      {
        category: "Programming Systems",
        list: ["HTML-5", "CSS-3", "Tailwind CSS", "Bootstrap", "Vanilla JavaScript"]
      }
    ],
    detailedExperience: [
      {
        title: "Front-End Layout Designer",
        period: "2024 - Present",
        company: "Freelance Team Support",
        description: "Transforming high-status Figma boards into responsive mobile-ready web properties."
      }
    ],
    detailedEducation: [
      {
        degree: "BS track",
        period: "2023 - Present",
        institute: "Punjab",
        description: "Learning modular interface frameworks, programming blocks, and database patterns."
      }
    ]
  },
  {
    id: "fiaz-backend",
    name: "Muhammad Fiaz",
    role: "SEO Specialist · Backend Integrations Support",
    skills: ["Semantic SEO", "PageSpeed Index optimizations", "Meta tags algorithms", "Keyword targeting", "Express route validations"],
    experience: "SEO Analyst & Backend Integration Expert",
    education: "Undergrad",
    bio: "Fiaz optimizes web systems for search engine indexing. He conducts keywords analysis, structures Schema tags, and audits page compilation speeds.",
    avatarUrl: "",
    socialLinks: {},
    location: "Punjab, Pakistan",
    projectsCompleted: "20 sites indexed",
    highlights: [
      "Boosted conversion ratios via semantic SEO layouts",
      "Engineered clean REST routes in node middleware"
    ],
    detailedSkills: [
      {
        category: "Operations",
        list: ["Google Search Console", "Ahrefs & SEMrush audits", "SEO copywriting", "Server route integration"]
      }
    ],
    detailedExperience: [
      {
        title: "SEO Analyst & API Consultant",
        period: "2024 - Present",
        company: "CSA Operations",
        description: "Formulating Google dominance indexes, page speed parameters, and managing programmatic meta tags."
      }
    ],
    detailedEducation: [
      {
        degree: "Undergraduate track",
        period: "2023 - Present",
        institute: "Vehari",
        description: "Analyzing information ecosystems, databases, and network administration schemes."
      }
    ]
  },
  {
    id: "ayesha-developer",
    name: "Ayesha Developer",
    role: "Front-End Developer · React Integrations",
    skills: ["React Components", "Framer Motion", "Form Validation", "Client-Side Routing", "State hooks", "CSS animation layers"],
    experience: "React Developer & UI Integrator",
    education: "BS Computer Science (Ongoing)",
    bio: "Ayesha hooks interactive client-side templates to live API pathways. She coordinates animations using libraries like motion or GSAP.",
    avatarUrl: "",
    socialLinks: {},
    location: "Punjab",
    projectsCompleted: "15 React apps built",
    highlights: [
      "Framer motion responsive page routes integration",
      "Dynamic data binding layouts"
    ],
    detailedSkills: [
      {
        category: "Tech Library",
        list: ["React.js", "Recoil & Redux state", "CSS animations", "Git VCS"]
      }
    ],
    detailedExperience: [
      {
        title: "Junior React Developer",
        period: "2024 - Present",
        company: "Team4Stack Support",
        description: "Interfacing dynamic API services to standard UI containers with beautiful entry transitions and indicators."
      }
    ],
    detailedEducation: [
      {
        degree: "BS Computer Science",
        period: "2024 - Present",
        institute: "Okara",
        description: "Acquiring structured software development methodology, computing algorithms, and state managers."
      }
    ]
  }
];

export async function seedTeam() {
  try {
    const count = await TeamMember.countDocuments();
    if (count === 0) {
      console.log("Seeding team member collection...");
      await TeamMember.insertMany(initialTeam);
      console.log("Team members seeded successfully!");
    } else {
      console.log("Team collection already has data, skipping seeding.");
    }
  } catch (error) {
    console.error("Failed to seed team members", error);
  }
}
