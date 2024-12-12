import React from 'react';
import { Users, Fuel, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Car } from '../types';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => navigate(`/car/${car.id}`)}
      />
      <div className="p-4">
        <h3 
          className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-600"
          onClick={() => navigate(`/car/${car.id}`)}
        >
          {car.name}
        </h3>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Users size={18} />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel size={18} />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Cog size={18} />
            <span>{car.transmission}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${car.price}<span className="text-sm text-gray-500">/day</span></span>
          <button 
            onClick={() => navigate(`/car/${car.id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}