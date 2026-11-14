import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  trendText?: string;
  trendPositive?: boolean;
  icon: LucideIcon;
  badge?: string;
}

export default function StatCard({
  label,
  value,
  subtext,
  trendText,
  trendPositive = true,
  icon: Icon,
  badge,
}: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-[#172D49]/10 shadow-sm space-y-3 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 flex items-center justify-center text-[#F47C68]">
          <Icon className="w-5 h-5" />
        </div>
        {badge && (
          <span className="text-[10px] font-display font-bold uppercase tracking-wider bg-[#172D49]/10 text-[#172D49] px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
      </div>

      <div>
        <p className="text-xs font-display uppercase tracking-wider text-[#172D49]/60 font-medium">
          {label}
        </p>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-[#172D49] tracking-tight mt-0.5">
          {value}
        </h3>
      </div>

      {(subtext || trendText) && (
        <div className="flex items-center justify-between text-xs pt-1 border-t border-[#172D49]/5 font-sans">
          {subtext && <span className="text-[#172D49]/70 text-[11px]">{subtext}</span>}
          {trendText && (
            <span
              className={`font-display font-bold text-[11px] ${
                trendPositive ? "text-[#5B7866]" : "text-[#DC2626]"
              }`}
            >
              {trendPositive ? "↑ " : "↓ "}
              {trendText}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
