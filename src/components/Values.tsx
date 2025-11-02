import { Lightbulb, Leaf, Users, Award, Shield } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously pushing the boundaries with creative and technological advancements.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Prioritizing eco-friendly practices and materials in all our operations.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Building lasting relationships through personalized and attentive service.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining high standards of quality in every project.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Upholding honesty, transparency, and ethical business practices.',
  },
];

export default function Values() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Core <span className="text-amber-500">Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700"
            >
              <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <value.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center text-amber-500">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
