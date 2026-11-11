"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { SDG } from "@/data/sdgs";

interface SdgCardProps {
  sdg: SDG;
  onSelect: (sdg: SDG) => void;
}

export default function SdgCard({ sdg, onSelect }: SdgCardProps) {
  return (
    <div
      onClick={() => onSelect(sdg)}
      className="bg-[#FAF5EE] rounded-2xl overflow-hidden border border-[#172D49]/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col cursor-pointer group"
    >
      <div className="relative h-40 w-full overflow-hidden bg-[#E6DED0]">
        <Image
          src={sdg.image}
          alt={sdg.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/90 via-[#172D49]/35 to-transparent" />

        <div
          className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-white font-display text-[11px] font-bold tracking-wider shadow-sm"
          style={{ backgroundColor: sdg.color }}
        >
          SDG {sdg.number}
        </div>

        <div className="absolute top-2.5 right-2.5">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-display font-semibold uppercase bg-white/90 text-[#172D49]">
            {sdg.category}
          </span>
        </div>

        <div className="absolute bottom-2.5 left-3 right-3">
          <h3 className="font-serif text-base font-bold text-white leading-tight">
            {sdg.title}
          </h3>
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
        <p className="text-xs text-[#172D49]/80 line-clamp-3 leading-relaxed">
          {sdg.shortDescription}
        </p>

        {sdg.indianInitiatives.length > 0 && (
          <div className="pt-2 border-t border-[#172D49]/10 flex items-center gap-1.5 text-[11px] text-[#263B52] font-display">
            <Building2 className="w-3.5 h-3.5 text-[#F47C68] shrink-0" />
            <span className="truncate font-medium">
              India: {sdg.indianInitiatives[0].name}
            </span>
          </div>
        )}

        <div className="pt-1 flex items-center justify-between text-xs font-display font-bold text-[#172D49] group-hover:text-[#F47C68] transition-colors">
          <span className="uppercase tracking-wider">Explore Targets & Data</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
