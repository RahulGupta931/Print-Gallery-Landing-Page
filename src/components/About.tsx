import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">
              About <span className="text-amber-500">Us</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-amber-500">PRINT GALLERY</span> Ltd is a leading
              provider of high quality printing and packaging services. Our company has set a reputation for
              delivering innovative and sustainable packaging solutions to clients across various
              industries. Our commitment to excellence, combined with state-of-the-art technology,
              ensures that we meet and exceed our customers' expectations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-500 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-8 h-8" />
                <h3 className="text-2xl font-bold">VISION</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To revolutionize the printing and packaging industry with sustainable, innovative,
                and customer-centric solutions.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8" />
                <h3 className="text-2xl font-bold">MISSION</h3>
              </div>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Deliver superior printing and packaging services that help our clients' products stand out</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Foster a culture of sustainability and environmental responsibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Continuously invest in technology and skills development for excellence in service delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
