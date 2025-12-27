import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTA from "@/components/sections/CTA";
import { services, faqs, galleryImages } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Soft Washing Services Charlotte NC | Siding, Roof & Exterior Cleaning",
  description:
    "Professional soft washing services in Charlotte, NC. Gentle, safe cleaning for siding, roofs, stucco, and delicate surfaces. Long-lasting results. Free estimates. Call 704-285-1467.",
  openGraph: {
    title: "Soft Washing Services | Red Moose Exterior",
    description: "Professional soft washing in Charlotte NC. Safe cleaning for siding, roofs & more.",
    images: ["/images/Red-Moose-Pressure-Washing-Siding.webp"],
  },
};

export default function SoftWashingPage() {
  const softWashingImages = galleryImages.filter(
    (img) => img.service === "Soft Washing"
  );

  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/Red-Moose-Pressure-Washing-Siding.webp"
            alt="Professional soft washing service for home exteriors in Charlotte NC"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative container-main">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#C41E3A] text-white text-sm font-medium rounded-full mb-4">
              Gentle & Effective
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Soft Washing Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {services.softWashing.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?service=soft-washing"
                className="inline-flex items-center px-8 py-4 bg-[#C41E3A] text-white font-bold rounded-lg hover:bg-[#9B1830] transition-all"
              >
                Get Free Quote
              </Link>
              <Link
                href="#why-soft-wash"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Why Soft Wash?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Soft Washing Section */}
      <section id="why-soft-wash" className="py-20 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Soft Washing?
              </h2>
              <p className="text-gray-600 mb-6">
                Not all surfaces can handle high-pressure cleaning. Soft washing
                uses specialized, low-pressure techniques combined with
                eco-friendly cleaning solutions to safely clean delicate surfaces
                without risk of damage.
              </p>

              <div className="bg-[#C41E3A]/5 border-l-4 border-[#C41E3A] p-6 rounded-r-xl mb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Surfaces That Need Soft Washing:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vinyl, aluminum, and wood siding</li>
                  <li>• Asphalt roof shingles</li>
                  <li>• Stucco and EIFS</li>
                  <li>• Painted surfaces</li>
                  <li>• Cedar shakes and shingles</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">
                  Soft Wash vs. Pressure Wash
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="font-semibold text-[#C41E3A]">Soft Wash</p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Under 1,000 PSI</li>
                      <li>• Cleaning solutions</li>
                      <li>• Kills mold at root</li>
                      <li>• Results last 2-3 years</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Pressure Wash</p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• 2,500-4,000 PSI</li>
                      <li>• Water pressure only</li>
                      <li>• Surface cleaning</li>
                      <li>• Results vary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/Red-Moose-Pressure-Washing-Siding.webp"
                alt="Soft washing removes algae and mold from home siding"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {softWashingImages.length > 0 ? (
                softWashingImages.map((img) => (
                  <BeforeAfterSlider
                    key={img.id}
                    beforeImage={img.before}
                    afterImage={img.after}
                  />
                ))
              ) : (
                <Image
                  src="/images/Red-Moose-Pressure-Washing-Siding.webp"
                  alt="Soft Washing Result"
                  width={600}
                  height={400}
                  className="rounded-2xl"
                />
              )}
            </div>

            <div>
              <span className="text-[#C41E3A] font-semibold">For Homeowners</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Residential Soft Washing
              </h2>
              <p className="text-gray-600 mb-6">
                Protect your home's exterior with gentle, effective soft washing.
                Our process safely removes algae, mold, mildew, and dirt without
                damaging your siding or roof.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Surfaces We Clean:</h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {services.softWashing.residential.surfaces.map((surface) => (
                  <li key={surface} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {surface}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-gray-900 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 mb-6">
                {services.softWashing.residential.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact?service=soft-washing&type=residential"
                className="inline-flex items-center px-6 py-3 bg-[#C41E3A] text-white font-semibold rounded-lg hover:bg-[#9B1830] transition-all"
              >
                Get Residential Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#C41E3A] font-semibold">
                For Business Owners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Commercial Soft Washing
              </h2>
              <p className="text-gray-600 mb-6">
                Maintain your commercial building's appearance with safe, effective
                soft washing. Ideal for multi-story buildings, historic properties,
                and delicate architectural finishes.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Surfaces We Clean:</h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {services.softWashing.commercial.surfaces.map((surface) => (
                  <li key={surface} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#C41E3A] mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {surface}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-gray-900 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 mb-6">
                {services.softWashing.commercial.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact?service=soft-washing&type=commercial"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
              >
                Get Commercial Quote
              </Link>
            </div>

            <div>
              <Image
                src="/images/Pressure-Washing-7-2.webp"
                alt="Commercial building soft washing in Charlotte NC"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-main max-w-3xl">
          <SectionHeading
            title="Soft Washing FAQs"
            subtitle="Common questions about our soft washing services"
          />

          <div className="mt-12 space-y-4">
            {faqs.softWashing.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
