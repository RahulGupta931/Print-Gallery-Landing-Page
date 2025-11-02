import { Palette, Star } from 'lucide-react';

export default function GraphicDesignTeam() {
  const designImages = [
    {
      src: '/a.jpg',
      title: 'Box Structure Design',
      description: 'Precise dimensional planning',
    },
    {
      src: '/b.jpg',
      title: 'Box Template Design',
      description: 'Professional box layouts',
    },
    {
      src: '/3.webp',
      title: 'Advanced Packaging Design',
      description: 'Complex box specifications',
    },
    {
      src: '/4.jpg',
      title: 'Box Unfolding Template',
      description: 'Detailed packaging templates',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <Palette className="w-8 h-8 text-amber-500" />
            <h2 className="text-5xl font-bold">
              In House <span className="text-amber-500">Graphic Design</span> Team
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Committed to excellence and customer satisfaction. They ensure that each and every product
            goes through the appropriate quality checks and measures before being shipped out to our
            prestigious group of clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {designImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center p-4">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-amber-300 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full -mr-48 -mt-48"></div>
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-start space-x-4 mb-6">
              <Star className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Design Excellence</h3>
                <blockquote className="text-xl text-gray-200 italic leading-relaxed">
                  "Committed to excellence and customer satisfaction. They ensure that each and
                  every product goes through the appropriate quality checks and measures before being shipped
                  out to our prestigious group of clients."
                </blockquote>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">15+</div>
                <p className="text-gray-300">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">100%</div>
                <p className="text-gray-300">Quality Assured</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">1000+</div>
                <p className="text-gray-300">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Design Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Custom packaging solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">3D box structure design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Technical blueprint creation</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Brand integration and printing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Prototype development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Pre-production quality checks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
