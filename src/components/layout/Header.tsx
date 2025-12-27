"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActivePage = useCallback((href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
      role="banner"
    >
      <div className="container-main">
        <div
          className={`flex items-center justify-between ${
            isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
          } transition-all duration-300`}
        >
          {/* Logo - Same logo for both states */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Red Moose Exterior - Home"
          >
            <Image
              src="/images/red-moose-logo.png"
              alt="Red Moose Exterior Cleaning"
              width={40}
              height={40}
              className={`w-auto object-contain transition-all ${
                isScrolled ? "h-6 md:h-7" : "h-7 md:h-8"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:block"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-8" role="menubar">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = isActivePage(link.href);
                return (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      aria-current={isActive ? "page" : undefined}
                      className={`text-sm font-medium transition-colors hover:text-[#C41E3A] relative py-2 ${
                        isScrolled
                          ? isActive
                            ? "text-[#C41E3A]"
                            : "text-gray-700"
                          : "text-white"
                      }`}
                      style={isScrolled ? {} : { color: isActive ? '#C41E3A' : '#ffffff' }}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C41E3A] rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className={`text-sm font-semibold transition-colors ${
                isScrolled
                  ? "text-[#C41E3A]"
                  : "text-white"
              }`}
              style={isScrolled ? {} : { color: '#ffffff' }}
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
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
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
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl border-t"
          >
            <div className="container-main py-6">
              {/* Mobile Logo */}
              <div className="flex justify-center mb-6 pb-6 border-b border-gray-100">
                <Image
                  src="/images/red-moose-logo.png"
                  alt="Red Moose Exterior Cleaning"
                  width={40}
                  height={40}
                  className="h-6 w-auto object-contain"
                />
              </div>

              {/* Mobile Nav Links */}
              <nav aria-label="Mobile navigation">
                <ul className="space-y-1" role="menu">
                  {navLinks.map((link) => {
                    const isActive = isActivePage(link.href);
                    return (
                      <li key={link.href} role="none">
                        <Link
                          href={link.href}
                          role="menuitem"
                          aria-current={isActive ? "page" : undefined}
                          className={`block font-medium py-3 px-4 rounded-lg text-center transition-colors ${
                            isActive
                              ? "text-[#C41E3A] bg-[#C41E3A]/10"
                              : "text-gray-800 hover:text-[#C41E3A] hover:bg-gray-50"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 text-[#C41E3A] font-bold text-lg py-3"
                  aria-label={`Call us at ${siteConfig.phone}`}
                >
                  <svg
                    className="w-5 h-5"
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
