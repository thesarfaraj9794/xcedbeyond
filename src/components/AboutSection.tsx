import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-t border-amber-900/10 relative">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative Left Column */}
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            Our Institutional Mission
          </span>

          <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight leading-tight">
            Beyond consulting. We build capability for <span className="italic text-gold-sheen-light">what comes next.</span>
          </h2>

          <p className="font-body text-base md:text-lg text-stone-600 font-light leading-relaxed">
            Traditional advisory firms leave behind binders of strategic hypotheses and depart before execution reality reveals systemic friction.
          </p>

          <p className="font-body text-sm md:text-base text-stone-600 font-light leading-relaxed">
            NEXUS BEYOND operates as an embedded vanguard. We architect strategy in code, stress-test business models against macroeconomic volatility, and transfer high-order operational muscle directly into your leadership ranks.
          </p>

          {/* Luxury Gold Metric Counters */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-amber-900/15 shadow-sm">
              <span className="font-tech text-3xl md:text-4xl text-gold-sheen-light font-bold">20+</span>
              <p className="font-mono text-[9px] text-stone-500 uppercase tracking-wider mt-1">Countries Reached</p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-amber-900/15 shadow-sm">
              <span className="font-tech text-3xl md:text-4xl text-emerald-sheen-light font-bold">200+</span>
              <p className="font-mono text-[9px] text-stone-500 uppercase tracking-wider mt-1">Engagements</p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-amber-900/15 shadow-sm">
              <span className="font-tech text-3xl md:text-4xl text-gold-sheen-light font-bold">100+</span>
              <p className="font-mono text-[9px] text-stone-500 uppercase tracking-wider mt-1">Partner Years</p>
            </div>
          </div>
        </div>

        {/* Boardroom Imagery Right Column */}
        <div className="lg:col-span-6 relative mt-6 lg:mt-0">
          <div className="relative rounded-3xl overflow-hidden border border-amber-600/30 shadow-2xl group">
            <img 
              src="https://lh3.googleusercontent.com/aida/AEtjO1X91ddGGEASpvxOABX5RvX25xKky7RZf9Jqg8c5PLazrxTtK1I27szd1J0it5Hvt1aBGseahS0MSTOcofwWvoZoV7MLZZsBS_7aXk-AeyXuTmbj8D-QJhodOxMvjWyQ0T7yHQq3xJZqq4ur4m3pvcYlKzi2i8P-SADJpHx3QcR18zzU_MyIZGjyd16Vgn49L7HoactA7Ice88F3FJjf03GUWLCn_mKtuessx97dgeKowdCAg00YXjC3Yg"
              alt="High-end strategic boardroom overlooking city skyline"
              referrerPolicy="no-referrer"
              className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 border border-amber-900/20 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <p className="font-mono text-[10px] text-amber-800 uppercase font-bold tracking-[0.2em]">
                  Global Governance Council
                </p>
              </div>
              <p className="font-body text-xs md:text-sm text-stone-800 italic font-light">
                "We measure our success not by advice delivered, but by the autonomous growth velocity retained after our transition."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
