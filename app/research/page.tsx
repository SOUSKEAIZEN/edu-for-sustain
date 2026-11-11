import React from "react";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Building2,
  Users,
  Target,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Scale,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { researchPaperData } from "@/data/research";

export const metadata = {
  title: "Academic Research & SDG Policy Mapping — ECOLEARN",
  description:
    "Education for Sustainability: Integrating Ecological Integrity, Social Equity, and Economic Resilience into Higher Pedagogy. Academic research from Manav Rachna University, Faridabad.",
};

export default function ResearchPage() {
  const {
    paperTitle,
    subtitle,
    institution,
    location,
    authors,
    abstract,
    objectives,
    sustainabilityParadigm,
    literatureReview,
    comparativeAnalysis,
    sdgMapping,
    challenges,
    opportunities,
    conclusion,
    references,
  } = researchPaperData;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* =========================================================================
          RESEARCH HEADER & PAPER METADATA
      ========================================================================= */}
      <section className="relative bg-[#FAF5EE] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#172D49]/10 shadow-editorial space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#172D49] text-white">
              Academic Submission Paper
            </span>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-medium bg-[#E6DED0] text-[#172D49]">
              Higher Pedagogy & Policy Analysis
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#172D49] leading-tight">
            {paperTitle}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#F47C68]">
            {subtitle}
          </p>
        </div>

        {/* Authors & Institutional Affiliation Banner */}
        <div className="pt-6 border-t border-[#172D49]/15">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {authors.map((author, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-1"
              >
                <div className="flex items-center gap-2 text-xs font-display font-bold text-[#F47C68] uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  <span>{author.role}</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#172D49]">
                  {author.name}
                </h4>
                <p className="text-xs text-[#172D49]/70 leading-snug">
                  {author.institution}
                </p>
                <p className="text-[11px] text-[#172D49]/50">{author.location}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/20 text-xs text-[#172D49]">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#5B7866]" />
              <span className="font-bold">Affiliation:</span>
              <span>{institution}, {location}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#5B7866]" />
              <span>Targeting UN SDG 4.7 & NEP 2020 Curricular Alignment</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABSTRACT & RESEARCH OBJECTIVES
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Abstract */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#172D49]/10 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#F47C68]">
            <FileText className="w-4 h-4" />
            <span>Abstract</span>
          </div>

          <h2 className="font-serif text-2xl font-bold text-[#172D49]">
            Executive Research Summary
          </h2>

          <p className="text-sm sm:text-base text-[#172D49]/80 leading-relaxed font-sans text-justify">
            {abstract}
          </p>
        </div>

        {/* Research Objectives */}
        <div className="lg:col-span-5 bg-[#FAF5EE] rounded-3xl p-8 sm:p-10 border border-[#172D49]/10 shadow-editorial space-y-4">
          <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#5B7866]">
            <Target className="w-4 h-4" />
            <span>Study Scope</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#172D49]">
            Core Research Objectives
          </h3>

          <ul className="space-y-3 pt-2">
            {objectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#172D49]/80 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#E6DED0] text-[#172D49] font-display font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                  {idx + 1}
                </span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================================
          THE SUSTAINABILITY PARADIGM SHIFT
      ========================================================================= */}
      <section className="bg-[#172D49] text-[#F4EBDD] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/15">
            Theoretical Conceptualization
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F4EBDD]">
            {sustainabilityParadigm.title}
          </h2>
          <p className="text-sm sm:text-base text-[#F4EBDD]/80 leading-relaxed">
            {sustainabilityParadigm.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sustainabilityParadigm.keyPoints.map((point, idx) => {
            const [boldPart, ...rest] = point.split(":");
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#263B52]/50 border border-[#F4EBDD]/15 space-y-2"
              >
                <span className="font-display text-xs font-bold text-[#F47C68] uppercase tracking-wider block">
                  Pillar {idx + 1}
                </span>
                <h4 className="font-serif text-base font-bold text-white">
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

      {/* =========================================================================
          LITERATURE REVIEW SUMMARY
      ========================================================================= */}
      <section className="space-y-8">
        <SectionHeading
          label="Academic Foundation"
          title="Literature Review &"
          highlight="Theoretical Synthesis"
          description={literatureReview.body}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {literatureReview.keyTheses.map((thesis, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-editorial transition-all"
            >
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E6DED0] text-[11px] font-display font-bold text-[#172D49]">
                  {thesis.year}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#172D49]">
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

      {/* =========================================================================
          MAPPING TABLE: UN SDGs WITH INDIAN GOVERNMENT INITIATIVES
      ========================================================================= */}
      <section id="sdg-table" className="scroll-mt-24 space-y-8">
        <SectionHeading
          label="National Policy Alignment"
          title="Mapping UN SDGs with"
          highlight="Indian Government Initiatives"
          description="Detailed analytical matrix mapping each target to active Union ministries, national missions, and empirical focus areas as documented in the research report."
        />

        <div className="bg-white rounded-3xl overflow-hidden border border-[#172D49]/10 shadow-editorial">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#172D49] text-[#F4EBDD] font-display uppercase tracking-wider text-xs">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Goal</th>
                  <th className="py-4 px-4 sm:px-6">SDG Title</th>
                  <th className="py-4 px-4 sm:px-6">Mapped Indian Policy / Mission</th>
                  <th className="py-4 px-4 sm:px-6 hidden md:table-cell">Nodal Ministry</th>
                  <th className="py-4 px-4 sm:px-6">Core Operational Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#172D49]/10 font-sans">
                {sdgMapping.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#FAF5EE] transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 font-display font-bold text-[#F47C68] whitespace-nowrap">
                      {item.sdgNumber}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-serif font-bold text-[#172D49] whitespace-nowrap">
                      {item.sdgName}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-[#172D49]">
                      {item.indianInitiative}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#172D49]/70 hidden md:table-cell">
                      {item.ministry}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-xs text-[#172D49]/80 leading-relaxed">
                      {item.focusArea}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHALLENGES IN EXISTING EDUCATION SYSTEMS
      ========================================================================= */}
      <section className="space-y-8">
        <SectionHeading
          label="Empirical Analysis"
          title="Systemic Challenges in"
          highlight="Existing Higher Education"
          description="Structural, pedagogical, and institutional bottlenecks identified in the study that inhibit widespread EfS adoption across Indian universities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((chal, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#FAF5EE] border border-[#172D49]/10 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FCD8D2] text-[#F47C68] font-display text-[11px] font-bold uppercase tracking-wider">
                  {chal.category} Deficit
                </span>
                <h4 className="font-serif text-lg font-bold text-[#172D49]">
                  {chal.title}
                </h4>
                <p className="text-xs text-[#172D49]/80 leading-relaxed">
                  {chal.description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#172D49]/10 text-[11px] text-[#172D49] leading-snug">
                <span className="font-bold text-[#F47C68] block mb-0.5">Downstream Impact:</span>
                {chal.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PROPOSED OPPORTUNITIES & FUTURE ROADMAP
      ========================================================================= */}
      <section className="bg-gradient-to-br from-[#FAF5EE] to-[#E6DED0] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#172D49]/10 shadow-editorial space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-white text-[#172D49]">
            Strategic Roadmap
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172D49]">
            Actionable Opportunities & Future Directions
          </h2>
          <p className="text-sm sm:text-base text-[#172D49]/80">
            Four high-impact strategic interventions proposed by the research authors to scale EfS across engineering and management colleges:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {opportunities.map((opp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-3"
            >
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[#5B7866] block">
                Pathway {idx + 1}: {opp.pillar}
              </span>
              <h4 className="font-serif text-base font-bold text-[#172D49]">
                Strategic Action:
              </h4>
              <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
                {opp.strategicAction}
              </p>

              <div className="pt-2 border-t border-[#172D49]/10 text-xs text-[#5B7866] font-medium">
                🎯 Expected Outcome: {opp.expectedOutcome}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CONCLUSION & REFERENCES
      ========================================================================= */}
      <section className="space-y-8">
        {/* Conclusion Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#172D49] text-white shadow-xl space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68]">
            Research Synthesis
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EBDD]">
            Research Conclusion
          </h2>
          <p className="text-sm sm:text-base text-[#F4EBDD]/85 leading-relaxed font-sans text-justify">
            {conclusion}
          </p>
        </div>

        {/* Authentic Citations Table */}
        <div className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-10 border border-[#172D49]/10 shadow-editorial space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#172D49]/10">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#172D49]">
                Academic References & Citations
              </h3>
              <p className="text-xs text-[#172D49]/70 mt-1">
                Authentic scholarly and policy literature cited within the submitted research report.
              </p>
            </div>
            <BookOpen className="w-6 h-6 text-[#F47C68]" />
          </div>

          <div className="space-y-3">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#172D49]/10 text-xs text-[#172D49]/90 leading-relaxed flex items-start gap-3"
              >
                <span className="font-display font-bold text-[#F47C68] shrink-0">
                  [{idx + 1}]
                </span>
                <div className="flex-grow space-y-1">
                  <p>{ref.citation}</p>
                  <p className="text-[11px] text-[#172D49]/60 font-display">
                    Source: {ref.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
