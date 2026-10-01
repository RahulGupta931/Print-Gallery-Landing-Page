import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Infrastructure from './components/Infrastructure';
import GraphicDesignTeam from './components/GraphicDesignTeam';
import ImageShowcase from './components/ImageShowcase';
import Sustainability from './components/Sustainability';
import Values from './components/Values';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useMotion';
import HeroBanner from './components/HeroBanner';

function App() {
  const { progress } = useScrollProgress();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      {/* Dynamic Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-amber-500 z-[60] transition-all duration-75"
        style={{ width: `${progress * 100}%` }}
      />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Scroll-based Hero */}
      <main>
        <Hero />

        <div className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap py-3 px-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-300">
            {[
              'Factory Direct Pricing',
              'Custom Box Design',
              'Noida Sector 63',
              'Fast RFQ Response',
              'Eco Packaging',
              'Bulk Dispatch',
              'Warehouse & Logistics Support'
            ].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </span>
            ))}
            {[
              'Factory Direct Pricing',
              'Custom Box Design',
              'Noida Sector 63',
              'Fast RFQ Response',
              'Eco Packaging',
              'Bulk Dispatch',
              'Warehouse & Logistics Support'
            ].map((item, idx) => (
              <span key={`repeat-${idx}`} className="inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

        {/* About */}
        <About />

        <div className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap py-3 px-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-300">
            {[
              'Factory Direct Pricing',
              'Custom Box Design',
              'Noida Sector 63',
              'Fast RFQ Response',
              'Eco Packaging',
              'Bulk Dispatch',
              'Warehouse & Logistics Support'
            ].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </span>
            ))}
            {[
              'Factory Direct Pricing',
              'Custom Box Design',
              'Noida Sector 63',
              'Fast RFQ Response',
              'Eco Packaging',
              'Bulk Dispatch',
              'Warehouse & Logistics Support'
            ].map((item, idx) => (
              <span key={`repeat-${idx}`} className="inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

        {/* Services & Capabilities */}
        <Services />

        {/* Industrial Plant & QC Lab Testing */}
        <Infrastructure />

        {/* In-House CAD & Graphic Engineering */}
        <GraphicDesignTeam />

        {/* Real Product Portfolio Showcase */}
        <ImageShowcase />

        {/* Sustainable & Eco-Friendly Packaging */}
        <Sustainability />

        {/* Core Values */}
        <Values />

        {/* Dedicated Team & Warehousing */}
        <Team />

        {/* High-Conversion RFQ Contact & Map */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;
