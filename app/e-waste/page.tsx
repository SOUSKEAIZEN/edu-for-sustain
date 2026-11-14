"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Recycle,
  MapPin,
  Search,
  Compass,
  Truck,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Layers,
  Building2,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { ewasteCategories } from "@/data/ewaste/categories";
import { initialCentres } from "@/data/ewaste/centres";
import { getStoredCentres, ECOCLE_EVENT_NAME } from "@/lib/ewaste/storage";
import CentreCard from "@/components/ewaste/CentreCard";
import SmartBinsSection from "@/components/ewaste/SmartBinsSection";
import AiClassifierModal from "@/components/ewaste/AiClassifierModal";
import RequestPickupModal from "@/components/ewaste/RequestPickupModal";

export default function EwasteHomePage() {
  const router = useRouter();
  const [centres, setCentres] = useState(initialCentres);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isPickupModalOpen, setIsPickupModalOpen] = useState(false);

  useEffect(() => {
    setCentres(getStoredCentres());

    const handleUpdate = () => {
      setCentres(getStoredCentres());
    };
    window.addEventListener(ECOCLE_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(ECOCLE_EVENT_NAME, handleUpdate);
  }, []);

  const featuredCentres = centres.slice(0, 3);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/e-waste/centres?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/e-waste/centres");
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION (Balanced 2-Column Desktop Layout) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#172D49] via-[#1B3454] to-[#172D49] text-[#F4EBDD] pt-10 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#F4EBDD]/15">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-[#F47C68]/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (60% on desktop) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Subtitle Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F47C68]/15 border border-[#F47C68]/30 text-[#F47C68] text-xs font-display font-bold">
                <span className="w-2 h-2 rounded-full bg-[#F47C68] animate-pulse" />
                <span>Prototype · Sample data · Delhi NCR & Haryana</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Give your old electronics a better destination.
              </h1>

              {/* Subtitle / Copy */}
              <p className="text-sm sm:text-base text-[#F4EBDD]/85 font-sans leading-relaxed max-w-2xl">
                Locate sample drop-off points, compare certified recycling facilities, and simulate doorstep e-waste collection across Delhi NCR and Haryana. An academic circularity model for ECOLEARN.
              </p>

              {/* 2 Primary CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/e-waste/centres"
                  className="px-6 py-3.5 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Find Collection Points</span>
                </Link>

                <Link
                  href="/e-waste/explore"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-white/20"
                >
                  <Compass className="w-4 h-4 text-[#F47C68]" />
                  <span>Explore Interactive Map</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsAiModalOpen(true)}
                  className="px-4 py-3 rounded-full bg-[#263B52] hover:bg-[#324b66] text-[#DDE8DE] font-display text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 border border-[#5B7866]/40"
                  title="Simulate device recognition"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F47C68]" />
                  <span className="hidden sm:inline">AI Classifier</span>
                </button>
              </div>

              {/* 3 Compact Stats */}
              <div className="pt-4 border-t border-[#F4EBDD]/15 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-white">
                    22
                  </div>
                  <div className="text-[11px] text-[#F4EBDD]/70 font-sans mt-0.5">
                    Sample Centres
                  </div>
                </div>
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#F47C68]">
                    12
                  </div>
                  <div className="text-[11px] text-[#F4EBDD]/70 font-sans mt-0.5">
                    Accepted Categories
                  </div>
                </div>
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#5B7866]">
                    100%
                  </div>
                  <div className="text-[11px] text-[#F4EBDD]/70 font-sans mt-0.5">
                    Delhi NCR & Haryana
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (40% on desktop): High-quality visual composition + floating badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#172D49]/50 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/research/sustainable-cities.jpg"
                  alt="ECOCYCLE Electronic Circularity"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172D49] via-[#172D49]/20 to-transparent" />

                {/* Floating Info Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#172D49]/90 backdrop-blur-md border border-white/20 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-[#F47C68] uppercase tracking-wider text-[10px]">
                      Sample Collection Hub
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#5B7866] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#5B7866] animate-pulse" />
                      Intake Available
                    </span>
                  </div>
                  <div className="font-serif font-bold text-sm text-[#F4EBDD] leading-tight">
                    Connaught Place Central Recovery Depot
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#F4EBDD]/70 font-sans pt-1 border-t border-white/10">
                    <span>Capacity: 42% Utilized</span>
                    <span className="font-mono text-[#DDE8DE]">New Delhi · 110001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & QUICK FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#172D49]/10 shadow-lg space-y-3">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#172D49]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection point, area (e.g. Connaught Place, Dwarka, Faridabad, Gurugram)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 text-xs sm:text-sm text-[#172D49] placeholder-[#172D49]/40 focus:outline-none focus:ring-2 focus:ring-[#F47C68] transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-[#172D49] hover:bg-[#263B52] text-white text-xs sm:text-sm font-display font-bold transition-colors shrink-0"
            >
              Search Centres
            </button>
          </form>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#172D49]/70 pt-1">
            <span className="font-display font-semibold text-[11px] mr-1 text-[#172D49]">
              Popular Regions:
            </span>
            {["New Delhi", "Faridabad", "Gurugram", "Sonipat", "Panipat", "Manesar"].map((city) => (
              <Link
                key={city}
                href={`/e-waste/centres?city=${encodeURIComponent(city)}`}
                className="px-2.5 py-1 rounded-full bg-[#FAF5EE] hover:bg-[#F47C68] hover:text-white transition-colors text-[11px] font-display"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 12 CATEGORY CARDS (Clean & Minimal) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Accepted Electronics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#172D49] mt-1">
              Select Your E-Waste Category
            </h2>
            <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans max-w-xl mt-1">
              Every electronic item requires proper preparation and certified handling. Click any category to view sample facilities accepting it.
            </p>
          </div>

          <Link
            href="/e-waste/guide"
            className="text-xs font-display font-bold text-[#F47C68] hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Safe Prep Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {ewasteCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/e-waste/centres?category=${cat.id}`}
              className="p-4 rounded-2xl bg-white border border-[#172D49]/10 hover:border-[#F47C68] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#FAF5EE] group-hover:bg-[#F47C68] text-[#172D49] group-hover:text-white transition-colors flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-sm font-bold text-[#172D49] leading-snug group-hover:text-[#F47C68] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-[#172D49]/60 line-clamp-2">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-[#172D49]/5 flex items-center justify-between text-[10px] font-display">
                <span className="text-[#5B7866] font-bold">
                  {cat.recyclabilityRate.split("(")[0]}
                </span>
                <span className="text-[#172D49]/40 group-hover:text-[#F47C68] transition-colors">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (4-Step Workflow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#172D49] text-[#F4EBDD] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              End-to-End Circularity
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              How ECOCYCLE Manages Electronic Waste
            </h2>
            <p className="text-xs sm:text-sm text-[#F4EBDD]/70 font-sans leading-relaxed">
              From household identification to scientific recovery, our transparent platform connects citizens with authorized recycling logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-display font-black text-2xl text-[#F47C68]">01</span>
              <h3 className="font-serif text-base font-bold text-white">Identify & Prepare</h3>
              <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
                Check battery taping guidelines and perform NIST-compliant drive sanitization to protect your personal identity.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-display font-black text-2xl text-[#F47C68]">02</span>
              <h3 className="font-serif text-base font-bold text-white">Haversine Match</h3>
              <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
                Our recommendation engine uses the Haversine formula to find facilities accepting your exact electronics with available capacity headroom.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-display font-black text-2xl text-[#F47C68]">03</span>
              <h3 className="font-serif text-base font-bold text-white">Drop-Off or Pickup</h3>
              <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
                Visit a walk-in depot or book scheduled doorstep transport for bulky desktop PCs, monitors, and domestic appliances.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-display font-black text-2xl text-[#F47C68]">04</span>
              <h3 className="font-serif text-base font-bold text-white">Certified Recovery</h3>
              <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
                Receive digital tracking certificates verifying zero-landfill extraction and precious metallurgy recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED SAMPLE CENTRES (Honest Labels) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Sample Drop-off Nodes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172D49] mt-1">
              Featured Sample Centres
            </h2>
            <p className="text-xs text-[#172D49]/70 font-sans mt-0.5">
              Demonstration collection points in Delhi NCR with simulated capacity telemetry and accepted material guides.
            </p>
          </div>

          <Link
            href="/e-waste/centres"
            className="px-4 py-2 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Browse All 22 Sample Centres</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F47C68]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCentres.map((centre) => (
            <CentreCard key={centre.id} centre={centre} />
          ))}
        </div>
      </section>

      {/* 6. DISPOSAL GUIDE CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#172D49]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EE] text-[#F47C68] flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
                Mandatory Safety Protocols
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
                Lithium Battery Taping & NIST Data Wipe Guide
              </h3>
              <p className="text-xs text-[#172D49]/70 font-sans max-w-2xl leading-relaxed">
                Before dropping off phones, laptops, or rechargeable packs, learn how to tape battery terminals to prevent short-circuit fires and sanitize personal flash storage safely.
              </p>
            </div>
          </div>

          <Link
            href="/e-waste/guide"
            className="w-full md:w-auto px-6 py-3 rounded-2xl bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shrink-0 text-center"
          >
            Read Disposal Guide
          </Link>
        </div>
      </section>

      {/* 7. IOT SMART BINS LIVE TELEMETRY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmartBinsSection />
      </section>

      {/* 8. COVERAGE AREA (Delhi NCR & Haryana) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#172D49]/10 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-display font-bold text-[#F47C68] uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Dedicated Regional Scope</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
            Coverage Exclusively for Delhi NCR & Haryana
          </h3>
          <p className="text-xs text-[#172D49]/70 font-sans max-w-3xl">
            All 22 sample collection points, smart sensor nodes, and pickup routes are modeled strictly within the National Capital Region and Haryana state corridors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 space-y-1.5">
              <span className="font-bold font-display text-xs text-[#172D49] block">
                Delhi / New Delhi Sample Depots:
              </span>
              <p className="text-[11px] text-[#172D49]/70 font-sans leading-relaxed">
                Connaught Place, Dwarka, Rohini, Lajpat Nagar, Saket, Karol Bagh, Okhla Industrial Area, Nehru Place, Anand Vihar.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 space-y-1.5">
              <span className="font-bold font-display text-xs text-[#172D49] block">
                Haryana NCR Sample Depots:
              </span>
              <p className="text-[11px] text-[#172D49]/70 font-sans leading-relaxed">
                Faridabad (Sector 12, Bata Chowk, MRU Campus), Gurugram (Cyber City, Sector 29, Sohna Rd), IMT Manesar, Sonipat, Bahadurgarh, Panipat, Rohtak, Palwal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#172D49] to-[#263B52] text-[#F4EBDD] text-center space-y-6 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-[#F47C68] text-white flex items-center justify-center mx-auto">
            <Recycle className="w-6 h-6" />
          </div>
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to recycle your old electronics safely?
            </h3>
            <p className="text-xs sm:text-sm text-[#F4EBDD]/80 font-sans">
              Choose a nearby drop-off facility or schedule a simulated doorstep pickup for bulky household equipment.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/e-waste/centres"
              className="px-6 py-3 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Find Nearest Centre
            </Link>
            <button
              type="button"
              onClick={() => setIsPickupModalOpen(true)}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors border border-white/20"
            >
              Book Doorstep Pickup
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AiClassifierModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
      <RequestPickupModal
        isOpen={isPickupModalOpen}
        onClose={() => setIsPickupModalOpen(false)}
      />
    </div>
  );
}
