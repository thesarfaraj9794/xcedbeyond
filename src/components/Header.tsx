import React, { useState, useEffect } from 'react';
import { ArrowRight, Lock, Menu, X } from 'lucide-react';
import { XceedLogo } from './XceedLogo.tsx';

interface HeaderProps {
  onOpenInquiry: () => void;
  onOpenClearance: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenInquiry,
  onOpenClearance,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Insights', href: '#insights', id: 'insights' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF7F2]/90 backdrop-blur-2xl border-b border-amber-900/10 shadow-[0_4px_30px_rgba(180,140,30,0.08)] py-3' 
          : 'bg-[#FAF7F2]/80 backdrop-blur-md border-b border-amber-900/5 py-4'
      }`}
    >
      <div className="h-14 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6">
        {/* Brand Logo & Identity */}
        <a href="#home" className="flex items-center group cursor-pointer">
          <XceedLogo size="md" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-mono uppercase tracking-[0.16em]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-all duration-200 relative py-1 ${
                  isActive 
                    ? 'text-amber-800 font-bold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:shadow-[0_0_8px_#D4AF37]' 
                    : 'text-stone-600 hover:text-amber-800 font-medium'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Cluster */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="group relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300 active:scale-95 shadow-[0_2px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 opacity-95 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_60%)]"></span>
            <span className="relative z-10 font-mono text-xs tracking-[0.18em] uppercase font-bold text-white flex items-center gap-2">
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Executive Clearance Button */}
          <button
            onClick={onOpenClearance}
            title="Executive Clearance & Briefings"
            aria-label="Executive Clearance"
            className="w-9 h-9 rounded-full bg-white border border-amber-900/15 flex items-center justify-center hover:border-amber-600 hover:bg-amber-500/10 text-amber-800 transition-all cursor-pointer shadow-sm"
          >
            <Lock className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white border border-amber-900/15 flex items-center justify-center text-stone-700 hover:text-stone-900 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2]/95 backdrop-blur-2xl border-b border-amber-900/15 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 hover:text-amber-800 py-1.5 transition-colors border-b border-amber-900/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClearance();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-amber-900/20 text-stone-700 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-50"
            >
              <Lock className="w-4 h-4 text-amber-700" />
              <span>Executive Briefing Room</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
