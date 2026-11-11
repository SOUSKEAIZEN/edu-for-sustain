import React from "react";
import { HelpCircle } from "lucide-react";

interface QuizProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
  category: string;
}

export default function QuizProgressBar({
  currentIndex,
  totalQuestions,
  category,
}: QuizProgressBarProps) {
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="pb-5 border-b border-[#172D49]/10">
      <div className="flex items-center justify-between mb-2.5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#E6DED0] text-[#172D49]">
          <HelpCircle className="w-3.5 h-3.5 text-[#F47C68]" />
          Question {currentIndex + 1} of {totalQuestions}
        </span>

        <span className="text-xs font-display font-semibold text-[#172D49]/70">
          Topic: {category}
        </span>
      </div>

      <div className="w-full h-2 rounded-full bg-[#E6DED0] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#263B52] via-[#F47C68] to-[#5B7866] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
