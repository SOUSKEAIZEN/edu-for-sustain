"use client";

import React, { useState, useEffect } from "react";
import { CollectionCentre, PickupRequest } from "@/types/ewaste";
import {
  getStoredCentres,
  getStoredRequests,
  deleteStoredCentre,
  resetAllDemoData,
  updateStoredRequestStatus,
  ECOCLE_EVENT_NAME,
} from "@/lib/ewaste/storage";
import AddCentreModal from "@/components/ewaste/AddCentreModal";
import EditCentreModal from "@/components/ewaste/EditCentreModal";
import StatCard from "@/components/ewaste/charts/StatCard";
import {
  ShieldAlert,
  Building2,
  Truck,
  Plus,
  Trash2,
  Sliders,
  RotateCcw,
  Search,
  AlertTriangle,
  CheckCircle,
  Database,
  Layers,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [centres, setCentres] = useState<CollectionCentre[]>([]);
  const [requests, setRequests] = useState<PickupRequest[]>([]);
  const [searchCentre, setSearchCentre] = useState("");
  const [cityFilter, setCityFilter] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCentre, setEditingCentre] = useState<CollectionCentre | null>(null);

  const reloadData = () => {
    setCentres(getStoredCentres());
    setRequests(getStoredRequests());
  };

  useEffect(() => {
    reloadData();
    window.addEventListener(ECOCLE_EVENT_NAME, reloadData);
    return () => window.removeEventListener(ECOCLE_EVENT_NAME, reloadData);
  }, []);

  const handleDeleteCentre = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete/deactivate demo centre: "${name}"?`)) {
      deleteStoredCentre(id);
    }
  };

  const handleResetData = () => {
    if (
      confirm(
        "CONFIRM DEMO RESET: This will restore all original 22 collection centres and initial sample pickup requests in your browser storage. Continue?"
      )
    ) {
      resetAllDemoData();
      reloadData();
    }
  };

  const activeCentres = centres.filter((c) => c.status === "operational").length;
  const completedRequests = requests.filter((r) => r.status === "Completed").length;
  const totalWeight = requests.reduce((acc, r) => acc + (r.totalEstimatedWeightKg || 0), 0);
  const avgCapacity = Math.round(
    centres.reduce((acc, c) => acc + (c.capacityPercentage || 0), 0) / (centres.length || 1)
  );

  const filteredCentres = centres.filter((c) => {
    const matchesCity = cityFilter === "All" || c.city === cityFilter;
    const matchesSearch =
      c.name.toLowerCase().includes(searchCentre.toLowerCase()) ||
      c.area.toLowerCase().includes(searchCentre.toLowerCase());
    return matchesCity && matchesSearch;
  });

  const cities = ["All", "New Delhi", "Delhi", "Faridabad", "Gurugram", "Manesar", "Sonipat", "Panipat", "Rohtak", "Palwal"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#172D49] text-white flex items-center justify-center">
              <ShieldAlert className="w-4 h-4 text-[#F47C68]" />
            </span>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              System Administration
            </span>
            <span className="text-[10px] bg-[#172D49] text-white px-2 py-0.5 rounded font-mono">
              Simulated Role: Platform Admin
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#172D49] mt-1">
            Administrator Management Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans mt-0.5">
            Full administrative oversight of Delhi NCR collection points, citizen dispatch requests, and demonstration persistence controls.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5 text-[#F47C68]" />
            <span>Add Centre</span>
          </button>

          <button
            onClick={handleResetData}
            className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-display font-bold transition-colors inline-flex items-center gap-1.5"
            title="Reset all demo changes and restore initial static data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Store</span>
          </button>
        </div>
      </div>

      {/* Overview Metrics KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Total Facilities"
          value={centres.length}
          subtext={`${activeCentres} active in Delhi NCR`}
          icon={Building2}
          badge="Live Local Store"
        />
        <StatCard
          label="Total Pickup Requests"
          value={requests.length}
          subtext={`${completedRequests} marked completed`}
          icon={Truck}
          badge="Simulated"
        />
        <StatCard
          label="Pending Queue Weight"
          value={`${Math.round(totalWeight)} kg`}
          subtext="Estimated hardware weight"
          icon={Layers}
          badge="Triage"
        />
        <StatCard
          label="Average Network Capacity"
          value={`${avgCapacity}%`}
          subtext="Utilization threshold across NCR"
          icon={Sliders}
          badge="NCR Fleet"
        />
      </div>

      {/* Section 1: Collection Centres Directory Management Table */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#172D49]">
              Collection Centres Registry ({filteredCentres.length} listed)
            </h3>
            <p className="text-xs text-[#172D49]/70 font-sans">
              Add, update operational metadata, or remove facilities from the active directory.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#172D49]/40 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter centres..."
                value={searchCentre}
                onChange={(e) => setSearchCentre(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl border border-[#172D49]/20 text-xs text-[#172D49]"
              />
            </div>

            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-[#172D49]/20 text-xs bg-white text-[#172D49]"
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#172D49]/15 text-[#172D49]/60 font-display uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">Centre Name</th>
                <th className="py-3 px-3">Type</th>
                <th className="py-3 px-3">City / Area</th>
                <th className="py-3 px-3">Capacity</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#172D49]/10">
              {filteredCentres.map((c) => (
                <tr key={c.id} className="hover:bg-[#FAF5EE]/60 transition-colors">
                  <td className="py-3 px-3">
                    <p className="font-serif font-bold text-[#172D49]">{c.name}</p>
                    <p className="text-[10px] text-[#172D49]/50 font-mono">ID: {c.id}</p>
                  </td>
                  <td className="py-3 px-3 text-[#172D49]/70">{c.facilityType}</td>
                  <td className="py-3 px-3 text-[#172D49]/70">
                    {c.area}, {c.city}
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-[#172D49]">
                    {c.capacityPercentage !== null ? `${c.capacityPercentage}%` : "N/A"}
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-display font-bold capitalize ${
                        c.status === "operational"
                          ? "bg-emerald-100 text-emerald-800"
                          : c.status === "maintenance"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {c.status.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        onClick={() => setEditingCentre(c)}
                        className="p-1.5 rounded-lg bg-[#FAF5EE] hover:bg-[#E6DED0] text-[#172D49] transition-colors"
                        title="Edit centre telemetry"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteCentre(c.id, c.name)}
                        className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                        title="Delete/deactivate centre"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Pickup Requests Master Table */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-[#172D49]/10 pb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#172D49]">
              Pickup Requests Management Log
            </h3>
            <p className="text-xs text-[#172D49]/70 font-sans">
              All resident and commercial collection dispatches stored in current session.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#172D49]/15 text-[#172D49]/60 font-display uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">Tracking ID</th>
                <th className="py-3 px-3">Citizen Name</th>
                <th className="py-3 px-3">Location</th>
                <th className="py-3 px-3">Items / Weight</th>
                <th className="py-3 px-3">Preferred Date</th>
                <th className="py-3 px-3">Current Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#172D49]/10">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-[#FAF5EE]/60 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-[#F47C68]">{req.id}</td>
                  <td className="py-3 px-3 font-serif font-bold text-[#172D49]">{req.userName}</td>
                  <td className="py-3 px-3 text-[#172D49]/70">
                    {req.area}, {req.city}
                  </td>
                  <td className="py-3 px-3 text-[#172D49]/70">
                    {req.totalQuantity} items (~{req.totalEstimatedWeightKg} kg)
                  </td>
                  <td className="py-3 px-3 font-mono text-[#172D49]/70">{req.preferredDate}</td>
                  <td className="py-3 px-3">
                    <span className="font-display font-bold px-2 py-0.5 rounded-full bg-[#FAF5EE] text-[#172D49] border border-[#172D49]/10 text-[10px]">
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modals */}
      <AddCentreModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onCentreAdded={() => reloadData()}
      />

      {editingCentre && (
        <EditCentreModal
          isOpen={true}
          onClose={() => setEditingCentre(null)}
          centre={editingCentre}
          onUpdated={() => reloadData()}
        />
      )}
    </div>
  );
}
