'use client';

import { ArrowRight } from 'lucide-react';
import { useModal } from '@/components/ModalManager';

export default function WaitlistCTA() {
  const { openModal } = useModal();

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

          <button
            onClick={() => openModal('waitlist')}
            className="group bg-[#6C47FF] hover:bg-[#5835DD] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            Join the Waitlist
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <p className="text-sm text-[#C8C8C8]">
            Join thousands of creators building the future of AI automation
          </p>
        </div>
      </div>
    </section>
  );
}
