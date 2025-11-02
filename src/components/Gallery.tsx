import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Packaging',
    title: 'Premium Cosmetics Packaging',
    image: 'https://images.pexels.com/photos/5632396/pexels-photo-5632396.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Elegant packaging design for luxury cosmetics brand',
  },
  {
    id: 2,
    category: 'Labels',
    title: 'Product Label Design',
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'High-resolution labels for food and beverage',
  },
  {
    id: 3,
    category: 'Printing',
    title: 'Marketing Brochures',
    image: 'https://images.pexels.com/photos/5632409/pexels-photo-5632409.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Professional brochure design and printing',
  },
  {
    id: 4,
    category: 'Boxes',
    title: 'Custom Gift Boxes',
    image: 'https://images.pexels.com/photos/5632410/pexels-photo-5632410.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Beautifully crafted custom packaging boxes',
  },
  {
    id: 5,
    category: 'Packaging',
    title: 'Eco-Friendly Packaging',
    image: 'https://images.pexels.com/photos/5632411/pexels-photo-5632411.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Sustainable and recyclable packaging solutions',
  },
  {
    id: 6,
    category: 'Printing',
    title: 'Business Card Design',
    image: 'https://images.pexels.com/photos/5632412/pexels-photo-5632412.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Professional business card printing',
  },
  {
    id: 7,
    category: 'Labels',
    title: 'Wine Label Collection',
    image: 'https://images.pexels.com/photos/5632413/pexels-photo-5632413.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Premium wine bottle label designs',
  },
  {
    id: 8,
    category: 'Boxes',
    title: 'Electronics Packaging',
    image: 'https://images.pexels.com/photos/5632414/pexels-photo-5632414.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Durable packaging for electronic products',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Packaging', 'Labels', 'Printing', 'Boxes'];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-amber-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our finest work in printing, packaging, and design
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white border border-gray-100 h-72"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23f3f4f6' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='16' fill='%236b7280'%3E${item.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="inline-block w-fit bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animation-fade">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-all duration-300 z-10"
              style={{ position: 'relative', float: 'right', margin: '16px' }}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-80 bg-gray-100 overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23f3f4f6' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='24' fill='%236b7280'%3E${selectedImage.title}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>

            <div className="p-8">
              <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                {selectedImage.category}
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">{selectedImage.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedImage.description}
              </p>
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300">
                  Request Quote
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-all duration-300"
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
