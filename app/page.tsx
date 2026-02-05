import Navbar from '@/components/layout/navbar';
import StatCard from '@/components/layout/StatCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
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
              <h1 className="text-5xl leading-tight font-bold">
                Find real houses in Abuja without{' '}
                <span className="text-primary">stress</span> or{' '}
                <span className="text-primary">hidden fees</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Domorang shows only verified, available houses with clear
                prices, so you stop wasting time, money, and energy.
              </p>

              <div className="relative flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-primary h-12 w-full rounded-xl sm:rounded-full sm:pr-44"
                />
                <Button
                  size="lg"
                  className="h-12 w-full rounded-xl px-6 sm:absolute sm:top-1/2 sm:right-1 sm:w-auto sm:-translate-y-1/2 sm:rounded-full"
                >
                  Get Early Access
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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
                Join <span className="text-primary font-semibold">100+</span>{' '}
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
            <h1 className="mb-6 text-5xl font-bold text-gray-900 transition-all duration-700 md:text-5xl">
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
                  className="border-primary flex items-start gap-4 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-200">
                      <Icon className="text-primary h-6 w-6"></Icon>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">{problem.title}</h3>
                    <p className="text-sm text-gray-600">
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
            <p className="text-center text-gray-600 text-sm mb-12">
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
};

export default page;
