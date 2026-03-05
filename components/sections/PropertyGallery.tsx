import Image from 'next/image';

const PropertyGallery = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-primary-500 mb-1 text-sm font-medium">
              Browse Properties
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Properties in Abuja
            </h2>
          </div>
          <button className="text-primary-600 hover:text-primary-700 hidden text-sm font-medium underline-offset-4 hover:underline sm:block">
            View all properties →
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Large left image */}
          <div className="relative row-span-2 overflow-hidden rounded-2xl">
            <Image
              src="/house_1.avif"
              width={800}
              height={600}
              alt="Featured property"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <span className="text-xs font-medium text-white/80">
                Asokoro, Abuja
              </span>
            </div>
          </div>

          {/* Top right */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/house_2.avif"
              width={800}
              height={448}
              alt="Property"
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <span className="text-xs font-medium text-white/80">
                Maitama, Abuja
              </span>
            </div>
          </div>

          {/* Bottom right */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/house_3.avif"
              width={800}
              height={448}
              alt="Property"
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <span className="text-xs font-medium text-white/80">
                Wuse 2, Abuja
              </span>
            </div>
          </div>
        </div>

        {/* Mobile view all */}
        <div className="mt-6 text-center sm:hidden">
          <button className="text-primary-600 text-sm font-medium">
            View all properties →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
