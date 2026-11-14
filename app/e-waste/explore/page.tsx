"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  CollectionCentre,
  EWasteCategoryType,
  GeoCoordinates,
  PredefinedLocation,
} from "@/types/ewaste";
import { getStoredCentres, ECOCLE_EVENT_NAME } from "@/lib/ewaste/storage";
import { searchAndRankCentres } from "@/lib/ewaste/recommendations";
import { predefinedLocations } from "@/data/ewaste/locations";
import { ewasteCategories } from "@/data/ewaste/categories";
import MapExplorer from "@/components/ewaste/MapExplorer";
import {
  Filter,
  RotateCcw,
  Compass,
  MapPin,
  Navigation,
  SlidersHorizontal,
  ChevronDown,
  Layers,
} from "lucide-react";

export default function ExploreMapPage() {
  const [allCentres, setAllCentres] = useState<CollectionCentre[]>([]);
  const [selectedLocation, setSelectedLocation] =
    useState<PredefinedLocation | null>(null);
  const [customCoordinates, setCustomCoordinates] =
    useState<GeoCoordinates | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedCategories, setSelectedCategories] = useState<
    EWasteCategoryType[]
  >([]);
  const [radiusKm, setRadiusKm] = useState<number>(30);
  const [openOnly, setOpenOnly] = useState<boolean>(false);
  const [excludeFull, setExcludeFull] = useState<boolean>(false);
  const [selectedCentre, setSelectedCentre] =
    useState<CollectionCentre | null>(null);
  const [detectingGps, setDetectingGps] = useState<boolean>(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  useEffect(() => {
    setAllCentres(getStoredCentres());

    const handleUpdate = () => {
      setAllCentres(getStoredCentres());
    };
    window.addEventListener(ECOCLE_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(ECOCLE_EVENT_NAME, handleUpdate);
  }, []);

  const activeCoordinates = selectedLocation
    ? selectedLocation.coordinates
    : customCoordinates || undefined;

  const filteredCentres = useMemo(() => {
    let result = allCentres;

    // Filter by city if selected
    if (selectedCity !== "All") {
      result = result.filter((c) => c.city === selectedCity);
    }

    // Rank & filter using Haversine algorithm
    const ranked = searchAndRankCentres(result, {
      userCoordinates: activeCoordinates,
      selectedCategories,
      maxDistanceKm: activeCoordinates ? radiusKm : undefined,
      openOnly,
      excludeFull,
    });

    return ranked.map((r) => r.centre);
  }, [
    allCentres,
    selectedCity,
    activeCoordinates,
    selectedCategories,
    radiusKm,
    openOnly,
    excludeFull,
  ]);

  const handleToggleCategory = (cat: EWasteCategoryType) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleUseGPS = () => {
    setGpsError(null);
    if (!navigator.geolocation) {
      setGpsError("Geolocation is not supported by your browser.");
      return;
    }

    setDetectingGps(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setDetectingGps(false);
        const coords: GeoCoordinates = {
          lat: Math.round(pos.coords.latitude * 10000) / 10000,
          lng: Math.round(pos.coords.longitude * 10000) / 10000,
        };
        setCustomCoordinates(coords);
        setSelectedLocation(null);
      },
      (err) => {
        setDetectingGps(false);
        setGpsError("Location access unavailable. Please choose an area from the list.");
      }
    );
  };

  const handleResetFilters = () => {
    setSelectedLocation(null);
    setCustomCoordinates(null);
    setSelectedCity("All");
    setSelectedCategories([]);
    setRadiusKm(30);
    setOpenOnly(false);
    setExcludeFull(false);
    setSelectedCentre(null);
    setGpsError(null);
  };

  const cities = ["All", "New Delhi", "Delhi", "Faridabad", "Gurugram", "Sonipat", "Panipat"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F47C68]/15 text-[#F47C68] text-xs font-display font-bold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Prototype · Sample data · Delhi NCR & Haryana</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#172D49] tracking-tight">
            Find the right collection point.
          </h1>
          <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans mt-1">
            Locate sample e-waste facilities, filter by accepted categories, and simulate distance calculations across the NCR corridor.
          </p>
        </div>

        <button
          onClick={handleResetFilters}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF5EE] text-[#172D49] text-xs font-display font-bold border border-[#172D49]/15 transition-colors shadow-xs shrink-0 self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#F47C68]" />
          <span>Reset All Filters</span>
        </button>
      </div>

      {/* 2. Unified Filter Box */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#172D49]/10 shadow-sm space-y-5">
        {/* Top Filter Row: Location, GPS, Radius, City Pills */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Location Dropdown & GPS button */}
          <div className="md:col-span-6 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <MapPin className="w-4 h-4 text-[#F47C68] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedLocation ? selectedLocation.id : customCoordinates ? "gps" : ""}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "" || val === "gps") {
                    setSelectedLocation(null);
                    if (val === "") setCustomCoordinates(null);
                  } else {
                    const found = predefinedLocations.find((l) => l.id === val);
                    if (found) {
                      setSelectedLocation(found);
                      setCustomCoordinates(null);
                    }
                  }
                }}
                className="w-full pl-10 pr-8 py-2.5 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/15 text-xs font-display text-[#172D49] appearance-none focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
              >
                <option value="">Choose an Area in NCR / Haryana...</option>
                {customCoordinates && (
                  <option value="gps">📍 GPS Detected Location</option>
                )}
                {predefinedLocations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name} ({loc.city})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#172D49]/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button
              onClick={handleUseGPS}
              disabled={detectingGps}
              className="px-3.5 py-2.5 rounded-2xl bg-[#FAF5EE] hover:bg-[#E6DED0] text-[#172D49] border border-[#172D49]/15 text-xs font-display font-medium inline-flex items-center justify-center gap-1.5 transition-colors shrink-0"
              title="Detect device GPS coordinates"
            >
              <Navigation className={`w-3.5 h-3.5 text-[#F47C68] ${detectingGps ? "animate-spin" : ""}`} />
              <span>{detectingGps ? "Locating..." : "Use GPS"}</span>
            </button>
          </div>

          {/* Search Radius Slider */}
          <div className="md:col-span-6 flex items-center gap-3 bg-[#FAF5EE] px-4 py-2 rounded-2xl border border-[#172D49]/10">
            <span className="text-xs font-display font-bold text-[#172D49] shrink-0">
              Radius: <span className="text-[#F47C68] font-mono">{radiusKm} km</span>
            </span>
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
              <span className="text-[10px] text-[#172D49]/50 italic shrink-0 hidden sm:inline">
                (Set location first)
              </span>
            )}
          </div>
        </div>

        {gpsError && (
          <p className="text-xs text-[#DC2626] font-display bg-[#DC2626]/10 px-3 py-1.5 rounded-xl">
            {gpsError}
          </p>
        )}

        {/* Second Row: City Quick Pills + Checkbox Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#172D49]/10">
          {/* City Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-display">
            <span className="text-[#172D49]/60 font-semibold mr-1">City:</span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  selectedCity === city
                    ? "bg-[#172D49] text-white font-bold"
                    : "bg-[#FAF5EE] hover:bg-[#E6DED0] text-[#172D49]"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Quick Checkbox Toggles */}
          <div className="flex items-center gap-4 text-xs font-display">
            <label className="flex items-center gap-1.5 cursor-pointer text-[#172D49]">
              <input
                type="checkbox"
                checked={openOnly}
                onChange={(e) => setOpenOnly(e.target.checked)}
                className="accent-[#5B7866] w-3.5 h-3.5"
              />
              <span>Open Right Now</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer text-[#172D49]">
              <input
                type="checkbox"
                checked={excludeFull}
                onChange={(e) => setExcludeFull(e.target.checked)}
                className="accent-[#DC2626] w-3.5 h-3.5"
              />
              <span>Exclude Overloaded</span>
            </label>
          </div>
        </div>

        {/* Third Row: Category Filter Tags */}
        <div className="pt-3 border-t border-[#172D49]/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#172D49]">
              Filter by Accepted Electronics Category ({selectedCategories.length} selected):
            </span>
            {selectedCategories.length > 0 && (
              <button
                onClick={() => setSelectedCategories([])}
                className="text-[11px] font-display text-[#F47C68] hover:underline"
              >
                Clear Categories
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {ewasteCategories.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => handleToggleCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-display transition-all ${
                    isSelected
                      ? "bg-[#F47C68] text-white font-bold shadow-xs scale-102"
                      : "bg-[#FAF5EE] hover:bg-[#E6DED0] text-[#172D49]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. 60/40 Interactive Map Explorer */}
      <MapExplorer
        centres={filteredCentres}
        selectedCentre={selectedCentre}
        onSelectCentre={(c) => setSelectedCentre(c)}
        userCoordinates={activeCoordinates}
      />
    </div>
  );
}
