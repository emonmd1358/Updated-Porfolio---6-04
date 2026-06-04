import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';

const cases = [
  {
    title: "Eco-Friendly Tech Brand",
    platform: "Meta & Google",
    roi: "5.2x ROAS",
    spend: "$120k",
    desc: "Implemented a full-funnel strategy focusing on dynamic creative testing and intent-based scaling."
  },
  {
    title: "Direct-to-Consumer Fashion",
    platform: "TikTok & Meta",
    roi: "4.1x ROAS",
    spend: "$85k",
    desc: "Scaled from zero to $10k/day in month 3 using UGC-driven content strategy and manual bidding."
  },
  {
    title: "B2B SaaS Provider",
    platform: "LinkedIn & Search",
    roi: "380% SQL Increase",
    spend: "$45k",
    desc: "Optimized lead forms and conversion tracking to reduce cost per lead by 62%."
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-zinc-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Proof of Work</span>
            <h2 className="text-5xl md:text-7xl font-bold text-zinc-950 mb-8 font-display">Verified results.</h2>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed">
              We focus on low-entropy systems that deliver deterministic growth for premium brands.
            </p>
          </div>
          <div className="bg-white border border-zinc-100 p-8 rounded-[2rem] shadow-sm flex items-center gap-6">
            <TrendingUp className="w-10 h-10 text-zinc-900" />
            <div>
              <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">Scaling Index</p>
              <p className="text-zinc-950 font-bold text-3xl font-display">+412%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-16">
                <span className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-widest rounded-full">
                  {cs.platform}
                </span>
                <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-bold text-zinc-950 mb-6 font-display">{cs.title}</h3>
                <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
                  {cs.desc}
                </p>

                <div className="grid grid-cols-2 gap-6 pt-10 border-t border-zinc-50">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase mb-1">Outcome</p>
                    <p className="text-xl font-bold text-zinc-950">{cs.roi}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase mb-1">Spend</p>
                    <p className="text-xl font-bold text-zinc-950">{cs.spend}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
