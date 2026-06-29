'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getArticle, getArticles } from '@/lib/articles';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh-cn', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
];

const categories = [
  { name: '基础知识', href: '/zh-cn/basics', icon: '📚' },
  { name: '如何参与', href: '/zh-cn/how-to', icon: '🎮' },
  { name: '体育', href: '/zh-cn/sports', icon: '⚽' },
  { name: '政治', href: '/zh-cn/politics', icon: '🏛️' },
  { name: '金融', href: '/zh-cn/finance', icon: '💰' },
  { name: '趋势数据', href: '/zh-cn/data', icon: '📊' },
  { name: '其他', href: '/zh-cn/other', icon: '🔍' },
];

export default function ArticlePage({ params }: { params: { articleId: string } }) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const article = getArticle('zh-cn', 'basics', params.articleId);
  const currentLang = languages.find(l => l.code === 'zh-cn');
  const allArticles = getArticles('zh-cn', 'basics');

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
          <Link href="/zh-cn/basics" className="text-blue-400 hover:text-blue-300">
            返回分类
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="py-4 flex justify-between items-center">
            <Link href="/zh-cn" className="text-4xl md:text-5xl font-bold tracking-tight">
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
                      href={`/${lang.code}/basics/${params.articleId}`}
                      className={`block px-4 py-2 text-sm transition-all ${
                        lang.code === 'zh-cn'
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
          <nav className="border-t border-slate-700/50 py-2 relative flex items-center gap-2">
            <div className="md:hidden w-4 flex-shrink-0 flex items-center justify-center text-blue-400 text-xl leading-none pointer-events-none transform -translate-y-1">
              ❮
            </div>
            <div className="flex-1 flex gap-6 md:gap-8 text-sm md:text-base whitespace-nowrap overflow-x-auto pb-2 px-2">
              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  className={`transition-colors font-medium ${
                    cat.name === '基础知识'
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
            <div className="md:hidden w-4 flex-shrink-0 flex items-center justify-center text-blue-400 text-xl leading-none pointer-events-none transform -translate-y-1">
              ❯
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 w-full">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/zh-cn" className="hover:text-blue-400 transition-colors">首页</Link>
          <span>/</span>
          <Link href="/zh-cn/basics" className="hover:text-blue-400 transition-colors">基础知识</Link>
          <span>/</span>
          <span className="text-blue-400">{article.title}</span>
        </div>
      </div>

      <section className="py-12 md:py-16 max-w-4xl mx-auto px-4 md:px-6 w-full flex-1">
        <div className="mb-8">
          <div className="text-5xl mb-6">{article.icon}</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {article.title}
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">{article.description}</p>
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} className="text-slate-200 leading-relaxed" />
        </div>

        <div className="border-t border-slate-700/50 pt-8 mt-12">
          <h3 className="text-2xl font-bold mb-6">其他文章</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allArticles.filter(a => a.id !== article.id).slice(0, 3).map((otherArticle) => (
              <Link
                key={otherArticle.id}
                href={`/zh-cn/basics/${otherArticle.id}`}
                className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-lg p-6 hover:border-blue-500/50 transition-all hover:bg-slate-800/50"
              >
                <div className="text-3xl mb-3">{otherArticle.icon}</div>
                <h4 className="font-bold text-blue-300 hover:text-blue-200">{otherArticle.title}</h4>
              </Link>
            ))}
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
              <span>隐私政策</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
