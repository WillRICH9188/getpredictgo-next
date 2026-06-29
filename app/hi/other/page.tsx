'use client';

import { useState } from 'react';
import Link from 'next/link';

const t = {
  title: 'अन्य',
  description: 'मिश्रित भविष्यवाणी, मनोरंजन, विज्ञान, प्रौद्योगिकी और अद्वितीय बाजार घटनाओं सहित।',
  subtitle: 'मुख्यधारा से परे',
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

export default function OtherPage() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const currentLang = languages.find(l => l.code === 'hi');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="py-4 flex justify-between items-center">
            <Link href="/hi" className="text-2xl md:text-3xl font-bold tracking-tight">
              Predict <span className="text-blue-400">Go</span>
            </Link>
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
                      href={`/${lang.code}/other`}
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
          {/* Category Navigation with Fade Effect */}
          <nav className="border-t border-slate-700/50 py-2 relative flex items-center gap-2">
            {/* Left arrow - fixed width area */}
            <div className="md:hidden w-4 flex-shrink-0 flex items-center justify-center text-blue-400 text-xl leading-none pointer-events-none transform -translate-y-1">
              ❮
            </div>

            {/* Scrollable navigation area - flex-1 fills middle space */}
            <div className="flex-1 flex gap-6 md:gap-8 text-sm md:text-base whitespace-nowrap overflow-x-auto pb-2 px-2">
              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  className={`transition-colors font-medium ${
                    cat.name === 'अन्य'
                      ? 'text-blue-400'
                      : 'text-slate-300 hover:text-blue-400'
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </a>
              ))}
              <div className="flex-shrink-0 w-8"></div>
            </div>

            {/* Right arrow - fixed width area */}
            <div className="md:hidden w-4 flex-shrink-0 flex items-center justify-center text-blue-400 text-xl leading-none pointer-events-none transform -translate-y-1">
              ❯
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/hi" className="hover:text-blue-400 transition-colors">होम</Link>
          <span>/</span>
          <span className="text-blue-400">अन्य</span>
        </div>
      </div>

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

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 w-full flex-1">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.subtitle}</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-3">मनोरंजन</h3>
            <p className="text-slate-300 leading-relaxed">
              पुरस्कार पूर्वानुमान, बॉक्स ऑफिस पूर्वानुमान, स्ट्रीमिंग हिट और मनोरंजन उद्योग परिणाम।
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-3">विज्ञान व तकनीक</h3>
            <p className="text-slate-300 leading-relaxed">
              वैज्ञानिक सफलताएं, अंतरिक्ष अन्वेषण, कृत्रिम बुद्धिमत्ता और तकनीकी नवाचार।
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-3">वैश्विक घटनाएं</h3>
            <p className="text-slate-300 leading-relaxed">
              प्राकृतिक आपदाएं, पर्यावरणीय प्रवृत्तियां, मानवीय घटनाएं और वैश्विक विकास।
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🎪</div>
            <h3 className="text-xl font-bold mb-3">अनोखे बाजार</h3>
            <p className="text-slate-300 leading-relaxed">
              आला भविष्यवाणी, वायरल घटनाएं, सांस्कृतिक घटनाएं और गैर-मानक बाजार।
            </p>
          </div>
        </div>
      </section>

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
              <span>गोपनीयता नीति</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
