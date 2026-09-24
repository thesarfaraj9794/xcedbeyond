import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { ThreeVantaCanvas } from './ThreeVantaCanvas.tsx';

interface ContactCtaProps {
  onOpenInquiry: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onOpenInquiry }) => {
  return (
    <section 
      id="conversation" 
      className="py-28 px-6 sm:px-10 lg:px-16 bg-white relative overflow-hidden flex items-center justify-center min-h-[65vh] border-t border-amber-900/10"
    >
      {/* Interactive Three.js Neural Plexus Canvas Background */}
      <ThreeVantaCanvas initialMode="neural-plexus" showControls={false} />

      {/* High-Luminescence Pulsing Solar Ring */}
      <div className="absolute w-[680px] h-[680px] bg-gradient-to-tr from-amber-400/15 via-[#FF3B30]/10 to-transparent blur-[160px] pointer-events-none rounded-full -z-10 animate-pulse-gold"></div>
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-emerald-400/10 blur-[150px] pointer-events-none rounded-full -z-10"></div>

      <div className="max-w-[1000px] mx-auto text-center space-y-8 relative z-10 pointer-events-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-50/90 backdrop-blur-md border border-amber-900/15 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#FF3B30] shadow-[0_0_8px_#FF3B30] animate-ping"></span>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-stone-900 font-bold">
            Initiate Xceed Engagement
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-stone-900 uppercase leading-none">
          Ready to shape <br />
          <span className="italic text-gold-sheen-light drop-shadow-sm">what comes next?</span>
        </h2>

        <p className="font-body text-base md:text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
          Let's turn your systemic challenges into durable competitive moats and build the next stage of compound growth together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenInquiry}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#FF3B30] via-amber-600 to-amber-700 text-white font-mono text-xs uppercase tracking-[0.2em] font-bold shadow-[0_4px_30px_rgba(255,59,48,0.4)] hover:shadow-[0_8px_45px_rgba(255,59,48,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          <a
            href="#solutions"
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white/90 backdrop-blur-md border border-amber-900/15 text-stone-800 font-mono text-xs uppercase tracking-[0.2em] font-medium hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all duration-300 cursor-pointer shadow-sm"
          >
            <span>Explore Our Solutions</span>
            <Compass className="w-4 h-4 text-[#FF3B30] group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-stone-500 font-mono text-xs uppercase tracking-[0.25em]">
          <span>◆ Zurich</span>
          <span>◆ London</span>
          <span>◆ New York</span>
          <span>◆ Singapore</span>
          <span>◆ Tokyo</span>
        </div>
      </div>
    </section>
  );
};
