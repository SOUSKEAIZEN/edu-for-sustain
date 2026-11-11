import React from "react";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PillarsSection from "@/components/home/PillarsSection";
import ChallengesSection from "@/components/home/ChallengesSection";
import FeaturedSdgsSection from "@/components/home/FeaturedSdgsSection";
import LearningPreviewSection from "@/components/home/LearningPreviewSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "ECOLEARN — Education for Sustainability (EfS)",
  description:
    "Learn today. Sustain tomorrow. Building a sustainable future through education, awareness and meaningful action. Academic platform integrating the UN SDGs, the three pillars of sustainability, and experiential learning.",
};

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24 overflow-hidden">
      <HeroSection />
      <IntroSection />
      <PillarsSection />
      <ChallengesSection />
      <FeaturedSdgsSection />
      <LearningPreviewSection />
      <CtaSection />
    </div>
  );
}
