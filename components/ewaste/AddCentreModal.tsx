"use client";

import React, { useState } from "react";
import { X, Building2, Plus, AlertCircle } from "lucide-react";
import { CollectionCentre, EWasteCategoryType, FacilityType } from "@/types/ewaste";
import { ewasteCategories } from "@/data/ewaste/categories";
import { addStoredCentre } from "@/lib/ewaste/storage";

interface AddCentreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCentreAdded?: (newCentre: CollectionCentre) => void;
}

export default function AddCentreModal({
  isOpen,
  onClose,
  onCentreAdded,
}: AddCentreModalProps) {
  const [name, setName] = useState("");
  const [facilityType, setFacilityType] = useState<FacilityType>("Municipal Drop-off Centre");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState<CollectionCentre["city"]>("New Delhi");
  const [state, setState] = useState<CollectionCentre["state"]>("Delhi");
  const [lat, setLat] = useState("28.6139");
  const [lng, setLng] = useState("77.2090");
  const [capacity, setCapacity] = useState(35);
  const [selectedCats, setSelectedCats] = useState<EWasteCategoryType[]>([
    "smartphones",
    "laptops",
    "batteries",
    "cables_wires",
  ]);
  const [facilitatesPickup, setFacilitatesPickup] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleToggleCat = (catId: EWasteCategoryType) => {
    if (selectedCats.includes(catId)) {
      if (selectedCats.length === 1) return;
      setSelectedCats(selectedCats.filter((c) => c !== catId));
    } else {
      setSelectedCats([...selectedCats, catId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const parsedLat = parseFloat(lat);
    const parsedLng = parseFloat(lng);

    if (isNaN(parsedLat) || isNaN(parsedLng)) {
      setErrorMsg("Please provide valid numerical coordinates for Delhi NCR.");
      return;
    }

    const uniqueId = `demo-ctr-${Date.now().toString().slice(-4)}`;
    const newCentre: CollectionCentre = {
      id: uniqueId,
      name: name.trim(),
      shortDescription: `Registered sample facility serving the ${area || city} cluster.`,
      facilityType,
      address: address.trim(),
      area: area.trim() || city,
      city,
      state: city === "Faridabad" || city === "Gurugram" || city === "Manesar" || city === "Sonipat" || city === "Panipat" || city === "Rohtak" || city === "Palwal" ? "Haryana" : "Delhi",
      postalCode: "110001",
      coordinates: { lat: parsedLat, lng: parsedLng },
      acceptedCategories: selectedCats,
      operatingHours: {
        weekdays: "09:00 - 18:00",
        saturday: "09:00 - 14:00",
        sunday: "Closed",
      },
      isOpenNow: true,
      status: "operational",
      capacityPercentage: capacity,
      capacityStatus: capacity >= 90 ? "full" : capacity >= 70 ? "nearly_full" : "available",
      capacityDescription: `${capacity}% reported capacity buffer.`,
      contactPhone: "+91 11 2341-XXXX (Sample)",
      contactEmail: "centre-demo@ecocycle.org",
      illustrativeRating: 4.6,
      reviewCount: 1,
      verificationBadge: "Sample Facility",
      isDemoRecord: true,
      lastUpdated: new Date().toISOString(),
      facilitatesPickup,
      imageUrl: "/images/research/academic-study.jpg",
      handlingInstructions: "Compliant with CPCB E-Waste Rules 2022.",
    };

    addStoredCentre(newCentre);
    if (onCentreAdded) onCentreAdded(newCentre);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/15 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#172D49] flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#F47C68]" />
              <span>Add New Demonstration Centre</span>
            </h3>
            <p className="text-xs text-[#172D49]/70 font-sans">
              Create a new sample collection facility in Delhi NCR or Haryana.
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-[#172D49]/60 hover:text-[#172D49]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block font-display font-bold text-[#172D49] mb-1">
              Centre Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rohini South Green Depot"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-[#172D49]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-display font-bold text-[#172D49] mb-1">
                Facility Type
              </label>
              <select
                value={facilityType}
                onChange={(e) => setFacilityType(e.target.value as FacilityType)}
                className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 bg-white text-[#172D49]"
              >
                <option value="Municipal Drop-off Centre">Municipal Drop-off Centre</option>
                <option value="Formal Authorised Recycler">Formal Authorised Recycler</option>
                <option value="Take-Back Collection Point">Take-Back Collection Point</option>
                <option value="E-Waste Dismantling Facility">E-Waste Dismantling Facility</option>
                <option value="Refurbishment & Repair Hub">Refurbishment & Repair Hub</option>
              </select>
            </div>

            <div>
              <label className="block font-display font-bold text-[#172D49] mb-1">
                City (NCR / Haryana)
              </label>
              <select
                value={city}
                onChange={(e) => {
                  const c = e.target.value as CollectionCentre["city"];
                  setCity(c);
                  setState(c.includes("Delhi") ? "Delhi" : "Haryana");
                }}
                className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 bg-white text-[#172D49]"
              >
                <option value="New Delhi">New Delhi</option>
                <option value="Delhi">Delhi</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Manesar">Manesar</option>
                <option value="Sonipat">Sonipat</option>
                <option value="Bahadurgarh">Bahadurgarh</option>
                <option value="Panipat">Panipat</option>
                <option value="Rohtak">Rohtak</option>
                <option value="Palwal">Palwal</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-display font-bold text-[#172D49] mb-1">
              Full Address & Area
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Plot 44, Community Centre Complex"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-[#172D49]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-display font-bold text-[#172D49] mb-1">
                Latitude (e.g. 28.6139)
              </label>
              <input
                type="text"
                required
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-[#172D49] font-mono"
              />
            </div>
            <div>
              <label className="block font-display font-bold text-[#172D49] mb-1">
                Longitude (e.g. 77.2090)
              </label>
              <input
                type="text"
                required
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-[#172D49] font-mono"
              />
            </div>
          </div>

          {/* Capacity Slider */}
          <div>
            <div className="flex justify-between font-display font-bold text-[#172D49] mb-1">
              <span>Initial Capacity Utilization:</span>
              <span className="font-mono">{capacity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={capacity}
              onChange={(e) => setCapacity(parseInt(e.target.value) || 0)}
              className="w-full accent-[#F47C68]"
            />
          </div>

          {/* Accepted Categories */}
          <div>
            <label className="block font-display font-bold text-[#172D49] mb-1.5">
              Accepted E-Waste Categories:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {ewasteCategories.map((c) => {
                const isSelected = selectedCats.includes(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleToggleCat(c.id)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-display transition-colors ${
                      isSelected
                        ? "bg-[#172D49] text-white font-bold"
                        : "bg-[#FAF5EE] text-[#172D49] hover:bg-[#E6DED0]"
                    }`}
                  >
                    {c.name.split("&")[0]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="pickup-check"
              checked={facilitatesPickup}
              onChange={(e) => setFacilitatesPickup(e.target.checked)}
              className="accent-[#5B7866]"
            />
            <label htmlFor="pickup-check" className="font-display text-[#172D49] cursor-pointer">
              Facility operates doorstep collection vehicle fleet
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-[#172D49] hover:bg-[#263B52] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            Create Demonstration Centre
          </button>
        </form>
      </div>
    </div>
  );
}
