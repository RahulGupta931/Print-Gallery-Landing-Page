import { useState } from 'react';
import { Star } from 'lucide-react';
import { useInView } from '../hooks/useMotion';

export default function GraphicDesignTeam() {
  const { ref, isInView } = useInView();
  const [selectedBlueprint, setSelectedBlueprint] = useState(0);

  const designImages = [
    {
      src: '/a.jpg',
      title: 'Box Structural CAD Geometry',
      tag: 'Die-Line #01',
      description: 'Precise dimensional planning calculated for heavy stacking strength and zero board wastage.',
      dimensions: '±0.5mm precision tolerance',
    },
    {
      src: '/b.jpg',
      title: 'Tuck-In Mailer Layout',
      tag: 'Mailer CAD #02',
      description: 'Self-locking e-commerce mailer geometry requiring zero adhesive tape for rapid packing lines.',
      dimensions: 'Custom creasing profiles',
    },
    {
      src: '/3.webp',
      title: '3D Folding Simulation & Flutes',
      tag: 'Unfolding #03',
      description: 'Complex multi-component interlocking carton template designed for fragile industrial parts.',
      dimensions: 'Shock-resistant fit',
    },
    {
      src: '/4.jpg',
      title: 'Production Die-Cut Template',
      tag: 'Production #04',
      description: 'Complete plate layout with cutting knives, creasing rules, and perforated tear strips.',
      dimensions: 'Full sheet gang-run',
    },
  ];

  const pipelineSteps = [
    {
      step: '01',
      title: 'Product Dimension Analysis',
      desc: 'We analyze your product weight, fragile stress points, and logistics conditions.',
    },
    {
      step: '02',
      title: 'CAD Structural Blueprint',
      desc: 'Our engineers draft exact 2D die-lines and creasing tolerances in ArtiosCAD / AutoCAD.',
    },
    {
      step: '03',
      title: 'Plotter Sample & Fitting',
      desc: 'A physical unprinted sample is cut on our digital plotting table for immediate physical test-fit.',
    },
    {
      step: '04',
      title: 'Branding & Mass Run',
      desc: 'Artwork is mapped to the die-line and sent to high-speed Flexo/Offset presses.',
    },
  ];

  return (
    <section id="design-team" ref={ref} className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Structural Packaging Engineering</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
            In-House Graphic Design & CAD Prototyping
          </h2>
          <p className="text-slate-600 text-base">
            Committed to excellence and customer satisfaction. Our CAD engineers calculate exact folding tolerances and create custom die-lines before mass manufacturing.
          </p>
        </div>

        {/* Interactive Blueprint Viewer */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          
          {/* Blueprint Viewer Left */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[360px] relative shadow-sm">
            <img
              src={designImages[selectedBlueprint].src}
              alt={designImages[selectedBlueprint].title}
              className="max-h-72 w-auto object-contain rounded-lg"
            />
            <div className="absolute top-3 left-3 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded">
              {designImages[selectedBlueprint].tag}
            </div>
            <div className="absolute bottom-3 right-3 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded">
              {designImages[selectedBlueprint].dimensions}
            </div>
          </div>

          {/* Blueprint Selector Right */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase font-bold text-slate-500 block mb-1">
              Select Structural CAD Template:
            </span>
            <div className="space-y-2.5">
              {designImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedBlueprint(idx)}
                  className={`p-3.5 rounded-xl cursor-pointer border transition-all ${
                    selectedBlueprint === idx
                      ? 'bg-amber-50 border-amber-500 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{img.title}</span>
                    <span className="text-[10px] font-bold text-amber-700">{img.tag}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{img.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4-Step Engineering Pipeline */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              From Concept to Finished Cardboard Carton
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Our 4-stage systematic prototyping pipeline ensures zero packaging fit errors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative"
              >
                <div className="text-3xl font-black text-amber-500 font-mono mb-2">
                  {step.step}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-amber-500 text-xs font-bold uppercase tracking-wider">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>Design Excellence</span>
            </div>
            <blockquote className="text-base sm:text-lg font-medium text-slate-200 italic max-w-2xl">
              "They ensure that each and every product goes through the appropriate quality checks and measures before being shipped out to our prestigious group of clients."
            </blockquote>
          </div>

          <div className="flex items-center gap-6 flex-shrink-0 text-center">
            <div>
              <div className="text-2xl font-black text-amber-500">15+</div>
              <div className="text-xs text-slate-400">Years Experience</div>
            </div>
            <div className="w-px h-10 bg-slate-700" />
            <div>
              <div className="text-2xl font-black text-white">1,000+</div>
              <div className="text-xs text-slate-400">Projects Done</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
