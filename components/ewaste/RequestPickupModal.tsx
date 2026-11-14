"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, Truck, CheckCircle, AlertCircle, Plus, Trash2 } from "lucide-react";
import { EWasteCategoryType, PickupItem, PickupRequest } from "@/types/ewaste";
import { ewasteCategories } from "@/data/ewaste/categories";
import { addStoredRequest } from "@/lib/ewaste/storage";

interface RequestPickupModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCentreId?: string;
  preselectedCentreName?: string;
  onSuccess?: (newReq: PickupRequest) => void;
}

export default function RequestPickupModal({
  isOpen,
  onClose,
  preselectedCentreId,
  preselectedCentreName,
  onSuccess,
}: RequestPickupModalProps) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("New Delhi");
  const [postalCode, setPostalCode] = useState("110001");
  const [preferredDate, setPreferredDate] = useState(
    new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0]
  );
  const [preferredTimeSlot, setPreferredTimeSlot] = useState<PickupRequest["preferredTimeSlot"]>(
    "Morning (09:00 - 12:00)"
  );
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [items, setItems] = useState<PickupItem[]>([
    {
      categoryId: "smartphones",
      categoryName: "Smartphones & Feature Phones",
      quantity: 1,
      estimatedWeightKg: 0.2,
      conditionNotes: "Working or damaged handheld unit",
    },
  ]);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successReq, setSuccessReq] = useState<PickupRequest | null>(null);

  if (!isOpen) return null;

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        categoryId: "chargers_adapters",
        categoryName: "Chargers & Power Adapters",
        quantity: 1,
        estimatedWeightKg: 0.25,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length <= 1) return;
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, catId: EWasteCategoryType) => {
    const cat = ewasteCategories.find((c) => c.id === catId);
    if (!cat) return;
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      categoryId: catId,
      categoryName: cat.name,
      estimatedWeightKg: cat.averageWeightKg * updated[index].quantity,
    };
    setItems(updated);
  };

  const handleQuantityChange = (index: number, qty: number) => {
    const validQty = Math.max(1, qty);
    const cat = ewasteCategories.find((c) => c.id === items[index].categoryId);
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      quantity: validQty,
      estimatedWeightKg: (cat?.averageWeightKg || 0.5) * validQty,
    };
    setItems(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!userName.trim() || !address.trim() || !userPhone.trim()) {
      setErrorMsg("Please provide your full name, contact phone number, and pickup address.");
      return;
    }

    const uniqueId = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date().toISOString();

    const newRequest: PickupRequest = {
      id: uniqueId,
      userName: userName.trim(),
      userPhone: userPhone.trim(),
      userEmail: userEmail.trim() || "citizen.demo@example.com",
      address: address.trim(),
      area: area.trim() || city,
      city,
      postalCode: postalCode.trim(),
      items,
      totalQuantity: items.reduce((acc, i) => acc + i.quantity, 0),
      totalEstimatedWeightKg:
        Math.round(items.reduce((acc, i) => acc + i.estimatedWeightKg, 0) * 10) / 10,
      preferredDate,
      preferredTimeSlot,
      additionalNotes: additionalNotes.trim() || undefined,
      assignedCentreId: preselectedCentreId || "dl-cp-01",
      assignedCentreName: preselectedCentreName || "EcoCycle Central Hub — Connaught Place",
      status: "Submitted",
      createdAt: now,
      updatedAt: now,
      timeline: [
        {
          status: "Submitted",
          timestamp: now,
          note: "Pickup request registered in local demonstration store.",
          actor: "User",
        },
      ],
      isDemoRecord: true,
    };

    // Save to localStorage demo store
    addStoredRequest(newRequest);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#172D49", "#F47C68", "#5B7866", "#F4EBDD"],
      });
    } catch (_) {}

    setSuccessReq(newRequest);
    if (onSuccess) onSuccess(newRequest);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/15 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-[#5B7866] flex items-center justify-center text-white">
                <Truck className="w-4 h-4" />
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
                Schedule E-Waste Doorstep Pickup
              </h3>
            </div>
            <p className="text-xs text-[#172D49]/70 font-sans">
              Door-to-door verified recovery for residential and commercial premises in Delhi NCR & Haryana.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#172D49]/60 hover:bg-[#FAF5EE] hover:text-[#172D49] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {successReq ? (
          /* Success Screen */
          <div className="text-center py-6 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#DDE8DE] text-[#5B7866] mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#172D49]">
              Pickup Request Booked!
            </h4>

            <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#172D49]/60 font-sans">Request Tracking ID:</span>
                <span className="font-mono font-bold text-[#F47C68]">{successReq.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#172D49]/60 font-sans">Scheduled Window:</span>
                <span className="font-medium text-[#172D49]">
                  {successReq.preferredDate} ({successReq.preferredTimeSlot.split(" ")[0]})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#172D49]/60 font-sans">Assigned Demonstration Hub:</span>
                <span className="font-medium text-[#172D49] truncate max-w-[200px]">
                  {successReq.assignedCentreName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#172D49]/60 font-sans">Items Count:</span>
                <span className="font-medium text-[#172D49]">
                  {successReq.totalQuantity} items (~{successReq.totalEstimatedWeightKg} kg)
                </span>
              </div>
            </div>

            <p className="text-xs text-[#172D49]/70 max-w-md mx-auto">
              Simulated demonstration request logged in your browser&apos;s local state. You can track this request under the{" "}
              <strong>My Requests</strong> tab.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold transition-colors"
            >
              Close & View Tracking
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Target Centre Notice if preselected */}
            {preselectedCentreName && (
              <div className="p-3 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 text-xs flex items-center justify-between">
                <span className="text-[#172D49]/70">Target Collection Point:</span>
                <span className="font-bold text-[#172D49]">{preselectedCentreName}</span>
              </div>
            )}

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-display font-bold text-[#172D49] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
                />
              </div>

              <div>
                <label className="block text-xs font-display font-bold text-[#172D49] mb-1">
                  Mobile Number (Sample) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX-XXXXX"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-display font-bold text-[#172D49] mb-1">
                  Pickup Street Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Apartment/Plot, Street, Landmark"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-display font-medium text-[#172D49] mb-1">
                    Area / Sector
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dwarka Sec 10"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-display font-medium text-[#172D49] mb-1">
                    City (NCR)
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
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

                <div>
                  <label className="block text-xs font-display font-medium text-[#172D49] mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
                  />
                </div>
              </div>
            </div>

            {/* E-Waste Items Breakdown */}
            <div className="space-y-2 pt-2 border-t border-[#172D49]/10">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-display font-bold text-[#172D49]">
                  Electronics for Pickup:
                </label>
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="text-xs text-[#F47C68] hover:underline font-display font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Another Item</span>
                </button>
              </div>

              <div className="space-y-2">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10"
                  >
                    <select
                      value={item.categoryId}
                      onChange={(e) => handleItemChange(idx, e.target.value as EWasteCategoryType)}
                      className="flex-1 px-2.5 py-1.5 rounded-lg border border-[#172D49]/20 text-xs bg-white text-[#172D49]"
                    >
                      {ewasteCategories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>

                    <div className="flex items-center gap-1">
                      <span className="text-[11px] text-[#172D49]/60">Qty:</span>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(idx, parseInt(e.target.value) || 1)}
                        className="w-14 px-2 py-1 rounded-lg border border-[#172D49]/20 text-xs bg-white text-center font-mono"
                      />
                    </div>

                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(idx)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Slot & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-display font-bold text-[#172D49] mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49]"
                />
              </div>

              <div>
                <label className="block text-xs font-display font-bold text-[#172D49] mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={preferredTimeSlot}
                  onChange={(e) =>
                    setPreferredTimeSlot(e.target.value as PickupRequest["preferredTimeSlot"])
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49]"
                >
                  <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                  <option value="Afternoon (12:00 - 15:00)">Afternoon (12:00 - 15:00)</option>
                  <option value="Evening (15:00 - 18:00)">Evening (15:00 - 18:00)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#5B7866] hover:bg-[#4b6354] text-white text-xs font-display font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4" />
              <span>Confirm Demonstration Pickup Booking</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
