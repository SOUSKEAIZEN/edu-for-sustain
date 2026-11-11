"use client";

import { useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import { sevenDayChallenge } from "@/data/actions";

const CHALLENGE_KEY = "ecolearn_7day_challenge_v1";

export function useChallenge() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CHALLENGE_KEY);
      if (saved) {
        setCompletedDays(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const toggleDay = useCallback((dayNum: number) => {
    setCompletedDays((prev) => {
      const next = prev.includes(dayNum)
        ? prev.filter((d) => d !== dayNum)
        : [...prev, dayNum];

      if (next.length === sevenDayChallenge.length) {
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ["#172D49", "#F47C68", "#5B7866"],
          });
        } catch (e) {}
      }

      try {
        localStorage.setItem(CHALLENGE_KEY, JSON.stringify(next));
      } catch (e) {}

      return next;
    });
  }, []);

  const currentChallenge = sevenDayChallenge[activeDayIndex];
  const isDayDone = completedDays.includes(currentChallenge.day);

  return {
    activeDayIndex,
    setActiveDayIndex,
    completedDays,
    currentChallenge,
    isDayDone,
    toggleDay,
  };
}
