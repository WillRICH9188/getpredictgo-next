import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Predict Go',
  description: 'Understand what the world is predicting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
