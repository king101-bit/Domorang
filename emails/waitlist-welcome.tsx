import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface WaitlistWelcomeEmailProps {
  email: string;
}

export default function WaitlistWelcomeEmail({
  email,
}: WaitlistWelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Domorang - You&apos;re on the waitlist!</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-10 max-w-2xl rounded-lg bg-white p-8">
            {/* Header */}
            <Section className="text-center">
              <Heading className="mb-2 text-3xl font-bold text-[#0891B2]">
                Domorang
              </Heading>
              <Text className="text-sm text-gray-600">
                Find real houses in Abuja without stress
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="my-8">
              <Heading className="mb-4 text-2xl font-semibold text-gray-900">
                Welcome to the waitlist! 🎉
              </Heading>

              <Text className="mb-4 text-base leading-relaxed text-gray-700">
                Thanks for joining, <strong>{email}</strong>! You&apos;re now on
                the exclusive waitlist for Domorang.
              </Text>

              <Text className="mb-4 text-base leading-relaxed text-gray-700">
                We&apos;re building something special - a platform where you can
                find verified, available houses in Abuja with clear prices. No
                more hidden fees, no more wasted time.
              </Text>

              {/* Features */}
              <Section className="my-6 rounded-lg bg-[#E0F2FE] p-6">
                <Heading className="mb-4 text-lg font-semibold text-gray-900">
                  What you&apos;ll get:
                </Heading>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#0891B2]">✓</span>
                    <Text className="m-0 text-gray-700">
                      <strong>Verified Listings</strong> - Only real, available
                      properties
                    </Text>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#0891B2]">✓</span>
                    <Text className="m-0 text-gray-700">
                      <strong>Clear Pricing</strong> - No hidden fees or
                      surprises
                    </Text>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#0891B2]">✓</span>
                    <Text className="m-0 text-gray-700">
                      <strong>Secured Payments</strong> - Safe and transparent
                      transactions
                    </Text>
                  </div>
                </div>
              </Section>

              <Text className="mb-4 text-base leading-relaxed text-gray-700">
                We&apos;ll send you early access as soon as we launch. In the
                meantime, stay tuned for updates!
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-6 text-center">
              <Text className="mb-2 text-sm text-gray-600">
                Questions? Reply to this email - we&apos;d love to hear from
                you!
              </Text>

              <Text className="text-xs text-gray-500">
                © {new Date().getFullYear()} Domorang. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
