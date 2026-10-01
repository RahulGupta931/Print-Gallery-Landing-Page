import { useState } from 'react';
import { 
  CheckCircle2, 
  FlaskConical, 
  Cpu, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import { useInView } from '../hooks/useMotion';

export default function Infrastructure() {
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState<'machines' | 'lab'>('machines');
  const [selectedMachine, setSelectedMachine] = useState<number>(0);

  const manufacturingUnits = [
    {
      title: 'Continuous High-Speed Corrugation Line',
      desc: 'Complete corrugated board manufacturing line with precision heating rolls, automatic reel stands, and slitter scorer for 3-ply, 5-ply, and 7-ply board.',
      capacity: '2000+ cartons / day',
      image: '/m1.png',
      features: ['Automated flute sync (B, C, E, BC)', 'Inline rotary sheer cutter', 'Steam-heated curing plates'],
    },
    {
      title: 'Multi-Color Flexographic Board Printer',
      desc: 'High-definition flexo board printing with fast quick-dry chambers, automated color registration, and slotting/creasing in a single pass.',
      capacity: 'Up to 250 boards / min',
      image: '/m2.png',
      features: ['Water-based eco-friendly inks', 'High-density ink transfer rollers', 'Inline rotary creaser'],
    },
    {
      title: 'Precision Die-Cutting & Punching Machinery',
      desc: 'Heavy-duty platen and automatic flatbed die-cutting machines ensuring razor-sharp cuts, clean stripping, and tight tolerances for intricate mailer boxes.',
      capacity: '±0.5 mm tolerance precision',
      image: '/m3.png',
      features: ['High tonnage platen punch', 'Automated scrap stripping', 'Laser-cut wood/steel rule dies'],
    },
    {
      title: 'All-Format Offset Press & UV Coater',
      desc: 'Top-tier large-format offset printing press for premium graphics packaging, paired with thermal lamination and UV coater units for scratch-resistant finishes.',
      capacity: '4-Color & 6-Color High Gamut',
      image: '/m5.jpg',
      features: ['Spot & Full UV gloss coatings', 'BOPP thermal film lamination', 'MetPET and specialty board support'],
    },
  ];

  const testingEquipment = [
    {
      name: 'Burst Testing Machine',
      metric: 'Bursting Strength (BF)',
      range: '10 to 45 kg/cm²',
      desc: 'Applies hydraulic pressure via rubber diaphragm to quantify board puncture and rupture resistance.',
      src: '/t1.jpeg',
      standard: 'IS 2771 / TAPPI T-810',
    },
    {
      name: 'Digital Edge Crush Tester (ECT)',
      metric: 'Column Compression Strength',
      range: '25 to 80 kN/m',
      desc: 'Measures vertical compression resistance of fluted corrugated board to calculate stacking box compression (BCT).',
      src: '/t2.jpeg',
      standard: 'TAPPI T-811 / ISO 3037',
    },
    {
      name: 'Cobb Sizing Tester',
      metric: 'Water Absorption (Cobb 60)',
      range: '25 - 60 g/m²',
      desc: 'Measures water absorption of paper surface over 60 seconds to ensure high humidity & transit waterproofing.',
      src: '/t3.jpeg',
      standard: 'TAPPI T-441 / ISO 535',
    },
    {
      name: 'Digital Moisture & Substance Analyzer',
      metric: 'Moisture Content % & GSM',
      range: '6.5% - 8.5% Moisture',
      desc: 'Ensures kraft paper retains optimum elasticity and tensile strength without brittleness or fluting collapse.',
      src: '/t4.jpeg',
      standard: 'ISO 287 / TAPPI T-410',
    },
  ];

  return (
    <section 
      id="infrastructure" 
      ref={ref} 
      className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Factory className="w-3.5 h-3.5 text-amber-600" />
            <span>Industrial Infrastructure</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Manufacturing Machinery & Quality Testing Lab
          </h2>
          <p className="text-slate-600 text-base">
            Our Noida Sector 63 manufacturing facility combines automated corrugation lines with a calibrated in-house quality testing laboratory.
          </p>
        </div>

        {/* Tab Switcher (Flat Corporate) */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border border-slate-200 p-1 rounded-xl flex items-center gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab('machines')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'machines'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Manufacturing Units & Press</span>
            </button>
            <button
              onClick={() => setActiveTab('lab')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'lab'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Quality Testing Lab (8+ Tests)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Manufacturing Units */}
        {activeTab === 'machines' && (
          <div className="space-y-8 animate-fade-in">
            {/* Active Machine Spotlight */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              
              {/* Photo */}
              <div className="lg:col-span-6 rounded-xl bg-slate-50 border border-slate-200 p-4 flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
                <img
                  src={manufacturingUnits[selectedMachine].image}
                  alt={manufacturingUnits[selectedMachine].title}
                  className="max-h-72 w-auto object-contain rounded-lg"
                />
              </div>

              {/* Machine Details */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs uppercase font-bold text-amber-700 block mb-1">
                    HEAVY INDUSTRIAL CAPACITY
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    {manufacturingUnits[selectedMachine].title}
                  </h3>
                  <div className="inline-block bg-slate-100 text-slate-800 text-xs font-mono font-bold px-2.5 py-1 rounded mt-2 border border-slate-200">
                    Capacity: {manufacturingUnits[selectedMachine].capacity}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {manufacturingUnits[selectedMachine].desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Technical Highlights:
                  </span>
                  {manufacturingUnits[selectedMachine].features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="btn-primary text-xs sm:text-sm inline-flex items-center gap-2"
                  >
                    <span>Schedule Factory Plant Visit</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Thumbnails */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {manufacturingUnits.map((unit, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMachine(index)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all ${
                    selectedMachine === index
                      ? 'bg-white border-amber-500 shadow-sm ring-1 ring-amber-500'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-[10px] font-bold text-amber-700 uppercase mb-1">
                    Unit #{index + 1}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">{unit.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{unit.capacity}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Testing Equipment & QC Lab */}
        {activeTab === 'lab' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {testingEquipment.map((equip, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow transition-shadow flex flex-col justify-between"
                >
                  {/* Photo */}
                  <div className="aspect-square bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-center relative">
                    <img
                      src={equip.src}
                      alt={equip.name}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-2 left-2 bg-white border border-slate-200 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                      {equip.standard}
                    </div>
                  </div>

                  {/* Testing Data */}
                  <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-amber-700 uppercase">
                        {equip.metric}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{equip.name}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {equip.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Standard Range:</span>
                      <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {equip.range}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Certificate Callout */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Certificate of Analysis (COA) with Every Batch</h4>
                  <p className="text-xs text-slate-600">
                    Each carton shipment is accompanied by verified QC lab test results confirming exact Burst Factor, GSM, and Moisture tolerance.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="btn-secondary text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
              >
                Request Batch Test Sample
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
