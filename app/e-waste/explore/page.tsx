"use client";

import React, { useState, useEffect, useMemo } from "react";
import { CollectionCentre, EWasteCategoryType, GeoCoordinates, PredefinedLocation } from "@/types/ewaste";
import { getStoredCentres, ECOCLE_EVENT_NAME } from "@/lib/ewaste/storage";
import { searchAndRankCentres } from "@/lib/ewaste/recommendations";
import LocationSelector from "@/components/ewaste/LocationSelector";
import CategoryPills from "@/components/ewaste/CategoryPills";
import MapExplorer from "@/components/ewaste/MapExplorer";
import { Filter, SlidersHorizontal, RotateCcw, Compass } from "lucide-react";

export default function ExploreMapPage() {
  const [allCentres, setAllCentres] = useState<CollectionCentre[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<PredefinedLocation | null>(null);
  const [customCoordinates, setCustomCoordinates] = useState<GeoCoordinates | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<EWasteCategoryType[]>([]);
  const [radiusKm, setRadiusKm] = useState<number>(30);
  const [openOnly, setOpenOnly] = useState<boolean>(false);
  const [excludeFull, setExcludeFull] = useState<boolean>(false);
  const [selectedCentre, setSelectedCentre] = useState<CollectionCentre | null>(null);

  useEffect(() => {
    setAllCentres(getStoredCentres());

    const handleUpdate = () => {
      setAllCentres(getStoredCentres());
    };
    window.addEventListener(ECOCLE_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(ECOCLE_EVENT_NAME, handleUpdate);
  }, []);

  const activeCoordinates = selectedLocation ? selectedLocation.coordinates : customCoordinates || undefined;

  const searchResults = useMemo(() => {
    return searchAndRankCentres(allCentres, {
      userCoordinates: activeCoordinates,
      selectedCategories,
      maxDistanceKm: activeCoordinates ? radiusKm : undefined,
      openOnly,
      excludeFull,
    });
  }, [allCentres, activeCoordinates, selectedCategories, radiusKm, openOnly, excludeFull]);

  const displayedCentres = searchResults.map((r) => r.centre);

  const handleToggleCategory = (cat: EWasteCategoryType) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleResetFilters = () => {
    setSelectedLocation(null);
    setCustomCoordinates(null);
    setSelectedCategories([]);
    setRadiusKm(30);
    setOpenOnly(false);
    setExcludeFull(false);
    setSelectedCentre(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#F47C68] text-white flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </span>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Geospatial Recovery
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#172D49] mt-1">
            Delhi NCR Interactive Map Explorer
          </h1>
          <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans mt-0.5">
            Visualize all 22 verified e-waste collection points across Delhi and Haryana corridors with real-time capacity and accepted categories.
          </p>
        </div>

        <button
          onClick={handleResetFilters}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF5EE] text-[#172D49] text-xs font-display font-bold border border-[#172D49]/15 transition-colors shadow-xs shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#F47C68]" />
          <span>Reset All Filters</span>
        </button>
      </div>

      {/* Filter Controls Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Location & Radii */}
        <div className="lg:col-span-5 space-y-4">
          <LocationSelector
            selectedLocation={selectedLocation}
            customCoordinates={customCoordinates}
            onSelectPredefined={(loc) => {
              setSelectedLocation(loc);
              setCustomCoordinates(null);
            }}
            onDetectGPS={(coords) => {
              setCustomCoordinates(coords);
              setSelectedLocation(null);
            }}
            onClearLocation={() => {
              setSelectedLocation(null);
              setCustomCoordinates(null);
            }}
          />

          {/* Radius & Toggles */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#172D49]/15 shadow-sm space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-display font-bold text-[#172D49]">
                <span>Search Radius from Selected Point:</span>
                <span className="font-mono text-[#F47C68]">{radiusKm} km</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={radiusKm}
                disabled={!activeCoordinates}
                onChange={(e) => setRadiusKm(parseInt(e.target.value) || 25)}
                className="w-full accent-[#F47C68] disabled:opacity-40"
              />
              {!activeCoordinates && (
                <p className="text-[11px] text-[#172D49]/50 italic">
                  * Select an area or use GPS to enable radius filtering.
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-[#172D49]/10 flex flex-wrap gap-4 text-xs font-display">
              <label className="flex items-center gap-2 cursor-pointer text-[#172D49]">
                <input
                  type="checkbox"
                  checked={openOnly}
                  onChange={(e) => setOpenOnly(e.target.checked)}
                  className="accent-[#5B7866]"
                />
                <span>Open Right Now</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-[#172D49]">
                <input
                  type="checkbox"
                  checked={excludeFull}
                  onChange={(e) => setExcludeFull(e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span>Exclude Overloaded Depots</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Category Filter */}
        <div className="lg:col-span-7 bg-white p-4 sm:p-5 rounded-2xl border border-[#172D49]/15 shadow-sm space-y-3">
          <CategoryPills
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
            onClearAll={() => setSelectedCategories([])}
          />
        </div>
      </div>

      {/* Main Interactive Map & Drawer */}
      <MapExplorer
        centres={displayedCentres}
        selectedCentre={selectedCentre}
        onSelectCentre={(c) => setSelectedCentre(c)}
        userCoordinates={activeCoordinates}
      />
    </div>
  );
}
