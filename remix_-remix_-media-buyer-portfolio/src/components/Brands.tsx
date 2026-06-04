import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, TrendingUp, Users, Target, DollarSign } from 'lucide-react';

interface AdReport {
  impressions: string;
  reach: string;
  spend: string;
  campaigns: string;
  image: string;
}

const brands: { name: string; logo: string; report?: AdReport; pageLink?: string }[] = [
  { 
    name: 'Confident Cement', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_1.png',
    pageLink: 'https://www.facebook.com/confidencecementdhaka',
    report: {
      impressions: '17.1M+',
      reach: '7.9M+',
      spend: '$2,961.95',
      campaigns: '35',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_20.png'
    }
  },
  { 
    name: 'Productive Mind', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_3.png',
    pageLink: 'https://www.facebook.com/productivemind.com.bd',
    report: {
      impressions: '30.0M+',
      reach: '3.6M+',
      spend: '$12,230.53',
      campaigns: '43',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_21.png'
    }
  },
  { 
    name: 'Zerar', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_6.png',
    pageLink: 'https://www.facebook.com/zerar.official',
    report: {
      impressions: '556,311',
      reach: '205,189',
      spend: '$212.82',
      campaigns: '18',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_22.png'
    }
  },
  { 
    name: 'Coffee Avenue', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_12.png',
    pageLink: 'https://www.facebook.com/CoffeAvenue',
    report: {
      impressions: '408,020',
      reach: '180,350',
      spend: '$246.16',
      campaigns: '10',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_23.png'
    }
  },
  { name: 'Dragon', logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_11.png' },
  { 
    name: 'Premium Books', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_15.png',
    pageLink: 'https://www.facebook.com/thepremiumbooks',
    report: {
      impressions: '26.4M+',
      reach: '3.5M+',
      spend: '$10,564.20',
      campaigns: '68',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_24.png'
    }
  },
  { 
    name: 'Pull It Off', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_7.png',
    pageLink: 'https://www.facebook.com/piobd',
    report: {
      impressions: '179,975',
      reach: '68,150',
      spend: '$103.84',
      campaigns: '7',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_25.png'
    }
  },
  { 
    name: 'Karachi Dastarkhwan', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_9.png',
    pageLink: 'https://www.facebook.com/KaraachiDastarkhwan',
    report: {
      impressions: '216,028',
      reach: '89,127',
      spend: '$147.94',
      campaigns: '17',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_26.png'
    }
  },
  { 
    name: 'Chui Jhal', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_8.png',
    pageLink: 'https://www.facebook.com/chuijhalm3food',
    report: {
      impressions: '236,345,755',
      reach: '21,454,551',
      spend: '$202,250.22',
      campaigns: '213',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_27.png'
    }
  },
  { 
    name: 'Unique Taste Pavilion', 
    logo: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_10.png',
    pageLink: 'https://www.facebook.com/profile.php?id=61565583513377',
    report: {
      impressions: '587,135',
      reach: '97,560',
      spend: '$8,366.94',
      campaigns: '31',
      image: 'https://storage.googleapis.com/frictionless-dev-assets/a46be170-6c85-41bf-bc64-dd6697f11586/image_28.png'
    }
  }
];

export function Brands() {
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-zinc-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">Trusted By</span>
          <h2 className="text-4xl font-bold text-zinc-950 font-display">Brands I've Worked With</h2>
          <p className="mt-4 text-zinc-500 text-sm">Click on any brand to view campaign highights</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
              className="group cursor-pointer"
              onClick={() => setSelectedBrand(brand)}
            >
              <div className="h-48 flex flex-col items-center justify-center p-8 ios-card border-none transition-all duration-500 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] will-change-transform">
                <div className="h-20 w-full flex items-center justify-center mb-4">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter group-hover:drop-shadow-lg transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-zinc-400 group-hover:text-zinc-950 font-medium text-[10px] tracking-wider transition-colors duration-500 text-center uppercase">
                  {brand.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Report Modal */}
      <AnimatePresence>
        {selectedBrand && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBrand(null)}
              className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={selectedBrand.logo} alt={selectedBrand.name} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-zinc-950 font-display">{selectedBrand.name}</h3>
                      {selectedBrand.pageLink && (
                        <a 
                          href={selectedBrand.pageLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] bg-zinc-100 px-2 py-0.5 rounded text-zinc-500 hover:bg-zinc-950 hover:text-white transition-colors"
                        >
                          Visit Page
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500">Performance Report</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedBrand(null)}
                  className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-zinc-400" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                {selectedBrand.report ? (
                  <div className="space-y-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-zinc-50 rounded-2xl">
                        <TrendingUp className="w-5 h-5 text-cyan-500 mb-3" />
                        <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Impressions</p>
                        <p className="text-2xl font-bold text-zinc-950 font-display">{selectedBrand.report.impressions}</p>
                      </div>
                      <div className="p-6 bg-zinc-50 rounded-2xl">
                        <Users className="w-5 h-5 text-purple-500 mb-3" />
                        <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Reach</p>
                        <p className="text-2xl font-bold text-zinc-950 font-display">{selectedBrand.report.reach}</p>
                      </div>
                      <div className="p-6 bg-zinc-50 rounded-2xl">
                        <Target className="w-5 h-5 text-orange-500 mb-3" />
                        <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Campaigns</p>
                        <p className="text-2xl font-bold text-zinc-950 font-display">{selectedBrand.report.campaigns}</p>
                      </div>
                      <div className="p-6 bg-zinc-50 rounded-2xl">
                        <DollarSign className="w-5 h-5 text-green-500 mb-3" />
                        <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Total Spent</p>
                        <p className="text-2xl font-bold text-zinc-950 font-display">{selectedBrand.report.spend}</p>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
                      <p className="p-4 bg-zinc-50 text-[10px] uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-100">Meta Ads Manager Screenshot</p>
                      <img 
                        src={selectedBrand.report.image} 
                        alt="Ads Report Screenshot" 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-zinc-400">
                    <TrendingUp className="w-12 h-12 mb-4 opacity-20" />
                    <p className="text-sm">Detailed report coming soon for {selectedBrand.name}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
