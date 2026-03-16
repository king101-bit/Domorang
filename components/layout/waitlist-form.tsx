'use client';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { addToWaitlist } from '@/lib/actions';
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

  const LoadingContent = (
    <span className="flex items-center justify-center gap-2">
      <Loader2 className="h-4 w-4 animate-spin" />
      Joining...
    </span>
  );

  if (variant === 'hero') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="border-primary-600 relative rounded-full border-2 bg-white p-1.5">
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
                'bg-primary-600 absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full px-6 py-2.5 text-base font-semibold text-white transition-all disabled:cursor-not-allowed',
                loading
                  ? 'cursor-wait opacity-75'
                  : 'hover:bg-primary-600/90 active:scale-95'
              )}
            >
              {loading ? LoadingContent : 'Join Waitlist'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto max-w-3xl">
        <div className="sm:border-primary-600 flex flex-col gap-3 sm:relative sm:rounded-3xl sm:border-2 sm:bg-white sm:p-2">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            className="border-primary-600 w-full rounded-lg border-2 bg-white px-6 py-3 text-base focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-lg sm:border-0 sm:pr-48"
          />
          <button
            type="submit"
            disabled={loading}
            className={cn(
              'bg-primary-600 w-full shrink-0 rounded-lg px-8 py-3 text-base font-semibold text-white transition-all disabled:cursor-not-allowed sm:absolute sm:top-1/2 sm:right-2 sm:w-auto sm:-translate-y-1/2 sm:rounded-lg',
              loading
                ? 'cursor-wait opacity-75'
                : 'hover:bg-primary-600/90 active:scale-95'
            )}
          >
            {loading ? LoadingContent : 'Join Waitlist'}
          </button>
        </div>
      </div>
    </form>
  );
}
