import { Plus } from 'lucide-react';

function Faqs() {
  return (
    <>
      <section className="bg-[#0891B2] py-20 md:py-32" id="faqs">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="mb-12 text-center text-[43px] font-bold text-white">
            Got Questions? We&apos;ve Got Answers
          </h1>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  When will Domorang launch?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  We&apos;re targeting March 2026 for public launch in Abuja.
                  Beta testing begins in February with 100 early members.
                </p>
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  What makes Domorang different from other property sites?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  We verify every property before listing. Accurate photos,
                  transparent pricing, and no fake listings. Plus we are user
                  funded, not agent or landlord funded
                </p>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  Is joining the waitlist free?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  Yes! Completely free. No payments required. Just your email to
                  stay updated on our launch.
                </p>
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  How do you verify properties?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  Our team visits every property, takes real photos, verifies
                  ownership, confirms availability, and validates all pricing
                  details before listing.
                </p>
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  Will Domorang expand beyond Abuja?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  Yes! We&apos;re starting with Abuja to perfect our product,
                  then expanding to other states.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
