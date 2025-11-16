import { Zap, CreditCard, BarChart3, Palette, Package } from 'lucide-react';

const benefits = [
  { icon: Zap, text: 'Zero setup' },
  { icon: CreditCard, text: 'Instant payouts' },
  { icon: BarChart3, text: 'Analytics dashboard' },
  { icon: Palette, text: 'Custom storefront' },
  { icon: Package, text: 'Fully digital delivery' },
];

export default function CreatorBenefits() {
  return (
    <section id="creators" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for Creators
              </h2>
              <p className="text-[#C8C8C8] text-lg leading-relaxed">
                Everything you need to launch, grow, and scale your workflow business — without the complexity.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#6C47FF]/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#6C47FF]/10 flex items-center justify-center group-hover:bg-[#6C47FF]/20 transition-colors">
                    <benefit.icon className="text-[#6C47FF]" size={20} />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/20 via-[#6C47FF]/10 to-transparent blur-3xl"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/30 via-transparent to-[#6C47FF]/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#6C47FF] to-[#9D7FFF] blur-3xl animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl transform rotate-12 animate-float"></div>
                <div className="absolute w-24 h-24 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl transform -rotate-12 animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
