import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ApolloWrapper from '@/database/lib/wraper';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'APP',
  description: 'Hello World',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <ApolloWrapper>{children}</ApolloWrapper>
        </main>
      </body>
    </html>
  );
}
