"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { CollectionCentre, GeoCoordinates } from "@/types/ewaste";

interface LeafletMapProps {
  centres: CollectionCentre[];
  selectedCentre: CollectionCentre | null;
  onSelectCentre: (centre: CollectionCentre) => void;
  userCoordinates?: GeoCoordinates;
  className?: string;
}

export default function LeafletMap({
  centres,
  selectedCentre,
  onSelectCentre,
  userCoordinates,
  className = "w-full h-full min-h-[450px]",
}: LeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [id: string]: any }>({});

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Dynamically load leaflet on client only
    let isMounted = true;
    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      // Prevent re-initialization if already initialized
      if (!mapInstanceRef.current) {
        // Delhi NCR center: 28.58, 77.18
        const initialCenter: [number, number] = userCoordinates
          ? [userCoordinates.lat, userCoordinates.lng]
          : [28.58, 77.18];

        const map = L.map(mapContainerRef.current, {
          center: initialCenter,
          zoom: userCoordinates ? 11 : 10,
          zoomControl: false,
        });

        // Add standard zoom control at top-right
        L.control.zoom({ position: "topright" }).addTo(map);

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
          minZoom: 8,
        }).addTo(map);

        mapInstanceRef.current = map;
      }

      const map = mapInstanceRef.current;

      // Clear existing markers
      Object.values(markersRef.current).forEach((m) => m.remove());
      markersRef.current = {};

      // 1. Add User Location Marker if available
      if (userCoordinates) {
        const userIcon = L.divIcon({
          className: "ecocycle-user-pin",
          html: `
            <div style="position:relative; display:flex; align-items:center; justify-content:center;">
              <span style="position:absolute; width:28px; height:28px; background:rgba(244,124,104,0.4); border-radius:50%; animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></span>
              <span style="position:relative; width:14px; height:14px; background:#F47C68; border:2px solid white; border-radius:50%; box-shadow:0 2px 4px rgba(0,0,0,0.3);"></span>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        const userMarker = L.marker([userCoordinates.lat, userCoordinates.lng], { icon: userIcon })
          .addTo(map)
          .bindPopup("<div style='font-family:sans-serif; font-size:12px; font-weight:bold;'>📍 Your Selected Location</div>");
        markersRef.current["user_location"] = userMarker;
      }

      // 2. Add Collection Centre Markers
      centres.forEach((centre) => {
        const isSelected = selectedCentre?.id === centre.id;
        const isFull = centre.capacityStatus === "full";
        const isMaintenance = centre.status === "maintenance";

        const pinColor = isSelected
          ? "#F47C68"
          : isFull
          ? "#EF4444"
          : isMaintenance
          ? "#F59E0B"
          : "#172D49";

        const customIcon = L.divIcon({
          className: "ecocycle-centre-marker",
          html: `
            <div style="
              background: ${pinColor};
              color: white;
              width: ${isSelected ? "34px" : "28px"};
              height: ${isSelected ? "34px" : "28px"};
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
              border: 2px solid white;
              transition: all 0.2s ease;
              cursor: pointer;
            ">
              <span style="transform: rotate(45deg); font-size: 11px; font-weight: bold;">
                ${isSelected ? "★" : "♻"}
              </span>
            </div>
          `,
          iconSize: [isSelected ? 34 : 28, isSelected ? 34 : 28],
          iconAnchor: [isSelected ? 17 : 14, isSelected ? 34 : 28],
        });

        const popupContent = `
          <div style="font-family: 'DM Sans', sans-serif; font-size: 12px; min-width: 190px; padding: 4px;">
            <div style="font-weight: bold; color: #172D49; font-size: 13px; margin-bottom: 2px;">
              ${centre.name}
            </div>
            <div style="color: #64748b; margin-bottom: 4px;">
              📍 ${centre.area}, ${centre.city}
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 6px; font-size: 11px;">
              <span style="color: ${centre.isOpenNow ? "#16a34a" : "#dc2626"}; font-weight: bold;">
                ● ${centre.isOpenNow ? "Open Now" : "Closed"}
              </span>
              <span style="color: #475569;">
                Capacity: <strong>${centre.capacityPercentage !== null ? `${centre.capacityPercentage}%` : "Standard"}</strong>
              </span>
            </div>
            <div style="font-size: 10px; color: #64748B; margin-bottom: 6px;">
              ${centre.acceptedCategories.length} categories accepted
            </div>
            <button
              id="popup-btn-${centre.id}"
              style="width: 100%; background: #172D49; color: white; border: none; border-radius: 6px; padding: 5px 8px; font-size: 11px; font-weight: bold; cursor: pointer;"
            >
              Select Facility
            </button>
          </div>
        `;

        const marker = L.marker([centre.coordinates.lat, centre.coordinates.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(popupContent);

        marker.on("click", () => {
          onSelectCentre(centre);
        });

        marker.on("popupopen", () => {
          const btn = document.getElementById(`popup-btn-${centre.id}`);
          if (btn) {
            btn.onclick = () => onSelectCentre(centre);
          }
        });

        markersRef.current[centre.id] = marker;
      });

      // Fly to selected centre if it changes
      if (selectedCentre && markersRef.current[selectedCentre.id]) {
        map.flyTo([selectedCentre.coordinates.lat, selectedCentre.coordinates.lng], 13, {
          duration: 1.0,
        });
        markersRef.current[selectedCentre.id].openPopup();
      }
    });

    return () => {
      isMounted = false;
    };
  }, [centres, selectedCentre, userCoordinates, onSelectCentre]);

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-[#172D49]/15 shadow-sm ${className}`}>
      <div ref={mapContainerRef} className="w-full h-full" style={{ minHeight: "450px" }} />
      <style jsx global>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
