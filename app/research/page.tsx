import React from "react";
import ResearchHeader from "@/components/research/ResearchHeader";
import AbstractAndObjectives from "@/components/research/AbstractAndObjectives";
import ParadigmSection from "@/components/research/ParadigmSection";
import LiteratureReviewSection from "@/components/research/LiteratureReviewSection";
import SdgMappingTable from "@/components/research/SdgMappingTable";
import ChallengesAndOpportunities from "@/components/research/ChallengesAndOpportunities";
import ConclusionAndReferences from "@/components/research/ConclusionAndReferences";
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
    sdgMapping,
    challenges,
    opportunities,
    conclusion,
    references,
  } = researchPaperData;

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <ResearchHeader
        paperTitle={paperTitle}
        subtitle={subtitle}
        authors={authors}
        institution={institution}
        location={location}
      />
      <AbstractAndObjectives abstract={abstract} objectives={objectives} />
      <ParadigmSection
        title={sustainabilityParadigm.title}
        description={sustainabilityParadigm.description}
        keyPoints={sustainabilityParadigm.keyPoints}
      />
      <LiteratureReviewSection
        heading={literatureReview.heading}
        body={literatureReview.body}
        keyTheses={literatureReview.keyTheses}
      />
      <SdgMappingTable mapping={sdgMapping} />
      <ChallengesAndOpportunities
        challenges={challenges}
        opportunities={opportunities}
      />
      <ConclusionAndReferences
        conclusion={conclusion}
        references={references}
      />
    </div>
  );
}
