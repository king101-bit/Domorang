import { Mail } from 'lucide-react';

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-10 text-center shadow-lg">
        {/* Icon */}
        <div className="bg-primary-100 text-primary-600 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
          <Mail className="h-8 w-8" />
        </div>

        {/* Header */}
        <h1 className="mb-2 text-2xl font-semibold text-gray-900">
          Verify Your Email
        </h1>

        {/* Description */}
        <p className="mb-6 text-sm text-gray-600">
          We&apos;ve sent a confirmation email to your inbox. Click the link in
          the email to verify your address.
        </p>

        {/* Resend Email Button
        <Button
          variant="outline"
          className="w-full text-primary-600 border-primary-600 hover:bg-primary-50"
          type="button"
        >
          Resend Email
        </Button> */}

        {/* Redirect hint */}
        <p className="mt-4 text-xs text-gray-500">
          Didn’t receive an email? Check your spam folder or try resending.
        </p>
      </div>
    </div>
  );
}
