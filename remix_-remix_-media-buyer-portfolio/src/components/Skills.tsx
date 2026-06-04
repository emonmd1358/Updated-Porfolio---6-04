import { motion } from 'motion/react';
import { Target, BarChart3, Users, Zap, Search, Globe } from 'lucide-react';

const skills = [
  {
    icon: <Target className="w-6 h-6" />,
    name: "Media Buying",
    desc: "Expertise in auction management, bid strategy, and scaling high-budget accounts across social platforms."
  },
  {
    icon: <Search className="w-6 h-6" />,
    name: "Google Ads",
    desc: "Intent-based search campaigns, shopping ads, and high-converting display networks."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "Meta Ads",
    desc: "Leveraging FB/IG algorithms for awareness through to direct response and catalog sales."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    name: "Strategy Impl.",
    desc: "Full-funnel strategy design to ensure low CPA and sustainable growth patterns."
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: "Audience Segmentation",
    desc: "Deep data analysis to find and target high-intent lookalikes and retargeting pools."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    name: "ROI Optimization",
    desc: "Continuous A/B testing and creative optimization to maximize every dollar spent."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-zinc-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Core Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-950 mb-8 leading-[1.1] font-display">
            Strategic excellence meets <br />
            <span className="text-zinc-300">technical precision.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
             <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-8 group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-4 font-display">{skill.name}</h3>
              <p className="text-zinc-500 leading-relaxed font-medium">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
