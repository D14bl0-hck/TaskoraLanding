'use client';

import { useState } from 'react';
import { X, ArrowRight, Zap } from 'lucide-react';

interface EarlyCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyCreatorModal({ isOpen, onClose }: EarlyCreatorModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/early-creators', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to the early creator program! Check your email for next steps.');
        setEmail('');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setMessage('');
        }, 2000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to join program. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl bg-gradient-to-br from-[#6C47FF]/20 to-[#6C47FF]/10 border border-[#6C47FF]/40 shadow-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#6C47FF] flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold">Become an Early Creator</h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#C8C8C8] hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-3">
            <p className="text-[#C8C8C8]">
              Join our exclusive early creator program and get:
            </p>
            <ul className="space-y-2 text-sm text-[#C8C8C8]">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6C47FF]" />
                0% platform fees for 60 days
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6C47FF]" />
                Direct support from our team
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6C47FF]" />
                Featured on launch day
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6C47FF]" />
                Exclusive beta features
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading' || status === 'success'}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6C47FF] focus:outline-none transition-colors text-white placeholder:text-[#C8C8C8] disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full group bg-[#6C47FF] hover:bg-[#5835DD] text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Signing Up...' : 'Join Program'}
              {status !== 'loading' && (
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>

            {status === 'success' && (
              <p className="text-center text-green-400 text-sm font-medium">{message}</p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 text-sm font-medium">{message}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
