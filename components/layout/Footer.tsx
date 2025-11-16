import { Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const links = [
    { name: 'About', href: '#' },
    { name: 'Creators', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight">Taskora</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#C8C8C8] hover:text-white transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
