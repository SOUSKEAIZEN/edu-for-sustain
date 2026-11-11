import React from "react";
import AboutHero from "@/components/about/AboutHero";
import CoreThesis from "@/components/about/CoreThesis";
import ComparativeTable from "@/components/about/ComparativeTable";
import CognitiveCompetencies from "@/components/about/CognitiveCompetencies";
import LearningJourney from "@/components/about/LearningJourney";
import AcademicVision from "@/components/about/AcademicVision";

export const metadata = {
  title: "About EfS Framework — ECOLEARN",
  description:
    "Explore the theoretical foundation and educational philosophy of Education for Sustainability (EfS), authored by researchers at Manav Rachna University.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24 overflow-hidden">
      <AboutHero />
      <CoreThesis />
      <ComparativeTable />
      <CognitiveCompetencies />
      <LearningJourney />
      <AcademicVision />
    </div>
  );
}
