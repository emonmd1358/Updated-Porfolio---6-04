/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Brands } from './components/Brands';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Lenis from 'lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 selection:text-zinc-900">
      <CustomCursor />
      <Navbar />
      <main className="space-y-32 pb-32">
        <Hero />
        <Brands />
        <Skills />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="py-12 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-sm font-medium">
            © {new Date().getFullYear()} MediaBuying.pro. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
