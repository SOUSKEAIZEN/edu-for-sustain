"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sdgs", label: "SDG Explorer" },
  { href: "/learn", label: "Learn" },
  { href: "/take-action", label: "Take Action" },
  { href: "/research", label: "Research" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(20);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer upon navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#172D49]/95 shadow-md py-3 border-b border-[#F4EBDD]/10"
            : "bg-[#172D49] py-3.5 sm:py-4 md:py-5 border-b border-[#F4EBDD]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F47C68] rounded-lg p-1"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#F47C68] to-[#E46A55] flex items-center justify-center text-white shadow-sm shrink-0">
                <Globe className="w-5 h-5 text-[#FAF5EE]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#F4EBDD] flex items-center gap-1 leading-none">
                  ECOLEARN
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F47C68] inline-block" />
                </span>
                <span className="font-display text-[9px] sm:text-[10px] uppercase tracking-wider text-[#DDE8DE] mt-0.5">
                  Education for Sustainability
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#263B52]/60 px-3 py-1.5 rounded-full border border-[#F4EBDD]/15">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#172D49] bg-[#F4EBDD] font-semibold shadow-sm"
                        : "text-[#FAF5EE]/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/sdgs"
                className="inline-flex items-center gap-1.5 bg-[#F47C68] hover:bg-[#E46A55] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-display font-medium shadow-sm transition-transform hover:-translate-y-0.5 min-h-[40px]"
              >
                <span>Explore SDGs</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger & Quick Pill */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/sdgs"
                className="md:hidden text-xs bg-[#F47C68] text-white px-3 py-1.5 rounded-full font-display font-medium"
              >
                SDGs
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-[#F4EBDD] hover:bg-[#263B52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F47C68] min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Drawer with Animated Sliding Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#172D49] text-white overflow-y-auto animate-fadeIn">
          {/* Mobile Drawer Top Bar */}
          <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#F4EBDD]/10">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F47C68] to-[#E46A55] flex items-center justify-center text-white">
                <Globe className="w-5 h-5 text-[#FAF5EE]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#F4EBDD]">
                ECOLEARN
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-white hover:bg-[#263B52] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-5 space-y-2 flex-grow">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-colors min-h-[48px] ${
                    isActive
                      ? "bg-[#F4EBDD] text-[#172D49] font-bold shadow-sm"
                      : "text-[#FAF5EE] hover:bg-[#263B52]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F47C68]" />}
                </Link>
              );
            })}
          </div>

          {/* Bottom Action Cards */}
          <div className="p-5 border-t border-[#F4EBDD]/15 space-y-2.5 bg-[#0F1E31]/40">
            <Link
              href="/sdgs"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#F47C68] text-white px-5 py-3.5 rounded-2xl font-display text-sm font-bold shadow-sm min-h-[48px]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Interactive SDG Explorer</span>
            </Link>
            <Link
              href="/learn"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#263B52] text-[#F4EBDD] px-5 py-3.5 rounded-2xl font-display text-sm font-bold min-h-[48px]"
            >
              <span>Explore Learning Modules</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
