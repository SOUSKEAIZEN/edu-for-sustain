"use client";

import React from "react";
import Image from "next/image";
import { X, Target, Flag, BookOpen, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SDG } from "@/data/sdgs";

interface SdgModalProps {
  sdg: SDG | null;
  onClose: () => void;
}

export default function SdgModal({ sdg, onClose }: SdgModalProps) {
  if (!sdg) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1E31]/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-3xl bg-[#FAF5EE] rounded-3xl shadow-2xl overflow-hidden border border-[#172D49]/15 z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Banner */}
          <div
            className="relative h-44 sm:h-52 w-full shrink-0 flex items-end p-6"
            style={{ backgroundColor: sdg.color }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={sdg.image}
                alt={sdg.title}
                fill
                className="object-cover opacity-25 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 text-white">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-display text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                  Category: {sdg.category}
                </span>
                <span className="font-display text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                  UN 2030 Agenda
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold flex items-baseline gap-2">
                <span className="font-display opacity-80 text-xl sm:text-2xl">
                  SDG {sdg.number}:
                </span>
                {sdg.title}
              </h3>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Overview */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#172D49] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F47C68]" />
                Goal Overview
              </h4>
              <p className="text-sm text-[#172D49]/85 leading-relaxed">
                {sdg.fullDescription}
              </p>
            </div>

            {/* EfS Curriculum Integration Focus */}
            <div className="p-4 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/20">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#5B7866] mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Education for Sustainability (EfS) Curriculum Focus
              </h4>
              <p className="text-sm text-[#172D49] font-medium leading-relaxed">
                {sdg.educationFocus}
              </p>
            </div>

            {/* Official Key Targets */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#172D49] mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-[#F47C68]" />
                Key UN Targets
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {sdg.targets.map((target, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-xl bg-[#E6DED0]/60 border border-[#172D49]/10 text-xs text-[#172D49] leading-relaxed flex items-start gap-2"
                  >
                    <span className="font-display font-bold text-[#F47C68]">
                      {sdg.id}.{idx + 1}
                    </span>
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Indian Governmental Initiatives (Mapped in Research) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-lg font-bold text-[#172D49] flex items-center gap-2">
                  <Flag className="w-4 h-4 text-[#F47C68]" />
                  Mapped Indian Government Initiatives
                </h4>
                <span className="text-[11px] font-display text-[#172D49]/60 italic">
                  From EfS Research Analysis
                </span>
              </div>
              <div className="space-y-2.5">
                {sdg.indianInitiatives.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#172D49]/10 shadow-sm"
                  >
                    <h5 className="font-display text-xs font-bold text-[#172D49] mb-1">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#172D49]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-[#172D49]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://sdgs.un.org/goals/goal${sdg.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-display font-medium text-[#172D49]/70 hover:text-[#172D49] transition-colors"
              >
                <span>View on Official UN Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Close Explorer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
