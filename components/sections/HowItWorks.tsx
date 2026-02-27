"use client"
import { useState } from 'react'
import { Home, Users, HeadphonesIcon, MapPin, Building2, ChevronRight, LucideIcon } from 'lucide-react'
import { Button } from '../ui/button'

const tabs = ['Renting', 'Buying', 'Selling'] as const
type Tab = typeof tabs[number]

type Step = {
  number: string
  icon: LucideIcon
  title: string
  description: string
  cta: string
}

type Extra = {
  icon: LucideIcon
  title: string
  description: string
  cta: string
  hasSearch?: boolean
}

type TabContent = {
  steps: Step[]
  extras: Extra[]
}

const content: Record<Tab, TabContent> = {
  Renting: {
    steps: [
      {
        number: '01',
        icon: Home,
        title: 'Find the right home',
        description: 'Browse verified listings across Abuja neighbourhoods. Filter by budget, bedrooms, and amenities.',
        cta: 'Browse Listings',
      },
      {
        number: '02',
        icon: Users,
        title: 'Connect with agents',
        description: 'Work with certified local agents who know the Abuja market and can guide you through the process.',
        cta: 'Find an Agent',
      },
      {
        number: '03',
        icon: HeadphonesIcon,
        title: 'Renter support',
        description: 'Get help with rental questions, negotiations, and moving guidance every step of the way.',
        cta: 'Get Support',
      },
    ],
    extras: [
      {
        icon: MapPin,
        title: 'Get Local Info',
        description: 'Explore neighbourhood insights across Abuja. Get important local information on the areas you care about.',
        cta: 'Explore Areas',
        hasSearch: true,
      },
      {
        icon: Building2,
        title: 'Are you a Landlord?',
        description: 'List your property and reach thousands of potential tenants and agents looking for homes in Abuja.',
        cta: 'List a Property',
      },
    ],
  },
  Buying: {
    steps: [
      {
        number: '01',
        icon: Home,
        title: 'Search properties',
        description: 'Explore thousands of verified properties for sale across Abuja and surrounding areas.',
        cta: 'Search Now',
      },
      {
        number: '02',
        icon: Users,
        title: "Work with a buyer's agent",
        description: 'Get matched with an experienced agent who specialises in purchases and negotiations.',
        cta: 'Find an Agent',
      },
      {
        number: '03',
        icon: HeadphonesIcon,
        title: 'Close with confidence',
        description: 'Our team guides you through documentation, inspections, and finalising your purchase.',
        cta: 'Get Support',
      },
    ],
    extras: [
      {
        icon: MapPin,
        title: 'Explore Neighbourhoods',
        description: 'Research schools, amenities, and infrastructure before you commit to a location.',
        cta: 'Explore Areas',
        hasSearch: true,
      },
      {
        icon: Building2,
        title: 'Selling instead?',
        description: 'List your current property and connect with buyers actively searching in your area.',
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
        description: 'Post your property in minutes with photos, pricing, and full details visible to thousands of buyers.',
        cta: 'List Now',
      },
      {
        number: '02',
        icon: Users,
        title: 'Connect with buyers',
        description: 'Receive enquiries and schedule viewings with serious, verified buyers through our platform.',
        cta: 'Find Buyers',
      },
      {
        number: '03',
        icon: HeadphonesIcon,
        title: 'Close the deal',
        description: 'Get end-to-end support from our agents to negotiate the best price and handle paperwork.',
        cta: 'Get Support',
      },
    ],
    extras: [
      {
        icon: MapPin,
        title: 'Price Your Property',
        description: "Use our local market data to understand what your property is worth in today's market.",
        cta: 'Get Valuation',
        hasSearch: true,
      },
      {
        icon: Building2,
        title: 'Need a rental instead?',
        description: 'Not ready to sell? List your property for rent and start earning passive income today.',
        cta: 'List for Rent',
      },
    ],
  },
}

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Renting')
  const { steps, extras } = content[activeTab]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Discover how it works</h2>
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-teal-400 hover:text-teal-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {steps.map((step: Step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between">
                  <div className="bg-teal-50 text-teal-600 rounded-xl p-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-gray-100 select-none">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
                <Button variant="outline" className="w-fit text-sm mt-auto border-teal-200 text-teal-700 hover:bg-teal-50">
                  {step.cta} <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {extras.map((extra: Extra) => {
            const Icon = extra.icon
            return (
              <div key={extra.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
                <div className="bg-teal-50 text-teal-600 rounded-xl p-2 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{extra.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{extra.description}</p>
                </div>
                {extra.hasSearch && (
                  <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 w-full max-w-xs focus-within:border-teal-400 transition-colors">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                      type="text"
                      placeholder="Enter an area e.g. Maitama"
                      className="text-sm text-gray-600 bg-transparent outline-none w-full placeholder:text-gray-400"
                    />
                  </div>
                )}
                <Button className="w-fit text-sm bg-teal-600 hover:bg-teal-700 text-white">
                  {extra.cta}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks