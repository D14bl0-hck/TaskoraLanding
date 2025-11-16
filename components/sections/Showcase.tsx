import { Video, Mail, Megaphone, Database } from 'lucide-react';

const workflows = [
  {
    icon: Video,
    title: 'Auto-video editor',
    description: 'AI-powered video editing workflow',
    price: '$49',
    rating: '4.9',
  },
  {
    icon: Mail,
    title: 'Lead-gen engine',
    description: 'Automated lead generation system',
    price: '$79',
    rating: '4.8',
  },
  {
    icon: Megaphone,
    title: 'Marketing AI',
    description: 'Complete marketing automation suite',
    price: '$99',
    rating: '5.0',
  },
  {
    icon: Database,
    title: 'Data analyzer',
    description: 'Smart data processing workflow',
    price: '$59',
    rating: '4.7',
  },
];

export default function Showcase() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C47FF]/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Workflows
          </h2>
          <p className="text-[#C8C8C8] text-lg md:text-xl max-w-2xl mx-auto">
            Discover powerful AI automations built by top creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((workflow, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#6C47FF]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/0 to-[#6C47FF]/0 group-hover:from-[#6C47FF]/10 group-hover:to-[#6C47FF]/5 transition-all duration-300"></div>

              <div className="relative p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#6C47FF]/10 flex items-center justify-center group-hover:bg-[#6C47FF]/20 transition-colors">
                  <workflow.icon className="text-[#6C47FF]" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">{workflow.title}</h3>
                  <p className="text-sm text-[#C8C8C8]">{workflow.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xl font-bold text-[#6C47FF]">
                    {workflow.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium">{workflow.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
