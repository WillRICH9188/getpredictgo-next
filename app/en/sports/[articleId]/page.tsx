'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getArticle, getArticles } from '@/lib/articles';

const categories = [
  { name: 'Basics', href: '/en/basics', icon: '📚' },
  { name: 'How to Play', href: '/en/how-to', icon: '🎮' },
  { name: 'Sports', href: '/en/sports', icon: '⚽' },
  { name: 'Politics', href: '/en/politics', icon: '🏛️' },
  { name: 'Finance', href: '/en/finance', icon: '💰' },
  { name: 'Trend Data', href: '/en/data', icon: '📊' },
  { name: 'Other', href: '/en/other', icon: '🔍' },
];

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh-cn', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
];

export default async function ArticlePage({ params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params;
  const article = getArticle('en', 'sports', articleId);
  const allArticles = getArticles('en', 'sports');

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <ArticleHeader articleId={articleId} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <Link href="/en/sports" className="text-blue-400 hover:text-blue-300">
              Return to Sports
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedArticles = allArticles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <ArticleHeader articleId={articleId} />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/en" className="hover:text-blue-400">Predict Go</Link>
            <span>/</span>
            <Link href="/en/sports" className="hover:text-blue-400">Sports</Link>
            <span>/</span>
            <span className="text-slate-200">{article.title}</span>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 md:px-6 py-8">
          <header className="mb-12">
            <div className="text-5xl mb-6">{article.icon}</div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">{article.title}</h1>
            <p className="text-xl text-slate-300">{article.description}</p>
          </header>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-12">
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="text-slate-200 leading-relaxed text-lg"
            />
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-700/50">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/zh-cn/basics/${related.id}`}
                    className="group p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-400/50 transition-all hover:bg-slate-800/80"
                  >
                    <div className="text-4xl mb-3">{related.icon}</div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{related.title}</h3>
                    <p className="text-sm text-slate-400">{related.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <Link
              href="/en/sports"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Sports
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

function ArticleHeader({ articleId }: { articleId: string }) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const currentLang = languages.find(l => l.code === 'en');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="py-4 flex justify-between items-center">
          <Link href="/en" className="text-4xl md:text-5xl font-bold tracking-tight">
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
                    href={`/${lang.code}/basics/${articleId}`}
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

        {/* Category Navigation */}
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
                  cat.name === 'Basics'
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
  );
}
