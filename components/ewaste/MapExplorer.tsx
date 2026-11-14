"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CollectionCentre, GeoCoordinates } from "@/types/ewaste";
import FallbackMap from "./FallbackMap";
import {
  Layers,
  MapPin,
  Compass,
  List,
  Navigation,
  ChevronRight,
  ArrowLeft,
  Truck,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { getDirectionsUrl } from "@/lib/ewaste/distance";

// Dynamically load LeafletMap with SSR disabled
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[470px] rounded-2xl bg-[#FAF5EE] border border-[#172D49]/15 flex items-center justify-center text-xs text-[#172D49]/60 font-display">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F47C68] animate-ping" />
        <span>Loading Interactive NCR OpenStreetMap...</span>
      </div>
    </div>
  ),
});

interface MapExplorerProps {
  centres: CollectionCentre[];
  selectedCentre: CollectionCentre | null;
  onSelectCentre: (centre: CollectionCentre | null) => void;
  userCoordinates?: GeoCoordinates;
}

export default function MapExplorer({
  centres,
  selectedCentre,
  onSelectCentre,
  userCoordinates,
}: MapExplorerProps) {
  const [mapEngine, setMapEngine] = useState<"leaflet" | "vector">("leaflet");
  const [mobileTab, setMobileTab] = useState<"map" | "list">("map");

  return (
    <div className="space-y-4">
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-[#172D49]/10 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-display text-[#172D49]">
          <span className="font-bold text-[#F47C68]">NCR Geospatial View</span>
          <span className="text-[#172D49]/30">•</span>
          <span>
            Showing <strong>{centres.length}</strong> sample facilities
          </span>
          {userCoordinates && (
            <span className="hidden sm:inline text-[#5B7866] font-medium bg-[#DDE8DE] px-2 py-0.5 rounded-full">
              📍 Location Pin Active
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Map/List Segmented Control */}
          <div className="flex lg:hidden bg-[#FAF5EE] p-1 rounded-xl border border-[#172D49]/10">
            <button
              onClick={() => setMobileTab("map")}
              className={`px-3 py-1 rounded-lg text-xs font-display flex items-center gap-1 transition-colors ${
                mobileTab === "map"
                  ? "bg-[#172D49] text-white font-bold"
                  : "text-[#172D49]/70"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Map</span>
            </button>
            <button
              onClick={() => setMobileTab("list")}
              className={`px-3 py-1 rounded-lg text-xs font-display flex items-center gap-1 transition-colors ${
                mobileTab === "list"
                  ? "bg-[#172D49] text-white font-bold"
                  : "text-[#172D49]/70"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List ({centres.length})</span>
            </button>
          </div>

          {/* Engine Selector */}
          <div className="flex items-center gap-1 text-xs font-display bg-[#FAF5EE] p-1 rounded-xl border border-[#172D49]/10">
            <Layers className="w-3.5 h-3.5 text-[#172D49]/60 ml-1.5" />
            <button
              onClick={() => setMapEngine("leaflet")}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                mapEngine === "leaflet"
                  ? "bg-[#172D49] text-white font-bold"
                  : "text-[#172D49]/70 hover:text-[#172D49]"
              }`}
            >
              Street Tiles
            </button>
            <button
              onClick={() => setMapEngine("vector")}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                mapEngine === "vector"
                  ? "bg-[#172D49] text-white font-bold"
                  : "text-[#172D49]/70 hover:text-[#172D49]"
              }`}
            >
              Vector Fallback
            </button>
          </div>
        </div>
      </div>

      {/* 60 / 40 Balanced Split on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Map Container (60% on desktop: lg:col-span-7) */}
        <div
          className={`lg:col-span-7 h-[300px] sm:h-[360px] lg:h-[470px] relative z-10 ${
            mobileTab === "list" ? "hidden lg:block" : "block"
          }`}
        >
          {mapEngine === "leaflet" ? (
            <LeafletMap
              centres={centres}
              selectedCentre={selectedCentre}
              onSelectCentre={onSelectCentre}
              userCoordinates={userCoordinates}
            />
          ) : (
            <FallbackMap
              centres={centres}
              selectedCentre={selectedCentre}
              onSelectCentre={onSelectCentre}
              userCoordinates={userCoordinates}
            />
          )}
        </div>

        {/* Results Panel (40% on desktop: lg:col-span-5) */}
        <div
          className={`lg:col-span-5 h-[360px] lg:h-[470px] flex flex-col ${
            mobileTab === "map" ? "hidden lg:flex" : "flex"
          }`}
        >
          {selectedCentre ? (
            /* Selected Centre Details View */
            <div className="bg-white p-5 rounded-2xl border border-[#172D49]/15 shadow-sm space-y-4 flex flex-col h-full overflow-y-auto">
              <div className="flex items-center justify-between border-b border-[#172D49]/10 pb-3">
                <button
                  onClick={() => onSelectCentre(null)}
                  className="text-xs font-display font-bold text-[#F47C68] hover:text-[#E46A55] flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to All Results ({centres.length})</span>
                </button>
                <span
                  className={`text-xs font-bold ${
                    selectedCentre.isOpenNow
                      ? "text-[#5B7866]"
                      : "text-[#DC2626]"
                  }`}
                >
                  ● {selectedCentre.isOpenNow ? "Open Today" : "Closed"}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider bg-[#F47C68]/15 text-[#F47C68] px-2 py-0.5 rounded">
                    {selectedCentre.verificationBadge}
                  </span>
                  <span className="text-[10px] font-display uppercase tracking-wider bg-[#E6DED0] text-[#172D49] px-2 py-0.5 rounded">
                    {selectedCentre.facilityType}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#172D49] leading-snug">
                  {selectedCentre.name}
                </h3>
                <p className="text-xs text-[#172D49]/70 flex items-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F47C68] shrink-0 mt-0.5" />
                  <span>
                    {selectedCentre.address}, {selectedCentre.area},{" "}
                    {selectedCentre.city}
                  </span>
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#172D49]/70">Hours:</span>
                  <span className="font-medium text-[#172D49]">
                    {selectedCentre.operatingHours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#172D49]/70">
                    Demonstration Capacity:
                  </span>
                  <span className="font-bold text-[#172D49]">
                    {selectedCentre.capacityPercentage !== null
                      ? `${selectedCentre.capacityPercentage}% utilized`
                      : "Standard buffer"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#172D49]/70">Sample Contact:</span>
                  <span className="font-mono text-[#172D49]">
                    {selectedCentre.contactPhone}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-display uppercase tracking-wider text-[#172D49]/60 font-bold mb-1.5">
                  Accepted Electronics (
                  {selectedCentre.acceptedCategories.length}):
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedCentre.acceptedCategories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-0.5 rounded-full bg-[#E6DED0] text-[#172D49] text-[10px] font-display"
                    >
                      {cat.replace("_", " ")}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 mt-auto border-t border-[#172D49]/10 flex flex-col gap-2">
                <Link
                  href={`/e-waste/centres/${selectedCentre.id}`}
                  className="w-full py-2.5 rounded-xl bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold text-center transition-colors inline-flex items-center justify-center gap-1"
                >
                  <span>View Facility Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex gap-2">
                  <a
                    href={getDirectionsUrl(
                      selectedCentre.coordinates,
                      selectedCentre.name
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl bg-[#FAF5EE] hover:bg-[#E6DED0] text-[#172D49] text-xs font-display font-medium text-center border border-[#172D49]/15 flex items-center justify-center gap-1 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#F47C68]" />
                    <span>Get Directions</span>
                  </a>

                  {selectedCentre.facilitatesPickup && (
                    <Link
                      href={`/e-waste/requests?centreId=${selectedCentre.id}`}
                      className="flex-1 py-2 rounded-xl bg-[#5B7866] hover:bg-[#4b6354] text-white text-xs font-display font-bold text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Book Pickup</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Scrollable Directory List */
            <div className="bg-white p-4 rounded-2xl border border-[#172D49]/15 shadow-sm flex flex-col h-full">
              <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#172D49]/10">
                <span className="font-display font-bold text-xs text-[#172D49] uppercase tracking-wider">
                  Matching Centres ({centres.length})
                </span>
                <span className="text-[11px] text-[#172D49]/50">
                  Click a centre to highlight
                </span>
              </div>

              <div className="overflow-y-auto flex-1 space-y-2 pr-1">
                {centres.length === 0 ? (
                  <div className="text-center py-10 space-y-2 text-[#172D49]/60">
                    <MapPin className="w-8 h-8 mx-auto text-[#172D49]/30" />
                    <p className="text-xs">No sample facilities match filters.</p>
                  </div>
                ) : (
                  centres.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => onSelectCentre(c)}
                      className="p-3 rounded-xl bg-[#FAF5EE] hover:bg-[#E6DED0] border border-[#172D49]/10 transition-colors cursor-pointer space-y-1.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif font-bold text-xs text-[#172D49] leading-tight">
                          {c.name}
                        </h4>
                        <span
                          className={`text-[10px] font-bold shrink-0 ${
                            c.isOpenNow ? "text-[#5B7866]" : "text-[#DC2626]"
                          }`}
                        >
                          {c.isOpenNow ? "Open" : "Closed"}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#172D49]/70 truncate">
                        📍 {c.area}, {c.city}
                      </p>

                      <div className="flex items-center justify-between text-[10px] pt-1 border-t border-[#172D49]/5">
                        <span className="text-[#172D49]/60 font-sans">
                          Capacity:{" "}
                          <strong>
                            {c.capacityPercentage !== null
                              ? `${c.capacityPercentage}%`
                              : "Standard"}
                          </strong>
                        </span>
                        <span className="text-[#F47C68] font-display font-bold">
                          Select Pin →
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
