import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface MethodologySectionProps {
  onOpenInquiry: (stageName: string) => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenInquiry }) => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    {
      num: '01',
      name: 'Discover',
      color: 'gold',
      desc: 'Synthesizing unaddressed market signals, hidden organizational drag, and proprietary asymmetric data assets.',
      deliverable: 'Diagnostic Dossier',
      duration: 'Weeks 1–3'
    },
    {
      num: '02',
      name: 'Define',
      color: 'emerald',
      desc: 'Blueprinting the structural operating architecture, ROI horizons, capital allocation, and compliance barriers.',
      deliverable: 'Strategic Roadmap',
      duration: 'Weeks 4–6'
    },
    {
      num: '03',
      name: 'Design',
      color: 'gold',
      desc: 'Rapid digital prototyping, agent logic modeling, and frontline capability testbeds in production sandboxes.',
      deliverable: 'Tested Prototypes',
      duration: 'Weeks 7–10'
    },
    {
      num: '04',
      name: 'Deliver',
      color: 'emerald',
      desc: 'Seamless enterprise rollout, mission-critical integration, and organizational alignment across all business units.',
      deliverable: 'Enterprise Rollout',
      duration: 'Weeks 11–14'
    },
    {
      num: '05',
      name: 'Scale',
      color: 'gold',
      desc: 'Institutionalizing the continuous growth engine with metric governance and permanent internal talent readiness.',
      deliverable: 'Sustained Flywheel',
      duration: 'Weeks 15+'
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF7F2] relative">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            Structured Rigor
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight mt-2">
            Our Engagement Lifecycle.
          </h2>
          <p className="font-body text-base md:text-lg text-stone-600 font-light mt-3 leading-relaxed">
            A disciplined 5-stage transformation sequence built to neutralize risk while accelerating compounding returns.
          </p>
        </div>

        {/* Linear Methodology Sequence Track with Glowing Golden Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">
          {stages.map((stage, idx) => {
            const isEmerald = stage.color === 'emerald';
            const isSelected = activeStage === idx;

            return (
              <div
                key={stage.num}
                onClick={() => {
                  setActiveStage(isSelected ? null : idx);
                  onOpenInquiry(`Stage ${stage.num}: ${stage.name}`);
                }}
                className={`luxury-card-light p-6 rounded-2xl flex flex-col justify-between space-y-4 relative group cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-amber-600 ring-2 ring-amber-600/30 bg-white' : 'hover:border-amber-600'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs uppercase tracking-[0.2em] font-bold ${
                      isEmerald ? 'text-emerald-800' : 'text-amber-800'
                    }`}>
                      Stage {stage.num}
                    </span>
                    <span className="font-mono text-[9px] text-stone-400">{stage.duration}</span>
                  </div>

                  <h3 className={`font-display text-xl text-stone-900 font-normal transition-colors ${
                    isEmerald ? 'group-hover:text-emerald-800' : 'group-hover:text-amber-800'
                  }`}>
                    {stage.name}
                  </h3>

                  <p className="font-body text-xs text-stone-600 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between">
                  <span className={`font-mono text-[10px] uppercase tracking-widest font-bold ${
                    isEmerald ? 'text-emerald-800' : 'text-amber-800'
                  }`}>
                    {stage.deliverable}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isEmerald ? 'text-emerald-700' : 'text-amber-700'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
