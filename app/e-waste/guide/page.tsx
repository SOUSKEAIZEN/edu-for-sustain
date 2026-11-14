"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ShieldAlert,
  BatteryCharging,
  HardDrive,
  Cpu,
  Tv,
  Cable,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { ewasteDisposalGuides } from "@/data/ewaste/guide";

export default function EwasteGuidePage() {
  const [activeSection, setActiveSection] = useState(ewasteDisposalGuides[0].id);

  const selectedGuide = ewasteDisposalGuides.find((g) => g.id === activeSection) || ewasteDisposalGuides[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-[#172D49]/10 pb-6 max-w-3xl space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-[#172D49] text-white flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-[#F47C68]" />
          </span>
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
            Practical Guidelines
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#172D49]">
          E-Waste Safety & Disposal Protocols
        </h1>
        <p className="text-xs sm:text-sm text-[#172D49]/70 font-sans leading-relaxed">
          Learn how to safely isolate lithium batteries, sanitize confidential storage drives, and prepare consumer electronics before visiting collection hubs.
        </p>
      </div>

      {/* Main Grid: Guide Categories on Left, Deep Dive on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <p className="text-xs font-display font-bold uppercase tracking-wider text-[#172D49] mb-3">
            Guidance Sections:
          </p>
          {ewasteDisposalGuides.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setActiveSection(guide.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all border ${
                activeSection === guide.id
                  ? "bg-[#172D49] text-white border-[#172D49] shadow-md"
                  : "bg-white hover:bg-[#FAF5EE] text-[#172D49] border-[#172D49]/10"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span
                  className={`text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    activeSection === guide.id
                      ? "bg-[#F47C68] text-white"
                      : "bg-[#FAF5EE] text-[#F47C68]"
                  }`}
                >
                  {guide.badge}
                </span>
                <span
                  className={`text-[10px] font-mono ${
                    activeSection === guide.id ? "text-[#DDE8DE]" : "text-[#172D49]/50"
                  }`}
                >
                  {guide.dangerLevel}
                </span>
              </div>
              <h4 className="font-serif text-sm font-bold truncate">{guide.title}</h4>
            </button>
          ))}

          {/* Legal Reference Box */}
          <div className="mt-6 p-4 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/30 text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-[#5B7866] font-display">
              <ShieldCheck className="w-4 h-4" />
              <span>Regulatory Framework</span>
            </div>
            <p className="text-[#172D49]/80 font-sans text-[11px] leading-relaxed">
              Governed under the <strong>E-Waste (Management) Rules, 2022</strong> & <strong>Battery Waste Management Rules, 2022</strong> notified by the Ministry of Environment, Forest & Climate Change (MoEFCC), Govt. of India.
            </p>
          </div>
        </div>

        {/* Detailed Guide Content */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#172D49]/15 shadow-sm space-y-6">
          <div className="space-y-2 border-b border-[#172D49]/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
                {selectedGuide.badge}
              </span>
              <span className="text-xs text-[#172D49]/40">•</span>
              <span className="text-xs font-mono text-[#DC2626] font-bold">
                Hazard Index: {selectedGuide.dangerLevel}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172D49]">
              {selectedGuide.title}
            </h2>

            <p className="text-sm text-[#172D49]/80 font-sans leading-relaxed">
              {selectedGuide.intro}
            </p>
          </div>

          {/* Hazardous Substances Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-[#172D49] flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#F47C68]" />
              <span>Hazardous Chemicals & Heavy Metals Present:</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedGuide.toxicSubstances.map((chem, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-[#FAF5EE] border border-[#172D49]/15 text-xs text-[#172D49] font-mono"
                >
                  ⚠ {chem}
                </span>
              ))}
            </div>
          </div>

          {/* Mandatory Preparation Protocol */}
          <div className="space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-[#172D49] flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#5B7866]" />
              <span>Safe Preparation Steps Before Drop-off:</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#172D49]/80 font-sans">
              {selectedGuide.safePreparationSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF5EE]">
                  <span className="font-mono font-bold text-[#5B7866] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prohibited Actions Warnings */}
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-2">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-red-600" />
              <span>Prohibited & Dangerous Practices:</span>
            </h4>
            <ul className="space-y-1 text-xs text-red-700 font-sans">
              {selectedGuide.prohibitedActions.map((act, idx) => (
                <li key={idx} className="leading-relaxed">
                  • {act}
                </li>
              ))}
            </ul>
          </div>

          {/* Data Sanitization Special Section if available */}
          {selectedGuide.dataSanitizationSteps && (
            <div className="p-5 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/30 space-y-3">
              <div className="flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-[#5B7866]" />
                <h4 className="font-serif text-base font-bold text-[#172D49]">
                  NIST SP 800-88 Compliant Sanitization Steps
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedGuide.dataSanitizationSteps.map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/80 text-[#172D49]">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA to Find Facilities */}
          <div className="pt-4 border-t border-[#172D49]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#172D49]/70">
              Ready to responsibly drop off this hardware?
            </span>
            <Link
              href="/e-waste/centres"
              className="px-5 py-2.5 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white text-xs font-display font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>Find Certified Collection Point</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F47C68]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
