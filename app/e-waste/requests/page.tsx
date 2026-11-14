"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PickupRequest } from "@/types/ewaste";
import { getStoredRequests, updateStoredRequestStatus, ECOCLE_EVENT_NAME } from "@/lib/ewaste/storage";
import RequestPickupModal from "@/components/ewaste/RequestPickupModal";
import {
  Truck,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Calendar,
  MapPin,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

function PickupRequestsContent() {
  const searchParams = useSearchParams();
  const preselectedCentreId = searchParams.get("centreId") || undefined;

  const [requests, setRequests] = useState<PickupRequest[]>([]);
  const [activeTab, setActiveTab] = useState<"my_requests" | "book">("my_requests");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<PickupRequest | null>(null);

  useEffect(() => {
    setRequests(getStoredRequests());

    const handleUpdate = () => {
      setRequests(getStoredRequests());
    };
    window.addEventListener(ECOCLE_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(ECOCLE_EVENT_NAME, handleUpdate);
  }, []);

  const handleCancelRequest = (id: string) => {
    if (confirm("Are you sure you want to cancel this demonstration pickup request?")) {
      updateStoredRequestStatus(id, "Cancelled", "Cancelled by user via web portal", "User");
    }
  };

  const getStatusBadge = (status: PickupRequest["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "Collected":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Pickup Scheduled":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Accepted":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "Under Review":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "Rejected":
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#5B7866] text-white flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </span>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Doorstep Recovery
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#172D49] mt-1">
            E-Waste Pickup Requests & Tracking
          </h1>
          <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans mt-0.5">
            Book certified household collection vans or track existing demonstration requests across Delhi NCR.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>New Pickup Request</span>
        </button>
      </div>

      {/* Demonstration Banner */}
      <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#172D49]">
          <ShieldCheck className="w-4 h-4 text-[#5B7866] shrink-0" />
          <span>
            <strong>Simulated Workflow:</strong> Requests are saved directly in your browser&apos;s localStorage. Operators in the Operator Portal can update statuses in real time.
          </span>
        </div>
        <span className="text-[11px] font-mono bg-white px-2.5 py-1 rounded-md border border-[#172D49]/15 text-[#172D49] shrink-0">
          {requests.length} Requests in Store
        </span>
      </div>

      {/* Main Content: Requests List + Timeline Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Request Cards */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-display font-bold text-[#172D49] mb-1">
            <span>Recent Citizen Collection Logs ({requests.length})</span>
            <span className="text-[#172D49]/50 font-normal">Select a request to inspect timeline</span>
          </div>

          {requests.map((req) => {
            const isSelected = selectedRequest?.id === req.id;
            const canCancel = req.status === "Submitted" || req.status === "Under Review" || req.status === "Accepted";

            return (
              <div
                key={req.id}
                onClick={() => setSelectedRequest(req)}
                className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all cursor-pointer space-y-3 ${
                  isSelected
                    ? "border-[#F47C68] ring-2 ring-[#F47C68]/20 shadow-md"
                    : "border-[#172D49]/10 hover:border-[#172D49]/30 hover:shadow-xs"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#F47C68]">
                        {req.id}
                      </span>
                      <span
                        className={`text-[10px] font-display font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(
                          req.status
                        )}`}
                      >
                        {req.status}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-[#172D49] mt-0.5">
                      {req.userName}
                    </h4>
                  </div>

                  <span className="text-[11px] text-[#172D49]/60 font-mono">
                    {req.preferredDate}
                  </span>
                </div>

                <div className="text-xs text-[#172D49]/80 space-y-1">
                  <p className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#F47C68] shrink-0" />
                    <span>
                      {req.address}, {req.area}, {req.city}
                    </span>
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px] text-[#172D49]/60">
                    <Clock className="w-3.5 h-3.5 text-[#5B7866] shrink-0" />
                    <span>Slot: {req.preferredTimeSlot}</span>
                  </p>
                </div>

                {/* Items Summary */}
                <div className="p-2.5 rounded-xl bg-[#FAF5EE] text-xs flex items-center justify-between">
                  <span className="text-[#172D49]/70">
                    {req.totalQuantity} items (~{req.totalEstimatedWeightKg} kg)
                  </span>
                  <span className="text-[#172D49] font-medium truncate max-w-[200px]">
                    {req.items.map((i) => i.categoryName.split("&")[0].trim()).join(", ")}
                  </span>
                </div>

                {/* Footer and cancel action */}
                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="text-[#172D49]/50 text-[11px]">
                    Assigned: {req.assignedCentreName || "Pending logistics"}
                  </span>

                  {canCancel && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCancelRequest(req.id);
                      }}
                      className="text-[#DC2626] hover:underline font-display text-[11px] font-bold"
                    >
                      Cancel Request
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Timeline & Detailed View */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#172D49]/15 shadow-sm space-y-5 sticky top-24">
          {selectedRequest ? (
            <div className="space-y-5">
              <div className="border-b border-[#172D49]/10 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#F47C68]">
                    {selectedRequest.id}
                  </span>
                  <span
                    className={`text-xs font-display font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadge(
                      selectedRequest.status
                    )}`}
                  >
                    {selectedRequest.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#172D49] mt-1">
                  {selectedRequest.userName}
                </h3>
                <p className="text-xs text-[#172D49]/60 font-mono mt-0.5">
                  {selectedRequest.userPhone} • {selectedRequest.userEmail}
                </p>
              </div>

              {/* Items Table */}
              <div>
                <p className="text-xs font-display font-bold uppercase tracking-wider text-[#172D49] mb-2">
                  Declared Electronic Items:
                </p>
                <div className="space-y-1.5 text-xs">
                  {selectedRequest.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-[#172D49] block">{item.categoryName}</span>
                        {item.conditionNotes && (
                          <span className="text-[10px] text-[#172D49]/60 italic">
                            {item.conditionNotes}
                          </span>
                        )}
                      </div>
                      <span className="font-mono font-bold text-[#172D49]">
                        x{item.quantity} (~{item.estimatedWeightKg} kg)
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit Progress Timeline */}
              <div>
                <p className="text-xs font-display font-bold uppercase tracking-wider text-[#172D49] mb-3">
                  Verification & Dispatch Timeline:
                </p>
                <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#172D49]/10">
                  {selectedRequest.timeline.map((evt, idx) => (
                    <div key={idx} className="relative flex items-start gap-3 text-xs pl-2">
                      <div className="w-4 h-4 rounded-full bg-[#172D49] text-white flex items-center justify-center shrink-0 mt-0.5 z-10 text-[9px]">
                        ✓
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#172D49]">{evt.status}</span>
                          <span className="text-[10px] bg-[#FAF5EE] text-[#172D49]/60 px-1.5 rounded font-mono">
                            {evt.actor}
                          </span>
                        </div>
                        <p className="text-[#172D49]/70 text-[11px]">{evt.note}</p>
                        <p className="text-[10px] text-[#172D49]/40 font-mono">
                          {new Date(evt.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center space-y-2">
              <Truck className="w-10 h-10 text-[#172D49]/30 mx-auto" />
              <h4 className="font-serif text-base font-bold text-[#172D49]">
                Select a Request to Inspect
              </h4>
              <p className="text-xs text-[#172D49]/60 max-w-xs mx-auto">
                Click any collection request on the left to view declared devices, pickup address, and the complete audit dispatch timeline.
              </p>
            </div>
          )}
        </div>
      </div>

      <RequestPickupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedCentreId={preselectedCentreId}
      />
    </div>
  );
}

export default function PickupRequestsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-xs font-display text-[#172D49]/60">
          Loading pickup requests...
        </div>
      }
    >
      <PickupRequestsContent />
    </Suspense>
  );
}
