import { Printer, Package, Tag, Megaphone, Leaf } from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: 'Offset Printing',
    description: 'High-quality offset printing for brochures, catalogs, posters, and more.',
  },
  {
    icon: Package,
    title: 'Packaging Solutions',
    description: 'Custom packaging design and production, including boxes, cartons, and specialty packaging.',
  },
  {
    icon: Tag,
    title: 'Label Printing',
    description: 'Durable and high-resolution labels for products across various sectors.',
  },
  {
    icon: Megaphone,
    title: 'Promotional Materials',
    description: 'Printing of promotional items like banners, flyers, business cards, and more.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Packaging',
    description: 'Sustainable packaging options using recyclable and biodegradable materials.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive printing and packaging solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
