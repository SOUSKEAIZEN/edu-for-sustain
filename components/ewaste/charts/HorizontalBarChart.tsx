"use client";

import React from "react";

interface HorizontalBarItem {
  label: string;
  sublabel?: string;
  value: number; // 0 to 100
  status?: string;
}

interface HorizontalBarChartProps {
  data: HorizontalBarItem[];
  title?: string;
  subtitle?: string;
}

export default function HorizontalBarChart({
  data,
  title,
  subtitle,
}: HorizontalBarChartProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-[#172D49]/10 shadow-sm space-y-4">
      {(title || subtitle) && (
        <div>
          {title && <h4 className="font-serif text-sm font-bold text-[#172D49]">{title}</h4>}
          {subtitle && <p className="text-xs text-[#172D49]/60 font-sans">{subtitle}</p>}
        </div>
      )}

      <div className="space-y-3">
        {data.map((item, idx) => {
          const isFull = item.value >= 90;
          const isModerate = item.value >= 70;
          const barColor = isFull ? "#DC2626" : isModerate ? "#D97706" : "#5B7866";

          return (
            <div key={idx} className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <div className="truncate pr-2">
                  <span className="font-bold text-[#172D49]">{item.label}</span>
                  {item.sublabel && (
                    <span className="text-[#172D49]/50 text-[11px] ml-1.5">
                      ({item.sublabel})
                    </span>
                  )}
                </div>
                <span className="font-mono font-bold text-[#172D49] shrink-0">
                  {item.value}%
                </span>
              </div>

              <div className="w-full h-2 bg-[#FAF5EE] rounded-full overflow-hidden border border-[#172D49]/10">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: barColor,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
