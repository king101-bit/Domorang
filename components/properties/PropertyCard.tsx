'use client';
import { useState } from 'react';
import { MapPin, Bed, Bath, Maximize2, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toPropertySlug } from '@/lib/utils';

const PropertyCard = ({ property }: { property: Property }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group border-border cursor-pointer overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Status badge */}
        <span className="bg-primary-600 absolute top-3 right-3 rounded-md px-3 py-1 text-xs font-semibold text-white">
          {property.status}
        </span>

        {/* Heart button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSaved(!saved);
          }}
          className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition hover:bg-white"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${saved ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 p-4">
        {/* Price */}
        <p className="text-2xl font-extrabold">
          ₦{property.price.toLocaleString()}
          <span className="text-muted-foreground ml-1 text-sm font-normal">
            per {property.period}
          </span>
        </p>
        {/* Title */}
        <Link
          href={`/properties/${toPropertySlug(property.id, property.title)}`}
        >
          <p className="text-foreground line-clamp-1 text-sm font-semibold">
            {property.title}
          </p>
        </Link>

        {/* Location */}
        <div className="text-muted-foreground flex items-center gap-1">
          <MapPin className="text-primary-600 h-3.5 w-3.5" />
          <span className="text-xs">{property.location}</span>
        </div>

        {/* Stats */}
        <div className="border-border -mx-4 mt-1 flex items-center gap-4 rounded-b-xl border-t bg-gray-50 px-4 pt-2 pb-1">
          <div className="text-muted-foreground flex items-center gap-1.5">
            <Bed className="text-primary-600 h-3.5 w-3.5" />
            <span className="text-xs">{property.bedrooms} Bedroom</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-1.5">
            <Bath className="text-primary-600 h-3.5 w-3.5" />
            <span className="text-xs">{property.bathrooms} Bathroom</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-1.5">
            <Maximize2 className="text-primary-600 h-3.5 w-3.5" />
            <span className="text-xs">{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
