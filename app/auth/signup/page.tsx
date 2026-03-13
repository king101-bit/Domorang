import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md rounded-xl bg-white p-10 shadow-lg border border-gray-100">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Find verified houses in Abuja with no hidden fees.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            
            {/* Name */}
            <Field>
              <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
              <Input
                id="full-name"
                placeholder="Mike Roch"
              />
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
              />
            </Field>

            {/* Password */}
            <FieldGroup className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="password">
                  Password <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                />
              </Field>
            </FieldGroup>

            {/* Phone + Role */}
            <FieldGroup className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="phone">
                  Phone
                  <span className="ml-1 text-xs text-muted-foreground">
                    (optional)
                  </span>
                </FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 0900000000"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="role">I am a...</FieldLabel>
                <Select defaultValue="renter">
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="renter">Renter</SelectItem>
                    <SelectItem value="agent">Agent</SelectItem>
                    <SelectItem value="landlord">Landlord</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>

            {/* CTA */}
            <button
              type="submit"
              className="mt-3 w-full rounded-md bg-primary-600 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              Create account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-border" />
              or
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Login link */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}