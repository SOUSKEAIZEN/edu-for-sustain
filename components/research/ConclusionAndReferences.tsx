import React from "react";
import { BookOpen } from "lucide-react";

interface Reference {
  citation: string;
  year: string;
  source: string;
}

interface ConclusionAndReferencesProps {
  conclusion: string;
  references: Reference[];
}

export default function ConclusionAndReferences({
  conclusion,
  references,
}: ConclusionAndReferencesProps) {
  return (
    <section className="space-y-6">
      <div className="p-6 sm:p-10 rounded-3xl bg-[#172D49] text-white shadow-lg space-y-3">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68]">
          Research Synthesis
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EBDD]">
          Research Conclusion
        </h2>
        <p className="text-xs sm:text-sm text-[#F4EBDD]/85 leading-relaxed font-sans text-justify">
          {conclusion}
        </p>
      </div>

      <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#172D49]/10">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#172D49]">
              Academic References & Citations
            </h3>
            <p className="text-xs text-[#172D49]/70 mt-0.5">
              Authentic scholarly and policy literature cited within the submitted research report.
            </p>
          </div>
          <BookOpen className="w-5 h-5 text-[#F47C68]" />
        </div>

        <div className="space-y-2">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white border border-[#172D49]/10 text-xs text-[#172D49]/90 leading-relaxed flex items-start gap-2.5"
            >
              <span className="font-display font-bold text-[#F47C68] shrink-0">
                [{idx + 1}]
              </span>
              <div className="flex-grow space-y-0.5">
                <p>{ref.citation}</p>
                <p className="text-[10px] text-[#172D49]/60 font-display">
                  Source: {ref.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
