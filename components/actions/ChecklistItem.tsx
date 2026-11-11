import React from "react";
import { CheckSquare, Square, TreePine, Users, Coins } from "lucide-react";
import { ActionItem } from "@/data/actions";

interface ChecklistItemProps {
  action: ActionItem;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

export default function ChecklistItem({
  action,
  isCompleted,
  onToggle,
}: ChecklistItemProps) {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Environment":
        return <TreePine className="w-3 h-3 text-[#5B7866]" />;
      case "Society":
        return <Users className="w-3 h-3 text-[#F47C68]" />;
      case "Economy":
        return <Coins className="w-3 h-3 text-[#263B52]" />;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => onToggle(action.id)}
      className={`p-3.5 sm:p-4 rounded-2xl border transition-colors cursor-pointer flex items-start gap-3.5 ${
        isCompleted
          ? "bg-[#FAF5EE] border-[#5B7866]/30 opacity-70"
          : "bg-white border-[#172D49]/10 hover:border-[#172D49]/25 shadow-sm"
      }`}
    >
      <div className="mt-0.5 shrink-0 text-[#172D49]">
        {isCompleted ? (
          <CheckSquare className="w-5 h-5 text-[#5B7866]" />
        ) : (
          <Square className="w-5 h-5 text-[#172D49]/40" />
        )}
      </div>

      <div className="flex-grow space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4
            className={`font-serif text-sm sm:text-base font-bold text-[#172D49] ${
              isCompleted ? "line-through text-[#172D49]/50" : ""
            }`}
          >
            {action.title}
          </h4>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-display font-semibold uppercase bg-[#E6DED0] text-[#172D49]">
            {getCategoryIcon(action.category)}
            {action.category}
          </span>
          <span className="px-1.5 py-0.5 rounded-full text-[10px] font-display text-[#5B7866] bg-[#DDE8DE] font-bold">
            +{action.impactScore} Pts
          </span>
        </div>

        <p className="text-xs text-[#172D49]/80 leading-relaxed">
          {action.description}
        </p>

        <p className="text-[11px] text-[#F47C68] font-display">
          💡 {action.practicalTip}
        </p>
      </div>
    </div>
  );
}
