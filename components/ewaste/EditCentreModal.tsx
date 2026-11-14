"use client";

import React, { useState } from "react";
import { X, Sliders, AlertCircle } from "lucide-react";
import { CollectionCentre, CentreStatus, CapacityStatus } from "@/types/ewaste";
import { saveCentreUpdate } from "@/lib/ewaste/storage";

interface EditCentreModalProps {
  isOpen: boolean;
  onClose: () => void;
  centre: CollectionCentre;
  onUpdated?: (updated: CollectionCentre) => void;
}

export default function EditCentreModal({
  isOpen,
  onClose,
  centre,
  onUpdated,
}: EditCentreModalProps) {
  const [status, setStatus] = useState<CentreStatus>(centre.status);
  const [capacity, setCapacity] = useState<number>(centre.capacityPercentage || 50);
  const [isOpenNow, setIsOpenNow] = useState<boolean>(centre.isOpenNow);
  const [weekdaysHours, setWeekdaysHours] = useState(centre.operatingHours.weekdays);
  const [phone, setPhone] = useState(centre.contactPhone);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let capStatus: CapacityStatus = "available";
    if (capacity >= 90) capStatus = "full";
    else if (capacity >= 75) capStatus = "nearly_full";
    else if (capacity >= 50) capStatus = "moderate";

    const updates: Partial<CollectionCentre> = {
      status,
      capacityPercentage: capacity,
      capacityStatus: capStatus,
      isOpenNow,
      operatingHours: {
        ...centre.operatingHours,
        weekdays: weekdaysHours,
      },
      contactPhone: phone,
      capacityDescription: `${capacity}% capacity utilized. Updated via demonstration portal.`,
    };

    const res = saveCentreUpdate(centre.id, updates);
    if (res && onUpdated) onUpdated(res);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/15 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#172D49] flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#F47C68]" />
              <span>Update Centre Telemetry & Status</span>
            </h3>
            <p className="text-xs text-[#172D49]/70 font-sans truncate max-w-xs">
              {centre.name} ({centre.city})
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-[#172D49]/60 hover:text-[#172D49]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-display font-bold text-[#172D49] mb-1">
              Operational Status:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["operational", "temporarily_closed", "maintenance"] as CentreStatus[]).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setStatus(st)}
                  className={`p-2 rounded-xl text-xs font-display capitalize border transition-colors ${
                    status === st
                      ? "bg-[#172D49] text-white border-[#172D49] font-bold"
                      : "bg-[#FAF5EE] text-[#172D49] border-[#172D49]/15 hover:bg-[#E6DED0]"
                  }`}
                >
                  {st.replace("_", " ")}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="is-open-check"
              checked={isOpenNow}
              onChange={(e) => setIsOpenNow(e.target.checked)}
              className="accent-[#5B7866]"
            />
            <label htmlFor="is-open-check" className="font-display font-bold text-[#172D49] cursor-pointer">
              Gate Open Now (Accepting Citizen Drop-offs)
            </label>
          </div>

          {/* Capacity Slider */}
          <div className="space-y-1.5 p-3 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10">
            <div className="flex justify-between font-display text-xs">
              <span className="font-bold text-[#172D49]">Intake Capacity Utilization:</span>
              <span className="font-mono font-bold text-[#F47C68]">{capacity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={capacity}
              onChange={(e) => setCapacity(parseInt(e.target.value) || 0)}
              className="w-full accent-[#F47C68]"
            />
            <div className="flex justify-between text-[10px] text-[#172D49]/50">
              <span>0% (Empty Bay)</span>
              <span>50% (Moderate)</span>
              <span>100% (Critical Full)</span>
            </div>
          </div>

          <div>
            <label className="block font-display font-bold text-[#172D49] mb-1">
              Weekday Hours Schedule
            </label>
            <input
              type="text"
              value={weekdaysHours}
              onChange={(e) => setWeekdaysHours(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-[#172D49]"
            />
          </div>

          <div>
            <label className="block font-display font-bold text-[#172D49] mb-1">
              Sample Contact Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-[#172D49] font-mono"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-[#5B7866] hover:bg-[#4b6354] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            Save Demonstrative Telemetry Updates
          </button>
        </form>
      </div>
    </div>
  );
}
