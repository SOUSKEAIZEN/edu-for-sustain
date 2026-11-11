import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl bg-[#172D49] text-white p-8 sm:p-14 lg:p-16 overflow-hidden text-center shadow-xl">
        <div className="relative z-10 max-w-3xl mx-auto space-y-5">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#263B52] text-[#F47C68] border border-[#F4EBDD]/15">
            Empowerment Through Knowledge
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EBDD] leading-tight">
            &ldquo;The future is not something we wait for. It&apos;s something we{" "}
            <span className="text-[#F47C68]">create.&rdquo;</span>
          </h2>

          <p className="text-sm sm:text-base text-[#F4EBDD]/80 leading-relaxed max-w-xl mx-auto font-sans">
            Join thousands of students and educators transforming sustainability from an abstract concept into everyday transformative action.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/learn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F47C68] hover:bg-[#E46A55] text-white font-display text-xs font-bold uppercase tracking-wider shadow-md transition-transform duration-150 hover:-translate-y-0.5"
            >
              <span>Start Learning Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/take-action"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#263B52] hover:bg-[#3A516B] text-[#F4EBDD] font-display text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Take Action Today</span>
              <ArrowUpRight className="w-4 h-4 text-[#F47C68]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
