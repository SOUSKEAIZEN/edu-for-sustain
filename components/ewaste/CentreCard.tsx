"use client";

import React from "react";
import Link from "next/link";
import { CollectionCentre } from "@/types/ewaste";
import { MapPin, Clock, Phone, Navigation, Truck, ShieldCheck, ChevronRight } from "lucide-react";
import { getDirectionsUrl } from "@/lib/ewaste/distance";

interface CentreCardProps {
  centre: CollectionCentre;
  distanceFormatted?: string;
  recommendationReason?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function CentreCard({
  centre,
  distanceFormatted,
  recommendationReason,
  isSelected = false,
  onSelect,
}: CentreCardProps) {
  const isFull = centre.capacityStatus === "full";
  const isMaintenance = centre.status === "maintenance";

  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-2xl p-5 border transition-all duration-200 cursor-pointer ${
        isSelected
          ? "border-[#F47C68] ring-2 ring-[#F47C68]/30 shadow-md"
          : "border-[#172D49]/10 hover:border-[#172D49]/30 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-display font-bold uppercase tracking-wider bg-[#F47C68]/15 text-[#F47C68] px-2 py-0.5 rounded">
            {centre.verificationBadge}
          </span>
          <span className="text-[10px] font-display uppercase tracking-wider bg-[#E6DED0] text-[#172D49] px-2 py-0.5 rounded">
            {centre.facilityType}
          </span>
        </div>

        {/* Distance Badge if available */}
        {distanceFormatted && distanceFormatted !== "Distance unavailable" && (
          <span className="text-xs font-mono font-bold text-[#172D49] bg-[#FAF5EE] px-2.5 py-1 rounded-full border border-[#172D49]/10 shrink-0">
            📍 {distanceFormatted}
          </span>
        )}
      </div>

      <h3 className="font-serif text-lg font-bold text-[#172D49] leading-snug mb-1">
        {centre.name}
      </h3>

      <p className="text-xs text-[#172D49]/70 font-sans line-clamp-2 mb-3">
        {centre.shortDescription}
      </p>

      {/* Address & Hours */}
      <div className="space-y-1.5 text-xs text-[#172D49]/80 mb-3.5">
        <div className="flex items-start gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#F47C68] shrink-0 mt-0.5" />
          <span className="truncate">
            {centre.address}, {centre.area}, {centre.city}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#5B7866] shrink-0" />
          <span className="font-sans">
            {centre.operatingHours.weekdays} •{" "}
            <strong className={centre.isOpenNow ? "text-[#5B7866]" : "text-[#DC2626]"}>
              {centre.isOpenNow ? "Open Today" : "Closed"}
            </strong>
          </span>
        </div>
      </div>

      {/* Capacity Indicator Bar */}
      <div className="p-3 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 mb-4">
        <div className="flex items-center justify-between text-xs mb-1.5 font-display">
          <span className="text-[#172D49]/70">Reported Intake Capacity:</span>
          <span
            className={`font-bold ${
              isFull
                ? "text-[#DC2626]"
                : centre.capacityStatus === "nearly_full"
                ? "text-[#D97706]"
                : "text-[#5B7866]"
            }`}
          >
            {centre.capacityPercentage !== null ? `${centre.capacityPercentage}% utilized` : "Standard buffer"}
          </span>
        </div>
        <div className="w-full h-1.5 bg-[#E6DED0] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isFull
                ? "bg-[#DC2626]"
                : centre.capacityStatus === "nearly_full"
                ? "bg-[#D97706]"
                : "bg-[#5B7866]"
            }`}
            style={{ width: `${centre.capacityPercentage || 30}%` }}
          />
        </div>
      </div>

      {/* Accepted Categories Preview */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {centre.acceptedCategories.slice(0, 4).map((cat) => (
            <span
              key={cat}
              className="px-2 py-0.5 rounded-full bg-white border border-[#172D49]/15 text-[10px] text-[#172D49] font-display"
            >
              {cat.replace("_", " ")}
            </span>
          ))}
          {centre.acceptedCategories.length > 4 && (
            <span className="px-2 py-0.5 rounded-full bg-[#172D49] text-white text-[10px] font-display">
              +{centre.acceptedCategories.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Recommendation reason callout if available */}
      {recommendationReason && (
        <div className="mb-4 p-2.5 rounded-xl bg-[#DDE8DE]/60 border border-[#5B7866]/20 text-[11px] text-[#172D49]/80 font-sans leading-relaxed">
          <span className="font-bold text-[#5B7866]">Recommendation Note: </span>
          {recommendationReason}
        </div>
      )}

      {/* Action Footer Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-[#172D49]/10">
        <Link
          href={`/e-waste/centres/${centre.id}`}
          onClick={(e) => e.stopPropagation()}
          className="flex-1 py-2 px-3 rounded-xl bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold text-center transition-colors inline-flex items-center justify-center gap-1"
        >
          <span>View Profile</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={getDirectionsUrl(centre.coordinates, centre.name)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-xl bg-[#FAF5EE] hover:bg-[#E6DED0] text-[#172D49] border border-[#172D49]/15 transition-colors"
          title="Get Google Maps navigation directions"
        >
          <Navigation className="w-4 h-4 text-[#F47C68]" />
        </a>

        {centre.facilitatesPickup && (
          <Link
            href={`/e-waste/requests?centreId=${centre.id}`}
            onClick={(e) => e.stopPropagation()}
            className="py-2 px-3 rounded-xl bg-[#5B7866] hover:bg-[#4b6354] text-white text-xs font-display font-bold text-center transition-colors inline-flex items-center gap-1"
            title="Book doorstep pickup"
          >
            <Truck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Pickup</span>
          </Link>
        )}
      </div>
    </div>
  );
}
