import React from 'react';
import { DollarSign, Calendar, Gauge, UserPlus, Shield } from 'lucide-react';

interface PriceDetailsProps {
  price: number;
  deposit: number;
  mileageLimit: number;
  additionalDriver: number;
  insurance: string;
}

export function PriceDetails({
  price,
  deposit,
  mileageLimit,
  additionalDriver,
  insurance,
}: PriceDetailsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg sticky top-4">
      <h3 className="text-2xl font-bold mb-6">Rental Details</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="text-blue-500" />
            <span>Daily Rate</span>
          </div>
          <span className="font-semibold">${price}/day</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="text-blue-500" />
            <span>Security Deposit</span>
          </div>
          <span className="font-semibold">${deposit}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gauge className="text-blue-500" />
            <span>Mileage Limit</span>
          </div>
          <span className="font-semibold">{mileageLimit}km/day</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserPlus className="text-blue-500" />
            <span>Additional Driver</span>
          </div>
          <span className="font-semibold">${additionalDriver}/day</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="text-blue-500" />
            <span>Insurance</span>
          </div>
          <span className="font-semibold">{insurance}</span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <button 
          onClick={() => window.open(`https://wa.me/1234567890?text=I'm interested in renting the car: ${encodeURIComponent(window.location.href)}`, '_blank')}
          className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
        >
          Enquire on WhatsApp
        </button>
        
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}