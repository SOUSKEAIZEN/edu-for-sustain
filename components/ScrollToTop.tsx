"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function ScrollToTop() {
  const visible = useScrollPosition(400);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#172D49] text-white shadow-lg hover:bg-[#F47C68] transition-colors border border-[#F4EBDD]/20 focus:outline-none focus:ring-2 focus:ring-[#F47C68]"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
