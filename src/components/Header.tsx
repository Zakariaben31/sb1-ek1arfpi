import React from 'react';
import { Car } from 'lucide-react';

export function Header() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">PresiRentals</h1>
          </div>
          <div className="space-x-6">
            <button className="text-white hover:text-gray-200">About</button>
            <button className="text-white hover:text-gray-200">Contact</button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}