"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SdgCard from "@/components/SdgCard";
import SdgModal from "@/components/SdgModal";
import { sdgsData, SDG } from "@/data/sdgs";

export default function FeaturedSdgsSection() {
  const [activeModalSdg, setActiveModalSdg] = useState<SDG | null>(null);

  const featuredIds = [4, 6, 7, 11, 12, 13, 15];
  const featuredSdgs = sdgsData.filter((s) => featuredIds.includes(s.id));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase mb-3 bg-[#E6DED0] text-[#172D49] border border-[#172D49]/10">
            UN 2030 Global Agenda
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172D49]">
            Featured Sustainable <span className="text-[#F47C68]">Development Goals</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#172D49]/80 max-w-xl">
            Explore key targets mapped to Indian national missions, educational imperatives, and localized environmental solutions.
          </p>
        </div>

        <Link
          href="/sdgs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm self-start md:self-auto"
        >
          <span>Explore All 17 Goals</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredSdgs.map((sdg) => (
          <SdgCard
            key={sdg.id}
            sdg={sdg}
            onSelect={(item) => setActiveModalSdg(item)}
          />
        ))}

        <div className="bg-gradient-to-br from-[#172D49] to-[#263B52] rounded-2xl p-6 text-white flex flex-col justify-between shadow-sm sm:col-span-2 lg:col-span-1">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F47C68] text-white text-[10px] font-display font-bold uppercase tracking-wider">
              Interactive Catalog
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#F4EBDD]">
              See the full 17-Goal Framework
            </h3>
            <p className="text-xs text-[#F4EBDD]/80 leading-relaxed">
              Filter by People, Planet, Prosperity, Peace and Partnership. Access detailed Indian initiative alignments.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/sdgs"
              className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white text-[#172D49] font-display text-xs font-bold uppercase tracking-wider hover:bg-[#F47C68] hover:text-white transition-colors"
            >
              <span>Open SDG Explorer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <SdgModal
        sdg={activeModalSdg}
        onClose={() => setActiveModalSdg(null)}
      />
    </section>
  );
}
