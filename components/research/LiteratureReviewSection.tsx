import React from "react";
import SectionHeading from "@/components/SectionHeading";

interface Thesis {
  author: string;
  year: string;
  contribution: string;
}

interface LiteratureReviewSectionProps {
  heading: string;
  body: string;
  keyTheses: Thesis[];
}

export default function LiteratureReviewSection({
  heading,
  body,
  keyTheses,
}: LiteratureReviewSectionProps) {
  return (
    <section className="space-y-6">
      <SectionHeading
        label="Academic Foundation"
        title="Literature Review &"
        highlight="Theoretical Synthesis"
        description={body}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyTheses.map((thesis, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-sm flex flex-col justify-between space-y-3"
          >
            <div className="space-y-1.5">
              <span className="px-2 py-0.5 rounded-full bg-[#E6DED0] text-[10px] font-display font-bold text-[#172D49]">
                {thesis.year}
              </span>
              <h4 className="font-serif text-base font-bold text-[#172D49]">
                {thesis.author}
              </h4>
              <p className="text-xs text-[#172D49]/80 leading-relaxed">
                {thesis.contribution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
