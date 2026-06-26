export const locales = ['en', 'zh-cn', 'hi'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    hero: {
      title: 'Understand what the world is predicting.',
      subtitle: 'Neutral data and analysis on global prediction markets — odds, hit rates, and trends, explained.',
      cta: 'Join our free Telegram channel',
    },
  },
  'zh-cn': {
    hero: {
      title: '看懂全世界正在預測什麼。',
      subtitle: '中立解讀全球預測市場——勝率、命中率、趨勢，用數據說話。',
      cta: '加入我們的免費電報頻道',
    },
  },
  hi: {
    hero: {
      title: 'दुनिया क्या भविष्यवाणी कर रही है यह समझें।',
      subtitle: 'वैश्विक भविष्यवाणी बाजारों पर तटस्थ डेटा और विश्लेषण।',
      cta: 'हमारे मुफ्त टेलीग्राम चैनल में शामिल हों',
    },
  },
};
