import React from 'react';
import { Car, Zap, Crown, Truck } from 'lucide-react';

const categories = [
  {
    name: 'Economy',
    icon: Car,
    description: 'Best value for money',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Luxury',
    icon: Crown,
    description: 'Premium experience',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Electric',
    icon: Zap,
    description: 'Eco-friendly options',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'SUV',
    icon: Truck,
    description: 'Spacious and comfortable',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800'
  }
];

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ name, icon: Icon, description, image }) => (
            <div key={name} className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img src={image} alt={name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                <Icon className="absolute top-4 right-4 h-8 w-8 text-white" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}