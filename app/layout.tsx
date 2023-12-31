import { Main } from '@/components/main';
import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gustavo Fonseca | Frontend Engineer',
  description:
    'A frontend developer focused on user experience, accessibility and modern web technologies.',
  icons: 'https://github.com/fscgustavo.png',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-background text-accent-foreground`}
      >
        <Main>{children}</Main>
        <Analytics />
      </body>
    </html>
  );
}
