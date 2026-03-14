'use client';
import Navbar from '@/components/layout/navbar';
import PropertyFilter from '@/components/properties/PropertyFilter';
import PropertyGrid from '@/components/properties/PropertyGrid';
import React, { useState } from 'react';

export type FilterState = {
  type: 'all' | 'rent' | 'buy';
  area: string;
  priceRange: [number, number];
  bedrooms: number | null;
  bathrooms: number | null;
  propertyTypes: string[];
  furnishing: string | null;
  sizeRange: [number, number];
};

export const defaultFilters: FilterState = {
  type: 'all',
  area: 'all',
  priceRange: [0, 50000000],
  bedrooms: null,
  bathrooms: null,
  propertyTypes: [],
  furnishing: null,
  sizeRange: [0, 5000],
};

const Home = () => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="sticky top-14 z-40">
        <PropertyFilter filters={filters} setFilters={setFilters} />
      </div>
      <main className="container mx-auto px-4 py-6">
        <PropertyGrid filters={filters} />
      </main>
    </div>
  );
};

export default Home;
