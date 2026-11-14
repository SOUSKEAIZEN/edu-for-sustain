"use client";

import React, { useState } from "react";

interface DoughnutSlice {
  label: string;
  value: number;
  color: string;
  sublabel?: string;
}

interface DoughnutChartProps {
  data: DoughnutSlice[];
  title?: string;
  centerText?: string;
  centerSubtext?: string;
  size?: number;
}

export default function DoughnutChart({
  data,
  title,
  centerText,
  centerSubtext,
  size = 240,
}: DoughnutChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativeAngle = 0;

  return (
    <div className="bg-white p-5 rounded-2xl border border-[#172D49]/10 shadow-sm space-y-4">
      {title && (
        <h4 className="font-serif text-sm font-bold text-[#172D49]">{title}</h4>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* SVG Circle */}
        <div className="relative shrink-0" style={{ width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
            {/* Background Track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="#F4EBDD"
              strokeWidth={strokeWidth}
            />

            {/* Slices */}
            {data.map((slice, idx) => {
              const slicePercentage = total > 0 ? slice.value / total : 0;
              const strokeDasharray = `${slicePercentage * circumference} ${circumference}`;
              const strokeDashoffset = -cumulativeAngle * circumference;
              cumulativeAngle += slicePercentage;

              const isHovered = hoveredIdx === idx;

              return (
                <circle
                  key={idx}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={slice.color}
                  strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              );
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
            <span className="font-display font-black text-2xl text-[#172D49] leading-tight">
              {hoveredIdx !== null ? `${data[hoveredIdx].value}%` : centerText || `${total}%`}
            </span>
            <span className="text-[11px] text-[#172D49]/60 font-sans truncate max-w-[120px]">
              {hoveredIdx !== null ? data[hoveredIdx].label : centerSubtext || "Total Share"}
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2 flex-1 w-full max-w-xs">
          {data.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex items-center justify-between text-xs p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isHovered ? "bg-[#FAF5EE]" : "hover:bg-[#FAF5EE]/50"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-sans text-[#172D49] truncate">{item.label}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0 font-mono">
                  <span className="font-bold text-[#172D49]">{item.value}%</span>
                  {item.sublabel && (
                    <span className="text-[10px] text-[#172D49]/50">({item.sublabel})</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
