"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  BarChart3,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  Filter,
  Lightbulb,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ModuleModal from "@/components/ModuleModal";
import Quiz from "@/components/Quiz";
import { learningModules, LearningModule } from "@/data/learning";

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModule, setActiveModule] = useState<LearningModule | null>(null);
  const [completedModuleIds, setCompletedModuleIds] = useState<string[]>([]);

  const categories = ["All", "Foundations", "Ecological", "Circularity", "Society", "Action"];

  const filteredModules = learningModules.filter(
    (mod) => selectedCategory === "All" || mod.category === selectedCategory
  );

  const handleToggleComplete = (id: string) => {
    setCompletedModuleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49] border border-[#172D49]/10">
          EfS Educational Curriculum
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#172D49]">
          The Learning <span className="text-[#F47C68]">Dashboard</span>
        </h1>

        <p className="text-base sm:text-lg text-[#172D49]/80 leading-relaxed font-sans">
          Step-by-step educational modules grounded in sustainability science, planetary boundaries, and regenerative practices. Read the lessons and test your comprehension.
        </p>

        {/* Progress Tracker Pill */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <div className="px-4 py-2 rounded-full bg-[#FAF5EE] border border-[#172D49]/10 text-xs font-display font-bold text-[#172D49] flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#5B7866]" />
            <span>
              {completedModuleIds.length} of {learningModules.length} Modules Completed
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-display font-medium tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-[#172D49] text-white shadow-md font-bold"
                  : "bg-white text-[#172D49] border border-[#172D49]/15 hover:bg-[#E6DED0]"
              }`}
            >
              {cat === "All" ? "All 7 Modules" : cat}
            </button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((mod) => {
            const isFinished = completedModuleIds.includes(mod.id);

            return (
              <div
                key={mod.id}
                className="bg-[#FAF5EE] rounded-3xl overflow-hidden border border-[#172D49]/10 shadow-editorial hover:shadow-float transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172D49]/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-display font-bold text-[#172D49] shadow-sm flex items-center gap-1.5">
                    <span>Module {mod.number}</span>
                  </div>

                  {isFinished && (
                    <div className="absolute top-4 right-4 bg-[#5B7866] text-white px-3 py-1 rounded-full text-xs font-display font-bold shadow-sm flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Completed</span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-display uppercase tracking-wider text-[#DDE8DE] block mb-1">
                      {mod.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-tight">
                      {mod.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="pt-3 border-t border-[#172D49]/10 flex items-center justify-between text-xs font-display text-[#172D49]/70">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F47C68]" />
                      {mod.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-3.5 h-3.5 text-[#5B7866]" />
                      {mod.difficulty}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModule(mod)}
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>{isFinished ? "Review Module" : "Start Learning"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE QUIZ SECTION
      ========================================================================= */}
      <section id="quiz" className="scroll-mt-24 pt-8">
        <SectionHeading
          label="Knowledge Verification"
          title="The Sustainability"
          highlight="Mastery Quiz"
          description="Evaluate your comprehension across the three pillars, the UN SDGs, Indian policy instruments, and climate mechanics with this 10-question evaluation."
        />

        <Quiz />
      </section>

      {/* Active Module Reader Modal */}
      <ModuleModal
        module={activeModule}
        onClose={() => setActiveModule(null)}
        onComplete={(id) => handleToggleComplete(id)}
        isCompleted={activeModule ? completedModuleIds.includes(activeModule.id) : false}
      />
    </div>
  );
}
