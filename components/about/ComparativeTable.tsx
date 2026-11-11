import React from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ComparativeTable() {
  const traditionalPoints = [
    "Isolated Disciplines: Engineering, economics, and science taught independently without systems cohesion.",
    "Passive Transmission: Instructor lectures; students memorize statutory acts for end-of-term exams.",
    "Linear Economic Bias: Assumes nature is an infinite raw material source and limitless landfill.",
    "Individual Competition: Evaluates individual exam scores rather than collaborative problem-solving.",
  ];

  const efsPoints = [
    "Transdisciplinary Systems: Examines feedback loops, delays, and ecological-social interactions.",
    "Living Laboratories: Campus facilities, solar arrays, and wetlands used as research sites.",
    "Regenerative Economics: Promotes cradle-to-cradle products and circular resource flows.",
    "Civic Action Agency: Equips graduates with negotiation, ethical empathy, and collective impact skills.",
  ];

  return (
    <section className="bg-[#172D49] text-[#F4EBDD] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Comparative Pedagogy"
          title="Traditional Education vs."
          highlight="Education for Sustainability"
          description="Examine how the underlying assumptions, methodology, and aims of higher education transform under an EfS paradigm."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#263B52]/50 border border-[#F4EBDD]/15 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#F4EBDD]/15">
              <span className="px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider bg-white/10 text-[#F4EBDD]">
                Conventional Model
              </span>
              <span className="text-xs font-display text-[#F47C68]">Linear & Siloed</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white">
              Traditional Rote Education
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#F4EBDD]/80">
              {traditionalPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F47C68] mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#263B52] to-[#172D49] border-2 border-[#F47C68] shadow-md space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#F4EBDD]/20">
              <span className="px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#F47C68] text-white">
                Modern Paradigm
              </span>
              <span className="text-xs font-display text-[#DDE8DE] font-semibold">
                Holistic & Action-Centered
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white">
              Education for Sustainability (EfS)
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#F4EBDD]">
              {efsPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7866] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
