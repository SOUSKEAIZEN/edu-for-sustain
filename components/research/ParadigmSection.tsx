import React from "react";

interface ParadigmProps {
  title: string;
  description: string;
  keyPoints: string[];
}

export default function ParadigmSection({
  title,
  description,
  keyPoints,
}: ParadigmProps) {
  return (
    <section className="bg-[#172D49] text-[#F4EBDD] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
      <div className="max-w-3xl space-y-2">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/15">
          Theoretical Conceptualization
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EBDD]">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-[#F4EBDD]/80 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {keyPoints.map((point, idx) => {
          const [boldPart, ...rest] = point.split(":");
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 space-y-1.5"
            >
              <span className="font-display text-[10px] font-bold text-[#F47C68] uppercase tracking-wider block">
                Pillar {idx + 1}
              </span>
              <h4 className="font-serif text-sm font-bold text-white">
                {boldPart}
              </h4>
              <p className="text-xs text-[#F4EBDD]/75 leading-relaxed">
                {rest.join(":")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
