"use client";

import React, { useState } from "react";

interface AreaLinePoint {
  label: string;
  value: number;
  target?: number;
}

interface AreaLineChartProps {
  data: AreaLinePoint[];
  title?: string;
  subtitle?: string;
  height?: number;
}

export default function AreaLineChart({
  data,
  title,
  subtitle,
  height = 200,
}: AreaLineChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const width = 600;
  const padding = 30;
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  const maxValue = Math.max(...data.map((d) => Math.max(d.value, d.target || 0)), 1) * 1.15;
  const minValue = 0;

  const getX = (index: number) => padding + (index / (data.length - 1)) * usableWidth;
  const getY = (val: number) => height - padding - ((val - minValue) / (maxValue - minValue)) * usableHeight;

  // Build SVG path points
  const points = data.map((d, i) => `${getX(i)},${getY(d.value)}`).join(" ");
  const areaPath = `M ${getX(0)},${height - padding} L ${points} L ${getX(data.length - 1)},${height - padding} Z`;

  return (
    <div className="bg-white p-5 rounded-2xl border border-[#172D49]/10 shadow-sm space-y-4">
      {(title || subtitle) && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            {title && <h4 className="font-serif text-sm font-bold text-[#172D49]">{title}</h4>}
            {subtitle && <p className="text-xs text-[#172D49]/60 font-sans">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-3 text-xs font-display">
            <span className="flex items-center gap-1.5 text-[#172D49]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F47C68]" />
              <span>Diverted (Tonnes)</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#5B7866]">
              <span className="w-2.5 h-0.5 bg-[#5B7866]" />
              <span>MoEFCC Target</span>
            </span>
          </div>
        </div>
      )}

      <div className="relative w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[400px]">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F47C68" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F47C68" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <path d={areaPath} fill="url(#areaGradient)" />

          {/* Actual Line */}
          <polyline fill="none" stroke="#F47C68" strokeWidth="3" points={points} strokeLinecap="round" />

          {/* Target Dashed Line if present */}
          {data[0].target !== undefined && (
            <polyline
              fill="none"
              stroke="#5B7866"
              strokeWidth="2"
              strokeDasharray="4 4"
              points={data.map((d, i) => `${getX(i)},${getY(d.target || 0)}`).join(" ")}
            />
          )}

          {/* Points & Interactive Hover Circles */}
          {data.map((d, i) => {
            const cx = getX(i);
            const cy = getY(d.value);
            const isHovered = hoveredIdx === i;

            return (
              <g key={i}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 6 : 4}
                  fill={isHovered ? "#172D49" : "#F47C68"}
                  stroke="white"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />

                {/* X Axis Label */}
                <text
                  x={cx}
                  y={height - 8}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#172D49"
                  fillOpacity="0.7"
                  fontFamily="sans-serif"
                >
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip readout */}
        {hoveredIdx !== null && (
          <div className="text-center text-xs font-mono text-[#172D49] mt-1 bg-[#FAF5EE] py-1 px-3 rounded-md border border-[#172D49]/10 inline-block">
            <strong>{data[hoveredIdx].label}:</strong> {data[hoveredIdx].value} Tonnes collected
            {data[hoveredIdx].target && ` (Target: ${data[hoveredIdx].target} T)`}
          </div>
        )}
      </div>
    </div>
  );
}
