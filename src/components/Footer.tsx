import React from 'react';
import { Share2, Camera, Youtube, Terminal } from 'lucide-react';
import { XceedLogo } from './XceedLogo.tsx';

interface FooterProps {
  onOpenInquiry: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="w-full bg-[#FAF7F2] border-t border-amber-900/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <XceedLogo size="md" />
            </div>

            <p className="font-body text-xs md:text-sm text-stone-600 max-w-sm leading-relaxed font-light">
              Advising forward-looking enterprises, institutions, and leaders on transformative strategy, breakthrough innovation, and human capability.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="#home"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white border border-amber-900/15 flex items-center justify-center text-stone-600 hover:text-amber-800 hover:border-amber-600 transition-all shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a
                href="#home"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white border border-amber-900/15 flex items-center justify-center text-stone-600 hover:text-amber-800 hover:border-amber-600 transition-all shadow-sm"
              >
                <Camera className="w-3.5 h-3.5" />
              </a>
              <a
                href="#home"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white border border-amber-900/15 flex items-center justify-center text-stone-600 hover:text-amber-800 hover:border-amber-600 transition-all shadow-sm"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="#home"
                aria-label="X"
                className="w-8 h-8 rounded-lg bg-white border border-amber-900/15 flex items-center justify-center text-stone-600 hover:text-amber-800 hover:border-amber-600 transition-all shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-800 font-bold">Solutions</h3>
              <ul className="space-y-2 font-mono text-[11px] text-stone-600">
                <li><a href="#solutions" className="hover:text-amber-800 transition-colors">Executive</a></li>
                <li><a href="#solutions" className="hover:text-amber-800 transition-colors">Venture</a></li>
                <li><a href="#solutions" className="hover:text-amber-800 transition-colors">Sovereign</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-800 font-bold">Services</h3>
              <ul className="space-y-2 font-mono text-[11px] text-stone-600">
                <li><a href="#services" className="hover:text-amber-800 transition-colors">Strategy</a></li>
                <li><a href="#services" className="hover:text-amber-800 transition-colors">Digital AI</a></li>
                <li><a href="#services" className="hover:text-amber-800 transition-colors">Leadership</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-800 font-bold">Industries</h3>
              <ul className="space-y-2 font-mono text-[11px] text-stone-600">
                <li><a href="#industries" className="hover:text-amber-800 transition-colors">Fintech</a></li>
                <li><a href="#industries" className="hover:text-amber-800 transition-colors">Deep Tech</a></li>
                <li><a href="#industries" className="hover:text-amber-800 transition-colors">BioHealth</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-800 font-bold">About</h3>
              <ul className="space-y-2 font-mono text-[11px] text-stone-600">
                <li><a href="#about" className="hover:text-amber-800 transition-colors">Mission</a></li>
                <li><a href="#about" className="hover:text-amber-800 transition-colors">Partners</a></li>
                <li><a href="#about" className="hover:text-amber-800 transition-colors">Governance</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-800 font-bold">Insights</h3>
              <ul className="space-y-2 font-mono text-[11px] text-stone-600">
                <li><a href="#insights" className="hover:text-amber-800 transition-colors">Briefings</a></li>
                <li><a href="#insights" className="hover:text-amber-800 transition-colors">Dossiers</a></li>
                <li><a href="#insights" className="hover:text-amber-800 transition-colors">Forecasts</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-800 font-bold">Contact</h3>
              <ul className="space-y-2 font-mono text-[11px] text-stone-600">
                <li><button onClick={() => onOpenInquiry('Global Hubs')} className="hover:text-amber-800 transition-colors cursor-pointer text-left">Global Hubs</button></li>
                <li><button onClick={() => onOpenInquiry('General Inquiry')} className="hover:text-amber-800 transition-colors cursor-pointer text-left">Inquiries</button></li>
                <li><button onClick={() => onOpenInquiry('Direct Engagement')} className="hover:text-amber-800 transition-colors cursor-pointer text-left">Engagements</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-amber-900/10 flex flex-col md:flex-row items-center justify-between gap-4 text-stone-500 font-mono text-[10px] uppercase tracking-wider">
          <p>© 2026 XCEED BEYOND Consulting. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onOpenInquiry('Privacy Policy')} className="hover:text-amber-800 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onOpenInquiry('Terms of Engagement')} className="hover:text-amber-800 transition-colors cursor-pointer">
              Terms of Engagement
            </button>
            <button onClick={() => onOpenInquiry('Institutional Disclosure')} className="hover:text-amber-800 transition-colors cursor-pointer">
              Institutional Disclosure
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
