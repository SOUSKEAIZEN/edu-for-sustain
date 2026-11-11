import React from "react";
import SectionHeading from "@/components/SectionHeading";

interface ChallengeItem {
  id: string;
  title: string;
  description: string;
}

const challenges: ChallengeItem[] = [
  {
    id: "01",
    title: "Climate Breakdown & Depletion",
    description: "Planetary heating and species loss demand systemic interventions, not peripheral flyers.",
  },
  {
    id: "02",
    title: "Siloed Curricula",
    description: "Fragmented subjects fail to link industrial economics to environmental and public health.",
  },
  {
    id: "03",
    title: "Deficit in Teacher Training",
    description: "Educators lack institutional training in systems dynamics and participatory pedagogy.",
  },
  {
    id: "04",
    title: "Unequal Resource Access",
    description: "Sustainability labs remain concentrated in premier institutes, leaving regional colleges behind.",
  },
  {
    id: "05",
    title: "The Digital Divide",
    description: "Rural learners face barriers accessing open environmental tools and clean-tech training.",
  },
  {
    id: "06",
    title: "Theory Without Practical Action",
    description: "Students memorize environmental statutes without conducting real community audits.",
  },
];

export default function ChallengesSection() {
  return (
    <section className="bg-[#172D49] text-[#F4EBDD] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Systemic Educational Crisis"
          title="Why Education for Sustainability"
          highlight="Matters Now"
          description="Our planet faces accelerating crises, yet mainstream curricula remain rooted in 20th-century extractive paradigms. Here are the core challenges EfS solves:"
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 space-y-2.5 transition-colors hover:border-[#F47C68]/50"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F47C68]/20 text-[#F47C68] flex items-center justify-center font-display font-bold text-xs">
                {item.id}
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-[#F4EBDD]/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
