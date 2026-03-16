import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'When will Domorang launch?',
    answer:
      "We're targeting March 2026 for public launch in Abuja. Beta testing begins in February with 100 early members.",
  },
  {
    question: 'What makes Domorang different from other property sites?',
    answer:
      'We verify every property before listing. Accurate photos, transparent pricing, and no fake listings. Plus we are user funded, not agent or landlord funded.',
  },
  {
    question: 'Is joining the waitlist free?',
    answer:
      'Yes! Completely free. No payments required. Just your email to stay updated on our launch.',
  },
  {
    question: 'How do you verify properties?',
    answer:
      'Our team visits every property, takes real photos, verifies ownership, confirms availability, and validates all pricing details before listing.',
  },
  {
    question: 'Will Domorang expand beyond Abuja?',
    answer:
      "Yes! We're starting with Abuja to perfect our product, then expanding to other states.",
  },
];

function Faqs() {
  return (
    <section className="bg-primary-800 py-20 md:py-32" id="faqs">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-[43px]">
          Got Questions? We&apos;ve Got Answers
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-xl bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">{faq.question}</span>
                <Plus className="h-6 w-6 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
