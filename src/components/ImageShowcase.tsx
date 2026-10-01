import { useState } from 'react';
import { X, ZoomIn, ArrowRight, Check } from 'lucide-react';
import { useInView } from '../hooks/useMotion';

interface ShowcaseItem {
  id: number;
  category: 'Corrugated' | 'Offset' | 'Mailer' | 'Specialty';
  title: string;
  subtitle: string;
  src: string;
  description: string;
  specs: string[];
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    category: 'Corrugated',
    title: 'Heavy-Duty Printed Master Cartons',
    subtitle: '5-Ply Corrugated Box with Handle Cutouts',
    src: '/O1CN01clwYha1unbYHXIdlU_!!6000000006082-2-yinhe.png_.avif',
    description: 'Custom engineered 5-ply corrugated carton with reinforced die-cut carry handles and two-color flexo branding for electronics transport.',
    specs: ['5-Ply Double Wall (BC Flute)', 'Bursting Strength: 18 kg/cm²', 'Water-resistant Flexo Inks', 'Custom Ergonomic Handles'],
  },
  {
    id: 2,
    category: 'Corrugated',
    title: 'Comprehensive Box Lineup',
    subtitle: 'Assorted Corrugated Cartons & Flute Variations',
    src: '/all-type-of-boxes.jpg',
    description: 'Complete range of RSC cartons, telescoping boxes, partitioned containers, and flat-pack shipping solutions manufactured in our Noida plant.',
    specs: ['B, C, E and Double Flute', 'High Stacking Compression (BCT)', 'FSC Certified Recyclable Kraft', '100% Biodegradable'],
  },
  {
    id: 3,
    category: 'Mailer',
    title: 'Precision Die-Cut E-Commerce Mailers',
    subtitle: 'Sturdy Flat-Pack Brown Shipping Boxes',
    src: '/1-25-flat-brown-corrugated-sturdy-shipping-boxes-size-4-l-x-4-w-original-imaggfycxwzfhfpj.webp',
    description: 'Self-locking tuck top mailer boxes engineered for swift e-commerce fulfillment, offering crush-resistant side walls without tape.',
    specs: ['3-Ply E-Flute Rigid Board', 'Zero Adhesive Assembly', 'Pre-scored Fold Lines', 'Smooth Clean Die Edges'],
  },
  {
    id: 4,
    category: 'Specialty',
    title: 'Reinforced Storage & Export Packaging',
    subtitle: 'High Crush-Resistance Corrugated Container',
    src: '/O1CN01JUJFCk1kxYDSAT62W_!!6000000004750-2-yinhe.png_.avif',
    description: 'Industrial grade container with heavy ECT rating designed for high stacking warehousing, export sea freight, and automotive components.',
    specs: ['7-Ply Triple Wall Option', 'ECT 55+ Compression', 'High Humidity Resistance', 'Reinforced Corner Creases'],
  },
  {
    id: 5,
    category: 'Offset',
    title: 'Multi-Color Offset Print Runs',
    subtitle: 'Vibrant Packaging Sleeves & Monocartons',
    src: '/m5.jpg',
    description: 'Large format offset printed boards featuring razor sharp graphics, metallic pantone matching, and protective gloss varnishes.',
    specs: ['Up to 6-Color Inline Printing', 'Spot UV & Drip Effect', 'Micro-embossing Finishes', 'Thermal BOPP Lamination'],
  },
  {
    id: 6,
    category: 'Specialty',
    title: 'High-Volume Production Run',
    subtitle: 'Automated Slitting & Inline Folding',
    src: '/m1.png',
    description: 'Continuous corrugator plant run delivering tens of thousands of uniform cartons daily with automated strapping and palletizing.',
    specs: ['2000+ Daily Capacity', 'Laser-guided Slitting', 'Automated Quality Scanners', 'Rapid Dispatch Logistics'],
  },
];

export default function ImageShowcase() {
  const { ref, isInView } = useInView();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<ShowcaseItem | null>(null);

  const categories = ['All', 'Corrugated', 'Mailer', 'Offset', 'Specialty'];

  const filteredItems = selectedCategory === 'All'
    ? showcaseItems
    : showcaseItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Box className="w-3.5 h-3.5 text-amber-600" />
            <span>Product Gallery</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Manufactured Packaging Portfolio
          </h2>
          <p className="text-slate-600 text-base">
            Inspect our corrugated boxes, e-commerce mailers, and custom printed packaging manufactured in our Noida plant.
          </p>
        </div>

        {/* Filter Buttons (Flat Style) */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-bold text-xs sm:text-sm border transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {cat === 'All' ? 'All Products' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] bg-slate-100 p-4 flex items-center justify-center relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3 bg-white/90 border border-slate-200 text-slate-800 text-[10px] font-bold px-2.5 py-0.5 rounded shadow-xs">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-5 space-y-2 border-t border-slate-100 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold mb-1">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details View */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid sm:grid-cols-2">
                <div className="bg-slate-50 p-6 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-200">
                  <img
                    src={activeModalItem.src}
                    alt={activeModalItem.title}
                    className="max-h-64 w-auto object-contain"
                  />
                </div>

                <div className="p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                      {activeModalItem.category} Packaging
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2 mb-1">
                      {activeModalItem.title}
                    </h3>
                    <p className="text-xs text-amber-700 font-semibold mb-2">
                      {activeModalItem.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {activeModalItem.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Technical Specs:
                      </span>
                      {activeModalItem.specs.map((sp, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex gap-2">
                    <a
                      href="#calculator"
                      onClick={() => setActiveModalItem(null)}
                      className="flex-1 btn-primary text-xs py-2.5"
                    >
                      Configure Size
                    </a>
                    <button
                      onClick={() => setActiveModalItem(null)}
                      className="px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}