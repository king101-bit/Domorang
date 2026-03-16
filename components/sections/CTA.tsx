import { CheckCircle2 } from 'lucide-react';
import WaitlistForm from '../layout/waitlist-form';

const benefits = [
  'Clear upfront information on rent and requirements',
  'First access when we launch in March 2026',
  'Direct chat support during your search',
  'No spam, just important updates',
];

function CTA() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="mb-6 text-3xl leading-tight font-bold md:text-[43px]">
            Ready to Find Your Dream Home in Abuja?
          </h2>
          <p className="mb-10 text-lg">
            Join <span className="text-primary-600 font-semibold">100+</span>{' '}
            people who are done with fake listings and hidden fees
          </p>
          <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-6 text-left md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                <p className="text-base">{benefit}</p>
              </div>
            ))}
          </div>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

export default CTA;
