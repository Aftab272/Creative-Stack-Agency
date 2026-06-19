export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  bulletPoints: string[];
  category: string;
  details: string;
  duration: string;
  deliverables: string[];
}

export interface Project {
  id: string;
  title: string;
  clientName: string;
  description: string;
  previewImage: string;
  caseStudy: string;
  results: string[];
  category: string;
  tags: string[];
  liveUrl?: string;
  challenge?: string;
  solution?: string;
  githubUrl?: string;
  projectType?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  experience: string;
  bio: string;
  avatarUrl: string;
  education?: string;
  phone?: string;
  email?: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  detailedSkills?: { category: string; list: string[] }[];
  detailedExperience?: { title: string; period: string; company: string; description: string }[];
  detailedEducation?: { degree: string; period: string; institute: string; description: string }[];
  location?: string;
  projectsCompleted?: string;
  highlights?: string[];
  workStyle?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detailedInsight: string;
  duration: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  period: string;
  description: string;
  features: string[];
  timeline: string;
  badge?: string;
  actionText: string;
}

export interface SocialPlatform {
  id: string;
  platformName: string;
  iconName: string;
  description: string;
  visitUrl: string;
  buttonLabel: string;
  statsText: string;
  accentGradient: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  companyName: string;
  quote: string;
  rating: number;
  companyLogoSvg?: string;
}
