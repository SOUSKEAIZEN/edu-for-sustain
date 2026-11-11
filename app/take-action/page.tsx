"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DimensionCards from "@/components/actions/DimensionCards";
import ActionChecklist from "@/components/ActionChecklist";
import ChallengeModal from "@/components/ChallengeModal";
import { sevenDayChallenge } from "@/data/actions";

export default function TakeActionPage() {
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49] border border-[#172D49]/10">
          Transform Awareness Into Action
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#172D49]">
          Small actions. <span className="text-[#F47C68]">Lasting impact.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#172D49]/80 leading-relaxed font-sans">
          Sustainability is built through daily, conscious decisions. Track your daily habits, undertake the 7-Day Challenge, and contribute to ecological rejuvenation.
        </p>
      </div>

      <DimensionCards />

      <section className="scroll-mt-24">
        <SectionHeading
          label="Daily Habit Tracker"
          title="Interactive Daily"
          highlight="Checklist"
          description="Build consistency. Check off actions you completed today, watch your progress bar advance, and collect impact points. Stored privately in your local browser."
        />

        <ActionChecklist />
      </section>

      <section className="bg-[#172D49] text-[#F4EBDD] rounded-3xl p-6 sm:p-12 shadow-xl">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/15">
              Structured Weekly Milestone
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4EBDD]">
              The 7-Day Sustainability <span className="text-[#F47C68]">Challenge</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#F4EBDD]/80 max-w-lg mx-auto font-sans leading-relaxed">
              One intentional action each day to transform personal habits and build enduring ecological consciousness.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {sevenDayChallenge.map((day) => (
              <div
                key={day.day}
                onClick={() => setIsChallengeModalOpen(true)}
                className="p-3.5 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/10 hover:border-[#F47C68] transition-colors cursor-pointer text-center flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-xs font-bold text-[#F47C68] block mb-1">
                    Day {day.day}
                  </span>
                  <h4 className="font-serif text-xs font-bold text-white line-clamp-2">
                    {day.title}
                  </h4>
                </div>
                <div className="mt-2 text-[10px] font-display text-[#DDE8DE] bg-[#172D49] px-2 py-0.5 rounded">
                  {day.theme}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setIsChallengeModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Launch 7-Day Challenge Tracker</span>
            </button>
          </div>
        </div>
      </section>

      <ChallengeModal
        isOpen={isChallengeModalOpen}
        onClose={() => setIsChallengeModalOpen(false)}
      />
    </div>
  );
}
