import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Predict Go',
  description: 'Understand what the world is predicting.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%230ea5e9' width='100' height='100'/%3E%3Ctext x='50' y='70' font-size='70' font-weight='bold' fill='white' text-anchor='middle' font-family='Arial'%3EPG%3C/text%3E%3C/svg%3E" />
      </head>
      <body>{children}</body>
    </html>
  );
}
