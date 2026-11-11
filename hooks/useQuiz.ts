"use client";

import { useState, useCallback, useMemo } from "react";
import confetti from "canvas-confetti";
import { quizQuestions } from "@/data/quiz";

export function useQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [hasSubmitted, setHasSubmitted] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentIndex];

  const handleSelectOption = useCallback(
    (optionIndex: number) => {
      if (hasSubmitted[currentIndex]) return;
      setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
    },
    [currentIndex, hasSubmitted]
  );

  const handleConfirmAnswer = useCallback(() => {
    if (selectedAnswers[currentIndex] === undefined) return;
    setHasSubmitted((prev) => ({ ...prev, [currentIndex]: true }));
  }, [currentIndex, selectedAnswers]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#172D49", "#F47C68", "#5B7866"],
        });
      } catch (e) {
        // Safe fallback for canvas-confetti
      }
    }
  }, [currentIndex, totalQuestions]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setHasSubmitted({});
    setIsFinished(false);
  }, []);

  const score = useMemo(() => {
    return Object.entries(selectedAnswers).reduce((acc, [idxStr, ansIndex]) => {
      const qIdx = parseInt(idxStr, 10);
      return quizQuestions[qIdx]?.correctAnswer === ansIndex ? acc + 1 : acc;
    }, 0);
  }, [selectedAnswers]);

  const percentage = Math.round((score / totalQuestions) * 100);

  return {
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
  };
}
