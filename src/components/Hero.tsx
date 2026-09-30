import { useState } from 'react';
import { useScrollProgress, useMouseTilt } from '../hooks/useMotion';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Package,
  Phone,
  Factory
} from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScrollProgress();
  const { tilt, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseTilt(10);
  const [activeView, setActiveView] = useState<'real' | 'all' | '3d'>('real');

  // Parallax subtle offset for clean flat look
  const parallaxOffset = Math.min(scrollY * 0.12, 50);

  return (
    <section 
      id="hero"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Light subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Brand Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Industry Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-900">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse" />
              <span>Leading Cardboard Box Manufacturer • Noida, NCR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Leading Provider of High Quality{' '}
              <span className="text-amber-600 underline decoration-amber-300 decoration-4 underline-offset-4">
                Printing & Packaging
              </span>{' '}
              Services
            </h1>

            {/* Exact Company Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              <strong className="text-slate-900 font-bold">PRINT GALLERY Ltd</strong> has set a trusted reputation for delivering innovative and sustainable packaging solutions to clients across diverse industries. Our commitment to excellence, combined with state-of-the-art technology, ensures that we meet and exceed our customers' expectations.
            </p>

            {/* Flat Corporate Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-2.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>3, 5 & 7-Ply Heavy Cartons</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-2.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Die-Cut E-commerce Mailers</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-2.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>100% Recyclable Kraft Paper</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="btn-primary"
              >
                <span>Get an Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#infrastructure"
                className="btn-secondary"
              >
                <Factory className="w-4 h-4 text-slate-700" />
                <span>View Machinery & Lab</span>
              </a>

              <a
                href="tel:+919810466405"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-amber-600 px-3 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Factory Sales</span>
              </a>
            </div>

            {/* Metric Stat Cards (Flat Style) */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-slate-900 tracking-tight">15+</div>
                <div className="text-xs text-slate-500 font-medium">Years in Packaging</div>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-amber-600 tracking-tight">50,000+</div>
                <div className="text-xs text-slate-500 font-medium">Daily Box Capacity</div>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-slate-900 tracking-tight">8+ Tests</div>
                <div className="text-xs text-slate-500 font-medium">In-House QC Lab</div>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-emerald-600 tracking-tight">100%</div>
                <div className="text-xs text-slate-500 font-medium">Eco Recyclable</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between mb-3 bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
              <span className="text-xs font-bold text-slate-700 px-2 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-amber-600" />
                <span>Product Showcase</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveView('real')}
                  className={`text-xs px-3 py-1 rounded-md font-semibold transition-all ${
                    activeView === 'real'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Printed Carton
                </button>
                <button
                  onClick={() => setActiveView('all')}
                  className={`text-xs px-3 py-1 rounded-md font-semibold transition-all ${
                    activeView === 'all'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Box Types
                </button>
                <button
                  onClick={() => setActiveView('3d')}
                  className={`text-xs px-3 py-1 rounded-md font-semibold transition-all ${
                    activeView === '3d'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  3D Simulation
                </button>
              </div>
            </div>

            {/* Card Container with subtle tilt */}
            <div 
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm transition-transform duration-300 relative group"
              style={{
                transform: `rotateX(${tilt.x * 0.5}deg) rotateY(${tilt.y * 0.5}deg) translateY(${parallaxOffset * 0.1}px)`,
              }}
            >
              {/* TAB 1: Manufactured Printed Carton Photo */}
              {activeView === 'real' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="h-64 sm:h-72 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 overflow-hidden">
                    <img 
                      src="/O1CN01clwYha1unbYHXIdlU_!!6000000006082-2-yinhe.png_.avif" 
                      alt="Printed Corrugated Box manufactured by Print Gallery" 
                      className="max-h-full max-w-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Custom Branded Shipping Carton</div>
                      <div className="text-slate-500">5-Ply Double Wall • Die-Cut Handle Cutouts</div>
                    </div>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">
                      OEM Ready
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 2: All Box Types Lineup Photo */}
              {activeView === 'all' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="h-64 sm:h-72 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 overflow-hidden">
                    <img 
                      src="/all-type-of-boxes.jpg" 
                      alt="All types of corrugated cardboard boxes" 
                      className="max-h-full max-w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Complete Box Range</div>
                      <div className="text-slate-500">RSC, Overlap, Mailers & Partition Trays</div>
                    </div>
                    <a href="#contact" className="text-amber-600 font-bold hover:underline">
                      Get Quote →
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 3: Interactive 3D CSS Box */}
              {activeView === '3d' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="h-64 sm:h-72 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden perspective-1000">
                    
                    {/* Simulated 3D isometric box */}
                    <div className="relative w-40 h-44 bg-gradient-to-br from-[#c88d52] via-[#b87642] to-[#915424] rounded-lg border border-amber-300/60 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-500 flex flex-col justify-between p-3 text-center">
                      <div className="text-[9px] font-bold font-mono text-amber-950 uppercase border-b border-amber-800/20 pb-1">
                        PRINT GALLERY LTD
                      </div>
                      <div className="my-auto py-2 border border-amber-900/30 rounded bg-amber-800/10">
                        <span className="text-[10px] font-black text-amber-950 block">CORRUGATED BOX</span>
                        <span className="text-[8px] font-mono text-amber-900">BURST 18+ • 5-PLY</span>
                      </div>
                      <div className="flex justify-between text-[8px] font-mono text-amber-950">
                        <span>L: 14"</span>
                        <span>W: 10"</span>
                        <span>H: 8"</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium text-center mt-3">
                      Interactive 3D geometry responds to mouse movement
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Custom Dimensions Available</div>
                      <div className="text-slate-500">From 4" mini mailers to 60" master crates</div>
                    </div>
                    <a href="#contact" className="text-amber-600 font-bold hover:underline">
                      Get Quote →
                    </a>
                  </div>
                </div>
              )}

              {/* Bottom Quick Feature Tagline */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Certified Burst & ECT Resistance</span>
                </span>
                <span className="font-semibold text-slate-700">Same-Day Prototyping</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
