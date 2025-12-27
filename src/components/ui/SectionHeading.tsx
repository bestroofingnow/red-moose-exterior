"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 sm:mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      {/* Decorative accent line */}
      <div className={`flex items-center gap-3 mb-5 sm:mb-6 ${centered ? "justify-center" : ""}`}>
        <div className={`h-1 w-12 rounded-full ${light ? "bg-white/40" : "bg-gray-200"}`} />
        <div className="h-1.5 w-16 rounded-full bg-[#C41E3A]" />
        <div className={`h-1 w-12 rounded-full ${light ? "bg-white/40" : "bg-gray-200"}`} />
      </div>

      {subtitle && (
        <p
          className={`text-lg sm:text-xl max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
