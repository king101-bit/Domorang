import { useMemo } from 'react';
import { FilterState } from '@/app/home/page';
import PropertyCard from './PropertyCard';
import { dummyProperties } from '@/lib/data/data';

type Props = { filters: FilterState };

const PropertyGrid = ({ filters }: Props) => {
  const filtered = useMemo(
    () =>
      dummyProperties.filter((p) => {
        if (
          filters.type !== 'all' &&
          p.listingType !== (filters.type === 'rent' ? 'For Rent' : 'For Sale')
        )
          return false;
        if (
          filters.area !== 'all' &&
          !p.location.toLowerCase().includes(filters.area.replace(/-/g, ' '))
        )
          return false;
        if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1])
          return false;
        if (filters.bedrooms !== null && p.bedrooms !== filters.bedrooms)
          return false;
        if (filters.bathrooms !== null && p.bathrooms !== filters.bathrooms)
          return false;
        if (p.sqft < filters.sizeRange[0] || p.sqft > filters.sizeRange[1])
          return false;
        if (
          filters.propertyTypes.length > 0 &&
          !filters.propertyTypes.some((t) =>
            p.title.toLowerCase().includes(t.toLowerCase())
          )
        )
          return false;
        return true;
      }),
    [filters]
  );

  return (
    <div>
      <p className="text-muted-foreground mb-4 text-sm">
        {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}{' '}
        found
      </p>
      {filtered.length === 0 ? (
        <div className="text-muted-foreground flex flex-col items-center justify-center py-20">
          <p className="text-lg font-medium">No properties found</p>
          <p className="text-sm">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
