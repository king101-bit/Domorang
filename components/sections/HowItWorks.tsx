import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <>
      <section className="bg-[#F7F7F7] py-20 md:py-32" id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-12 text-3xl font-bold md:text-[43px]">
            How Domorang Works
          </h1>

          <div className="mb-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-0">
            {/* Step 1 */}
            <div className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-6 text-left md:w-64">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2] text-lg font-semibold text-white">
                1
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Search Real Listings
              </h3>
              <p className="text-sm text-gray-600">
                Browse only verified properties with accurate photos and prices
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden px-4 text-[#0891B2] md:flex">
              <ArrowRight className="h-8 w-8" />
            </div>

            {/* Step 2 */}
            <div className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-6 text-left md:w-64">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2] text-lg font-semibold text-white">
                2
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                See Complete Details
              </h3>
              <p className="text-sm text-gray-600">
                No surprises. Every fee, requirement, and detail upfront
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden px-4 text-[#0891B2] md:flex">
              <ArrowRight className="h-8 w-8" />
            </div>

            {/* Step 3 */}
            <div className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-6 text-left md:w-64">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2] text-lg font-semibold text-white">
                3
              </div>
              <h3 className="mb-2 text-lg font-semibold">Connect Directly</h3>
              <p className="text-sm text-gray-600">
                Speak with verified agents or property owners
              </p>
            </div>

            {/* Arrow 3 */}
            <div className="hidden px-4 text-[#0891B2] md:flex">
              <ArrowRight className="h-8 w-8" />
            </div>

            {/* Step 4 */}
            <div className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-6 text-left md:w-64">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2] text-lg font-semibold text-white">
                4
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Move In Stress-Free
              </h3>
              <p className="text-sm text-gray-600">
                Secure payments, transparent process, zero headaches
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <span className="text-base">
            Join <span className="text-primary-600 font-semibold">100+</span>{' '}
            people already waiting
          </span>
        </div>
      </section>
    </>
  );
}
