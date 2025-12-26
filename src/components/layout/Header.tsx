"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-b from-black/70 to-transparent py-4"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="Red Moose Exterior - Home"
          >
            {isScrolled ? (
              <Image
                src="/images/Moose_Final_InstaStory_1_White.jpg"
                alt="Red Moose Exterior Cleaning"
                width={140}
                height={60}
                className="h-12 md:h-14 w-auto object-contain"
                priority
              />
            ) : (
              <div className="flex items-center gap-3">
                <Image
                  src="/images/Red-Moose-Isolated.png"
                  alt="Red Moose Exterior Cleaning"
                  width={60}
                  height={60}
                  className="h-12 md:h-14 w-auto object-contain"
                  priority
                />
                <div className="hidden sm:block">
                  <span className="font-bold text-lg md:text-xl text-white drop-shadow-lg block">
                    Red Moose
                  </span>
                  <span className="text-xs text-white/90 drop-shadow block">
                    Exterior Cleaning
                  </span>
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center list-none m-0 p-0" role="menubar">
            {navLinks.slice(0, 6).map((link, index) => (
              <li key={link.href} role="none" style={{ marginLeft: index === 0 ? 0 : '2rem' }}>
                <Link
                  href={link.href}
                  role="menuitem"
                  className={`font-medium transition-colors block py-2 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#C41E3A]"
                      : "text-white hover:text-[#C41E3A] drop-shadow-md"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? "text-[#C41E3A]"
                  : "text-white drop-shadow-lg"
              }`}
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="bg-[#C41E3A] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#9B1830] transition-all hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C41E3A]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded transition-all origin-center ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 rounded transition-all ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 rounded transition-all origin-center ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg border-t"
          >
            <div className="px-4 py-6">
              {/* Logo in mobile menu */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/Moose_Final_InstaStory_1_White.jpg"
                  alt="Red Moose Exterior Cleaning"
                  width={140}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
              </div>

              {/* Mobile Nav Links */}
              <ul className="space-y-1 list-none m-0 p-0" role="menu">
                {navLinks.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-800 font-semibold py-3 px-4 hover:text-[#C41E3A] hover:bg-gray-50 rounded-lg text-center transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 text-[#C41E3A] font-bold text-xl py-3"
                  aria-label={`Call us at ${siteConfig.phone}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-[#C41E3A] text-white text-center px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#9B1830] transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
