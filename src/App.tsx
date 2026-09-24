/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { MarqueeStrip } from './components/MarqueeStrip.tsx';
import { BusinessChallenge } from './components/BusinessChallenge.tsx';
import { SolutionsSection } from './components/SolutionsSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { IndustrySection } from './components/IndustrySection.tsx';
import { ProgramsCarousel } from './components/ProgramsCarousel.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { MethodologySection } from './components/MethodologySection.tsx';
import { CaseStudiesSection } from './components/CaseStudiesSection.tsx';
import { TestimonialSection } from './components/TestimonialSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { InsightsSection } from './components/InsightsSection.tsx';
import { ContactCta } from './components/ContactCta.tsx';
import { Footer } from './components/Footer.tsx';
import { InquiryModal } from './components/InquiryModal.tsx';
import { ExecutiveClearanceModal } from './components/ExecutiveClearanceModal.tsx';
import { SolutionDetailModal } from './components/SolutionDetailModal.tsx';
import { InsightReaderModal } from './components/InsightReaderModal.tsx';
import { SolutionItem, InsightArticle } from './data/nexusData.ts';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [preselectedTrack, setPreselectedTrack] = useState<string | undefined>(undefined);
  const [clearanceModalOpen, setClearanceModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Mouse Tracking Spotlight Follower
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Section Observer for Active Navigation Highlighting
  useEffect(() => {
    const sections = ['home', 'solutions', 'services', 'industries', 'about', 'insights'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInquiry = (track?: string) => {
    setPreselectedTrack(track);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-body selection:bg-amber-500/25 selection:text-amber-900 relative">
      {/* Ambient Spotlight Follower */}
      <div className="spotlight-light" />

      {/* Header Navigation */}
      <Header
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenClearance={() => setClearanceModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main className="w-full pt-16 overflow-x-hidden">
        {/* Section 01: Hero */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onExploreTrack={(track) => handleOpenInquiry(track)}
        />

        {/* Section 02: Trust & Client Marquee Strip */}
        <MarqueeStrip />

        {/* Section 03: Business Challenge & Stepper */}
        <BusinessChallenge
          onOpenInquiry={() => handleOpenInquiry('Challenge Transformation')}
        />

        {/* Section 04: Solutions */}
        <SolutionsSection
          onSelectSolution={(solution) => setSelectedSolution(solution)}
        />

        {/* Section 05: Services & Architectural Triad */}
        <ServicesSection
          onOpenInquiry={(topic) => handleOpenInquiry(topic || 'Service Triad')}
        />

        {/* Section 06: Industries */}
        <IndustrySection
          onOpenInquiry={(indName) => handleOpenInquiry(`Industry: ${indName}`)}
        />

        {/* Section 07: Signature Programs & Executive Labs */}
        <ProgramsCarousel
          onOpenInquiry={(progName) => handleOpenInquiry(progName)}
        />

        {/* Section 08: About & Institutional Mission */}
        <AboutSection />

        {/* Section 09: Methodology & 5-Stage Lifecycle */}
        <MethodologySection
          onOpenInquiry={(stage) => handleOpenInquiry(stage)}
        />

        {/* Section 10: Case Studies & Quantified Outperformance */}
        <CaseStudiesSection
          onOpenInquiry={(caseStudy) => handleOpenInquiry(caseStudy)}
        />

        {/* Section 11: Testimonials & Executive Perspectives */}
        <TestimonialSection />

        {/* Section 12: Team & Leadership */}
        <TeamSection
          onOpenInquiry={(partner) => handleOpenInquiry(partner)}
        />

        {/* Section 13: Insights & Thought Leadership */}
        <InsightsSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Section 14: Executive Call to Action */}
        <ContactCta
          onOpenInquiry={() => handleOpenInquiry()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={(topic) => handleOpenInquiry(topic)}
      />

      {/* Interactive Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedTrack={preselectedTrack}
      />

      <ExecutiveClearanceModal
        isOpen={clearanceModalOpen}
        onClose={() => setClearanceModalOpen(false)}
        onOpenInquiry={() => handleOpenInquiry('Executive Clearance Mandate')}
      />

      <SolutionDetailModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onOpenInquiry={(track) => handleOpenInquiry(track)}
      />

      <InsightReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenInquiry={() => handleOpenInquiry('Insight Discussion')}
      />
    </div>
  );
}
