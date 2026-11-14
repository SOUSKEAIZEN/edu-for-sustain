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
  className = "w-full h-full",
}: LeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [id: string]: any }>({});

  useEffect(() => {
    if (!mapContainerRef.current) return;

    let isMounted = true;
    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      // Initialize map instance once
      if (!mapInstanceRef.current) {
        const initialCenter: [number, number] = userCoordinates
          ? [userCoordinates.lat, userCoordinates.lng]
          : [28.58, 77.18];

        const map = L.map(mapContainerRef.current, {
          center: initialCenter,
          zoom: userCoordinates ? 11 : 10,
          zoomControl: false,
          maxBounds: [
            [27.5, 76.2],
            [29.5, 78.2],
          ], // Constrain view roughly around NCR
        });

        // Top right zoom controls
        L.control.zoom({ position: "topright" }).addTo(map);

        // OpenStreetMap street layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
          minZoom: 8,
        }).addTo(map);

        mapInstanceRef.current = map;
      }

      const map = mapInstanceRef.current;

      // Invalidate size to ensure crisp render within flex/grid containers
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 150);

      // Clear existing markers
      Object.values(markersRef.current).forEach((m) => m.remove());
      markersRef.current = {};

      // 1. User Location Pin
      if (userCoordinates) {
        const userIcon = L.divIcon({
          className: "ecocycle-user-pin",
          html: `
            <div style="position:relative; display:flex; align-items:center; justify-content:center;">
              <span style="position:absolute; width:26px; height:26px; background:rgba(244,124,104,0.4); border-radius:50%; animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></span>
              <span style="position:relative; width:13px; height:13px; background:#F47C68; border:2px solid white; border-radius:50%; box-shadow:0 2px 4px rgba(0,0,0,0.3);"></span>
            </div>
          `,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
        });

        const userMarker = L.marker(
          [userCoordinates.lat, userCoordinates.lng],
          { icon: userIcon }
        )
          .addTo(map)
          .bindPopup(
            "<div style='font-family:sans-serif; font-size:12px; font-weight:bold;'>📍 Your Location</div>"
          );
        markersRef.current["user_location"] = userMarker;
      }

      // 2. Collection Centre Pins
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
              width: ${isSelected ? "32px" : "26px"};
              height: ${isSelected ? "32px" : "26px"};
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 3px 6px rgba(0,0,0,0.25);
              border: 2px solid white;
              transition: all 0.2s ease;
              cursor: pointer;
            ">
              <span style="transform: rotate(45deg); font-size: 10px; font-weight: bold;">
                ${isSelected ? "★" : "♻"}
              </span>
            </div>
          `,
          iconSize: [isSelected ? 32 : 26, isSelected ? 32 : 26],
          iconAnchor: [isSelected ? 16 : 13, isSelected ? 32 : 26],
        });

        const popupContent = `
          <div style="font-family: 'DM Sans', sans-serif; font-size: 12px; min-width: 180px; padding: 2px;">
            <div style="font-weight: bold; color: #172D49; font-size: 13px; margin-bottom: 2px;">
              ${centre.name}
            </div>
            <div style="color: #64748b; font-size: 11px; margin-bottom: 4px;">
              📍 ${centre.area}, ${centre.city}
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 6px; font-size: 11px;">
              <span style="color: ${
                centre.isOpenNow ? "#16a34a" : "#dc2626"
              }; font-weight: bold;">
                ● ${centre.isOpenNow ? "Open Today" : "Closed"}
              </span>
              <span style="color: #475569;">
                Cap: <strong>${
                  centre.capacityPercentage !== null
                    ? `${centre.capacityPercentage}%`
                    : "Std"
                }</strong>
              </span>
            </div>
            <button
              id="popup-btn-${centre.id}"
              style="width: 100%; background: #172D49; color: white; border: none; border-radius: 6px; padding: 5px 8px; font-size: 11px; font-weight: bold; cursor: pointer;"
            >
              Select Facility
            </button>
          </div>
        `;

        const marker = L.marker(
          [centre.coordinates.lat, centre.coordinates.lng],
          { icon: customIcon }
        )
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

      // Smooth pan to selected centre
      if (selectedCentre && markersRef.current[selectedCentre.id]) {
        map.flyTo(
          [
            selectedCentre.coordinates.lat,
            selectedCentre.coordinates.lng,
          ],
          13,
          { duration: 0.8 }
        );
        markersRef.current[selectedCentre.id].openPopup();
      }
    });

    return () => {
      isMounted = false;
    };
  }, [centres, selectedCentre, userCoordinates, onSelectCentre]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-[#172D49]/15 shadow-sm z-10 ${className}`}
    >
      <div ref={mapContainerRef} className="w-full h-full" />
      <style jsx global>{`
        /* Contain Leaflet z-indexes to prevent header overlay */
        .leaflet-pane {
          z-index: 10 !important;
        }
        .leaflet-top,
        .leaflet-bottom {
          z-index: 15 !important;
        }
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
