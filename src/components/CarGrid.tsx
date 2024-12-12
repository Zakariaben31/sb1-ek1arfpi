import React from 'react';
import { CarCard } from './CarCard';
import type { Car } from '../types';

interface CarGridProps {
  cars: Car[];
}

export function CarGrid({ cars }: CarGridProps) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No cars found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}