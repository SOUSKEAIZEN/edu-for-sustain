"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { X, Calendar, CheckCircle2, Award, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sevenDayChallenge, ChallengeDay } from "@/data/actions";

const CHALLENGE_STORAGE_KEY = "ecolearn_7day_challenge_v1";

interface ChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChallengeModal({ isOpen, onClose }: ChallengeModalProps) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CHALLENGE_STORAGE_KEY);
      if (saved) {
        setCompletedDays(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const toggleDayCompletion = (dayNum: number) => {
    setCompletedDays((prev) => {
      let updated: number[];
      if (prev.includes(dayNum)) {
        updated = prev.filter((d) => d !== dayNum);
      } else {
        updated = [...prev, dayNum];
        if (updated.length === sevenDayChallenge.length) {
          try {
            confetti({
              particleCount: 150,
              spread: 90,
              origin: { y: 0.6 },
              colors: ["#172D49", "#F47C68", "#5B7866"],
            });
          } catch (e) {}
        }
      }
      try {
        localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  if (!isOpen) return null;

  const currentChallenge = sevenDayChallenge[activeDayIndex];
  const isDayDone = completedDays.includes(currentChallenge.day);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1E31]/75 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FAF5EE] rounded-3xl shadow-2xl overflow-hidden border border-[#172D49]/15 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-[#172D49] text-white flex items-center justify-between border-b border-[#F4EBDD]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F47C68] flex items-center justify-center text-white">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-[10px] uppercase tracking-widest text-[#DDE8DE]">
                  Interactive Milestone
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  7-Day Sustainability Challenge
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-white/80 hover:bg-[#263B52] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Day selection tabs */}
          <div className="p-4 bg-[#E6DED0] border-b border-[#172D49]/10 flex items-center gap-2 overflow-x-auto">
            {sevenDayChallenge.map((item, idx) => {
              const done = completedDays.includes(item.day);
              const isActive = activeDayIndex === idx;

              return (
                <button
                  key={item.day}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#172D49] text-white shadow-sm"
                      : done
                      ? "bg-[#DDE8DE] text-[#5B7866] border border-[#5B7866]/30"
                      : "bg-white text-[#172D49] hover:bg-[#FAF5EE]"
                  }`}
                >
                  {done && <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7866]" />}
                  <span>Day {item.day}</span>
                </button>
              );
            })}
          </div>

          {/* Active Day Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#F47C68] text-white">
                Day {currentChallenge.day} • {currentChallenge.theme}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-display font-semibold text-[#5B7866] bg-[#DDE8DE] px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5" />
                Badge: {currentChallenge.badge}
              </span>
            </div>

            <div>
              <h4 className="font-serif text-2xl font-bold text-[#172D49] mb-2">
                {currentChallenge.title}
              </h4>
              <p className="text-sm text-[#172D49]/80 leading-relaxed">
                {currentChallenge.summary}
              </p>
            </div>

            {/* Practical Task Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-2">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-[#F47C68]">
                Today&apos;s Specific Action Task:
              </h5>
              <p className="text-sm text-[#172D49] font-medium leading-relaxed">
                {currentChallenge.task}
              </p>
            </div>

            {/* Impact statement */}
            <div className="p-4 rounded-xl bg-[#DDE8DE]/70 border border-[#5B7866]/30 text-xs text-[#172D49] leading-relaxed">
              <span className="font-bold text-[#5B7866] block mb-1">
                Ecological & Socioeconomic Impact:
              </span>
              {currentChallenge.impactNote}
            </div>

            {/* Toggle Completion */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => toggleDayCompletion(currentChallenge.day)}
                className={`px-5 py-2.5 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isDayDone
                    ? "bg-[#5B7866] text-white"
                    : "bg-[#172D49] text-white hover:bg-[#F47C68]"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isDayDone ? "Day Completed! (Click to undo)" : "Mark Day Complete"}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveDayIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeDayIndex === 0}
                  className="p-2 rounded-full border border-[#172D49]/20 hover:bg-[#E6DED0] disabled:opacity-30"
                  aria-label="Previous day"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveDayIndex((prev) => Math.min(sevenDayChallenge.length - 1, prev + 1))
                  }
                  disabled={activeDayIndex === sevenDayChallenge.length - 1}
                  className="p-2 rounded-full border border-[#172D49]/20 hover:bg-[#E6DED0] disabled:opacity-30"
                  aria-label="Next day"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
