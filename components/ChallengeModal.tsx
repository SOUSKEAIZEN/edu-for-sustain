"use client";

import React, { useEffect } from "react";
import { X, Calendar, CheckCircle2, Award, ArrowRight, ArrowLeft } from "lucide-react";
import { sevenDayChallenge } from "@/data/actions";
import { useChallenge } from "@/hooks/useChallenge";

interface ChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChallengeModal({ isOpen, onClose }: ChallengeModalProps) {
  const {
    activeDayIndex,
    setActiveDayIndex,
    completedDays,
    currentChallenge,
    isDayDone,
    toggleDay,
  } = useChallenge();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-[#0F1E31]/75 backdrop-blur-sm" />

      <div className="relative w-full max-w-2xl bg-[#FAF5EE] rounded-3xl shadow-xl overflow-hidden border border-[#172D49]/15 z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#172D49] text-white flex items-center justify-between border-b border-[#F4EBDD]/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F47C68] flex items-center justify-center text-white shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="font-display text-[9px] sm:text-[10px] uppercase tracking-widest text-[#DDE8DE]">
                Milestone
              </span>
              <h3 className="font-serif text-base sm:text-xl font-bold">
                7-Day Sustainability Challenge
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#263B52] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Day selection tabs */}
        <div className="p-2.5 sm:p-3 bg-[#E6DED0] border-b border-[#172D49]/10 flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
          {sevenDayChallenge.map((item, idx) => {
            const done = completedDays.includes(item.day);
            const isActive = activeDayIndex === idx;

            return (
              <button
                key={item.day}
                onClick={() => setActiveDayIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold shrink-0 transition-colors flex items-center gap-1 min-h-[36px] ${
                  isActive
                    ? "bg-[#172D49] text-white shadow-sm"
                    : done
                    ? "bg-[#DDE8DE] text-[#5B7866]"
                    : "bg-white text-[#172D49]"
                }`}
              >
                {done && <CheckCircle2 className="w-3 h-3 text-[#5B7866]" />}
                <span>Day {item.day}</span>
              </button>
            );
          })}
        </div>

        {/* Active Day Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 sm:space-y-4 flex-grow">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-display font-bold uppercase tracking-wider bg-[#F47C68] text-white">
              Day {currentChallenge.day} • {currentChallenge.theme}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-display font-semibold text-[#5B7866] bg-[#DDE8DE] px-2.5 py-0.5 rounded-full">
              <Award className="w-3 h-3" />
              Badge: {currentChallenge.badge}
            </span>
          </div>

          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#172D49] mb-1">
              {currentChallenge.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
              {currentChallenge.summary}
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-1">
            <h5 className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F47C68]">
              Today&apos;s Specific Action Task:
            </h5>
            <p className="text-xs sm:text-sm text-[#172D49] font-medium leading-relaxed">
              {currentChallenge.task}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#DDE8DE]/70 border border-[#5B7866]/30 text-xs text-[#172D49] leading-relaxed">
            <span className="font-bold text-[#5B7866] block mb-0.5">Ecological Impact:</span>
            {currentChallenge.impactNote}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => toggleDay(currentChallenge.day)}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 min-h-[42px] ${
                isDayDone
                  ? "bg-[#5B7866] text-white"
                  : "bg-[#172D49] text-white hover:bg-[#F47C68]"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isDayDone ? "Day Completed!" : "Mark Day Complete"}</span>
            </button>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => setActiveDayIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeDayIndex === 0}
                className="p-2 rounded-full border border-[#172D49]/20 hover:bg-[#E6DED0] disabled:opacity-30 min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="Previous day"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setActiveDayIndex((prev) => Math.min(sevenDayChallenge.length - 1, prev + 1))
                }
                disabled={activeDayIndex === sevenDayChallenge.length - 1}
                className="p-2 rounded-full border border-[#172D49]/20 hover:bg-[#E6DED0] disabled:opacity-30 min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="Next day"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
