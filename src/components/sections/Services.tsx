"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Pressure Washing",
    description:
      "High-powered cleaning for tough surfaces like driveways, patios, decks, and parking lots. Remove years of grime instantly.",
    image: "/images/Red-Moose-Pressure-Washing-Driveway.webp",
    href: "/pressure-washing",
    features: [
      "Driveways & Sidewalks",
      "Patios & Decks",
      "Parking Lots",
      "Commercial Buildings",
    ],
  },
  {
    title: "Soft Washing",
    description:
      "Gentle, low-pressure cleaning perfect for delicate surfaces like siding, roofs, and painted surfaces. Safe and effective.",
    image: "/images/Red-Moose-Pressure-Washing-Siding.webp",
    href: "/soft-washing",
    features: ["House Siding", "Roof Cleaning", "Gutters", "Stucco & Vinyl"],
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <SectionHeading
          title="Our Services"
          subtitle="Professional exterior cleaning solutions for every surface. We use the right technique for the job."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute bottom-5 left-6 text-2xl sm:text-3xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-[#C41E3A] mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#C41E3A] font-semibold group/link hover:text-[#9B1830] transition-colors"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Separator */}
        <div className="mt-16 lg:mt-20 mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300 max-w-32" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
              <div className="w-3 h-3 bg-[#C41E3A] rounded-full" />
              <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300 max-w-32" />
          </div>
        </div>

        {/* Service Pathways */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-[#C41E3A] hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#C41E3A]/10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-7 h-7 text-[#C41E3A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  For Homeowners
                </h3>
                <p className="text-gray-500">Residential Services</p>
              </div>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Restore your home&apos;s curb appeal with professional cleaning.
              Driveways, patios, siding, roofs, and more.
            </p>
            <Link
              href="/contact?type=residential"
              className="inline-flex items-center text-[#C41E3A] font-semibold hover:text-[#9B1830] transition-colors group/res"
            >
              Get Residential Quote
              <svg className="w-4 h-4 ml-2 group-hover/res:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-gray-800 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gray-800/10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-7 h-7 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  For Business Owners
                </h3>
                <p className="text-gray-500">Commercial Services</p>
              </div>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Maintain a professional appearance for your business. Parking
              lots, storefronts, restaurants, and more.
            </p>
            <Link
              href="/contact?type=commercial"
              className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-900 transition-colors group/com"
            >
              Get Commercial Quote
              <svg className="w-4 h-4 ml-2 group-hover/com:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
