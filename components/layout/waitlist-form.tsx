'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { addToWaitlist } from '@/app/actions';
import { toast } from 'sonner';

type WaitlistFormProps = {
  variant?: 'hero' | 'default';
  className?: string;
};

export default function WaitlistForm({
  variant = 'default',
  className,
}: WaitlistFormProps) {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const result = await addToWaitlist(formData);

    if (result.success) {
      toast.success("You're on the list! Check your email 📧", {
        description: "We'll notify you when we launch",
      });
      const form = document.querySelector('form') as HTMLFormElement;
      form?.reset();
    } else {
      toast.error(result.error || 'Something went wrong', {
        description: 'Please try again',
      });
    }

    setLoading(false);
  }

  if (variant === 'hero') {
    return (
      <div className={className}>
        <form action={handleSubmit} className="w-full max-w-md">
          <div className="relative rounded-full border-2 border-[#0891B2] bg-white p-1.5">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={loading}
              className="w-full rounded-full bg-transparent py-3 pr-44 pl-3 text-base focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full bg-[#0891B2] px-6 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#0891B2]/90 disabled:opacity-50"
            >
              {loading ? 'Joining...' : 'Get Early Access'}
            </button>
          </div>
          {message && <p className="mt-3 text-center text-sm">{message}</p>}
        </form>
      </div>
    );
  }

  // Default variant
  return (
    <form action={handleSubmit} className="">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-3 sm:relative sm:rounded-3xl sm:border-2 sm:border-[#0891B2] sm:bg-white sm:p-2">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            disabled={loading}
            className="w-full rounded-lg border-2 border-[#0891B2] bg-white px-6 py-3 text-base focus:outline-none sm:rounded-lg sm:border-0 sm:pr-48"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full shrink-0 rounded-lg bg-[#0891B2] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0891B2]/90 sm:absolute sm:top-1/2 sm:right-2 sm:w-auto sm:-translate-y-1/2 sm:rounded-lg"
          >
            {loading ? 'Joining...' : 'Get Early Access'}
          </button>
        </div>
        {message && <p className="mt-3 text-center text-sm">{message}</p>}
      </div>
    </form>
  );
}
