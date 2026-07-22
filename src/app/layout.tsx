import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axorks | Engineering the future. Solving today.',
  description:
    'Founder-led software house specializing in full-stack, AI-native web platforms, custom enterprise applications, and government-grade public sector systems.',
  openGraph: {
    title: 'Axorks | Engineering the future. Solving today.',
    description:
      'A software studio that ships — including two government-grade systems already in active production.',
    url: 'https://axorks.vercel.app',
    siteName: 'Axorks',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="flex min-h-screen flex-col bg-obsidian text-paper antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
