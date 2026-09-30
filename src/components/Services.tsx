import { 
  Package, 
  Printer, 
  Tag, 
  Megaphone, 
  Leaf, 
  Scissors, 
  ArrowRight, 
  Check, 
  Layers
} from 'lucide-react';
import { useInView } from '../hooks/useMotion';

const services = [
  {
    id: 'corrugated',
    icon: Package,
    title: 'Corrugated Box Manufacturing',
    subtitle: 'Single, Double & Triple Wall (3, 5 & 7-Ply)',
    description: 'Industrial-grade corrugated boxes and cartons tailored for heavy-duty shipping, e-commerce mailing, and warehousing with custom burst strength.',
    specs: ['3-Ply, 5-Ply, 7-Ply options', 'B, C, E, BC Flute Profiles', 'ECT 32 to 60+ ratings', 'Custom RSC & Overlap Flaps'],
    badge: 'Core Specialty',
    popular: true,
  },
  {
    id: 'offset',
    icon: Printer,
    title: 'All-Format Offset Printing',
    subtitle: 'Vibrant Multi-Color High Definition',
    description: 'Advanced multi-color offset printing delivering razor-sharp packaging sleeves, mono cartons, brochures, catalogs, and marketing collateral.',
    specs: ['Multi-Color High-Speed Press', 'Up to 450 GSM Duplex/Kraft Board', 'Spot UV & Thermal Lamination', 'Foil Stamping & Embossing'],
    badge: 'High Precision',
    popular: false,
  },
  {
    id: 'die-cut',
    icon: Scissors,
    title: 'Precision Die-Cut Packaging',
    subtitle: 'Custom Mailers & Self-Locking Cartons',
    description: 'Computer-plotted steel rule die-cutting for self-erecting mailers, pizza boxes, partitioned trays, and luxury unboxing experiences without tape.',
    specs: ['CAD Unfolding Blueprints', 'Zero-Tape Lock Systems', 'Window Patching & Perforations', 'Tight ±0.5mm Tolerance'],
    badge: 'Custom Engineering',
    popular: true,
  },
  {
    id: 'labels',
    icon: Tag,
    title: 'High-Resolution Product Labels',
    subtitle: 'Rolls & Sheets for Retail & Pharma',
    description: 'Durable, moisture-resistant, and high-tack labels for food & beverage, pharmaceuticals, logistics barcodes, and FMCG consumer goods.',
    specs: ['Waterproof & Tearproof Stock', 'Barcode & QR Code Printing', 'Matte, Gloss & Metallic Finishes', 'Continuous Roll Feeds'],
    badge: 'Fast Run',
    popular: false,
  },
  {
    id: 'eco',
    icon: Leaf,
    title: 'Sustainable Eco-Packaging',
    subtitle: '100% Recyclable FSC Kraft Solutions',
    description: 'Environmentally responsible packaging manufactured from post-consumer recycled paper and printed with non-toxic water-based eco-inks.',
    specs: ['100% Biodegradable & Compostable', 'FSC-Certified Kraft Stock', 'Zero Plastic Laminates', 'Carbon-Conscious Production'],
    badge: 'Eco Green',
    popular: true,
  },
  {
    id: 'promo',
    icon: Megaphone,
    title: 'POS Displays & Promotional Print',
    subtitle: 'Retail Standees, Inserts & Banners',
    description: 'Eye-catching point-of-sale corrugated standees, countertop product dispensers, inserts, and large-format promotional printing.',
    specs: ['Rigid Corrugated Standees', 'Full-color Litho Lamination', 'Flat-pack Easy Assembly', 'High Weight-Bearing Trays'],
    badge: 'Retail Ready',
    popular: false,
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" ref={ref} className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Industrial Packaging Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Our Printing & Packaging Services
          </h2>
          <p className="text-slate-600 text-base">
            Comprehensive manufacturing and printing services tailored to your exact industrial specifications, brand aesthetics, and logistics needs.
          </p>
        </div>

        {/* Services Grid (Flat Corporate Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`relative rounded-xl p-6 flex flex-col justify-between border transition-all duration-200 ${
                  service.popular
                    ? 'bg-amber-50/30 border-amber-300 shadow-sm'
                    : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs text-amber-700 font-semibold mb-2">
                    {service.subtitle}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Technical bullets */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-200 mb-5">
                    {service.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href="#calculator"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-amber-500 text-slate-800 hover:text-slate-950 py-2.5 rounded-lg text-xs font-bold border border-slate-200 transition-colors"
                >
                  <span>Configure {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Need a Custom Die-Cut Box or Specific Dimensions?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              Our in-house CAD structural engineering team can create tailor-made packaging samples with your exact product fit.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary whitespace-nowrap text-xs sm:text-sm"
          >
            Request Custom Prototype
          </a>
        </div>

      </div>
    </section>
  );
}
