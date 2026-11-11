import React from "react";
import { TreePine, Users, Coins } from "lucide-react";

export default function CoreThesis() {
  const pillars = [
    {
      icon: <TreePine className="w-5 h-5 text-[#5B7866]" />,
      bg: "bg-[#DDE8DE]",
      title: "1. Ecological Integrity",
      desc: "Respecting thermodynamic limits, biogeochemical cycles, and biodiversity preservation.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#F47C68]" />,
      bg: "bg-[#FCD8D2]",
      title: "2. Social Equity & Dignity",
      desc: "Universal human rights, environmental justice, gender parity, and inclusive community participation.",
    },
    {
      icon: <Coins className="w-5 h-5 text-[#172D49]" />,
      bg: "bg-[#E6DED0]",
      title: "3. Regenerative Economics",
      desc: "Closed industrial nutrient cycles, cradle-to-cradle manufacturing, and circular value creation.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49]">
            The Core Thesis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172D49] leading-tight">
            Why Does Sustainability Belong in the <span className="text-[#F47C68]">Core Curriculum?</span>
          </h2>

          <p className="text-base text-[#172D49]/80 leading-relaxed font-sans">
            Traditional education arose during the industrial revolution to prepare individuals for linear tasks and resource extraction. In doing so, it created deep silos that divorced economic growth from ecological limits.
          </p>

          <p className="text-sm text-[#172D49]/75 leading-relaxed font-sans">
            Education for Sustainability (EfS) addresses this mismatch. By infusing ecological literacy, ethical decision-making, and critical inquiry into all disciplines, EfS empowers learners to construct circular, resilient solutions.
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF5EE] border-l-4 border-[#F47C68] space-y-1">
            <p className="font-serif text-sm font-bold text-[#172D49] italic">
              &ldquo;All education is environmental education. By what is included or omitted, students learn that they are either part of or apart from the natural world.&rdquo;
            </p>
            <p className="text-xs font-display text-[#172D49]/60 font-semibold">
              — Prof. David W. Orr
            </p>
          </div>
        </div>

        <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm space-y-4">
          <h3 className="font-serif text-xl font-bold text-[#172D49]">
            Core Pillars of EfS Learning
          </h3>
          <div className="space-y-3">
            {pillars.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#172D49]/10">
                <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#172D49]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#172D49]/75 leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
