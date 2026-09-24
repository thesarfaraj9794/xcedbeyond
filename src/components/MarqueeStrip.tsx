import React from 'react';
import { MARQUEE_PARTNERS } from '../data/nexusData.ts';

export const MarqueeStrip: React.FC = () => {
  return (
    <section className="py-6 bg-white/70 border-y border-amber-900/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-3 flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium">
          Trusted by leadership teams shaping what comes next
        </p>
        <span className="font-mono text-[10px] text-amber-800 tracking-[0.18em] uppercase flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          Tier-1 Institutional Index
        </span>
      </div>

      {/* Continuous Auto-Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center gap-12 py-2 animate-marquee-infinite whitespace-nowrap min-w-full hover:[animation-play-state:paused]">
          {/* First loop */}
          {MARQUEE_PARTNERS.map((partner, index) => (
            <React.Fragment key={`p1-${index}`}>
              <span className="font-display text-lg sm:text-xl text-stone-400 hover:text-amber-800 transition-colors cursor-pointer uppercase tracking-[0.22em] font-normal">
                {partner}
              </span>
              <span className="text-amber-600/40 font-mono text-sm">◆</span>
            </React.Fragment>
          ))}
          {/* Duplicated loop for seamless infinite rotation */}
          {MARQUEE_PARTNERS.map((partner, index) => (
            <React.Fragment key={`p2-${index}`}>
              <span className="font-display text-lg sm:text-xl text-stone-400 hover:text-amber-800 transition-colors cursor-pointer uppercase tracking-[0.22em] font-normal">
                {partner}
              </span>
              <span className="text-amber-600/40 font-mono text-sm">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
