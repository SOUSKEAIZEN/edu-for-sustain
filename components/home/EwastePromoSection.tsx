"use client";

import React from "react";
import Link from "next/link";
import { Recycle, MapPin, Truck, ArrowRight, ShieldCheck, Sparkles, Navigation } from "lucide-react";

export default function EwastePromoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#172D49] via-[#1F3A5A] to-[#172D49] text-[#F4EBDD] p-8 sm:p-12 lg:p-16 border border-[#F4EBDD]/15 shadow-xl">
        {/* Glow ambient background decoration */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#F47C68]/15 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5B7866]/20 blur-[80px] pointer-events-none rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F47C68]/20 text-[#F47C68] border border-[#F47C68]/30 font-display text-xs font-bold uppercase tracking-wider">
                <Recycle className="w-3.5 h-3.5" />
                <span>New Platform Extension</span>
              </span>
              <span className="text-xs font-display text-[#DDE8DE] bg-white/10 px-2.5 py-1 rounded-full">
                Delhi NCR & Haryana Coverage
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Have Old Electronics? Find Your Nearest Suitable Collection Point.
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#F47C68]">
                &ldquo;Your old electronics deserve a better destination.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#F4EBDD]/80 font-sans leading-relaxed max-w-xl">
                Introducing <strong>ECOCYCLE</strong> — our dedicated e-waste discovery and circular tracking prototype. Search 22 verified collection depots, verify live capacity, and book doorstep pickup across Delhi and Haryana.
              </p>
            </div>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-[#F47C68] shrink-0" />
                <span className="font-sans text-[#F4EBDD]">Haversine Proximity Match Engine</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <Truck className="w-4 h-4 text-[#5B7866] shrink-0" />
                <span className="font-sans text-[#F4EBDD]">Free Doorstep Pickup Booking</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <Sparkles className="w-4 h-4 text-[#F47C68] shrink-0" />
                <span className="font-sans text-[#F4EBDD]">AI E-Waste Image Classification</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#5B7866] shrink-0" />
                <span className="font-sans text-[#F4EBDD]">NIST Data Sanitization & Battery Care</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/e-waste"
                className="px-6 py-3.5 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Explore ECOCYCLE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/e-waste/centres"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-white/20"
              >
                <Navigation className="w-4 h-4 text-[#F47C68]" />
                <span>Find Collection Centres</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Stats Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#F47C68]">
                  ECOCYCLE Network Telemetry
                </span>
                <span className="text-[10px] bg-[#5B7866] text-white px-2 py-0.5 rounded font-mono">
                  Active Demo
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F4EBDD]/70 font-sans">Coverage Scope:</span>
                  <span className="font-bold text-white">Delhi NCR & Haryana</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F4EBDD]/70 font-sans">Mapped Collection Depots:</span>
                  <span className="font-mono font-bold text-[#F47C68]">22 Facilities</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F4EBDD]/70 font-sans">Accepted Electronics Streams:</span>
                  <span className="font-mono font-bold text-white">12 Categories</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F4EBDD]/70 font-sans">Circular Diversion Impact:</span>
                  <span className="font-mono font-bold text-[#5B7866]">12.2 Tonnes Recycled</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/e-waste/explore"
                  className="w-full py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-display font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Open NCR Map Explorer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
