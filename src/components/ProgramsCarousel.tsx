import React, { useRef, useState } from 'react';
import { PROGRAMS, ProgramItem } from '../data/nexusData.ts';
import { ChevronLeft, ChevronRight, ArrowRight, Clock, Users, X, CheckCircle2 } from 'lucide-react';

interface ProgramsCarouselProps {
  onOpenInquiry: (programName: string) => void;
}

export const ProgramsCarousel: React.FC<ProgramsCarouselProps> = ({ onOpenInquiry }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF7F2] relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header with Controls */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Flagship Engagements
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight mt-2">
              Signature Programs &amp; Executive Labs.
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white border border-amber-900/15 hover:border-amber-600 hover:text-amber-800 flex items-center justify-center text-stone-700 transition-all cursor-pointer shadow-sm"
              aria-label="Previous Program"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white border border-amber-900/15 hover:border-amber-600 hover:text-amber-800 flex items-center justify-center text-stone-700 transition-all cursor-pointer shadow-sm"
              aria-label="Next Program"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Showcase */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x"
        >
          {PROGRAMS.map((program) => {
            const isEmerald = program.colorScheme === 'emerald';

            return (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="snap-start shrink-0 w-80 md:w-96 luxury-card-light p-8 rounded-2xl flex flex-col justify-between group cursor-pointer hover:border-amber-600 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-3xl font-light ${
                      isEmerald ? 'text-emerald-700' : 'text-amber-700'
                    }`}>
                      {program.number}
                    </span>
                    <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
                      {program.duration}
                    </span>
                  </div>

                  <h3 className={`font-display text-xl text-stone-900 font-normal transition-colors ${
                    isEmerald ? 'group-hover:text-emerald-800' : 'group-hover:text-amber-800'
                  }`}>
                    {program.title}
                  </h3>

                  <p className="font-body text-xs text-amber-800 font-medium">
                    {program.tagline}
                  </p>

                  <p className="font-body text-sm text-stone-600 font-light leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-amber-900/10 flex items-center justify-between">
                  <span className={`font-mono text-xs font-semibold uppercase flex items-center gap-1.5 ${
                    isEmerald ? 'text-emerald-800' : 'text-amber-800'
                  }`}>
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  <span className="font-mono text-[10px] text-stone-400">Classified Cohort</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Syllabus Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative w-full max-w-xl luxury-card-light rounded-3xl p-6 md:p-8 shadow-2xl border border-amber-900/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-amber-900/5 hover:bg-amber-900/10 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="font-display text-3xl font-light text-amber-800">
                {selectedProgram.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-amber-800 font-bold">
                Signature Lab Syllabus
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-stone-900 font-normal mb-2">
              {selectedProgram.title}
            </h3>

            <p className="font-body text-sm text-stone-600 font-light mb-6">
              {selectedProgram.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white border border-amber-900/10">
                <span className="text-stone-500 block text-[10px] uppercase">Format &amp; Duration</span>
                <span className="text-stone-900 font-bold flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  {selectedProgram.duration} Intensive
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-amber-900/10">
                <span className="text-stone-500 block text-[10px] uppercase">Target Cohort</span>
                <span className="text-stone-900 font-bold flex items-center gap-1.5 mt-0.5">
                  <Users className="w-3.5 h-3.5 text-emerald-700" />
                  {selectedProgram.cohort}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                Executive Modules
              </span>
              {selectedProgram.modules.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-900/10 flex items-center gap-2 font-mono text-xs text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Module 0{idx + 1}: {m}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between">
              <span className="font-mono text-xs text-stone-500">Cohort sizes strictly capped.</span>
              <button
                onClick={() => {
                  const title = selectedProgram.title;
                  setSelectedProgram(null);
                  onOpenInquiry(`Program: ${title}`);
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer"
              >
                Enroll Organization
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
