'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // 1. 檢查 localStorage 中是否有保存的語言偏好
    const savedLang = localStorage.getItem('predictor-lang');
    if (savedLang && ['en', 'zh-cn', 'hi'].includes(savedLang)) {
      router.push(`/${savedLang}`);
      return;
    }

    // 2. 檢測用戶瀏覽器語言
    const browserLang = navigator.language.toLowerCase();

    let targetLang = 'en'; // 默認英文

    // 3. 映射瀏覽器語言到支持的語言
    if (browserLang.includes('zh')) {
      // 中文：簡體 (zh-cn) 或 繁體 (zh-tw)
      targetLang = 'zh-cn';
    } else if (browserLang.includes('hi')) {
      // 印地語
      targetLang = 'hi';
    } else if (browserLang.includes('en')) {
      // 英文
      targetLang = 'en';
    }

    // 4. 保存選擇到 localStorage
    localStorage.setItem('predictor-lang', targetLang);

    // 5. 重定向到對應語言頁面
    router.push(`/${targetLang}`);
  }, [router]);

  // 顯示加載狀態
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Predict Go</h1>
        <p className="text-slate-400">Detecting your language...</p>
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
