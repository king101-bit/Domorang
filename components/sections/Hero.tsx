import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-primary-100 flex min-h-screen flex-col items-center justify-center py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h1 className="font-montserrat mb-4 text-[64px] leading-tight font-bold md:text-5xl lg:text-6xl">
            Search, Find, and Secure <br />
            Your <span className="text-primary-600">Next Home</span> in Abuja.
          </h1>

          {/* Subtext */}
          <p className="mb-8 font-sans text-base text-gray-600 md:text-lg">
            Verified listings, real photos, transparent prices. No fake
            listings. No hidden fees. No inspection charges.
          </p>

          {/* Search bar */}
          <div className="mb-4 flex items-center overflow-hidden rounded-2xl bg-white px-4 py-3 shadow-md">
            <Search className="text-primary-400 mr-3 h-5 w-5 shrink-0" />
            <input
              type="text"
              placeholder="Area, Neighborhood or Address"
              className="flex-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <Link href="/properties">
              <Button
                size="sm"
                className="bg-primary-600 hover:bg-primary-700 ml-2 shrink-0 rounded-xl text-white"
              >
                Search
              </Button>
            </Link>
          </div>

          {/* Secondary CTA */}
          <p className="mb-10 text-sm text-gray-500">
            Are you an agent?{' '}
            <Link
              href="/list-property"
              className="text-primary-600 font-medium hover:underline"
            >
              List your property →
            </Link>
          </p>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto mt-4 max-w-4xl overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/home_cta.webp"
            width={1200}
            height={600}
            alt="Featured property in Abuja"
            className="w-full object-cover"
            priority
          />
          {/* Gradient overlay at bottom */}
          <div className="from-primary-100 absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t to-transparent" />
        </div>
      </div>
    </section>
  );
}
