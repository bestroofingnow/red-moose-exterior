"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import { galleryImages } from "@/data/siteData";

export default function GalleryShowcase() {
  // Show first 3 gallery items on homepage
  const showcaseItems = galleryImages.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          title="See the Transformation"
          subtitle="Drag the slider to see the before and after results of our professional cleaning services."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.surface}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg group"
          >
            View Full Gallery
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
        </motion.div>
      </div>
    </section>
  );
}
