"use client";

import React from "react";
import { ewasteCategories } from "@/data/ewaste/categories";
import { EWasteCategoryType } from "@/types/ewaste";
import {
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  BatteryCharging,
  Zap,
  Cable,
  Tv,
  Printer,
  Keyboard,
  Headphones,
  Cpu,
} from "lucide-react";

interface CategoryPillsProps {
  selectedCategories: EWasteCategoryType[];
  onToggleCategory: (category: EWasteCategoryType) => void;
  onClearAll?: () => void;
}

const ICON_COMPONENTS: Record<string, React.ElementType> = {
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  BatteryCharging,
  Zap,
  Cable,
  Tv,
  Printer,
  Keyboard,
  Headphones,
  Cpu,
};

export default function CategoryPills({
  selectedCategories,
  onToggleCategory,
  onClearAll,
}: CategoryPillsProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-display">
        <span className="font-bold text-[#172D49] uppercase tracking-wider">
          Filter by Accepted E-Waste Category:
        </span>
        {selectedCategories.length > 0 && onClearAll && (
          <button
            onClick={onClearAll}
            className="text-[#F47C68] hover:underline font-medium"
          >
            Clear Selected ({selectedCategories.length})
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {ewasteCategories.map((cat) => {
          const Icon = ICON_COMPONENTS[cat.iconName] || Cpu;
          const isSelected = selectedCategories.includes(cat.id);

          return (
            <button
              key={cat.id}
              onClick={() => onToggleCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display transition-all ${
                isSelected
                  ? "bg-[#172D49] text-white shadow-sm ring-2 ring-[#F47C68]"
                  : "bg-white hover:bg-[#FAF5EE] text-[#172D49] border border-[#172D49]/15"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#F47C68]" : "text-[#5B7866]"}`} />
              <span>{cat.name.split("&")[0].trim()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
