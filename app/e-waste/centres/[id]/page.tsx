"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  Truck,
  ShieldCheck,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Building2,
  Calendar,
  Layers,
  Info,
} from "lucide-react";
import { CollectionCentre } from "@/types/ewaste";
import { getStoredCentres, ECOCLE_EVENT_NAME } from "@/lib/ewaste/storage";
import { ewasteCategories } from "@/data/ewaste/categories";
import { getDirectionsUrl } from "@/lib/ewaste/distance";
import CentreCard from "@/components/ewaste/CentreCard";
import RequestPickupModal from "@/components/ewaste/RequestPickupModal";

export default function CentreDetailPage() {
  const params = useParams();
  const router = useRouter();
  const centreId = params.id as string;

  const [centres, setCentres] = useState<CollectionCentre[]>([]);
  const [centre, setCentre] = useState<CollectionCentre | null>(null);
  const [isPickupModalOpen, setIsPickupModalOpen] = useState(false);

  useEffect(() => {
    const list = getStoredCentres();
    setCentres(list);
    const found = list.find((c) => c.id === centreId);
    setCentre(found || null);

    const handleUpdate = () => {
      const updatedList = getStoredCentres();
      setCentres(updatedList);
      const updatedFound = updatedList.find((c) => c.id === centreId);
      setCentre(updatedFound || null);
    };

    window.addEventListener(ECOCLE_EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(ECOCLE_EVENT_NAME, handleUpdate);
  }, [centreId]);

  if (!centre) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#172D49]">
          Collection Centre Not Found
        </h2>
        <p className="text-xs text-[#172D49]/70">
          The requested demonstration facility ID does not exist in our Delhi NCR dataset.
        </p>
        <Link
          href="/e-waste/centres"
          className="px-5 py-2.5 rounded-full bg-[#172D49] text-white text-xs font-display font-bold inline-block"
        >
          ← Back to All Centres
        </Link>
      </div>
    );
  }

  const nearbyCentres = centres
    .filter((c) => c.id !== centre.id && c.city === centre.city)
    .slice(0, 3);

  const isFull = centre.capacityStatus === "full";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back Link */}
      <div>
        <Link
          href="/e-waste/centres"
          className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#172D49]/70 hover:text-[#F47C68] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collection Points Directory</span>
        </Link>
      </div>

      {/* Main Centre Hero Card */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#172D49]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Details */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#F47C68]/15 text-[#F47C68]">
                {centre.verificationBadge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider bg-[#E6DED0] text-[#172D49]">
                {centre.facilityType}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-display font-bold ${
                  centre.isOpenNow ? "bg-[#DDE8DE] text-[#5B7866]" : "bg-red-100 text-red-700"
                }`}
              >
                ● {centre.isOpenNow ? "Open Today" : "Temporarily Closed"}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172D49] leading-tight">
              {centre.name}
            </h1>

            <p className="text-sm sm:text-base text-[#172D49]/80 font-sans leading-relaxed">
              {centre.shortDescription}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 text-xs">
            <div>
              <span className="text-[#172D49]/60 font-sans block">Cluster:</span>
              <span className="font-bold text-[#172D49]">{centre.city}, {centre.state}</span>
            </div>
            <div>
              <span className="text-[#172D49]/60 font-sans block">Postal Code:</span>
              <span className="font-mono font-bold text-[#172D49]">{centre.postalCode}</span>
            </div>
            <div>
              <span className="text-[#172D49]/60 font-sans block">Demonstration Capacity:</span>
              <span className="font-bold text-[#172D49]">
                {centre.capacityPercentage !== null ? `${centre.capacityPercentage}% utilized` : "Standard buffer"}
              </span>
            </div>
            <div>
              <span className="text-[#172D49]/60 font-sans block">Doorstep Fleet:</span>
              <span className="font-bold text-[#5B7866]">
                {centre.facilitatesPickup ? "Yes (Available)" : "Walk-in Only"}
              </span>
            </div>
          </div>

          {/* Handling Instructions */}
          <div className="p-4 rounded-2xl bg-[#DDE8DE]/60 border border-[#5B7866]/30 text-xs space-y-1.5">
            <div className="flex items-center gap-2 font-display font-bold text-[#5B7866]">
              <Info className="w-4 h-4" />
              <span>Facility Handover Protocol:</span>
            </div>
            <p className="text-[#172D49]/80 font-sans leading-relaxed">
              {centre.handlingInstructions}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={getDirectionsUrl(centre.coordinates, centre.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#F47C68]" />
              <span>Get Google Maps Directions</span>
            </a>

            {centre.facilitatesPickup && (
              <button
                onClick={() => setIsPickupModalOpen(true)}
                className="px-6 py-3 rounded-full bg-[#5B7866] hover:bg-[#4b6354] text-white text-xs font-display font-bold transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <Truck className="w-4 h-4" />
                <span>Schedule Doorstep Pickup</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Schedule & Contact Card */}
        <div className="lg:col-span-4 bg-[#FAF5EE] rounded-2xl p-5 border border-[#172D49]/15 space-y-5">
          <div className="relative w-full h-44 rounded-xl overflow-hidden bg-white">
            <Image
              src={centre.imageUrl}
              alt={centre.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-2.5 left-3 text-white text-xs font-display font-bold">
              📍 {centre.area}, {centre.city}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-display font-bold text-[#172D49] uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#5B7866]" />
              <span>Weekly Schedule:</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#172D49]/10 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#172D49]/70">Mon - Fri:</span>
                <span className="font-bold text-[#172D49]">{centre.operatingHours.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#172D49]/70">Saturday:</span>
                <span className="font-bold text-[#172D49]">{centre.operatingHours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#172D49]/70">Sunday:</span>
                <span className="font-bold text-[#172D49]">{centre.operatingHours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-display font-bold text-[#172D49] uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#F47C68]" />
              <span>Facility Contacts (Demo):</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#172D49]/10 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#5B7866] shrink-0" />
                <span className="font-mono text-[#172D49]">{centre.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F47C68] shrink-0" />
                <span className="font-mono text-[#172D49] truncate">{centre.contactEmail}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Categories Full Grid */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Accepted Streams
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
              Supported Electronics at this Facility ({centre.acceptedCategories.length})
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {centre.acceptedCategories.map((catId) => {
            const catInfo = ewasteCategories.find((c) => c.id === catId);
            return (
              <div
                key={catId}
                className="p-3.5 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 text-xs space-y-1"
              >
                <div className="flex items-center gap-1.5 text-[#172D49] font-bold font-serif">
                  <CheckCircle className="w-3.5 h-3.5 text-[#5B7866]" />
                  <span>{catInfo?.name || catId}</span>
                </div>
                <p className="text-[11px] text-[#172D49]/60 leading-tight">
                  {catInfo?.prepGuidance || "Standard safe delivery required."}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Nearby Centres in Same City */}
      {nearbyCentres.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
              Other Collection Hubs in {centre.city}
            </h3>
            <Link
              href={`/e-waste/centres?city=${centre.city}`}
              className="text-xs font-display font-bold text-[#F47C68] hover:underline"
            >
              View All in {centre.city} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyCentres.map((c) => (
              <CentreCard key={c.id} centre={c} />
            ))}
          </div>
        </section>
      )}

      {/* Pickup Booking Modal pre-filled with this centre */}
      <RequestPickupModal
        isOpen={isPickupModalOpen}
        onClose={() => setIsPickupModalOpen(false)}
        preselectedCentreId={centre.id}
        preselectedCentreName={centre.name}
      />
    </div>
  );
}
