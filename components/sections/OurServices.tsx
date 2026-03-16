import { Banknote, Building, House, Tag, Upload, Users } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

const OurServices = () => {
  const services = [
    {
      title: 'Rent a Home',
      description:
        'Find verified rental homes across Abuja without the usual stress.',
      icon: House,
      button: 'Explore Rentals',
      image: '/asset_1.webp',
    },
    {
      title: 'Buy a Home',
      description:
        'Access transparent property details, compare options, and connect with credible real estate professionals in Abuja.',
      icon: Building,
      button: 'Explore Properties',
      image: '/asset_2.webp',
    },
    {
      title: 'Sell a Home',
      description:
        'Showcase your property to a targeted audience actively searching for homes in Abuja',
      icon: Banknote,
      button: 'View Deals',
      image: '/asset_3.webp',
    },
    {
      title: 'Join the Domorang Community',
      description:
        'Exclusive listings, market insights, and housing tips before everyone else.',
      icon: Users,
      button: 'Join the Community',
      image: '/asset_4.webp',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-sans text-[45px] font-bold">
          Our Services
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-primary-650 relative flex min-h-48 flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Gradient */}
                {/* <div className="from-primary-50 via-primary-50/60 pointer-events-none absolute top-0 right-0 hidden h-full w-2/5 bg-linear-to-l to-transparent md:block" /> */}

                {/* Asset */}
                {service.image && (
                  <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-2/5 md:block">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain object-right"
                    />
                  </div>
                )}

                <div className="relative z-10 flex h-full flex-col gap-5">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3">
                    <h3 className="font-satoshi text-base leading-snug font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="max-w-full text-sm leading-relaxed text-white md:max-w-[58%]">
                    {service.description}
                  </p>

                  {/* Button pushed to bottom */}
                  <div className="mt-auto">
                    <Button className="text-primary-650 rounded-lg bg-white px-5 py-2 font-sans text-sm transition-colors duration-150">
                      {service.button}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
