import { Lightbulb, Leaf, Users, Award, Shield, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useMotion';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously adopting modern CAD cutting tables, advanced fluting profiles, and computer-automated quality control.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Prioritizing eco-friendly recycled kraft papers, biodegradable inks, and circular zero-waste die-cutting operations.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Delivering tailored box dimensions, same-day prototyping, and personalized account management for enterprise brands.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Enforcing zero-defect manufacturing standards through calibrated Bursting, ECT, Cobb, and Moisture lab inspections.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent pricing, guaranteed paper grammage (GSM), and ethical long-term business partnerships built over 15 years.',
  },
];

export default function Values() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Our Core Values
          </h2>
          <p className="text-slate-600 text-base">
            The foundation of trust that has made PRINT GALLERY the preferred packaging partner for leading brands across India.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold mb-1 text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>ISO 9001 Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
