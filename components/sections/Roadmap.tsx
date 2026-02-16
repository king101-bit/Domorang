import { Check, Zap } from 'lucide-react';

export default function Roadmap() {
  return (
    <>
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
    </>
  );
}
