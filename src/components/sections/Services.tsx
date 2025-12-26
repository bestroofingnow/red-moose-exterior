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
    features: ["Driveways & Sidewalks", "Patios & Decks", "Parking Lots", "Commercial Buildings"],
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Professional exterior cleaning solutions for every surface. We use the right technique for the job."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-[#C41E3A] mr-2"
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
                  className="inline-flex items-center text-[#C41E3A] font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
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

        {/* Service Pathways */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#C41E3A]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#C41E3A]/10 rounded-full flex items-center justify-center">
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
                <h3 className="text-xl font-bold text-gray-900">For Homeowners</h3>
                <p className="text-gray-500">Residential Services</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Restore your home's curb appeal with professional cleaning.
              Driveways, patios, siding, roofs, and more.
            </p>
            <Link
              href="/contact?type=residential"
              className="inline-flex items-center text-[#C41E3A] font-semibold"
            >
              Get Residential Quote →
            </Link>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gray-800/10 rounded-full flex items-center justify-center">
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
            <p className="text-gray-600 mb-4">
              Maintain a professional appearance for your business. Parking lots,
              storefronts, restaurants, and more.
            </p>
            <Link
              href="/contact?type=commercial"
              className="inline-flex items-center text-gray-800 font-semibold"
            >
              Get Commercial Quote →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
