import { Check, Zap } from 'lucide-react';

type Phase = {
  title: string;
  description: string;
  date: string;
  status: 'done' | 'active' | 'upcoming';
};

const phases: Phase[] = [
  {
    title: 'Phase 1: Waitlist & Community',
    description: 'Building our founding community',
    date: 'NOW',
    status: 'done',
  },
  {
    title: 'Phase 2: Beta Testing',
    description: '50 verified properties, 100+ beta users',
    date: 'February 2026',
    status: 'active',
  },
  {
    title: 'Phase 3: Public Launch',
    description: 'Full platform live in Abuja',
    date: 'March 2026',
    status: 'upcoming',
  },
  {
    title: 'Phase 4: Mobile App',
    description: 'iOS and Android apps',
    date: 'Q2 2026',
    status: 'upcoming',
  },
  {
    title: 'Phase 5: AI-Powered WhatsApp Assistant',
    description: 'Helping users find homes through simple chat conversations',
    date: 'Q3 2026',
    status: 'upcoming',
  },
];

const DotIcon = ({ status }: { status: Phase['status'] }) => {
  if (status === 'done')
    return <Check className="h-8 w-8 stroke-3 text-green-500" />;
  if (status === 'active')
    return <Zap className="fill-primary-600 text-primary-600 h-8 w-8" />;
  return <div className="h-6 w-6 rounded-full bg-gray-300" />;
};

const DotIconSm = ({ status }: { status: Phase['status'] }) => {
  if (status === 'done')
    return <Check className="h-5 w-5 stroke-3 text-green-500" />;
  if (status === 'active')
    return <Zap className="fill-primary-600 text-primary-600 h-5 w-5" />;
  return <div className="h-4 w-4 rounded-full bg-gray-300" />;
};

export default function Roadmap() {
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-[43px]">
          Our Launch Roadmap
        </h2>

        {/* Desktop — Horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-7.5 right-0 left-0 h-1">
              <div className="bg-primary-600 h-full" style={{ width: '20%' }} />
              <div className="absolute top-0 right-0 left-[20%] h-full bg-gray-300" />
            </div>
            <div className="relative grid grid-cols-5 gap-4">
              {phases.map((phase) => (
                <div key={phase.title} className="text-center">
                  <div
                    className={`relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white ${phase.status === 'upcoming' ? 'border-gray-300' : 'border-primary-600'}`}
                  >
                    <DotIcon status={phase.status} />
                  </div>
                  <h3 className="mb-2 text-base font-bold">{phase.title}</h3>
                  <p className="mb-2 text-sm text-gray-700">
                    {phase.description}
                  </p>
                  <p className="text-primary-600 text-sm font-semibold">
                    {phase.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile — Vertical */}
        <div className="md:hidden">
          <div className="relative pl-12">
            <div className="absolute top-0 bottom-0 left-4.75 w-1">
              <div className="bg-primary-600 h-24" />
              <div className="absolute top-24 right-0 bottom-0 left-0 bg-gray-300" />
            </div>
            <div className="space-y-12">
              {phases.map((phase) => (
                <div key={phase.title} className="relative">
                  <div
                    className={`absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border-4 bg-white ${phase.status === 'upcoming' ? 'border-gray-300' : 'border-primary-600'}`}
                  >
                    <DotIconSm status={phase.status} />
                  </div>
                  <h3 className="mb-1 text-lg font-bold">{phase.title}</h3>
                  <p className="mb-1 text-sm text-gray-700">
                    {phase.description}
                  </p>
                  <p className="text-primary-600 text-sm font-semibold">
                    {phase.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
