import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ModalProvider } from '@/components/ModalManager';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Taskora - The Marketplace for AI Workflows',
  description: 'Create, sell, and scale your automations — all in one place.',
  icons: {
    icon: '/ChatGPT Image Nov 16, 2025, 03_01_55 AM copy copy.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
