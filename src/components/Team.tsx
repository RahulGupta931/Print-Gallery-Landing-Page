import { Users, Palette } from 'lucide-react';

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Our <span className="text-amber-500">Team</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are blessed with a team of dedicated professionals committed to excellence
                  and customer satisfaction. They ensure that each and every product goes through
                  the appropriate quality checks and measures before being shipped out to our
                  prestigious group of clients.
                </p>
                <p>
                  We have an efficient team of designers and it's thanks to their tireless efforts
                  that we have built a loyal clientele for over 15 years.
                </p>
                <p>
                  We also have a team of highly qualified warehousing staff to ensure minimum
                  damage to products in storage. Each of our units are headed by veteran managers,
                  who bring decades of experience in this industry. With all our units working closely,
                  we have been able to create a harmonious work culture.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold">15+ Years</h3>
              </div>
              <p className="text-gray-300">
                of building lasting relationships and delivering exceptional quality
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Palette className="w-10 h-10" />
                <h3 className="text-3xl font-bold">In House Graphic Design Team</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Committed to excellence and customer satisfaction. They ensure that each and
                every product goes through the appropriate quality checks and measures before being shipped
                out to our prestigious group of clients.
              </p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-10">
              <blockquote className="text-2xl font-medium text-slate-800 italic">
                "We are truly grateful to you for choosing us as your Best Company and giving us
                the opportunity to grow"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
