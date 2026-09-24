import React from 'react';
import { CASE_STUDIES } from '../data/nexusData.ts';
import { ArrowRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenInquiry: (caseTitle: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-t border-amber-900/10 relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Quantified Outperformance
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight mt-2">
              Impact that moves <span className="italic text-gold-sheen-light">businesses forward.</span>
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-stone-600 font-light max-w-md">
            Verifiable commercial and technological outcomes generated for category leaders.
          </p>
        </div>

        {/* 3 Premium Case Study Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((c) => {
            const isEmerald = c.colorScheme === 'emerald';

            return (
              <div
                key={c.id}
                onClick={() => onOpenInquiry(`Case Study: ${c.title}`)}
                className="luxury-card-light p-8 rounded-2xl flex flex-col justify-between group cursor-pointer hover:border-amber-600 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[11px] uppercase font-bold tracking-widest ${
                      isEmerald ? 'text-emerald-800' : 'text-amber-800'
                    }`}>
                      {c.sector}
                    </span>
                    <span className="font-mono text-[10px] text-stone-400">
                      {c.territory}
                    </span>
                  </div>

                  <h3 className={`font-display text-2xl text-stone-900 font-normal leading-snug transition-colors ${
                    isEmerald ? 'group-hover:text-emerald-800' : 'group-hover:text-amber-800'
                  }`}>
                    {c.title}
                  </h3>

                  <div className="space-y-2 text-stone-600 font-body text-sm font-light">
                    <p><strong className="text-stone-800 font-medium">Challenge:</strong> {c.challenge}</p>
                    <p><strong className="text-stone-800 font-medium">Approach:</strong> {c.approach}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-amber-900/10 flex items-center justify-between">
                  <div>
                    <span className={`font-tech text-3xl font-bold ${
                      isEmerald ? 'text-emerald-sheen-light' : 'text-gold-sheen-light'
                    }`}>
                      {c.resultMetric}
                    </span>
                    <p className="font-mono text-[9px] text-stone-500 uppercase tracking-wider mt-0.5">
                      {c.resultLabel}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 group-hover:bg-stone-900 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
