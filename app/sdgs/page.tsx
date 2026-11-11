import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Globe, Target } from "lucide-react";
import SdgExplorer from "@/components/SdgExplorer";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Interactive SDG Explorer — ECOLEARN",
  description:
    "Explore all 17 United Nations Sustainable Development Goals (SDGs) categorized by People, Planet, Prosperity, Peace, and Partnership, with mapped Indian government development initiatives.",
};

export default function SdgsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#172D49] hover:text-[#F47C68] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6DED0] text-xs font-display font-semibold text-[#172D49]">
          <Target className="w-3.5 h-3.5 text-[#F47C68]" />
          UN 2030 Agenda
        </span>
      </div>

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49] border border-[#172D49]/10">
          Global Sustainability Blueprint
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#172D49]">
          The 17 Sustainable <br />
          <span className="text-[#F47C68]">Development Goals</span>
        </h1>

        <p className="text-base sm:text-lg text-[#172D49]/80 leading-relaxed font-sans">
          A shared global roadmap for peace, dignity and planetary prosperity. Search, filter across the 5 Ps architecture, and discover how each goal aligns with national Indian missions and EfS education.
        </p>
      </div>

      {/* Main Interactive Explorer Component */}
      <SdgExplorer />
    </div>
  );
}
