import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ShowcaseImage {
  id: number;
  src: string;
  title: string;
  description?: string;
}

// Replace these with your actual image paths
const showcaseImages: ShowcaseImage[] = [
  {
    id: 1,
    src: '/m1.png',
    title: 'Project 1',
    description: 'Description of your first image',
  },
  {
    id: 2,
    src: '/m5.jpg',
    title: 'Project 2',
    description: 'Description of your second image',
  },
  {
    id: 3,
    src: '/m2.png',
    title: 'Project 3',
    description: 'Description of your third image',
  },
  {
    id: 4,
    src: '/m4.webp',
    title: 'Project 4',
    description: 'Description of your fourth image',
  },
  {
    id: 5,
    src: '/5.jpg',
    title: 'Project 5',
    description: 'Description of your fifth image',
  },
  {
    id: 6,
    src: '/4.jpg',
    title: 'Project 6',
    description: 'Description of your sixth image',
  },
];

export default function ImageShowcase() {
  const [selectedImage, setSelectedImage] = useState<ShowcaseImage | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-amber-500">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our latest projects and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white border border-gray-100"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23f3f4f6' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='16' fill='%236b7280'%3E${image.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                {image.description && (
                  <p className="text-amber-300 text-sm">{image.description}</p>
                )}
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-all duration-300 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-96 bg-gray-100 overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">{selectedImage.title}</h2>
                {selectedImage.description && (
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}