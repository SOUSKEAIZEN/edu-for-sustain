import React from "react";
import SectionHeading from "@/components/SectionHeading";

interface Challenge {
  title: string;
  category: string;
  description: string;
  impact: string;
}

interface Opportunity {
  pillar: string;
  strategicAction: string;
  expectedOutcome: string;
}

interface ChallengesAndOpportunitiesProps {
  challenges: Challenge[];
  opportunities: Opportunity[];
}

export default function ChallengesAndOpportunities({
  challenges,
  opportunities,
}: ChallengesAndOpportunitiesProps) {
  return (
    <div className="space-y-16">
      {/* Challenges */}
      <section className="space-y-6">
        <SectionHeading
          label="Empirical Analysis"
          title="Systemic Challenges in"
          highlight="Existing Higher Education"
          description="Structural, pedagogical, and institutional bottlenecks identified in the study that inhibit widespread EfS adoption across Indian universities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((chal, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#FCD8D2] text-[#F47C68] font-display text-[10px] font-bold uppercase tracking-wider">
                  {chal.category} Deficit
                </span>
                <h4 className="font-serif text-base font-bold text-[#172D49]">
                  {chal.title}
                </h4>
                <p className="text-xs text-[#172D49]/80 leading-relaxed">
                  {chal.description}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-[#172D49]/10 text-[11px] text-[#172D49] leading-snug">
                <span className="font-bold text-[#F47C68] block mb-0.5">Downstream Impact:</span>
                {chal.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities */}
      <section className="bg-gradient-to-br from-[#FAF5EE] to-[#E6DED0] rounded-3xl p-6 sm:p-10 border border-[#172D49]/10 shadow-sm space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-white text-[#172D49]">
            Strategic Roadmap
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#172D49]">
            Actionable Opportunities & Future Directions
          </h2>
          <p className="text-xs sm:text-sm text-[#172D49]/80">
            Four high-impact strategic interventions proposed by the research authors to scale EfS across engineering and management colleges:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {opportunities.map((opp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-2"
            >
              <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#5B7866] block">
                Pathway {idx + 1}: {opp.pillar}
              </span>
              <h4 className="font-serif text-sm font-bold text-[#172D49]">
                Strategic Action:
              </h4>
              <p className="text-xs text-[#172D49]/80 leading-relaxed">
                {opp.strategicAction}
              </p>
              <div className="pt-1.5 border-t border-[#172D49]/10 text-xs text-[#5B7866] font-medium">
                🎯 Outcome: {opp.expectedOutcome}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
