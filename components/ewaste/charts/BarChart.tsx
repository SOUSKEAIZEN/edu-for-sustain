"use client";

import React, { useState } from "react";

interface BarChartItem {
  label: string;
  value: number;
  secondaryValue?: number;
  formattedValue?: string;
}

interface BarChartProps {
  data: BarChartItem[];
  title?: string;
  subtitle?: string;
  barColor?: string;
  height?: number;
}

export default function BarChart({
  data,
  title,
  subtitle,
  barColor = "#172D49",
  height = 200,
}: BarChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="bg-white p-5 rounded-2xl border border-[#172D49]/10 shadow-sm space-y-4">
      {(title || subtitle) && (
        <div>
          {title && <h4 className="font-serif text-sm font-bold text-[#172D49]">{title}</h4>}
          {subtitle && <p className="text-xs text-[#172D49]/60 font-sans">{subtitle}</p>}
        </div>
      )}

      <div className="relative pt-6">
        <div
          className="flex items-end justify-between gap-1.5 sm:gap-3 border-b border-[#172D49]/15 pb-2"
          style={{ height: `${height}px` }}
        >
          {data.map((item, idx) => {
            const barHeightPct = Math.round((item.value / maxValue) * 100);
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute -top-8 z-20 bg-[#172D49] text-white text-[10px] font-mono px-2 py-0.5 rounded shadow-sm whitespace-nowrap animate-in fade-in">
                    {item.formattedValue || `${item.value} Tonnes`}
                  </div>
                )}

                {/* Vertical Bar */}
                <div
                  className="w-full rounded-t-md transition-all duration-300"
                  style={{
                    height: `${barHeightPct}%`,
                    backgroundColor: isHovered ? "#F47C68" : barColor,
                    minHeight: "4px",
                  }}
                />

                {/* X-Axis Label */}
                <span className="text-[10px] text-[#172D49]/70 font-display truncate w-full text-center mt-2">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
