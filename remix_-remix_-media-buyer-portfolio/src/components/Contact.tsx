import { motion } from 'motion/react';
import { Mail, Send, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-zinc-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-zinc-950 mb-8 tracking-tight font-display">Let's dominate <br /><span className="text-zinc-300">your market.</span></h2>
            <p className="text-zinc-500 text-xl font-medium mb-12 max-w-md leading-relaxed">
              Schedule a strategy call to audit your current media buying or plan your next major scale.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] flex items-center justify-center border border-zinc-100 shadow-sm transition-colors group-hover:bg-zinc-950 group-hover:text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Direct Email</p>
                  <p className="text-xl font-bold text-zinc-900 leading-none font-display">hello@mediabuyer.pro</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] flex items-center justify-center border border-zinc-100 shadow-sm transition-colors group-hover:bg-zinc-950 group-hover:text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-xl font-bold text-zinc-900 leading-none font-display">Global / Remote</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <a href="#" className="p-4 rounded-full bg-[#F8F9FA] border border-zinc-100 text-zinc-400 hover:text-zinc-950 hover:shadow-xl transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 rounded-full bg-[#F8F9FA] border border-zinc-100 text-zinc-400 hover:text-zinc-950 hover:shadow-xl transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-container p-10 md:p-12 shadow-2xl shadow-zinc-100"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-50 focus:border-zinc-300 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Business Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-50 focus:border-zinc-300 transition-all font-medium"
                    placeholder="john@brand.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Monthly Ad Spend</label>
                <select className="w-full bg-white border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-50 focus:border-zinc-300 transition-all font-medium appearance-none">
                  <option>$5k - $15k / mo</option>
                  <option>$15k - $50k / mo</option>
                  <option>$50k+ / mo</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Strategy Goals</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-50 focus:border-zinc-300 transition-all font-medium resize-none"
                  placeholder="Tell me about your current acquisition channels..."
                ></textarea>
              </div>

              <button className="w-full glass-button-dark font-bold py-5 rounded-[2rem] flex items-center justify-center gap-3 active:scale-95">
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
