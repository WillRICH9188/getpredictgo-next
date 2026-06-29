'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getArticle, getArticles } from '@/lib/articles';

export default function ArticlePage({ params }: { params: { articleId: string } }) {
  // 調試：打印參數
  console.log('DEBUG - params:', params);
  console.log('DEBUG - articleId:', params.articleId);
  
  const article = getArticle('zh-cn', 'basics', params.articleId);
  console.log('DEBUG - article:', article);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
          <p className="text-slate-400 mb-4">articleId: {params.articleId}</p>
          <Link href="/zh-cn/basics" className="text-blue-400 hover:text-blue-300">
            返回分类
          </Link>
        </div>
      </div>
    );
  }

  return <div className="text-white p-8"><h1>{article.title}</h1><div dangerouslySetInnerHTML={{ __html: article.content }} /></div>;
}
