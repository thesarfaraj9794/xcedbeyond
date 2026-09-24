import React from 'react';
import { CheckCircle2, Share2, Award } from 'lucide-react';

interface TeamSectionProps {
  onOpenInquiry: (partnerName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-t border-amber-900/10 relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            Institutional Custodians
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight mt-2">
            Strategic Partners &amp; Fellows.
          </h2>
          <p className="font-body text-base md:text-lg text-stone-600 font-light mt-3 leading-relaxed">
            Decades of board-level governance, deep tech ventures, and sovereign economic council.
          </p>
        </div>

        {/* Partner Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leader 01: David K. Mercer */}
          <div className="luxury-card-light group p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-center shadow-md hover:border-amber-600 transition-all">
            <div className="w-full sm:w-56 h-72 rounded-2xl overflow-hidden shrink-0 relative border border-amber-900/15 shadow-md">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1XvzC1THnOJ3ndMVT4vOXAUnmCcQFtsP8IycfZZ4k8WtpG_CP-joPbqYSmnJ7F6HzWxbJZTwflDyryaWdRo8bp6cPqlJJxNW_YwLPrrq76kzoKHA22SVFYtcgnqiKK2ZC-_dJBoxYi_vRBBDXaPgcWIjDLTW6Y8Ty3cEHQ8UoJv7rw25Tdd7L1EAiBatWzojIFSmcUWvI9N5X5tqPh2EmJC0l2dOtrLPNITP1oLCgpACDXLaW7YRFkpk6o"
                alt="Partner Global Strategy and Governance portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-800 font-mono text-[10px] uppercase tracking-widest font-bold">
                Managing Partner
              </div>

              <h3 className="font-display text-2xl text-stone-900 font-normal">
                David K. Mercer
              </h3>

              <p className="font-mono text-xs text-amber-800 font-medium tracking-wider">
                Global Strategy &amp; Institutional Governance
              </p>

              <p className="font-body text-sm text-stone-600 font-light leading-relaxed">
                Former senior partner advising central banks and sovereign investment committees across OECD markets on non-linear volatility.
              </p>

              <div className="pt-2 flex items-center gap-4 text-stone-500 font-mono text-[10px] uppercase tracking-wider">
                <span className="flex items-center gap-1 text-amber-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                  Board Fellow
                </span>
                <button
                  onClick={() => onOpenInquiry('Partner Consult: David K. Mercer')}
                  className="flex items-center gap-1 text-stone-700 hover:text-stone-900 cursor-pointer font-bold underline"
                >
                  Direct Mandate
                </button>
              </div>
            </div>
          </div>

          {/* Leader 02: Dr. Elena Rostova */}
          <div className="luxury-card-light group p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-center shadow-md hover:border-emerald-600 transition-all">
            <div className="w-full sm:w-56 h-72 rounded-2xl overflow-hidden shrink-0 relative border border-emerald-900/15 shadow-md">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1U466b27ZTVZECnLxeE5wlWvk04HaticFzLMc7C49EFp_EvdE_WeJOizjD-868I5-UN93xqkyQCuvhm3rlDudUESekP1cOKZ71xmKATQRhtU-WYTgZth5DfdiMRGgmDhff5jIL4opy_Qh0l_rJrCjT0DXtAaijuWjUU0fWi66TeSGUAAqd6iMxDcmb60ABZD8R3zZ26YG_aFmxQkWolwT-hKNgPCA3aPKgrfGygjnZVDaUMzHaP4jU-hm4"
                alt="Managing Partner Digital Transformation portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-600/30 text-emerald-800 font-mono text-[10px] uppercase tracking-widest font-bold">
                Managing Partner
              </div>

              <h3 className="font-display text-2xl text-stone-900 font-normal">
                Dr. Elena Rostova
              </h3>

              <p className="font-mono text-xs text-emerald-800 font-medium tracking-wider">
                Digital Transformation &amp; AI Advisory
              </p>

              <p className="font-body text-sm text-stone-600 font-light leading-relaxed">
                Pioneer in computational economics and applied multi-agent simulation for enterprise platforms and global supply networks.
              </p>

              <div className="pt-2 flex items-center gap-4 text-stone-500 font-mono text-[10px] uppercase tracking-wider">
                <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                  <Award className="w-3.5 h-3.5 text-emerald-700" />
                  IEEE Fellow
                </span>
                <button
                  onClick={() => onOpenInquiry('Partner Consult: Dr. Elena Rostova')}
                  className="flex items-center gap-1 text-stone-700 hover:text-stone-900 cursor-pointer font-bold underline"
                >
                  Direct Mandate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
