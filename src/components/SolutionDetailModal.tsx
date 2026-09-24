import React from 'react';
import { X, ArrowRight, CheckCircle2, Clock, BarChart3, Layers } from 'lucide-react';
import { SolutionItem } from '../data/nexusData.ts';

interface SolutionDetailModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onOpenInquiry: (trackName: string) => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({
  solution,
  onClose,
  onOpenInquiry
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl luxury-card-light rounded-3xl p-6 md:p-10 shadow-2xl border border-amber-900/20 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-amber-900/5 hover:bg-amber-900/10 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="font-display text-4xl font-light text-amber-700/40">
            {solution.number}
          </span>
          <div className="h-6 w-[1px] bg-amber-900/20"></div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-800 font-bold">
            Strategic Track Blueprint
          </span>
        </div>

        <h3 className="font-display text-3xl md:text-4xl text-stone-900 font-normal uppercase leading-tight mb-4">
          {solution.title}
        </h3>

        <p className="font-body text-base text-stone-600 font-light leading-relaxed mb-6">
          {solution.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-900/15">
            <div className="flex items-center gap-2 text-amber-800 mb-1">
              <Clock className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">Deployment Horizon</span>
            </div>
            <p className="font-tech text-2xl font-bold text-stone-900">{solution.timeline}</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-900/15">
            <div className="flex items-center gap-2 text-emerald-800 mb-1">
              <BarChart3 className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">{solution.metricLabel}</span>
            </div>
            <p className="font-tech text-2xl font-bold text-emerald-700">{solution.metric}</p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <h4 className="font-mono text-xs uppercase tracking-widest text-stone-700 font-bold flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-700" />
            Core Deliverables &amp; Artifacts
          </h4>
          <ul className="space-y-2.5">
            {solution.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-amber-900/10">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-sm font-medium text-stone-900">{item}</p>
                  <p className="font-body text-xs text-stone-500 font-light mt-0.5">
                    Engineered for direct operational integration and boardroom scrutiny.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-stone-500">
            Mandates custom-configured for your enterprise structure.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry(solution.title);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Engage on this Track</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
