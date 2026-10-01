import { ArrowUp, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative overflow-hidden">
      {/* Top subtle highlight bar */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Print Gallery Logo"
                className="w-12 h-12 rounded-full border-2 border-amber-500/80 p-0.5 bg-slate-900 object-cover"
              />
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  PRINT<span className="text-amber-500">GALLERY</span>
                </span>
                <p className="text-[11px] text-amber-400 font-mono">Precision Cardboard Boxes & Printing</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm max-w-sm">
              Leading provider of high quality printing and packaging services. We engineer innovative and sustainable packaging solutions across diverse industries with state-of-the-art technology and rigorous QC testing.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-amber-300 text-[11px] font-mono px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>ISO Certified Operations</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] font-mono px-3 py-1 rounded-full">
                <span>100% Recyclable Kraft</span>
              </span>
            </div>
          </div>

          {/* Col 2: Packaging Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Packaging Products
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Corrugated Shipping Boxes
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Die-Cut E-Commerce Mailers
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Heavy-Duty 7-Ply Cartons
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Offset Printed Monocartons
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Self-Locking Retail Packaging
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  High-Resolution Product Labels
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Plant & Engineering */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Facility & Lab
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#infrastructure" className="hover:text-amber-400 transition-colors">
                  Automated Corrugator Line
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-amber-400 transition-colors">
                  Flexo Board Printing
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-amber-400 transition-colors">
                  Platen Die-Cutting Units
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-amber-400 transition-colors">
                  Burst Strength Testing (BF)
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-amber-400 transition-colors">
                  Edge Crush Tester (ECT)
                </a>
              </li>
              <li>
                <a href="#design-team" className="hover:text-amber-400 transition-colors">
                  In-House CAD Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Noida Headquarters
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>E-block building no. 67, Sector 63 Noida, UP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+919810466405" className="hover:text-white">+91 9810466405</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+917011727274" className="hover:text-white">+91 7011727274</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:printgallery17@gmail.com" className="hover:text-white">printgallery17@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} PRINT GALLERY. All rights reserved. Leading provider of corrugated cardboard packaging and printing services.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-slate-900 hover:bg-amber-500 text-slate-300 hover:text-slate-950 px-4 py-2 rounded-xl border border-slate-800 hover:border-amber-400 transition-all duration-300 shadow group"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
