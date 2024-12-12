import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function SearchForm() {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      <div className="space-y-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter pickup location"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="time"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Return Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Same as pickup"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Return Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="time"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={returnTime}
              onChange={(e) => setReturnTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex items-end">
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
          Search Cars
        </button>
      </div>
    </div>
  );
}