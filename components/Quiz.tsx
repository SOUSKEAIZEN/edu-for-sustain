"use client";

import React from "react";
import { useQuiz } from "@/hooks/useQuiz";
import QuizProgressBar from "./quiz/QuizProgressBar";
import QuizQuestionView from "./quiz/QuizQuestionView";
import QuizResultsView from "./quiz/QuizResultsView";

export default function Quiz() {
  const {
    currentIndex,
    totalQuestions,
    currentQuestion,
    selectedAnswers,
    hasSubmitted,
    isFinished,
    score,
    percentage,
    handleSelectOption,
    handleConfirmAnswer,
    handleNext,
    handlePrev,
    handleRestart,
  } = useQuiz();

  return (
    <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#172D49]/10 shadow-sm max-w-2xl mx-auto">
      {!isFinished ? (
        <div>
          <QuizProgressBar
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            category={currentQuestion.category}
          />
          <QuizQuestionView
            question={currentQuestion}
            selectedIndex={selectedAnswers[currentIndex]}
            hasSubmitted={!!hasSubmitted[currentIndex]}
            isLastQuestion={currentIndex === totalQuestions - 1}
            canGoBack={currentIndex > 0}
            onSelectOption={handleSelectOption}
            onConfirm={handleConfirmAnswer}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      ) : (
        <QuizResultsView
          score={score}
          total={totalQuestions}
          percentage={percentage}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
