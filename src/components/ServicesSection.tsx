import React, { useState } from 'react';
import { Lightbulb, Terminal, Users, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: (topic?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const capabilities = [
    {
      name: 'Idea Management Systems',
      desc: 'Centralized software pipelines capturing, scoring, and incubating internal workforce venture concepts.'
    },
    {
      name: 'Product & Service Design',
      desc: 'High-touch customer journey mapping and rapid software MVP prototyping with quantified product-market fit.'
    },
    {
      name: 'Process Optimization Engine',
      desc: 'Autonomous multi-agent workflows driving 40%+ reduction in manual middle-office processing latency.'
    },
    {
      name: 'Global Market Expansion',
      desc: 'Jurisdictional structuring, regulatory compliance sandboxing, and overseas cross-border scaling.'
    },
    {
      name: 'Innovation Certification',
      desc: 'Accredited executive academies training leadership teams in systems dynamics and AI governance.'
    },
    {
      name: 'Systemic Change Governance',
      desc: 'Stakeholder realignment frameworks to eliminate cognitive friction during large-scale enterprise overhauls.'
    }
  ];

  return (
    <section id="services" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF7F2] relative">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Title */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            Execution Blueprint
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight mt-2">
            From strategy to execution.
          </h2>
          <p className="font-body text-base md:text-lg text-stone-600 font-light mt-3 leading-relaxed">
            We operate across the entire lifecycle of enterprise renewal, bridging boardroom conviction with code and behavioral reality.
          </p>
        </div>

        {/* 3-Column Pillar Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 01 */}
          <div className="luxury-card-light p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-800 font-bold tracking-[0.2em] uppercase">
                  Pillar 01
                </span>
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700">
                  <Lightbulb className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display text-2xl text-stone-900 font-normal">Innovation Consulting</h3>
              <p className="font-body text-sm text-stone-600 font-light leading-relaxed">
                Institutionalizing organic venture creation. We guide clients in setting up autonomous growth incubators, scouting IP acquisitions, and validating non-linear markets.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-amber-900/10 font-mono text-xs text-stone-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>White-Space Market Discovery</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Corporate Venture Studio Design</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Strategic Scenario Simulation</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenInquiry('Innovation Consulting')}
              className="w-full py-2.5 rounded-xl border border-amber-900/20 text-stone-800 hover:text-amber-800 hover:border-amber-600 font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Consult on Innovation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 02 */}
          <div className="luxury-card-light p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-emerald-800 font-bold tracking-[0.2em] uppercase">
                  Pillar 02
                </span>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700">
                  <Terminal className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display text-2xl text-stone-900 font-normal">Digital Transformation</h3>
              <p className="font-body text-sm text-stone-600 font-light leading-relaxed">
                Architecting agentic intelligence and modern software infrastructure. Modernizing legacy ERP/core systems into resilient, API-first composable fabrics.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-amber-900/10 font-mono text-xs text-stone-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Enterprise AI &amp; Agent Deployment</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Cloud Infrastructure Modernization</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Digital Operating Fabric (DOF)</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenInquiry('Digital Transformation')}
              className="w-full py-2.5 rounded-xl border border-emerald-900/20 text-stone-800 hover:text-emerald-800 hover:border-emerald-600 font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Consult on Digital</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 03 */}
          <div className="luxury-card-light p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-800 font-bold tracking-[0.2em] uppercase">
                  Pillar 03
                </span>
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display text-2xl text-stone-900 font-normal">Leadership &amp; Capability</h3>
              <p className="font-body text-sm text-stone-600 font-light leading-relaxed">
                Cultivating executive foresight and frontline dexterity. Transforming operational mindsets to lead through volatility with algorithmic literacy and speed.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-amber-900/10 font-mono text-xs text-stone-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>C-Suite Exponential Governance</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Generative Workflow Acceleration</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Cultural Transformation &amp; Alignment</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenInquiry('Leadership & Capability')}
              className="w-full py-2.5 rounded-xl border border-amber-900/20 text-stone-800 hover:text-amber-800 hover:border-amber-600 font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Consult on Leadership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Service Matrix Capsule Bar */}
        <div className="p-6 rounded-2xl bg-white border border-amber-900/15 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.2em] font-bold shrink-0 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Specialized Capabilities
          </span>

          <div className="flex flex-wrap gap-2.5">
            {capabilities.map((cap) => {
              const isSelected = selectedTag === cap.name;
              return (
                <button
                  key={cap.name}
                  onClick={() => setSelectedTag(isSelected ? null : cap.name)}
                  className={`px-4 py-1.5 rounded-full font-mono text-[11px] transition-all cursor-pointer whitespace-nowrap ${
                    isSelected 
                      ? 'bg-amber-600 text-white font-bold shadow-md' 
                      : 'bg-stone-50 border border-amber-900/15 text-stone-700 hover:border-amber-600 hover:text-amber-800'
                  }`}
                >
                  {cap.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Capability Details Box */}
        {selectedTag && (
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-900/15 text-stone-800 text-sm font-body animate-fadeIn flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-amber-900 uppercase tracking-wider block mb-1">
                Capability Scope: {selectedTag}
              </span>
              <p className="font-light text-stone-700">
                {capabilities.find(c => c.name === selectedTag)?.desc}
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry(selectedTag)}
              className="px-4 py-2 rounded-full bg-stone-900 text-white font-mono text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shrink-0"
            >
              Request Specification
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
