import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Building2, Calendar, User, Mail, MessageSquare } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrack?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedTrack
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    territory: 'North America / NY',
    mandateScope: preselectedTrack || 'Enterprise Transformation',
    timeframe: 'Immediate (Next 30 Days)',
    brief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid institutional email';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization Name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl luxury-card-light rounded-3xl p-6 md:p-10 shadow-2xl border border-amber-900/20 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-amber-900/5 hover:bg-amber-900/10 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 font-mono text-[10px] uppercase tracking-widest font-semibold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping"></span>
                Institutional Engagement Protocol
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-stone-900 font-normal uppercase tracking-tight">
                Initiate a Strategic Mandate
              </h2>
              <p className="font-body text-sm text-stone-600 mt-2 font-light">
                Connect with our Global Managing Partners to evaluate architectural constraints, market opportunities, and high-stakes transformation initiatives.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-700 font-medium mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Lord Alistair Finch"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-900/20 focus:border-amber-600 focus:outline-none font-body text-sm text-stone-900 placeholder:text-stone-400"
                    />
                  </div>
                  {errors.fullName && <p className="font-mono text-[10px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-700 font-medium mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@conglomerate.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-900/20 focus:border-amber-600 focus:outline-none font-body text-sm text-stone-900 placeholder:text-stone-400"
                  />
                  {errors.email && <p className="font-mono text-[10px] text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-700 font-medium mb-1">
                    Organization / Entity *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Sovereign Wealth Fund / Conglomerate"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-900/20 focus:border-amber-600 focus:outline-none font-body text-sm text-stone-900 placeholder:text-stone-400"
                  />
                  {errors.organization && <p className="font-mono text-[10px] text-red-600 mt-1">{errors.organization}</p>}
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-700 font-medium mb-1">
                    Executive Title / Role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Group CEO, Managing Director"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-900/20 focus:border-amber-600 focus:outline-none font-body text-sm text-stone-900 placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-700 font-medium mb-1">
                    Primary Mandate Area
                  </label>
                  <select
                    value={formData.mandateScope}
                    onChange={(e) => setFormData({ ...formData, mandateScope: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-900/20 focus:border-amber-600 focus:outline-none font-body text-sm text-stone-900"
                  >
                    <option value="Enterprise Transformation">Enterprise Transformation</option>
                    <option value="Breakthrough Advantage & IP">Breakthrough Advantage &amp; IP</option>
                    <option value="Customer Experience & AI Agents">Customer Experience &amp; AI Agents</option>
                    <option value="Future Readiness & Governance">Future Readiness &amp; Governance</option>
                    <option value="Efficiency & Scale Automation">Efficiency &amp; Scale Automation</option>
                    <option value="Cross-Border Market Expansion">Cross-Border Market Expansion</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-700 font-medium mb-1">
                    Anticipated Horizon
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-900/20 focus:border-amber-600 focus:outline-none font-body text-sm text-stone-900"
                  >
                    <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                    <option value="Q3/Q4 2026 Strategic Horizon">Q3/Q4 2026 Strategic Horizon</option>
                    <option value="Annual Operating Plan 2027">Annual Operating Plan 2027</option>
                    <option value="Exploratory Advisory Dossier">Exploratory Advisory Dossier</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-700 font-medium mb-1">
                  Summary of Systemic Challenge / Mandate Context
                </label>
                <textarea
                  rows={3}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Outline high-level goals, current bottlenecks, or intended territory expansion..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-900/20 focus:border-amber-600 focus:outline-none font-body text-sm text-stone-900 placeholder:text-stone-400 resize-none"
                ></textarea>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-stone-500 font-mono text-[10px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict NDA &amp; Sovereign Discretion Enforced</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg shadow-amber-900/20 hover:shadow-amber-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Mandate Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 mx-auto flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-mono text-xs uppercase tracking-wider font-semibold">
                Mandate Reference: #NXB-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <h3 className="font-display text-3xl text-stone-900 font-normal">
                Engagement Received
              </h3>
              <p className="font-body text-sm text-stone-600 max-w-md mx-auto font-light leading-relaxed">
                Thank you, <strong className="text-stone-800">{formData.fullName}</strong>. Your strategic inquiry regarding <strong className="text-stone-800">{formData.mandateScope}</strong> has been routed to the Senior Governance Council.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-900/15 max-w-md mx-auto text-left space-y-1 text-xs font-mono text-stone-700">
              <p><strong className="text-stone-900">Entity:</strong> {formData.organization}</p>
              <p><strong className="text-stone-900">Dispatched To:</strong> Zurich &amp; New York Managing Chambers</p>
              <p><strong className="text-stone-900">Expected Response:</strong> Within 12 business hours</p>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 font-mono text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              Return to Platform
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
