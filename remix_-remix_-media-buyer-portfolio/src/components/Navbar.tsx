import { useState, useEffect } from 'react';
import { BarChart2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-zinc-100' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <BarChart2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-zinc-900 tracking-tight font-display">MediaBuying<span className="text-zinc-400 font-medium">.pro</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#skills" className="text-sm font-semibold text-zinc-500 hover:text-zinc-950 transition-colors">Expertise</a>
          <a href="#case-studies" className="text-sm font-semibold text-zinc-500 hover:text-zinc-950 transition-colors">Results</a>
          <a href="#testimonials" className="text-sm font-semibold text-zinc-500 hover:text-zinc-950 transition-colors">Testimonials</a>
          <a href="#contact" className="px-6 py-3 glass-button-dark text-sm font-bold rounded-2xl">
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
