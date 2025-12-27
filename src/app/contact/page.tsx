"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig, buildingTypes } from "@/data/siteData";

type FormData = {
  service: string;
  propertyType: string;
  buildingType: string;
  surfaces: string[];
  name: string;
  email: string;
  phone: string;
  address: string;
  timeline: string;
  message: string;
};

const initialFormData: FormData = {
  service: "",
  propertyType: "",
  buildingType: "",
  surfaces: [],
  name: "",
  email: "",
  phone: "",
  address: "",
  timeline: "",
  message: "",
};

const surfaces = {
  pressureWashing: [
    "Driveway",
    "Patio/Deck",
    "Sidewalk",
    "Fence",
    "Parking Lot",
    "Building Exterior",
    "Other",
  ],
  softWashing: [
    "House Siding",
    "Roof",
    "Gutters",
    "Stucco",
    "Painted Surfaces",
    "Building Facade",
    "Other",
  ],
};

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSurface = (surface: string) => {
    setFormData((prev) => ({
      ...prev,
      surfaces: prev.surfaces.includes(surface)
        ? prev.surfaces.filter((s) => s !== surface)
        : [...prev.surfaces, surface],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.service !== "";
      case 2:
        return formData.propertyType !== "";
      case 3:
        return formData.surfaces.length > 0;
      case 4:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50">
        <div className="container-main max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Request!
          </h1>
          <p className="text-gray-600 mb-6">
            We've received your quote request and will get back to you within 24
            hours. In the meantime, feel free to give us a call if you have any
            urgent questions.
          </p>
          <a
            href={"tel:" + siteConfig.phone}
            className="inline-flex items-center px-6 py-3 bg-[#C41E3A] text-white font-semibold rounded-lg"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gray-900">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your property and we'll provide a detailed estimate
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container-main max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Step {step} of {totalSteps}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round((step / totalSteps) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <motion.div
                    className="h-2 bg-[#C41E3A] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      What service are you interested in?
                    </h2>
                    <div className="grid gap-4">
                      {[
                        {
                          id: "pressure-washing",
                          title: "Pressure Washing",
                          desc: "High-powered cleaning for driveways, patios, decks, and hard surfaces",
                        },
                        {
                          id: "soft-washing",
                          title: "Soft Washing",
                          desc: "Gentle cleaning for siding, roofs, and delicate surfaces",
                        },
                        {
                          id: "both",
                          title: "Both Services",
                          desc: "Complete exterior cleaning for your entire property",
                        },
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => updateFormData("service", option.id)}
                          className={`p-6 rounded-xl border-2 text-left transition-all ${
                            formData.service === option.id
                              ? "border-[#C41E3A] bg-[#C41E3A]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900">
                                {option.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {option.desc}
                              </p>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.service === option.id
                                  ? "border-[#C41E3A] bg-[#C41E3A]"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.service === option.id && (
                                <svg
                                  className="w-4 h-4 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Property Type */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      What type of property do you have?
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: "residential", title: "Residential", icon: "home" },
                        { id: "commercial", title: "Commercial", icon: "building" },
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => updateFormData("propertyType", option.id)}
                          className={`p-6 rounded-xl border-2 text-center transition-all ${
                            formData.propertyType === option.id
                              ? "border-[#C41E3A] bg-[#C41E3A]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <svg
                            className={`w-12 h-12 mx-auto mb-3 ${
                              formData.propertyType === option.id
                                ? "text-[#C41E3A]"
                                : "text-gray-400"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {option.icon === "home" ? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            )}
                          </svg>
                          <h3 className="font-bold text-gray-900">
                            {option.title}
                          </h3>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Surfaces */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      What surfaces need cleaning?
                    </h2>
                    <p className="text-gray-600">Select all that apply</p>
                    <div className="grid grid-cols-2 gap-3">
                      {(formData.service === "soft-washing"
                        ? surfaces.softWashing
                        : formData.service === "both"
                        ? [...surfaces.pressureWashing, ...surfaces.softWashing]
                        : surfaces.pressureWashing
                      ).map((surface) => (
                        <button
                          key={surface}
                          onClick={() => toggleSurface(surface)}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            formData.surfaces.includes(surface)
                              ? "border-[#C41E3A] bg-[#C41E3A]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                formData.surfaces.includes(surface)
                                  ? "border-[#C41E3A] bg-[#C41E3A]"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.surfaces.includes(surface) && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="font-medium text-gray-900">
                              {surface}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Info */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      Your Contact Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              updateFormData("email", e.target.value)
                            }
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              updateFormData("phone", e.target.value)
                            }
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                            placeholder="(704) 555-0123"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Property Address
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) =>
                            updateFormData("address", e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                          placeholder="123 Main St, Charlotte, NC"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) =>
                            updateFormData("timeline", e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                        >
                          <option value="">Select timeline...</option>
                          <option value="asap">ASAP</option>
                          <option value="this-week">This week</option>
                          <option value="next-week">Next week</option>
                          <option value="this-month">This month</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Details
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) =>
                            updateFormData("message", e.target.value)
                          }
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                          placeholder="Any special concerns or requests?"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    step === 1
                      ? "opacity-0 pointer-events-none"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Back
                </button>
                {step < totalSteps ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className={`px-8 py-3 rounded-lg font-semibold ${
                      canProceed()
                        ? "bg-[#C41E3A] text-white hover:bg-[#9B1830]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                    className={`px-8 py-3 rounded-lg font-semibold ${
                      canProceed() && !isSubmitting
                        ? "bg-[#C41E3A] text-white hover:bg-[#9B1830]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-32">
                <h3 className="font-bold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#C41E3A]/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#C41E3A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call us</p>
                      <a
                        href={"tel:" + siteConfig.phone}
                        className="font-semibold text-[#C41E3A]"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#C41E3A]/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#C41E3A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Hours</p>
                      <p className="font-medium text-gray-900">
                        {siteConfig.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-6" />

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Free, no-obligation quote
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Response within 24 hours
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Licensed & insured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
