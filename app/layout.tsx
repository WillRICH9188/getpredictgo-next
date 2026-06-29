import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Predict Go',
  description: 'Understand what the world is predicting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%20100%20100%27%3E%3Ccircle%20cx=%2750%27%20cy=%2750%27%20r=%2750%27%20fill=%271e3a8a%27/%3E%3Ctext%20x=%2750%27%20y=%2765%27%20font-size=%2760%27%20font-weight=%27900%27%20fill=%27white%27%20text-anchor=%27middle%27%3EPG%3C/text%3E%3C/svg%3E" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
