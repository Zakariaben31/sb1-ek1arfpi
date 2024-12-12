import React from 'react';
import { SearchForm } from './SearchForm';

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2070)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Drive
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Luxury and comfort at unbeatable prices. Rent your dream car today.
            </p>
          </div>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}