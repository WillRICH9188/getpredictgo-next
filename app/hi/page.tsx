'use client';

import { useState } from 'react';

const t = {
  title: 'दुनिया क्या भविष्यवाणी कर रही है यह समझें।',
  subtitle: 'वैश्विक भविष्यवाणी बाजारों पर तटस्थ डेटा और विश्लेषण।',
  cta: 'Telegram चैनल में जुड़ें',
  latest: 'नवीनतम अंतर्दृष्टि',
  readmore: 'अधिक पढ़ें',
};

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh-cn', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
];

const categories = [
  { name: 'मूल बातें', href: '/hi/basics', icon: '📚' },
  { name: 'कैसे खेलें', href: '/hi/how-to', icon: '🎮' },
  { name: 'खेल', href: '/hi/sports', icon: '⚽' },
  { name: 'राजनीति', href: '/hi/politics', icon: '🏛️' },
  { name: 'वित्त', href: '/hi/finance', icon: '💰' },
  { name: 'ट्रेंड डेटा', href: '/hi/data', icon: '📊' },
  { name: 'अन्य', href: '/hi/other', icon: '🔍' },
];

const sampleArticles = [
  {
    id: 1,
    title: 'बिटकॉइन मूल्य पूर्वानुमान: 2026 में बाजार की अपेक्षाएं',
    description: 'क्रिप्टो भविष्यवाणी बाजार विश्लेषण बिटकॉइन के आने वाले वर्ष के मूल्य प्रक्षेपवक्र को दर्शाता है।',
    category: 'वित्त',
    categoryColor: 'bg-amber-500/20 text-amber-300',
    image: '💰',
  },
  {
    id: 2,
    title: '2026 अमेरिकी चुनाव: प्रारंभिक विजयी मार और बाजार अंतर्दृष्टि',
    description: 'आने वाले राष्ट्रपति चुनाव के लिए भविष्यवाणी बाजार की विजयी का व्यापक विश्लेषण।',
    category: 'राजनीति',
    categoryColor: 'bg-red-500/20 text-red-300',
    image: '🏛️',
  },
  {
    id: 3,
    title: 'क्या अर्जेंटीना फिर से विश्व कप जीत सकता है?',
    description: 'खेल भविष्यवाणी बाजार आने वाली टूर्नामेंट में अर्जेंटीना की संभावनाओं का विश्लेषण करता है।',
    category: 'खेल',
    categoryColor: 'bg-blue-500/20 text-blue-300',
    image: '⚽',
  },
];

export default function Home() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const currentLang = languages.find(l => l.code === 'hi');
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Top Bar */}
          <div className="py-4 flex justify-between items-center">
            <a href="/hi" className="text-2xl md:text-3xl font-bold tracking-tight">
              Predict <span className="text-blue-400">Go</span>
            </a>
            {/* Language Selector - Button + Dropdown Panel */}
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

              {/* Dropdown Panel */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-10">
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href={`/${lang.code}`}
                      className={`block px-4 py-2 text-sm transition-all ${
                        lang.code === 'hi'
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

          {/* Category Navigation */}
          <nav className="border-t border-slate-700/50 py-2 relative flex items-center">
            {/* Left arrow - fixed width area */}
            <div className="md:hidden w-4 flex-shrink-0 flex items-center justify-center text-blue-400 text-2xl pointer-events-none">
              ❮
            </div>

            {/* Scrollable navigation area - flex-1 fills middle space */}
            <div className="flex-1 flex gap-6 md:gap-8 text-sm md:text-base whitespace-nowrap overflow-x-auto pb-2">
              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </a>
              ))}
            </div>

            {/* Right arrow - fixed width area */}
            <div className="md:hidden w-4 flex-shrink-0 flex items-center justify-center text-blue-400 text-2xl pointer-events-none">
              ❯
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-950 border-b border-slate-700/50">
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
            {t.subtitle}
          </p>

          <a
            href="https://t.me/getpredictgo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            <span>{t.cta}</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.latest}</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${article.categoryColor}`}>
                    {article.image} {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  {article.description}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:gap-2 gap-1 transition-all"
                >
                  {t.readmore}
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-950/50 to-slate-950 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-sm md:text-base text-slate-400">भाषाएं</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-sm md:text-base text-slate-400">मुफ्त पहुंच</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">लाइव</div>
              <div className="text-sm md:text-base text-slate-400">बाजार डेटा</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-950/50 px-4 md:px-6 py-8 md:py-12">
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
              <span>गोपनीयता नीति</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
