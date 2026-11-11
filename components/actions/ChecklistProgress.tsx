import React from "react";
import { RotateCcw, ShieldAlert } from "lucide-react";

interface ChecklistProgressProps {
  progressPercent: number;
  completedCount: number;
  totalCount: number;
  totalPoints: number;
  onReset: () => void;
}

export default function ChecklistProgress({
  progressPercent,
  completedCount,
  totalCount,
  totalPoints,
  onReset,
}: ChecklistProgressProps) {
  return (
    <div className="pb-6 border-b border-[#172D49]/10 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="font-display text-xs font-bold uppercase tracking-wider text-[#F47C68] block mb-1">
            Active Daily Sustainability Tracker
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#172D49]">
            Your Impact Today
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-display text-2xl font-bold text-[#172D49]">
              {progressPercent}%
            </p>
            <p className="font-display text-[11px] text-[#172D49]/60 uppercase">
              {completedCount} of {totalCount} Done
            </p>
          </div>

          <button
            onClick={onReset}
            className="p-2 rounded-full bg-[#E6DED0] hover:bg-[#F47C68] hover:text-white text-[#172D49] transition-colors"
            aria-label="Reset checklist"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <div className="w-full h-2.5 rounded-full bg-[#E6DED0] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#263B52] via-[#F47C68] to-[#5B7866] transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] font-display text-[#172D49]/70">
          <span>Points Earned: {totalPoints} Pts</span>
          <span>{progressPercent === 100 ? "🌟 All Completed!" : "Keep going!"}</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-white/70 border border-[#172D49]/10 flex items-center gap-2 text-xs text-[#172D49]/70">
        <ShieldAlert className="w-3.5 h-3.5 text-[#F47C68] shrink-0" />
        <span>Stored privately in your browser. No external database or account required.</span>
      </div>
    </div>
  );
}
