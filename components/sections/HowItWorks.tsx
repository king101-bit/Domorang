'use client';
import { useState } from 'react';
import {
  Home,
  Users,
  HeadphonesIcon,
  MapPin,
  Building2,
  ChevronRight,
  Search,
  LucideIcon,
} from 'lucide-react';
import { Button } from '../ui/button';

const tabs = ['Renting', 'Buying', 'Selling'] as const;
type Tab = (typeof tabs)[number];

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
};

type Extra = {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  hasSearch?: boolean;
};

type TabContent = {
  steps: Step[];
  extras: Extra[];
};

const content: Record<Tab, TabContent> = {
  Renting: {
    steps: [
      {
        number: '01',
        icon: Home,
        title: 'Find the right home',
        description:
          'Browse verified listings across Abuja neighbourhoods. Filter by budget, bedrooms, and amenities.',
        cta: 'Browse Listings',
      },
      {
        number: '02',
        icon: Users,
        title: 'Connect with agents',
        description:
          'Work with verified local agents who know the Abuja market and can guide you through the process.',
        cta: 'Find an Agent',
      },
      {
        number: '03',
        icon: HeadphonesIcon,
        title: 'Explore neighborhoods',
        description:
          'Learn about safety, amenities, commute times, and lifestyle in different Abuja areas.',
        cta: 'Explore areas',
      },
    ],
    extras: [
      {
        icon: MapPin,
        title: 'Get Local Info',
        description:
          'Explore neighbourhoods across Abuja. Get important local information on the areas you are most interested in.',
        cta: 'Explore Areas',
        hasSearch: true,
      },
      {
        icon: Building2,
        title: 'Finding a Home?',
        description:
          'Connect with verified local agents who knows the Abuja market and can guide you through the process.',
        cta: 'Find an Agent',
      },
    ],
  },
  Buying: {
    steps: [
      {
        number: '01',
        icon: Home,
        title: 'Search properties',
        description:
          'Explore thousands of verified properties for sale across Abuja and surrounding areas.',
        cta: 'Search Now',
      },
      {
        number: '02',
        icon: Users,
        title: "Work with a buyer's agent",
        description:
          'Get matched with an experienced agent who specialises in purchases and negotiations.',
        cta: 'Find an Agent',
      },
      {
        number: '03',
        icon: HeadphonesIcon,
        title: 'Close with confidence',
        description:
          'Our team guides you through documentation, inspections, and finalising your purchase.',
        cta: 'Get Support',
      },
    ],
    extras: [
      {
        icon: MapPin,
        title: 'Explore Neighbourhoods',
        description:
          'Research schools, amenities, and infrastructure before you commit to a location.',
        cta: 'Explore Areas',
        hasSearch: true,
      },
      {
        icon: Building2,
        title: 'Selling instead?',
        description:
          'List your current property and connect with buyers actively searching in your area.',
        cta: 'List a Property',
      },
    ],
  },
  Selling: {
    steps: [
      {
        number: '01',
        icon: Building2,
        title: 'List your property',
        description:
          'Post your property in minutes with photos, pricing, and full details visible to thousands of buyers.',
        cta: 'List Now',
      },
      {
        number: '02',
        icon: Users,
        title: 'Connect with buyers',
        description:
          'Receive enquiries and schedule viewings with serious, verified buyers through our platform.',
        cta: 'Find Buyers',
      },
      {
        number: '03',
        icon: HeadphonesIcon,
        title: 'Close the deal',
        description:
          'Get end-to-end support from our agents to negotiate the best price and handle paperwork.',
        cta: 'Get Support',
      },
    ],
    extras: [
      {
        icon: MapPin,
        title: 'Price Your Property',
        description:
          "Use our local market data to understand what your property is worth in today's market.",
        cta: 'Get Valuation',
        hasSearch: true,
      },
      {
        icon: Building2,
        title: 'Need a rental instead?',
        description:
          'Not ready to sell? List your property for rent and start earning passive income today.',
        cta: 'List for Rent',
      },
    ],
  },
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Renting');
  const { steps, extras } = content[activeTab];

  return (
    <section className="bg-[#00778C]/10 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10">
          <h2 className="mb-6 font-sans text-4xl font-bold text-gray-900">
            Discover how it works
          </h2>
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'hover:border-primary-400 hover:text-primary-600 border border-gray-200 bg-white text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Step cards — top row */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Icon only — no step number */}
                <div className="bg-primary-50 w-fit rounded-xl p-2">
                  <Icon className="text-primary-700 h-5 w-5" />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-sans font-bold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* Filled dark button matching design */}
                <Button className="bg-primary-650 hover:bg-primary-700 mt-auto w-fit text-sm text-white">
                  {step.cta}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {extras.map((extra, index) => {
            const Icon = extra.icon;
            return (
              <div
                key={extra.title}
                className={`flex flex-col gap-4 rounded-2xl p-6 transition-shadow duration-200 ${
                  index === 0
                    ? ''
                    : 'border border-gray-100 bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="bg-primary-50 w-fit rounded-xl p-2">
                  <Icon className="text-primary-700 h-5 w-5" />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-sans font-bold text-gray-800">
                    {extra.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {extra.description}
                  </p>
                </div>

                {/* Full-width search with button on the right */}
                {extra.hasSearch && (
                  <div className="focus-within:border-primary-400 flex w-full items-center rounded-xl border border-gray-200 bg-white px-3 py-2 transition-colors">
                    <input
                      type="text"
                      placeholder="Enter an area e.g Wuse, Maitama"
                      className="w-full bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400"
                    />
                    <button className="bg-primary-600 hover:bg-primary-700 shrink-0 rounded-lg p-1.5 transition-colors">
                      <Search className="h-4 w-4 text-white" />
                    </button>
                  </div>
                )}

                {!extra.hasSearch && (
                  <Button className="bg-primary-650 hover:bg-primary-700 mt-auto w-fit text-sm text-white">
                    {extra.cta}
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
