import StatCard from '../layout/StatCard';

const stats = [
  {
    stat: '87%',
    label: 'Encountered fake or outdated listings',
  },
  {
    stat: '6 Weeks',
    label: 'Average time wasted finding a real home',
  },
  {
    stat: '50k+',
    label: 'Lost to hidden fees and fake agents',
  },
  {
    stat: '92%',
    label: 'Want verified listings only',
  },
  {
    stat: '15+',
    label: 'Properties visited on average',
  },
  {
    stat: '73%',
    label: 'Would pay for a trusted platform',
  },
];

export default function Stats() {
  return (
    <>
      <section className="bg-[#E4F5FF] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-secondary mb-4 text-5xl font-bold md:text-5xl">
              We Surveyed 150+ House Hunters in Abuja
            </h2>
            <p className="mb-8 text-xl text-gray-700">
              Here&apos;s What we Found:
            </p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((item, index) => (
              <StatCard stat={item.stat} label={item.label} key={index} />
            ))}
          </div>
          <p className="mb-12 text-center text-sm text-gray-600">
            Based on survey of 150+ renters in Abuja, January 2026
          </p>

          {/* Closing Text */}
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              That&apos;s exactly what Domorang fixes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
