"use client";

import React from "react";
import Link from "next/link";
import { Recycle, ArrowUp, ShieldCheck, MapPin, ArrowLeft } from "lucide-react";

export default function EwasteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#172D49] text-[#F4EBDD] border-t border-[#F4EBDD]/15 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#F4EBDD]/15">
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F47C68] flex items-center justify-center text-white">
                <Recycle className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-xl text-white">
                ECOCYCLE
              </span>
            </div>
            <p className="font-serif italic text-sm text-[#F47C68]">
              &ldquo;Give your old electronics a better destination.&rdquo;
            </p>
            <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
              Smart collection point finder & circular tracking platform developed as an academic extension of ECOLEARN.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#263B52] text-[11px] text-[#DDE8DE] border border-[#5B7866]/30">
              <MapPin className="w-3 h-3 text-[#F47C68]" />
              <span>Scope: Delhi NCR & Haryana</span>
            </div>
          </div>

          {/* Quick Find Links */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-[#F47C68] font-bold mb-3">
              Collection Services
            </h4>
            <ul className="space-y-2 text-xs text-[#F4EBDD]/80">
              <li>
                <Link
                  href="/e-waste/centres"
                  className="hover:text-white transition-colors"
                >
                  Find Sample Drop-Off Centres
                </Link>
              </li>
              <li>
                <Link
                  href="/e-waste/explore"
                  className="hover:text-white transition-colors"
                >
                  Interactive NCR Map Explorer
                </Link>
              </li>
              <li>
                <Link
                  href="/e-waste/requests"
                  className="hover:text-white transition-colors"
                >
                  Simulate Doorstep Pickup
                </Link>
              </li>
              <li>
                <Link
                  href="/e-waste/guide"
                  className="hover:text-white transition-colors"
                >
                  Disposal & Safe Prep Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/e-waste/analytics"
                  className="hover:text-white transition-colors"
                >
                  Regional Recovery Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Demonstration Portals */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-[#F47C68] font-bold mb-3">
              Management Portals
            </h4>
            <ul className="space-y-2 text-xs text-[#F4EBDD]/80">
              <li>
                <Link
                  href="/e-waste/operator"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Centre Operator Panel</span>
                  <span className="text-[10px] bg-[#5B7866]/40 text-[#DDE8DE] px-1.5 py-0.2 rounded">
                    Demo
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/e-waste/admin"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Admin Dispatch Console</span>
                  <span className="text-[10px] bg-[#5B7866]/40 text-[#DDE8DE] px-1.5 py-0.2 rounded">
                    Demo
                  </span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/"
                  className="text-[#F47C68] hover:text-[#E46A55] font-display font-medium transition-colors flex items-center gap-1 text-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to ECOLEARN</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Prototype Attribution & Notice */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-[#F47C68] font-bold mb-3">
              Prototype Notice
            </h4>
            <p className="text-[11px] text-[#F4EBDD]/70 leading-relaxed mb-3">
              Prototype · Sample data · Delhi NCR & Haryana. All 22 collection centres and capacity percentages are demonstration records for academic modeling.
            </p>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#DDE8DE] space-y-1">
              <div className="flex items-center gap-1 font-bold text-[#F47C68]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Academic Project</span>
              </div>
              <p>
                Department of Engineering & Sustainability, Manav Rachna University, Faridabad.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F4EBDD]/60">
          <p>
            © {new Date().getFullYear()} ECOCYCLE — Smart E-Waste Collection Point Finder.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#263B52] hover:bg-[#F47C68] text-white transition-colors font-display text-xs"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
