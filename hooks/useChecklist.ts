"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import confetti from "canvas-confetti";
import { dailyActionsData } from "@/data/actions";

const STORAGE_KEY = "ecolearn_daily_checklist_v1";

export function useChecklist() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompletedIds(JSON.parse(saved));
      }
    } catch (e) {
      // LocalStorage access handling
    }
  }, []);

  const handleToggle = useCallback((id: string) => {
    setCompletedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      if (next.length === dailyActionsData.length) {
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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {}

      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setCompletedIds([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }, []);

  const filteredActions = useMemo(() => {
    return dailyActionsData.filter(
      (action) =>
        selectedCategory === "All" ||
        action.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  const totalCount = dailyActionsData.length;
  const completedCount = completedIds.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const totalPoints = useMemo(() => {
    return dailyActionsData
      .filter((action) => completedIds.includes(action.id))
      .reduce((sum, item) => sum + item.impactScore, 0);
  }, [completedIds]);

  return {
    isMounted,
    completedIds,
    selectedCategory,
    setSelectedCategory,
    filteredActions,
    totalCount,
    completedCount,
    progressPercent,
    totalPoints,
    handleToggle,
    handleReset,
  };
}
