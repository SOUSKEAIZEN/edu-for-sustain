"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  TreePine,
  Users,
  Coins,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Flame,
  Award,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ActionChecklist from "@/components/ActionChecklist";
import ChallengeModal from "@/components/ChallengeModal";
import { sevenDayChallenge } from "@/data/actions";

export default function TakeActionPage() {
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49] border border-[#172D49]/10">
          Transform Awareness Into Action
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#172D49]">
          Small actions. <br />
          <span className="text-[#F47C68]">Lasting impact.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#172D49]/80 leading-relaxed font-sans">
          Sustainability is built through daily, conscious decisions. Track your daily habits, undertake the 7-Day Sustainability Challenge, and contribute to ecological rejuvenation.
        </p>
      </div>

      {/* =========================================================================
          PRACTICAL CATEGORY CARDS (Environment, Society, Economy)
      ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Environment Card */}
        <div className="p-8 rounded-3xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-editorial space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#DDE8DE] text-[#5B7866] flex items-center justify-center">
              <TreePine className="w-6 h-6" />
            </div>

            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#5B7866] block">
              Dimension 01
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#172D49]">
              Environment
            </h3>

            <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
              Preserve natural capital and planetary boundaries through direct conservation habits:
            </p>

            <ul className="space-y-2.5 text-xs text-[#172D49]/85">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B7866] shrink-0" />
                <span>Save electricity & eliminate phantom loads</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B7866] shrink-0" />
                <span>Conserve water with 5-minute showers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B7866] shrink-0" />
                <span>Eliminate single-use plastic bottles & cutlery</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B7866] shrink-0" />
                <span>Plant, adopt and nurture native trees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B7866] shrink-0" />
                <span>Utilize bicycles or electrified mass transit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Society Card */}
        <div className="p-8 rounded-3xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-editorial space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FCD8D2] text-[#F47C68] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>

            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68] block">
              Dimension 02
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#172D49]">
              Society
            </h3>

            <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
              Strengthen community cohesion, equity, and educational opportunities:
            </p>

            <ul className="space-y-2.5 text-xs text-[#172D49]/85">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47C68] shrink-0" />
                <span>Share open educational sustainability guides</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47C68] shrink-0" />
                <span>Support inclusive education & donate study devices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47C68] shrink-0" />
                <span>Volunteer in local cleanup drives & community gardens</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47C68] shrink-0" />
                <span>Promote gender equality & environmental justice</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47C68] shrink-0" />
                <span>Amplify vulnerable frontline climate voices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Economy Card */}
        <div className="p-8 rounded-3xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-editorial space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E6DED0] text-[#172D49] flex items-center justify-center">
              <Coins className="w-6 h-6" />
            </div>

            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#172D49] block">
              Dimension 03
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#172D49]">
              Economy
            </h3>

            <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
              Decouple economic welfare from toxic resource destruction:
            </p>

            <ul className="space-y-2.5 text-xs text-[#172D49]/85">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#172D49] shrink-0" />
                <span>Avoid food waste & compost organic kitchen scraps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#172D49] shrink-0" />
                <span>Buy responsibly with a 48-hour purchase pause</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#172D49] shrink-0" />
                <span>Repair, sew, and mend instead of discarding</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#172D49] shrink-0" />
                <span>Support local circular businesses & certified B-corps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#172D49] shrink-0" />
                <span>Properly segregate electronic and toxic waste</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE DAILY CHECKLIST SECTION
      ========================================================================= */}
      <section className="scroll-mt-24">
        <SectionHeading
          label="Daily Habit Tracker"
          title="Interactive Daily"
          highlight="Checklist"
          description="Build consistency. Check off actions you completed today, watch your progress bar advance, and collect impact points. Stored privately in your local browser."
        />

        <ActionChecklist />
      </section>

      {/* =========================================================================
          7-DAY SUSTAINABILITY CHALLENGE SECTION
      ========================================================================= */}
      <section className="bg-[#172D49] text-[#F4EBDD] rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47C68]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/15">
              Structured Weekly Milestone
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EBDD]">
              The 7-Day Sustainability <span className="text-[#F47C68]">Challenge</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F4EBDD]/80 max-w-xl mx-auto font-sans leading-relaxed">
              One intentional action each day to transform personal habits and build enduring ecological consciousness.
            </p>
          </div>

          {/* 7 Day Preview Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {sevenDayChallenge.map((day) => (
              <div
                key={day.day}
                onClick={() => setIsChallengeModalOpen(true)}
                className="p-4 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/10 hover:border-[#F47C68] transition-all cursor-pointer text-center group flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-xs font-bold text-[#F47C68] block mb-1">
                    Day {day.day}
                  </span>
                  <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#F4EBDD] line-clamp-2">
                    {day.title}
                  </h4>
                </div>
                <div className="mt-3 text-[10px] font-display text-[#DDE8DE] bg-[#172D49] px-2 py-1 rounded-md">
                  {day.theme}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setIsChallengeModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Launch 7-Day Challenge Tracker</span>
            </button>
          </div>
        </div>
      </section>

      {/* Challenge Interactive Modal */}
      <ChallengeModal
        isOpen={isChallengeModalOpen}
        onClose={() => setIsChallengeModalOpen(false)}
      />
    </div>
  );
}
