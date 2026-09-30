import { Target, Eye, ShieldCheck, Award, Factory, Cpu, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useMotion';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" ref={ref} className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Overview Grid */}
        <div className={`grid lg:grid-cols-12 gap-10 items-start mb-14 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Left: About Us Company Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Factory className="w-3.5 h-3.5 text-amber-600" />
              <span>About PRINT GALLERY Ltd</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Leading Provider of High Quality Printing & Packaging Services
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              <strong className="text-slate-900 font-bold">PRINT GALLERY Ltd</strong> is a leading provider of high quality printing and packaging services. Our company has set a reputation for delivering innovative and sustainable packaging solutions to clients across various industries.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our commitment to excellence, combined with state-of-the-art technology, ensures that we meet and exceed our customers' expectations. From robust corrugated shipping containers to high-precision offset printed packaging, we deliver consistent, damage-free packaging solutions tailored for enterprise manufacturing and retail distribution.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>State-of-the-Art Plant</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>100% Recyclable Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>In-House Testing Lab</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Custom CAD Engineering</span>
              </div>
            </div>
          </div>

          {/* Right: Vision & Mission (Flat Corporate) */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Vision Card */}
            <div className="bg-white border-2 border-amber-500 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-amber-100 text-amber-700 p-2.5 rounded-lg">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-amber-700">OUR ASPIRATION</span>
                  <h3 className="text-2xl font-black text-slate-900">OUR VISION</h3>
                </div>
              </div>
              <p className="text-slate-700 font-medium text-base leading-relaxed">
                To revolutionize the printing and packaging industry with sustainable, innovative, and customer-centric solutions.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm space-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-slate-100 text-slate-800 p-2.5 rounded-lg">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500">HOW WE DELIVER</span>
                  <h3 className="text-2xl font-black text-slate-900">OUR MISSION</h3>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Deliver superior printing and packaging services that help our clients' products stand out in the marketplace.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Foster a culture of sustainability and environmental responsibility through 100% recyclable kraft solutions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Continuously invest in modern corrugation technology, offset presses, and skills development for excellence in service delivery.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* 4 Flat Badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Factory, title: '50k Daily Capacity', desc: 'Continuous automated corrugation lines operating in Noida Sec 63.' },
            { icon: ShieldCheck, title: '8+ QC Tests', desc: 'Calibrated laboratory testing for Burst Factor, ECT, and Cobb water sizing.' },
            { icon: Award, title: '15+ Years Trust', desc: 'Over a decade and a half delivering excellence to leading industries.' },
            { icon: Cpu, title: 'CAD Prototyping', desc: 'Precision structural box mockups and samples cut within 24 hours.' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-3">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
