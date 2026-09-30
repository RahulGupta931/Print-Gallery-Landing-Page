import { Leaf, Recycle, TreePine, Droplets, ShieldCheck, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useMotion';

export default function Sustainability() {
  const { ref, isInView } = useInView();

  const ecoPillars = [
    {
      icon: Recycle,
      title: '100% Recyclable Kraft',
      metric: '7× Fiber Lifecycle',
      desc: 'Our corrugated cartons can be recycled and re-pulped up to 7 times without degrading structural strength.',
    },
    {
      icon: Droplets,
      title: 'Water-Based Eco Inks',
      metric: '0% Harsh VOCs',
      desc: 'We utilize non-toxic water-soluble pigments for flexographic printing, eliminating volatile solvents.',
    },
    {
      icon: TreePine,
      title: 'FSC Certified Pulp',
      metric: 'Sustainable Forestry',
      desc: 'Paper raw materials are ethically sourced from certified managed plantations supporting reforestation.',
    },
    {
      icon: ShieldCheck,
      title: 'Plastic-Free Design',
      metric: 'Tape-Free Options',
      desc: 'Custom self-locking die-cut mailers eliminate single-use plastic tape and excessive packaging fillers.',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sustainable & Circular Packaging</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Committed to Eco-Friendly Cardboard Solutions
          </h2>
          <p className="text-slate-600 text-base">
            Protecting your goods doesn't have to cost the planet. PRINT GALLERY delivers high-strength cardboard packaging engineered for full recyclability and zero environmental footprint.
          </p>
        </div>

        {/* 4 Eco Pillar Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {ecoPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-emerald-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-bold text-emerald-800 uppercase mb-1">
                    {pillar.metric}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Circular Lifecycle Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Eco CTA Box */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900">Switch to 100% Biodegradable Boxes</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Get an eco-audit on your current packaging dimensions and discover how optimized fluting can cut material weight and shipping costs.
            </p>
          </div>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg shadow-sm text-xs sm:text-sm whitespace-nowrap"
          >
            <span>Configure Eco-Box</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
