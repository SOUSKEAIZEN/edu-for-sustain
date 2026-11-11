import React from "react";
import { FileText, Target } from "lucide-react";

interface AbstractAndObjectivesProps {
  abstract: string;
  objectives: string[];
}

export default function AbstractAndObjectives({
  abstract,
  objectives,
}: AbstractAndObjectivesProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
          <FileText className="w-3.5 h-3.5" />
          <span>Abstract</span>
        </div>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
          Executive Research Summary
        </h2>

        <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed font-sans text-justify">
          {abstract}
        </p>
      </div>

      <div className="lg:col-span-5 bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#5B7866]">
          <Target className="w-3.5 h-3.5" />
          <span>Study Scope</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49]">
          Core Research Objectives
        </h3>

        <ul className="space-y-2.5 pt-1">
          {objectives.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#172D49]/80 leading-relaxed">
              <span className="w-4 h-4 rounded-full bg-[#E6DED0] text-[#172D49] font-display font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                {idx + 1}
              </span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
