import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesProps {
  features: string[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-2">
          <Check className="text-green-500" size={20} />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}