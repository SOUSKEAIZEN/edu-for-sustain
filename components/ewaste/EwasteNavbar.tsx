"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ChevronDown,
} from "lucide-react";

export default function EwasteNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [managementOpen, setManagementOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setManagementOpen(false);
  }, [pathname]);

  // Click outside to close management dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setManagementOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const primaryLinks = [
    { href: "/e-waste", label: "Overview", icon: Recycle },
    { href: "/e-waste/centres", label: "Find Centres", icon: MapPin },
    { href: "/e-waste/explore", label: "Explore Map", icon: Compass },
    { href: "/e-waste/requests", label: "Requests", icon: Truck },
    { href: "/e-waste/guide", label: "Disposal Guide", icon: BookOpen },
  ];

  const managementLinks = [
    {
      href: "/e-waste/analytics",
      label: "Analytics",
      description: "Recovery rates & regional volume metrics",
      icon: BarChart3,
    },
    {
      href: "/e-waste/operator",
      label: "Operator Panel",
      description: "Manage capacity & simulate collection intake",
      icon: UserCheck,
    },
    {
      href: "/e-waste/admin",
      label: "Admin Console",
      description: "Dispatch pickups & audit centre records",
      icon: ShieldAlert,
    },
  ];

  const isManagementActive = managementLinks.some(
    (item) => pathname === item.href
  );

  return (
    <header className="sticky top-0 z-40 bg-[#172D49] border-b border-[#F4EBDD]/15 text-[#F4EBDD] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Back to ECOLEARN + ECOCYCLE Brand */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/"
              className="text-xs text-[#DDE8DE] hover:text-[#F47C68] transition-colors flex items-center gap-1 font-display group py-1"
              title="Return to ECOLEARN main platform"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">Back to ECOLEARN</span>
              <span className="sm:hidden text-[11px]">ECOLEARN</span>
            </Link>

            <span className="text-[#F4EBDD]/25 select-none">|</span>

            <Link
              href="/e-waste"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#F47C68] rounded-lg p-0.5"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F47C68] to-[#E46A55] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 shrink-0">
                <Recycle className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white leading-none">
                  ECOCYCLE
                </span>
                <span className="text-[10px] font-display uppercase tracking-wider text-[#F47C68] font-bold bg-[#F47C68]/15 px-1.5 py-0.5 rounded leading-none hidden md:inline-block">
                  Delhi NCR
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (fits on single line on laptops & desktops) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-display font-medium transition-colors ${
                    isActive
                      ? "bg-[#F4EBDD] text-[#172D49] font-bold shadow-sm"
                      : "text-[#FAF5EE]/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Compact Management Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setManagementOpen(!managementOpen)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-medium transition-colors flex items-center gap-1 ${
                  isManagementActive || managementOpen
                    ? "bg-[#F4EBDD] text-[#172D49] font-bold shadow-sm"
                    : "text-[#FAF5EE]/85 hover:text-white hover:bg-white/10"
                }`}
                aria-expanded={managementOpen}
                aria-haspopup="true"
              >
                <span>Management</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    managementOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {managementOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#172D49] border border-[#F4EBDD]/20 rounded-2xl shadow-xl py-2 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-display font-bold text-[#F47C68]/90 border-b border-[#F4EBDD]/10 mb-1">
                    Demo Control Centers
                  </div>
                  {managementLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setManagementOpen(false)}
                        className={`flex items-start gap-2.5 px-3 py-2 text-xs transition-colors ${
                          isActive
                            ? "bg-[#263B52] text-white font-semibold"
                            : "text-[#FAF5EE]/90 hover:bg-[#263B52] hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-[#F47C68] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-display font-medium">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-[#FAF5EE]/60 font-sans leading-tight">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/e-waste/requests"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white text-xs sm:text-sm font-display font-bold transition-all shadow-sm hover:-translate-y-0.5 min-h-[36px] sm:min-h-[38px]"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Book Pickup</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#F4EBDD] hover:bg-[#263B52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F47C68] min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#172D49] text-white overflow-y-auto animate-fadeIn">
          {/* Top Bar */}
          <div className="p-4 flex items-center justify-between border-b border-[#F4EBDD]/15">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F47C68] to-[#E46A55] flex items-center justify-center text-white">
                <Recycle className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                ECOCYCLE
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-white hover:bg-[#263B52] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links Body */}
          <div className="p-4 space-y-4 flex-grow">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-display text-[#F47C68] bg-[#F47C68]/10 px-3 py-2 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to ECOLEARN main platform</span>
            </Link>

            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-wider font-display font-bold text-[#F4EBDD]/50 px-2 pb-1">
                Public Services
              </div>
              {primaryLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display transition-colors min-h-[44px] ${
                      isActive
                        ? "bg-[#F4EBDD] text-[#172D49] font-bold"
                        : "text-[#FAF5EE] hover:bg-[#263B52]"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#F47C68]" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#F4EBDD]/15 space-y-1">
              <div className="text-[10px] uppercase tracking-wider font-display font-bold text-[#F4EBDD]/50 px-2 pb-1">
                Management Portals
              </div>
              {managementLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-display transition-colors min-h-[40px] ${
                      isActive
                        ? "bg-[#263B52] text-white font-bold"
                        : "text-[#FAF5EE]/80 hover:bg-[#263B52]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-[#F47C68]" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Drawer CTA & Disclaimer */}
          <div className="p-4 border-t border-[#F4EBDD]/15 bg-[#0F1E31]/50 space-y-3">
            <Link
              href="/e-waste/requests"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#F47C68] hover:bg-[#E46A55] text-white px-4 py-3 rounded-xl font-display text-sm font-bold shadow-sm min-h-[44px]"
            >
              <Truck className="w-4 h-4" />
              <span>Book Doorstep Pickup</span>
            </Link>
            <p className="text-[11px] text-center text-[#DDE8DE]/70">
              Prototype · Sample data · Delhi NCR & Haryana
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
