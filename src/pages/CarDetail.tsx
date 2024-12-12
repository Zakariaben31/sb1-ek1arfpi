import React from 'react';
import { useParams } from 'react-router-dom';
import { Gallery } from '../components/CarDetail/Gallery';
import { Features } from '../components/CarDetail/Features';
import { Requirements } from '../components/CarDetail/Requirements';
import { PriceDetails } from '../components/CarDetail/PriceDetails';
import { cars } from '../data/cars';
import { Users, Fuel, Cog } from 'lucide-react';

export function CarDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{car.seats} seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel size={20} />
                  <span>{car.fuelType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cog size={20} />
                  <span>{car.transmission}</span>
                </div>
              </div>
            </div>

            <Gallery images={car.gallery} name={car.name} />

            <div>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600">{car.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <Features features={car.features} />
            </div>

            <Requirements requirements={car.requirements} />
          </div>

          <div>
            <PriceDetails
              price={car.price}
              deposit={car.deposit}
              mileageLimit={car.mileageLimit}
              additionalDriver={car.additionalDriver}
              insurance={car.insurance}
            />
          </div>
        </div>
      </div>
    </div>
  );
}