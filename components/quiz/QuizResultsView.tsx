import React from "react";
import { Award, RotateCcw } from "lucide-react";

interface QuizResultsViewProps {
  score: number;
  total: number;
  percentage: number;
  onRestart: () => void;
}

export default function QuizResultsView({
  score,
  total,
  percentage,
  onRestart,
}: QuizResultsViewProps) {
  return (
    <div className="text-center py-6 space-y-5">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F47C68] to-[#E46A55] text-white flex items-center justify-center mx-auto shadow-md">
        <Award className="w-8 h-8 text-white" />
      </div>

      <div className="space-y-1.5">
        <span className="font-display text-xs uppercase tracking-widest text-[#F47C68] font-bold">
          Knowledge Check Complete
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#172D49]">
          {percentage >= 80
            ? "Outstanding EfS Mastery!"
            : percentage >= 50
            ? "Solid Foundation!"
            : "Great Effort! Keep Exploring."}
        </h3>
        <p className="text-xs sm:text-sm text-[#172D49]/75">
          You answered <span className="font-bold">{score}</span> out of{" "}
          <span className="font-bold">{total}</span> questions correctly (
          <span className="font-bold text-[#F47C68]">{percentage}%</span>).
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#172D49]/10 max-w-sm mx-auto grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="font-display text-xl font-bold text-[#5B7866]">{score}</p>
          <p className="font-display text-[10px] text-[#172D49]/60 uppercase">Correct</p>
        </div>
        <div>
          <p className="font-display text-xl font-bold text-[#F47C68]">{total - score}</p>
          <p className="font-display text-[10px] text-[#172D49]/60 uppercase">Review</p>
        </div>
        <div>
          <p className="font-display text-xl font-bold text-[#172D49]">{percentage}%</p>
          <p className="font-display text-[10px] text-[#172D49]/60 uppercase">Score</p>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Retake Quiz</span>
        </button>
      </div>
    </div>
  );
}
