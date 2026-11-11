"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, RefreshCw, Layers } from "lucide-react";
import { sdgsData, SDG } from "@/data/sdgs";
import SdgCard from "./SdgCard";
import SdgModal from "./SdgModal";

const categories = ["All", "People", "Planet", "Prosperity", "Peace", "Partnership"] as const;

export default function SdgExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalSdg, setActiveModalSdg] = useState<SDG | null>(null);

  const filteredSdgs = useMemo(() => {
    return sdgsData.filter((sdg) => {
      const categoryMatch =
        selectedCategory === "All" ||
        sdg.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      if (!query) return categoryMatch;

      const titleMatch = sdg.title.toLowerCase().includes(query);
      const numberMatch = sdg.number.includes(query) || sdg.id.toString() === query;
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
      <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-7 border border-[#172D49]/10 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-5 border-b border-[#172D49]/10">
          <div className="relative flex-grow max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#172D49]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search goals by keyword, number, or Indian scheme..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-[#172D49]/15 text-xs sm:text-sm text-[#172D49] placeholder-[#172D49]/40 focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
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

          <div className="flex items-center justify-between md:justify-end gap-3 text-xs font-display text-[#172D49]/80">
            <span className="bg-[#E6DED0] px-3 py-1 rounded-full font-bold">
              Showing {filteredSdgs.length} of {sdgsData.length} Goals
            </span>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-[#F47C68] font-bold"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Filter className="w-3.5 h-3.5 text-[#F47C68]" />
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
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-medium transition-colors ${
                    isActive
                      ? "bg-[#172D49] text-[#F4EBDD] font-bold"
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

      {filteredSdgs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSdgs.map((sdg) => (
            <SdgCard
              key={sdg.id}
              sdg={sdg}
              onSelect={(item) => setActiveModalSdg(item)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-[#FAF5EE] rounded-3xl p-10 text-center border border-[#172D49]/10 max-w-md mx-auto space-y-3">
          <Layers className="w-10 h-10 text-[#F47C68] mx-auto" />
          <h3 className="font-serif text-xl font-bold text-[#172D49]">
            No Matching Goals Found
          </h3>
          <p className="text-xs text-[#172D49]/70">
            No SDGs matched &ldquo;{searchQuery}&rdquo; in the {selectedCategory} category.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-full bg-[#172D49] text-white font-display text-xs font-bold uppercase tracking-wider"
          >
            Clear Filters
          </button>
        </div>
      )}

      <SdgModal
        sdg={activeModalSdg}
        onClose={() => setActiveModalSdg(null)}
      />
    </div>
  );
}
