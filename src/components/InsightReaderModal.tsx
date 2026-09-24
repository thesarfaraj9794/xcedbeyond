import React from 'react';
import { X, Calendar, User, Clock, ArrowRight, Share2, BookOpen } from 'lucide-react';
import { InsightArticle } from '../data/nexusData.ts';

interface InsightReaderModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const InsightReaderModal: React.FC<InsightReaderModalProps> = ({
  article,
  onClose,
  onOpenInquiry
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl luxury-card-light rounded-3xl p-6 md:p-12 shadow-2xl border border-amber-900/20 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-amber-900/5 hover:bg-amber-900/10 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-wrap items-center gap-3 text-stone-500 font-mono text-xs mb-4">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 font-bold uppercase tracking-wider">
            {article.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl text-stone-900 font-normal leading-snug tracking-tight mb-4">
          {article.title}
        </h2>

        <div className="flex items-center justify-between pb-6 mb-6 border-b border-amber-900/10">
          <div className="flex items-center gap-2 text-stone-700 font-mono text-xs">
            <User className="w-4 h-4 text-amber-700" />
            <span>Author: <strong className="text-stone-900 font-semibold">{article.author}</strong></span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-amber-800 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Citation Copied' : 'Share Brief'}</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-900/10 mb-6 italic font-body text-stone-700 text-sm leading-relaxed">
          "{article.excerpt}"
        </div>

        <div className="prose prose-stone max-w-none font-body text-base text-stone-700 font-light leading-relaxed space-y-4">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-stone-500 font-mono text-xs">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Published by Xceed Beyond Research Institute</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Consult with Authors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
