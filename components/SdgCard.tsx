"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Building2 } from "lucide-react";
import { SDG } from "@/data/sdgs";

interface SdgCardProps {
  sdg: SDG;
  onSelect: (sdg: SDG) => void;
}

export default function SdgCard({ sdg, onSelect }: SdgCardProps) {
  const categoryPillColors: Record<string, string> = {
    People: "bg-[#FF3A21]/15 text-[#C5192D] border-[#C5192D]/30",
    Planet: "bg-[#56C02B]/15 text-[#3F7E44] border-[#3F7E44]/30",
    Prosperity: "bg-[#FCC30B]/20 text-[#A21942] border-[#A21942]/30",
    Peace: "bg-[#00689D]/15 text-[#00689D] border-[#00689D]/30",
    Partnership: "bg-[#19486A]/15 text-[#19486A] border-[#19486A]/30",
  };

  return (
    <div
      onClick={() => onSelect(sdg)}
      className="bg-[#FAF5EE] rounded-2xl overflow-hidden border border-[#172D49]/10 shadow-sm hover:shadow-editorial hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group"
    >
      {/* Visual Top Bar */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={sdg.image}
          alt={sdg.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/90 via-[#172D49]/40 to-transparent" />

        {/* Goal Badge with Official SDG Color Accent */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white font-display text-xs font-bold tracking-wider shadow-md flex items-center gap-1.5"
          style={{ backgroundColor: sdg.color }}
        >
          <span>SDG {sdg.number}</span>
        </div>

        {/* Category Tag */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-display font-semibold uppercase tracking-wider backdrop-blur-md bg-white/90 text-[#172D49] border border-white/50`}
          >
            {sdg.category}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F4EBDD] transition-colors leading-tight">
            {sdg.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-4">
        <p className="text-xs text-[#172D49]/80 line-clamp-3 leading-relaxed">
          {sdg.shortDescription}
        </p>

        {/* Mapped India Mission Snippet */}
        {sdg.indianInitiatives.length > 0 && (
          <div className="pt-2 border-t border-[#172D49]/10 flex items-center gap-1.5 text-[11px] text-[#263B52] font-display">
            <Building2 className="w-3.5 h-3.5 text-[#F47C68] shrink-0" />
            <span className="truncate font-medium">
              India: {sdg.indianInitiatives[0].name}
            </span>
          </div>
        )}

        {/* Learn More Action */}
        <div className="pt-2 flex items-center justify-between text-xs font-display font-bold text-[#172D49] group-hover:text-[#F47C68] transition-colors">
          <span className="uppercase tracking-wider">Explore Targets & Data</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
