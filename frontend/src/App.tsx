import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import LeftFloatingContact from "./components/LeftFloatingContact";
import HeroSection from "./components/HeroSection";
import ClientLogos from "./components/ClientLogos";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TeamSection from "./components/TeamSection";
import QuizSection from "./components/QuizSection";
import CoursesSection from "./components/CoursesSection";
import ProcessSection from "./components/ProcessSection";
import SocialSection from "./components/SocialSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import AdmissionFormSection from "./components/AdmissionFormSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import RepeatCTA from "./components/RepeatCTA";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
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

      {/* Core Scaffolding Viewport sections */}
      <main>
        {/* Hero visual elements and indicators block */}
        <HeroSection
          onStartProjectClick={handleJumpToContactDirectly}
          onViewPortfolioClick={handleJumpToPortfolioDirectly}
        />

        {/* Client Logos Strip */}
        <ClientLogos />

        {/* Services Glass cards listings */}
        <ServicesSection onStartProjectClick={handleJumpToContactDirectly} />

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
      </main>

      {/* Global edge distributed footer details block */}
      <Footer />

    </div>
  );
}
