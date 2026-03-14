type Property = {
  id: string;
  image: string;
  price: number;
  description?: string;
  period: 'annum' | 'month';
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  listingType: 'For Rent' | 'For Sale';
  status: 'Verified' | 'Not Verified';
  amenities?: string[];
};
