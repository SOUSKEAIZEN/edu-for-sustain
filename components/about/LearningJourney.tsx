import React from "react";
import SectionHeading from "@/components/SectionHeading";

interface JourneyStage {
  step: string;
  title: string;
  desc: string;
  accent: string;
}

const journeyStages: JourneyStage[] = [
  {
    step: "01",
    title: "Awakening",
    desc: "Deconstruct linear worldview. Discover planetary boundaries and the 17 SDGs.",
    accent: "#172D49",
  },
  {
    step: "02",
    title: "Inquiry",
    desc: "Trace supply chains, life cycle impacts, and evaluate socioeconomic inequities.",
    accent: "#263B52",
  },
  {
    step: "03",
    title: "Systems Mapping",
    desc: "Model dynamic feedback loops between environment, society, and municipal policies.",
    accent: "#5B7866",
  },
  {
    step: "04",
    title: "Living Lab Action",
    desc: "Implement hands-on campus audits (energy, food waste, water) with empirical data.",
    accent: "#F47C68",
  },
  {
    step: "05",
    title: "Civic Leadership",
    desc: "Institutionalize long-term policy reform and mobilize community networks.",
    accent: "#E46A55",
  },
];

export default function LearningJourney() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="Pedagogical Architecture"
        title="The 5-Stage EfS"
        highlight="Learning Journey"
        description="How students progress from basic environmental curiosity to strategic, sustained ecological leadership."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {journeyStages.map((item, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span
                className="font-display text-xl sm:text-2xl font-bold block mb-1.5"
                style={{ color: item.accent }}
              >
                {item.step}
              </span>
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#172D49] mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-[#172D49]/75 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-2.5 mt-2.5 border-t border-[#172D49]/10 text-[10px] font-display font-semibold uppercase tracking-wider text-[#172D49]/60">
              Phase {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
