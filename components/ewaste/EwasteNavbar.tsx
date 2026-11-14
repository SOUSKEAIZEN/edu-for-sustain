"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Recycle,
  MapPin,
  Compass,
  Truck,
  BookOpen,
  BarChart3,
  UserCheck,
  ShieldAlert,
  Menu,
  X,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export default function EwasteNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/e-waste", label: "Overview", icon: Recycle },
    { href: "/e-waste/centres", label: "Find Centres", icon: MapPin },
    { href: "/e-waste/explore", label: "Explore Map", icon: Compass },
    { href: "/e-waste/requests", label: "Pickup Requests", icon: Truck },
    { href: "/e-waste/guide", label: "Disposal Guide", icon: BookOpen },
    { href: "/e-waste/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/e-waste/operator", label: "Operator", icon: UserCheck },
    { href: "/e-waste/admin", label: "Admin", icon: ShieldAlert },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#172D49]/95 backdrop-blur-md border-b border-[#F4EBDD]/15 text-[#F4EBDD]">
      {/* Top Banner Notice */}
      <div className="bg-[#263B52] px-4 py-1 text-[11px] font-display text-center text-[#DDE8DE] border-b border-[#F4EBDD]/10 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#5B7866] animate-pulse" />
        <span>ECOCYCLE Prototype — Dedicated Coverage for Delhi NCR & Haryana</span>
        <span className="text-[#F47C68] font-bold uppercase tracking-wider text-[10px] bg-[#F47C68]/20 px-1.5 py-0.5 rounded">
          Demo Dataset
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Back Link */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/"
              className="text-xs text-[#DDE8DE] hover:text-[#F47C68] transition-colors flex items-center gap-1 font-display"
              title="Return to ECOLEARN main platform"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ECOLEARN</span>
            </Link>

            <span className="text-[#F4EBDD]/30 hidden sm:inline">|</span>

            <Link href="/e-waste" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F47C68] to-[#E46A55] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <Recycle className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-lg tracking-tight text-white">
                    ECOCYCLE
                  </span>
                  <span className="text-[10px] font-display uppercase tracking-widest text-[#F47C68] font-bold bg-[#F47C68]/15 px-1.5 py-0.2 rounded">
                    E-Waste
                  </span>
                </div>
                <span className="text-[10px] text-[#F4EBDD]/70 font-sans tracking-tight -mt-0.5">
                  Smart Collection Finder
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-display font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#F47C68] text-white shadow-sm"
                      : "text-[#F4EBDD]/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Hamburger for Mobile */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/e-waste/requests"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#5B7866] hover:bg-[#4b6354] text-white text-xs font-display font-bold transition-colors shadow-sm"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Book Pickup</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-[#F4EBDD] hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#172D49] border-t border-[#F4EBDD]/15 px-4 pt-3 pb-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="space-y-1 mb-4">
            <p className="px-3 py-1 text-[11px] font-display uppercase tracking-widest text-[#F47C68] font-bold">
              ECOCYCLE Modules
            </p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display transition-colors ${
                    isActive
                      ? "bg-[#F47C68] text-white font-bold"
                      : "text-[#F4EBDD]/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#F4EBDD]/15 space-y-2">
            <Link
              href="/e-waste/requests"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-[#5B7866] hover:bg-[#4b6354] text-white text-xs font-display font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Truck className="w-4 h-4" />
              <span>Book E-Waste Pickup</span>
            </Link>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#DDE8DE] text-xs font-display flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to ECOLEARN Home</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
