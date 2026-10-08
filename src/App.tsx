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
import FactoryGallery from './components/FactoryGallery';
import BoxCalculator from './components/BoxCalculator';
import {
  AboutPage,
  ContactPage,
  NotFoundPage,
  PolicyPage,
  ServicePage,
  ThankYouPage,
} from './pages';
import { servicePages } from './serviceData';

function HomePage() {
  const { progress } = useScrollProgress();
  const factoryGalleryImages = ['/gallery.jpeg', '/gallery1.jpeg', '/gallery2.jpeg', '/gallery3.jpeg'];

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
        <BoxCalculator />

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
        <HeroBanner />
        <FactoryGallery images={factoryGalleryImages} />

        {/* <section id="factory-gallery" className="bg-slate-50 py-20 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">Factory Gallery</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Inside Our Production Floor
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="marquee-track flex w-max min-w-full items-center gap-5 py-5 px-4 sm:gap-6 sm:px-6">
                {[...factoryGalleryImages, ...factoryGalleryImages].map((image, index) => (
                  <div key={`${image}-${index}`} className="h-72 w-[22rem] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:h-80 sm:w-[26rem] lg:h-[28rem] lg:w-[32rem]">
                    <img
                      src={image}
                      alt={`Print Gallery factory image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* High-Conversion RFQ Contact & Map */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

function App({ pathname }: { pathname: string }) {
  const path = pathname === '/' ? '/' : `/${pathname.split('/').filter(Boolean).join('/')}`;
  const service = servicePages.find((item) => path === `/${item.slug}`);

  if (service) return <ServicePage service={service} />;
  if (path === '/about') return <AboutPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/privacy-policy') return <PolicyPage kind="privacy" />;
  if (path === '/terms') return <PolicyPage kind="terms" />;
  if (path === '/thank-you') return <ThankYouPage />;
  if (path !== '/') return <NotFoundPage />;
  return <HomePage />;
}

export default App;
