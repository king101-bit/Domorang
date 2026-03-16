import { CheckCircle2 } from 'lucide-react';
import WaitlistForm from '../layout/waitlist-form';

export default function Hero() {
  return (
    <section className="bg-[#E4F5FF] py-20" id="waitlist">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-6">
            <h1 className="text-[32px] leading-tight font-bold md:text-[43px]">
              Find real houses in Abuja{' '}
              <span className="text-primary-600">without stress</span> or{' '}
              <span className="text-primary-600">hidden fees</span>
            </h1>

            <p className="text-base text-gray-600">
              Domorang shows only verified, available houses with clear prices,
              so you stop wasting time, money, and energy.
            </p>

            <div className="mx-auto max-w-md pt-4">
              <WaitlistForm variant="hero" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-500 h-4 w-4" />
                <p className="text-sm">Verified Listings</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-500 h-4 w-4" />
                <p className="text-sm">Secured Payments</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-500 h-4 w-4" />
                <p className="text-sm">No Hidden Fees</p>
              </div>
            </div>

            <p className="text-sm">
              Join{' '}
              <span className="text-primary-600 text-lg font-semibold">
                100+
              </span>{' '}
              people already waiting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
