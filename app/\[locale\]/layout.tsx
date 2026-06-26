import type { Metadata } from 'next';
import { Locale, locales } from '@/i18n.config';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: 'https://getpredictgo.com/en',
      'zh-Hans': 'https://getpredictgo.com/zh-cn',
      hi: 'https://getpredictgo.com/hi',
    },
  },
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
