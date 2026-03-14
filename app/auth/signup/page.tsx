'use client';
import { useActionState } from 'react';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { signup } from '@/lib/actions';

export default function Signup() {
  const [state, action, pending] = useActionState(signup, null);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-10 shadow-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight">
              Create your account
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Find verified houses in Abuja with no hidden fees.
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
              <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
              <Input id="full-name" name="full_name" placeholder="Mike Rotch" />
              {state?.errors?.full_name && (
                <p className="text-destructive text-xs">
                  {state.errors.full_name[0]}
                </p>
              )}
            </Field>

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

            <FieldGroup className="grid grid-cols-2 gap-4">
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

              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirm-password"
                  name="confirm_password"
                  type="password"
                />
                {state?.errors?.confirm_password && (
                  <p className="text-destructive text-xs">
                    {state.errors.confirm_password[0]}
                  </p>
                )}
              </Field>
            </FieldGroup>

            <FieldGroup className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="phone">
                  Phone
                  <span className="text-muted-foreground ml-1 text-xs">
                    (optional)
                  </span>
                </FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234 0900000000"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="role">I am a...</FieldLabel>
                <Select defaultValue="renter" name="role">
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="renter">Renter</SelectItem>
                    <SelectItem value="agent">Agent</SelectItem>
                    <SelectItem value="landlord">Landlord</SelectItem>
                  </SelectContent>
                </Select>
                {state?.errors?.role && (
                  <p className="text-destructive text-xs">
                    {state.errors.role[0]}
                  </p>
                )}
              </Field>
            </FieldGroup>

            <button
              type="submit"
              disabled={pending}
              className="bg-primary-600 hover:bg-primary/90 mt-3 w-full rounded-md py-2.5 text-sm font-medium text-white transition disabled:opacity-50"
            >
              {pending ? 'Creating account...' : 'Create account'}
            </button>

            <div className="text-muted-foreground flex items-center gap-3 text-xs">
              <div className="bg-border h-px flex-1" />
              or
              <div className="bg-border h-px flex-1" />
            </div>

            <p className="text-muted-foreground text-center text-sm">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-primary-600 font-medium hover:underline"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
