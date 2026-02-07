import Navbar from '@/components/layout/navbar';
import StatCard from '@/components/layout/StatCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Facebook,
  Instagram,
  Plus,
  Search,
  Twitter,
  X,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const page = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Multiple inspections fees for different houses',
      description: 'Paying repeatedly just to look with no guarantee of value.',
    },
    {
      icon: AlertCircle,
      title: 'Inflated prices to increase commissions',
      description: 'Rents pushed up without considering market reality.',
    },
    {
      icon: AlertCircle,
      title: 'Wasted time inspecting unsuitable houses',
      description: 'Endless inspections that lead nowhere .',
    },
    {
      icon: AlertCircle,
      title: 'Agents-related issues',
      description: 'Dishonesty, poor service, and zero accountability',
    },
  ];

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
  return (
    <>
      <Navbar />
      <section className="bg-[#E4F5FF] py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-[43px] leading-tight font-bold">
                Find real houses in Abuja without{' '}
                <span className="text-primary-600">stress</span> or{' '}
                <span className="text-primary-600">hidden fees</span>
              </h1>
              <p className="text-muted-foreground text-base">
                Domorang shows only verified, available houses with clear
                prices, so you stop wasting time, money, and energy.
              </p>

              <div className="relative flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-primary-600 h-12 w-full rounded-xl sm:rounded-full sm:pr-44"
                />
                <Button
                  size="lg"
                  className="bg-primary-600 h-12 w-full rounded-xl px-6 sm:absolute sm:top-1/2 sm:right-1 sm:w-auto sm:-translate-y-1/2 sm:rounded-full"
                >
                  Get Early Access
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <p className="text-sm">Verified Listings</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <p className="text-sm">Secured Payments</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <p className="text-sm">No Hidden Fees</p>
                </div>
              </div>

              <p className="text-center text-sm md:text-left">
                Join{' '}
                <span className="text-primary-600 text-lg font-semibold">
                  100+
                </span>{' '}
                people already waiting
              </p>
            </div>

            <div className="relative h-[400px] w-full md:h-[500px] lg:h-[600px]">
              <Image
                src="/house.png"
                alt="Hero"
                fill
                className="object-cover object-bottom shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-[45px] font-bold text-gray-900 transition-all duration-700 md:text-5xl">
              {' '}
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
      <section className="bg-[#F7F7F7] py-20 md:py-32" id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-12 text-[43px] font-bold">How Domorang Works</h1>

          <div className="mb-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-0">
            {/* Step 1 */}
            <div className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-6 text-left md:w-64">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2] text-lg font-semibold text-white">
                1
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Search Real Listings
              </h3>
              <p className="text-sm text-gray-600">
                Browse only verified properties with accurate photos and prices
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden px-4 text-[#0891B2] md:flex">
              <ArrowRight className="h-8 w-8" />
            </div>

            {/* Step 2 */}
            <div className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-6 text-left md:w-64">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2] text-lg font-semibold text-white">
                2
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                See Complete Details
              </h3>
              <p className="text-sm text-gray-600">
                No surprises. Every fee, requirement, and detail upfront
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden px-4 text-[#0891B2] md:flex">
              <ArrowRight className="h-8 w-8" />
            </div>

            {/* Step 3 */}
            <div className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-6 text-left md:w-64">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2] text-lg font-semibold text-white">
                3
              </div>
              <h3 className="mb-2 text-lg font-semibold">Connect Directly</h3>
              <p className="text-sm text-gray-600">
                Speak with verified agents or property owners
              </p>
            </div>

            {/* Arrow 3 */}
            <div className="hidden px-4 text-[#0891B2] md:flex">
              <ArrowRight className="h-8 w-8" />
            </div>

            {/* Step 4 */}
            <div className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-6 text-left md:w-64">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2] text-lg font-semibold text-white">
                4
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Move In Stress-Free
              </h3>
              <p className="text-sm text-gray-600">
                Secure payments, transparent process, zero headaches
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <span className="text-base">
            Join <span className="text-primary-600 font-semibold">100+</span>{' '}
            people already waiting
          </span>
        </div>
      </section>
      <section className="py-20 md:py-32" id="why-us">
        <div className="mx-auto max-w-md px-6 text-center md:max-w-4xl lg:max-w-6xl">
          <h1 className="mb-6 text-[43px] font-bold text-gray-900 transition-all duration-700 md:text-5xl">
            What Makes Us Different
          </h1>
          <div className="mb-8 space-y-6">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
              <div className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-base text-gray-400">Unverified listings</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0891B2]" />
                <p className="text-base font-medium text-gray-900">
                  Every property physically and digitally verified
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
              <div className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-base text-gray-400">Hidden fees & charges</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0891B2]" />
                <p className="text-base font-medium text-gray-900">
                  Transparent pricing, no surprises
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
              <div className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-base text-gray-400">
                  Fake photos & descriptions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0891B2]" />
                <p className="text-base font-medium text-gray-900">
                  Real photos from site visits
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
              <div className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-base text-gray-400">
                  Unresponsive landlords
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0891B2]" />
                <p className="text-base font-medium text-gray-900">
                  Checked and reliable property owners
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
              <div className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-base text-gray-400">
                  Weeks of back-and-forth
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0891B2]" />
                <p className="text-base font-medium text-gray-900">
                  Direct booking & communication
                </p>
              </div>
            </div>
          </div>
          <div
            id="our-story"
            className="bg-primary-50 w-full max-w-sm rounded-2xl border-2 border-[#0891B2] p-8 md:max-w-none"
          >
            <h3 className="text-primary-600 mb-3 text-left text-2xl font-semibold tracking-wide">
              THE STORY
            </h3>
            <h2 className="mb-6 text-left text-4xl font-bold">
              Why Domorang Exists
            </h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                &quot;I spent two exhausting years searching for a house in
                Abuja. I inspected more than five different properties, paid
                countless inspection fees for places that turned out not to be
                available, dealt with misleading photos, and encountered agents
                who stopped replying after several inspections.
              </p>
              <p>
                It was frustrating, draining, and honestly unfair.&quot; –{' '}
                <span className="font-bold">
                  A renter who knows the struggle firsthand
                </span>
              </p>
              <p className="pt-2">
                That experience is why Domorang was created. Renters deserve
                better. We&apos;re building the platform many of us wished we
                had back then, one where every listing is verified, prices are
                transparent, and communication is honest. This isn&apos;t about
                chasing commissions. It&apos;s about fixing a real problem that
                people face every day when trying to rent a home in Abuja.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7F7] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-16 text-center text-[43px] font-bold">
            Our Launch Roadmap
          </h1>

          {/* Desktop View - Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-[30px] right-0 left-0 h-1">
                <div
                  className="h-full bg-[#0891B2]"
                  style={{ width: '20%' }}
                ></div>
                <div className="absolute top-0 right-0 left-[20%] h-full bg-gray-300"></div>
              </div>

              {/* Timeline Items */}
              <div className="relative grid grid-cols-5 gap-4">
                {/* Phase 1 - Completed */}
                <div className="text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#0891B2] bg-white">
                    <Check className="h-8 w-8 stroke-[3] text-green-500" />
                  </div>
                  <h3 className="mb-2 text-base font-bold">
                    Phase 1: Waitlist & Community
                  </h3>
                  <p className="mb-2 text-sm text-gray-700">
                    Building our founding community
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">NOW</p>
                </div>

                {/* Phase 2 - Active */}
                <div className="text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#0891B2] bg-white">
                    <Zap className="h-8 w-8 fill-[#0891B2] text-[#0891B2]" />
                  </div>
                  <h3 className="mb-2 text-base font-bold">
                    Phase 2: Beta Testing
                  </h3>
                  <p className="mb-2 text-sm text-gray-700">
                    50 verified properties, 100+ beta users
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">
                    February 2026
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-gray-300 bg-white">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                  </div>
                  <h3 className="mb-2 text-base font-bold">
                    Phase 3: Public Launch
                  </h3>
                  <p className="mb-2 text-sm text-gray-700">
                    Full platform live in Abuja
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">
                    March 2026
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-gray-300 bg-white">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                  </div>
                  <h3 className="mb-2 text-base font-bold">
                    Phase 4: Mobile App
                  </h3>
                  <p className="mb-2 text-sm text-gray-700">
                    iOS and Android apps
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">
                    Q2 2026
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-gray-300 bg-white">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                  </div>
                  <h3 className="mb-2 text-base font-bold">
                    Phase 5: AI-Powered WhatsApp Assistant
                  </h3>
                  <p className="mb-2 text-sm text-gray-700">
                    Helping users find homes through simple chat conversations
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">
                    Q3 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="md:hidden">
            <div className="relative pl-12">
              {/* Vertical Line */}
              <div className="absolute top-0 bottom-0 left-[19px] w-1">
                <div className="h-24 bg-[#0891B2]"></div>
                <div className="absolute top-24 right-0 bottom-0 left-0 bg-gray-300"></div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Phase 1 */}
                <div className="relative">
                  <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0891B2] bg-white">
                    <Check className="h-5 w-5 stroke-[3] text-green-500" />
                  </div>
                  <h3 className="mb-1 text-lg font-bold">
                    Phase 1: Waitlist & Community
                  </h3>
                  <p className="mb-1 text-sm text-gray-700">
                    Building our founding community
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">NOW</p>
                </div>

                {/* Phase 2 */}
                <div className="relative">
                  <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0891B2] bg-white">
                    <Zap className="h-5 w-5 fill-[#0891B2] text-[#0891B2]" />
                  </div>
                  <h3 className="mb-1 text-lg font-bold">
                    Phase 2: Beta Testing
                  </h3>
                  <p className="mb-1 text-sm text-gray-700">
                    50 verified properties, 100+ beta users
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">
                    February 2026
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="relative">
                  <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border-4 border-gray-300 bg-white">
                    <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                  </div>
                  <h3 className="mb-1 text-lg font-bold">
                    Phase 3: Public Launch
                  </h3>
                  <p className="mb-1 text-sm text-gray-700">
                    Full platform live in Abuja
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">
                    March 2026
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="relative">
                  <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border-4 border-gray-300 bg-white">
                    <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                  </div>
                  <h3 className="mb-1 text-lg font-bold">
                    Phase 4: Mobile App
                  </h3>
                  <p className="mb-1 text-sm text-gray-700">
                    iOS and Android apps
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">
                    Q2 2026
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="relative">
                  <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border-4 border-gray-300 bg-white">
                    <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                  </div>
                  <h3 className="mb-1 text-lg font-bold">
                    Phase 5: AI-Powered WhatsApp Assistant
                  </h3>
                  <p className="mb-1 text-sm text-gray-700">
                    Helping users find homes through simple chat conversations
                  </p>
                  <p className="text-sm font-semibold text-[#0891B2]">
                    Q3 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0891B2] py-20 md:py-32" id="faqs">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="mb-12 text-center text-[43px] font-bold text-white">
            Got Questions? We&apos;ve Got Answers
          </h1>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  When will Domorang launch?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  We&apos;re targeting March 2026 for public launch in Abuja.
                  Beta testing begins in February with 100 early members.
                </p>
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  What makes Domorang different from other property sites?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  We verify every property before listing. Accurate photos,
                  transparent pricing, and no fake listings. Plus we are user
                  funded, not agent or landlord funded
                </p>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  Is joining the waitlist free?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  Yes! Completely free. No payments required. Just your email to
                  stay updated on our launch.
                </p>
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  How do you verify properties?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  Our team visits every property, takes real photos, verifies
                  ownership, confirms availability, and validates all pricing
                  details before listing.
                </p>
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group overflow-hidden rounded-xl bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <span className="text-lg font-medium">
                  Will Domorang expand beyond Abuja?
                </span>
                <Plus className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>
                  Yes! We&apos;re starting with Abuja to perfect our product,
                  then expanding to other states.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7F7] py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h1 className="mb-6 text-[43px] leading-tight font-bold">
              Ready to Find Your Dream Home in Abuja?
            </h1>

            <p className="mb-10 text-lg">
              Join <span className="font-semibold text-[#0891B2]">100+</span>{' '}
              people who are done with fake listings and hidden fees
            </p>

            {/* Benefits Grid - 2 columns on desktop, 1 on mobile */}
            <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-6 text-left md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                <p className="text-base">
                  Clear upfront information on rent and requirements
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                <p className="text-base">
                  First access when we launch in March 2026
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                <p className="text-base">
                  Direct chat support during your search
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                <p className="text-base">No spam, just important updates</p>
              </div>
            </div>

            {/* Email Form - Inline on desktop, stacked on mobile */}
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col gap-3 sm:relative sm:rounded-3xl sm:border-2 sm:border-[#0891B2] sm:bg-white sm:p-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border-2 border-[#0891B2] bg-white px-6 py-3 text-base focus:outline-none sm:rounded-lg sm:border-0 sm:pr-48"
                />
                <button className="w-full shrink-0 rounded-lg bg-[#0891B2] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0891B2]/90 sm:absolute sm:top-1/2 sm:right-2 sm:w-auto sm:-translate-y-1/2 sm:rounded-lg">
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary-650 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Domorang</h2>
              <p className="max-w-xs text-sm leading-relaxed text-white/90">
                Domorang is a proptech platform for people living in Abuja or
                planning to move to Abuja. We help you find real houses for rent
                and connect you with trusted agents and landlords.
              </p>
              <div className="pt-2">
                <p className="text-sm text-white/90">
                  Email:{' '}
                  <a
                    href="mailto:domorahomes@gmail.com"
                    className="text-white transition-colors hover:text-white/80"
                  >
                    domorahomes@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://twitter.com/domorang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span>X(twitter)</span>
                </a>
                <a
                  href="https://instagram.com/domorang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com/domorang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-white/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-white/90">
                Launching first in Abuja.
              </p>
              <p className="text-center text-sm text-white/90">
                © {new Date().getFullYear()} Domorang. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
