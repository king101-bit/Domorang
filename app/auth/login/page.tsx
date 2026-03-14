'use client';
import { useActionState } from 'react';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { login } from '@/lib/actions';

export default function Signin() {
  const [state, action, pending] = useActionState(login, null);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-10 shadow-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight">
              Login to your account
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Welcome back! Sign in to continue exploring verified properties in
              Abuja.
            </p>
          </div>

          {/* Global error */}
          {state?.message && (
            <p className="bg-destructive/10 text-destructive mb-4 rounded-md px-4 py-2 text-sm">
              {state.message}
            </p>
          )}

          <form className="flex flex-col gap-5" action={action}>
            <Field>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
              />
              {state?.errors?.email && (
                <p className="text-destructive text-xs">
                  {state.errors.email[0]}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="password">
                Password <span className="text-destructive">*</span>
              </FieldLabel>
              <Input id="password" name="password" type="password" />
              {state?.errors?.password && (
                <p className="text-destructive text-xs">
                  {state.errors.password[0]}
                </p>
              )}
            </Field>
            <button
              type="submit"
              disabled={pending}
              className="bg-primary-600 hover:bg-primary/90 mt-3 w-full rounded-md py-2.5 text-sm font-medium text-white transition disabled:opacity-50"
            >
              {pending ? 'Logging in' : 'Log In'}
            </button>

            <div className="text-muted-foreground flex items-center gap-3 text-xs">
              <div className="bg-border h-px flex-1" />
              or
              <div className="bg-border h-px flex-1" />
            </div>

            <p className="text-muted-foreground text-center text-sm">
              Don&apos;t have an account?
              <a
                href="/auth/signup"
                className="text-primary-600 font-medium hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
