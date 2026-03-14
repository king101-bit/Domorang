'use client';
import { Button } from '../ui/button';
import { List, Map } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { abujaAreas } from '@/lib/data/areas';
import PropertyFiltersSheet from './PropertyFilterSheet';
import { FilterState } from '@/app/home/page';

type Props = {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

const PropertyFilter = ({ filters, setFilters }: Props) => {
  const types = [
    { label: 'All', value: 'all' },
    { label: 'Rent', value: 'rent' },
    { label: 'Buy', value: 'buy' },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-2">
        {types.map(({ label, value }) => (
          <Button
            key={value}
            variant={filters.type === value ? 'default' : 'outline'}
            className={
              filters.type === value ? 'bg-primary-600 text-white' : ''
            }
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                type: value as FilterState['type'],
              }))
            }
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Select
          value={filters.area}
          onValueChange={(val) =>
            setFilters((prev) => ({ ...prev, area: val }))
          }
        >
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="All Areas" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Areas</SelectItem>
              {abujaAreas.map((area) => (
                <SelectItem
                  key={area}
                  value={area.toLowerCase().replace(/\s+/g, '-')}
                >
                  {area}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <PropertyFiltersSheet filters={filters} setFilters={setFilters} />

        <Button variant="outline" size="icon">
          <List className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon">
          <Map className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PropertyFilter;
