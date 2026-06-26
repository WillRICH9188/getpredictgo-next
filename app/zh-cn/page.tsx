'use client';

const t = {
  title: '看懂全世界正在預測什麼。',
  subtitle: '中立解讀全球預測市場——勝率、命中率、趨勢，用數據說話。',
  cta: '加入我們的免費電報頻道',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <header className="sticky top-0 border-b border-slate-800 bg-slate-950/95">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/zh-cn" className="text-2xl font-bold">
            Predict <span className="text-blue-500">Go</span>
          </a>
          <a href="/zh-cn" className="text-sm text-slate-400 hover:text-white">中文</a>
        </div>
      </header>

      <main className="flex-1">
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t.title}</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">{t.subtitle}</p>
            <a href="https://t.me/predictgo" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              {t.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>&copy; 2026 Predict Go. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
