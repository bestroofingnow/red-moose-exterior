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
          : "bg-gradient-to-b from-black/50 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
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
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Red-Moose-Isolated.png"
                  alt="Red Moose Exterior Cleaning"
                  width={60}
                  height={60}
                  className="h-12 md:h-14 w-auto object-contain"
                  priority
                />
                <div className="hidden sm:block">
                  <span className="font-bold text-lg md:text-xl text-white drop-shadow-lg">
                    Red Moose
                  </span>
                  <span className="block text-xs text-white/90 drop-shadow">
                    Exterior Cleaning
                  </span>
                </div>
              </div>
            )}
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#C41E3A]"
                    : "text-white hover:text-[#C41E3A] drop-shadow"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={"tel:" + siteConfig.phone}
              className={`font-semibold transition-colors ${
                isScrolled
                  ? "text-[#C41E3A]"
                  : "text-white drop-shadow-lg"
              }`}
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

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all origin-center ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all origin-center ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/Moose_Final_InstaStory_1_White.jpg"
                  alt="Red Moose Exterior Cleaning"
                  width={120}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-800 font-semibold py-2 hover:text-[#C41E3A] border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-4" />
              <a
                href={"tel:" + siteConfig.phone}
                className="block text-[#C41E3A] font-bold text-xl text-center"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-[#C41E3A] text-white text-center px-6 py-4 rounded-lg font-bold text-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
