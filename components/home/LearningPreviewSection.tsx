import React from "react";
import Link from "next/link";
import { BookOpen, Award, CheckCircle2, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function LearningPreviewSection() {
  const features = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#5B7866]" />,
      bg: "bg-[#DDE8DE]",
      title: "Structured Modules",
      desc: "7 deep-dive lessons spanning foundations, circular economy, and urban living.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#F47C68]" />,
      bg: "bg-[#FCD8D2]",
      title: "Knowledge Checks",
      desc: "Interactive 10-question evaluation with instant pedagogical explanations.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#172D49]" />,
      bg: "bg-[#E6DED0]",
      title: "Daily Action Checklist",
      desc: "Practical daily tasks stored in your browser to transform conscious habits into routine.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#F4EBDD]" />,
      bg: "bg-[#263B52]",
      title: "Community Mobilization",
      desc: "7-day collective challenge to inspire friends, classmates, and municipal networks.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-12 border border-[#172D49]/10 shadow-sm">
        <SectionHeading
          label="Holistic Curriculum"
          title="Move beyond awareness."
          highlight="Start making a difference."
          description="ECOLEARN equips learners with structured modules, critical thinking checkpoints, interactive daily challenges, and actionable campus research tools."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-2.5"
            >
              <div className={`w-10 h-10 rounded-xl ${feat.bg} flex items-center justify-center`}>
                {feat.icon}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#172D49]">
                {feat.title}
              </h4>
              <p className="text-xs text-[#172D49]/75 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Explore Learning Modules & Quiz</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
