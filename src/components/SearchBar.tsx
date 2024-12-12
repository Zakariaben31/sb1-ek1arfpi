import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative max-w-md w-full mx-auto">
      <input
        type="text"
        placeholder="Search for your dream car..."
        className="w-full px-6 py-4 pl-12 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-lg"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
    </div>
  );
}