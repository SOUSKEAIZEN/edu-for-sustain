import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Globe } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-[#FCD8D2] text-[#F47C68] flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8" />
        </div>

        <span className="font-display text-xs font-bold uppercase tracking-widest text-[#F47C68]">
          404 Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172D49]">
          Navigating Uncharted Territory
        </h1>

        <p className="text-sm text-[#172D49]/75 leading-relaxed">
          The educational resource or page you are looking for has been moved or does not exist. Let us guide you back to the core curriculum.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#172D49] hover:bg-[#F47C68] text-white font-display text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/sdgs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E6DED0] hover:bg-[#FAF5EE] text-[#172D49] font-display text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Explore SDGs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
