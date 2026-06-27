import React, { useState, Suspense, lazy, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import LeftFloatingContact from "./components/LeftFloatingContact";
import HeroSection from "./components/HeroSection";
import ClientLogos from "./components/ClientLogos";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import FloatingAIAssistant from "./components/FloatingAIAssistant";

// Lazy load below-the-fold components for performance
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const TeamSection = lazy(() => import("./components/TeamSection"));
const QuizSection = lazy(() => import("./components/QuizSection"));
const CoursesSection = lazy(() => import("./components/CoursesSection"));
const ProcessSection = lazy(() => import("./components/ProcessSection"));
const SocialSection = lazy(() => import("./components/SocialSection"));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection"));
const PricingSection = lazy(() => import("./components/PricingSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const AdmissionFormSection = lazy(() => import("./components/AdmissionFormSection"));
const RepeatCTA = lazy(() => import("./components/RepeatCTA"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  // Sync state between Pricing selects and Contact Form inputs
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [selectedBudgetTag, setSelectedBudgetTag] = useState<string>("");

  const handlePlanSelectionSync = (planId: string, budgetTag: string) => {
    setSelectedPlanId(planId);
    setSelectedBudgetTag(budgetTag);

    // Smoothly scroll down to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const topOffset = contactSection.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  const handleClearPlanSelect = () => {
    setSelectedPlanId("");
    setSelectedBudgetTag("");
  };

  const handleJumpToContactDirectly = () => {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      const topOffset = contactSec.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  const handleJumpToPortfolioDirectly = () => {
    const portfolioSec = document.getElementById("portfolio");
    if (portfolioSec) {
      const topOffset = portfolioSec.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-gray-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div key="loader-wrapper" exit={{ opacity: 0 }}>
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Custom Hovering Trails Cursor */}
      <CustomCursor />

      {/* 3. Sticky and Blur top Nav bar */}
      <Navbar onStartProjectClick={handleJumpToContactDirectly} />

      {/* 4. Left Pinned Floating Social Capsules */}
      <LeftFloatingContact />

      {/* 5. Premium Global AI Assistant */}
      <FloatingAIAssistant />

      {/* Core Scaffolding Viewport sections */}
      <main>
        {/* Hero visual elements and indicators block */}
        <HeroSection
          onStartProjectClick={handleJumpToContactDirectly}
          onViewPortfolioClick={handleJumpToPortfolioDirectly}
        />

        {/* Client Logos Strip */}
        <ClientLogos />

        {/* About Section */}
        <AboutSection />

        {/* Services Glass cards listings */}
        <ServicesSection onStartProjectClick={handleJumpToContactDirectly} />

        <Suspense fallback={<div className="h-24 w-full flex items-center justify-center text-gray-400">Loading...</div>}>
          {/* Portfolios filters cases grids and Case Study Modals */}
          <PortfolioSection />

          <RepeatCTA onStartProjectClick={handleJumpToContactDirectly} title="Ready to scale your enterprise?" subtitle="We build custom digital architectures designed for growth." />

          {/* Team Founder spotlights and expert cards grids */}
          <TeamSection />

          {/* Dynamic Entry quiz assessments section */}
          <QuizSection />

          {/* Dynamic Entry online software courses section */}
          <CoursesSection />

          {/* Admissions Application Form */}
          <AdmissionFormSection />

          {/* Progress scrolling timelines block */}
          <ProcessSection />

          <RepeatCTA onStartProjectClick={handleJumpToContactDirectly} title="Let's build something extraordinary." subtitle="Book a discovery call to audit your current ecosystem." />

          {/* Bento grids Social Directory connects */}
          <SocialSection />

          {/* Testimonial panels and client video player mockups */}
          <TestimonialsSection />

          {/* Tiers catalog grids list */}
          <PricingSection onPlanSelect={handlePlanSelectionSync} />

          {/* Onboarding forms & response hubs */}
          <ContactSection
            selectedPlanId={selectedPlanId}
            selectedBudgetTag={selectedBudgetTag}
            onClearPlanSelect={handleClearPlanSelect}
          />
        </Suspense>
      </main>

      {/* Global edge distributed footer details block */}
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>

    </div>
  );
}
