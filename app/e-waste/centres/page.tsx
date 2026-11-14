"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CollectionCentre, EWasteCategoryType, GeoCoordinates, PredefinedLocation } from "@/types/ewaste";
import { getStoredCentres, ECOCLE_EVENT_NAME } from "@/lib/ewaste/storage";
import { searchAndRankCentres } from "@/lib/ewaste/recommendations";
import { ewasteCategories } from "@/data/ewaste/categories";
import CentreCard from "@/components/ewaste/CentreCard";
import LocationSelector from "@/components/ewaste/LocationSelector";
import { Search, Filter, SlidersHorizontal, Building2, RotateCcw, MapPin } from "lucide-react";

function CentresDirectoryContent() {
  const searchParams = useSearchParams();
  const initialCat = (searchParams.get("category") as EWasteCategoryType) || undefined;

  const [allCentres, setAllCentres] = useState<CollectionCentre[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat || "All");
  const [openOnly, setOpenOnly] = useState(false);
  const [excludeFull, setExcludeFull] = useState(false);
  const [sortBy, setSortBy] = useState<"recommended" | "nearest" | "capacity" | "rating" | "name">("recommended");
  const [selectedLocation, setSelectedLocation] = useState<PredefinedLocation | null>(null);
  const [customCoordinates, setCustomCoordinates] = useState<GeoCoordinates | null>(null);
  const [showLocationPanel, setShowLocationPanel] = useState(false);

  useEffect(() => {
    setAllCentres(getStoredCentres());

    const handleUpdate = () => {
      setAllCentres(getStoredCentres());
    };
    window.addEventListener(ECOCLE_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(ECOCLE_EVENT_NAME, handleUpdate);
  }, []);

  const activeCoordinates = selectedLocation ? selectedLocation.coordinates : customCoordinates || undefined;

  const filteredAndRankedResults = useMemo(() => {
    const catsToFilter: EWasteCategoryType[] =
      selectedCategory && selectedCategory !== "All"
        ? [selectedCategory as EWasteCategoryType]
        : [];

    let results = searchAndRankCentres(allCentres, {
      userCoordinates: activeCoordinates,
      selectedCategories: catsToFilter,
      city: selectedCity,
      openOnly,
      excludeFull,
      sortBy,
    });

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (r) =>
          r.centre.name.toLowerCase().includes(q) ||
          r.centre.area.toLowerCase().includes(q) ||
          r.centre.address.toLowerCase().includes(q) ||
          r.centre.facilityType.toLowerCase().includes(q)
      );
    }

    return results;
  }, [allCentres, activeCoordinates, selectedCategory, selectedCity, openOnly, excludeFull, sortBy, searchQuery]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCity("All");
    setSelectedCategory("All");
    setOpenOnly(false);
    setExcludeFull(false);
    setSortBy("recommended");
    setSelectedLocation(null);
    setCustomCoordinates(null);
  };

  const cities = ["All", "New Delhi", "Delhi", "Faridabad", "Gurugram", "Manesar", "Sonipat", "Bahadurgarh", "Panipat", "Rohtak", "Palwal"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#172D49] text-white flex items-center justify-center">
              <Building2 className="w-4 h-4 text-[#F47C68]" />
            </span>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Collection Facility Directory
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#172D49] mt-1">
            Delhi NCR & Haryana Collection Points
          </h1>
          <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans mt-0.5">
            Discover authorized e-waste drop points, compare reported storage capacity, and find facilities accepting your electronics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowLocationPanel(!showLocationPanel)}
            className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold border transition-colors flex items-center gap-1.5 ${
              activeCoordinates
                ? "bg-[#DDE8DE] text-[#172D49] border-[#5B7866]/30"
                : "bg-white text-[#172D49] border-[#172D49]/15 hover:bg-[#FAF5EE]"
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#F47C68]" />
            <span>{activeCoordinates ? "Location Active" : "Set Your Location"}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-white border border-[#172D49]/15 hover:bg-[#FAF5EE] text-[#172D49] transition-colors"
            title="Reset filters"
          >
            <RotateCcw className="w-4 h-4 text-[#F47C68]" />
          </button>
        </div>
      </div>

      {/* Collapsible Location Selector Panel */}
      {showLocationPanel && (
        <div className="animate-in fade-in slide-in-from-top-2">
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
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#172D49]/15 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Keyword Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#172D49]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by centre name or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
            />
          </div>

          {/* City Filter */}
          <div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] bg-white focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  City: {city}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] bg-white focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
            >
              <option value="All">Category: All Electronics</option>
              {ewasteCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "recommended" | "nearest" | "capacity" | "rating" | "name")
              }
              className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] bg-white focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
            >
              <option value="recommended">Sort: Smart Recommended</option>
              <option value="nearest" disabled={!activeCoordinates}>
                Sort: Nearest First {!activeCoordinates && "(Set Location)"}
              </option>
              <option value="capacity">Sort: Most Available Capacity</option>
              <option value="rating">Sort: Highest Rated</option>
              <option value="name">Sort: Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Checkbox Toggles & Results Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#172D49]/10 text-xs font-display">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1.5 cursor-pointer text-[#172D49]">
              <input
                type="checkbox"
                checked={openOnly}
                onChange={(e) => setOpenOnly(e.target.checked)}
                className="accent-[#5B7866]"
              />
              <span>Open Right Now</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer text-[#172D49]">
              <input
                type="checkbox"
                checked={excludeFull}
                onChange={(e) => setExcludeFull(e.target.checked)}
                className="accent-[#DC2626]"
              />
              <span>Exclude Full Facilities</span>
            </label>
          </div>

          <div className="text-xs text-[#172D49]/70 font-sans">
            Showing <strong>{filteredAndRankedResults.length}</strong> of {allCentres.length} demonstration points
          </div>
        </div>
      </div>

      {/* Centres Grid */}
      {filteredAndRankedResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndRankedResults.map((result) => (
            <CentreCard
              key={result.centre.id}
              centre={result.centre}
              distanceFormatted={result.formattedDistance}
              recommendationReason={result.recommendationReason}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-3xl border border-[#172D49]/15 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#FAF5EE] text-[#F47C68] mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#172D49]">
            No Collection Centres Found
          </h3>
          <p className="text-xs text-[#172D49]/70 max-w-md mx-auto">
            No demonstration facilities match the current combination of location, category, and operating status filters. Try clearing some filters.
          </p>
          <button
            onClick={handleReset}
            className="px-5 py-2 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function CentresDirectoryPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-xs font-display text-[#172D49]/60">
          Loading collection directory...
        </div>
      }
    >
      <CentresDirectoryContent />
    </Suspense>
  );
}
