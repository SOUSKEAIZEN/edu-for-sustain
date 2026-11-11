import React from "react";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import { pillarsData } from "@/data/pillars";

export default function PillarsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="The Tripartite Foundation"
        title="The Three Interconnected"
        highlight="Pillars"
        description="Sustainability is not a single issue. It is a harmonious equilibrium between ecological health, human dignity, and regenerative economic prosperity."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillarsData.map((pillar) => (
          <PillarCard key={pillar.id} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}
