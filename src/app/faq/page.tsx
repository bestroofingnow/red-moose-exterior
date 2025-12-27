"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/sections/CTA";
import { faqs } from "@/data/siteData";

type Category = "all" | "pressureWashing" | "softWashing" | "general";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const allFaqs = [
    ...faqs.pressureWashing.map((faq) => ({
      ...faq,
      category: "pressureWashing" as const,
    })),
    ...faqs.softWashing.map((faq) => ({ ...faq, category: "softWashing" as const })),
    ...faqs.general.map((faq) => ({ ...faq, category: "general" as const })),
  ];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "pressureWashing", label: "Pressure Washing" },
    { id: "softWashing", label: "Soft Washing" },
    { id: "general", label: "General" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gray-900">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our pressure washing and soft
            washing services.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="container-main max-w-4xl">
          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-[#C41E3A] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="container-main max-w-4xl">
          <div className="mb-6 text-gray-600">
            Showing {filteredFaqs.length} of {allFaqs.length} questions
          </div>

          <AnimatePresence mode="wait">
            {filteredFaqs.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredFaqs.map((faq, index) => {
                  const key = `${faq.category}-${index}`;
                  const isOpen = openIndex === key;

                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-50 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded ${
                              faq.category === "pressureWashing"
                                ? "bg-blue-100 text-blue-700"
                                : faq.category === "softWashing"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {faq.category === "pressureWashing"
                              ? "Pressure"
                              : faq.category === "softWashing"
                              ? "Soft Wash"
                              : "General"}
                          </span>
                          <span className="font-semibold text-gray-900">
                            {faq.question}
                          </span>
                        </div>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
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
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-6 text-gray-600 border-t border-gray-200 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg mb-4">
                  No questions found matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="text-[#C41E3A] font-medium hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container-main max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#C41E3A] text-white font-semibold rounded-lg hover:bg-[#9B1830] transition-all"
            >
              Contact Us
            </a>
            <a
              href="tel:704-285-1467"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-[#C41E3A] transition-all"
            >
              Call 704-285-1467
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
