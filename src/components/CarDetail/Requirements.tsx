import React from 'react';
import { AlertCircle } from 'lucide-react';

interface RequirementsProps {
  requirements: string[];
}

export function Requirements({ requirements }: RequirementsProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Rental Requirements</h3>
      <ul className="space-y-3">
        {requirements.map((requirement) => (
          <li key={requirement} className="flex items-center gap-2">
            <AlertCircle className="text-blue-500" size={20} />
            <span>{requirement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}