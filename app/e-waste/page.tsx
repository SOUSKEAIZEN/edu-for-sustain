"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Recycle,
  MapPin,
  Search,
  Compass,
  Truck,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Cpu,
  Layers,
  Building2,
  AlertTriangle,
} from "lucide-react";
import { ewasteCategories } from "@/data/ewaste/categories";
import { initialCentres } from "@/data/ewaste/centres";
import { getStoredCentres, ECOCLE_EVENT_NAME } from "@/lib/ewaste/storage";
import CentreCard from "@/components/ewaste/CentreCard";
import SmartBinsSection from "@/components/ewaste/SmartBinsSection";
import AiClassifierModal from "@/components/ewaste/AiClassifierModal";
import RequestPickupModal from "@/components/ewaste/RequestPickupModal";
import StatCard from "@/components/ewaste/charts/StatCard";

export default function EwasteHomePage() {
  const [centres, setCentres] = useState(initialCentres);
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

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#172D49] via-[#1B3454] to-[#172D49] text-[#F4EBDD] pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#F4EBDD]/15">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F47C68]/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto space-y-8">
          {/* Top Pill */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F47C68]/20 text-[#F47C68] border border-[#F47C68]/30 font-display text-xs font-bold uppercase tracking-wider">
              <Recycle className="w-3.5 h-3.5" />
              <span>ECOCYCLE E-Waste Platform</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-xs font-display text-[#DDE8DE]">
              <MapPin className="w-3.5 h-3.5 text-[#5B7866]" />
              <span>Delhi NCR & Haryana Dedicated Engine</span>
            </span>
          </div>

          {/* Headline & Tagline */}
          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              Don&apos;t let old electronics become tomorrow&apos;s problem.
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-[#F47C68]">
              &ldquo;Your old electronics deserve a better destination.&rdquo;
            </p>
            <p className="text-sm sm:text-base text-[#F4EBDD]/80 font-sans leading-relaxed max-w-2xl">
              Find verified collection points, compare nearby facilities, and schedule doorstep recovery across Delhi, New Delhi, and Haryana. Powered by an intelligent Haversine matching engine.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/e-waste/centres"
              className="px-6 py-3.5 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Find Collection Centres</span>
            </Link>

            <Link
              href="/e-waste/explore"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-white/20"
            >
              <Compass className="w-4 h-4 text-[#F47C68]" />
              <span>Explore Interactive NCR Map</span>
            </Link>

            <button
              onClick={() => setIsAiModalOpen(true)}
              className="px-5 py-3 rounded-full bg-[#263B52] hover:bg-[#324b66] text-[#DDE8DE] font-display text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-[#5B7866]/40"
            >
              <Sparkles className="w-4 h-4 text-[#F47C68]" />
              <span>AI Image Classifier</span>
            </button>
          </div>

          {/* Quick Search Strip */}
          <div className="pt-4 max-w-4xl">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-[#F4EBDD]">
                <div className="w-8 h-8 rounded-lg bg-[#5B7866] flex items-center justify-center text-white shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold font-display">Need Doorstep Pickup for Heavy Tech?</p>
                  <p className="text-[#F4EBDD]/70 text-[11px]">Free residential collection for desktops, TVs & appliances.</p>
                </div>
              </div>

              <button
                onClick={() => setIsPickupModalOpen(true)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#5B7866] hover:bg-[#4b6354] text-white text-xs font-display font-bold transition-colors shrink-0"
              >
                Schedule Doorstep Pickup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GEOGRAPHICAL SCOPE & DEMO DATA DISCLAIMER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-white border border-[#172D49]/10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-display font-bold text-[#F47C68] uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Geographical Scope</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#172D49]">
              Delhi NCR & Haryana Exclusively
            </h3>
            <p className="text-xs text-[#172D49]/70 font-sans">
              All 22 demonstration centres, smart bins, and routes are mapped strictly within Delhi and Haryana corridors.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-wrap gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 flex-1 min-w-[200px]">
              <span className="font-bold text-[#172D49] block mb-1">Delhi / New Delhi Coverage:</span>
              <p className="text-[#172D49]/70 text-[11px]">
                Connaught Place, Dwarka, Rohini, Lajpat Nagar, Saket, Karol Bagh, Okhla, Nehru Place, Anand Vihar.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 flex-1 min-w-[200px]">
              <span className="font-bold text-[#172D49] block mb-1">Haryana NCR Coverage:</span>
              <p className="text-[#172D49]/70 text-[11px]">
                Faridabad, Gurugram, IMT Manesar, Sonipat, Bahadurgarh, Panipat, Rohtak, Palwal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            label="Demonstration Centres"
            value="22"
            subtext="Delhi & Haryana clusters"
            icon={Building2}
            badge="Demo Data"
          />
          <StatCard
            label="Accepted Categories"
            value="12"
            subtext="Phones, IT, batteries, TVs"
            icon={Layers}
            badge="Complete"
          />
          <StatCard
            label="Sample Pickup Requests"
            value="334"
            subtext="Doorstep & campus log"
            trendText="184 Completed"
            trendPositive={true}
            icon={Truck}
            badge="Simulated"
          />
          <StatCard
            label="Material Diverted"
            value="12.2 T"
            subtext="Hazardous lead & mercury kept from soil"
            icon={Recycle}
            badge="Simulated Impact"
          />
        </div>
      </section>

      {/* 4. EXPLORE 12 E-WASTE CATEGORIES */}
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
              Every electronic item requires different preparation and certified handling. Click any category to search compatible collection facilities.
            </p>
          </div>

          <Link
            href="/e-waste/guide"
            className="text-xs font-display font-bold text-[#F47C68] hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Read Handling Safety Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {ewasteCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/e-waste/centres?category=${cat.id}`}
              className="p-4 rounded-2xl bg-white border border-[#172D49]/10 hover:border-[#F47C68] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#FAF5EE] group-hover:bg-[#F47C68] text-[#172D49] group-hover:text-white transition-colors flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#172D49] leading-snug group-hover:text-[#F47C68] transition-colors">
                  {cat.name}
                </h4>
                <p className="text-[11px] text-[#172D49]/60 line-clamp-2">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#172D49]/5 flex items-center justify-between text-[10px] font-display">
                <span className="text-[#5B7866] font-bold">{cat.recyclabilityRate.split("(")[0]}</span>
                <span className="text-[#172D49]/40 group-hover:text-[#F47C68] transition-colors">Find →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. FEATURED COLLECTION CENTRES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Nearest Drop-off Nodes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172D49] mt-1">
              Featured Verified Centres
            </h2>
            <p className="text-xs text-[#172D49]/70 font-sans mt-0.5">
              High-capacity collection points equipped with automated certified data wiping and hazardous battery isolation.
            </p>
          </div>

          <Link
            href="/e-waste/centres"
            className="px-4 py-2 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>View All 22 Centres</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F47C68]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCentres.map((centre) => (
            <CentreCard key={centre.id} centre={centre} />
          ))}
        </div>
      </section>

      {/* 6. HOW IT WORKS 4-STEP WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#172D49] text-[#F4EBDD] rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              End-to-End Circularity
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              How ECOCYCLE Manages Electronic Waste
            </h2>
            <p className="text-xs sm:text-sm text-[#F4EBDD]/70 font-sans leading-relaxed">
              From household identification to scientific smelting, our transparent platform connects citizens with authorized recycling logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-display font-black text-2xl text-[#F47C68]">01</span>
              <h4 className="font-serif text-base font-bold text-white">Identify & Prepare</h4>
              <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
                Check battery taping guidelines and perform NIST-compliant drive sanitization to protect your personal identity.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-display font-black text-2xl text-[#F47C68]">02</span>
              <h4 className="font-serif text-base font-bold text-white">Intelligent Match</h4>
              <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
                Our recommendation engine uses the Haversine formula to find facilities accepting your exact electronics with available capacity buffer.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-display font-black text-2xl text-[#F47C68]">03</span>
              <h4 className="font-serif text-base font-bold text-white">Drop-Off or Pickup</h4>
              <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
                Visit a walk-in depot or book scheduled doorstep transport for bulky desktop PCs, monitors, and domestic appliances.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-display font-black text-2xl text-[#F47C68]">04</span>
              <h4 className="font-serif text-base font-bold text-white">Certified Recycling</h4>
              <p className="text-xs text-[#F4EBDD]/70 font-sans leading-relaxed">
                Receive digital tracking certificates verifying zero-landfill extraction and precious metallurgy recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. IOT SMART BINS LIVE TELEMETRY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmartBinsSection />
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172D49]">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-3">
          <div className="p-5 rounded-2xl bg-white border border-[#172D49]/10 space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#172D49]">
              Why can&apos;t electronic waste be discarded with household garbage?
            </h4>
            <p className="text-xs text-[#172D49]/70 font-sans leading-relaxed">
              Electronics contain heavy toxic metals including lead, cadmium, hexavalent chromium, and brominated flame retardants. When buried in regular landfills, toxic leachate permeates groundwater aquifers, while lithium cells risk spontaneous combustion under compactor pressure.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#172D49]/10 space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#172D49]">
              Is this a real recycling company or an academic prototype?
            </h4>
            <p className="text-xs text-[#172D49]/70 font-sans leading-relaxed">
              ECOCYCLE is an advanced software engineering and UI/UX demonstration prototype built as part of the ECOLEARN (Education for Sustainability) platform by researchers at Manav Rachna University, Faridabad. All facilities and transactions are illustrative demonstration records.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#172D49]/10 space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#172D49]">
              How does the recommendation algorithm choose collection points?
            </h4>
            <p className="text-xs text-[#172D49]/70 font-sans leading-relaxed">
              The engine checks accepted categories, verifies real-time operational status, calculates straight-line distance using the Haversine formula, and factors in intake capacity headroom to prevent routing users to overloaded depots.
            </p>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AiClassifierModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
      <RequestPickupModal isOpen={isPickupModalOpen} onClose={() => setIsPickupModalOpen(false)} />
    </div>
  );
}
