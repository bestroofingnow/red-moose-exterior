import { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn about our simple 4-step process for professional pressure washing and soft washing services in Charlotte, NC. Free estimates, professional service, guaranteed satisfaction.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gray-900">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Getting your property professionally cleaned is easy. Here's our
            simple process from start to finish.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Detailed Steps */}
      <section className="py-20 bg-white">
        <div className="container-main max-w-4xl">
          <SectionHeading
            title="What to Expect"
            subtitle="A detailed look at each step of our service process"
          />

          <div className="mt-12 space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C41E3A] text-white rounded-full font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Consultation
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Contact us via phone, form, or email
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    We assess your property and needs
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Receive a detailed, no-obligation quote
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Same-day quotes available
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-3">
                  What We Evaluate:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Square footage and surface types</li>
                  <li>• Current condition and staining</li>
                  <li>• Best cleaning method (pressure vs. soft wash)</li>
                  <li>• Access and logistics</li>
                  <li>• Any special considerations</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-100 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-3">
                  Before We Arrive:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Move vehicles from driveway</li>
                  <li>• Secure outdoor furniture if needed</li>
                  <li>• Close windows near work area</li>
                  <li>• Ensure water access is available</li>
                  <li>• Pets should be kept inside</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C41E3A] text-white rounded-full font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pre-Service Preparation
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    We confirm your appointment
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Send you preparation checklist
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Answer any last questions
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C41E3A] text-white rounded-full font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Cleaning Process
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Our team arrives on time with all equipment
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    We protect landscaping and sensitive areas
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Professional-grade equipment used
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Eco-friendly solutions when applicable
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-3">
                  Our Safety Measures:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Proper PPE worn at all times</li>
                  <li>• Equipment safety checks</li>
                  <li>• Environmental precautions</li>
                  <li>• Clear work area signage</li>
                  <li>• Liability insurance coverage</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-100 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-3">
                  Maintenance Tips:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Keep drains clear of debris</li>
                  <li>• Address stains quickly</li>
                  <li>• Schedule annual maintenance</li>
                  <li>• Consider sealing after cleaning</li>
                  <li>• Trim vegetation near surfaces</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C41E3A] text-white rounded-full font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Post-Service Care
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Walk-through with our team
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verify your satisfaction
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Provide maintenance recommendations
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Answer any follow-up questions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container-main max-w-4xl">
          <SectionHeading
            title="Pressure Washing vs. Soft Washing"
            subtitle="Understanding when to use each method"
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Pressure Washing</th>
                  <th className="px-6 py-4 text-center">Soft Washing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Pressure Level</td>
                  <td className="px-6 py-4 text-center">2,500-4,000 PSI</td>
                  <td className="px-6 py-4 text-center">Under 1,000 PSI</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Best For</td>
                  <td className="px-6 py-4 text-center">Concrete, brick, stone</td>
                  <td className="px-6 py-4 text-center">Siding, roofs, wood</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Cleaning Agent</td>
                  <td className="px-6 py-4 text-center">Water pressure</td>
                  <td className="px-6 py-4 text-center">Specialized solutions</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Result Duration</td>
                  <td className="px-6 py-4 text-center">6-12 months</td>
                  <td className="px-6 py-4 text-center">2-3 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Surface Safety</td>
                  <td className="px-6 py-4 text-center">Hard surfaces only</td>
                  <td className="px-6 py-4 text-center">All surfaces</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
