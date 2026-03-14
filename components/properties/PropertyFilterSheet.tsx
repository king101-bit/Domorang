'use client';
import { Filter } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FilterState, defaultFilters } from '@/app/home/page';

const propertyTypes = [
  'Apartment',
  'Duplex',
  'Bungalow',
  'Terraced',
  'Detached',
  'Semi-detached',
];

type Props = {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

const countActiveFilters = (filters: FilterState) => {
  let count = 0;
  if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 50000000)
    count++;
  if (filters.bedrooms !== null) count++;
  if (filters.bathrooms !== null) count++;
  if (filters.propertyTypes.length > 0) count++;
  if (filters.sizeRange[0] !== 0 || filters.sizeRange[1] !== 5000) count++;
  return count;
};

const PropertyFiltersSheet = ({ filters, setFilters }: Props) => {
  const togglePropertyType = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter((t) => t !== type)
        : [...prev.propertyTypes, type],
    }));
  };

  const activeCount = countActiveFilters(filters);

  const SelectButton = ({
    active,
    onClick,
    children,
    className = '',
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }) => (
    <Button
      variant="outline"
      className={`${className} transition-all ${
        active
          ? 'border-primary-600 text-primary-600 ring-primary-600 ring-2'
          : ''
      }`}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="border-border hover:bg-muted relative inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors">
          <Filter className="h-4 w-4" />
          Filters
          {activeCount > 0 && (
            <span className="bg-primary-600 absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold text-white">
              {activeCount}
            </span>
          )}
        </div>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filter Properties</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-7 px-6 py-6">
          {/* Price Range */}
          <div className="flex flex-col gap-3">
            <Label>Price Range</Label>
            <Slider
              min={0}
              max={50000000}
              step={500000}
              value={filters.priceRange}
              onValueChange={(val) =>
                setFilters((prev) => ({
                  ...prev,
                  priceRange: val as [number, number],
                }))
              }
            />
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 text-sm">
                  ₦
                </span>
                <Input
                  className="pl-7 text-sm"
                  value={filters.priceRange[0].toLocaleString()}
                  onChange={(e) => {
                    const val = Number(e.target.value.replace(/,/g, ''));
                    if (!isNaN(val))
                      setFilters((prev) => ({
                        ...prev,
                        priceRange: [val, prev.priceRange[1]],
                      }));
                  }}
                />
              </div>
              <span className="text-muted-foreground text-sm">to</span>
              <div className="relative flex-1">
                <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 text-sm">
                  ₦
                </span>
                <Input
                  className="pl-7 text-sm"
                  value={filters.priceRange[1].toLocaleString()}
                  onChange={(e) => {
                    const val = Number(e.target.value.replace(/,/g, ''));
                    if (!isNaN(val))
                      setFilters((prev) => ({
                        ...prev,
                        priceRange: [prev.priceRange[0], val],
                      }));
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col gap-3">
            <Label>Bedrooms</Label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectButton
                  key={num}
                  active={filters.bedrooms === num}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      bedrooms: prev.bedrooms === num ? null : num,
                    }))
                  }
                  className="w-12"
                >
                  {num === 5 ? '5+' : num}
                </SelectButton>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div className="flex flex-col gap-3">
            <Label>Bathrooms</Label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((num) => (
                <SelectButton
                  key={num}
                  active={filters.bathrooms === num}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      bathrooms: prev.bathrooms === num ? null : num,
                    }))
                  }
                  className="w-12"
                >
                  {num === 4 ? '4+' : num}
                </SelectButton>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div className="flex flex-col gap-3">
            <Label>Property Type</Label>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((type) => (
                <SelectButton
                  key={type}
                  active={filters.propertyTypes.includes(type)}
                  onClick={() => togglePropertyType(type)}
                  className="text-sm"
                >
                  {type}
                </SelectButton>
              ))}
            </div>
          </div>

          {/* Size Range */}
          <div className="flex flex-col gap-3">
            <Label>Size (sqft)</Label>
            <Slider
              min={0}
              max={5000}
              step={100}
              value={filters.sizeRange}
              onValueChange={(val) =>
                setFilters((prev) => ({
                  ...prev,
                  sizeRange: val as [number, number],
                }))
              }
            />
            <div className="flex items-center gap-2">
              <Input
                className="text-sm"
                value={filters.sizeRange[0]}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val))
                    setFilters((prev) => ({
                      ...prev,
                      sizeRange: [val, prev.sizeRange[1]],
                    }));
                }}
              />
              <span className="text-muted-foreground text-sm">to</span>
              <Input
                className="text-sm"
                value={filters.sizeRange[1]}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val))
                    setFilters((prev) => ({
                      ...prev,
                      sizeRange: [prev.sizeRange[0], val],
                    }));
                }}
              />
            </div>
          </div>
        </div>

        <SheetFooter className="mt-auto flex-row gap-3 px-6 pb-6">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setFilters(defaultFilters)}
          >
            Reset {activeCount > 0 && `(${activeCount})`}
          </Button>
          <Button className="bg-primary-600 flex-1 text-white">
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default PropertyFiltersSheet;
