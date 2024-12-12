import React from 'react';
import { Car, Zap, Crown } from 'lucide-react';

const categories = [
  { name: 'All', icon: Car },
  { name: 'Electric', icon: Zap },
  { name: 'Luxury', icon: Crown },
  { name: 'SUV', icon: Car },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex gap-4 mb-8">
      {categories.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => onSelectCategory(name)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === name
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <Icon size={20} />
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
}