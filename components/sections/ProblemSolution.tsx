import { Sparkles, Shield, TrendingUp } from 'lucide-react';

const cards = [
  {
    icon: Sparkles,
    title: 'Creators deserve better tools',
    description:
      'No more messy downloads. Sell workflows with proper licensing, analytics, and built-in automation.',
  },
  {
    icon: Shield,
    title: 'Buyers need trustworthy AI tools',
    description:
      'A curated marketplace of verified automations, rated and reviewed by the community.',
  },
  {
    icon: TrendingUp,
    title: 'Scale your workflow business',
    description:
      'Earn instantly, track performance, build loyal buyers, and automate everything.',
  },
];

export default function ProblemSolution() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#6C47FF]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/0 to-[#6C47FF]/0 group-hover:from-[#6C47FF]/5 group-hover:to-[#6C47FF]/10 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#6C47FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#6C47FF]/20 transition-colors">
                  <card.icon className="text-[#6C47FF]" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-[#C8C8C8] leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
