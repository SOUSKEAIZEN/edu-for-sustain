"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Award,
  Sparkles,
  Info,
} from "lucide-react";
import { quizQuestions } from "@/data/quiz";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState<Record<number, boolean>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  const handleSelectOption = (optionIndex: number) => {
    if (hasSubmittedAnswer[currentIndex]) return; // locked once checked
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleCheckAnswer = () => {
    if (selectedAnswers[currentIndex] === undefined) return;
    setHasSubmittedAnswer((prev) => ({
      ...prev,
      [currentIndex]: true,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      // Fire celebration confetti!
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#172D49", "#F47C68", "#5B7866", "#FCC30B"],
        });
      } catch (err) {
        // Safe fallback if canvas is not available
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setHasSubmittedAnswer({});
    setQuizFinished(false);
  };

  // Compute final score
  const score = Object.entries(selectedAnswers).reduce((acc, [idxStr, ansIndex]) => {
    const qIdx = parseInt(idxStr, 10);
    if (quizQuestions[qIdx]?.correctAnswer === ansIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-10 border border-[#172D49]/10 shadow-editorial max-w-3xl mx-auto">
      {!quizFinished ? (
        <div>
          {/* Header & Progress */}
          <div className="pb-6 border-b border-[#172D49]/10">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#E6DED0] text-[#172D49]">
                <HelpCircle className="w-3.5 h-3.5 text-[#F47C68]" />
                Question {currentIndex + 1} of {totalQuestions}
              </span>

              <span className="text-xs font-display font-semibold text-[#172D49]/70">
                Pillar Topic: {currentQ.category}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-[#E6DED0] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#263B52] via-[#F47C68] to-[#5B7866] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Prompt */}
          <div className="py-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#172D49] leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;
              const isChecked = hasSubmittedAnswer[currentIndex];
              const isCorrect = optIdx === currentQ.correctAnswer;

              let optionStyle =
                "bg-white border-[#172D49]/15 text-[#172D49] hover:border-[#172D49]/40";

              if (isChecked) {
                if (isCorrect) {
                  optionStyle =
                    "bg-[#DDE8DE] border-[#5B7866] text-[#172D49] font-semibold";
                } else if (isSelected && !isCorrect) {
                  optionStyle =
                    "bg-[#FCD8D2] border-[#F47C68] text-[#172D49]";
                }
              } else if (isSelected) {
                optionStyle =
                  "bg-[#263B52] border-[#263B52] text-[#F4EBDD] shadow-sm font-medium";
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isChecked}
                  className={`w-full text-left p-4 rounded-2xl border text-sm transition-all flex items-start gap-3.5 ${optionStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-display font-bold shrink-0 mt-0.5 ${
                      isSelected && !isChecked
                        ? "bg-[#F47C68] text-white"
                        : isChecked && isCorrect
                        ? "bg-[#5B7866] text-white"
                        : "bg-[#E6DED0] text-[#172D49]"
                    }`}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="flex-grow">{option}</span>

                  {isChecked && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-[#5B7866] shrink-0" />
                  )}
                  {isChecked && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-[#F47C68] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {hasSubmittedAnswer[currentIndex] && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#E6DED0]/60 border border-[#172D49]/15 mb-6 animate-fadeIn">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#172D49]">
                <Info className="w-4 h-4 text-[#F47C68]" />
                Pedagogical Explanation
              </div>
              <p className="text-xs sm:text-sm text-[#172D49]/90 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Control Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-[#172D49]/10 gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-[#172D49] hover:bg-[#E6DED0] disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {!hasSubmittedAnswer[currentIndex] ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={selectedAnswers[currentIndex] === undefined}
                  className="px-6 py-2.5 rounded-full bg-[#172D49] hover:bg-[#263B52] disabled:opacity-40 text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Confirm Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>{currentIndex < totalQuestions - 1 ? "Next Question" : "Complete Quiz"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Finished Summary */
        <div className="text-center py-6 sm:py-8 space-y-6 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F47C68] to-[#E46A55] text-white flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-2">
            <span className="font-display text-xs uppercase tracking-widest text-[#F47C68] font-bold">
              Knowledge Check Complete
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#172D49]">
              {percentage >= 80
                ? "Outstanding EfS Mastery!"
                : percentage >= 50
                ? "Solid Sustainability Foundation!"
                : "Great Effort! Keep Exploring."}
            </h3>
            <p className="text-sm text-[#172D49]/75 max-w-md mx-auto">
              You scored <span className="font-bold text-[#172D49]">{score}</span> out of{" "}
              <span className="font-bold text-[#172D49]">{totalQuestions}</span> questions correctly (
              <span className="font-bold text-[#F47C68]">{percentage}%</span>).
            </p>
          </div>

          {/* Score metric card */}
          <div className="p-6 rounded-2xl bg-white border border-[#172D49]/10 max-w-md mx-auto shadow-sm grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-display text-2xl font-bold text-[#5B7866]">{score}</p>
              <p className="font-display text-[11px] text-[#172D49]/60 uppercase tracking-wider">
                Correct
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[#F47C68]">
                {totalQuestions - score}
              </p>
              <p className="font-display text-[11px] text-[#172D49]/60 uppercase tracking-wider">
                Review Needed
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[#172D49]">{percentage}%</p>
              <p className="font-display text-[11px] text-[#172D49]/60 uppercase tracking-wider">
                Score
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#172D49] hover:bg-[#263B52] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
