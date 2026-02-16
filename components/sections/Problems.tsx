import { AlertCircle, ClockFading, PhoneCall } from 'lucide-react';
import { NairaIcon } from '../icons/NairaIcon';

const problems = [
  {
    icon: AlertCircle,
    title: 'Multiple inspections fees for different houses',
    description: 'Paying repeatedly just to look with no guarantee of value.',
  },
  {
    icon: NairaIcon,
    title: 'Inflated prices to increase commissions',
    description: 'Rents pushed up without considering market reality.',
  },
  {
    icon: ClockFading,
    title: 'Wasted time inspecting unsuitable houses',
    description: 'Endless inspections that lead nowhere .',
  },
  {
    icon: PhoneCall,
    title: 'Agents-related issues',
    description: 'Dishonesty, poor service, and zero accountability',
  },
];

export default function Problems() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-[28px] font-bold text-gray-900 transition-all duration-700 md:text-[45px]">
              House Hunting in Abuja is Broken
            </h1>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-8 transition-all duration-700 sm:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="border-primary-300 flex items-start gap-4 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="shrink-0">
                    <div className="bg-primary-200 flex h-12 w-12 items-center justify-center rounded-full">
                      <Icon className="text-primary-600 h-6 w-6"></Icon>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">{problem.title}</h3>
                    <p className="text-base text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-8 text-center">
            <p className="text-primary-600 text-xl font-semibold">
              ↓ Here&apos;s how Domorang fixes all of this ↓
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
