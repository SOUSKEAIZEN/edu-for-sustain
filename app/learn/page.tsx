"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ModuleModal from "@/components/ModuleModal";
import ModuleCard from "@/components/learn/ModuleCard";
import Quiz from "@/components/Quiz";
import { learningModules, LearningModule } from "@/data/learning";

const categories = ["All", "Foundations", "Ecological", "Circularity", "Society", "Action"];

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModule, setActiveModule] = useState<LearningModule | null>(null);
  const [completedModuleIds, setCompletedModuleIds] = useState<string[]>([]);

  const filteredModules = learningModules.filter(
    (mod) => selectedCategory === "All" || mod.category === selectedCategory
  );

  const handleToggleComplete = (id: string) => {
    setCompletedModuleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold tracking-wider uppercase bg-[#E6DED0] text-[#172D49] border border-[#172D49]/10">
          EfS Educational Curriculum
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#172D49]">
          The Learning <span className="text-[#F47C68]">Dashboard</span>
        </h1>

        <p className="text-sm sm:text-base text-[#172D49]/80 leading-relaxed font-sans">
          Step-by-step educational modules grounded in sustainability science, planetary boundaries, and regenerative practices.
        </p>

        <div className="pt-1 flex items-center justify-center">
          <div className="px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#172D49]/10 text-xs font-display font-bold text-[#172D49] flex items-center gap-1.5 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7866]" />
            <span>
              {completedModuleIds.length} of {learningModules.length} Modules Completed
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-display font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-[#172D49] text-white font-bold"
                  : "bg-white text-[#172D49] border border-[#172D49]/15 hover:bg-[#E6DED0]"
              }`}
            >
              {cat === "All" ? "All 7 Modules" : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((mod) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              isCompleted={completedModuleIds.includes(mod.id)}
              onOpen={(item) => setActiveModule(item)}
            />
          ))}
        </div>
      </div>

      <section id="quiz" className="scroll-mt-24 pt-4">
        <SectionHeading
          label="Knowledge Verification"
          title="The Sustainability"
          highlight="Mastery Quiz"
          description="Evaluate your comprehension across the three pillars, the UN SDGs, Indian policy instruments, and climate mechanics with this 10-question evaluation."
        />

        <Quiz />
      </section>

      <ModuleModal
        module={activeModule}
        onClose={() => setActiveModule(null)}
        onComplete={(id) => handleToggleComplete(id)}
        isCompleted={activeModule ? completedModuleIds.includes(activeModule.id) : false}
      />
    </div>
  );
}
