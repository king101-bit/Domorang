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
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address', {
        description: 'Please enter a valid email',
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('email', email);

    const result = await addToWaitlist(formData);

    if (result.success) {
      toast.success("You're on the list! 🎉", {
        description: 'Check your email for confirmation',
      });
      setEmail('');
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
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="relative rounded-full border-2 border-[#0891B2] bg-white p-1.5">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
              className="w-full rounded-full bg-transparent py-3 pr-44 pl-6 text-base focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className={cn(
                'absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full bg-[#0891B2] px-6 py-2.5 text-base font-semibold text-white transition-all disabled:cursor-not-allowed',
                loading
                  ? 'cursor-wait opacity-75'
                  : 'hover:bg-[#0891B2]/90 active:scale-95'
              )}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Joining...
                </span>
              ) : (
                'Join Waitlist'
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Default variant
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-3 sm:relative sm:rounded-3xl sm:border-2 sm:border-[#0891B2] sm:bg-white sm:p-2">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            className="w-full rounded-lg border-2 border-[#0891B2] bg-white px-6 py-3 text-base focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-lg sm:border-0 sm:pr-48"
          />
          <button
            type="submit"
            disabled={loading}
            className={cn(
              'w-full shrink-0 rounded-lg bg-[#0891B2] px-8 py-3 text-base font-semibold text-white transition-all disabled:cursor-not-allowed sm:absolute sm:top-1/2 sm:right-2 sm:w-auto sm:-translate-y-1/2 sm:rounded-lg',
              loading
                ? 'cursor-wait opacity-75'
                : 'hover:bg-[#0891B2]/90 active:scale-95'
            )}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Joining...
              </span>
            ) : (
              'Join Waitlist'
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
