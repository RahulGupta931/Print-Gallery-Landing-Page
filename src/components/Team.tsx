import { Palette, Warehouse } from 'lucide-react';
import { useInView } from '../hooks/useMotion';

export default function Team() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className={`lg:col-span-6 space-y-5 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-amber-600" />
              <span>Experienced Team</span>
            </div> */}

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Dedicated Professionals Committed to Quality
            </h2>

            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                We are blessed with a team of dedicated professionals committed to excellence and customer satisfaction. They ensure that each and every product goes through the appropriate quality checks and measures before being shipped out to our prestigious group of clients.
              </p>
              <p>
                We have an efficient team of designers and it's thanks to their tireless efforts that we have built a loyal clientele for over 15 years.
              </p>
              <p>
                We also have a team of highly qualified warehousing staff to ensure minimum damage to products in storage. Each of our units are headed by veteran managers, who bring decades of experience in this industry.
              </p>
            </div>

            {/* Flat Stat Cards */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-2xl font-black text-slate-900">15+ Years</div>
                <div className="text-xs text-slate-500 mt-0.5">Industry Experience</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-2xl font-black text-amber-600">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">Quality Assurance Checks</div>
              </div>
            </div>
          </div>

          {/* Right Column: Flat Corporate Highlights */}
          <div className={`lg:col-span-6 space-y-4 transition-all duration-700 delay-150 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Design Team */}
            <div className="bg-slate-50 border-2 border-amber-500 rounded-2xl p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">EXPERTISE</span>
                  <h3 className="text-xl font-bold text-slate-900">In-House Graphic Design & CAD</h3>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-13">
                Committed to excellence and customer satisfaction. They ensure that each and every product goes through the appropriate quality checks and measures.
              </p>
            </div>

            {/* Warehousing Staff */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center">
                  <Warehouse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">FACILITY</span>
                  <h3 className="text-xl font-bold text-slate-900">Warehousing & Careful Handling</h3>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-13">
                Highly qualified warehousing staff ensuring minimum damage to cartons in storage and during palletized transport.
              </p>
            </div>

            {/* Gratitude Quote */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
              <blockquote className="text-sm italic text-slate-700 font-medium">
                "We are truly grateful to you for choosing us as your Best Company and giving us the opportunity to grow."
              </blockquote>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
