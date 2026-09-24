import React from 'react';
import { ShieldCheck, ArrowRight, X, Download, FileText, CheckCircle2 } from 'lucide-react';

interface ExecutiveClearanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ExecutiveClearanceModal: React.FC<ExecutiveClearanceModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry
}) => {
  const [passcode, setPasscode] = React.useState('');
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().length >= 4 || passcode.toLowerCase() === 'nexus' || passcode.toLowerCase() === 'vanguard') {
      setIsUnlocked(true);
    } else {
      // Demo fallback: also unlock so the user enjoys the experience
      setIsUnlocked(true);
    }
  };

  const handleDownloadDossier = (title: string) => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl luxury-card-light rounded-2xl p-6 md:p-8 shadow-2xl border border-amber-900/20 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-amber-900/5 hover:bg-amber-900/10 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-amber-800 font-bold">
                Private Advisory Room
              </span>
            </div>
            <h3 className="font-display text-2xl text-stone-900 font-normal">
              Executive Clearance &amp; Briefings
            </h3>
          </div>
        </div>

        {!isUnlocked ? (
          <div className="space-y-6">
            <p className="font-body text-sm text-stone-600 leading-relaxed font-light">
              Access the confidential institutional repository containing our 2026 Sovereign Macro Stress Test, Conglomerate Operating Blueprint, and White-Space IP matrices.
            </p>

            <form onSubmit={handleAuthorize} className="space-y-4 pt-2">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-700 font-semibold mb-1.5">
                  Enter Executive Access Code (Demo: Type any 4 letters or click below)
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter clearance token..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-amber-900/20 focus:border-amber-600 focus:outline-none font-mono text-sm text-stone-800 tracking-widest placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Verify Clearance</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsUnlocked(true)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-amber-900/20 text-stone-600 hover:text-amber-800 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Quick Guest Access
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between text-[11px] font-mono text-stone-500">
              <span>Encrypted via 256-Bit Sovereign Protocol</span>
              <span>Geneva • Zurich • New York</span>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <div>
                <p className="font-mono text-xs text-emerald-900 font-bold uppercase tracking-wider">
                  Clearance Verified • Level 4 Access Granted
                </p>
                <p className="font-body text-xs text-emerald-800/90 font-light">
                  Active session credential valid for 24 hours across global nodes.
                </p>
              </div>
            </div>

            {downloadSuccess && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-mono text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Executive Dossier package successfully compiled.</span>
              </div>
            )}

            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-stone-600 font-bold">
                Classified Advisory Dossiers
              </h4>

              <div className="p-3.5 rounded-xl bg-white/80 border border-amber-900/15 flex items-center justify-between hover:border-amber-600 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-amber-700" />
                  <div>
                    <p className="font-display text-sm font-medium text-stone-900">
                      2026 Macro Volatility &amp; Sovereign Resilience Briefing
                    </p>
                    <p className="font-mono text-[10px] text-stone-500">PDF • 48 Pages • Institutional Release</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownloadDossier('Macro Volatility')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-amber-900/15 flex items-center justify-between hover:border-amber-600 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <div>
                    <p className="font-display text-sm font-medium text-stone-900">
                      Multi-Agent Enterprise Operating Architecture Benchmark
                    </p>
                    <p className="font-mono text-[10px] text-stone-500">PDF • 34 Pages • Technical Architecture</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownloadDossier('Multi-Agent Architecture')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-amber-900/15 flex items-center justify-between hover:border-amber-600 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-amber-700" />
                  <div>
                    <p className="font-display text-sm font-medium text-stone-900">
                      C-Suite Algorithmic Governance Framework
                    </p>
                    <p className="font-mono text-[10px] text-stone-500">PDF • 26 Pages • Board Playbook</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownloadDossier('Governance Framework')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="font-mono text-xs text-stone-500">
                Ready to review these models with a Senior Partner?
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="px-5 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Request Executive Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
