import React, { useState } from 'react';
import { CHALLENGE_PHASES } from '../data/nexusData.ts';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface BusinessChallengeProps {
  onOpenInquiry: () => void;
}

export const BusinessChallenge: React.FC<BusinessChallengeProps> = ({ onOpenInquiry }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF7F2] relative">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Editorial Left Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-900/15 text-amber-800 font-mono text-[11px] uppercase tracking-widest font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            Structural Transformation
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight leading-tight">
            Your biggest challenge can become your <span className="italic text-gold-sheen-light">next advantage.</span>
          </h2>

          <p className="font-body text-base md:text-lg text-stone-600 font-light leading-relaxed">
            Modern enterprise deceleration rarely stems from lack of ambition. It stems from structural entropy: fragmented operating models, legacy architectural debt, and cognitive inertia.
          </p>

          <div className="pt-2">
            <div className="p-6 rounded-2xl bg-white/90 border border-amber-900/15 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
              <p className="font-mono text-[10px] uppercase text-amber-800 tracking-[0.22em] mb-2 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Transformation Thesis
              </p>
              <p className="font-body text-sm text-stone-800 italic font-light leading-relaxed">
                "Competitive advantage in post-deterministic markets is not accumulated through defense; it is captured through continuous architectural reconfiguration."
              </p>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="p-4 rounded-xl bg-white/60 border border-amber-900/10 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-stone-600">
              <span className="font-semibold text-amber-800">Transformation Progress</span>
              <span>{Math.round(((activeStep + 1) / CHALLENGE_PHASES.length) * 100)}% Complete</span>
            </div>
            <div className="w-full h-2 rounded-full bg-stone-200 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-600 to-emerald-600 transition-all duration-500 rounded-full"
                style={{ width: `${((activeStep + 1) / CHALLENGE_PHASES.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Gold-Accented Stepper Pathway */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {CHALLENGE_PHASES.map((step, index) => {
            const isSelected = activeStep === index;
            const isEmerald = step.colorScheme === 'emerald';

            return (
              <div
                key={step.phase}
                onClick={() => setActiveStep(index)}
                className={`luxury-card-light p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'border-amber-600 ring-2 ring-amber-600/30 shadow-[0_8px_30px_rgba(180,140,30,0.15)] bg-white' 
                    : 'hover:border-amber-600/50'
                }`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-amber-900/10">
                  <span className={`font-mono text-xs uppercase tracking-[0.2em] font-bold ${
                    isEmerald ? 'text-emerald-700' : 'text-amber-800'
                  }`}>
                    {step.phase} / {step.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-stone-400">{step.timeframe}</span>
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      isEmerald 
                        ? 'bg-emerald-600 shadow-[0_0_10px_#059669]' 
                        : 'bg-amber-600 shadow-[0_0_10px_#D4AF37]'
                    }`}></span>
                  </div>
                </div>

                <h3 className={`font-display text-xl text-stone-900 font-medium mt-3 transition-colors ${
                  isSelected ? 'text-amber-900' : ''
                }`}>
                  {step.title}
                </h3>

                <p className="font-body text-sm text-stone-600 font-light mt-2 leading-relaxed">
                  {step.description}
                </p>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-amber-900/10 flex flex-wrap items-center justify-between gap-3 animate-fadeIn">
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Deliverable: <strong className="text-stone-900 font-semibold">{step.deliverable}</strong></span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenInquiry();
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Inquire About {step.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
