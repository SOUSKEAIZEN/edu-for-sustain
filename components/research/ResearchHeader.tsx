import React from "react";
import { Users, Building2, GraduationCap } from "lucide-react";
import { Author } from "@/data/research";

interface ResearchHeaderProps {
  paperTitle: string;
  subtitle: string;
  authors: Author[];
  institution: string;
  location: string;
}

export default function ResearchHeader({
  paperTitle,
  subtitle,
  authors,
  institution,
  location,
}: ResearchHeaderProps) {
  return (
    <section className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-10 border border-[#172D49]/10 shadow-sm space-y-6">
      <div className="max-w-4xl space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#172D49] text-white">
            Academic Submission Paper
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-medium bg-[#E6DED0] text-[#172D49]">
            Higher Pedagogy & Policy Analysis
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172D49] leading-tight">
          {paperTitle}
        </h1>

        <p className="font-serif italic text-base sm:text-lg text-[#F47C68]">
          {subtitle}
        </p>
      </div>

      <div className="pt-4 border-t border-[#172D49]/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {authors.map((author, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs font-display font-bold text-[#F47C68] uppercase">
                <Users className="w-3 h-3" />
                <span>{author.role}</span>
              </div>
              <h4 className="font-serif text-sm font-bold text-[#172D49]">{author.name}</h4>
              <p className="text-xs text-[#172D49]/70 leading-tight">{author.institution}</p>
              <p className="text-[11px] text-[#172D49]/50">{author.location}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/20 text-xs text-[#172D49]">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-[#5B7866]" />
            <span className="font-bold">Affiliation:</span>
            <span>{institution}, {location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#5B7866]" />
            <span>Targeting UN SDG 4.7 & NEP 2020 Curricular Alignment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
