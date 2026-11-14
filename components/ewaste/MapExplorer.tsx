"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CollectionCentre, GeoCoordinates } from "@/types/ewaste";
import FallbackMap from "./FallbackMap";
import { Layers, MapPin, Compass, List, Navigation } from "lucide-react";
import Link from "next/link";
import { getDirectionsUrl } from "@/lib/ewaste/distance";

// Dynamically load LeafletMap with SSR disabled to guarantee zero hydration mismatch
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[450px] rounded-2xl bg-[#F4EBDD]/40 border border-[#172D49]/15 flex items-center justify-center text-xs text-[#172D49]/60 font-display">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F47C68] animate-ping" />
        <span>Loading Interactive OpenStreetMap...</span>
      </div>
    </div>
  ),
});

interface MapExplorerProps {
  centres: CollectionCentre[];
  selectedCentre: CollectionCentre | null;
  onSelectCentre: (centre: CollectionCentre) => void;
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
      {/* Map Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-[#172D49]/10 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-display text-[#172D49]">
          <span className="font-bold text-[#F47C68]">NCR Map Explorer</span>
          <span className="text-[#172D49]/30">•</span>
          <span>Showing {centres.length} facilities</span>
          {userCoordinates && (
            <span className="hidden sm:inline text-[#5B7866] font-medium bg-[#DDE8DE] px-2 py-0.5 rounded-full">
              📍 Location Active
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Map / List Toggle */}
          <div className="flex md:hidden bg-[#FAF5EE] p-1 rounded-xl border border-[#172D49]/10">
            <button
              onClick={() => setMobileTab("map")}
              className={`px-2.5 py-1 rounded-lg text-xs font-display flex items-center gap-1 ${
                mobileTab === "map" ? "bg-[#172D49] text-white" : "text-[#172D49]/70"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Map</span>
            </button>
            <button
              onClick={() => setMobileTab("list")}
              className={`px-2.5 py-1 rounded-lg text-xs font-display flex items-center gap-1 ${
                mobileTab === "list" ? "bg-[#172D49] text-white" : "text-[#172D49]/70"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List ({centres.length})</span>
            </button>
          </div>

          {/* Engine Selector (OpenStreetMap vs Vector Fallback) */}
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

      {/* Main Grid: Map on Left (or full on mobile), Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Map Container */}
        <div
          className={`lg:col-span-8 h-[480px] sm:h-[540px] ${
            mobileTab === "list" ? "hidden md:block" : "block"
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

        {/* Side Panel: Selected Centre or Quick List */}
        <div
          className={`lg:col-span-4 space-y-4 ${
            mobileTab === "map" ? "hidden md:block" : "block"
          }`}
        >
          {selectedCentre ? (
            <div className="bg-white p-5 rounded-2xl border border-[#172D49]/15 shadow-sm space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#F47C68] bg-[#F47C68]/10 px-2 py-0.5 rounded">
                  {selectedCentre.verificationBadge}
                </span>
                <span
                  className={`text-xs font-bold ${
                    selectedCentre.isOpenNow ? "text-[#5B7866]" : "text-[#EF4444]"
                  }`}
                >
                  ● {selectedCentre.isOpenNow ? "Open Now" : "Closed"}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-[#172D49] leading-snug">
                  {selectedCentre.name}
                </h3>
                <p className="text-xs text-[#172D49]/70 mt-1 flex items-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F47C68] shrink-0 mt-0.5" />
                  <span>
                    {selectedCentre.address}, {selectedCentre.area}, {selectedCentre.city}
                  </span>
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#172D49]/70 font-sans">Operating Hours:</span>
                  <span className="font-medium text-[#172D49]">{selectedCentre.operatingHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#172D49]/70 font-sans">Reported Capacity:</span>
                  <span className="font-bold text-[#172D49]">
                    {selectedCentre.capacityPercentage !== null
                      ? `${selectedCentre.capacityPercentage}% utilized`
                      : "Standard"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#172D49]/70 font-sans">Sample Contact:</span>
                  <span className="font-mono text-[#172D49]">{selectedCentre.contactPhone}</span>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-display uppercase tracking-wider text-[#172D49]/60 font-bold mb-1.5">
                  Accepted Electronics ({selectedCentre.acceptedCategories.length}):
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedCentre.acceptedCategories.slice(0, 6).map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-0.5 rounded-full bg-[#E6DED0] text-[#172D49] text-[10px] font-display"
                    >
                      {cat.replace("_", " ")}
                    </span>
                  ))}
                  {selectedCentre.acceptedCategories.length > 6 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#172D49] text-white text-[10px] font-display">
                      +{selectedCentre.acceptedCategories.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href={`/e-waste/centres/${selectedCentre.id}`}
                  className="w-full py-2.5 rounded-xl bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold text-center transition-colors"
                >
                  View Full Facility Profile
                </Link>

                <div className="flex gap-2">
                  <a
                    href={getDirectionsUrl(selectedCentre.coordinates, selectedCentre.name)}
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
                      className="flex-1 py-2 rounded-xl bg-[#5B7866] hover:bg-[#4b6354] text-white text-xs font-display font-bold text-center transition-colors"
                    >
                      Book Pickup
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-2xl border border-[#172D49]/15 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EE] mx-auto flex items-center justify-center text-[#F47C68]">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#172D49]">
                Select a Pin on the Map
              </h4>
              <p className="text-xs text-[#172D49]/70 leading-relaxed">
                Click any collection marker in Delhi NCR or Haryana to preview its operational status, accepted categories, and reported capacity.
              </p>
            </div>
          )}

          {/* Mini list of nearest centres */}
          <div className="bg-[#FAF5EE] p-4 rounded-2xl border border-[#172D49]/10 space-y-2">
            <p className="text-xs font-display font-bold text-[#172D49] uppercase tracking-wider">
              Quick Directory List
            </p>
            <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
              {centres.slice(0, 5).map((c) => (
                <button
                  key={c.id}
                  onClick={() => onSelectCentre(c)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-colors border ${
                    selectedCentre?.id === c.id
                      ? "bg-white border-[#F47C68] shadow-xs"
                      : "bg-white/60 hover:bg-white border-transparent"
                  }`}
                >
                  <p className="font-serif font-bold text-[#172D49] truncate">{c.name}</p>
                  <p className="text-[11px] text-[#172D49]/60 truncate">
                    {c.area}, {c.city} • {c.capacityPercentage !== null ? `${c.capacityPercentage}% cap` : "Standard"}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
