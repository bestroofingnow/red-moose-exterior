"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/sections/CTA";
import { galleryImages } from "@/data/siteData";

type FilterType = "all" | "Pressure Washing" | "Soft Washing";
type PropertyFilter = "all" | "residential" | "commercial";

export default function GalleryPage() {
  const [serviceFilter, setServiceFilter] = useState<FilterType>("all");
  const [propertyFilter, setPropertyFilter] = useState<PropertyFilter>("all");

  const filteredImages = galleryImages.filter((img) => {
    const matchesService =
      serviceFilter === "all" || img.service === serviceFilter;
    const matchesProperty =
      propertyFilter === "all" || img.propertyType === propertyFilter;
    return matchesService && matchesProperty;
  });

  const surfaces = [...new Set(galleryImages.map((img) => img.surface))];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gray-900">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Before & After Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the transformative results of our professional cleaning
            services. Drag the slider to compare before and after.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Service Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Service:</span>
              <div className="flex bg-white rounded-lg p-1 shadow-sm">
                {(["all", "Pressure Washing", "Soft Washing"] as FilterType[]).map(
                  (filter) => (
                    <button
                      key={filter}
                      onClick={() => setServiceFilter(filter)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        serviceFilter === filter
                          ? "bg-[#C41E3A] text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {filter === "all" ? "All Services" : filter}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Property Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Property:</span>
              <div className="flex bg-white rounded-lg p-1 shadow-sm">
                {(["all", "residential", "commercial"] as PropertyFilter[]).map(
                  (filter) => (
                    <button
                      key={filter}
                      onClick={() => setPropertyFilter(filter)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${
                        propertyFilter === filter
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {filter === "all" ? "All" : filter}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing {filteredImages.length} of {galleryImages.length} projects
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filteredImages.length > 0 ? (
              <motion.div
                key={`${serviceFilter}-${propertyFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredImages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <BeforeAfterSlider
                      beforeImage={item.before}
                      afterImage={item.after}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">
                        {item.description}
                      </p>
                      <div className="flex gap-2">
                        <span className="inline-block px-2 py-1 bg-[#C41E3A]/10 text-[#C41E3A] rounded text-xs font-medium">
                          {item.service}
                        </span>
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium capitalize">
                          {item.propertyType}
                        </span>
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          {item.surface}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg">
                  No projects found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setServiceFilter("all");
                    setPropertyFilter("all");
                  }}
                  className="mt-4 text-[#C41E3A] font-medium hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#C41E3A]">
                {galleryImages.length}+
              </div>
              <div className="text-gray-600 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C41E3A]">
                {surfaces.length}
              </div>
              <div className="text-gray-600 mt-1">Surface Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C41E3A]">100%</div>
              <div className="text-gray-600 mt-1">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C41E3A]">24hr</div>
              <div className="text-gray-600 mt-1">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
