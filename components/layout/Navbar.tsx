'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useModal } from '@/components/ModalManager';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'For Creators', href: '#creators' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-32">
          <div className="flex items-center gap-3">
            <Image
              src="/ChatGPT Image Nov 16, 2025, 03_01_55 AM copy.png"
              alt="Taskora Logo"
              width={80}
              height={80}
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <span className="text-2xl md:text-3xl font-bold tracking-tight">Taskora</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#C8C8C8] hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => openModal('waitlist')}
              className="bg-[#6C47FF] hover:bg-[#5835DD] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Join Waitlist
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#C8C8C8] hover:text-white transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('waitlist');
              }}
              className="w-full bg-[#6C47FF] hover:bg-[#5835DD] text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
