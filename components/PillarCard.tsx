"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TreePine, Users, Coins, ArrowRight, CheckCircle2, X } from "lucide-react";
import { PillarData } from "@/data/pillars";

export default function PillarCard({ pillar }: { pillar: PillarData }) {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = () => {
    switch (pillar.id) {
      case "environment":
        return <TreePine className="w-5 h-5 text-[#5B7866]" />;
      case "society":
        return <Users className="w-5 h-5 text-[#F47C68]" />;
      case "economy":
        return <Coins className="w-5 h-5 text-[#263B52]" />;
    }
  };

  return (
    <>
      <div className="bg-[#FAF5EE] rounded-3xl overflow-hidden border border-[#172D49]/10 shadow-sm flex flex-col group h-full">
        <div className="relative h-56 w-full overflow-hidden bg-[#E6DED0]">
          <Image
            src={pillar.image}
            alt={pillar.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />
          <div className="absolute top-3.5 left-3.5 bg-white/95 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            {getIcon()}
            <span className="font-display text-[10px] font-bold tracking-wider text-[#172D49]">
              PILLAR
            </span>
          </div>
          <div className="absolute bottom-3.5 left-4 right-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F4EBDD]">
              {pillar.title}
            </h3>
            <p className="font-display text-[11px] text-[#F4EBDD]/90">
              {pillar.tagline}
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-5">
          <ul className="space-y-2.5">
            {pillar.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#172D49]/85">
                <CheckCircle2
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: pillar.accentColor }}
                />
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#E6DED0] hover:bg-[#F47C68] hover:text-white text-[#172D49] font-display text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Explore Dimension</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-[#0F1E31]/75 backdrop-blur-sm" />

          <div className="relative w-full max-w-2xl bg-[#FAF5EE] rounded-3xl shadow-xl overflow-hidden border border-[#172D49]/15 z-10 max-h-[90vh] flex flex-col">
            <div className="relative h-44 w-full shrink-0 bg-[#E6DED0]">
              <Image src={pillar.image} alt={pillar.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172D49] via-[#172D49]/60 to-transparent" />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-display font-semibold uppercase bg-[#F47C68] text-white inline-block mb-1">
                  Sustainability Pillar
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {pillar.title} Dimension
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <h4 className="font-serif text-base font-bold text-[#172D49] mb-1">
                  Core Understanding
                </h4>
                <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-[#172D49] mb-2">
                  Foundational Principles
                </h4>
                <div className="space-y-2">
                  {pillar.principles.map((pr, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#E6DED0]/60 text-xs text-[#172D49] leading-relaxed">
                      {pr}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#DDE8DE]/70 border border-[#5B7866]/20 text-xs">
                <span className="font-display font-bold uppercase text-[#5B7866] block mb-0.5">
                  UN SDG Alignment
                </span>
                <p className="text-[#172D49] font-medium">{pillar.sdgConnections}</p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 rounded-full bg-[#172D49] text-white hover:bg-[#F47C68] font-display text-xs font-bold uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
