"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sparkles, X, Upload, CheckCircle, AlertTriangle, ArrowRight, RefreshCw, Cpu } from "lucide-react";
import { EWasteCategoryType } from "@/types/ewaste";

interface SampleItem {
  id: string;
  name: string;
  category: EWasteCategoryType;
  categoryLabel: string;
  image: string;
  confidence: number;
  hazards: string[];
  recyclability: string;
}

const SAMPLE_ITEMS: SampleItem[] = [
  {
    id: "sample-phone",
    name: "Cracked Smartphone & Screen",
    category: "smartphones",
    categoryLabel: "Smartphones & Mobile Devices",
    image: "/images/hero/hero-students.jpg",
    confidence: 96.8,
    hazards: ["Lithium-Cobalt Battery", "Lead in PCB solder"],
    recyclability: "92% Precious Metal Recovery",
  },
  {
    id: "sample-laptop",
    name: "Damaged Workstation Laptop",
    category: "laptops",
    categoryLabel: "Laptops & Notebooks",
    image: "/images/research/academic-study.jpg",
    confidence: 94.2,
    hazards: ["Mercury Backlight", "Lithium Polymer Pack"],
    recyclability: "88% Aluminium & Copper Yield",
  },
  {
    id: "sample-battery",
    name: "Lithium Power Bank Pack",
    category: "batteries",
    categoryLabel: "Batteries & Power Cells",
    image: "/images/research/renewable-energy.jpg",
    confidence: 98.1,
    hazards: ["High Corrosive Electrolyte", "Thermal Runaway Risk"],
    recyclability: "95% Cobalt & Lithium Carbonate",
  },
  {
    id: "sample-cables",
    name: "Tangled Charger & Data Wires",
    category: "cables_wires",
    categoryLabel: "Cables, Wires & Interconnects",
    image: "/images/community/action-lifestyle.jpg",
    confidence: 91.5,
    hazards: ["PVC Jacketing", "Halogenated Flame Retardants"],
    recyclability: "94% Granular Copper Yield",
  },
];

interface AiClassifierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiClassifierModal({ isOpen, onClose }: AiClassifierModalProps) {
  const router = useRouter();
  const [selectedSample, setSelectedSample] = useState<SampleItem | null>(SAMPLE_ITEMS[0]);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<SampleItem | null>(null);

  if (!isOpen) return null;

  const handleRunClassification = () => {
    if (!selectedSample) return;
    setAnalyzing(true);
    setResult(null);

    // Simulate analysis delay
    setTimeout(() => {
      setAnalyzing(false);
      setResult(selectedSample);
    }, 1200);
  };

  const handleNavigateToCentres = (category: EWasteCategoryType) => {
    onClose();
    router.push(`/e-waste/centres?category=${category}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/15 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F47C68] to-[#172D49] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
                AI E-Waste Image Classifier
              </h3>
            </div>
            <p className="text-xs text-[#172D49]/70 font-sans">
              Simulated demonstration module detecting electronic waste categories and hazard profiles.
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

        {/* Demo Disclaimer Notice */}
        <div className="p-3 rounded-xl bg-[#FAF5EE] border border-[#172D49]/10 text-[11px] text-[#172D49]/80 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#F47C68] shrink-0" />
          <span>
            <strong>AI Classification Preview — Simulated:</strong> This feature demonstrates how automated computer vision triage models classify discarded hardware before routing to authorized recyclers.
          </span>
        </div>

        {/* Sample Item Selector */}
        <div>
          <label className="block text-xs font-display font-bold text-[#172D49] uppercase tracking-wider mb-2">
            Choose a Sample Discarded Electronic Item:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {SAMPLE_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedSample(item);
                  setResult(null);
                }}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                  selectedSample?.id === item.id
                    ? "bg-[#172D49] text-white border-[#172D49] shadow-sm"
                    : "bg-white hover:bg-[#FAF5EE] text-[#172D49] border-[#172D49]/15"
                }`}
              >
                <div className="relative w-full h-16 rounded-lg overflow-hidden mb-2 bg-[#FAF5EE]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <p className="font-bold truncate text-[11px]">{item.name}</p>
                <p className={`text-[10px] truncate ${selectedSample?.id === item.id ? "text-[#F47C68]" : "text-[#172D49]/60"}`}>
                  {item.categoryLabel}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={handleRunClassification}
            disabled={analyzing}
            className="w-full py-3 rounded-xl bg-[#F47C68] hover:bg-[#E46A55] disabled:opacity-60 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            {analyzing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Scanning Electronic Composition...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Run Simulated Image Classification</span>
              </>
            )}
          </button>
        </div>

        {/* Results Card */}
        {result && (
          <div className="p-5 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/30 space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#5B7866]" />
                <span className="font-display font-bold text-sm text-[#172D49]">
                  Item Identified: {result.categoryLabel}
                </span>
              </div>
              <span className="text-xs font-mono font-bold bg-[#5B7866] text-white px-2.5 py-0.5 rounded-full">
                {result.confidence}% Match
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/80 space-y-1">
                <span className="font-bold text-[#172D49] block">Detected Hazardous Elements:</span>
                <ul className="text-[#172D49]/70 space-y-0.5">
                  {result.hazards.map((h, i) => (
                    <li key={i}>• {h}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-white/80 space-y-1">
                <span className="font-bold text-[#172D49] block">Resource Recovery Metric:</span>
                <p className="text-[#5B7866] font-medium">{result.recyclability}</p>
                <p className="text-[11px] text-[#172D49]/60">Eligible for door-to-door or depot recycling.</p>
              </div>
            </div>

            <button
              onClick={() => handleNavigateToCentres(result.category)}
              className="w-full py-2.5 rounded-xl bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Find Verified Centres for {result.categoryLabel}</span>
              <ArrowRight className="w-4 h-4 text-[#F47C68]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
