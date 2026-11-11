import React from "react";
import { CheckCircle2, XCircle, Info, ArrowLeft, ArrowRight } from "lucide-react";
import { QuizQuestion } from "@/data/quiz";

interface QuizQuestionViewProps {
  question: QuizQuestion;
  selectedIndex: number | undefined;
  hasSubmitted: boolean;
  isLastQuestion: boolean;
  canGoBack: boolean;
  onSelectOption: (idx: number) => void;
  onConfirm: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function QuizQuestionView({
  question,
  selectedIndex,
  hasSubmitted,
  isLastQuestion,
  canGoBack,
  onSelectOption,
  onConfirm,
  onNext,
  onPrev,
}: QuizQuestionViewProps) {
  return (
    <div className="space-y-6 pt-5">
      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49] leading-snug">
        {question.question}
      </h3>

      <div className="space-y-2.5">
        {question.options.map((option, idx) => {
          const isSelected = selectedIndex === idx;
          const isCorrect = idx === question.correctAnswer;

          let btnClass = "bg-white border-[#172D49]/15 text-[#172D49] hover:border-[#172D49]/40";

          if (hasSubmitted) {
            if (isCorrect) {
              btnClass = "bg-[#DDE8DE] border-[#5B7866] text-[#172D49] font-semibold";
            } else if (isSelected && !isCorrect) {
              btnClass = "bg-[#FCD8D2] border-[#F47C68] text-[#172D49]";
            }
          } else if (isSelected) {
            btnClass = "bg-[#263B52] border-[#263B52] text-[#F4EBDD] font-medium";
          }

          return (
            <button
              key={idx}
              onClick={() => onSelectOption(idx)}
              disabled={hasSubmitted}
              className={`w-full text-left p-3.5 rounded-2xl border text-sm transition-colors flex items-start gap-3 ${btnClass}`}
            >
              <span className="w-5 h-5 rounded-full bg-[#E6DED0] text-[#172D49] flex items-center justify-center text-xs font-display font-bold shrink-0 mt-0.5">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-grow">{option}</span>
              {hasSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-[#5B7866] shrink-0" />}
              {hasSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-[#F47C68] shrink-0" />}
            </button>
          );
        })}
      </div>

      {hasSubmitted && (
        <div className="p-4 rounded-2xl bg-[#E6DED0]/60 border border-[#172D49]/10 text-xs sm:text-sm text-[#172D49]/90 leading-relaxed">
          <div className="flex items-center gap-1.5 font-display font-bold uppercase tracking-wider text-xs text-[#172D49] mb-1">
            <Info className="w-3.5 h-3.5 text-[#F47C68]" />
            <span>Explanation:</span>
          </div>
          <p>{question.explanation}</p>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-[#172D49]/10 gap-3">
        <button
          onClick={onPrev}
          disabled={!canGoBack}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider text-[#172D49] disabled:opacity-30"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        {!hasSubmitted ? (
          <button
            onClick={onConfirm}
            disabled={selectedIndex === undefined}
            className="px-6 py-2 rounded-full bg-[#172D49] hover:bg-[#263B52] disabled:opacity-40 text-white font-display text-xs font-bold uppercase tracking-wider"
          >
            Confirm Answer
          </button>
        ) : (
          <button
            onClick={onNext}
            className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider"
          >
            <span>{isLastQuestion ? "Complete Quiz" : "Next Question"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
