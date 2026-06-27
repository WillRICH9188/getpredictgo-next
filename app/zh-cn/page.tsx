const t = {
  title: '看懂全世界正在預測什麼。',
  subtitle: '中立解讀全球預測市場——勝率、命中率、趨勢，用數據說話。',
  cta: '加入 Telegram 頻道',
};

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh-cn', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <a href="/zh-cn" className="text-2xl md:text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            Predict <span className="text-blue-400">Go</span>
          </a>

          {/* Language Switcher */}
          <div className="flex gap-2">
            {languages.map((lang) => (
              <a
                key={lang.code}
                href={`/${lang.code}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  lang.code === 'zh-cn'
                    ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span className="mr-1">{lang.flag}</span>
                {lang.name}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <section className="w-full px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Accent Line */}
            <div className="flex justify-center mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              {t.subtitle}
            </p>

            {/* CTA Button */}
            <a
              href="https://t.me/PredictGo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              <span>{t.cta}</span>
              <span>→</span>
            </a>

            {/* Subtitle Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">3</div>
                <div className="text-xs md:text-sm text-slate-400 mt-2">語言版本</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">100%</div>
                <div className="text-xs md:text-sm text-slate-400 mt-2">免費使用</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">實時</div>
                <div className="text-xs md:text-sm text-slate-400 mt-2">市場數據</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-500/10 bg-slate-950/50 px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              <p>&copy; 2026 Predict Go. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a href="https://t.me/PredictGo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                Telegram
              </a>
              <span>•</span>
              <span>隱私政策</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
