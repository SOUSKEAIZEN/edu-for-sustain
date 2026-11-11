"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Clock, BarChart3, CheckCircle, Lightbulb, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    if (reflectionInput.trim()) {
      setReflectionSaved(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1E31]/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-3xl bg-[#FAF5EE] rounded-3xl shadow-2xl overflow-hidden border border-[#172D49]/15 z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header image banner */}
          <div className="relative h-48 sm:h-56 w-full shrink-0">
            <Image
              src={module.image}
              alt={module.title}
              fill
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
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#F47C68]">
                  Module {module.number}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-display font-medium bg-white/20 backdrop-blur-md flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {module.duration}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-display font-medium bg-white/20 backdrop-blur-md flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  {module.difficulty}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                {module.title}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Overview */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#172D49] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F47C68]" />
                Module Overview
              </h4>
              <p className="text-sm sm:text-base text-[#172D49]/80 leading-relaxed">
                {module.overview}
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-5 rounded-2xl bg-[#E6DED0]/60 border border-[#172D49]/10">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#172D49] mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#F47C68]" />
                Key Concept Takeaways
              </h4>
              <ul className="space-y-2">
                {module.keyTakeaways.map((takeaway, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172D49]/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F47C68] mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Structured Lesson Sections */}
            <div className="space-y-6">
              {module.sections.map((section, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#172D49]/10 shadow-sm space-y-3"
                >
                  <h4 className="font-serif text-xl font-bold text-[#172D49]">
                    {idx + 1}. {section.subtitle}
                  </h4>
                  <div className="space-y-2 text-sm text-[#172D49]/80 leading-relaxed">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.keyHighlight && (
                    <div className="mt-3 p-3.5 rounded-xl bg-[#FAF5EE] border-l-4 border-[#F47C68] text-xs font-medium text-[#172D49] italic">
                      &ldquo;{section.keyHighlight}&rdquo;
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Reflection Prompt */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#DDE8DE]/70 border border-[#5B7866]/30">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#5B7866] mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Critical Thinking Reflection Prompt
              </h4>
              <p className="font-serif text-base font-bold text-[#172D49] mb-4">
                &ldquo;{module.reflectionPrompt}&rdquo;
              </p>

              {reflectionSaved ? (
                <div className="p-4 rounded-xl bg-white/90 border border-[#5B7866]/30 text-xs sm:text-sm text-[#172D49] space-y-2">
                  <div className="flex items-center gap-2 text-[#5B7866] font-bold">
                    <CheckCircle className="w-4 h-4" />
                    Reflection noted in local study memory!
                  </div>
                  <p className="italic text-[#172D49]/80">&ldquo;{reflectionInput}&rdquo;</p>
                  <button
                    onClick={() => setReflectionSaved(false)}
                    className="text-[11px] text-[#F47C68] hover:underline pt-1 block"
                  >
                    Edit reflection
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSaveReflection} className="space-y-3">
                  <textarea
                    rows={3}
                    value={reflectionInput}
                    onChange={(e) => setReflectionInput(e.target.value)}
                    placeholder="Type your reflection here to deepen conceptual retention..."
                    className="w-full p-3 rounded-xl bg-white border border-[#172D49]/15 text-xs sm:text-sm text-[#172D49] focus:outline-none focus:ring-2 focus:ring-[#5B7866]"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!reflectionInput.trim()}
                      className="px-4 py-2 rounded-full bg-[#5B7866] hover:bg-[#445C4D] disabled:opacity-50 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Save Reflection
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#172D49]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-display text-[#172D49]/70">
                Educational Lesson • Education for Sustainability
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {onComplete && (
                  <button
                    onClick={() => {
                      onComplete(module.id);
                      onClose();
                    }}
                    className={`flex-1 sm:flex-none px-5 py-2.5 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isCompleted
                        ? "bg-[#5B7866] text-white"
                        : "bg-[#F47C68] hover:bg-[#E46A55] text-white shadow-sm"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{isCompleted ? "Marked as Completed" : "Mark as Completed"}</span>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close Lesson
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
