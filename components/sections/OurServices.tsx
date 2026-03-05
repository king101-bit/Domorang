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
        <h2 className="mb-8 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative flex min-h-48 flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Gradient */}
                <div className="from-primary-50 via-primary-50/60 pointer-events-none absolute top-0 right-0 hidden h-full w-2/5 bg-linear-to-l to-transparent md:block" />

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
                    <div className="bg-primary-50 text-primary-600 shrink-0 rounded-xl p-2.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base leading-snug font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="max-w-full text-sm leading-relaxed text-gray-500 md:max-w-[58%]">
                    {service.description}
                  </p>

                  {/* Button pushed to bottom */}
                  <div className="mt-auto">
                    <Button className="bg-primary-600 hover:bg-primary-700 rounded-lg px-5 py-2 text-sm text-white transition-colors duration-150">
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
