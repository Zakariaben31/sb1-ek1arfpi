import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { CarGrid } from '../components/CarGrid';
import { cars } from '../data/cars';

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Cars</h2>
        <CarGrid cars={cars} />
      </main>
    </>
  );
}