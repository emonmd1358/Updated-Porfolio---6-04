import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "E-commerce Founder",
    content: "The media buying strategy implemented for our Spring campaign resulted in a 4.5x ROAS. Absolutely game-changing expertise."
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Marketing Director",
    content: "Their understanding of audience segmentation and strategy implementation is top-tier. Highly recommended for scaling."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "SaaS CEO",
    content: "Professional, data-driven, and transparent. We saw a 40% reduction in CPA within the first two months."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-24">
          <div className="md:w-1/3">
            <span className="text-zinc-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Feedback</span>
            <h2 className="text-5xl font-bold text-zinc-950 mb-6 tracking-tight font-display">Client <br />Trust.</h2>
            <p className="text-zinc-500 font-medium leading-relaxed">
              Long-term partnerships built on consistent performance.
            </p>
            
            <div className="flex gap-4 mt-12">
              <button 
                onClick={prev} 
                className="p-4 rounded-full glass-button-light"
              >
                <ChevronLeft className="w-5 h-5 text-zinc-400" />
              </button>
              <button 
                onClick={next} 
                className="p-4 rounded-full glass-button-light"
              >
                <ChevronRight className="w-5 h-5 text-zinc-400" />
              </button>
            </div>
          </div>

          <div className="md:w-2/3 h-[400px] flex items-center relative overflow-hidden section-container p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="w-full"
              >
                <Quote className="w-12 h-12 text-zinc-200 mb-8" />
                <p className="text-2xl md:text-3xl font-medium text-zinc-800 leading-relaxed mb-10">
                  "{testimonials[index].content}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-zinc-950 mb-1 font-display">{testimonials[index].name}</h4>
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{testimonials[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
