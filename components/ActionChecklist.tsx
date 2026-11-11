"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  CheckSquare,
  Square,
  RotateCcw,
  Sparkles,
  TreePine,
  Users,
  Coins,
  ShieldAlert,
  Flame,
} from "lucide-react";
import { dailyActionsData, ActionItem } from "@/data/actions";

const LOCAL_STORAGE_KEY = "ecolearn_daily_checklist_v1";

export default function ActionChecklist() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isClient, setIsClient] = useState(false);

  // Initialize from LocalStorage
  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setCompletedIds(JSON.parse(saved));
      }
    } catch (e) {
      // LocalStorage access handling
    }
  }, []);

  // Save changes to LocalStorage
  const handleToggle = (id: string) => {
    setCompletedIds((prev) => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter((item) => item !== id);
      } else {
        updated = [...prev, id];
        // If all items completed, fire celebration
        if (updated.length === dailyActionsData.length) {
          try {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: ["#172D49", "#F47C68", "#5B7866"],
            });
          } catch (err) {}
        }
      }

      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {}

      return updated;
    });
  };

  const handleReset = () => {
    setCompletedIds([]);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {}
  };

  const filteredActions = dailyActionsData.filter(
    (action) =>
      selectedCategory === "All" ||
      action.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const totalCount = dailyActionsData.length;
  const completedCount = completedIds.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const totalPointsEarned = dailyActionsData
    .filter((action) => completedIds.includes(action.id))
    .reduce((sum, item) => sum + item.impactScore, 0);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Environment":
        return <TreePine className="w-3.5 h-3.5 text-[#5B7866]" />;
      case "Society":
        return <Users className="w-3.5 h-3.5 text-[#F47C68]" />;
      case "Economy":
        return <Coins className="w-3.5 h-3.5 text-[#263B52]" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-10 border border-[#172D49]/10 shadow-editorial">
      {/* Progress Dashboard */}
      <div className="pb-8 border-b border-[#172D49]/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-wider text-[#F47C68] block mb-1">
              Active Daily Sustainability Tracker
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#172D49]">
              Your Impact Today
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#172D49]">
                {progressPercent}%
              </p>
              <p className="font-display text-[11px] text-[#172D49]/60 uppercase tracking-wider">
                {completedCount} of {totalCount} Completed
              </p>
            </div>

            <button
              onClick={handleReset}
              title="Reset checklist"
              className="p-2.5 rounded-full bg-[#E6DED0] hover:bg-[#F47C68] hover:text-white text-[#172D49] transition-colors"
              aria-label="Reset checklist"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="w-full h-3 rounded-full bg-[#E6DED0] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#263B52] via-[#F47C68] to-[#5B7866] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-display text-[#172D49]/70">
            <span>Points Earned: {totalPointsEarned} Impact Pts</span>
            <span>{progressPercent === 100 ? "🌟 All Goals Completed!" : "Keep going!"}</span>
          </div>
        </div>

        {/* Local Storage Notice */}
        <div className="p-3 rounded-xl bg-white/70 border border-[#172D49]/10 flex items-center gap-2 text-xs text-[#172D49]/70">
          <ShieldAlert className="w-4 h-4 text-[#F47C68] shrink-0" />
          <span>
            Progress is stored locally in your current browser. No external database or account required.
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="pt-6 pb-4 flex flex-wrap items-center gap-2">
        {["All", "Environment", "Society", "Economy"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
              selectedCategory === cat
                ? "bg-[#172D49] text-white shadow-sm font-bold"
                : "bg-white text-[#172D49] border border-[#172D49]/15 hover:bg-[#E6DED0]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Checklist Items */}
      <div className="space-y-3 pt-2">
        {filteredActions.map((action) => {
          const isDone = isClient && completedIds.includes(action.id);

          return (
            <div
              key={action.id}
              onClick={() => handleToggle(action.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                isDone
                  ? "bg-[#FAF5EE] border-[#5B7866]/30 opacity-75"
                  : "bg-white border-[#172D49]/10 hover:border-[#172D49]/30 shadow-sm"
              }`}
            >
              <button
                type="button"
                className="mt-0.5 shrink-0 text-[#172D49] focus:outline-none"
                aria-label={isDone ? "Mark incomplete" : "Mark complete"}
              >
                {isDone ? (
                  <CheckSquare className="w-5 h-5 text-[#5B7866]" />
                ) : (
                  <Square className="w-5 h-5 text-[#172D49]/40 hover:text-[#F47C68]" />
                )}
              </button>

              <div className="flex-grow space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4
                    className={`font-serif text-base font-bold text-[#172D49] ${
                      isDone ? "line-through text-[#172D49]/60" : ""
                    }`}
                  >
                    {action.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-display font-semibold uppercase bg-[#E6DED0] text-[#172D49]">
                    {getCategoryIcon(action.category)}
                    {action.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-display text-[#5B7866] bg-[#DDE8DE] font-bold">
                    +{action.impactScore} Pts
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
                  {action.description}
                </p>

                <p className="text-[11px] text-[#F47C68] font-display pt-1">
                  💡 Tip: {action.practicalTip}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
