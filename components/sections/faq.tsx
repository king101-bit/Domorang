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
    <section className="py-20">
      <div className="container mx-auto max-w-2xl px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-primary-500 mb-1 text-sm font-medium">
            Got Questions?
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-primary-200 bg-primary-50/40'
                    : 'border-gray-100 bg-white hover:border-gray-200'
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
                    className={`text-primary-500 h-5 w-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-200 ${
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
  );
};

export default FAQ;
