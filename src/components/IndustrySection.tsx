import React, { useState } from 'react';
import { INDUSTRIES, IndustryItem } from '../data/nexusData.ts';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface IndustrySectionProps {
  onOpenInquiry: (industryName: string) => void;
}

export const IndustrySection: React.FC<IndustrySectionProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('corporate');

  const currentIndustry = INDUSTRIES.find(item => item.id === activeTab) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-t border-amber-900/10 relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            Contextual Specialization
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight mt-2">
            Built for organizations at <span className="italic text-gold-sheen-light">every stage of growth.</span>
          </h2>
        </div>

        {/* Navigation Switcher Tab Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
          {INDUSTRIES.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-[0.16em] transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold shadow-[0_2px_15px_rgba(212,175,55,0.4)]'
                    : 'bg-stone-50 border border-amber-900/15 text-stone-600 hover:text-amber-800 hover:border-amber-600 font-medium'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content Showcase Card with Luxury Styling */}
        <div className="luxury-card-light p-6 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-lg">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-800 font-mono text-[10px] uppercase tracking-widest font-bold">
              {currentIndustry.tag}
            </div>

            <h3 className="font-display text-2xl sm:text-4xl text-stone-900 font-normal leading-snug">
              {currentIndustry.title}
            </h3>

            <p className="font-body text-base text-stone-600 font-light leading-relaxed">
              {currentIndustry.desc}
            </p>

            {/* Dynamic Numerical Proofpoints */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-amber-900/15 shadow-sm">
                <span className="font-tech text-3xl text-gold-sheen-light font-bold">
                  {currentIndustry.stat1}
                </span>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mt-1">
                  {currentIndustry.stat1Label}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-amber-900/15 shadow-sm">
                <span className="font-tech text-3xl text-emerald-sheen-light font-bold">
                  {currentIndustry.stat2}
                </span>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mt-1">
                  {currentIndustry.stat2Label}
                </p>
              </div>
            </div>

            {/* Key Focus Points */}
            <div className="pt-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">
                Mandate Interventions
              </p>
              <div className="flex flex-wrap gap-2">
                {currentIndustry.highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-50 border border-amber-900/10 text-xs text-stone-700 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry(currentIndustry.title)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                <span>Engage for {currentIndustry.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Architectural Imagery Showcase */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-amber-900/20 shadow-xl group">
            <img 
              src={currentIndustry.imageUrl} 
              alt={currentIndustry.title}
              referrerPolicy="no-referrer"
              className="w-full h-88 sm:h-96 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex items-end p-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="font-mono text-[11px] text-white tracking-[0.16em] uppercase font-semibold drop-shadow-sm">
                  {currentIndustry.locationCaption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
