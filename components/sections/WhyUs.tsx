import { Check, X } from 'lucide-react';

const comparisons = [
  {
    bad: 'Unverified listings',
    good: 'Every property physically and digitally verified',
  },
  { bad: 'Hidden fees & charges', good: 'Transparent pricing, no surprises' },
  { bad: 'Fake photos & descriptions', good: 'Real photos from site visits' },
  {
    bad: 'Unresponsive landlords',
    good: 'Checked and reliable property owners',
  },
  { bad: 'Weeks of back-and-forth', good: 'Direct booking & communication' },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-32" id="why-us">
      <div className="mx-auto max-w-md px-6 text-center md:max-w-4xl lg:max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 transition-all duration-700 md:text-5xl">
          What Makes Us Different
        </h2>
        <div className="mb-8 space-y-6">
          {comparisons.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
                <div className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="text-base text-gray-400">{item.bad}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-primary-600 mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-base font-medium text-gray-900">
                    {item.good}
                  </p>
                </div>
              </div>
              {index < comparisons.length - 1 && (
                <hr className="mt-6 border-gray-200" />
              )}
            </div>
          ))}
        </div>
        <div
          id="our-story"
          className="bg-primary-50 border-primary-600 w-full max-w-sm rounded-2xl border-2 p-8 md:max-w-none"
        >
          <h3 className="text-primary-600 mb-3 text-left text-2xl font-semibold tracking-wide">
            THE STORY
          </h3>
          <h2 className="mb-6 text-left text-4xl font-bold">
            Why Domorang Exists
          </h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              &quot;I spent two exhausting years searching for a house in Abuja.
              I inspected more than five different properties, paid countless
              inspection fees for places that turned out not to be available,
              dealt with misleading photos, and encountered agents who stopped
              replying after several inspections. It was frustrating, draining,
              and honestly unfair.&quot;
            </p>
            <p>
              –{' '}
              <span className="font-bold">
                A renter who knows the struggle firsthand
              </span>
            </p>
            <p className="pt-2">
              That experience is why Domorang was created. Renters deserve
              better. We&apos;re building the platform many of us wished we had
              back then, one where every listing is verified, prices are
              transparent, and communication is honest. This isn&apos;t about
              chasing commissions. It&apos;s about fixing a real problem that
              people face every day when trying to rent a home in Abuja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
