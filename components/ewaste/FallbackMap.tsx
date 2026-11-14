"use client";

import React, { useState } from "react";
import { CollectionCentre, GeoCoordinates } from "@/types/ewaste";
import { MapPin, Info, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface FallbackMapProps {
  centres: CollectionCentre[];
  selectedCentre: CollectionCentre | null;
  onSelectCentre: (centre: CollectionCentre) => void;
  userCoordinates?: GeoCoordinates;
  className?: string;
}

// Bounding box for Delhi NCR & surrounding Haryana
const MIN_LAT = 28.1;
const MAX_LAT = 29.45;
const MIN_LNG = 76.55;
const MAX_LNG = 77.45;

const SVG_WIDTH = 800;
const SVG_HEIGHT = 650;

function projectCoords(lat: number, lng: number): { x: number; y: number } {
  // Linear projection to SVG coordinates with Y inverted
  const x = ((lng - MIN_LNG) / (MAX_LNG - MIN_LNG)) * SVG_WIDTH;
  const y = SVG_HEIGHT - ((lat - MIN_LAT) / (MAX_LAT - MIN_LAT)) * SVG_HEIGHT;
  return { x: Math.round(x), y: Math.round(y) };
}

export default function FallbackMap({
  centres,
  selectedCentre,
  onSelectCentre,
  userCoordinates,
  className = "w-full h-full min-h-[450px]",
}: FallbackMapProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [hoveredCentre, setHoveredCentre] = useState<CollectionCentre | null>(null);

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(2.5, Math.max(0.8, prev + delta)));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-[#172D49]/15 shadow-sm bg-[#FAF5EE] select-none ${className}`}
      style={{ minHeight: "450px" }}
    >
      {/* Top Map Status Banner */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-[#172D49]/10 text-xs shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#5B7866]" />
        <span className="font-display font-medium text-[#172D49]">
          Delhi NCR & Haryana Vector Map
        </span>
        <span className="text-[10px] bg-[#263B52] text-[#F4EBDD] px-1.5 py-0.2 rounded font-mono">
          {centres.length} Points
        </span>
      </div>

      {/* Zoom / Reset Controls */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 bg-white/90 backdrop-blur-sm p-1 rounded-xl border border-[#172D49]/10 shadow-sm">
        <button
          onClick={() => handleZoom(0.25)}
          className="p-1.5 hover:bg-[#F4EBDD]/60 rounded-lg text-[#172D49] transition-colors"
          title="Zoom in"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(-0.25)}
          className="p-1.5 hover:bg-[#F4EBDD]/60 rounded-lg text-[#172D49] transition-colors"
          title="Zoom out"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          className="p-1.5 hover:bg-[#F4EBDD]/60 rounded-lg text-[#172D49] transition-colors"
          title="Reset zoom"
          aria-label="Reset zoom"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* SVG Canvas */}
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          className="w-full h-full cursor-crosshair transition-transform duration-300"
          style={{
            transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
          }}
        >
          {/* Background Grid Lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#172D49" strokeWidth="0.5" strokeOpacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Geographical Region Outlines (Illustrative Vector Zones) */}
          {/* Haryana Region Outline */}
          <path
            d="M 50,20 Q 300,50 450,120 T 700,200 L 760,500 Q 600,620 400,600 T 150,550 Z"
            fill="#EFE6D6"
            stroke="#172D49"
            strokeWidth="1.5"
            strokeOpacity="0.15"
          />

          {/* Delhi NCT Region Highlight */}
          <path
            d="M 460,260 Q 580,240 620,320 T 560,420 Q 480,430 450,340 Z"
            fill="#E5DDD0"
            stroke="#F47C68"
            strokeWidth="2"
            strokeOpacity="0.35"
            strokeDasharray="4 2"
          />
          <text x="530" y="340" fill="#172D49" fillOpacity="0.3" fontSize="22" fontWeight="bold" fontFamily="sans-serif">
            DELHI NCT
          </text>
          <text x="240" y="240" fill="#172D49" fillOpacity="0.2" fontSize="26" fontWeight="bold" fontFamily="sans-serif">
            HARYANA
          </text>

          {/* City Anchor Labels */}
          <g fontSize="10" fill="#172D49" fillOpacity="0.5" fontFamily="sans-serif" textAnchor="middle">
            <text x="580" y="310">Connaught Place</text>
            <text x="470" y="370">Dwarka</text>
            <text x="500" y="230">Rohini</text>
            <text x="610" y="360">Okhla / Saket</text>
            <text x="590" y="480">Faridabad</text>
            <text x="480" y="440">Gurugram</text>
            <text x="400" y="520">IMT Manesar</text>
            <text x="460" y="150">Sonipat</text>
            <text x="440" y="70">Panipat</text>
            <text x="210" y="200">Rohtak</text>
            <text x="615" y="600">Palwal</text>
          </g>

          {/* User Coordinates Pin if available */}
          {userCoordinates && (() => {
            const pos = projectCoords(userCoordinates.lat, userCoordinates.lng);
            return (
              <g transform={`translate(${pos.x}, ${pos.y})`}>
                <circle r="16" fill="#F47C68" fillOpacity="0.3">
                  <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.4;0.05;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle r="6" fill="#F47C68" stroke="white" strokeWidth="2" />
                <text y="-10" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F47C68">
                  You
                </text>
              </g>
            );
          })()}

          {/* Collection Centre Markers */}
          {centres.map((centre) => {
            const pos = projectCoords(centre.coordinates.lat, centre.coordinates.lng);
            const isSelected = selectedCentre?.id === centre.id;
            const isHovered = hoveredCentre?.id === centre.id;
            const isFull = centre.capacityStatus === "full";
            const isMaintenance = centre.status === "maintenance";

            const pinColor = isSelected
              ? "#F47C68"
              : isFull
              ? "#EF4444"
              : isMaintenance
              ? "#F59E0B"
              : "#172D49";

            return (
              <g
                key={centre.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => onSelectCentre(centre)}
                onMouseEnter={() => setHoveredCentre(centre)}
                onMouseLeave={() => setHoveredCentre(null)}
              >
                {/* Selection Pulse Ring */}
                {(isSelected || isHovered) && (
                  <circle r={isSelected ? "18" : "14"} fill={pinColor} fillOpacity="0.25">
                    <animate attributeName="r" values="12;20;12" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Marker Body */}
                <path
                  d="M 0,0 C -6,-10 -8,-16 0,-24 C 8,-16 6,-10 0,0 Z"
                  fill={pinColor}
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle cx="0" cy="-16" r="3" fill="white" />

                {/* Marker Label */}
                {(isSelected || isHovered) && (
                  <g transform="translate(0, -30)">
                    <rect
                      x="-70"
                      y="-18"
                      width="140"
                      height="20"
                      rx="6"
                      fill="#172D49"
                      stroke="#F4EBDD"
                      strokeWidth="1"
                      fillOpacity="0.95"
                    />
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      {centre.name.length > 22 ? centre.name.slice(0, 20) + "..." : centre.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom Selected Centre Preview Overlay */}
      {selectedCentre && (
        <div className="absolute bottom-3 left-3 right-3 z-10 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#172D49]/15 shadow-md flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-xs text-[#F47C68] font-bold font-display uppercase tracking-wide">
              <span>● Selected Point</span>
              <span className="text-[#172D49]/40">•</span>
              <span className="text-[#172D49]">{selectedCentre.facilityType}</span>
            </div>
            <h4 className="font-serif text-sm font-bold text-[#172D49] truncate">
              {selectedCentre.name}
            </h4>
            <p className="text-xs text-[#172D49]/70 truncate">
              {selectedCentre.address}, {selectedCentre.area}, {selectedCentre.city}
            </p>
          </div>

          <button
            onClick={() => onSelectCentre(selectedCentre)}
            className="px-3.5 py-1.5 rounded-xl bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold shrink-0 transition-colors"
          >
            Details
          </button>
        </div>
      )}
    </div>
  );
}
