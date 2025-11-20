import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import HowItWorks from '@/components/sections/HowItWorks';
import Showcase from '@/components/sections/Showcase';
import CreatorBenefits from '@/components/sections/CreatorBenefits';
import WaitlistCTA from '@/components/sections/WaitlistCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 md:pt-32">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Showcase />
      <CreatorBenefits />
      <WaitlistCTA />
    </main>
  );
}
