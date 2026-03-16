import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Search Real Listings',
    description:
      'Browse only verified properties with accurate photos and prices',
  },
  {
    number: 2,
    title: 'See Complete Details',
    description: 'No surprises. Every fee, requirement, and detail upfront',
  },
  {
    number: 3,
    title: 'Connect Directly',
    description: 'Speak with verified agents or property owners',
  },
  {
    number: 4,
    title: 'Move In Stress-Free',
    description: 'Secure payments, transparent process, zero headaches',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 md:py-32" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-12 text-3xl font-bold md:text-[43px]">
          How Domorang Works
        </h2>
        <div className="mb-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="border-primary-600 w-full rounded-2xl border-2 bg-white p-6 text-left md:w-64">
                <div className="bg-primary-600 mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="text-primary-600 hidden px-4 md:flex">
                  <ArrowRight className="h-8 w-8" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <span className="text-base">
          Join <span className="text-primary-600 font-semibold">100+</span>{' '}
          people already waiting
        </span>
      </div>
    </section>
  );
}
