'use client';

import { useState } from 'react';
import Link from 'next/link';

const t = {
  title: 'Basics',
  description: 'Understand the fundamentals of prediction markets, betting odds, and how global forecasting works.',
  subtitle: 'Learn the essentials',
  categories: 'All Categories',
};

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh-cn', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
];

const categories = [
  { name: 'Basics', href: '/en/basics', icon: '📚' },
  { name: 'How to Play', href: '/en/how-to', icon: '🎮' },
  { name: 'Sports', href: '/en/sports', icon: '⚽' },
  { name: 'Politics', href: '/en/politics', icon: '🏛️' },
  { name: 'Finance', href: '/en/finance', icon: '💰' },
  { name: 'Trend Data', href: '/en/data', icon: '📊' },
  { name: 'Other', href: '/en/other', icon: '🔍' },
];

export default function BasicsPage() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const currentLang = languages.find(l => l.code === 'en');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Top Bar */}
          <div className="py-4 flex justify-between items-center">
            <Link href="/en" className="text-2xl md:text-3xl font-bold tracking-tight">
              Predict <span className="text-blue-400">Go</span>
            </Link>
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all bg-blue-500/20 border border-blue-400/50 text-blue-300 hover:bg-blue-500/30 flex items-center gap-2"
              >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.name}</span>
                <svg className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-10">
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href={`/${lang.code}/basics`}
                      className={`block px-4 py-2 text-sm transition-all ${
                        lang.code === 'en'
                          ? 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-400'
                          : 'text-slate-300 hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Navigation with Fade Effect */}
          <nav className="border-t border-slate-700/50 py-4 relative">
            <div className="relative overflow-hidden">
              {/* Navigation scroll container with fade effect */}
              <div className="flex gap-6 md:gap-8 text-sm md:text-base whitespace-nowrap overflow-x-auto">
                {categories.map((cat) => (
                  <a
                    key={cat.name}
                    href={cat.href}
                    className={`transition-colors font-medium ${
                      cat.name === 'Basics'
                        ? 'text-blue-400'
                        : 'text-slate-300 hover:text-blue-400'
                    }`}
                  >
                    <span className="mr-2">{cat.icon}</span>
                    {cat.name}
                  </a>
                ))}
              </div>

              {/* Scrollable indicator - always show on all devices */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 text-2xl pointer-events-none animate-pulse">›</div>
            </div>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/en" className="hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-blue-400">Basics</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-950 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 w-full flex-1">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.subtitle}</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>

        {/* Content Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">What are Prediction Markets?</h3>
            <p className="text-slate-300 leading-relaxed">
              Explore how prediction markets work, their history, and why they're valuable tools for understanding future events. Learn the basics of market mechanics and probability.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Understanding Odds</h3>
            <p className="text-slate-300 leading-relaxed">
              Master the different types of odds systems used in prediction markets, including decimal odds, fractional odds, and how they relate to probability.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">How to Get Started</h3>
            <p className="text-slate-300 leading-relaxed">
              Your first steps into prediction market participation. Learn about account setup, market selection, and placing your first prediction.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3">Common Mistakes to Avoid</h3>
            <p className="text-slate-300 leading-relaxed">
              Learn from the experience of others. Understand common pitfalls and misconceptions when starting with prediction markets.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-950/50 px-4 md:px-6 py-8 md:py-12 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              <p>&copy; 2026 Predict Go. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a href="https://t.me/getpredictgo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                Telegram
              </a>
              <span>•</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
