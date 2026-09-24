import React from 'react';
import { SOLUTIONS, SolutionItem } from '../data/nexusData.ts';
import { Rocket, Brain, Eye, Scale, ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'rocket_launch':
        return <Rocket className="w-6 h-6" />;
      case 'psychology':
        return <Brain className="w-6 h-6" />;
      case 'visibility':
        return <Eye className="w-6 h-6" />;
      case 'balance':
        return <Scale className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  return (
    <section id="solutions" className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-t border-amber-900/10 relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Strategic Portfolios
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight mt-2">
              Solutions built around <span className="italic text-gold-sheen-light">your next move.</span>
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-stone-600 font-light max-w-md">
            Calibrated interventions targeting the four fundamental vectors of enterprise value generation.
          </p>
        </div>

        {/* 4 Expandable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((item) => {
            const isEmerald = item.colorScheme === 'emerald';

            return (
              <div
                key={item.id}
                onClick={() => onSelectSolution(item)}
                className="luxury-card-light group p-8 rounded-2xl flex flex-col justify-between min-h-[420px] cursor-pointer hover:border-amber-600 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-4xl font-light text-stone-300 group-hover:text-amber-800 transition-colors">
                      {item.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isEmerald 
                        ? 'bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:text-white' 
                        : 'bg-amber-500/10 text-amber-800 border border-amber-500/20 group-hover:bg-amber-600 group-hover:text-white'
                    }`}>
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  <h3 className={`font-display text-2xl font-normal text-stone-900 transition-colors ${
                    isEmerald ? 'group-hover:text-emerald-800' : 'group-hover:text-amber-800'
                  }`}>
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-stone-600 font-light mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-amber-900/10 flex items-center justify-between">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                    isEmerald ? 'text-stone-700 group-hover:text-emerald-800' : 'text-stone-700 group-hover:text-amber-800'
                  }`}>
                    Explore Track
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 ${
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
