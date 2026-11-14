"use client";

import React, { useState, useEffect } from "react";
import { SmartBin } from "@/types/ewaste";
import { getStoredSmartBins, simulateSmartBinPing, ECOCLE_EVENT_NAME } from "@/lib/ewaste/storage";
import { Radio, RefreshCw, Battery, Thermometer, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";

export default function SmartBinsSection() {
  const [bins, setBins] = useState<SmartBin[]>([]);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    setBins(getStoredSmartBins());

    const handleStorageUpdate = () => {
      setBins(getStoredSmartBins());
    };

    window.addEventListener(ECOCLE_EVENT_NAME, handleStorageUpdate);
    return () => {
      window.removeEventListener(ECOCLE_EVENT_NAME, handleStorageUpdate);
    };
  }, []);

  const handleSimulatePing = (binId?: string) => {
    setUpdatingId(binId || "all");
    setTimeout(() => {
      simulateSmartBinPing(binId);
      setUpdatingId(null);
    }, 600);
  };

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172D49]/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B7866] animate-pulse" />
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
              Simulated IoT Telemetry
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
            Live Smart-Bin Fill Monitoring
          </h3>
          <p className="text-xs text-[#172D49]/70 font-sans mt-0.5">
            Real-time ultrasonic fill and temperature sensors deployed across collection hubs in Delhi & Haryana.
          </p>
        </div>

        <button
          onClick={() => handleSimulatePing()}
          disabled={updatingId !== null}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#172D49] hover:bg-[#263B52] disabled:opacity-50 text-white text-xs font-display font-bold transition-colors shadow-sm shrink-0"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#F47C68] ${updatingId ? "animate-spin" : ""}`} />
          <span>Simulate Sensor Telemetry Ping</span>
        </button>
      </div>

      {/* Demonstration Banner */}
      <div className="p-3 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 text-xs text-[#172D49]/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-[#F47C68]" />
          <span>
            <strong>Simulated Telemetry:</strong> Demonstrates real-time ultrasonic capacity threshold alerts before collection vehicles are dynamically dispatched.
          </span>
        </div>
        <span className="text-[10px] bg-[#172D49] text-white px-2 py-0.5 rounded font-mono shrink-0">
          9 Active Nodes
        </span>
      </div>

      {/* Grid of Bins */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bins.map((bin) => {
          const isCritical = bin.fillPercentage >= 90;
          const isWarning = bin.fillPercentage >= 75;
          const isOffline = bin.sensorStatus === "offline";

          const gaugeColor = isOffline
            ? "bg-[#64748B]"
            : isCritical
            ? "bg-[#DC2626]"
            : isWarning
            ? "bg-[#D97706]"
            : "bg-[#5B7866]";

          return (
            <div
              key={bin.id}
              className="p-4 rounded-2xl bg-[#FAF5EE]/70 border border-[#172D49]/10 hover:border-[#172D49]/25 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#172D49] bg-white px-2 py-0.5 rounded border border-[#172D49]/10">
                  {bin.binCode}
                </span>

                <span
                  className={`text-[11px] font-display font-bold px-2 py-0.5 rounded-full ${
                    isOffline
                      ? "bg-gray-200 text-gray-700"
                      : isCritical
                      ? "bg-red-100 text-red-700"
                      : isWarning
                      ? "bg-amber-100 text-amber-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  ● {bin.capacityCondition}
                </span>
              </div>

              <div>
                <h4 className="font-serif text-sm font-bold text-[#172D49] truncate">
                  {bin.centreName}
                </h4>
                <p className="text-[11px] text-[#172D49]/60 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#F47C68]" />
                  <span>
                    {bin.area}, {bin.city} • {bin.categoryName}
                  </span>
                </p>
              </div>

              {/* Fill Gauge */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-display">
                  <span className="text-[#172D49]/70">Ultrasonic Fill Level:</span>
                  <span className="font-mono font-bold text-[#172D49]">{bin.fillPercentage}%</span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-[#172D49]/10">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${gaugeColor}`}
                    style={{ width: `${bin.fillPercentage}%` }}
                  />
                </div>
              </div>

              {/* Sensor Diagnostics */}
              <div className="flex items-center justify-between text-[11px] text-[#172D49]/70 pt-2 border-t border-[#172D49]/10">
                <div className="flex items-center gap-1">
                  <Battery className="w-3.5 h-3.5 text-[#5B7866]" />
                  <span>{bin.batteryLevel}%</span>
                </div>

                <div className="flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5 text-[#F47C68]" />
                  <span>{bin.temperatureCelsius}°C</span>
                </div>

                <button
                  onClick={() => handleSimulatePing(bin.id)}
                  className="text-[#F47C68] hover:underline font-display text-[10px] font-bold"
                >
                  Ping Node
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
