import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface MappingItem {
  sdgNumber: string;
  sdgName: string;
  indianInitiative: string;
  ministry: string;
  focusArea: string;
}

export default function SdgMappingTable({ mapping }: { mapping: MappingItem[] }) {
  return (
    <section id="sdg-table" className="scroll-mt-24 space-y-4 sm:space-y-6">
      <SectionHeading
        label="National Policy Alignment"
        title="Mapping UN SDGs with"
        highlight="Indian Government Initiatives"
        description="Detailed analytical matrix mapping each target to active Union ministries, national missions, and empirical focus areas as documented in the research report."
      />

      {/* Mobile scroll hint */}
      <div className="flex items-center justify-end gap-1.5 text-[11px] font-display text-[#172D49]/60 md:hidden px-2">
        <span>Swipe table horizontally</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </div>

      <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#172D49]/10 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm min-w-[620px] md:min-w-full">
            <thead className="bg-[#172D49] text-[#F4EBDD] font-display uppercase tracking-wider text-[10px] sm:text-[11px]">
              <tr>
                <th className="py-3 px-3.5 sm:px-5">Goal</th>
                <th className="py-3 px-3.5 sm:px-5">SDG Title</th>
                <th className="py-3 px-3.5 sm:px-5">Mapped Indian Policy</th>
                <th className="py-3 px-3.5 sm:px-5 hidden md:table-cell">Nodal Ministry</th>
                <th className="py-3 px-3.5 sm:px-5">Core Operational Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#172D49]/10 font-sans">
              {mapping.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#FAF5EE] transition-colors">
                  <td className="py-2.5 sm:py-3 px-3.5 sm:px-5 font-display font-bold text-[#F47C68] whitespace-nowrap">
                    {item.sdgNumber}
                  </td>
                  <td className="py-2.5 sm:py-3 px-3.5 sm:px-5 font-serif font-bold text-[#172D49] whitespace-nowrap">
                    {item.sdgName}
                  </td>
                  <td className="py-2.5 sm:py-3 px-3.5 sm:px-5 font-medium text-[#172D49]">
                    {item.indianInitiative}
                  </td>
                  <td className="py-2.5 sm:py-3 px-3.5 sm:px-5 text-[#172D49]/70 hidden md:table-cell text-xs">
                    {item.ministry}
                  </td>
                  <td className="py-2.5 sm:py-3 px-3.5 sm:px-5 text-xs text-[#172D49]/80 leading-relaxed">
                    {item.focusArea}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
