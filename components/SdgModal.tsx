"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Target, Flag, BookOpen, ExternalLink, Sparkles } from "lucide-react";
import { SDG } from "@/data/sdgs";

interface SdgModalProps {
  sdg: SDG | null;
  onClose: () => void;
}

export default function SdgModal({ sdg, onClose }: SdgModalProps) {
  useEffect(() => {
    if (sdg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sdg]);

  if (!sdg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-[#0F1E31]/75 backdrop-blur-sm" />

      <div className="relative w-full max-w-3xl bg-[#FAF5EE] rounded-3xl shadow-xl overflow-hidden border border-[#172D49]/15 z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div
          className="relative h-36 sm:h-44 md:h-48 w-full shrink-0 flex items-end p-4 sm:p-5"
          style={{ backgroundColor: sdg.color }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={sdg.image}
              alt={sdg.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover opacity-25 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors z-20 min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10 text-white">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-display text-[9px] sm:text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/20">
                Category: {sdg.category}
              </span>
              <span className="font-display text-[9px] sm:text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/20">
                UN 2030 Agenda
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-2xl font-bold flex items-baseline gap-1.5 leading-tight">
              <span className="font-display opacity-80 text-sm sm:text-lg">SDG {sdg.number}:</span>
              {sdg.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#172D49] mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F47C68]" />
              Goal Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#172D49]/85 leading-relaxed">
              {sdg.fullDescription}
            </p>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/20">
            <h4 className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B7866] mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              EfS Curriculum Focus
            </h4>
            <p className="text-xs sm:text-sm text-[#172D49] font-medium leading-relaxed">
              {sdg.educationFocus}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#172D49] mb-2 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#F47C68]" />
              Key UN Targets
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sdg.targets.map((target, idx) => (
                <li
                  key={idx}
                  className="p-2 sm:p-2.5 rounded-xl bg-[#E6DED0]/60 border border-[#172D49]/10 text-xs text-[#172D49] leading-relaxed flex items-start gap-2"
                >
                  <span className="font-display font-bold text-[#F47C68] text-[11px]">
                    {sdg.id}.{idx + 1}
                  </span>
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#172D49] flex items-center gap-1.5">
                <Flag className="w-3.5 h-3.5 text-[#F47C68]" />
                Mapped Indian Initiatives
              </h4>
              <span className="text-[10px] font-display text-[#172D49]/60 italic">From EfS Study</span>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {sdg.indianInitiatives.map((item, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#172D49]/10 shadow-sm">
                  <h5 className="font-display text-xs font-bold text-[#172D49] mb-0.5">{item.name}</h5>
                  <p className="text-[11px] sm:text-xs text-[#172D49]/75 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 sm:pt-3 border-t border-[#172D49]/10 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <a
              href={`https://sdgs.un.org/goals/goal${sdg.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-display text-[#172D49]/70 hover:text-[#172D49]"
            >
              <span>View Official UN Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider min-h-[40px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
