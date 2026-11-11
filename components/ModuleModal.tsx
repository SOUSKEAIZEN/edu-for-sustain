"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Clock, BarChart3, CheckCircle, Lightbulb, MessageSquare, Sparkles } from "lucide-react";
import { LearningModule } from "@/data/learning";

interface ModuleModalProps {
  module: LearningModule | null;
  onClose: () => void;
  onComplete?: (id: string) => void;
  isCompleted?: boolean;
}

export default function ModuleModal({
  module,
  onClose,
  onComplete,
  isCompleted = false,
}: ModuleModalProps) {
  const [reflectionInput, setReflectionInput] = useState("");
  const [reflectionSaved, setReflectionSaved] = useState(false);

  if (!module) return null;

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (reflectionInput.trim()) setReflectionSaved(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-[#0F1E31]/75 backdrop-blur-sm" />

      <div className="relative w-full max-w-3xl bg-[#FAF5EE] rounded-3xl shadow-xl overflow-hidden border border-[#172D49]/15 z-10 max-h-[92vh] flex flex-col">
        {/* Banner */}
        <div className="relative h-44 sm:h-52 w-full shrink-0 bg-[#E6DED0]">
          <Image
            src={module.image}
            alt={module.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172D49] via-[#172D49]/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors z-20"
            aria-label="Close lesson"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-display font-semibold uppercase bg-[#F47C68]">
                Module {module.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-display bg-white/20 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {module.duration}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-display bg-white/20 flex items-center gap-1">
                <BarChart3 className="w-3 h-3" />
                {module.difficulty}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">{module.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#172D49] mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F47C68]" />
              Module Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">{module.overview}</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#E6DED0]/60 border border-[#172D49]/10">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#172D49] mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#F47C68]" />
              Key Concept Takeaways
            </h4>
            <ul className="space-y-1.5">
              {module.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#172D49]/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F47C68] mt-1.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {module.sections.map((section, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-2">
                <h4 className="font-serif text-lg font-bold text-[#172D49]">
                  {idx + 1}. {section.subtitle}
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#172D49]/80 leading-relaxed">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
                {section.keyHighlight && (
                  <div className="p-3 rounded-xl bg-[#FAF5EE] border-l-4 border-[#F47C68] text-xs font-medium text-[#172D49] italic">
                    &ldquo;{section.keyHighlight}&rdquo;
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reflection */}
          <div className="p-4 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/30 space-y-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#5B7866] flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              Critical Reflection Prompt
            </h4>
            <p className="font-serif text-sm font-bold text-[#172D49]">&ldquo;{module.reflectionPrompt}&rdquo;</p>

            {reflectionSaved ? (
              <div className="p-3 rounded-xl bg-white/90 text-xs text-[#172D49] space-y-1">
                <div className="flex items-center gap-1.5 text-[#5B7866] font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Reflection noted in study memory!
                </div>
                <p className="italic">&ldquo;{reflectionInput}&rdquo;</p>
              </div>
            ) : (
              <form onSubmit={handleSaveReflection} className="space-y-2">
                <textarea
                  rows={2}
                  value={reflectionInput}
                  onChange={(e) => setReflectionInput(e.target.value)}
                  placeholder="Type your reflection here to deepen conceptual retention..."
                  className="w-full p-2.5 rounded-xl bg-white border border-[#172D49]/15 text-xs text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#5B7866]"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!reflectionInput.trim()}
                    className="px-3.5 py-1.5 rounded-full bg-[#5B7866] text-white font-display text-xs font-bold uppercase tracking-wider"
                  >
                    Save Reflection
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer actions */}
          <div className="pt-3 border-t border-[#172D49]/10 flex items-center justify-between gap-3">
            <span className="text-xs font-display text-[#172D49]/70">Educational Lesson • EfS</span>
            <div className="flex items-center gap-2">
              {onComplete && (
                <button
                  onClick={() => {
                    onComplete(module.id);
                    onClose();
                  }}
                  className={`px-4 py-2 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                    isCompleted ? "bg-[#5B7866] text-white" : "bg-[#F47C68] text-white"
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{isCompleted ? "Completed" : "Mark as Completed"}</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#172D49] text-white font-display text-xs font-bold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
