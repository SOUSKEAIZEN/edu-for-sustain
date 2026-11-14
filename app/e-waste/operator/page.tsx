"use client";

import React, { useState, useEffect } from "react";
import { CollectionCentre, PickupRequest, RequestStatus } from "@/types/ewaste";
import {
  getStoredCentres,
  getStoredRequests,
  updateStoredRequestStatus,
  ECOCLE_EVENT_NAME,
} from "@/lib/ewaste/storage";
import EditCentreModal from "@/components/ewaste/EditCentreModal";
import StatCard from "@/components/ewaste/charts/StatCard";
import {
  UserCheck,
  Building2,
  Truck,
  CheckCircle,
  XCircle,
  Sliders,
  AlertTriangle,
  Clock,
  MapPin,
  RefreshCw,
  Calendar,
} from "lucide-react";

export default function OperatorPortalPage() {
  const [centres, setCentres] = useState<CollectionCentre[]>([]);
  const [requests, setRequests] = useState<PickupRequest[]>([]);
  const [selectedCentreForEdit, setSelectedCentreForEdit] = useState<CollectionCentre | null>(null);
  const [selectedCityFilter, setSelectedCityFilter] = useState("All");

  const reloadData = () => {
    setCentres(getStoredCentres());
    setRequests(getStoredRequests());
  };

  useEffect(() => {
    reloadData();
    window.addEventListener(ECOCLE_EVENT_NAME, reloadData);
    return () => window.removeEventListener(ECOCLE_EVENT_NAME, reloadData);
  }, []);

  const openCentresCount = centres.filter((c) => c.status === "operational" && c.isOpenNow).length;
  const maintenanceCount = centres.filter((c) => c.status !== "operational" || !c.isOpenNow).length;
  const highCapacityCount = centres.filter(
    (c) => c.capacityPercentage !== null && c.capacityPercentage >= 75
  ).length;
  const pendingRequests = requests.filter(
    (r) => r.status === "Submitted" || r.status === "Under Review" || r.status === "Accepted"
  );

  const handleUpdateStatus = (
    requestId: string,
    newStatus: RequestStatus,
    note: string
  ) => {
    updateStoredRequestStatus(requestId, newStatus, note, "Operator");
  };

  const filteredCentres =
    selectedCityFilter === "All"
      ? centres
      : centres.filter((c) => c.city === selectedCityFilter);

  const cities = ["All", "New Delhi", "Delhi", "Faridabad", "Gurugram", "Manesar", "Sonipat", "Panipat", "Rohtak", "Palwal"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header with Demonstration Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#5B7866] text-white flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </span>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Collection Operations
            </span>
            <span className="text-[10px] bg-[#172D49] text-white px-2 py-0.5 rounded font-mono">
              Simulated Role: Facility Operator
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#172D49] mt-1">
            Collection Centre Operator Portal
          </h1>
          <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans mt-0.5">
            Manage depot telemetry, update reported capacity percentages, and dispatch doorstep collection vehicles.
          </p>
        </div>
      </div>

      {/* Role Notice */}
      <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#172D49]">
          <AlertTriangle className="w-4 h-4 text-[#F47C68] shrink-0" />
          <span>
            <strong>Simulated Operator Console:</strong> No password or login required for this demonstration. Any telemetry or capacity changes you save update your browser&apos;s live demo store.
          </span>
        </div>
      </div>

      {/* Operations Overview KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Open Facilities"
          value={openCentresCount}
          subtext="Active citizen intake"
          icon={Building2}
          badge="Live"
        />
        <StatCard
          label="Offline / Maintenance"
          value={maintenanceCount}
          subtext="Restricted intake"
          icon={AlertTriangle}
          trendText="Action Required"
          trendPositive={false}
          badge="Depot Alert"
        />
        <StatCard
          label="High Capacity (>75%)"
          value={highCapacityCount}
          subtext="Depots approaching full"
          icon={Sliders}
          badge="Buffer Alert"
        />
        <StatCard
          label="Pending Pickups"
          value={pendingRequests.length}
          subtext="Awaiting dispatch approval"
          icon={Truck}
          trendText="Action Needed"
          trendPositive={true}
          badge="Queue"
        />
      </div>

      {/* Section 1: Incoming Pickup Requests Management */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#172D49]/10 pb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#172D49]">
              Incoming Pickup Requests ({pendingRequests.length} Pending Action)
            </h3>
            <p className="text-xs text-[#172D49]/70 font-sans">
              Review citizen collection dispatches, verify declared electronics, and assign transport vehicles.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {requests.slice(0, 5).map((req) => (
            <div
              key={req.id}
              className="p-4 sm:p-5 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#F47C68] bg-white px-2 py-0.5 rounded border border-[#172D49]/10">
                    {req.id}
                  </span>
                  <span className="font-serif text-sm font-bold text-[#172D49]">
                    {req.userName}
                  </span>
                  <span className="text-xs text-[#172D49]/60 font-mono">
                    ({req.userPhone})
                  </span>
                </div>

                <span className="text-xs font-display font-bold px-2.5 py-0.5 rounded-full bg-white border border-[#172D49]/15 text-[#172D49]">
                  Status: {req.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#172D49]/80">
                <div className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#F47C68] shrink-0" />
                  <span className="truncate">
                    {req.address}, {req.city}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#5B7866] shrink-0" />
                  <span>
                    {req.preferredDate} ({req.preferredTimeSlot.split(" ")[0]})
                  </span>
                </div>
                <div className="truncate">
                  <span>
                    Items: <strong>{req.totalQuantity} units</strong> (~{req.totalEstimatedWeightKg} kg)
                  </span>
                </div>
              </div>

              {/* Operator Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#172D49]/10 text-xs font-display">
                {req.status === "Submitted" && (
                  <>
                    <button
                      onClick={() =>
                        handleUpdateStatus(req.id, "Accepted", "Accepted by depot logistics coordinator.")
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#5B7866] hover:bg-[#4b6354] text-white font-bold transition-colors"
                    >
                      Accept Request
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateStatus(req.id, "Rejected", "Rejected due to out-of-boundary zone.")
                      }
                      className="px-3 py-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 font-bold transition-colors"
                    >
                      Reject
                    </button>
                  </>
                )}

                {req.status === "Accepted" && (
                  <button
                    onClick={() =>
                      handleUpdateStatus(req.id, "Pickup Scheduled", "Mobile collection vehicle DL-1VA assigned.")
                    }
                    className="px-3 py-1.5 rounded-lg bg-[#172D49] hover:bg-[#263B52] text-white font-bold transition-colors"
                  >
                    Schedule Van Dispatch
                  </button>
                )}

                {req.status === "Pickup Scheduled" && (
                  <button
                    onClick={() =>
                      handleUpdateStatus(req.id, "Collected", "Hardware loaded onto vehicle. Manifest signed.")
                    }
                    className="px-3 py-1.5 rounded-lg bg-[#F47C68] hover:bg-[#E46A55] text-white font-bold transition-colors"
                  >
                    Mark as Collected
                  </button>
                )}

                {req.status === "Collected" && (
                  <button
                    onClick={() =>
                      handleUpdateStatus(req.id, "Completed", "Recycled at authorized smelting hub. Certificate issued.")
                    }
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
                  >
                    Mark as Completed
                  </button>
                )}

                <span className="text-[11px] text-[#172D49]/40 ml-auto">
                  Assigned: {req.assignedCentreName || "General NCR Pool"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Manage Centre Telemetry & Capacity */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#172D49]">
              Centre Operating Status & Capacity Control
            </h3>
            <p className="text-xs text-[#172D49]/70 font-sans">
              Click &quot;Update Telemetry&quot; on any facility to change operating hours, open status, or fill percentages.
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs font-display text-[#172D49]/60">City:</span>
            <select
              value={selectedCityFilter}
              onChange={(e) => setSelectedCityFilter(e.target.value)}
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
                <th className="py-3 px-3">City / Area</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Reported Capacity</th>
                <th className="py-3 px-3">Hours</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#172D49]/10">
              {filteredCentres.map((c) => (
                <tr key={c.id} className="hover:bg-[#FAF5EE]/60 transition-colors">
                  <td className="py-3 px-3 font-serif font-bold text-[#172D49]">
                    {c.name}
                  </td>
                  <td className="py-3 px-3 text-[#172D49]/70">
                    {c.area}, {c.city}
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
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-[#FAF5EE] rounded-full overflow-hidden border border-[#172D49]/10">
                        <div
                          className={`h-full rounded-full ${
                            (c.capacityPercentage || 0) >= 90
                              ? "bg-red-500"
                              : (c.capacityPercentage || 0) >= 70
                              ? "bg-amber-500"
                              : "bg-emerald-500"
                          }`}
                          style={{ width: `${c.capacityPercentage || 0}%` }}
                        />
                      </div>
                      <span className="font-mono font-bold text-[#172D49]">
                        {c.capacityPercentage !== null ? `${c.capacityPercentage}%` : "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-[#172D49]/70 font-sans">
                    {c.operatingHours.weekdays}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => setSelectedCentreForEdit(c)}
                      className="px-3 py-1.5 rounded-lg bg-[#172D49] hover:bg-[#263B52] text-white text-[11px] font-display font-bold transition-colors"
                    >
                      Update Telemetry
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Edit Centre Modal */}
      {selectedCentreForEdit && (
        <EditCentreModal
          isOpen={true}
          onClose={() => setSelectedCentreForEdit(null)}
          centre={selectedCentreForEdit}
          onUpdated={() => reloadData()}
        />
      )}
    </div>
  );
}
