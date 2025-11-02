import { Factory, CheckCircle } from 'lucide-react';

const facilities = [
  'Complete corrugated box manufacturing unit',
  'Flexo Board Printing machine',
  'Multiple Die-cutting machines',
  'All Format Offset Printing Machine',
  'Lamination Machine',
  'Coater Machine, etc.',
];

const testing = [
  'Edge Crush Tester',
  'Cobb Tester',
  'Flat Crush Tester',
  'Ring Crush Tester',
  'Moisture Tester',
  'Substance Indicator',
  'Burst Testing M/C',
  'Transport test facility',
];

const testingEquipment = [
  {
    src: '/t1.jpeg',
    title: 'Precision Testing Machine',
    description: 'Advanced material testing equipment',
  },
  {
    src: '/t2.jpeg',
    title: 'Digital Testing System',
    description: 'Automated quality control testing',
  },
  {
    src: '/t3.jpeg',
    title: 'Compression Testing Unit',
    description: 'High-precision compression testing',
  },
  {
    src: '/t4.jpeg',
    title: 'Multi-Function Tester',
    description: 'Comprehensive material analysis',
  },
];

export default function Infrastructure() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-amber-500">Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            State-of-the-art facilities and equipment for superior quality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <Factory className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold">Manufacturing Facilities</h3>
            </div>
            <ul className="space-y-3">
              {facilities.map((facility, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{facility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-500 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-8 h-8 text-slate-900" />
              <h3 className="text-2xl font-bold text-slate-900">Quality Assurance & Testing</h3>
            </div>
            <ul className="space-y-3">
              {testing.map((test, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-slate-900 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-900">{test}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testing Equipment Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our <span className="text-amber-500">Testing Equipment</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              State-of-the-art testing machines ensuring the highest quality standards for all our products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingEquipment.map((equipment, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center p-4">
                  <img
                    src={equipment.src}
                    alt={equipment.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-semibold text-lg mb-1">{equipment.title}</h4>
                  <p className="text-amber-300 text-sm">{equipment.description}</p>
                </div>
                <div className="p-4 bg-slate-800/90 backdrop-blur-sm">
                  <h4 className="text-white font-semibold text-sm mb-1">{equipment.title}</h4>
                  <p className="text-gray-400 text-xs">{equipment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
