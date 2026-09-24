import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Orbit } from 'lucide-react';
import { ThreeVantaCanvas } from './ThreeVantaCanvas.tsx';
import { ThreeInfinityCore } from './ThreeInfinityCore.tsx';
import { XceedLogoIcon } from './XceedLogo.tsx';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreTrack: (trackName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreTrack }) => {
  const [activeOrbitNode, setActiveOrbitNode] = useState<string | null>(null);

  const orbitNodes = [
    {
      id: 'strategy',
      index: '01',
      title: 'Strategy',
      subtitle: 'Macro Trajectory',
      color: 'gold',
      desc: 'Sovereign economic risk modeling, board-level capital allocation, and white-space market entry.',
    },
    {
      id: 'innovation',
      index: '02',
      title: 'Innovation',
      subtitle: 'White-Space IP',
      color: 'coral',
      desc: 'Rapid venture incubation, corporate spinoff studios, and unassailable synthetic IP creation.',
    },
    {
      id: 'modernize',
      index: '03',
      title: 'Modernize',
      subtitle: 'AI & Systems',
      color: 'gold',
      desc: 'Agentic orchestrations, decoupled microservice backbones, and enterprise core modernization.',
    },
    {
      id: 'growth',
      index: '04',
      title: 'Growth',
      subtitle: 'Value Realization',
      color: 'emerald',
      desc: 'Post-transformation margin expansion, scalable operational flywheels, and market leadership.',
    }
  ];

  return (
    <section 
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center px-6 sm:px-10 lg:px-16 py-20 overflow-hidden bg-grid-gold-light"
    >
      {/* Real Interactive Three.js Vanta Canvas (Waves, Neural Net, Kinetic Knot) */}
      <ThreeVantaCanvas initialMode="vanta-waves" showControls={true} />

      {/* Ambient Radial Color Washes */}
      <div className="absolute -top-32 left-1/3 w-[650px] h-[650px] bg-gradient-to-b from-amber-400/15 via-red-400/10 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full animate-pulse-gold"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FF3B30]/10 blur-[140px] pointer-events-none -z-10 rounded-full"></div>

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pt-4 pointer-events-none">
        {/* Left Column: Editorial Grandeur Typography & CTAs (Re-enable pointer-events) */}
        <div className="lg:col-span-7 flex flex-col space-y-6 pointer-events-auto">
          {/* Strategic Directive Pill with Xceed Logo */}
          <div className="inline-flex items-center gap-2.5 self-start px-4 py-1.5 rounded-full bg-white/95 border border-amber-900/15 shadow-sm backdrop-blur-xl">
            <XceedLogoIcon className="w-5 h-4" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-stone-900 font-bold">
              Xceed Beyond • Enterprise Vanguard
            </span>
          </div>

          {/* Master Title */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[74px] tracking-tight text-stone-900 font-normal uppercase leading-[1.06]">
            We shape what <br className="hidden sm:inline" />
            <span className="italic font-light text-gold-sheen-light drop-shadow-sm">your business</span> <br className="hidden sm:inline" />
            needs next.
          </h1>

          {/* Editorial Subtitle */}
          <p className="font-body text-lg md:text-xl text-stone-600 max-w-2xl font-light leading-relaxed">
            Strategy, breakthrough innovation, and digital transformation designed to convert systemic complexity into permanent, asymmetric market dominance.
          </p>

          {/* Dual Action Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF3B30] via-amber-600 to-amber-700 text-white font-mono text-xs uppercase tracking-[0.18em] font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(255,59,48,0.35)] hover:shadow-[0_8px_35px_rgba(255,59,48,0.5)] hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <a
              href="#solutions"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/90 border border-amber-900/15 backdrop-blur-xl text-stone-800 font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>Explore Solutions</span>
              <Compass className="w-4 h-4 text-[#FF3B30] group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>

          {/* Floating Metric Indicators Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4 max-w-xl">
            <div className="p-4 rounded-2xl bg-white/90 border border-amber-900/12 backdrop-blur-md flex flex-col group hover:border-[#FF3B30]/40 hover:shadow-md transition-all">
              <span className="font-tech text-3xl md:text-4xl text-gold-sheen-light font-bold">20+</span>
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-[0.18em] mt-1.5">
                Territories Active
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 border border-amber-900/12 backdrop-blur-md flex flex-col group hover:border-[#FF3B30]/40 hover:shadow-md transition-all">
              <span className="font-tech text-3xl md:text-4xl text-[#FF3B30] font-bold">200+</span>
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-[0.18em] mt-1.5">
                Deployments Led
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 border border-amber-900/12 backdrop-blur-md flex flex-col group hover:border-emerald-600/40 hover:shadow-md transition-all">
              <span className="font-tech text-3xl md:text-4xl text-emerald-sheen-light font-bold">100+</span>
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-[0.18em] mt-1.5">
                Years Partner Tenor
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Three.js Infinity Engine with Orbit Vectors */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-6 lg:mt-0 pointer-events-auto">
          <div className="relative w-full aspect-square max-w-[500px] rounded-3xl bg-white/70 border border-amber-900/15 backdrop-blur-2xl p-6 flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(255,59,48,0.12)]">
            
            {/* Interactive Three.js 3D Core with 3D infinity loop and satellites */}
            <ThreeInfinityCore 
              onExploreTrack={onExploreTrack} 
              className="w-full h-full"
            />

            {/* Orbit Satellite Nodes */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-2 pt-2 border-t border-amber-900/10">
              {orbitNodes.map((node) => {
                const isSelected = activeOrbitNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      setActiveOrbitNode(isSelected ? null : node.id);
                      onExploreTrack(node.title);
                    }}
                    className={`p-2.5 rounded-xl bg-white/90 border ${
                      node.color === 'coral' 
                        ? 'border-[#FF3B30]/30 hover:border-[#FF3B30]' 
                        : node.color === 'emerald'
                        ? 'border-emerald-600/30 hover:border-emerald-600'
                        : 'border-amber-600/30 hover:border-amber-600'
                    } backdrop-blur-xl shadow-sm flex items-center justify-between transition-all duration-300 hover:scale-[1.02] cursor-pointer text-left ${
                      isSelected ? 'ring-2 ring-[#FF3B30] shadow-md bg-stone-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className={`w-2 h-2 rounded-full ${
                          node.color === 'coral'
                            ? 'bg-[#FF3B30] shadow-[0_0_8px_#FF3B30]'
                            : node.color === 'emerald' 
                            ? 'bg-emerald-600 shadow-[0_0_8px_#059669]' 
                            : 'bg-amber-600 shadow-[0_0_8px_#D4AF37]'
                        }`}
                      />
                      <div>
                        <p className="font-mono text-[10px] text-stone-900 font-bold uppercase leading-none">
                          {node.index} / {node.title}
                        </p>
                        <p className="font-mono text-[8px] text-stone-500 tracking-wider mt-0.5">
                          {node.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Node Dossier Popup if clicked */}
            {activeOrbitNode && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 p-4 rounded-2xl bg-white border border-amber-900/20 shadow-2xl z-40 text-left animate-fadeIn">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] text-[#FF3B30] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
                    Xceed Strategic Dossier
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveOrbitNode(null);
                    }}
                    className="text-stone-400 hover:text-stone-700 text-xs font-mono"
                  >
                    ✕
                  </button>
                </div>
                <p className="font-body text-xs text-stone-700 font-light leading-relaxed">
                  {orbitNodes.find(n => n.id === activeOrbitNode)?.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
