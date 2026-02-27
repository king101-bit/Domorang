// components/sections/MapSection.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MapSection() {
  const popularAreas = [
    { name: 'Maitama', count: 15, type: 'premium' },
    { name: 'Gwarinpa', count: 28, type: 'popular' },
    { name: 'Wuse', count: 22, type: 'popular' },
    { name: 'Jabi', count: 18, type: 'popular' },
    { name: 'Asokoro', count: 12, type: 'premium' },
    { name: 'Katampe', count: 14, type: 'growing' },
    { name: 'Garki', count: 25, type: 'popular' },
    { name: 'Lugbe', count: 30, type: 'affordable' },
  ];

  return (
    <>
      {/* Search Bar */}
      <div className="mx-auto mb-8 max-w-2xl">
        <div className="flex overflow-hidden rounded-full bg-gray-100 shadow-md">
          <Input
            type="text"
            placeholder="Search by area, neighborhood, or address..."
            className="flex-1 border-0 bg-transparent px-6 py-4 focus-visible:ring-0"
          />
          <Link href="/properties">
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 rounded-l-none rounded-r-full px-8"
            >
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </Link>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Map Image/Component */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/house.png"
            alt="Abuja neighborhoods map"
            fill
            className="object-cover"
          />

          {/* Optional: Overlay with area badges */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {popularAreas.slice(0, 4).map((area) => (
                <Link
                  key={area.name}
                  href={`/properties?area=${area.name.toLowerCase()}`}
                  className="rounded-lg bg-white/90 px-4 py-2 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white"
                >
                  <MapPin className="text-primary-600 mx-auto mb-1 h-4 w-4" />
                  <p className="text-sm font-semibold">{area.name}</p>
                  <p className="text-xs text-gray-600">
                    {area.count} properties
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Properties Preview */}
        <div className="absolute right-4 bottom-4 flex gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative h-20 w-24 overflow-hidden rounded-lg border-2 border-white shadow-lg"
            >
              <Image
                src={`/property-${i}.jpg`}
                alt={`Featured property ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popular Areas Grid (below map) */}
      <div className="mt-10">
        <h3 className="mb-6 text-center text-2xl font-bold">
          Popular Neighborhoods
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {popularAreas.map((area) => (
            <Link
              key={area.name}
              href={`/properties?area=${area.name.toLowerCase()}`}
              className="hover:border-primary-600 rounded-xl border-2 border-gray-200 bg-white p-4 text-center transition-all hover:shadow-lg"
            >
              <MapPin className="text-primary-600 mx-auto mb-2 h-6 w-6" />
              <p className="mb-1 font-semibold">{area.name}</p>
              <p className="text-sm text-gray-600">{area.count} properties</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
