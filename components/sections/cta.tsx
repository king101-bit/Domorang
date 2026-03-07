import Image from 'next/image';

const Cta = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* TEXT */}
          <div>
            {/* Eyebrow */}
            <span className="text-primary-600 mb-4 inline-block text-sm font-semibold tracking-wide uppercase">
              Abuja&apos;s Property Platform
            </span>

            {/* Heading - tightened to 2 lines */}
            <h1 className="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Finding a Home <br />
              Should Be <span className="text-primary-600">Simple.</span>
            </h1>

            {/* Subtext - uncommented and refined */}
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500">
              Verified listings, transparent prices, zero stress. Connect with
              trusted real estate professionals across Abuja.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 rounded-xl px-6 py-3 font-semibold text-white transition">
                Find a Home
              </button>
              <button className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
                List Property
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <Image
              src="/home_cta.webp"
              width={600}
              height={450}
              alt="Find property"
              className="w-full rounded-3xl shadow-xl"
            />
            <div className="bg-primary-200/40 absolute -right-10 -bottom-10 -z-10 h-64 w-64 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
