import { CheckCircle2 } from 'lucide-react';
import WaitlistForm from '../layout/waitlist-form';

function CTA() {
  return (
    <section className="bg-[#F7F7F7] py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h1 className="mb-6 text-[43px] leading-tight font-bold">
            Ready to Find Your Dream Home in Abuja?
          </h1>

          <p className="mb-10 text-lg">
            Join <span className="font-semibold text-[#0891B2]">100+</span>{' '}
            people who are done with fake listings and hidden fees
          </p>

          {/* Benefits Grid - 2 columns on desktop, 1 on mobile */}
          <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-6 text-left md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
              <p className="text-base">
                Clear upfront information on rent and requirements
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
              <p className="text-base">
                First access when we launch in March 2026
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
              <p className="text-base">
                Direct chat support during your search
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
              <p className="text-base">No spam, just important updates</p>
            </div>
          </div>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

export default CTA;
