"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Red-Moose-Pressure-Washing-Driveway.webp"
          alt="Professional pressure washing service transforming a driveway in Charlotte NC"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          fetchPriority="high"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">
                Now Serving Charlotte & Surrounding Areas
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ color: '#ffffff' }}
            >
              Professional Pressure Washing & Soft Washing
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
              Transform your property with Charlotte&apos;s most trusted exterior
              cleaning service. Residential & commercial properties expertly
              cleaned.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 justify-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm" style={{ color: "#ffffff" }}>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm" style={{ color: "#ffffff" }}>Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-400 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm" style={{ color: "#ffffff" }}>
                  {siteConfig.rating}/5 Rating
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C41E3A] font-bold rounded-lg hover:bg-[#9B1830] transition-all hover:scale-105 shadow-lg text-lg"
                style={{ color: "#ffffff" }}
              >
                Get Free Quote
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
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white font-bold rounded-lg hover:bg-white hover:text-[#C41E3A] transition-all text-lg"
                style={{ color: "#ffffff" }}
              >
                See Transformations
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              {
                number: `${siteConfig.yearsInBusiness}+`,
                label: "Years Experience",
              },
              {
                number: `${siteConfig.propertiesCleaned.toLocaleString()}+`,
                label: "Properties Cleaned",
              },
              {
                number: `${siteConfig.satisfactionRate}%`,
                label: "Satisfaction Rate",
              },
              { number: "24hr", label: "Response Time" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            {
              number: `${siteConfig.yearsInBusiness}+`,
              label: "Years",
            },
            {
              number: `${siteConfig.propertiesCleaned.toLocaleString()}+`,
              label: "Properties",
            },
            {
              number: `${siteConfig.satisfactionRate}%`,
              label: "Satisfaction",
            },
            { number: "24hr", label: "Response" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-gray-300 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
