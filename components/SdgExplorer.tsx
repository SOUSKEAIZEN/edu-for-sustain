"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, Sparkles, ArrowLeft, RefreshCw, Layers } from "lucide-react";
import { sdgsData, SDG } from "@/data/sdgs";
import SdgCard from "./SdgCard";
import SdgModal from "./SdgModal";

const categories = ["All", "People", "Planet", "Prosperity", "Peace", "Partnership"] as const;

export default function SdgExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalSdg, setActiveModalSdg] = useState<SDG | null>(null);

  // Filtered SDGs
  const filteredSdgs = useMemo(() => {
    return sdgsData.filter((sdg) => {
      // Category match
      const categoryMatch =
        selectedCategory === "All" ||
        sdg.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search match
      const query = searchQuery.trim().toLowerCase();
      if (!query) return categoryMatch;

      const titleMatch = sdg.title.toLowerCase().includes(query);
      const numberMatch =
        sdg.number.includes(query) || sdg.id.toString() === query;
      const descMatch =
        sdg.shortDescription.toLowerCase().includes(query) ||
        sdg.fullDescription.toLowerCase().includes(query);
      const initiativeMatch = sdg.indianInitiatives.some(
        (init) =>
          init.name.toLowerCase().includes(query) ||
          init.description.toLowerCase().includes(query)
      );

      return categoryMatch && (titleMatch || numberMatch || descMatch || initiativeMatch);
    });
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="w-full">
      {/* Search & Filter Controls Bar */}
      <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-editorial mb-10">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#172D49]/10">
          {/* Search Box */}
          <div className="relative flex-grow max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#172D49]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search goals by keyword, number, or Indian scheme..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#172D49]/15 text-sm text-[#172D49] placeholder-[#172D49]/40 focus:outline-none focus:ring-2 focus:ring-[#F47C68] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#172D49]/60 hover:text-[#172D49]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result counter & Quick Reset */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs font-display text-[#172D49]/80">
            <span className="bg-[#E6DED0] px-3.5 py-1.5 rounded-full font-bold">
              Showing {filteredSdgs.length} of {sdgsData.length} Goals
            </span>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-[#F47C68] hover:underline font-bold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* 5 Ps Category Filter Pills */}
        <div className="pt-5">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-[#F47C68]" />
            <span className="font-display text-xs font-bold uppercase tracking-wider text-[#172D49]">
              Filter by UN 5 Ps Architecture:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-display font-medium tracking-wide transition-all ${
                    isActive
                      ? "bg-[#172D49] text-[#F4EBDD] shadow-md scale-105 font-bold"
                      : "bg-white text-[#172D49] border border-[#172D49]/15 hover:bg-[#E6DED0]"
                  }`}
                >
                  {cat === "All" ? "All 17 Goals" : cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of SDG Cards */}
      {filteredSdgs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSdgs.map((sdg) => (
            <SdgCard
              key={sdg.id}
              sdg={sdg}
              onSelect={(item) => setActiveModalSdg(item)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-[#FAF5EE] rounded-3xl p-12 text-center border border-[#172D49]/10 max-w-lg mx-auto">
          <Layers className="w-12 h-12 text-[#F47C68] mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-bold text-[#172D49] mb-2">
            No Sustainable Development Goals Match
          </h3>
          <p className="text-sm text-[#172D49]/70 mb-6">
            We couldn&apos;t find any SDGs matching &ldquo;{searchQuery}&rdquo; in the{" "}
            {selectedCategory} category.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-full bg-[#172D49] text-white hover:bg-[#F47C68] font-display text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Detail Modal */}
      <SdgModal
        sdg={activeModalSdg}
        onClose={() => setActiveModalSdg(null)}
      />
    </div>
  );
}
