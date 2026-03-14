import Navbar from '@/components/layout/navbar';
import PropertyGallery from '@/components/properties/PropertyGallery';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getPropertyById } from '@/lib/data/data';
import {
  ArrowLeft,
  BadgeCheck,
  BadgeX,
  Bath,
  Bed,
  Instagram,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const id = slug.split('-')[0];
  const property = getPropertyById(id);
  return {
    title: property?.title,
    description: property?.description,
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const id = slug.split('-')[0];
  const property = getPropertyById(id);

  if (!property) return <div>Property not found</div>;

  return (
    <>
      <Navbar />
      <div className="border-primary-200 border-b px-6 py-3">
        <Link
          href="/home"
          className="text-muted-foreground hover:text-primary-600 flex items-center gap-1.5 text-sm transition"
        >
          <ArrowLeft size={15} /> Back to listings
        </Link>
      </div>
      <main className="mx-auto max-w-5xl px-6 py-8">
        <PropertyGallery
          images={[property.image, property.image, property.image]}
          title={property.title}
        />

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left column - main content */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex gap-2">
              <Badge className="bg-primary-600 hover:bg-primary-600 rounded-md px-3 py-1.5 text-sm font-medium text-white">
                {property.listingType === 'For Rent'
                  ? 'Available for Rent'
                  : 'Available for Sale'}
              </Badge>
              <Badge
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold ${
                  property.status === 'Verified'
                    ? 'bg-green-700 text-white hover:bg-green-700'
                    : 'bg-gray-400 text-white hover:bg-gray-400'
                }`}
              >
                {property.status === 'Verified' ? (
                  <>
                    <BadgeCheck size={15} /> Verified
                  </>
                ) : (
                  <>
                    <BadgeX size={15} /> Not Verified
                  </>
                )}
              </Badge>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold">{property.title}</h1>
              <span className="text-muted-foreground flex items-center gap-1 text-sm">
                <MapPin size={14} /> {property.location}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  ₦{property.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground text-sm">
                  per {property.period}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="flex gap-6">
              <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <Bed className="text-primary-600 h-4 w-4" /> {property.bedrooms}{' '}
                Bedroom
              </span>
              <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <Bath className="text-primary-600 h-4 w-4" />{' '}
                {property.bathrooms} Bathroom
              </span>
              <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <Maximize2 className="text-primary-600 h-4 w-4" />{' '}
                {property.sqft} sqft
              </span>
            </div>

            <div className="border-t border-gray-200" />

            <div className="space-y-2">
              <h2 className="text-xl font-bold">Description</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {property.description}
              </p>
            </div>

            {property.amenities && property.amenities.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="border-primary-300 rounded-full border px-4 py-1.5 text-sm font-medium text-gray-700"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h2 className="text-xl font-bold">Location</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {property.location}
              </p>
            </div>
          </div>

          {/* Right column - sidebar */}
          <div className="space-y-4">
            {/* Agent card */}
            <div className="border-primary-200 space-y-4 rounded-xl border p-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  {/* placeholder avatar */}
                  <div className="bg-primary-100 text-primary-600 flex h-full w-full items-center justify-center text-sm font-semibold">
                    NO
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-xl font-semibold">Noah Okafor</p>
                    <BadgeCheck size={14} className="text-green-600" />
                  </div>
                  <p className="text-muted-foreground flex items-center gap-1 text-sm">
                    <MapPin size={11} /> Wuse 2, Maitama
                  </p>
                </div>
              </div>

              <Button className="bg-primary-600 hover:bg-primary-700 w-full gap-2 text-sm text-white">
                <Phone size={15} /> Contact Agent
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-primary-300 text-primary-600 flex w-full items-center justify-center gap-2"
                  >
                    <MessageCircle size={15} />
                    Request Inspection
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                      <div className="mt-4 flex flex-col gap-2 p-4">
                        <a
                          href={`https://wa.me/23487777777777?text=Hi, I'd like to book an inspection for ${encodeURIComponent(property.title)} in ${encodeURIComponent(property.location)}. When are you available?%0A%0AView listing: ${encodeURIComponent(`https://yoursite.com/properties/${slug}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button variant="outline" className="w-full">
                            Continue on Whatsapp
                          </Button>
                        </a>
                        <Button>Start Live Chat</Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <div className="space-y-2">
                <p className="text-muted-foreground mt-2 text-xs">
                  Connect on social
                </p>
                <button className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs transition hover:bg-gray-50">
                  <Instagram size={13} /> Instagram
                </button>
              </div>
            </div>

            {/* Security tips */}
            <div className="border-primary-200 space-y-3 rounded-xl border p-5">
              <h3 className="text-base font-semibold">Security Tips</h3>
              <ul className="text-muted-foreground space-y-1.5 text-xs">
                <li>• Always verify properly before payment</li>
                <li>• Meet in safe, public locations</li>
                <li>• Never pay without proper documentation</li>
                <li>• Report suspicious listings</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
