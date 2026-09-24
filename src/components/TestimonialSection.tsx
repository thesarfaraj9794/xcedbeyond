import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF7F2] relative overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-[1200px] mx-auto p-8 sm:p-14 rounded-3xl bg-white border border-amber-900/15 shadow-xl relative">
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.24em] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            Executive Perspectives
          </span>
          <Quote className="w-10 h-10 text-amber-700/25" />
        </div>

        <blockquote className="font-display text-2xl sm:text-4xl text-stone-900 font-normal leading-snug tracking-tight">
          "NEXUS BEYOND did not merely deliver a strategic deck; they fundamentally rewired how our executive committee envisions <span className="italic text-gold-sheen-light">risk, innovation velocity,</span> and digital value capture across 14 global territories."
        </blockquote>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-amber-900/10 gap-4">
          <div>
            <p className="font-display text-lg text-stone-900 font-medium">Marcus Vance</p>
            <p className="font-mono text-xs text-stone-500 tracking-wider mt-0.5">
              Group Chief Executive Officer • Valex Global Holdings
            </p>
          </div>

          <div className="flex items-center gap-2 text-stone-500 font-mono text-[11px] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Multi-Year Strategic Mandate</span>
          </div>
        </div>
      </div>
    </section>
  );
};
