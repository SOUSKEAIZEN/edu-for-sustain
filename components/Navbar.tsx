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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#172D49]/95 shadow-md py-3 border-b border-[#F4EBDD]/10"
          : "bg-[#172D49] py-4 md:py-5 border-b border-[#F4EBDD]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F47C68] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F47C68] to-[#E46A55] flex items-center justify-center text-white shadow-sm">
              <Globe className="w-5 h-5 text-[#FAF5EE]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F4EBDD] flex items-center gap-1">
                ECOLEARN
                <span className="w-2 h-2 rounded-full bg-[#F47C68] inline-block" />
              </span>
              <span className="font-display text-[10px] uppercase tracking-wider text-[#DDE8DE]">
                Education for Sustainability
              </span>
            </div>
          </Link>

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

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/sdgs"
              className="inline-flex items-center gap-2 bg-[#F47C68] hover:bg-[#E46A55] text-white px-4 py-2 rounded-full text-sm font-display font-medium shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <span>Explore SDGs</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/sdgs"
              className="md:hidden text-xs bg-[#F47C68] text-white px-2.5 py-1.5 rounded-full font-display font-medium"
            >
              SDGs
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#F4EBDD] hover:bg-[#263B52] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-[#F4EBDD]/10 bg-[#172D49]">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#F4EBDD] text-[#172D49] font-bold"
                      : "text-[#FAF5EE] hover:bg-[#263B52]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#F47C68]" />}
                  </div>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#F4EBDD]/15 flex flex-col gap-2">
              <Link
                href="/sdgs"
                className="w-full flex items-center justify-center gap-2 bg-[#F47C68] text-white px-4 py-3 rounded-xl font-display font-medium"
              >
                <Sparkles className="w-4 h-4" />
                <span>Interactive SDG Explorer</span>
              </Link>
              <Link
                href="/learn"
                className="w-full flex items-center justify-center gap-2 bg-[#263B52] text-[#F4EBDD] px-4 py-3 rounded-xl font-display font-medium"
              >
                <span>Start Learning Modules</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
