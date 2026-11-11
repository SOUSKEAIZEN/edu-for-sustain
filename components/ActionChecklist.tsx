"use client";

import React from "react";
import { useChecklist } from "@/hooks/useChecklist";
import ChecklistProgress from "./actions/ChecklistProgress";
import ChecklistItem from "./actions/ChecklistItem";

export default function ActionChecklist() {
  const {
    isMounted,
    completedIds,
    selectedCategory,
    setSelectedCategory,
    filteredActions,
    totalCount,
    completedCount,
    progressPercent,
    totalPoints,
    handleToggle,
    handleReset,
  } = useChecklist();

  const categories = ["All", "Environment", "Society", "Economy"];

  return (
    <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm">
      <ChecklistProgress
        progressPercent={progressPercent}
        completedCount={completedCount}
        totalCount={totalCount}
        totalPoints={totalPoints}
        onReset={handleReset}
      />

      <div className="pt-5 pb-3 flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1 rounded-full text-xs font-display font-medium transition-all ${
              selectedCategory === cat
                ? "bg-[#172D49] text-white font-bold"
                : "bg-white text-[#172D49] border border-[#172D49]/15 hover:bg-[#E6DED0]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2.5 pt-1">
        {filteredActions.map((action) => (
          <ChecklistItem
            key={action.id}
            action={action}
            isCompleted={isMounted && completedIds.includes(action.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
