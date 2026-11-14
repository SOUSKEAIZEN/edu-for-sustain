"use client";

import React, { useState } from "react";
import { GeoCoordinates, PredefinedLocation } from "@/types/ewaste";
import { predefinedLocations } from "@/data/ewaste/locations";
import { MapPin, Navigation, AlertCircle, CheckCircle } from "lucide-react";

interface LocationSelectorProps {
  selectedLocation: PredefinedLocation | null;
  customCoordinates: GeoCoordinates | null;
  onSelectPredefined: (loc: PredefinedLocation) => void;
  onDetectGPS: (coords: GeoCoordinates, label: string) => void;
  onClearLocation: () => void;
}

export default function LocationSelector({
  selectedLocation,
  customCoordinates,
  onSelectPredefined,
  onDetectGPS,
  onClearLocation,
}: LocationSelectorProps) {
  const [detecting, setDetecting] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [selectedCityFilter, setSelectedCityFilter] = useState<string>("All");

  const handleUseMyLocation = () => {
    setGeoError(null);
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your current browser. Please select an area manually.");
      return;
    }

    setDetecting(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setDetecting(false);
        const coords: GeoCoordinates = {
          lat: Math.round(pos.coords.latitude * 10000) / 10000,
          lng: Math.round(pos.coords.longitude * 10000) / 10000,
        };
        onDetectGPS(coords, "Browser GPS Detected Location");
      },
      (err) => {
        setDetecting(false);
        let msg = "Could not detect location. Please select an area below.";
        if (err.code === err.PERMISSION_DENIED) {
          msg = "Location permission was denied. Please select your area manually from Delhi / Haryana.";
        } else if (err.code === err.TIMEOUT) {
          msg = "Location detection timed out. Please choose an area manually.";
        }
        setGeoError(msg);
      },
      { timeout: 8000, maximumAge: 60000 }
    );
  };

  const cities = ["All", "New Delhi", "Delhi", "Faridabad", "Gurugram", "Manesar", "Sonipat", "Panipat", "Rohtak", "Palwal"];

  const filteredLocations = selectedCityFilter === "All"
    ? predefinedLocations
    : predefinedLocations.filter((l) => l.city === selectedCityFilter);

  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#172D49]/15 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#172D49]/10 pb-3">
        <div>
          <h3 className="font-serif text-base font-bold text-[#172D49]">
            Set Your NCR Location
          </h3>
          <p className="text-xs text-[#172D49]/70 font-sans">
            Find the nearest collection points across Delhi, New Delhi, and Haryana.
          </p>
        </div>

        {/* GPS Auto-Detect Button */}
        <button
          onClick={handleUseMyLocation}
          disabled={detecting}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#172D49] hover:bg-[#263B52] disabled:opacity-50 text-white text-xs font-display font-medium transition-colors shrink-0"
        >
          <Navigation className={`w-3.5 h-3.5 text-[#F47C68] ${detecting ? "animate-spin" : ""}`} />
          <span>{detecting ? "Detecting GPS..." : "Use My Location"}</span>
        </button>
      </div>

      {/* Geolocation feedback / error message */}
      {geoError && (
        <div className="p-3 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs text-[#991B1B] flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#DC2626]" />
          <span>{geoError}</span>
        </div>
      )}

      {/* Currently Active Location Indicator */}
      {(selectedLocation || customCoordinates) && (
        <div className="p-3 rounded-xl bg-[#DDE8DE]/80 border border-[#5B7866]/30 text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#5B7866]" />
            <div>
              <span className="font-bold text-[#172D49]">
                {selectedLocation ? selectedLocation.name : "Custom GPS Coordinates"}
              </span>
              <span className="text-[#172D49]/70 ml-2">
                (
                {selectedLocation
                  ? `${selectedLocation.coordinates.lat}, ${selectedLocation.coordinates.lng}`
                  : `${customCoordinates?.lat}, ${customCoordinates?.lng}`}
                )
              </span>
            </div>
          </div>
          <button
            onClick={onClearLocation}
            className="text-[#DC2626] hover:underline font-display text-[11px] font-bold"
          >
            Clear
          </button>
        </div>
      )}

      {/* City Filter Pills */}
      <div>
        <p className="text-[11px] font-display uppercase tracking-wider text-[#172D49]/60 font-bold mb-2">
          Quick City Filter:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCityFilter(city)}
              className={`px-2.5 py-1 rounded-lg text-xs font-display transition-colors ${
                selectedCityFilter === city
                  ? "bg-[#F47C68] text-white font-bold"
                  : "bg-[#FAF5EE] hover:bg-[#E6DED0] text-[#172D49]"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Predefined Areas Dropdown or Chips */}
      <div>
        <label htmlFor="area-select" className="block text-xs font-display font-medium text-[#172D49] mb-1.5">
          Select Neighborhood / District:
        </label>
        <select
          id="area-select"
          value={selectedLocation?.id || ""}
          onChange={(e) => {
            const loc = predefinedLocations.find((l) => l.id === e.target.value);
            if (loc) onSelectPredefined(loc);
          }}
          className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 bg-white text-xs text-[#172D49] font-sans focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
        >
          <option value="">-- Choose an area in Delhi or Haryana --</option>
          {filteredLocations.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.name} ({loc.city}, {loc.state})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
