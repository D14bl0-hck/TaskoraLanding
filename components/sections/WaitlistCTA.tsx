'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function WaitlistCTA() {
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
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to join waitlist. Please try again.');
    }
  };

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#6C47FF]/20 via-[#6C47FF]/5 to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Be the First to Access Taskora
          </h2>

          <p className="text-[#C8C8C8] text-lg md:text-xl max-w-2xl mx-auto">
            Launching soon. Early creators get 0% fees for 60 days.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto" id="waitlist-form">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 focus:border-[#6C47FF] focus:outline-none transition-colors text-white placeholder:text-[#C8C8C8] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="group bg-[#6C47FF] hover:bg-[#5835DD] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                {status !== 'loading' && (
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>
            </div>

            {status === 'success' && (
              <p className="mt-4 text-green-400 text-sm font-medium">{message}</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-400 text-sm font-medium">{message}</p>
            )}
          </form>

          <p className="text-sm text-[#C8C8C8]">
            Join thousands of creators building the future of AI automation
          </p>
        </div>
      </div>
    </section>
  );
}
