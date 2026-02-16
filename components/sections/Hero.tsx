import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import WaitlistForm from '../layout/waitlist-form';

export default function Hero() {
  return (
    <>
      <section className="bg-[#E4F5FF] py-20" id="#waitlist">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-3xl leading-tight font-bold md:text-[43px]">
                Find real houses in Abuja without{' '}
                <span className="text-primary-600">stress</span> or{' '}
                <span className="text-primary-600">hidden fees</span>
              </h1>
              <p className="text-muted-foreground text-base">
                Domorang shows only verified, available houses with clear
                prices, so you stop wasting time, money, and energy.
              </p>

              <div className="mx-auto max-w-md">
                {' '}
                {/* Center it in the hero */}
                <WaitlistForm variant="hero" />
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <p className="text-sm">Verified Listings</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <p className="text-sm">Secured Payments</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <p className="text-sm">No Hidden Fees</p>
                </div>
              </div>

              <p className="text-center text-sm md:text-left">
                Join{' '}
                <span className="text-primary-600 text-lg font-semibold">
                  100+
                </span>{' '}
                people already waiting
              </p>
            </div>

            <div className="relative h-[450px] w-full md:h-[600px] lg:h-[700px]">
              <Image
                src="/house.png"
                alt="Modern house in Abuja"
                fill
                className="rounded-2xl object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
