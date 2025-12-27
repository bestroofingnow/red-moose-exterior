import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/sections/CTA";
import { services, faqs, galleryImages } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Pressure Washing Services",
  description:
    "Professional pressure washing services in Charlotte, NC. Driveways, patios, decks, parking lots, and more. Industrial-grade equipment for superior results.",
};

export default function PressureWashingPage() {
  const pressureWashingImages = galleryImages.filter(
    (img) => img.service === "Pressure Washing"
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/Red-Moose-Pressure-Washing-Patio.webp"
            alt="Pressure Washing Service"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container-main">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#C41E3A] text-white text-sm font-medium rounded-full mb-4">
              Professional Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pressure Washing Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {services.pressureWashing.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?service=pressure-washing"
                className="inline-flex items-center px-8 py-4 bg-[#C41E3A] text-white font-bold rounded-lg hover:bg-[#9B1830] transition-all"
              >
                Get Free Quote
              </Link>
              <Link
                href="#residential"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section id="residential" className="py-20 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#C41E3A] font-semibold">For Homeowners</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Residential Pressure Washing
              </h2>
              <p className="text-gray-600 mb-6">
                Restore your home's curb appeal with professional pressure washing.
                Our high-powered equipment removes years of dirt, grime, mold, and
                mildew from any hard surface.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Surfaces We Clean:</h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {services.pressureWashing.residential.surfaces.map((surface) => (
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
                {services.pressureWashing.residential.benefits.map((benefit) => (
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
                href="/contact?service=pressure-washing&type=residential"
                className="inline-flex items-center px-6 py-3 bg-[#C41E3A] text-white font-semibold rounded-lg hover:bg-[#9B1830] transition-all"
              >
                Get Residential Quote
              </Link>
            </div>

            <div className="space-y-6">
              {pressureWashingImages.slice(0, 2).map((img) => (
                <BeforeAfterSlider
                  key={img.id}
                  beforeImage={img.before}
                  afterImage={img.after}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/Red-Moose-Parking-Deck1.png"
                  alt="Commercial Pressure Washing"
                  width={300}
                  height={400}
                  className="rounded-xl object-cover w-full h-64"
                />
                <Image
                  src="/images/Red-Moose-gas-station1.png"
                  alt="Gas Station Cleaning"
                  width={300}
                  height={400}
                  className="rounded-xl object-cover w-full h-64 mt-8"
                />
                <Image
                  src="/images/Red-Moose-Restaurant-Patio1.png"
                  alt="Restaurant Patio Cleaning"
                  width={300}
                  height={400}
                  className="rounded-xl object-cover w-full h-64"
                />
                <Image
                  src="/images/Red-Moose-stadium1.png"
                  alt="Stadium Cleaning"
                  width={300}
                  height={400}
                  className="rounded-xl object-cover w-full h-64 mt-8"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#C41E3A] font-semibold">
                For Business Owners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Commercial Pressure Washing
              </h2>
              <p className="text-gray-600 mb-6">
                Maintain a professional appearance for your business. Our commercial
                pressure washing services keep your property clean, safe, and
                welcoming for customers.
              </p>

              <h3 className="font-bold text-gray-900 mb-3">Surfaces We Clean:</h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {services.pressureWashing.commercial.surfaces.map((surface) => (
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
                {services.pressureWashing.commercial.benefits.map((benefit) => (
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
                href="/contact?service=pressure-washing&type=commercial"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
              >
                Get Commercial Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-main max-w-3xl">
          <SectionHeading
            title="Pressure Washing FAQs"
            subtitle="Common questions about our pressure washing services"
          />

          <div className="mt-12 space-y-4">
            {faqs.pressureWashing.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:bg-gray-100">
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
