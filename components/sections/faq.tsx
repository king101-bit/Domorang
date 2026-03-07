'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does Domorang work?',
    answer:
      'Domorang makes renting and selling property simple. Real estate professionals can list their properties, while renters and buyers can easily search and contact them directly.',
  },
  {
    question: 'Is Domorang a real estate agency?',
    answer:
      'No — Domorang is a smart proptech platform connecting renters, buyers, and sellers with verified real estate professionals in Abuja. We make it simple to discover, list, and secure homes with confidence.',
  },
  {
    question: 'Is Domorang free to use?',
    answer:
      'Yes! Browsing and contacting listings is completely free for home seekers.',
  },
  {
    question: 'Are the homes on Domorang real and verified?',
    answer:
      'Absolutely. Our team verifies every listing to ensure the property exists and is available before it goes live.',
  },
  {
    question: 'How do I list my property on Domorang?',
    answer:
      'Register as a real estate professional, click "List Your Property", upload photos, add property details, set your price, and publish. That\'s it.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="from-primary-50 relative overflow-hidden bg-gradient-to-r via-white to-white py-20">
        {/* Decorative blur (works on mobile too) */}
        <div className="bg-primary-200/30 pointer-events-none absolute top-10 -left-32 h-72 w-72 rounded-full blur-3xl" />

        {/* Illustration (desktop only) */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden bg-no-repeat lg:block"
          style={{
            backgroundImage: "url('/faq_asset_1.avif')",
            backgroundSize: '420px',
            backgroundPosition: '-220px center',
            width: '420px',
          }}
        />

        <div className="relative container mx-auto max-w-2xl px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-primary-500 mb-2 text-sm font-semibold tracking-wide uppercase">
              Got Questions?
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md ${
                    isOpen
                      ? 'border-primary-200 bg-primary-50/40'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-sm font-semibold text-gray-900 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`text-primary-500 h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-primary-600 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-around gap-8 md:flex-row">
          {/* Stat 1 */}
          <div className="text-center md:border-r md:border-white md:pr-8">
            <p className="text-3xl font-bold">2k</p>
            <p className="mt-2 text-sm">
              Active renters & home seekers using Domorang every month
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center md:mx-4 md:border-r md:border-white md:px-8">
            <p className="text-3xl font-bold">75%</p>
            <p className="mt-2 text-sm">
              Customer satisfaction rate from verified users & partners
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center md:pl-8">
            <p className="text-3xl font-bold">50+</p>
            <p className="mt-2 text-sm">
              Trusted landlords & verified property partners across Abuja
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
