'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getArticle, getArticles } from '@/lib/articles';

export default async function ArticlePage({ params }: { params: Promise<{ articleId: string }> }) {
  // 👈 加上 async 和 await
  const { articleId } = await params;
  
  const article = getArticle('zh-cn', 'basics', articleId);
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
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 w-full">
        <h1 className="text-4xl md:text-5xl font-black mb-4">{article.title}</h1>
        <p className="text-lg text-slate-300 mb-8">{article.description}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} className="text-slate-200 leading-relaxed space-y-4" />
      </div>
    </div>
  );
}
