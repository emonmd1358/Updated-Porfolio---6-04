import { motion } from 'motion/react';
import { Facebook, Linkedin, Play, Chrome, TrendingUp, MousePointer2 } from 'lucide-react';

function SocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-24 flex justify-center"
    >
      <div className="bg-black rounded-full px-10 py-5 flex items-center gap-12 shadow-2xl border border-white/5">
        <a href="#" className="text-white hover:text-cyan-400 transition-colors cursor-none">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
        </a>
        <a href="#" className="text-white hover:text-cyan-400 transition-colors cursor-none">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.617a8.171 8.171 0 0 0 5.483 2.045V7.222a4.795 4.795 0 0 1-1.713-.536z"/></svg>
        </a>
        <a href="#" className="text-white hover:text-cyan-400 transition-colors cursor-none">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-1.92 5.4-5.56 5.4-3.16 0-5.72-2.6-5.72-5.8s2.56-5.8 5.72-5.8c1.8 0 3 .76 3.68 1.4l2.6-2.6c-1.68-1.56-3.88-2.52-6.28-2.52-5.52 0-10 4.48-10 10s4.48 10 10 10c5.76 0 9.6-4.04 9.6-9.76 0-.64-.08-1.12-.16-1.6h-9.44z"/></svg>
        </a>
        <a href="#" className="text-white hover:text-cyan-400 transition-colors cursor-none">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3V10.11h-2.8v8.39h2.8v-4.94c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.94h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.39H5.5v8.39h2.77z"/></svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-48 pb-20 overflow-hidden bg-white">
      {/* Cyan Particle Trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: ['-10%', '110%'],
            y: ['20%', '80%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            x: ['110%', '-10%'],
            y: ['40%', '10%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-10 blur-md"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-12 shadow-sm"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Precision Performance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-7xl md:text-[100px] font-bold text-zinc-950 mb-12 tracking-tight leading-[0.9] font-display"
          >
            Scale your brand <br />
            <span className="text-zinc-300">with data.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-zinc-500 mb-16 leading-relaxed max-w-2xl font-medium"
          >
            3+ years of expert advertising strategy and implementation. Managing $5M+ 
            in ad spend across Meta, Google, and TikTok to deliver deterministic growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <a href="#contact" className="group px-10 py-5 glass-button-dark font-bold rounded-[2rem] flex items-center gap-3">
              Get Started <MousePointer2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#case-studies" className="px-10 py-5 glass-button-light font-bold rounded-[2rem]">
              View Results
            </a>
          </motion.div>
        </div>

        <div className="mt-32 w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="flex flex-wrap lg:flex-nowrap gap-6 justify-center"
          >
            {[
              { label: 'Experience', value: '03 Years+' },
              { label: 'Ad Managed', value: '$5M+' },
              { label: 'Avg ROAS', value: '3.8x' },
              { label: 'Retention', value: '92%' }
            ].map((metric, index) => (
              <motion.div 
                key={index}
                variants={{ 
                  hidden: { opacity: 0, x: 100 }, 
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } 
                }}
                className="flex-1 min-w-[280px]"
              >
                <div className="p-8 ios-card border-none shadow-[0_0_50px_rgba(6,182,212,0.05)] group hover:shadow-[0_0_80px_rgba(6,182,212,0.15)] hover:scale-105 transition-all duration-500 will-change-transform">
                  <p className="text-cyan-600 text-[10px] font-bold mb-2 uppercase tracking-[0.2em] opacity-60 uppercase">{metric.label}</p>
                  <h4 className="text-4xl lg:text-5xl font-bold text-zinc-950 font-display whitespace-nowrap">{metric.value}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <SocialBar />
      </div>
    </section>
  );
}
