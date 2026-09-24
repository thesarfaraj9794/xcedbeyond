import React, { useState } from 'react';
import { INSIGHTS, InsightArticle } from '../data/nexusData.ts';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Innovation', 'Leadership', 'Transformation', 'AI & Automation', 'Strategy'];

  const filteredArticles = activeCategory === 'All'
    ? INSIGHTS
    : INSIGHTS.filter(a => a.category === activeCategory);

  return (
    <section id="insights" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#FAF7F2] relative">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-amber-800 uppercase tracking-[0.22em] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Strategic Intelligence
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-stone-900 font-normal uppercase tracking-tight mt-2">
              Intelligence for what comes next.
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-stone-600 font-light max-w-md">
            Quarterly analytical briefs examining technological discontinuities and enterprise architecture.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white font-bold shadow-md'
                    : 'bg-white border border-amber-900/15 text-stone-600 hover:text-amber-800 hover:border-amber-600 font-medium'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.slice(0, 3).map((art) => {
            return (
              <article
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="luxury-card-light p-8 rounded-2xl flex flex-col justify-between group cursor-pointer hover:border-amber-600 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-stone-400 font-mono text-[10px] uppercase">
                    <span className="text-amber-800 font-bold tracking-wider">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-stone-900 font-normal group-hover:text-amber-800 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="font-body text-xs md:text-sm text-stone-600 font-light leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-amber-900/10 flex items-center justify-between text-amber-800 font-mono text-xs font-semibold uppercase group-hover:translate-x-1.5 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
