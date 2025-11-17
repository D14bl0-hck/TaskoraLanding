'use client';

import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully joined the waitlist! Check your email.');
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
      setMessage('Failed to join waitlist. Please try again.');
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
        <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Join the Waitlist</h2>
            <button
              onClick={onClose}
              className="text-[#C8C8C8] hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-[#C8C8C8]">
            Be among the first to access Taskora. Early adopters get 0% fees for 60 days.
          </p>

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
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
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

          <p className="text-xs text-[#C8C8C8] text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </>
  );
}
