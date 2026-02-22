// components/sections/Hero.tsx
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MapComponent from '../layout/MapComponent';

export default function Hero() {
  return (
    <section className="bg-[#E4F5FF] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Find Real Houses in Abuja.{' '} <br />
            <span className="text-primary-600">No Fake Listings. No Hidden Fees.</span>
          </h1>


          <p className="mb-8 text-lg text-gray-700 md:text-xl">
            Browse verified properties with real photos and transparent prices. 
            No fake listings. No hidden fees. No inspection charges.
          </p>

          {/* CTAs */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/properties">
              <Button 
                size="lg" 
                className="w-full bg-primary-600 text-white hover:bg-primary-700 sm:w-auto sm:px-8"
              >
                Browse Verified Properties
              </Button>
            </Link>
            <Link href="/list-property">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 sm:w-auto sm:px-8"
              >
                List Your Property
              </Button>
            </Link>
                  </div>

        </div>
      </div>
    </section>
  );
}