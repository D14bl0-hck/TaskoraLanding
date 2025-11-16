import { Upload, Store, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Workflow',
    description: 'Convert any project into a sellable product.',
    number: '01',
  },
  {
    icon: Store,
    title: 'Launch Your Storefront',
    description: 'Get a beautiful creator page instantly.',
    number: '02',
  },
  {
    icon: DollarSign,
    title: 'Sell & Earn Automatically',
    description: 'Payments, delivery, and analytics handled for you.',
    number: '03',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How Taskora Works
          </h2>
          <p className="text-[#C8C8C8] text-lg md:text-xl max-w-2xl mx-auto">
            Three simple steps to start earning from your AI workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative text-center"
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/20 to-[#6C47FF]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="text-[#6C47FF]" size={36} />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#6C47FF] flex items-center justify-center text-sm font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[#C8C8C8]">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
