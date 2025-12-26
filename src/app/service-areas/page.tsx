import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/sections/CTA";
import { serviceAreas, siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Red Moose Exterior serves Charlotte, NC and surrounding areas including Huntersville, Matthews, Mint Hill, Pineville, and more. Professional pressure washing and soft washing services.",
};

const areaDetails = [
  {
    name: "Charlotte",
    description: "Our home base. We serve all Charlotte neighborhoods including Uptown, SouthPark, Myers Park, Dilworth, NoDa, Plaza Midwood, and more.",
    popular: true,
  },
  {
    name: "Huntersville",
    description: "Full service coverage for Huntersville residential and commercial properties.",
    popular: true,
  },
  {
    name: "Cornelius",
    description: "Lake Norman area coverage including Cornelius and surrounding communities.",
    popular: false,
  },
  {
    name: "Davidson",
    description: "Serving Davidson's historic downtown and residential areas.",
    popular: false,
  },
  {
    name: "Matthews",
    description: "Complete coverage for Matthews and the surrounding southeast Charlotte area.",
    popular: true,
  },
  {
    name: "Mint Hill",
    description: "Residential and commercial pressure washing services in Mint Hill.",
    popular: false,
  },
  {
    name: "Pineville",
    description: "Serving Pineville businesses and homeowners along the Carolina border.",
    popular: false,
  },
  {
    name: "Indian Trail",
    description: "Coverage for the growing Indian Trail community and Union County.",
    popular: false,
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Service Areas
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Red Moose Exterior proudly serves Charlotte, NC and the surrounding
            communities. Check if we service your area.
          </p>
        </div>
      </section>

      {/* Map Placeholder & Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Visual */}
            <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="text-center">
                <svg
                  className="w-24 h-24 text-[#C41E3A] mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Charlotte Metro Area
                </h3>
                <p className="text-gray-600 mb-4">
                  We serve a 30-mile radius around Charlotte, NC
                </p>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-sm text-gray-500 mb-2">
                    Not sure if we serve your area?
                  </p>
                  <a
                    href={"tel:" + siteConfig.phone}
                    className="text-[#C41E3A] font-semibold hover:underline"
                  >
                    Call us: {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Areas List */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Areas We Serve
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {areaDetails.map((area) => (
                  <div
                    key={area.name}
                    className={`p-4 rounded-xl border-2 ${
                      area.popular
                        ? "border-[#C41E3A] bg-[#C41E3A]/5"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900">{area.name}</h3>
                      {area.popular && (
                        <span className="px-2 py-0.5 bg-[#C41E3A] text-white text-xs rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Complete Service Area List"
            subtitle="All neighborhoods and communities we serve in the Charlotte metro area"
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <svg
                  className="w-5 h-5 text-[#C41E3A] mx-auto mb-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your area listed? We may still be able to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#C41E3A] text-white font-semibold rounded-lg hover:bg-[#9B1830] transition-all"
            >
              Request Service in Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Local Expertise Matters"
            subtitle="Charlotte's climate presents unique cleaning challenges we understand"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">
                Humidity & Mold Growth
              </h3>
              <p className="text-gray-600">
                Charlotte's humid climate promotes mold, mildew, and algae
                growth on exterior surfaces. We understand the specific
                challenges this creates and use the right techniques to address
                them.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">
                Seasonal Considerations
              </h3>
              <p className="text-gray-600">
                From pollen season in spring to fallen leaves in autumn, we know
                when Charlotte properties need the most attention and adjust our
                approach accordingly.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">
                Local Building Materials
              </h3>
              <p className="text-gray-600">
                We're familiar with the common building materials and
                construction styles in Charlotte, from historic Dilworth homes
                to modern SouthPark developments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">
                Community Reputation
              </h3>
              <p className="text-gray-600">
                As a local business, our reputation matters. We're invested in
                the Charlotte community and committed to delivering exceptional
                service to our neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
