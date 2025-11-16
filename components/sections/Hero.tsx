'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-[#6C47FF]/30 via-[#6C47FF]/10 to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#6C47FF]/20 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            The Marketplace for
            <br />
            <span className="bg-gradient-to-r from-[#6C47FF] to-[#9D7FFF] bg-clip-text text-transparent">
              AI Workflows
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-[#C8C8C8] max-w-3xl mx-auto font-light">
            Create, sell, and scale your automations — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="group bg-[#6C47FF] hover:bg-[#5835DD] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2">
              Join the Waitlist
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Become an Early Creator
            </button>
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/20 via-transparent to-[#6C47FF]/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#6C47FF] to-[#9D7FFF] blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
